(() => {
    "use strict";

    const APP_KEY = "personalPlannerSuite_v5";
    const FOCUS_KEY = "personalPlannerSuite_focus_mode_v1";
    const ACTIVE_SESSION_KEY = "personalPlannerSuite_activeSession_v1";
    const SPONTAN_KEY = "personalPlannerSuite_spontan_v1";

    const $ = id => document.getElementById(id);
    const normalize = value => String(value ?? "")
        .toLocaleLowerCase("de-DE")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ß/g, "ss")
        .trim();

    const escapeHtml = value => String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const id = prefix => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

    function readJson(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            return parsed ?? fallback;
        } catch {
            return fallback;
        }
    }

    function writeJson(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    }

    function plannerState() {
        const value = readJson(APP_KEY, null);
        return value && Array.isArray(value.plans) ? value : { plans: [] };
    }

    function planMinutes(plan) {
        return Array.isArray(plan?.items)
            ? plan.items.reduce((sum, item) => sum + Math.max(0, Number(item?.duration) || 0), 0)
            : 0;
    }

    function durationLabel(minutes) {
        const value = Math.max(0, Math.round(Number(minutes) || 0));
        if (value < 60) return `${value} Min`;
        const hours = Math.floor(value / 60);
        const rest = value % 60;
        return rest ? `${hours} h ${rest} min` : `${hours} h`;
    }

    function focusEnabled() {
        return localStorage.getItem(FOCUS_KEY) === "1";
    }

    function syncFocusClass() {
        document.documentElement.classList.toggle("v65-focus-mode", focusEnabled());
    }

    syncFocusClass();
    window.addEventListener("storage", syncFocusClass);
    document.addEventListener("click", () => setTimeout(syncFocusClass, 0), true);

    // --------------------------------------------------
    // Refresh: important for the iPhone kiosk/web-app mode.
    // --------------------------------------------------

    function hardRefresh() {
        const url = new URL(window.location.href);
        url.searchParams.set("refresh", Date.now().toString());
        window.location.replace(url.toString());
    }

    function addRefreshButton(container, idValue) {
        if (!container || $(idValue)) return;
        const button = document.createElement("button");
        button.id = idValue;
        button.type = "button";
        button.className = "menu-link v65-refresh-button";
        button.textContent = "Aktualisieren";
        button.addEventListener("click", hardRefresh);
        container.appendChild(button);
    }

    addRefreshButton(document.querySelector("#focusMenuPanel .focus-menu-content"), "v65FocusRefresh");
    addRefreshButton(document.querySelector("#textsMenuPanel .texts-study-menu-content"), "v65MainRefresh");

    // --------------------------------------------------
    // Shared overlay shell helpers.
    // --------------------------------------------------

    function hideFocusSuggestions() {
        const input = $("focusSearchInput");
        const suggestions = $("focusSuggestions");
        if (input) input.value = "";
        if (suggestions) {
            suggestions.innerHTML = "";
            suggestions.classList.add("hidden");
        }
        input?.blur();
        $("focusMenuPanel")?.classList.add("hidden");
    }

    function buildOverlay(idValue, className, html) {
        let overlay = $(idValue);
        if (overlay) return overlay;
        overlay = document.createElement("section");
        overlay.id = idValue;
        overlay.className = `v65-overlay ${className} hidden`;
        overlay.innerHTML = html;
        document.body.appendChild(overlay);
        return overlay;
    }

    // --------------------------------------------------
    // Fokus -> Planer: simple plan list, no image hub.
    // --------------------------------------------------

    const plannerOverlay = buildOverlay(
        "v65Planner",
        "v65-planner",
        `
            <header class="v65-topbar">
                <button class="v65-back" id="v65PlannerBack" type="button" aria-label="Zurück">‹</button>
                <div class="v65-topbar-title">Planer</div>
                <button class="v65-top-action" id="v65PlannerNew" type="button">Neu</button>
            </header>
            <main class="v65-page">
                <button id="v65PlannerResume" class="v65-resume hidden" type="button">
                    <span>Laufenden Plan fortsetzen</span><span>›</span>
                </button>
                <div id="v65PlannerEmpty" class="v65-empty hidden">Noch keine Pläne.</div>
                <div id="v65PlannerList" class="v65-plan-list"></div>
            </main>
        `
    );

    function plannerOverlayVisible() {
        return !plannerOverlay.classList.contains("hidden");
    }

    function closePlannerOverlay() {
        plannerOverlay.classList.add("hidden");
        const plannerHub = $("plannerHubScreen");
        if (plannerHub?.classList.contains("active") && focusEnabled()) {
            $("backFromPlannerHub")?.click();
        }
    }

    function renderFocusPlanner() {
        const state = plannerState();
        const list = $("v65PlannerList");
        const empty = $("v65PlannerEmpty");
        const resume = $("v65PlannerResume");
        if (!list || !empty || !resume) return;

        const activeSession = readJson(ACTIVE_SESSION_KEY, null);
        resume.classList.toggle("hidden", !activeSession);
        list.innerHTML = "";
        empty.classList.toggle("hidden", state.plans.length > 0);

        state.plans.forEach((plan, index) => {
            const row = document.createElement("div");
            row.className = "v65-plan-row";
            row.innerHTML = `
                <button class="v65-plan-start" type="button">
                    <span class="v65-plan-name">${escapeHtml(plan.name || "Unbenannter Plan")}</span>
                    <span class="v65-plan-meta">${plan.items?.length || 0} Blöcke · ${escapeHtml(durationLabel(planMinutes(plan)))}</span>
                </button>
                <button class="v65-plan-edit" type="button" aria-label="Plan bearbeiten">•••</button>
            `;
            row.querySelector(".v65-plan-start")?.addEventListener("click", () => startNativePlan(index, plan));
            row.querySelector(".v65-plan-edit")?.addEventListener("click", () => editNativePlan(index));
            list.appendChild(row);
        });
    }

    function openFocusPlanner() {
        hideFocusSuggestions();
        renderFocusPlanner();
        plannerOverlay.classList.remove("hidden");
        window.scrollTo(0, 0);
    }

    function nativePlanRows() {
        return [...document.querySelectorAll("#plansList .plan-row")];
    }

    function revealNativePlans() {
        $("plannerPlansButton")?.click();
    }

    function startNativePlan(index, plan) {
        if (readJson(ACTIVE_SESSION_KEY, null)) {
            window.alert("Es läuft bereits ein Plan. Beende oder führe ihn zuerst fort.");
            return;
        }

        plannerOverlay.classList.add("hidden");
        revealNativePlans();
        requestAnimationFrame(() => {
            const row = nativePlanRows()[index];
            if (!row) {
                openFocusPlanner();
                return;
            }
            row.querySelector(".heart-button")?.click();
            requestAnimationFrame(() => {
                $("plannerBlackHoleHotspot")?.click();
            });
        });
    }

    function editNativePlan(index) {
        plannerOverlay.classList.add("hidden");
        revealNativePlans();
        requestAnimationFrame(() => {
            const row = nativePlanRows()[index];
            row?.querySelector(".row-main-button")?.click();
        });
    }

    $("v65PlannerBack")?.addEventListener("click", closePlannerOverlay);
    $("v65PlannerNew")?.addEventListener("click", () => {
        plannerOverlay.classList.add("hidden");
        $("addPlanButton")?.click();
    });
    $("v65PlannerResume")?.addEventListener("click", () => {
        plannerOverlay.classList.add("hidden");
        $("plannerBlackHoleHotspot")?.click();
    });

    const plannerHub = $("plannerHubScreen");
    if (plannerHub) {
        new MutationObserver(() => {
            if (plannerHub.classList.contains("active") && focusEnabled()) {
                openFocusPlanner();
            }
        }).observe(plannerHub, { attributes: true, attributeFilter: ["class"] });
    }

    // --------------------------------------------------
    // Focus session: front = plain clock, back stays functional.
    // --------------------------------------------------

    const sessionFront = $("sessionFront");
    const nativeTimer = $("sessionTimer");
    let frontClock = $("v65SessionFrontClock");
    if (sessionFront && !frontClock) {
        frontClock = document.createElement("div");
        frontClock.id = "v65SessionFrontClock";
        frontClock.className = "v65-session-front-clock";
        frontClock.textContent = nativeTimer?.textContent || "00:00";
        sessionFront.appendChild(frontClock);
    }

    function syncFrontClock() {
        if (frontClock && nativeTimer) frontClock.textContent = nativeTimer.textContent || "00:00";
    }
    syncFrontClock();
    if (nativeTimer) {
        new MutationObserver(syncFrontClock).observe(nativeTimer, { childList: true, subtree: true, characterData: true });
    }
    window.setInterval(syncFrontClock, 500);

    // --------------------------------------------------
    // Spontan: day blocks + independent countdown timer.
    // --------------------------------------------------

    function defaultSpontanState() {
        return { version: 1, days: {}, active: null };
    }

    function normalizeSpontanState(raw) {
        const state = raw && typeof raw === "object" ? raw : defaultSpontanState();
        if (!state.days || typeof state.days !== "object") state.days = {};
        if (!Object.prototype.hasOwnProperty.call(state, "active")) state.active = null;
        return state;
    }

    let spontanState = normalizeSpontanState(readJson(SPONTAN_KEY, defaultSpontanState()));
    let spontanDate = startOfDay(new Date());
    let spontanEditingId = null;
    let spontanTick = null;

    const spontanOverlay = buildOverlay(
        "v65Spontan",
        "v65-spontan",
        `
            <header class="v65-topbar">
                <button class="v65-back" id="v65SpontanBack" type="button" aria-label="Zurück">‹</button>
                <div class="v65-topbar-title">Spontan</div>
                <button class="v65-top-action" id="v65SpontanAdd" type="button">Neu</button>
            </header>
            <main class="v65-page v65-spontan-page">
                <div class="v65-day-nav">
                    <button id="v65SpontanPrevious" type="button" aria-label="Vorheriger Tag">‹</button>
                    <button id="v65SpontanToday" type="button"><span id="v65SpontanDateLabel"></span><small id="v65SpontanSummary"></small></button>
                    <button id="v65SpontanNext" type="button" aria-label="Nächster Tag">›</button>
                </div>
                <div id="v65SpontanEmpty" class="v65-empty hidden">Noch keine Blöcke. Tippe oben auf „Neu“.</div>
                <div id="v65SpontanList" class="v65-block-list"></div>
            </main>

            <div id="v65SpontanEditor" class="v65-sheet hidden" role="dialog" aria-modal="true" aria-label="Block bearbeiten">
                <button class="v65-sheet-backdrop" id="v65SpontanEditorBackdrop" type="button" aria-label="Schließen"></button>
                <form class="v65-sheet-card" id="v65SpontanForm">
                    <div class="v65-sheet-handle"></div>
                    <h2 id="v65SpontanEditorTitle">Neuer Block</h2>
                    <label>Name<input id="v65SpontanName" type="text" autocomplete="off" required maxlength="100"></label>
                    <label>Dauer in Minuten<input id="v65SpontanDuration" type="number" inputmode="numeric" min="1" max="1440" step="1" required></label>
                    <label>Notiz<textarea id="v65SpontanNote" rows="4" maxlength="1000"></textarea></label>
                    <div class="v65-sheet-actions">
                        <button id="v65SpontanDelete" class="v65-danger hidden" type="button">Löschen</button>
                        <button class="v65-primary" type="submit">Speichern</button>
                    </div>
                </form>
            </div>

            <div id="v65SpontanTimer" class="v65-timer-view hidden">
                <header class="v65-topbar v65-timer-topbar">
                    <button class="v65-back" id="v65SpontanTimerBack" type="button" aria-label="Zurück">‹</button>
                    <div class="v65-topbar-title" id="v65SpontanTimerName">Block</div>
                    <div class="v65-topbar-spacer"></div>
                </header>
                <div class="v65-timer-center">
                    <div id="v65SpontanClock" class="v65-spontan-clock">00:00</div>
                    <div class="v65-timer-controls">
                        <button id="v65SpontanPause" type="button">Pause</button>
                        <button id="v65SpontanFinish" type="button">Fertig</button>
                    </div>
                </div>
            </div>
        `
    );

    function saveSpontan() {
        writeJson(SPONTAN_KEY, spontanState);
    }

    function startOfDay(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function addDays(date, amount) {
        const copy = startOfDay(date);
        copy.setDate(copy.getDate() + amount);
        return copy;
    }

    function dateKey(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }

    function blocksFor(date = spontanDate) {
        const key = dateKey(date);
        if (!Array.isArray(spontanState.days[key])) spontanState.days[key] = [];
        return spontanState.days[key];
    }

    function formatSpontanDate(date) {
        const today = startOfDay(new Date());
        const diff = Math.round((startOfDay(date) - today) / 86400000);
        const base = new Intl.DateTimeFormat("de-DE", { weekday: "long", day: "numeric", month: "long" }).format(date);
        if (diff === 0) return `Heute · ${base}`;
        if (diff === 1) return `Morgen · ${base}`;
        if (diff === -1) return `Gestern · ${base}`;
        return base;
    }

    function renderSpontan() {
        const list = $("v65SpontanList");
        const empty = $("v65SpontanEmpty");
        const label = $("v65SpontanDateLabel");
        const summary = $("v65SpontanSummary");
        if (!list || !empty || !label || !summary) return;

        const blocks = blocksFor();
        label.textContent = formatSpontanDate(spontanDate);
        const total = blocks.reduce((sum, block) => sum + Math.max(0, Number(block.duration) || 0), 0);
        const open = blocks.filter(block => !block.done).reduce((sum, block) => sum + Math.max(0, Number(block.duration) || 0), 0);
        summary.textContent = blocks.length ? `${durationLabel(total)} geplant · ${durationLabel(open)} offen` : "Tag frei gestalten";
        empty.classList.toggle("hidden", blocks.length > 0);
        list.innerHTML = "";

        blocks.forEach((block, index) => {
            const row = document.createElement("div");
            row.className = `v65-block-row${block.done ? " done" : ""}`;
            row.innerHTML = `
                <button class="v65-block-done" type="button" aria-label="${block.done ? "Als offen markieren" : "Als erledigt markieren"}">${block.done ? "✓" : ""}</button>
                <button class="v65-block-main" type="button">
                    <span class="v65-block-name">${escapeHtml(block.name)}</span>
                    <span class="v65-block-meta">${escapeHtml(durationLabel(block.duration))}${block.note ? ` · ${escapeHtml(block.note)}` : ""}</span>
                </button>
                <div class="v65-block-order">
                    <button class="v65-block-up" type="button" ${index === 0 ? "disabled" : ""} aria-label="Nach oben">↑</button>
                    <button class="v65-block-down" type="button" ${index === blocks.length - 1 ? "disabled" : ""} aria-label="Nach unten">↓</button>
                </div>
                <button class="v65-block-edit" type="button" aria-label="Bearbeiten">•••</button>
            `;

            row.querySelector(".v65-block-main")?.addEventListener("click", () => startSpontanTimer(block));
            row.querySelector(".v65-block-done")?.addEventListener("click", () => {
                block.done = !block.done;
                saveSpontan();
                renderSpontan();
            });
            row.querySelector(".v65-block-up")?.addEventListener("click", () => moveSpontanBlock(index, index - 1));
            row.querySelector(".v65-block-down")?.addEventListener("click", () => moveSpontanBlock(index, index + 1));
            row.querySelector(".v65-block-edit")?.addEventListener("click", () => openSpontanEditor(block));
            list.appendChild(row);
        });
    }

    function moveSpontanBlock(from, to) {
        const blocks = blocksFor();
        if (to < 0 || to >= blocks.length || from === to) return;
        const [moved] = blocks.splice(from, 1);
        blocks.splice(to, 0, moved);
        saveSpontan();
        renderSpontan();
    }

    function openSpontan() {
        hideFocusSuggestions();
        spontanState = normalizeSpontanState(readJson(SPONTAN_KEY, defaultSpontanState()));
        spontanOverlay.classList.remove("hidden");
        if (spontanState.active) {
            const activeDate = parseDateKey(spontanState.active.date);
            if (activeDate) spontanDate = activeDate;
            showSpontanTimer();
        } else {
            $("v65SpontanTimer")?.classList.add("hidden");
            renderSpontan();
        }
        window.scrollTo(0, 0);
    }

    function closeSpontan() {
        spontanOverlay.classList.add("hidden");
        closeSpontanEditor();
    }

    function parseDateKey(key) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(key || ""))) return null;
        const [y, m, d] = key.split("-").map(Number);
        return new Date(y, m - 1, d);
    }

    function openSpontanEditor(block = null) {
        spontanEditingId = block?.id || null;
        $("v65SpontanEditorTitle").textContent = block ? "Block bearbeiten" : "Neuer Block";
        $("v65SpontanName").value = block?.name || "";
        $("v65SpontanDuration").value = block?.duration || 30;
        $("v65SpontanNote").value = block?.note || "";
        $("v65SpontanDelete")?.classList.toggle("hidden", !block);
        $("v65SpontanEditor")?.classList.remove("hidden");
        setTimeout(() => $("v65SpontanName")?.focus(), 40);
    }

    function closeSpontanEditor() {
        $("v65SpontanEditor")?.classList.add("hidden");
        spontanEditingId = null;
    }

    function saveSpontanForm(event) {
        event.preventDefault();
        const name = $("v65SpontanName")?.value.trim();
        const duration = Math.round(Number($("v65SpontanDuration")?.value));
        const note = $("v65SpontanNote")?.value.trim() || "";
        if (!name) {
            $("v65SpontanName")?.focus();
            return;
        }
        if (!Number.isFinite(duration) || duration < 1) {
            $("v65SpontanDuration")?.focus();
            return;
        }

        const blocks = blocksFor();
        if (spontanEditingId) {
            const block = blocks.find(item => item.id === spontanEditingId);
            if (block) Object.assign(block, { name, duration, note });
        } else {
            blocks.push({ id: id("spontan"), name, duration, note, done: false });
        }
        saveSpontan();
        closeSpontanEditor();
        renderSpontan();
    }

    function deleteSpontanBlock() {
        if (!spontanEditingId) return;
        const blocks = blocksFor();
        const index = blocks.findIndex(item => item.id === spontanEditingId);
        if (index >= 0) blocks.splice(index, 1);
        if (spontanState.active?.blockId === spontanEditingId) spontanState.active = null;
        saveSpontan();
        closeSpontanEditor();
        renderSpontan();
    }

    function activeSpontanBlock() {
        const active = spontanState.active;
        if (!active) return null;
        const date = parseDateKey(active.date);
        if (!date) return null;
        return (spontanState.days[active.date] || []).find(block => block.id === active.blockId) || null;
    }

    function startSpontanTimer(block) {
        const milliseconds = Math.max(1, Number(block.duration) || 1) * 60000;
        spontanState.active = {
            date: dateKey(spontanDate),
            blockId: block.id,
            running: true,
            remaining: milliseconds,
            endAt: Date.now() + milliseconds
        };
        saveSpontan();
        showSpontanTimer();
    }

    function showSpontanTimer() {
        const active = spontanState.active;
        const block = activeSpontanBlock();
        if (!active || !block) {
            spontanState.active = null;
            saveSpontan();
            $("v65SpontanTimer")?.classList.add("hidden");
            renderSpontan();
            return;
        }

        $("v65SpontanTimerName").textContent = block.name;
        $("v65SpontanTimer")?.classList.remove("hidden");
        updateSpontanClock();
        startSpontanTick();
    }

    function activeRemaining() {
        const active = spontanState.active;
        if (!active) return 0;
        return active.running
            ? Math.max(0, Number(active.endAt) - Date.now())
            : Math.max(0, Number(active.remaining) || 0);
    }

    function formatCountdown(milliseconds) {
        const total = Math.max(0, Math.ceil(milliseconds / 1000));
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const seconds = total % 60;
        return hours > 0
            ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
            : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function updateSpontanClock() {
        const active = spontanState.active;
        const clock = $("v65SpontanClock");
        const pause = $("v65SpontanPause");
        if (!active || !clock || !pause) return;
        const remaining = activeRemaining();
        clock.textContent = formatCountdown(remaining);
        pause.textContent = active.running ? "Pause" : "Fortsetzen";
        if (active.running && remaining <= 0) completeSpontanTimer(true);
    }

    function startSpontanTick() {
        if (spontanTick) clearInterval(spontanTick);
        spontanTick = setInterval(updateSpontanClock, 250);
    }

    function toggleSpontanPause() {
        const active = spontanState.active;
        if (!active) return;
        if (active.running) {
            active.remaining = activeRemaining();
            active.running = false;
            active.endAt = null;
        } else {
            active.running = true;
            active.endAt = Date.now() + Math.max(0, Number(active.remaining) || 0);
        }
        saveSpontan();
        updateSpontanClock();
    }

    function completeSpontanTimer(automatic = false) {
        const block = activeSpontanBlock();
        if (block) block.done = true;
        spontanState.active = null;
        saveSpontan();
        if (spontanTick) {
            clearInterval(spontanTick);
            spontanTick = null;
        }
        $("v65SpontanTimer")?.classList.add("hidden");
        renderSpontan();
        if (automatic && navigator.vibrate) navigator.vibrate([120, 70, 120]);
    }

    function leaveSpontanTimer() {
        $("v65SpontanTimer")?.classList.add("hidden");
        renderSpontan();
    }

    $("v65SpontanBack")?.addEventListener("click", closeSpontan);
    $("v65SpontanAdd")?.addEventListener("click", () => openSpontanEditor());
    $("v65SpontanPrevious")?.addEventListener("click", () => { spontanDate = addDays(spontanDate, -1); renderSpontan(); });
    $("v65SpontanNext")?.addEventListener("click", () => { spontanDate = addDays(spontanDate, 1); renderSpontan(); });
    $("v65SpontanToday")?.addEventListener("click", () => { spontanDate = startOfDay(new Date()); renderSpontan(); });
    $("v65SpontanForm")?.addEventListener("submit", saveSpontanForm);
    $("v65SpontanEditorBackdrop")?.addEventListener("click", closeSpontanEditor);
    $("v65SpontanDelete")?.addEventListener("click", deleteSpontanBlock);
    $("v65SpontanPause")?.addEventListener("click", toggleSpontanPause);
    $("v65SpontanFinish")?.addEventListener("click", () => completeSpontanTimer(false));
    $("v65SpontanTimerBack")?.addEventListener("click", leaveSpontanTimer);

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && spontanState.active) updateSpontanClock();
    });

    // --------------------------------------------------
    // Focus search routing: Filme != YouTube; add Spontan.
    // --------------------------------------------------

    const focusInput = $("focusSearchInput");
    const focusSuggestions = $("focusSuggestions");

    const customApps = [
        {
            id: "youtube",
            name: "YouTube",
            aliases: ["youtube", "yt", "video", "videos", "kanal", "kanaele"]
        },
        {
            id: "spontan",
            name: "Spontan",
            aliases: ["spontan", "spontaner tag", "tagesplan", "block", "bloecke", "timer", "countdown", "jetzt"]
        }
    ];

    function customScore(app, rawQuery) {
        const query = normalize(rawQuery);
        if (!query) return Infinity;
        const name = normalize(app.name);
        const aliases = app.aliases.map(normalize);
        if (name === query) return 0;
        if (name.startsWith(query)) return 1;
        if (aliases.includes(query)) return 2;
        if (aliases.some(alias => alias.startsWith(query))) return 3;
        if (name.includes(query)) return 5;
        if (aliases.some(alias => alias.includes(query))) return 6;
        return Infinity;
    }

    let augmentingFocus = false;
    function augmentFocus() {
        if (!focusInput || !focusSuggestions || augmentingFocus) return;
        augmentingFocus = true;
        try {
            focusSuggestions.querySelectorAll("[data-v65-app]").forEach(node => node.remove());
            const query = focusInput.value;
            if (!query.trim()) return;

            const matches = customApps
                .map(app => ({ app, score: customScore(app, query) }))
                .filter(item => Number.isFinite(item.score))
                .sort((a, b) => a.score - b.score || a.app.name.localeCompare(b.app.name, "de"));

            const normalizedQuery = normalize(query);
            const youtubeIntent = ["youtube", "yt", "video", "videos", "kanal", "kanaele"]
                .some(alias => alias === normalizedQuery || alias.startsWith(normalizedQuery) || normalizedQuery.startsWith(alias));
            if (youtubeIntent) {
                [...focusSuggestions.querySelectorAll(".focus-suggestion")].forEach(button => {
                    const name = button.querySelector(".focus-suggestion-name")?.textContent?.trim();
                    if (name === "Filme" && !button.dataset.v65App) button.remove();
                });
            }

            matches.forEach(({ app }) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "focus-suggestion v65-focus-suggestion";
                button.dataset.v65App = app.id;
                button.innerHTML = `<span class="focus-suggestion-name">${escapeHtml(app.name)}</span>`;
                button.addEventListener("pointerdown", event => event.preventDefault());
                focusSuggestions.appendChild(button);
            });

            if (matches.length) {
                focusSuggestions.classList.remove("hidden");
                const firstCustom = focusSuggestions.querySelector("[data-v65-app]");
                const best = matches[0];
                if (firstCustom && best.score <= 3 && (best.score <= 1 || !focusSuggestions.querySelector(".focus-suggestion.active:not([data-v65-app])"))) {
                    focusSuggestions.querySelectorAll(".focus-suggestion.active").forEach(button => button.classList.remove("active"));
                    firstCustom.classList.add("active");
                }
                if (youtubeIntent && firstCustom) {
                    focusSuggestions.querySelectorAll(".focus-suggestion.active").forEach(button => button.classList.remove("active"));
                    firstCustom.classList.add("active");
                }
            } else if (!focusSuggestions.querySelector(".focus-suggestion")) {
                focusSuggestions.classList.add("hidden");
            }
        } finally {
            augmentingFocus = false;
        }
    }

    function openFilmReviews() {
        hideFocusSuggestions();
        $("openFilmsButton")?.click();
    }

    function openYoutubeFromFocus() {
        hideFocusSuggestions();
        $("filmRoomCameraHotspot")?.click();
    }

    function routeFocus(idValue) {
        if (idValue === "planner") openFocusPlanner();
        else if (idValue === "films") openFilmReviews();
        else if (idValue === "youtube") openYoutubeFromFocus();
        else if (idValue === "spontan") openSpontan();
    }

    function routeableSuggestion(button) {
        if (!button) return null;
        if (button.dataset.v65App) return button.dataset.v65App;
        const name = button.querySelector(".focus-suggestion-name")?.textContent?.trim();
        if (name === "Planer") return "planner";
        if (name === "Filme") return "films";
        return null;
    }

    if (focusSuggestions) {
        new MutationObserver(() => {
            if (!augmentingFocus) queueMicrotask(augmentFocus);
        }).observe(focusSuggestions, { childList: true });
    }

    focusInput?.addEventListener("input", () => setTimeout(augmentFocus, 0));
    focusInput?.addEventListener("focus", () => setTimeout(augmentFocus, 0));

    document.addEventListener("click", event => {
        const suggestion = event.target.closest?.(".focus-suggestion");
        const route = routeableSuggestion(suggestion);
        if (!route) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        routeFocus(route);
    }, true);

    focusInput?.addEventListener("keydown", event => {
        if (event.key !== "Enter") return;
        augmentFocus();
        const active = focusSuggestions?.querySelector(".focus-suggestion.active")
            || focusSuggestions?.querySelector("[data-v65-app]");
        let route = routeableSuggestion(active);
        const q = normalize(focusInput.value);
        if (!route && customScore(customApps[0], q) <= 1) route = "youtube";
        if (!route && customScore(customApps[1], q) <= 1) route = "spontan";
        if (!route) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        routeFocus(route);
    }, true);

    // Re-render focus planner when plan storage changes in another context.
    window.addEventListener("storage", event => {
        if (event.key === APP_KEY && plannerOverlayVisible()) renderFocusPlanner();
        if (event.key === SPONTAN_KEY && !spontanOverlay.classList.contains("hidden")) {
            spontanState = normalizeSpontanState(readJson(SPONTAN_KEY, defaultSpontanState()));
            renderSpontan();
        }
    });
})();
