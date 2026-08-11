// --------------------------------------------------
// ELEMENTE
// --------------------------------------------------

const homeScreen = document.getElementById("homeScreen");
const sessionScreen = document.getElementById("sessionScreen");
const startOverviewScreen = document.getElementById("startOverviewScreen");
const plansScreen = document.getElementById("plansScreen");
const newPlanScreen = document.getElementById("newPlanScreen");
const planEditorScreen = document.getElementById("planEditorScreen");
const taskScreen = document.getElementById("taskScreen");
const breakScreen = document.getElementById("breakScreen");

const plansButton = document.getElementById("plansButton");
const startButton = document.getElementById("startButton");

const backFromPlans = document.getElementById("backFromPlans");
const addPlanButton = document.getElementById("addPlanButton");

const backFromNewPlan = document.getElementById("backFromNewPlan");

const planNameInput = document.getElementById("planName");
const createPlanButton = document.getElementById("createPlanButton");

const editorPlanTitle = document.getElementById("editorPlanTitle");
const editorPlanName = document.getElementById("editorPlanName");

const planItems = document.getElementById("planItems");
const emptyPlanMessage = document.getElementById("emptyPlanMessage");

const backFromEditor = document.getElementById("backFromEditor");

const addTaskButton = document.getElementById("addTaskButton");
const addBreakButton = document.getElementById("addBreakButton");

const savePlanButton = document.getElementById("savePlanButton");
const deletePlanButton = document.getElementById("deletePlanButton");

const taskName = document.getElementById("taskName");
const taskDuration = document.getElementById("taskDuration");
const taskNote = document.getElementById("taskNote");

const backFromTask = document.getElementById("backFromTask");
const saveTaskButton = document.getElementById("saveTaskButton");

const breakDuration = document.getElementById("breakDuration");

const backFromBreak = document.getElementById("backFromBreak");
const saveBreakButton = document.getElementById("saveBreakButton");

const plansList = document.getElementById("plansList");
const emptyPlansMessage = document.getElementById("emptyPlansMessage");

const backFromStartOverview =
    document.getElementById("backFromStartOverview");

const startPlanTitle =
    document.getElementById("startPlanTitle");

const noActivePlanMessage =
    document.getElementById("noActivePlanMessage");

const activePlanOverview =
    document.getElementById("activePlanOverview");

const startPlanItems =
    document.getElementById("startPlanItems");

const totalPlanDuration =
    document.getElementById("totalPlanDuration");

const goButton =
    document.getElementById("goButton");


// --------------------------------------------------
// SESSION-ELEMENTE
// --------------------------------------------------

const sessionContent =
    document.querySelector(".session-content");

const sessionType =
    document.getElementById("sessionType");

const sessionTitle =
    document.getElementById("sessionTitle");

const sessionProgress =
    document.getElementById("sessionProgress");

const sessionTimer =
    document.getElementById("sessionTimer");

const sessionCard =
    document.getElementById("sessionCard");

const sessionNote =
    document.getElementById("sessionNote");

const sessionFlipHint =
    document.getElementById("sessionFlipHint");

const topSand =
    document.getElementById("topSand");

const bottomSand =
    document.getElementById("bottomSand");

const sandStream =
    document.getElementById("sandStream");


// --------------------------------------------------
// DATEN
// --------------------------------------------------

let plans =
    JSON.parse(localStorage.getItem("plans")) || [];

let draftPlan = null;

/*
    null = neuer Plan
    sonst = ID eines vorhandenen Plans
*/
let editingPlanId = null;


// --------------------------------------------------
// LAUFENDE SESSION
// --------------------------------------------------

let sessionPlan = null;
let sessionIndex = 0;
let sessionEndTime = null;
let sessionInterval = null;
let sessionItemDurationMs = 0;


// --------------------------------------------------
// HILFSFUNKTIONEN
// --------------------------------------------------

function createId() {

    return (
        Date.now()
        +
        Math.floor(Math.random() * 100000)
    );
}


function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(currentScreen => {

            currentScreen.classList.remove("active");

        });

    screen.classList.add("active");
}


function savePlans() {

    localStorage.setItem(
        "plans",
        JSON.stringify(plans)
    );
}


function copyPlan(plan) {

    return JSON.parse(
        JSON.stringify(plan)
    );
}


function formatDuration(minutes) {

    const hours =
        Math.floor(minutes / 60);

    const remainingMinutes =
        minutes % 60;


    if (hours === 0) {

        return `${remainingMinutes} min`;

    }


    if (remainingMinutes === 0) {

        return `${hours} h`;

    }


    return `${hours} h ${remainingMinutes} min`;
}


function formatCountdown(milliseconds) {

    const totalSeconds =
        Math.max(
            0,
            Math.ceil(milliseconds / 1000)
        );

    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;


    return (
        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(seconds).padStart(2, "0")
    );
}


// --------------------------------------------------
// START-ÜBERSICHT
// --------------------------------------------------

function renderStartOverview() {

    const activePlan =
        plans.find(plan => plan.active);

    startPlanItems.innerHTML = "";


    // Kein aktiver Plan
    if (!activePlan) {

        startPlanTitle.textContent = "Start";

        noActivePlanMessage.style.display =
            "block";

        activePlanOverview.style.display =
            "none";

        return;
    }


    // Aktiver Plan vorhanden
    noActivePlanMessage.style.display =
        "none";

    activePlanOverview.style.display =
        "block";

    startPlanTitle.textContent =
        activePlan.name;


    let totalMinutes = 0;


    activePlan.items.forEach(
        (item, index) => {

            totalMinutes += item.duration;


            const element =
                document.createElement("div");

            element.classList.add(
                "start-plan-item"
            );


            if (item.type === "break") {

                element.classList.add(
                    "break-item"
                );

            }


            const left =
                document.createElement("div");

            left.classList.add(
                "start-item-left"
            );


            const number =
                document.createElement("span");

            number.classList.add(
                "start-item-number"
            );

            number.textContent =
                `${index + 1}.`;


            const name =
                document.createElement("span");

            name.classList.add(
                "start-item-name"
            );


            if (item.type === "task") {

                name.textContent =
                    item.name;

            } else {

                name.textContent =
                    "Pause";

            }


            const duration =
                document.createElement("span");

            duration.classList.add(
                "start-item-duration"
            );

            duration.textContent =
                formatDuration(item.duration);


            left.appendChild(number);
            left.appendChild(name);

            element.appendChild(left);
            element.appendChild(duration);

            startPlanItems.appendChild(
                element
            );
        }
    );


    totalPlanDuration.textContent =
        formatDuration(totalMinutes);
}


// --------------------------------------------------
// SESSION STARTEN
// --------------------------------------------------

function startSession(plan) {

    sessionPlan =
        copyPlan(plan);

    sessionIndex = 0;

    showScreen(sessionScreen);

    startCurrentSessionItem();
}


// --------------------------------------------------
// AKTUELLE EINHEIT STARTEN
// --------------------------------------------------

function startCurrentSessionItem() {

    if (!sessionPlan) {
        return;
    }


    // Plan fertig
    if (
        sessionIndex
        >=
        sessionPlan.items.length
    ) {

        finishSession();
        return;
    }


    const item =
        sessionPlan.items[sessionIndex];


    // Karte auf Vorderseite
    sessionCard.classList.remove(
        "flipped"
    );


    // -------------------------
    // AUFGABE
    // -------------------------

    if (item.type === "task") {

        sessionType.textContent =
            "Aufgabe";

        sessionTitle.textContent =
            item.name;


        sessionContent.classList.remove(
            "break-session"
        );

        sessionCard.classList.add(
            "can-flip"
        );


        if (item.note) {

            sessionNote.textContent =
                item.note;

        } else {

            sessionNote.textContent =
                "Keine Notiz für diese Aufgabe.";

        }


        sessionFlipHint.style.display =
            "block";
    }


        // -------------------------
        // PAUSE
    // -------------------------

    else {

        sessionType.textContent =
            "Pause";

        sessionTitle.textContent =
            "Pause";


        sessionContent.classList.add(
            "break-session"
        );

        sessionCard.classList.remove(
            "can-flip"
        );


        sessionFlipHint.style.display =
            "none";

        sessionNote.textContent =
            "";
    }


    sessionProgress.textContent =
        `${sessionIndex + 1} von ${sessionPlan.items.length}`;


    // Dauer in Millisekunden
    sessionItemDurationMs =
        item.duration * 60 * 1000;


    // Absolute Endzeit
    sessionEndTime =
        Date.now()
        +
        sessionItemDurationMs;


    // Alten Timer sicher stoppen
    if (sessionInterval !== null) {

        clearInterval(
            sessionInterval
        );

        sessionInterval = null;
    }


    // Sofort einmal aktualisieren
    updateSessionTimer();


    // Danach viermal pro Sekunde
    sessionInterval =
        setInterval(
            updateSessionTimer,
            250
        );
}


// --------------------------------------------------
// SANDUHR AKTUALISIEREN
// --------------------------------------------------

function updateHourglass(remaining) {

    if (sessionItemDurationMs <= 0) {
        return;
    }


    /*
        remainingRatio:
        1 = gerade begonnen
        0 = vollständig abgelaufen
    */

    const remainingRatio =
        Math.max(
            0,
            Math.min(
                1,
                remaining / sessionItemDurationMs
            )
        );


    const elapsedRatio =
        1 - remainingRatio;


    const chamberHeight = 90;


    // -------------------------
    // OBERER SAND
    // -------------------------

    const topHeight =
        chamberHeight
        *
        remainingRatio;


    topSand.setAttribute(
        "y",
        125 - topHeight
    );

    topSand.setAttribute(
        "height",
        topHeight
    );


    // -------------------------
    // UNTERER SAND
    // -------------------------

    const bottomHeight =
        chamberHeight
        *
        elapsedRatio;


    bottomSand.setAttribute(
        "y",
        225 - bottomHeight
    );

    bottomSand.setAttribute(
        "height",
        bottomHeight
    );


    // -------------------------
    // SANDSTRAHL
    // -------------------------

    if (remaining > 0) {

        sandStream.style.opacity =
            "1";

    } else {

        sandStream.style.opacity =
            "0";

    }
}


// --------------------------------------------------
// TIMER AKTUALISIEREN
// --------------------------------------------------

function updateSessionTimer() {

    if (sessionEndTime === null) {
        return;
    }


    const remaining =
        sessionEndTime
        -
        Date.now();


    // Textzeit
    sessionTimer.textContent =
        formatCountdown(
            remaining
        );


    // Sanduhr
    updateHourglass(
        remaining
    );


    // Einheit fertig
    if (remaining <= 0) {

        goToNextSessionItem();

    }
}


// --------------------------------------------------
// NÄCHSTE EINHEIT
// --------------------------------------------------

function goToNextSessionItem() {

    if (sessionInterval !== null) {

        clearInterval(
            sessionInterval
        );

        sessionInterval = null;
    }


    sessionEndTime = null;

    sessionIndex += 1;

    startCurrentSessionItem();
}


// --------------------------------------------------
// PLAN BEENDET
// --------------------------------------------------

function finishSession() {

    if (sessionInterval !== null) {

        clearInterval(
            sessionInterval
        );

        sessionInterval = null;
    }


    sessionPlan = null;

    sessionIndex = 0;

    sessionEndTime = null;

    sessionItemDurationMs = 0;


    sessionCard.classList.remove(
        "flipped"
    );

    sessionContent.classList.remove(
        "break-session"
    );


    showScreen(
        homeScreen
    );
}


// --------------------------------------------------
// PLANLISTE
// --------------------------------------------------

function renderPlans() {

    plansList.innerHTML = "";


    if (plans.length === 0) {

        emptyPlansMessage.style.display =
            "block";

        return;
    }


    emptyPlansMessage.style.display =
        "none";


    plans.forEach(plan => {

        const planElement =
            document.createElement("div");

        planElement.classList.add(
            "plan-item"
        );


        // PLANNAME

        const nameButton =
            document.createElement("button");

        nameButton.classList.add(
            "plan-name-button"
        );

        nameButton.textContent =
            plan.name;


        nameButton.addEventListener(
            "click",
            () => {

                openExistingPlan(
                    plan.id
                );

            }
        );


        // HERZ

        const heartButton =
            document.createElement("button");

        heartButton.classList.add(
            "heart-button"
        );

        heartButton.textContent =
            plan.active ? "♥" : "♡";


        heartButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                activatePlan(
                    plan.id
                );

            }
        );


        planElement.appendChild(
            nameButton
        );

        planElement.appendChild(
            heartButton
        );

        plansList.appendChild(
            planElement
        );
    });
}


// --------------------------------------------------
// PLAN AKTIVIEREN
// --------------------------------------------------

function activatePlan(planId) {

    plans.forEach(plan => {

        plan.active =
            plan.id === planId;

    });


    savePlans();

    renderPlans();
}


// --------------------------------------------------
// VORHANDENEN PLAN ÖFFNEN
// --------------------------------------------------

function openExistingPlan(planId) {

    const plan =
        plans.find(
            currentPlan =>
                currentPlan.id === planId
        );


    if (!plan) {
        return;
    }


    editingPlanId =
        plan.id;

    draftPlan =
        copyPlan(plan);


    deletePlanButton.style.display =
        "block";


    renderPlanEditor();

    showScreen(
        planEditorScreen
    );
}


// --------------------------------------------------
// PLANEDITOR ANZEIGEN
// --------------------------------------------------

function renderPlanEditor() {

    if (!draftPlan) {
        return;
    }


    editorPlanTitle.textContent =
        draftPlan.name;

    editorPlanName.value =
        draftPlan.name;

    planItems.innerHTML = "";


    if (draftPlan.items.length === 0) {

        emptyPlanMessage.style.display =
            "block";

        return;
    }


    emptyPlanMessage.style.display =
        "none";


    draftPlan.items.forEach(
        (item, index) => {

            const element =
                document.createElement("div");

            element.classList.add(
                "editor-item"
            );


            // NUMMER

            const number =
                document.createElement("div");

            number.classList.add(
                "item-number"
            );

            number.textContent =
                `${index + 1}.`;


            // INFORMATION

            const information =
                document.createElement("div");

            information.classList.add(
                "item-information"
            );


            const title =
                document.createElement("div");

            title.classList.add(
                "item-title"
            );


            const details =
                document.createElement("div");

            details.classList.add(
                "item-details"
            );


            if (item.type === "task") {

                title.textContent =
                    item.name;

                details.textContent =
                    `${item.duration} Minuten`;


                if (item.note) {

                    details.textContent +=
                        ` · ${item.note}`;

                }

            } else {

                title.textContent =
                    "Pause";

                details.textContent =
                    `${item.duration} Minuten`;

            }


            information.appendChild(
                title
            );

            information.appendChild(
                details
            );


            // STEUERUNG

            const controls =
                document.createElement("div");

            controls.classList.add(
                "item-controls"
            );


            // HOCH

            const upButton =
                document.createElement("button");

            upButton.classList.add(
                "move-item"
            );

            upButton.textContent =
                "↑";

            upButton.disabled =
                index === 0;


            upButton.addEventListener(
                "click",
                () => {

                    moveItem(
                        index,
                        index - 1
                    );

                }
            );


            // RUNTER

            const downButton =
                document.createElement("button");

            downButton.classList.add(
                "move-item"
            );

            downButton.textContent =
                "↓";

            downButton.disabled =
                index
                ===
                draftPlan.items.length - 1;


            downButton.addEventListener(
                "click",
                () => {

                    moveItem(
                        index,
                        index + 1
                    );

                }
            );


            // LÖSCHEN

            const deleteButton =
                document.createElement("button");

            deleteButton.classList.add(
                "delete-item"
            );

            deleteButton.textContent =
                "×";


            deleteButton.addEventListener(
                "click",
                () => {

                    draftPlan.items.splice(
                        index,
                        1
                    );

                    renderPlanEditor();

                }
            );


            controls.appendChild(
                upButton
            );

            controls.appendChild(
                downButton
            );

            controls.appendChild(
                deleteButton
            );


            element.appendChild(
                number
            );

            element.appendChild(
                information
            );

            element.appendChild(
                controls
            );


            planItems.appendChild(
                element
            );
        }
    );
}


// --------------------------------------------------
// ELEMENT VERSCHIEBEN
// --------------------------------------------------

function moveItem(
    fromIndex,
    toIndex
) {

    if (toIndex < 0) {
        return;
    }


    if (
        toIndex
        >=
        draftPlan.items.length
    ) {
        return;
    }


    const movedItem =
        draftPlan.items.splice(
            fromIndex,
            1
        )[0];


    draftPlan.items.splice(
        toIndex,
        0,
        movedItem
    );


    renderPlanEditor();
}


// --------------------------------------------------
// STARTSEITE
// --------------------------------------------------

plansButton.addEventListener(
    "click",
    () => {

        renderPlans();

        showScreen(
            plansScreen
        );

    }
);


startButton.addEventListener(
    "click",
    () => {

        renderStartOverview();

        showScreen(
            startOverviewScreen
        );

    }
);


// --------------------------------------------------
// START-ÜBERSICHT
// --------------------------------------------------

backFromStartOverview.addEventListener(
    "click",
    () => {

        showScreen(
            homeScreen
        );

    }
);


goButton.addEventListener(
    "click",
    () => {

        const activePlan =
            plans.find(
                plan => plan.active
            );


        if (!activePlan) {
            return;
        }


        if (
            activePlan.items.length === 0
        ) {
            return;
        }


        startSession(
            activePlan
        );

    }
);


// --------------------------------------------------
// KARTE UMDREHEN
// --------------------------------------------------

sessionCard.addEventListener(
    "click",
    () => {

        if (!sessionPlan) {
            return;
        }


        const item =
            sessionPlan.items[
                sessionIndex
                ];


        if (!item) {
            return;
        }


        // Pausen dürfen nicht umgedreht werden
        if (item.type !== "task") {
            return;
        }


        sessionCard.classList.toggle(
            "flipped"
        );

    }
);


// --------------------------------------------------
// PLANLISTE
// --------------------------------------------------

backFromPlans.addEventListener(
    "click",
    () => {

        showScreen(
            homeScreen
        );

    }
);


addPlanButton.addEventListener(
    "click",
    () => {

        editingPlanId = null;

        draftPlan = null;

        planNameInput.value = "";


        showScreen(
            newPlanScreen
        );


        planNameInput.focus();

    }
);


// --------------------------------------------------
// NEUER PLAN: NAME
// --------------------------------------------------

backFromNewPlan.addEventListener(
    "click",
    () => {

        showScreen(
            plansScreen
        );

    }
);


createPlanButton.addEventListener(
    "click",
    () => {

        const name =
            planNameInput.value.trim();


        if (name === "") {
            return;
        }


        editingPlanId = null;


        draftPlan = {

            id: createId(),

            name: name,

            active: false,

            items: []

        };


        deletePlanButton.style.display =
            "none";


        renderPlanEditor();

        showScreen(
            planEditorScreen
        );

    }
);


planNameInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            createPlanButton.click();

        }

    }
);


// --------------------------------------------------
// PLANEDITOR: NAME
// --------------------------------------------------

editorPlanName.addEventListener(
    "input",
    () => {

        if (!draftPlan) {
            return;
        }


        draftPlan.name =
            editorPlanName.value;


        editorPlanTitle.textContent =
            draftPlan.name || "Plan";

    }
);


// --------------------------------------------------
// EDITOR VERLASSEN
// --------------------------------------------------

backFromEditor.addEventListener(
    "click",
    () => {

        const confirmLeave =
            confirm(
                "Änderungen verwerfen?"
            );


        if (!confirmLeave) {
            return;
        }


        draftPlan = null;

        editingPlanId = null;


        renderPlans();

        showScreen(
            plansScreen
        );

    }
);


// --------------------------------------------------
// AUFGABE HINZUFÜGEN
// --------------------------------------------------

addTaskButton.addEventListener(
    "click",
    () => {

        taskName.value = "";

        taskDuration.value = "";

        taskNote.value = "";


        showScreen(
            taskScreen
        );


        taskName.focus();

    }
);


backFromTask.addEventListener(
    "click",
    () => {

        showScreen(
            planEditorScreen
        );

    }
);


saveTaskButton.addEventListener(
    "click",
    () => {

        const name =
            taskName.value.trim();

        const duration =
            Number(
                taskDuration.value
            );

        const note =
            taskNote.value.trim();


        if (name === "") {

            alert(
                "Bitte gib der Aufgabe einen Namen."
            );

            return;
        }


        if (
            !duration
            ||
            duration <= 0
        ) {

            alert(
                "Bitte gib eine gültige Dauer ein."
            );

            return;
        }


        draftPlan.items.push({

            id: createId(),

            type: "task",

            name: name,

            duration: duration,

            note: note

        });


        renderPlanEditor();

        showScreen(
            planEditorScreen
        );

    }
);


// --------------------------------------------------
// PAUSE HINZUFÜGEN
// --------------------------------------------------

addBreakButton.addEventListener(
    "click",
    () => {

        breakDuration.value =
            "";


        showScreen(
            breakScreen
        );


        breakDuration.focus();

    }
);


backFromBreak.addEventListener(
    "click",
    () => {

        showScreen(
            planEditorScreen
        );

    }
);


saveBreakButton.addEventListener(
    "click",
    () => {

        const duration =
            Number(
                breakDuration.value
            );


        if (
            !duration
            ||
            duration <= 0
        ) {

            alert(
                "Bitte gib eine gültige Dauer ein."
            );

            return;
        }


        draftPlan.items.push({

            id: createId(),

            type: "break",

            duration: duration

        });


        renderPlanEditor();

        showScreen(
            planEditorScreen
        );

    }
);


// --------------------------------------------------
// PLAN SPEICHERN
// --------------------------------------------------

savePlanButton.addEventListener(
    "click",
    () => {

        if (!draftPlan) {
            return;
        }


        draftPlan.name =
            editorPlanName.value.trim();


        if (
            draftPlan.name === ""
        ) {

            alert(
                "Der Plan braucht einen Namen."
            );

            return;
        }


        if (
            draftPlan.items.length === 0
        ) {

            alert(
                "Füge mindestens eine Aufgabe oder Pause hinzu."
            );

            return;
        }


        // NEUER PLAN
        if (
            editingPlanId === null
        ) {

            plans.push(
                copyPlan(
                    draftPlan
                )
            );

        }


        // VORHANDENER PLAN
        else {

            const index =
                plans.findIndex(
                    plan =>
                        plan.id
                        ===
                        editingPlanId
                );


            if (index !== -1) {

                plans[index] =
                    copyPlan(
                        draftPlan
                    );

            }
        }


        savePlans();


        draftPlan = null;

        editingPlanId = null;


        renderPlans();

        showScreen(
            plansScreen
        );

    }
);


// --------------------------------------------------
// PLAN LÖSCHEN
// --------------------------------------------------

deletePlanButton.addEventListener(
    "click",
    () => {

        if (
            editingPlanId === null
        ) {
            return;
        }


        const shouldDelete =
            confirm(
                "Diesen Plan wirklich löschen?"
            );


        if (!shouldDelete) {
            return;
        }


        plans =
            plans.filter(
                plan =>
                    plan.id
                    !==
                    editingPlanId
            );


        savePlans();


        draftPlan = null;

        editingPlanId = null;


        renderPlans();

        showScreen(
            plansScreen
        );

    }
);


// --------------------------------------------------
// INITIALISIERUNG
// --------------------------------------------------

renderPlans();