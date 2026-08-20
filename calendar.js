(() => {
    "use strict";

    const STORAGE_KEY = "personalPlannerCalendar_v1";
    const PLANNER_KEY = "personalPlannerSuite_v5";
    const ACTIVE_PLAN_KEY = "personalPlannerSuite_activePlanId_v1";
    const START_HOUR = 6;
    const END_HOUR = 24;
    const HOUR_HEIGHT = 64;

    const KIND_INFO = {
        study: { label: "Studium", color: "var(--calendar-study)" },
        appointment: { label: "Termin", color: "var(--calendar-appointment)" },
        deadline: { label: "Deadline", color: "var(--calendar-deadline)" },
        personal: { label: "Privat", color: "var(--calendar-personal)" },
        plan: { label: "Plan", color: "var(--calendar-plan)" }
    };

    const $ = id => document.getElementById(id);

    const el = {
        back: $("calendarBack"),
        periodTitle: $("calendarPeriodTitle"),
        eyebrow: $("calendarEyebrow"),
        previous: $("calendarPrevious"),
        next: $("calendarNext"),
        today: $("calendarToday"),
        newEvent: $("calendarNewEvent"),
        summary: $("calendarSummary"),
        filters: $("calendarFilters"),
        monthView: $("monthView"),
        monthGrid: $("monthGrid"),
        agendaTitle: $("agendaTitle"),
        agendaList: $("agendaList"),
        agendaAdd: $("agendaAdd"),
        weekView: $("weekView"),
        weekAllDay: $("weekAllDay"),
        weekTimeline: $("weekTimeline"),
        dayView: $("dayView"),
        dayHeader: $("dayHeader"),
        dayAllDay: $("dayAllDay"),
        dayTimeline: $("dayTimeline"),
        searchButton: $("calendarSearchButton"),
        searchPanel: $("calendarSearchPanel"),
        searchInput: $("calendarSearchInput"),
        searchClose: $("calendarSearchClose"),
        searchResults: $("calendarSearchResults"),
        moreButton: $("calendarMoreButton"),
        menu: $("calendarMenu"),
        menuBackdrop: $("calendarMenuBackdrop"),
        importButton: $("calendarImport"),
        exportButton: $("calendarExport"),
        jumpNextDeadline: $("calendarJumpNextDeadline"),
        clearButton: $("calendarClear"),
        importFile: $("calendarImportFile"),
        sheet: $("eventSheet"),
        sheetBackdrop: $("eventSheetBackdrop"),
        sheetTitle: $("eventSheetTitle"),
        form: $("eventForm"),
        id: $("eventId"),
        title: $("eventTitle"),
        kindButtons: [...document.querySelectorAll(".calendar-kind-grid button")],
        planField: $("eventPlanField"),
        plan: $("eventPlan"),
        planDuration: $("eventPlanDuration"),
        date: $("eventDate"),
        allDay: $("eventAllDay"),
        timeFields: $("eventTimeFields"),
        start: $("eventStart"),
        end: $("eventEnd"),
        repeat: $("eventRepeat"),
        repeatUntilField: $("eventRepeatUntilField"),
        repeatUntil: $("eventRepeatUntil"),
        location: $("eventLocation"),
        note: $("eventNote"),
        doneField: $("eventDoneField"),
        done: $("eventDone"),
        meta: $("eventMeta"),
        cancel: $("eventCancel"),
        save: $("eventSave"),
        duplicate: $("eventDuplicate"),
        delete: $("eventDelete"),
        toast: $("calendarToast")
    };

    let state = loadState();
    let plannerState = readPlannerState();
    let view = state.settings?.view || "month";
    let cursor = startOfDay(new Date());
    let selectedDate = startOfDay(new Date());
    let selectedKind = "study";
    let filter = new Set(state.settings?.filters || Object.keys(KIND_INFO));
    let toastTimer = null;

    applyPlannerTheme();
    populatePlanSelect();
    bindEvents();
    renderAll();

    function defaultState() {
        return {
            version: 1,
            events: [],
            settings: {
                view: "month",
                filters: Object.keys(KIND_INFO)
            }
        };
    }

    function normalizeEvent(raw) {
        const kind = KIND_INFO[raw?.kind] ? raw.kind : "appointment";
        const date = validDateString(raw?.date) ? raw.date : toDateKey(new Date());
        const allDay = Boolean(raw?.allDay) || kind === "deadline";
        let start = validTime(raw?.start) ? raw.start : "09:00";
        let end = validTime(raw?.end) ? raw.end : addMinutesToTime(start, 60);

        if (!allDay && timeToMinutes(end) <= timeToMinutes(start)) {
            end = addMinutesToTime(start, 60);
        }

        const repeat = ["none", "daily", "weekly"].includes(raw?.repeat) ? raw.repeat : "none";
        const repeatUntil = validDateString(raw?.repeatUntil) ? raw.repeatUntil : "";

        return {
            id: String(raw?.id || createId()),
            title: String(raw?.title || "Ohne Titel").trim().slice(0, 120),
            kind,
            date,
            allDay,
            start,
            end,
            repeat,
            repeatUntil,
            location: String(raw?.location || "").slice(0, 120),
            note: String(raw?.note || "").slice(0, 1000),
            done: Boolean(raw?.done),
            planId: raw?.planId ? String(raw.planId) : "",
            createdAt: Number(raw?.createdAt) || Date.now(),
            updatedAt: Number(raw?.updatedAt) || Date.now()
        };
    }

    function loadState() {
        try {
            const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
            if (!raw || !Array.isArray(raw.events)) return defaultState();
            const settings = raw.settings || {};
            return {
                version: 1,
                events: raw.events.map(normalizeEvent),
                settings: {
                    view: ["month", "week", "day"].includes(settings.view) ? settings.view : "month",
                    filters: Array.isArray(settings.filters) && settings.filters.length
                        ? settings.filters.filter(kind => KIND_INFO[kind])
                        : Object.keys(KIND_INFO)
                }
            };
        } catch {
            return defaultState();
        }
    }

    function saveState() {
        state.settings = {
            view,
            filters: [...filter]
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {
            showToast("Kalender konnte nicht gespeichert werden");
        }
    }

    function readPlannerState() {
        try {
            const parsed = JSON.parse(localStorage.getItem(PLANNER_KEY) || "null");
            return parsed && Array.isArray(parsed.plans) ? parsed : { plans: [], settings: {} };
        } catch {
            return { plans: [], settings: {} };
        }
    }

    function applyPlannerTheme() {
        const theme = plannerState?.settings?.theme;
        if (theme === "dark" || theme === "light") {
            document.documentElement.dataset.theme = theme;
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.content = theme === "dark" ? "#111210" : "#f6f6f2";
        }
    }

    function populatePlanSelect() {
        plannerState = readPlannerState();
        el.plan.innerHTML = "";

        const empty = document.createElement("option");
        empty.value = "";
        empty.textContent = plannerState.plans.length ? "Plan auswählen" : "Noch keine Pläne vorhanden";
        el.plan.append(empty);

        for (const plan of plannerState.plans) {
            const option = document.createElement("option");
            option.value = String(plan.id);
            option.textContent = String(plan.name || "Unbenannter Plan");
            el.plan.append(option);
        }
        updatePlanDuration();
    }

    function getPlan(planId) {
        return plannerState.plans.find(plan => String(plan.id) === String(planId)) || null;
    }

    function getPlanMinutes(plan) {
        if (!plan || !Array.isArray(plan.items)) return 0;
        return plan.items.reduce((sum, item) => sum + Math.max(0, Number(item?.duration) || 0), 0);
    }

    function updatePlanDuration() {
        const plan = getPlan(el.plan.value);
        const minutes = getPlanMinutes(plan);
        el.planDuration.textContent = plan
            ? `${plan.items?.length || 0} Elemente · ${formatDuration(minutes)}`
            : "";
    }

    function bindEvents() {
        el.back.addEventListener("click", () => {
            if (history.length > 1) history.back();
            else location.href = "index.html";
        });

        el.previous.addEventListener("click", () => navigate(-1));
        el.next.addEventListener("click", () => navigate(1));
        el.today.addEventListener("click", goToday);
        el.newEvent.addEventListener("click", () => openNewEvent(selectedDate));
        el.agendaAdd.addEventListener("click", () => openNewEvent(selectedDate));

        document.querySelectorAll(".calendar-view-button").forEach(button => {
            button.addEventListener("click", () => setView(button.dataset.view));
        });

        el.searchButton.addEventListener("click", openSearch);
        el.searchClose.addEventListener("click", closeSearch);
        el.searchInput.addEventListener("input", renderSearch);

        el.moreButton.addEventListener("click", () => el.menu.classList.remove("hidden"));
        el.menuBackdrop.addEventListener("click", closeMenu);
        el.importButton.addEventListener("click", () => {
            closeMenu();
            el.importFile.click();
        });
        el.exportButton.addEventListener("click", () => {
            closeMenu();
            exportIcs();
        });
        el.jumpNextDeadline.addEventListener("click", () => {
            closeMenu();
            jumpToNextDeadline();
        });
        el.clearButton.addEventListener("click", clearCalendar);
        el.importFile.addEventListener("change", importIcs);

        el.sheetBackdrop.addEventListener("click", closeSheet);
        el.cancel.addEventListener("click", closeSheet);
        el.save.addEventListener("click", saveEventFromForm);
        el.form.addEventListener("submit", event => {
            event.preventDefault();
            saveEventFromForm();
        });
        el.delete.addEventListener("click", deleteCurrentEvent);
        el.duplicate.addEventListener("click", duplicateCurrentEvent);
        el.allDay.addEventListener("change", updateFormVisibility);
        el.repeat.addEventListener("change", updateFormVisibility);
        el.plan.addEventListener("change", handlePlanChange);
        el.kindButtons.forEach(button => {
            button.addEventListener("click", () => setSelectedKind(button.dataset.kind));
        });

        let touchX = null;
        document.addEventListener("touchstart", event => {
            if (el.sheet.classList.contains("hidden") && event.touches.length === 1) {
                touchX = event.touches[0].clientX;
            }
        }, { passive: true });
        document.addEventListener("touchend", event => {
            if (touchX === null || !event.changedTouches.length) return;
            const delta = event.changedTouches[0].clientX - touchX;
            touchX = null;
            if (Math.abs(delta) > 85 && !el.searchPanel.contains(event.target)) {
                navigate(delta > 0 ? -1 : 1);
            }
        }, { passive: true });

        document.addEventListener("keydown", event => {
            const target = event.target;
            const editing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;

            if (event.key === "Escape") {
                if (!el.sheet.classList.contains("hidden")) closeSheet();
                else if (!el.menu.classList.contains("hidden")) closeMenu();
                else if (!el.searchPanel.classList.contains("hidden")) closeSearch();
                return;
            }
            if (editing) return;

            if (event.key.toLowerCase() === "n") openNewEvent(selectedDate);
            if (event.key.toLowerCase() === "t") goToday();
            if (event.key === "ArrowLeft") navigate(-1);
            if (event.key === "ArrowRight") navigate(1);
            if (event.key === "1") setView("month");
            if (event.key === "2") setView("week");
            if (event.key === "3") setView("day");
        });

        window.addEventListener("storage", event => {
            if (event.key === PLANNER_KEY) {
                plannerState = readPlannerState();
                applyPlannerTheme();
                populatePlanSelect();
                renderAll();
            }
        });
    }

    function setView(nextView) {
        if (!["month", "week", "day"].includes(nextView)) return;
        view = nextView;
        cursor = startOfDay(selectedDate);
        saveState();
        renderAll();
    }

    function navigate(direction) {
        if (view === "month") {
            cursor = new Date(cursor.getFullYear(), cursor.getMonth() + direction, 1);
            if (selectedDate.getMonth() !== cursor.getMonth() || selectedDate.getFullYear() !== cursor.getFullYear()) {
                selectedDate = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
            }
        } else if (view === "week") {
            cursor = addDays(cursor, direction * 7);
            selectedDate = addDays(selectedDate, direction * 7);
        } else {
            cursor = addDays(cursor, direction);
            selectedDate = startOfDay(cursor);
        }
        renderAll();
    }

    function goToday() {
        cursor = startOfDay(new Date());
        selectedDate = startOfDay(new Date());
        renderAll();
    }

    function renderAll() {
        renderViewSwitch();
        renderHeading();
        renderFilters();
        renderSummary();
        renderMonth();
        renderWeek();
        renderDay();
        if (!el.searchPanel.classList.contains("hidden")) renderSearch();
    }

    function renderViewSwitch() {
        document.querySelectorAll(".calendar-view-button").forEach(button => {
            const active = button.dataset.view === view;
            button.classList.toggle("active", active);
            button.setAttribute("aria-selected", active ? "true" : "false");
        });
        el.monthView.classList.toggle("active", view === "month");
        el.weekView.classList.toggle("active", view === "week");
        el.dayView.classList.toggle("active", view === "day");
    }

    function renderHeading() {
        if (view === "month") {
            el.eyebrow.textContent = isCurrentMonth(cursor) ? "Dieser Monat" : "Monatsübersicht";
            el.periodTitle.textContent = capitalize(formatDate(cursor, { month: "long", year: "numeric" }));
        } else if (view === "week") {
            const start = startOfWeek(cursor);
            const end = addDays(start, 6);
            el.eyebrow.textContent = isDateInRange(new Date(), start, end) ? "Diese Woche" : `KW ${isoWeekNumber(start)}`;
            el.periodTitle.textContent = formatWeekTitle(start, end);
        } else {
            el.eyebrow.textContent = isSameDay(cursor, new Date()) ? "Heute" : capitalize(formatDate(cursor, { weekday: "long" }));
            el.periodTitle.textContent = formatDate(cursor, { day: "numeric", month: "long", year: "numeric" });
        }
    }

    function renderFilters() {
        el.filters.innerHTML = "";
        for (const [kind, info] of Object.entries(KIND_INFO)) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "calendar-filter-chip";
            button.classList.toggle("active", filter.has(kind));
            button.style.setProperty("--chip-color", info.color);
            button.textContent = info.label;
            button.addEventListener("click", () => {
                if (filter.has(kind)) {
                    if (filter.size === 1) return;
                    filter.delete(kind);
                } else {
                    filter.add(kind);
                }
                saveState();
                renderAll();
            });
            el.filters.append(button);
        }
    }

    function renderSummary() {
        const weekStart = startOfWeek(selectedDate);
        const weekEnd = endOfDay(addDays(weekStart, 6));
        const weekOccurrences = occurrencesBetween(weekStart, weekEnd).filter(event => !event.allDay);
        const plannedMinutes = weekOccurrences.reduce((sum, event) => sum + Math.max(0, timeToMinutes(event.end) - timeToMinutes(event.start)), 0);
        const studyMinutes = weekOccurrences
            .filter(event => event.kind === "study" || event.kind === "plan")
            .reduce((sum, event) => sum + Math.max(0, timeToMinutes(event.end) - timeToMinutes(event.start)), 0);
        const todayEvents = occurrencesForDate(new Date());
        const next = getNextOccurrence();
        const deadline = getNextDeadline();

        const parts = [];
        parts.push(`<span><strong>${todayEvents.length}</strong> heute</span>`);
        parts.push(`<span><strong>${formatDuration(plannedMinutes)}</strong> diese Woche</span>`);
        if (studyMinutes) parts.push(`<span><strong>${formatDuration(studyMinutes)}</strong> Studium</span>`);
        if (next) parts.push(`<span>Nächster: <strong>${escapeHtml(next.allDay ? "ganztägig" : next.start)} · ${escapeHtml(next.title)}</strong></span>`);
        if (deadline) {
            const days = daysBetween(startOfDay(new Date()), parseDateKey(deadline.instanceDate));
            const text = days === 0 ? "heute" : days === 1 ? "morgen" : `in ${days} Tagen`;
            parts.push(`<span class="deadline">Deadline <strong>${escapeHtml(text)}</strong></span>`);
        }
        el.summary.innerHTML = parts.join("");
    }

    function renderMonth() {
        const monthStart = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
        const gridStart = startOfWeek(monthStart);
        el.monthGrid.innerHTML = "";

        for (let i = 0; i < 42; i += 1) {
            const date = addDays(gridStart, i);
            const day = document.createElement("button");
            day.type = "button";
            day.className = "month-day";
            day.classList.toggle("outside", date.getMonth() !== monthStart.getMonth());
            day.classList.toggle("today", isSameDay(date, new Date()));
            day.classList.toggle("selected", isSameDay(date, selectedDate));
            day.dataset.date = toDateKey(date);

            const number = document.createElement("span");
            number.className = "month-day-number";
            number.textContent = String(date.getDate());
            day.append(number);

            const list = document.createElement("div");
            list.className = "month-event-list";
            const events = occurrencesForDate(date);
            const visible = events.slice(0, 3);

            for (const event of visible) {
                const chip = document.createElement("div");
                chip.className = "month-event-chip";
                chip.classList.toggle("done", event.done);
                chip.style.setProperty("--event-color", kindColor(event.kind));
                chip.innerHTML = `<span class="month-event-time">${event.allDay ? "" : escapeHtml(event.start)}</span><span class="month-event-title">${escapeHtml(event.title)}</span>`;
                list.append(chip);
            }
            if (events.length > visible.length) {
                const more = document.createElement("div");
                more.className = "month-more";
                more.textContent = `+${events.length - visible.length}`;
                list.append(more);
            }
            day.append(list);
            day.addEventListener("click", () => {
                selectedDate = startOfDay(date);
                if (date.getMonth() !== cursor.getMonth() || date.getFullYear() !== cursor.getFullYear()) {
                    cursor = new Date(date.getFullYear(), date.getMonth(), 1);
                }
                renderAll();
                requestAnimationFrame(() => {
                    document.querySelector(".calendar-agenda-card")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                });
            });
            el.monthGrid.append(day);
        }
        renderAgenda();
    }

    function renderAgenda() {
        el.agendaTitle.textContent = capitalize(formatDate(selectedDate, { weekday: "long", day: "numeric", month: "long" }));
        const events = occurrencesForDate(selectedDate);
        el.agendaList.innerHTML = "";

        if (!events.length) {
            const empty = document.createElement("div");
            empty.className = "agenda-empty";
            empty.textContent = "Noch nichts geplant.";
            el.agendaList.append(empty);
            return;
        }

        for (const event of events) {
            const row = document.createElement("button");
            row.type = "button";
            row.className = "agenda-row";
            row.classList.toggle("done", event.done);
            row.style.setProperty("--event-color", kindColor(event.kind));

            const meta = [KIND_INFO[event.kind].label];
            if (event.location) meta.push(event.location);
            if (event.repeat !== "none") meta.push(event.repeat === "daily" ? "täglich" : "wöchentlich");
            if (event.planId && getPlan(event.planId)) meta.push("Plan verknüpft");

            row.innerHTML = `
                <span class="agenda-time">${event.allDay ? "ganztägig" : escapeHtml(event.start)}</span>
                <span class="agenda-color"></span>
                <span class="agenda-main">
                    <span class="agenda-title">${escapeHtml(event.title)}</span>
                    <span class="agenda-subtitle">${escapeHtml(meta.join(" · "))}</span>
                </span>
                <span class="agenda-status">${event.done ? "✓" : ""}</span>
            `;
            row.addEventListener("click", () => openExistingEvent(event));
            el.agendaList.append(row);
        }
    }

    function renderWeek() {
        if (view !== "week") return;
        const start = startOfWeek(cursor);
        const dates = Array.from({ length: 7 }, (_, index) => addDays(start, index));
        renderWeekAllDay(dates);

        el.weekTimeline.innerHTML = "";
        const inner = document.createElement("div");
        inner.className = "week-timeline-inner";

        const axis = createTimeAxis("week-time-axis", 47);
        inner.append(axis);

        for (const date of dates) {
            const column = document.createElement("div");
            column.className = "week-day-column";
            column.dataset.date = toDateKey(date);

            const head = document.createElement("div");
            head.className = "week-column-head";
            head.classList.toggle("today", isSameDay(date, new Date()));
            head.innerHTML = `<span>${formatDate(date, { weekday: "short" })}</span><span>${date.getDate()}</span>`;
            column.append(head);

            const timed = occurrencesForDate(date).filter(event => !event.allDay);
            placeTimelineEvents(column, timed, 47);
            if (isSameDay(date, new Date())) addNowLine(column, 47);

            column.addEventListener("dblclick", event => {
                if (event.target.closest(".timeline-event")) return;
                const rect = column.getBoundingClientRect();
                const y = event.clientY - rect.top - 47;
                openNewEventAt(date, minutesFromTimelineY(y));
            });
            inner.append(column);
        }
        el.weekTimeline.append(inner);
    }

    function renderWeekAllDay(dates) {
        el.weekAllDay.innerHTML = "";
        const label = document.createElement("div");
        label.className = "week-all-day-label";
        label.textContent = "Ganz";
        el.weekAllDay.append(label);

        for (const date of dates) {
            const cell = document.createElement("div");
            cell.className = "week-all-day-cell";
            for (const event of occurrencesForDate(date).filter(item => item.allDay)) {
                cell.append(createAllDayChip(event));
            }
            el.weekAllDay.append(cell);
        }
    }

    function renderDay() {
        if (view !== "day") return;
        const date = startOfDay(cursor);
        const events = occurrencesForDate(date);
        const timed = events.filter(event => !event.allDay);
        const totalMinutes = timed.reduce((sum, event) => sum + Math.max(0, timeToMinutes(event.end) - timeToMinutes(event.start)), 0);

        el.dayHeader.innerHTML = `<div class="day-header-date">${escapeHtml(capitalize(formatDate(date, { weekday: "long", day: "numeric", month: "long" })))}</div><div class="day-header-stat">${events.length} Einträge · ${formatDuration(totalMinutes)}</div>`;

        el.dayAllDay.innerHTML = "";
        const allDayList = document.createElement("div");
        allDayList.className = "day-all-day-list";
        const allDay = events.filter(event => event.allDay);
        if (!allDay.length) {
            const empty = document.createElement("span");
            empty.className = "week-all-day-label";
            empty.textContent = "Keine ganztägigen Einträge";
            allDayList.append(empty);
        } else {
            allDay.forEach(event => allDayList.append(createAllDayChip(event)));
        }
        el.dayAllDay.append(allDayList);

        el.dayTimeline.innerHTML = "";
        el.dayTimeline.append(createTimeAxis("day-time-axis"));
        const column = document.createElement("div");
        column.className = "day-time-column";
        placeTimelineEvents(column, timed, 0);
        if (isSameDay(date, new Date())) addNowLine(column, 0);
        column.addEventListener("dblclick", event => {
            if (event.target.closest(".timeline-event")) return;
            const rect = column.getBoundingClientRect();
            const y = event.clientY - rect.top;
            openNewEventAt(date, minutesFromTimelineY(y));
        });
        el.dayTimeline.append(column);
    }

    function createTimeAxis(extraClass = "week-time-axis", offset = 0) {
        const axis = document.createElement("div");
        axis.className = extraClass;
        for (let hour = START_HOUR; hour <= END_HOUR; hour += 1) {
            const label = document.createElement("span");
            label.className = "timeline-hour-label";
            label.style.top = `${timelineY(hour * 60) + offset}px`;
            label.textContent = hour === END_HOUR ? "24" : String(hour).padStart(2, "0");
            axis.append(label);
        }
        return axis;
    }

    function placeTimelineEvents(column, events, headerOffset = 0) {
        const sorted = [...events].sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
        const groups = overlapGroups(sorted);

        for (const group of groups) {
            group.forEach((event, index) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "timeline-event";
                button.classList.toggle("done", event.done);
                button.style.setProperty("--event-color", kindColor(event.kind));

                const start = Math.max(START_HOUR * 60, timeToMinutes(event.start));
                const end = Math.min(END_HOUR * 60, Math.max(start + 15, timeToMinutes(event.end)));
                const top = timelineY(start) + headerOffset;
                const height = Math.max(22, timelineY(end) - timelineY(start) - 2);
                const width = 100 / group.length;
                button.style.top = `${top}px`;
                button.style.height = `${height}px`;
                if (group.length > 1) {
                    button.style.left = `calc(${index * width}% + 3px)`;
                    button.style.right = "auto";
                    button.style.width = `calc(${width}% - 6px)`;
                }

                button.innerHTML = `<div class="timeline-event-time">${escapeHtml(event.start)}–${escapeHtml(event.end)}</div><div class="timeline-event-title">${escapeHtml(event.title)}</div>`;
                button.addEventListener("click", eventClick => {
                    eventClick.stopPropagation();
                    openExistingEvent(event);
                });
                column.append(button);
            });
        }
    }

    function overlapGroups(events) {
        const groups = [];
        let current = [];
        let currentEnd = -1;
        for (const event of events) {
            const start = timeToMinutes(event.start);
            const end = timeToMinutes(event.end);
            if (!current.length || start < currentEnd) {
                current.push(event);
                currentEnd = Math.max(currentEnd, end);
            } else {
                groups.push(current);
                current = [event];
                currentEnd = end;
            }
        }
        if (current.length) groups.push(current);
        return groups;
    }

    function addNowLine(column, headerOffset = 0) {
        const now = new Date();
        const minutes = now.getHours() * 60 + now.getMinutes();
        if (minutes < START_HOUR * 60 || minutes > END_HOUR * 60) return;
        const line = document.createElement("div");
        line.className = "timeline-now-line";
        line.style.top = `${timelineY(minutes) + headerOffset}px`;
        column.append(line);
    }

    function createAllDayChip(event) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "timeline-all-day-chip";
        button.style.setProperty("--event-color", kindColor(event.kind));
        button.textContent = event.title;
        button.addEventListener("click", () => openExistingEvent(event));
        return button;
    }

    function openNewEvent(date) {
        const rounded = roundedNowTime();
        const dateIsToday = isSameDay(date, new Date());
        openSheet({
            id: "",
            title: "",
            kind: "study",
            date: toDateKey(date),
            allDay: false,
            start: dateIsToday ? rounded : "09:00",
            end: dateIsToday ? addMinutesToTime(rounded, 60) : "10:00",
            repeat: "none",
            repeatUntil: "",
            location: "",
            note: "",
            done: false,
            planId: ""
        }, false);
    }

    function openNewEventAt(date, minutes) {
        const startMinutes = Math.max(START_HOUR * 60, Math.min((END_HOUR - 1) * 60, Math.round(minutes / 15) * 15));
        const start = minutesToTime(startMinutes);
        openSheet({
            id: "",
            title: "",
            kind: "study",
            date: toDateKey(date),
            allDay: false,
            start,
            end: addMinutesToTime(start, 60),
            repeat: "none",
            repeatUntil: "",
            location: "",
            note: "",
            done: false,
            planId: ""
        }, false);
    }

    function openExistingEvent(occurrence) {
        const original = state.events.find(event => event.id === occurrence.seriesId) || state.events.find(event => event.id === occurrence.id);
        if (!original) return;
        openSheet(original, true, occurrence.instanceDate || original.date);
    }

    function openSheet(event, existing, occurrenceDate = null) {
        populatePlanSelect();
        el.id.value = existing ? event.id : "";
        el.title.value = event.title || "";
        el.date.value = event.date || toDateKey(selectedDate);
        el.allDay.checked = Boolean(event.allDay);
        el.start.value = event.start || "09:00";
        el.end.value = event.end || "10:00";
        el.repeat.value = event.repeat || "none";
        el.repeatUntil.value = event.repeatUntil || "";
        el.location.value = event.location || "";
        el.note.value = event.note || "";
        el.done.checked = Boolean(event.done);
        el.plan.value = event.planId || "";
        el.sheetTitle.textContent = existing ? (event.repeat !== "none" ? "Serie bearbeiten" : "Eintrag bearbeiten") : "Neuer Eintrag";
        el.delete.classList.toggle("hidden", !existing);
        el.duplicate.classList.toggle("hidden", !existing);
        el.meta.textContent = existing && event.repeat !== "none" && occurrenceDate && occurrenceDate !== event.date
            ? `Diese Ansicht zeigt eine Wiederholung am ${formatDate(parseDateKey(occurrenceDate), { day: "numeric", month: "long" })}. Änderungen gelten für die ganze Serie; das Startdatum bleibt ${formatDate(parseDateKey(event.date), { day: "numeric", month: "long", year: "numeric" })}.`
            : "";
        setSelectedKind(event.kind || "appointment");
        updateFormVisibility();
        updatePlanDuration();
        el.sheet.classList.remove("hidden");
        document.body.classList.add("calendar-sheet-open");
        setTimeout(() => el.title.focus(), 40);
    }

    function closeSheet() {
        el.sheet.classList.add("hidden");
        document.body.classList.remove("calendar-sheet-open");
        el.form.reset();
        el.id.value = "";
        el.meta.textContent = "";
    }

    function setSelectedKind(kind) {
        if (!KIND_INFO[kind]) return;
        selectedKind = kind;
        el.kindButtons.forEach(button => {
            const active = button.dataset.kind === kind;
            button.classList.toggle("active", active);
            button.style.setProperty("--kind-color", kindColor(button.dataset.kind));
        });
        if (kind === "deadline") {
            el.allDay.checked = true;
        }
        el.planField.classList.toggle("hidden", kind !== "plan");
        el.doneField.classList.toggle("hidden", !["study", "plan"].includes(kind));
        updateFormVisibility();
    }

    function updateFormVisibility() {
        const allDay = el.allDay.checked || selectedKind === "deadline";
        if (selectedKind === "deadline") el.allDay.checked = true;
        el.timeFields.classList.toggle("hidden", allDay);
        el.repeatUntilField.classList.toggle("hidden", el.repeat.value === "none");
    }

    function handlePlanChange() {
        const plan = getPlan(el.plan.value);
        updatePlanDuration();
        if (!plan) return;
        if (!el.title.value.trim()) el.title.value = String(plan.name || "Plan");
        const minutes = getPlanMinutes(plan);
        if (minutes > 0 && !el.allDay.checked) {
            el.end.value = addMinutesToTime(el.start.value || "09:00", minutes);
        }
    }

    function saveEventFromForm() {
        const title = el.title.value.trim();
        if (!title) {
            el.title.focus();
            showToast("Bitte einen Titel eingeben");
            return;
        }
        if (!validDateString(el.date.value)) {
            el.date.focus();
            showToast("Bitte ein gültiges Datum wählen");
            return;
        }

        const allDay = el.allDay.checked || selectedKind === "deadline";
        let start = validTime(el.start.value) ? el.start.value : "09:00";
        let end = validTime(el.end.value) ? el.end.value : addMinutesToTime(start, 60);
        if (!allDay && timeToMinutes(end) <= timeToMinutes(start)) {
            showToast("Das Ende muss nach dem Beginn liegen");
            el.end.focus();
            return;
        }

        const repeat = el.repeat.value;
        const repeatUntil = repeat === "none" ? "" : el.repeatUntil.value;
        if (repeat !== "none" && repeatUntil && parseDateKey(repeatUntil) < parseDateKey(el.date.value)) {
            showToast("Das Serienende liegt vor dem Startdatum");
            el.repeatUntil.focus();
            return;
        }

        const existingId = el.id.value;
        const previous = existingId ? state.events.find(event => event.id === existingId) : null;
        const event = normalizeEvent({
            ...(previous || {}),
            id: existingId || createId(),
            title,
            kind: selectedKind,
            date: el.date.value,
            allDay,
            start,
            end,
            repeat,
            repeatUntil,
            location: el.location.value.trim(),
            note: el.note.value.trim(),
            done: ["study", "plan"].includes(selectedKind) ? el.done.checked : false,
            planId: selectedKind === "plan" ? el.plan.value : "",
            createdAt: previous?.createdAt || Date.now(),
            updatedAt: Date.now()
        });

        if (previous) {
            state.events = state.events.map(item => item.id === previous.id ? event : item);
        } else {
            state.events.push(event);
        }

        selectedDate = parseDateKey(event.date);
        cursor = startOfDay(selectedDate);
        saveState();
        closeSheet();
        renderAll();
        showToast(previous ? "Eintrag aktualisiert" : "Eingetragen");
    }

    function deleteCurrentEvent() {
        const id = el.id.value;
        if (!id) return;
        const event = state.events.find(item => item.id === id);
        const label = event?.repeat !== "none" ? "die gesamte Serie" : "diesen Eintrag";
        if (!window.confirm(`Möchtest du ${label} wirklich löschen?`)) return;
        state.events = state.events.filter(item => item.id !== id);
        saveState();
        closeSheet();
        renderAll();
        showToast("Gelöscht");
    }

    function duplicateCurrentEvent() {
        const id = el.id.value;
        const source = state.events.find(item => item.id === id);
        if (!source) return;
        const copy = normalizeEvent({
            ...source,
            id: createId(),
            title: `${source.title} · Kopie`,
            repeat: "none",
            repeatUntil: "",
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
        state.events.push(copy);
        saveState();
        closeSheet();
        openSheet(copy, true);
        renderAll();
        showToast("Duplikat erstellt");
    }

    function occurrencesForDate(date) {
        const key = toDateKey(date);
        return state.events
            .filter(event => filter.has(event.kind))
            .flatMap(event => occurrenceOnDate(event, key))
            .sort(compareOccurrences);
    }

    function occurrenceOnDate(event, dateKey) {
        const base = parseDateKey(event.date);
        const target = parseDateKey(dateKey);
        if (target < base) return [];
        if (event.repeatUntil && target > parseDateKey(event.repeatUntil)) return [];

        let occurs = false;
        if (event.repeat === "none") occurs = dateKey === event.date;
        if (event.repeat === "daily") occurs = true;
        if (event.repeat === "weekly") occurs = daysBetween(base, target) % 7 === 0;
        if (!occurs) return [];

        return [{
            ...event,
            seriesId: event.id,
            instanceDate: dateKey
        }];
    }

    function occurrencesBetween(start, end) {
        const result = [];
        let date = startOfDay(start);
        const last = startOfDay(end);
        let guard = 0;
        while (date <= last && guard < 3700) {
            result.push(...occurrencesForDate(date));
            date = addDays(date, 1);
            guard += 1;
        }
        return result;
    }

    function compareOccurrences(a, b) {
        if (a.allDay !== b.allDay) return a.allDay ? -1 : 1;
        if (a.allDay && b.allDay) return a.title.localeCompare(b.title, "de");
        return timeToMinutes(a.start) - timeToMinutes(b.start) || a.title.localeCompare(b.title, "de");
    }

    function getNextOccurrence() {
        const now = new Date();
        const today = startOfDay(now);
        const horizon = addDays(today, 90);
        const all = occurrencesBetween(today, horizon).filter(event => {
            const date = parseDateKey(event.instanceDate);
            if (date > today) return true;
            if (event.allDay) return true;
            return timeToMinutes(event.end) >= now.getHours() * 60 + now.getMinutes();
        });
        return all.sort((a, b) => occurrenceTimestamp(a) - occurrenceTimestamp(b))[0] || null;
    }

    function getNextDeadline() {
        const today = startOfDay(new Date());
        return occurrencesBetween(today, addDays(today, 730))
            .filter(event => event.kind === "deadline" && !event.done)
            .sort((a, b) => parseDateKey(a.instanceDate) - parseDateKey(b.instanceDate))[0] || null;
    }

    function jumpToNextDeadline() {
        const deadline = getNextDeadline();
        if (!deadline) {
            showToast("Keine kommende Deadline gefunden");
            return;
        }
        selectedDate = parseDateKey(deadline.instanceDate);
        cursor = startOfDay(selectedDate);
        setView("day");
        showToast(deadline.title);
    }

    function openSearch() {
        el.searchPanel.classList.remove("hidden");
        el.searchInput.focus();
        renderSearch();
    }

    function closeSearch() {
        el.searchPanel.classList.add("hidden");
        el.searchInput.value = "";
        el.searchResults.innerHTML = "";
    }

    function renderSearch() {
        const query = el.searchInput.value.trim().toLocaleLowerCase("de");
        el.searchResults.innerHTML = "";
        if (!query) {
            const hint = document.createElement("div");
            hint.className = "agenda-empty";
            hint.textContent = "Suche in Titeln, Orten, Notizen und Plänen.";
            el.searchResults.append(hint);
            return;
        }

        const matches = state.events
            .filter(event => {
                const plan = getPlan(event.planId);
                const haystack = [event.title, event.location, event.note, plan?.name || "", KIND_INFO[event.kind]?.label || ""]
                    .join(" ")
                    .toLocaleLowerCase("de");
                return haystack.includes(query);
            })
            .sort((a, b) => parseDateKey(a.date) - parseDateKey(b.date))
            .slice(0, 50);

        if (!matches.length) {
            const empty = document.createElement("div");
            empty.className = "agenda-empty";
            empty.textContent = "Keine Treffer.";
            el.searchResults.append(empty);
            return;
        }

        for (const event of matches) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "calendar-search-result";
            button.style.setProperty("--event-color", kindColor(event.kind));
            button.innerHTML = `
                <span class="calendar-search-result-dot"></span>
                <span><span class="calendar-search-result-title">${escapeHtml(event.title)}</span><span class="calendar-search-result-meta">${escapeHtml(KIND_INFO[event.kind].label)}${event.note ? " · " + escapeHtml(event.note.slice(0, 70)) : ""}</span></span>
                <span class="calendar-search-result-date">${escapeHtml(formatDate(parseDateKey(event.date), { day: "2-digit", month: "2-digit", year: "2-digit" }))}</span>
            `;
            button.addEventListener("click", () => {
                selectedDate = parseDateKey(event.date);
                cursor = startOfDay(selectedDate);
                closeSearch();
                renderAll();
                openExistingEvent({ ...event, instanceDate: event.date, seriesId: event.id });
            });
            el.searchResults.append(button);
        }
    }

    function closeMenu() {
        el.menu.classList.add("hidden");
    }

    function exportIcs() {
        if (!state.events.length) {
            showToast("Noch keine Einträge zum Exportieren");
            return;
        }

        const lines = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Personal Planner//Kalender V63//DE",
            "CALSCALE:GREGORIAN",
            "METHOD:PUBLISH"
        ];

        for (const event of state.events) {
            lines.push("BEGIN:VEVENT");
            lines.push(`UID:${icsEscape(event.id)}@personal-planner`);
            lines.push(`DTSTAMP:${toIcsUtc(new Date(event.updatedAt || Date.now()))}`);
            lines.push(`SUMMARY:${icsEscape(event.title)}`);
            if (event.allDay) {
                lines.push(`DTSTART;VALUE=DATE:${event.date.replaceAll("-", "")}`);
                lines.push(`DTEND;VALUE=DATE:${toDateKey(addDays(parseDateKey(event.date), 1)).replaceAll("-", "")}`);
            } else {
                lines.push(`DTSTART:${toIcsLocal(event.date, event.start)}`);
                lines.push(`DTEND:${toIcsLocal(event.date, event.end)}`);
            }
            if (event.location) lines.push(`LOCATION:${icsEscape(event.location)}`);
            const descriptionParts = [event.note, `Kategorie: ${KIND_INFO[event.kind].label}`].filter(Boolean);
            if (event.planId && getPlan(event.planId)) descriptionParts.push(`Plan: ${getPlan(event.planId).name}`);
            if (descriptionParts.length) lines.push(`DESCRIPTION:${icsEscape(descriptionParts.join("\n"))}`);
            if (event.repeat !== "none") {
                const freq = event.repeat === "daily" ? "DAILY" : "WEEKLY";
                const until = event.repeatUntil ? `;UNTIL=${event.repeatUntil.replaceAll("-", "")}T235959` : "";
                lines.push(`RRULE:FREQ=${freq}${until}`);
            }
            lines.push("END:VEVENT");
        }
        lines.push("END:VCALENDAR");

        downloadText(`Planer-Kalender-${toDateKey(new Date())}.ics`, lines.join("\r\n"), "text/calendar;charset=utf-8");
        showToast("Kalender exportiert");
    }

    async function importIcs() {
        const file = el.importFile.files?.[0];
        el.importFile.value = "";
        if (!file) return;
        try {
            const text = await file.text();
            const imported = parseIcs(text);
            if (!imported.length) {
                showToast("Keine Termine in der Datei gefunden");
                return;
            }
            state.events.push(...imported);
            saveState();
            renderAll();
            showToast(`${imported.length} Einträge importiert`);
        } catch {
            showToast("Import fehlgeschlagen");
        }
    }

    function parseIcs(text) {
        const unfolded = text.replace(/\r?\n[ \t]/g, "");
        const blocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) || [];
        const imported = [];

        for (const block of blocks) {
            const props = {};
            for (const line of block.split(/\r?\n/)) {
                const index = line.indexOf(":");
                if (index < 0) continue;
                const key = line.slice(0, index);
                const value = line.slice(index + 1);
                const baseKey = key.split(";")[0];
                props[baseKey] = { key, value };
            }
            if (!props.DTSTART?.value) continue;

            const startInfo = parseIcsDate(props.DTSTART.key, props.DTSTART.value);
            if (!startInfo) continue;
            const endInfo = props.DTEND ? parseIcsDate(props.DTEND.key, props.DTEND.value) : null;
            const summary = icsUnescape(props.SUMMARY?.value || "Importierter Termin");
            const description = icsUnescape(props.DESCRIPTION?.value || "");
            const location = icsUnescape(props.LOCATION?.value || "");
            let repeat = "none";
            let repeatUntil = "";
            const rule = props.RRULE?.value || "";
            if (/FREQ=DAILY/i.test(rule)) repeat = "daily";
            if (/FREQ=WEEKLY/i.test(rule)) repeat = "weekly";
            const untilMatch = rule.match(/UNTIL=(\d{8})/i);
            if (untilMatch) repeatUntil = `${untilMatch[1].slice(0, 4)}-${untilMatch[1].slice(4, 6)}-${untilMatch[1].slice(6, 8)}`;

            imported.push(normalizeEvent({
                id: createId(),
                title: summary,
                kind: inferKind(summary, description),
                date: startInfo.date,
                allDay: startInfo.allDay,
                start: startInfo.time || "09:00",
                end: endInfo?.time || (startInfo.allDay ? "10:00" : addMinutesToTime(startInfo.time || "09:00", 60)),
                repeat,
                repeatUntil,
                location,
                note: description,
                done: false,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }));
        }
        return imported;
    }

    function inferKind(title, description) {
        const text = `${title} ${description}`.toLocaleLowerCase("de");
        if (/deadline|abgabe|prüfung|klausur|exam/.test(text)) return "deadline";
        if (/lernen|studium|vorlesung|übung|seminar|physik|qft/.test(text)) return "study";
        if (/arzt|termin|meeting|besprechung/.test(text)) return "appointment";
        return "personal";
    }

    function clearCalendar() {
        if (!state.events.length) {
            closeMenu();
            showToast("Kalender ist bereits leer");
            return;
        }
        if (!window.confirm("Wirklich alle Kalenderdaten löschen? Deine Pläne bleiben unverändert.")) return;
        state.events = [];
        saveState();
        closeMenu();
        renderAll();
        showToast("Kalender geleert");
    }

    function showToast(message) {
        clearTimeout(toastTimer);
        el.toast.textContent = message;
        el.toast.classList.remove("hidden");
        toastTimer = setTimeout(() => el.toast.classList.add("hidden"), 2300);
    }

    function kindColor(kind) {
        return KIND_INFO[kind]?.color || KIND_INFO.appointment.color;
    }

    function validDateString(value) {
        return /^\d{4}-\d{2}-\d{2}$/.test(String(value || "")) && !Number.isNaN(parseDateKey(value).getTime());
    }

    function validTime(value) {
        return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value || ""));
    }

    function parseDateKey(value) {
        const [year, month, day] = String(value).split("-").map(Number);
        return new Date(year, month - 1, day);
    }

    function toDateKey(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function startOfDay(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function endOfDay(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
    }

    function addDays(date, amount) {
        const copy = startOfDay(date);
        copy.setDate(copy.getDate() + amount);
        return copy;
    }

    function startOfWeek(date) {
        const copy = startOfDay(date);
        const day = copy.getDay() || 7;
        copy.setDate(copy.getDate() - (day - 1));
        return copy;
    }

    function isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    function isCurrentMonth(date) {
        const now = new Date();
        return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
    }

    function isDateInRange(date, start, end) {
        const point = startOfDay(date).getTime();
        return point >= startOfDay(start).getTime() && point <= startOfDay(end).getTime();
    }

    function daysBetween(a, b) {
        return Math.round((startOfDay(b) - startOfDay(a)) / 86400000);
    }

    function formatDate(date, options) {
        return new Intl.DateTimeFormat("de-DE", options).format(date);
    }

    function capitalize(value) {
        return value ? value.charAt(0).toLocaleUpperCase("de") + value.slice(1) : value;
    }

    function formatWeekTitle(start, end) {
        if (start.getMonth() === end.getMonth()) {
            return `${start.getDate()}.–${end.getDate()}. ${formatDate(end, { month: "long", year: "numeric" })}`;
        }
        return `${formatDate(start, { day: "numeric", month: "short" })} – ${formatDate(end, { day: "numeric", month: "short", year: "numeric" })}`;
    }

    function isoWeekNumber(date) {
        const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const day = target.getUTCDay() || 7;
        target.setUTCDate(target.getUTCDate() + 4 - day);
        const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
        return Math.ceil((((target - yearStart) / 86400000) + 1) / 7);
    }

    function timeToMinutes(value) {
        const [hour, minute] = String(value || "00:00").split(":").map(Number);
        return hour * 60 + minute;
    }

    function minutesToTime(minutes) {
        const safe = Math.max(0, Math.min(23 * 60 + 59, Math.round(minutes)));
        const hour = Math.floor(safe / 60);
        const minute = safe % 60;
        return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    }

    function addMinutesToTime(time, minutes) {
        return minutesToTime(timeToMinutes(time) + Number(minutes || 0));
    }

    function roundedNowTime() {
        const now = new Date();
        const total = now.getHours() * 60 + now.getMinutes();
        const rounded = Math.ceil(total / 15) * 15;
        return minutesToTime(Math.min(rounded, 23 * 60));
    }

    function formatDuration(minutes) {
        const total = Math.round(Number(minutes) || 0);
        if (total <= 0) return "0 min";
        const hours = Math.floor(total / 60);
        const rest = total % 60;
        if (!hours) return `${rest} min`;
        if (!rest) return `${hours} h`;
        return `${hours} h ${rest} min`;
    }

    function timelineY(minutes) {
        const rootHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--calendar-hour-height")) || HOUR_HEIGHT;
        return ((minutes - START_HOUR * 60) / 60) * rootHeight;
    }

    function minutesFromTimelineY(y) {
        const rootHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--calendar-hour-height")) || HOUR_HEIGHT;
        return START_HOUR * 60 + (Math.max(0, y) / rootHeight) * 60;
    }

    function occurrenceTimestamp(event) {
        const date = parseDateKey(event.instanceDate || event.date);
        if (!event.allDay) {
            const [hour, minute] = event.start.split(":").map(Number);
            date.setHours(hour, minute, 0, 0);
        }
        return date.getTime();
    }

    function createId() {
        if (crypto?.randomUUID) return crypto.randomUUID();
        return `cal_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function downloadText(filename, text, type) {
        const blob = new Blob([text], { type });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = filename;
        document.body.append(anchor);
        anchor.click();
        anchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 500);
    }

    function icsEscape(value) {
        return String(value ?? "")
            .replaceAll("\\", "\\\\")
            .replaceAll("\n", "\\n")
            .replaceAll(",", "\\,")
            .replaceAll(";", "\\;");
    }

    function icsUnescape(value) {
        return String(value ?? "")
            .replaceAll("\\n", "\n")
            .replaceAll("\\N", "\n")
            .replaceAll("\\,", ",")
            .replaceAll("\\;", ";")
            .replaceAll("\\\\", "\\");
    }

    function toIcsUtc(date) {
        return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    }

    function toIcsLocal(dateKey, time) {
        return `${dateKey.replaceAll("-", "")}T${time.replace(":", "")}00`;
    }

    function parseIcsDate(key, value) {
        const allDay = /VALUE=DATE/i.test(key) || /^\d{8}$/.test(value);
        const match = String(value).match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2}))?/);
        if (!match) return null;
        return {
            date: `${match[1]}-${match[2]}-${match[3]}`,
            allDay,
            time: allDay ? "" : `${match[4] || "09"}:${match[5] || "00"}`
        };
    }
})();
