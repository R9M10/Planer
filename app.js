(() => {
    "use strict";

    // ==================================================
    // DOM
    // ==================================================

    const $ = id => document.getElementById(id);

    const screens = {
        home: $("homeScreen"),
        plannerHub: $("plannerHubScreen"),
        startOverview: $("startOverviewScreen"),
        plans: $("plansScreen"),
        newPlan: $("newPlanScreen"),
        planEditor: $("planEditorScreen"),
        task: $("taskScreen"),
        break: $("breakScreen"),
        session: $("sessionScreen"),
        sessionReview: $("sessionReviewScreen"),
        planComplete: $("planCompleteScreen"),
        textsHub: $("textsHubScreen"),
        chessSetup: $("chessSetupScreen"),
        chessPlay: $("chessPlayScreen"),
        chessAnalysis: $("chessAnalysisScreen"),
        timeline: $("timelineScreen"),
        fullTextEditor: $("fullTextEditorScreen"),
        physicsList: $("physicsListScreen"),
        physicsFolderEditor: $("physicsFolderEditorScreen"),
        physicsEditor: $("physicsEditorScreen"),
        thoughtList: $("thoughtListScreen"),
        thoughtFolderEditor: $("thoughtFolderEditorScreen"),
        thoughtEditor: $("thoughtEditorScreen"),
        dayList: $("dayListScreen"),
        dayEditor: $("dayEditorScreen"),
        dreamList: $("dreamListScreen"),
        dreamEditor: $("dreamEditorScreen"),
        reviewLibrary: $("reviewLibraryScreen"),
        folderEditor: $("folderEditorScreen"),
        reviewEditor: $("reviewEditorScreen")
    };

    const el = {
        backupFileInput: $("backupFileInput"),
        screenTransitionOverlay: $("screenTransitionOverlay"),

        miniSessionBar: $("miniSessionBar"),
        miniSessionButton: $("miniSessionButton"),
        miniSessionName: $("miniSessionName"),
        miniSessionTime: $("miniSessionTime"),

        openPlannerButton: $("openPlannerButton"),
        openTextsButton: $("openTextsButton"),
        openPhysicsButton: $("openPhysicsButton"),
        openChessButton: $("openChessButton"),
        timelineButton: $("timelineButton"),
        backupButton: $("backupButton"),
        restoreButton: $("restoreButton"),
        themeButton: $("themeButton"),

        backFromPlannerHub: $("backFromPlannerHub"),
        plannerStartButton: $("plannerStartButton"),
        plannerPlansButton: $("plannerPlansButton"),
        plannerBlackHoleHotspot: $("plannerBlackHoleHotspot"),
        plannerGalaxyBackHotspot: $("plannerGalaxyBackHotspot"),

        backFromStartOverview: $("backFromStartOverview"),
        startPlanTitle: $("startPlanTitle"),
        noActivePlanMessage: $("noActivePlanMessage"),
        activePlanOverview: $("activePlanOverview"),
        startPlanItems: $("startPlanItems"),
        totalPlanDuration: $("totalPlanDuration"),
        goButton: $("goButton"),

        backFromPlans: $("backFromPlans"),
        addPlanButton: $("addPlanButton"),
        plansList: $("plansList"),
        emptyPlansMessage: $("emptyPlansMessage"),

        backFromNewPlan: $("backFromNewPlan"),
        planName: $("planName"),
        newPlanError: $("newPlanError"),
        createPlanButton: $("createPlanButton"),

        backFromEditor: $("backFromEditor"),
        editorPlanTitle: $("editorPlanTitle"),
        editorPlanName: $("editorPlanName"),
        planItems: $("planItems"),
        emptyPlanMessage: $("emptyPlanMessage"),
        addTaskButton: $("addTaskButton"),
        addBreakButton: $("addBreakButton"),
        editorError: $("editorError"),
        savePlanButton: $("savePlanButton"),
        deletePlanButton: $("deletePlanButton"),

        backFromTask: $("backFromTask"),
        taskName: $("taskName"),
        taskDuration: $("taskDuration"),
        taskNote: $("taskNote"),
        taskError: $("taskError"),
        saveTaskButton: $("saveTaskButton"),

        backFromBreak: $("backFromBreak"),
        breakDuration: $("breakDuration"),
        breakError: $("breakError"),
        saveBreakButton: $("saveBreakButton"),

        sessionMenuButton: $("sessionMenuButton"),
        sessionPauseButton: $("sessionPauseButton"),
        sessionEndButton: $("sessionEndButton"),
        sessionType: $("sessionType"),
        sessionTitle: $("sessionTitle"),
        sessionProgress: $("sessionProgress"),
        sessionCard: $("sessionCard"),
        sessionFront: $("sessionFront"),
        sessionBack: $("sessionBack"),
        sessionTimer: $("sessionTimer"),
        sessionNote: $("sessionNote"),
        sessionNoteWrap: $("sessionNoteWrap"),
        sessionFlipHint: $("sessionFlipHint"),
        universeCanvas: $("universeCanvas"),
        sessionCurveName: $("sessionCurveName"),

        reviewTitle: $("reviewTitle"),
        reviewNote: $("reviewNote"),
        reviewDuration: $("reviewDuration"),
        reviewError: $("reviewError"),
        saveReviewButton: $("saveReviewButton"),

        nietzscheQuote: $("nietzscheQuote"),
        nietzscheSource: $("nietzscheSource"),
        completePlanButton: $("completePlanButton"),

        backFromPhysicsList: $("backFromPhysicsList"),
        physicsCategoryIcon: $("physicsCategoryIcon"),
        physicsSortPanel: $("physicsSortPanel"),
        physicsSortSelect: $("physicsSortSelect"),
        addPhysicsNoteButton: $("addPhysicsNoteButton"),
        addPhysicsFolderButton: $("addPhysicsFolderButton"),
        physicsBreadcrumbs: $("physicsBreadcrumbs"),
        physicsEmpty: $("physicsEmpty"),
        physicsList: $("physicsList"),

        backFromPhysicsFolderEditor: $("backFromPhysicsFolderEditor"),
        physicsFolderName: $("physicsFolderName"),
        physicsFolderError: $("physicsFolderError"),
        savePhysicsFolderButton: $("savePhysicsFolderButton"),
        deletePhysicsFolderButton: $("deletePhysicsFolderButton"),

        backFromPhysicsEditor: $("backFromPhysicsEditor"),
        physicsHeaderTitle: $("physicsHeaderTitle"),
        physicsPdfButton: $("physicsPdfButton"),
        physicsFormulaAlignLeftButton: $("physicsFormulaAlignLeftButton"),
        physicsFormulaAlignCenterButton: $("physicsFormulaAlignCenterButton"),
        physicsConstantsButton: $("physicsConstantsButton"),
        physicsConstantsMenu: $("physicsConstantsMenu"),
        physicsTitle: $("physicsTitle"),
        physicsBody: $("physicsBody"),
        physicsFolderSelect: $("physicsFolderSelect"),
        physicsSaveState: $("physicsSaveState"),
        deletePhysicsNoteButton: $("deletePhysicsNoteButton"),

        physicsFormulaMenu: $("physicsFormulaMenu"),
        convertPhysicsFormulaButton: $("convertPhysicsFormulaButton"),
        solvePhysicsFormulaButton: $("solvePhysicsFormulaButton"),
        editPhysicsFormulaButton: $("editPhysicsFormulaButton"),

        physicsSolverPanel: $("physicsSolverPanel"),
        physicsSolverHeading: $("physicsSolverHeading"),
        physicsVariablePicker: $("physicsVariablePicker"),
        physicsVariableButtons: $("physicsVariableButtons"),
        physicsSolverError: $("physicsSolverError"),
        physicsSolverSteps: $("physicsSolverSteps"),
        acceptPhysicsSolutionButton: $("acceptPhysicsSolutionButton"),
        closePhysicsSolverButton: $("closePhysicsSolverButton"),

        backFromTextsHub: $("backFromTextsHub"),
        textsMenuButton: $("textsMenuButton"),
        textsMenuPanel: $("textsMenuPanel"),
        closeTextsStudyMenuButton: $("closeTextsStudyMenuButton"),
        textsSkyBackHotspot: $("textsSkyBackHotspot"),
        textsDrawerMenuHotspot: $("textsDrawerMenuHotspot"),

        chessSetupEloValue: $("chessSetupEloValue"),
        chessSetupEloSlider: $("chessSetupEloSlider"),
        chooseChessWhite: $("chooseChessWhite"),
        chooseChessBlack: $("chooseChessBlack"),
        startChessGameButton: $("startChessGameButton"),

        backFromChessPlay: $("backFromChessPlay"),
        chessPlayBoard: $("chessPlayBoard"),
        chessPlayPromotionPanel: $("chessPlayPromotionPanel"),
        chessPlayPromotionChoices: $("chessPlayPromotionChoices"),

        backFromChessAnalysis: $("backFromChessAnalysis"),
        chessAnalysisResult: $("chessAnalysisResult"),
        chessAnalysisBoard: $("chessAnalysisBoard"),
        chessEvalBar: $("chessEvalBar"),
        chessEvalWhite: $("chessEvalWhite"),
        chessEvalLabel: $("chessEvalLabel"),
        chessAnalysisFeedback: $("chessAnalysisFeedback"),
        chessAnalysisPrev: $("chessAnalysisPrev"),
        chessAnalysisNext: $("chessAnalysisNext"),
        chessAnalysisMoveLabel: $("chessAnalysisMoveLabel"),
        chessAnalysisCounter: $("chessAnalysisCounter"),
        chessAnalysisReturnLine: $("chessAnalysisReturnLine"),
        chessAnalysisPromotionPanel: $("chessAnalysisPromotionPanel"),
        chessAnalysisPromotionChoices: $("chessAnalysisPromotionChoices"),

        backFromTimeline: $("backFromTimeline"),
        timelineEmpty: $("timelineEmpty"),
        timelineList: $("timelineList"),
        openThoughtsButton: $("openThoughtsButton"),
        openNotesButton: $("openNotesButton"),
        openDaysButton: $("openDaysButton"),
        openDreamsButton: $("openDreamsButton"),
        openFilmsButton: $("openFilmsButton"),
        openBooksButton: $("openBooksButton"),

        backFromThoughtList: $("backFromThoughtList"),
        thoughtCategoryIcon: $("thoughtCategoryIcon"),
        thoughtSortPanel: $("thoughtSortPanel"),
        thoughtSortSelect: $("thoughtSortSelect"),
        addThoughtButton: $("addThoughtButton"),
        addThoughtFolderButton: $("addThoughtFolderButton"),
        thoughtBreadcrumbs: $("thoughtBreadcrumbs"),
        thoughtEmpty: $("thoughtEmpty"),
        thoughtList: $("thoughtList"),

        backFromThoughtFolderEditor: $("backFromThoughtFolderEditor"),
        thoughtFolderName: $("thoughtFolderName"),
        thoughtFolderError: $("thoughtFolderError"),
        saveThoughtFolderButton: $("saveThoughtFolderButton"),
        deleteThoughtFolderButton: $("deleteThoughtFolderButton"),

        backFromThoughtEditor: $("backFromThoughtEditor"),
        thoughtEditorHeading: $("thoughtEditorHeading"),
        thoughtToolsButton: $("thoughtToolsButton"),
        thoughtToolsMenu: $("thoughtToolsMenu"),
        thoughtPdfButton: $("thoughtPdfButton"),
        thoughtColor: $("thoughtColor"),
        thoughtTitle: $("thoughtTitle"),
        thoughtBody: $("thoughtBody"),
        thoughtFolderSelect: $("thoughtFolderSelect"),
        thoughtSaveState: $("thoughtSaveState"),
        deleteThoughtButton: $("deleteThoughtButton"),

        backFromDayList: $("backFromDayList"),
        addDayButton: $("addDayButton"),
        dayEmpty: $("dayEmpty"),
        dayList: $("dayList"),

        backFromDayEditor: $("backFromDayEditor"),
        dayPdfButton: $("dayPdfButton"),
        dayDate: $("dayDate"),
        dayTitle: $("dayTitle"),
        dayMood: $("dayMood"),
        dayBody: $("dayBody"),
        dayReflection: $("dayReflection"),
        daySaveState: $("daySaveState"),
        deleteDayButton: $("deleteDayButton"),

        backFromDreamList: $("backFromDreamList"),
        addDreamButton: $("addDreamButton"),
        dreamEmpty: $("dreamEmpty"),
        dreamList: $("dreamList"),

        backFromDreamEditor: $("backFromDreamEditor"),
        dreamPdfButton: $("dreamPdfButton"),
        dreamDate: $("dreamDate"),
        dreamTitle: $("dreamTitle"),
        dreamManifest: $("dreamManifest"),
        dreamAffect: $("dreamAffect"),
        dreamDayResidue: $("dreamDayResidue"),
        dreamAssociations: $("dreamAssociations"),
        dreamCondensation: $("dreamCondensation"),
        dreamDisplacement: $("dreamDisplacement"),
        dreamWishConflict: $("dreamWishConflict"),
        dreamInterpretation: $("dreamInterpretation"),
        dreamSaveState: $("dreamSaveState"),
        deleteDreamButton: $("deleteDreamButton"),

        backFromReviewLibrary: $("backFromReviewLibrary"),
        reviewLibraryIcon: $("reviewLibraryIcon"),
        reviewSortPanel: $("reviewSortPanel"),
        addReviewEntryButton: $("addReviewEntryButton"),
        reviewBreadcrumbs: $("reviewBreadcrumbs"),
        addFolderButton: $("addFolderButton"),
        reviewSortSelect: $("reviewSortSelect"),
        reviewLibraryEmpty: $("reviewLibraryEmpty"),
        reviewLibraryList: $("reviewLibraryList"),

        backFromFolderEditor: $("backFromFolderEditor"),
        folderName: $("folderName"),
        folderError: $("folderError"),
        saveFolderButton: $("saveFolderButton"),
        deleteFolderButton: $("deleteFolderButton"),

        backFromReviewEditor: $("backFromReviewEditor"),
        reviewEditorHeading: $("reviewEditorHeading"),
        reviewPdfButton: $("reviewPdfButton"),
        reviewEntryTitle: $("reviewEntryTitle"),
        reviewEntryRating: $("reviewEntryRating"),
        reviewEntrySummary: $("reviewEntrySummary"),
        reviewEntryInterpretation: $("reviewEntryInterpretation"),
        reviewEntryReview: $("reviewEntryReview"),
        reviewEntryFolder: $("reviewEntryFolder"),
        reviewEntryError: $("reviewEntryError"),
        saveReviewEntryButton: $("saveReviewEntryButton"),
        deleteReviewEntryButton: $("deleteReviewEntryButton"),

        cancelFullTextEditorButton: $("cancelFullTextEditorButton"),
        finishFullTextEditorButton: $("finishFullTextEditorButton"),
        fullTextEditorTitle: $("fullTextEditorTitle"),
        fullTextEditorArea: $("fullTextEditorArea")
    };


    // ==================================================
    // STATE
    // ==================================================

    const APP_KEY = "personalPlannerSuite_v5";
    const OLD_APP_KEY = "personalPlannerSuite_v4";
    const OLDER_APP_KEY = "personalPlannerSuite_v3";
    const OLDEST_APP_KEY = "personalPlannerSuite_v2";
    const ANCIENT_APP_KEY = "personalPlannerSuite_v1";
    const LEGACY_PLANS_KEY = "plans";
    const ACTIVE_SESSION_KEY = "personalPlannerSuite_activeSession_v1";
    const V20_THEME_DEFAULT_KEY = "personalPlannerSuite_v20ThemeInitialized";

    let state = loadState();

    let draftPlan = null;
    let editingPlanId = null;
    let editingPlanItemId = null;

    let sessionPlan = null;
    let sessionIndex = 0;
    let sessionEndTime = null;
    let sessionInterval = null;
    let sessionItemDurationMs = 0;
    let sessionPaused = false;
    let sessionPausedRemainingMs = 0;
    let sessionCompletionPending = false;
    let sessionCompleting = false;
    let sessionPlanFinishedPending = false;
    let sessionBackVisible = false;
    let completionQuote = null;

    let universeParticles = [];
    let universeNodes = [];
    let universeObserverIndex = 0;
    let universeExpansionModel = 0;
    let universeFrameHandle = null;
    let universeManualProgress = null;
    let universeLastRendered = [];
    let universeObserverPulseUntil = 0;
    let universeSeed = 0;

    let currentPhysicsFolderId = null;
    let currentPhysicsNoteId = null;
    let currentPhysicsFolderEditId = null;
    let physicsSaveTimer = null;
    let savedPhysicsRange = null;
    let selectedPhysicsFormula = null;
    let pendingPhysicsSolve = null;
    let acceptedPhysicsSolutionLatex = null;
    let physicsToolbarInteraction = false;

    let currentRichKind = "thoughts";
    let currentThoughtFolderId = null;
    let currentThoughtId = null;
    let currentThoughtFolderEditId = null;
    let thoughtSaveTimer = null;
    let savedThoughtRange = null;

    let currentDayId = null;
    let daySaveTimer = null;

    let currentDreamId = null;
    let dreamSaveTimer = null;

    let reviewKind = "films";
    let currentReviewFolderId = null;
    let currentReviewEntryId = null;
    let currentFolderEditId = null;

    let screenTransitionToken = 0;
    let screenTransitionCleanupTimer = null;

    const CHESS_STORAGE_KEY = "personalPlannerSuite_chess_v2";

    let ChessConstructor = null;
    let chessLibraryPromise = null;

    let chessGame = null;
    let chessElo = 1500;
    let chessHumanColor = "w";
    let chessSelectedSquare = null;
    let chessLegalMoves = [];
    let chessLastMove = null;
    let chessPendingPromotion = null;
    let chessEngineThinking = false;
    let chessEngineRequestToken = 0;

    let chessEngine = null;
    let chessEngineReady = false;
    let chessEngineFailed = false;
    let chessEngineErrorMessage = "";
    let chessEngineReadyWaiters = [];
    let chessEngineTask = null;

    let chessFinalPgn = "";
    let chessFinalResult = "";
    let chessAnalysisFens = [];
    let chessAnalysisSans = [];
    let chessAnalysisIndex = 0;
    let chessAnalysisGame = null;
    let chessAnalysisSelectedSquare = null;
    let chessAnalysisLegalMoves = [];
    let chessAnalysisLastMove = null;
    let chessAnalysisVariation = false;
    let chessAnalysisBaseFen = "";
    let chessAnalysisBaseEval = null;
    let chessAnalysisEvalToken = 0;
    let chessAnalysisEvalCache = new Map();
    let chessAnalysisPromotion = null;

    let fullTextTarget = null;
    let fullTextPreviousScreen = null;
    let fullTextPreviousScrollY = 0;



    // ==================================================
    // HELPERS
    // ==================================================

    function appIconSvg(
        kind
    ) {
        const icons = {
            planner:
                `<svg viewBox="0 0 48 48" aria-hidden="true">
                    <path class="app-icon-main" d="M13 12.5h22a4.5 4.5 0 0 1 4.5 4.5v18a5 5 0 0 1-5 5H16a4.5 4.5 0 0 1-4.5-4.5V17a4.5 4.5 0 0 1 4.5-4.5Z"/>
                    <path class="app-icon-main app-icon-soft" d="M16.5 20.5H33M16.5 27h13M16.5 33h9.5"/>
                    <path class="app-icon-accent" d="M22 9.5c2-2.5 6-2.7 8.1-.5 2.5 2.6 1.7 6.4-.9 8.8l-5.2 4.7-5.2-4.7c-2.6-2.4-3.4-6.2-.9-8.8 2.1-2.2 6.1-2 8.1.5Z"/>
                </svg>`,
            texts:
                `<svg viewBox="0 0 48 48" aria-hidden="true">
                    <path class="app-icon-main" d="M12 9.5h20.5a4 4 0 0 1 4 4V38H15.5A3.5 3.5 0 0 1 12 34.5Z"/>
                    <path class="app-icon-main app-icon-soft" d="M17 18h12M17 24h10M17 30h8"/>
                    <path class="app-icon-accent" d="m29.8 34.2 9.4-11.3 2.7 2.2-9.4 11.2-4.7 1.2Z"/>
                    <path class="app-icon-accent" d="M38.4 23.8 41 26"/>
                    <circle class="app-icon-accent-dot" cx="20.2" cy="13.7" r="1.55"/>
                </svg>`,
            play:
                `<svg viewBox="0 0 48 48" aria-hidden="true">
                    <path class="app-icon-accent play-outline" d="m17 13 17 11-17 11Z"/>
                </svg>`
        };

        return (
            icons[
                kind
            ]
            ??
            icons.planner
        );
    }


    function categoryIconSvg(
        kind
    ) {
        const icons = {
            thoughts:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <path class="icon-main" d="M5 12h22M7 25h18M9 12v11M14 12v11M18 12v11M23 12v11M6 10l10-6 10 6"/>
                    <circle class="icon-accent" cx="16" cy="5.8" r="1.7"/>
                </svg>`,
            notes:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <rect class="icon-main" x="8" y="6" width="17" height="21" rx="2"/>
                    <path class="icon-main" d="M12 11h9M12 16h9M12 21h7"/>
                    <circle class="icon-accent" cx="8" cy="10" r="1.4"/>
                    <circle class="icon-accent" cx="8" cy="16" r="1.4"/>
                </svg>`,
            days:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <circle class="icon-accent" cx="16" cy="16" r="5"/>
                    <path class="icon-main" d="M16 3v5M16 24v5M3 16h5M24 16h5M7 7l3.5 3.5M21.5 21.5L25 25M25 7l-3.5 3.5M10.5 21.5L7 25"/>
                </svg>`,
            dreams:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <path class="icon-accent" d="M22.8 23.7A11 11 0 1 1 18.2 5.1 9 9 0 1 0 22.8 23.7Z"/>
                    <circle class="icon-main" cx="24.5" cy="8" r="1"/>
                </svg>`,
            films:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <rect class="icon-main" x="5" y="12" width="17" height="13" rx="2"/>
                    <path class="icon-main" d="m22 16 6-3v11l-6-3Z"/>
                    <circle class="icon-accent film-reel-accent" cx="10" cy="8" r="3.2"/>
                    <circle class="icon-accent film-reel-accent" cx="18" cy="8" r="3.2"/>
                </svg>`,
            books:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <path class="icon-main" d="M6 8.8c3.8-1.2 7-.7 10 2.4 3-3.1 6.2-3.6 10-2.4v14.4c-3.6-1.1-6.9-.5-10 2.5-3.1-3-6.4-3.6-10-2.5Z"/>
                    <path class="icon-main" d="M16 11.2v14"/>
                    <path class="icon-accent" d="M20.6 8.4c.6-1 2.2-1.1 2.9-.2.9 1 .6 2.3-.4 3.2l-1.8 1.7-1.8-1.7c-1-.9-1.3-2.2-.4-3.2.7-.9 2.3-.8 2.9.2Z"/>
                </svg>`,
            physics:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <path class="blackhole-glow" d="M2.4 18c5.8-8.4 21.4-8.4 27.2 0-5.8 6.7-21.4 6.7-27.2 0Z"/>
                    <ellipse class="blackhole-disk" cx="16" cy="17.1" rx="13.4" ry="5.15"/>
                    <path class="blackhole-disk bright" d="M4.2 18.4c5.2 2.4 18.4 2.4 23.6 0"/>
                    <circle class="blackhole-horizon" cx="16" cy="16.6" r="4.9"/>
                    <path class="blackhole-lens" d="M11.4 9.5c1.5-2.6 7.7-2.6 9.2 0M10.8 23.7c1.8 2.2 8.6 2.2 10.4 0"/>
                    <path class="blackhole-spark" d="M24.6 11.5 26 10.2M25 14.1h2M6.8 20.8l1.1-1M6 17.8h1.8"/>
                </svg>`
        };

        return (
            icons[
                kind
            ]
            ??
            icons.notes
        );
    }


    function uiIconSvg(
        kind
    ) {
        const icons = {
            clock:
                `<svg viewBox="0 0 32 32" aria-hidden="true">
                    <circle class="ui-icon-main" cx="16" cy="16" r="10.5"/>
                    <path class="ui-icon-main" d="M16 9.8v6.4l4 2.3"/>
                    <circle class="ui-icon-accent" cx="16" cy="16" r="1.4"/>
                    <path class="ui-icon-accent" d="M16 5.8v1.8M26.2 16h-1.8M16 26.2v-1.8M5.8 16h1.8"/>
                </svg>`
        };

        return (
            icons[
                kind
            ]
            ??
            icons.clock
        );
    }


    function bookshelfIconSvg() {
        return `<svg viewBox="0 0 32 32" aria-hidden="true">
            <path class="shelf-frame" d="M4.8 6.2h22.4M5.8 25.6h20.4M6.2 6.2v19.4M25.8 6.2v19.4"/>
            <path class="shelf-frame" d="M6.2 22.8h19.6"/>
            <rect class="book-spine book-one" x="8.5" y="10.5" width="4" height="11.8" rx="0.8"/>
            <path class="book-spine book-two" d="M14.2 8.8h4.2c.6 0 1 .4 1 1v12.5h-5.2Z"/>
            <path class="book-spine book-three" d="m21.1 10.2 3.4 1-2.8 11.1-3.5-1Z"/>
            <path class="shelf-accent" d="M9.4 13.4h2.1M15.2 11.7h2.4"/>
        </svg>`;
    }


    function hydrateCategoryIcons() {
        document.querySelectorAll(
            "[data-category-icon]"
        ).forEach(
            node => {
                const kind =
                    node.dataset.categoryIcon;

                node.classList.remove(
                    "category-icon-thoughts",
                    "category-icon-notes",
                    "category-icon-days",
                    "category-icon-dreams",
                    "category-icon-films",
                    "category-icon-books",
                    "category-icon-physics"
                );

                node.classList.add(
                    `category-icon-${kind}`
                );

                node.innerHTML =
                    categoryIconSvg(
                        kind
                    );
            }
        );

        document.querySelectorAll(
            "[data-app-icon]"
        ).forEach(
            node => {
                node.innerHTML =
                    appIconSvg(
                        node.dataset.appIcon
                    );
            }
        );

        document.querySelectorAll(
            "[data-ui-icon]"
        ).forEach(
            node => {
                node.innerHTML =
                    uiIconSvg(
                        node.dataset.uiIcon
                    );
            }
        );

        document.querySelectorAll(
            "[data-folder-icon]"
        ).forEach(
            node => {
                node.innerHTML =
                    bookshelfIconSvg();
            }
        );
    }


    function createId() {
        if (
            typeof crypto !== "undefined"
            &&
            typeof crypto.randomUUID === "function"
        ) {
            return crypto.randomUUID();
        }

        return (
            Date.now().toString(36)
            +
            "-"
            +
            Math.random().toString(36).slice(2)
        );
    }


    function nowIso() {
        return new Date().toISOString();
    }


    function localDateValue(date = new Date()) {
        const offset =
            date.getTimezoneOffset();

        const local =
            new Date(
                date.getTime()
                -
                offset * 60 * 1000
            );

        return local
            .toISOString()
            .slice(0, 10);
    }


    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }


    function validPositiveNumber(value) {
        const number = Number(value);

        if (
            !Number.isFinite(number)
            ||
            number <= 0
        ) {
            return null;
        }

        return number;
    }


    function activeScreen() {
        return document.querySelector(".screen.active");
    }


    function screenVisualElement(
        screen
    ) {
        if (
            !screen
        ) {
            return null;
        }

        return (
            screen.querySelector(
                ".image-home-background"
            )
            ||
            screen.querySelector(
                ".texts-study-background"
            )
            ||
            screen.querySelector(
                ".planner-cosmos-background"
            )
        );
    }


    function isImageWorld(
        screen
    ) {
        return Boolean(
            screenVisualElement(
                screen
            )
        );
    }


    function clearScreenTransitionOverlay() {
        if (
            screenTransitionCleanupTimer
        ) {
            clearTimeout(
                screenTransitionCleanupTimer
            );

            screenTransitionCleanupTimer =
                null;
        }

        const overlay =
            el.screenTransitionOverlay;

        overlay.classList.remove(
            "visible",
            "image-crossfade"
        );

        overlay.style.backgroundImage =
            "";

        overlay.style.backgroundColor =
            "";

        overlay.style.backgroundSize =
            "";

        overlay.style.backgroundPosition =
            "";

        overlay.style.backgroundRepeat =
            "";

        overlay.style.pointerEvents =
            "none";
    }


    function activateScreenImmediately(
        screen,
        animate = true
    ) {
        Object.values(
            screens
        ).forEach(
            item => {
                item.classList.remove(
                    "active",
                    "screen-soft-enter"
                );
            }
        );

        screen.classList.add(
            "active"
        );

        if (
            animate
            &&
            !window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            screen.classList.add(
                "screen-soft-enter"
            );

            window.setTimeout(
                () => {
                    screen.classList.remove(
                        "screen-soft-enter"
                    );
                },
                300
            );
        }

        window.scrollTo(
            0,
            0
        );

        renderMiniSession();
    }


    function showScreen(
        screen
    ) {
        const current =
            activeScreen();

        if (
            !screen
        ) {
            return;
        }

        if (
            current
            ===
            screen
        ) {
            window.scrollTo(
                0,
                0
            );

            renderMiniSession();

            return;
        }

        const reduceMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        /*
           Crossfade only between the three large image worlds:
           sea home ↔ study ↔ black-hole planner.
           Normal editors/lists stay synchronous.
        */
        if (
            !reduceMotion
            &&
            current
            &&
            isImageWorld(
                current
            )
            &&
            isImageWorld(
                screen
            )
        ) {
            const overlay =
                el.screenTransitionOverlay;

            const targetVisual =
                screenVisualElement(
                    screen
                );

            const targetStyle =
                window.getComputedStyle(
                    targetVisual
                );

            const token =
                ++screenTransitionToken;

            clearScreenTransitionOverlay();

            overlay.style.backgroundImage =
                targetStyle.backgroundImage;

            overlay.style.backgroundColor =
                targetStyle.backgroundColor;

            overlay.style.backgroundSize =
                targetStyle.backgroundSize;

            overlay.style.backgroundPosition =
                targetStyle.backgroundPosition;

            overlay.style.backgroundRepeat =
                targetStyle.backgroundRepeat;

            overlay.style.pointerEvents =
                "auto";

            overlay.classList.add(
                "image-crossfade"
            );

            requestAnimationFrame(
                () => {
                    requestAnimationFrame(
                        () => {
                            if (
                                token
                                !==
                                screenTransitionToken
                            ) {
                                return;
                            }

                            overlay.classList.add(
                                "visible"
                            );
                        }
                    );
                }
            );

            screenTransitionCleanupTimer =
                window.setTimeout(
                    () => {
                        if (
                            token
                            !==
                            screenTransitionToken
                        ) {
                            return;
                        }

                        activateScreenImmediately(
                            screen,
                            false
                        );

                        overlay.classList.remove(
                            "visible"
                        );

                        screenTransitionCleanupTimer =
                            window.setTimeout(
                                () => {
                                    if (
                                        token
                                        !==
                                        screenTransitionToken
                                    ) {
                                        return;
                                    }

                                    clearScreenTransitionOverlay();
                                },
                                170
                            );
                    },
                    430
                );

            return;
        }

        /*
           All ordinary screens become active immediately.
           Only their visual entrance is animated.
        */
        ++screenTransitionToken;

        clearScreenTransitionOverlay();

        activateScreenImmediately(
            screen,
            true
        );
    }


    function setError(element, message = "") {
        element.textContent = message;
    }


    function formatDate(isoOrDate) {
        if (!isoOrDate) {
            return "";
        }

        try {
            const date =
                isoOrDate.length === 10
                    ? new Date(`${isoOrDate}T12:00:00`)
                    : new Date(isoOrDate);

            return new Intl.DateTimeFormat(
                "de-DE",
                {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                }
            ).format(date);
        } catch {
            return "";
        }
    }


    function timelineDateForEntry(
        item,
        kind
    ) {
        const created =
            new Date(
                item.createdAt
                ??
                item.updatedAt
                ??
                Date.now()
            );

        if (
            (
                kind
                ===
                "days"
                ||
                kind
                ===
                "dreams"
            )
            &&
            /^\d{4}-\d{2}-\d{2}$/.test(
                String(
                    item.date
                    ??
                    ""
                )
            )
            &&
            !Number.isNaN(
                created.getTime()
            )
        ) {
            const [
                year,
                month,
                day
            ] =
                item.date
                    .split("-")
                    .map(Number);

            return new Date(
                year,
                month - 1,
                day,
                created.getHours(),
                created.getMinutes(),
                created.getSeconds(),
                created.getMilliseconds()
            );
        }

        return created;
    }


    function formatTimelineTimestamp(
        date
    ) {
        if (
            !date
            ||
            Number.isNaN(
                date.getTime()
            )
        ) {
            return "";
        }

        return new Intl.DateTimeFormat(
            "de-DE",
            {
                day:
                    "2-digit",
                month:
                    "2-digit",
                year:
                    "numeric",
                hour:
                    "2-digit",
                minute:
                    "2-digit",
                second:
                    "2-digit"
            }
        ).format(
            date
        );
    }


    function formatDuration(minutes) {
        const value = Number(minutes) || 0;
        const hours = Math.floor(value / 60);
        const rest = value % 60;

        if (hours === 0) {
            return `${rest} min`;
        }

        if (rest === 0) {
            return `${hours} h`;
        }

        return `${hours} h ${rest} min`;
    }


    function formatCountdown(milliseconds) {
        const totalSeconds = Math.max(
            0,
            Math.ceil(milliseconds / 1000)
        );

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return (
            String(minutes).padStart(2, "0")
            +
            ":"
            +
            String(seconds).padStart(2, "0")
        );
    }


    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }


    function textToHtml(value) {
        return escapeHtml(value).replaceAll("\n", "<br>");
    }


    function firstLine(text) {
        return String(text ?? "")
            .split("\n")
            .map(line => line.trim())
            .find(Boolean)
            ??
            "";
    }


    // ==================================================
    // STORAGE + MIGRATION
    // ==================================================

    function defaultState() {
        return {
            version: 5,
            plans: [],
            physics: {
                entries: []
            },
            thoughts: [],
            notes: [],
            days: [],
            dreams: [],
            films: {
                entries: []
            },
            books: {
                entries: []
            },
            settings: {
                theme: "dark"
            }
        };
    }


    function normalizePlan(plan) {
        return {
            id: plan.id ?? createId(),
            name: String(plan.name ?? "").trim(),
            active: Boolean(plan.active),

            items: Array.isArray(plan.items)
                ? plan.items.map(item => ({
                    id: item.id ?? createId(),
                    type: item.type === "break"
                        ? "break"
                        : "task",
                    name: item.type === "break"
                        ? ""
                        : String(item.name ?? "").trim(),
                    duration: validPositiveNumber(item.duration) ?? 1,
                    note: item.type === "break"
                        ? ""
                        : String(item.note ?? "")
                }))
                : []
        };
    }


    function plainTextToHtml(text) {
        return escapeHtml(
            String(text ?? "")
        ).replaceAll(
            "\n",
            "<br>"
        );
    }


    function sanitizeRichHtml(html) {
        const template =
            document.createElement(
                "template"
            );

        template.innerHTML =
            String(html ?? "");

        const allowedTags =
            new Set([
                "DIV",
                "P",
                "BR",
                "SPAN",
                "B",
                "STRONG",
                "U",
                "FONT"
            ]);

        const cleanNode =
            node => {
                Array.from(
                    node.children
                ).forEach(
                    child => {
                        if (
                            !allowedTags.has(
                                child.tagName
                            )
                        ) {
                            cleanNode(
                                child
                            );

                            const fragment =
                                document.createDocumentFragment();

                            while (
                                child.firstChild
                            ) {
                                fragment.appendChild(
                                    child.firstChild
                                );
                            }

                            child.replaceWith(
                                fragment
                            );

                            return;
                        }

                        Array.from(
                            child.attributes
                        ).forEach(
                            attribute => {
                                const name =
                                    attribute.name
                                        .toLowerCase();

                                if (
                                    ![
                                        "style",
                                        "face",
                                        "size",
                                        "color"
                                    ].includes(
                                        name
                                    )
                                ) {
                                    child.removeAttribute(
                                        attribute.name
                                    );
                                }
                            }
                        );

                        if (
                            child.hasAttribute(
                                "style"
                            )
                        ) {
                            const safeStyles = [];
                            const style =
                                child.style;

                            [
                                "color",
                                "font-size",
                                "font-family",
                                "font-weight",
                                "text-decoration"
                            ].forEach(
                                property => {
                                    const value =
                                        style.getPropertyValue(
                                            property
                                        );

                                    if (value) {
                                        safeStyles.push(
                                            `${property}:${value}`
                                        );
                                    }
                                }
                            );

                            if (
                                safeStyles.length
                            ) {
                                child.setAttribute(
                                    "style",
                                    safeStyles.join(";")
                                );
                            } else {
                                child.removeAttribute(
                                    "style"
                                );
                            }
                        }

                        cleanNode(
                            child
                        );
                    }
                );
            };

        cleanNode(
            template.content
        );

        return template.innerHTML;
    }


    function normalizeThought(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        const type =
            item.type === "folder"
                ? "folder"
                : "thought";

        return {
            id: item.id ?? createId(),
            type,
            parentId:
                item.parentId
                ??
                null,
            title:
                String(
                    item.title
                    ??
                    ""
                ),
            bodyHtml:
                type === "thought"
                    ? sanitizeRichHtml(
                        item.bodyHtml
                        ??
                        plainTextToHtml(
                            item.body
                            ??
                            ""
                        )
                    )
                    : "",
            order:
                Number.isFinite(
                    Number(
                        item.order
                    )
                )
                    ? Number(
                        item.order
                    )
                    : 0,
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function sanitizePhysicsHtml(html) {
        const template =
            document.createElement(
                "template"
            );

        template.innerHTML =
            String(
                html
                ??
                ""
            );

        const allowedTags =
            new Set([
                "DIV",
                "P",
                "BR",
                "SPAN"
            ]);

        const cleanNode =
            node => {
                Array.from(
                    node.children
                ).forEach(
                    child => {
                        if (
                            !allowedTags.has(
                                child.tagName
                            )
                        ) {
                            cleanNode(
                                child
                            );

                            const fragment =
                                document.createDocumentFragment();

                            while (
                                child.firstChild
                            ) {
                                fragment.appendChild(
                                    child.firstChild
                                );
                            }

                            child.replaceWith(
                                fragment
                            );

                            return;
                        }

                        if (
                            child.tagName
                            ===
                            "SPAN"
                            &&
                            child.classList.contains(
                                "physics-formula-token"
                            )
                        ) {
                            const latex =
                                String(
                                    child.dataset.latex
                                    ??
                                    ""
                                );

                            const mode =
                                child.dataset.mode
                                ===
                                "raw"
                                    ? "raw"
                                    : "rendered";

                            Array.from(
                                child.attributes
                            ).forEach(
                                attribute => {
                                    child.removeAttribute(
                                        attribute.name
                                    );
                                }
                            );

                            child.className =
                                "physics-formula-token";

                            child.dataset.latex =
                                latex;

                            child.dataset.mode =
                                mode;

                            child.setAttribute(
                                "contenteditable",
                                "false"
                            );

                            child.textContent =
                                "";

                            return;
                        }

                        const isTextBlock =
                            child.tagName
                            ===
                            "DIV"
                            ||
                            child.tagName
                            ===
                            "P";

                        let textAlign =
                            "";

                        if (
                            isTextBlock
                        ) {
                            textAlign =
                                child.style.textAlign
                                ||
                                "";
                        }

                        Array.from(
                            child.attributes
                        ).forEach(
                            attribute => {
                                child.removeAttribute(
                                    attribute.name
                                );
                            }
                        );

                        if (
                            isTextBlock
                            &&
                            (
                                textAlign
                                ===
                                "center"
                                ||
                                textAlign
                                ===
                                "left"
                            )
                        ) {
                            child.style.textAlign =
                                textAlign;
                        }

                        cleanNode(
                            child
                        );
                    }
                );
            };

        cleanNode(
            template.content
        );

        return template.innerHTML;
    }


    function serializePhysicsBody() {
        const clone =
            el.physicsBody.cloneNode(
                true
            );

        clone.querySelectorAll(
            ".physics-formula-token"
        ).forEach(
            token => {
                const latex =
                    token.dataset.latex
                    ??
                    "";

                token.innerHTML =
                    "";

                const mode =
                    token.dataset.mode
                    ===
                    "raw"
                        ? "raw"
                        : "rendered";

                token.className =
                    "physics-formula-token";

                token.dataset.latex =
                    latex;

                token.dataset.mode =
                    mode;

                token.setAttribute(
                    "contenteditable",
                    "false"
                );
            }
        );

        return sanitizePhysicsHtml(
            clone.innerHTML
        );
    }


    function normalizePhysicsEntry(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        const type =
            item.type === "folder"
                ? "folder"
                : "note";

        return {
            id:
                item.id
                ??
                createId(),
            type,
            parentId:
                item.parentId
                ??
                null,
            title:
                String(
                    item.title
                    ??
                    ""
                ),
            bodyHtml:
                type === "note"
                    ? sanitizePhysicsHtml(
                        item.bodyHtml
                        ??
                        plainTextToHtml(
                            item.body
                            ??
                            ""
                        )
                    )
                    : "",
            order:
                Number.isFinite(
                    Number(
                        item.order
                    )
                )
                    ? Number(
                        item.order
                    )
                    : 0,
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function normalizeDay(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        return {
            id: item.id ?? createId(),
            date:
                String(item.date ?? "")
                ||
                localDateValue(),
            title: String(item.title ?? ""),
            mood:
                item.mood === null
                ||
                item.mood === undefined
                ||
                item.mood === ""
                    ? null
                    : Math.min(
                        5,
                        Math.max(
                            1,
                            Number(item.mood)
                        )
                    ),
            body: String(item.body ?? ""),
            reflection:
                String(item.reflection ?? ""),
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function normalizeDream(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        return {
            id: item.id ?? createId(),
            date:
                String(item.date ?? "")
                ||
                localDateValue(),
            title: String(item.title ?? ""),
            manifest:
                String(item.manifest ?? ""),
            affect:
                String(item.affect ?? ""),
            dayResidue:
                String(item.dayResidue ?? ""),
            associations:
                String(item.associations ?? ""),
            condensation:
                String(item.condensation ?? ""),
            displacement:
                String(item.displacement ?? ""),
            wishConflict:
                String(item.wishConflict ?? ""),
            interpretation:
                String(item.interpretation ?? ""),
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function normalizeLibraryEntry(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        const type =
            item.type === "folder"
                ? "folder"
                : "review";

        return {
            id: item.id ?? createId(),
            type,
            parentId:
                item.parentId
                ??
                null,
            title: String(item.title ?? ""),
            rating:
                type === "review"
                &&
                validPositiveNumber(item.rating)
                    ? Math.min(
                        10,
                        Math.max(
                            1,
                            Number(item.rating)
                        )
                    )
                    : null,
            summary:
                type === "review"
                    ? String(item.summary ?? "")
                    : "",
            interpretation:
                type === "review"
                    ? String(item.interpretation ?? "")
                    : "",
            review:
                type === "review"
                    ? String(item.review ?? "")
                    : "",
            order:
                Number.isFinite(Number(item.order))
                    ? Number(item.order)
                    : 0,
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function dedupeById(items) {
        const seen = new Set();

        return items.filter(item => {
            if (seen.has(item.id)) {
                return false;
            }

            seen.add(item.id);
            return true;
        });
    }


    function normalizeState(raw) {
        const clean =
            defaultState();

        if (
            !raw
            ||
            typeof raw !== "object"
        ) {
            return clean;
        }

        clean.plans =
            Array.isArray(raw.plans)
                ? raw.plans.map(normalizePlan)
                : [];

        clean.thoughts =
            Array.isArray(
                raw.thoughts
            )
                ? dedupeById(
                    raw.thoughts.map(
                        normalizeThought
                    )
                )
                : [];

        clean.notes =
            Array.isArray(
                raw.notes
            )
                ? dedupeById(
                    raw.notes.map(
                        normalizeThought
                    )
                )
                : [];

        clean.physics.entries =
            Array.isArray(
                raw.physics?.entries
            )
                ? raw.physics.entries.map(
                    normalizePhysicsEntry
                )
                : [];

        clean.days =
            Array.isArray(raw.days)
                ? raw.days.map(normalizeDay)
                : [];

        clean.dreams =
            Array.isArray(raw.dreams)
                ? raw.dreams.map(normalizeDream)
                : [];

        clean.films.entries =
            Array.isArray(raw.films?.entries)
                ? raw.films.entries.map(normalizeLibraryEntry)
                : [];

        clean.books.entries =
            Array.isArray(raw.books?.entries)
                ? raw.books.entries.map(normalizeLibraryEntry)
                : [];

        clean.settings.theme =
            raw.settings?.theme === "dark"
                ? "dark"
                : "light";

        let activeSeen = false;

        clean.plans.forEach(plan => {
            if (
                plan.active
                &&
                !activeSeen
            ) {
                activeSeen = true;
            } else if (plan.active) {
                plan.active = false;
            }
        });

        return clean;
    }


    function loadState() {
        try {
            const current =
                localStorage.getItem(APP_KEY);

            if (current) {
                return normalizeState(
                    JSON.parse(current)
                );
            }

            const old =
                localStorage.getItem(OLD_APP_KEY);

            if (old) {
                return normalizeState(
                    JSON.parse(old)
                );
            }

            const older =
                localStorage.getItem(OLDER_APP_KEY);

            if (older) {
                return normalizeState(
                    JSON.parse(older)
                );
            }

            const oldest =
                localStorage.getItem(OLDEST_APP_KEY);

            if (oldest) {
                return normalizeState(
                    JSON.parse(oldest)
                );
            }

            const ancient =
                localStorage.getItem(
                    ANCIENT_APP_KEY
                );

            if (ancient) {
                return normalizeState(
                    JSON.parse(
                        ancient
                    )
                );
            }

            const initial =
                defaultState();

            const legacyPlans =
                localStorage.getItem(
                    LEGACY_PLANS_KEY
                );

            if (legacyPlans) {
                try {
                    const parsed =
                        JSON.parse(
                            legacyPlans
                        );

                    if (Array.isArray(parsed)) {
                        initial.plans =
                            parsed.map(
                                normalizePlan
                            );
                    }
                } catch {
                    // Nur beschädigte Alt-Daten werden ignoriert.
                }
            }

            return normalizeState(initial);

        } catch (error) {
            console.error(
                "Speicher konnte nicht geladen werden.",
                error
            );

            return defaultState();
        }
    }


    function saveState() {
        try {
            localStorage.setItem(
                APP_KEY,
                JSON.stringify(state)
            );

            localStorage.setItem(
                LEGACY_PLANS_KEY,
                JSON.stringify(
                    state.plans
                )
            );

            return true;

        } catch (error) {
            console.error(
                "Speichern fehlgeschlagen.",
                error
            );

            return false;
        }
    }


    // ==================================================
    // THEME
    // ==================================================


    function initializeV20ThemeDefault() {
        try {
            if (
                localStorage.getItem(
                    V20_THEME_DEFAULT_KEY
                )
                ===
                "1"
            ) {
                return;
            }

            state.settings.theme =
                "dark";

            saveState();

            localStorage.setItem(
                V20_THEME_DEFAULT_KEY,
                "1"
            );

        } catch (
            error
        ) {
            // If storage is unavailable, the normal state default is already dark.
            state.settings.theme =
                state.settings.theme
                ??
                "dark";
        }
    }


    function applyTheme() {
        document.documentElement.dataset.theme =
            state.settings.theme;

        el.themeButton.textContent =
            state.settings.theme === "dark"
                ? "Tag"
                : "Nacht";

        const meta =
            document.querySelector(
                'meta[name="theme-color"]'
            );

        if (meta) {
            meta.setAttribute(
                "content",
                state.settings.theme === "dark"
                    ? "#111210"
                    : "#f6f6f2"
            );
        }
    }


    function toggleTheme() {
        state.settings.theme =
            state.settings.theme === "dark"
                ? "light"
                : "dark";

        saveState();
        applyTheme();
    }


    // ==================================================
    // BACKUP
    // ==================================================

    function downloadBlob(blob, filename) {
        const url =
            URL.createObjectURL(blob);

        const anchor =
            document.createElement("a");

        anchor.href = url;
        anchor.download = filename;

        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();

        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    }


    function exportBackup() {
        saveState();

        const payload = {
            format: "Planer Backup",
            version: 5,
            exportedAt: nowIso(),
            data: state
        };

        const blob =
            new Blob(
                [
                    JSON.stringify(
                        payload,
                        null,
                        2
                    )
                ],
                {
                    type:
                        "application/json;charset=utf-8"
                }
            );

        const day =
            localDateValue();

        downloadBlob(
            blob,
            `planer-backup-${day}.json`
        );
    }


    function resetTransientState() {
        draftPlan = null;
        editingPlanId = null;
        editingPlanItemId = null;

        stopSessionInterval();

        sessionPlan = null;
        sessionIndex = 0;
        sessionEndTime = null;
        sessionItemDurationMs = 0;
        sessionPaused = false;
        sessionPausedRemainingMs = 0;
        sessionCompletionPending = false;
        sessionCompleting = false;
        sessionPlanFinishedPending = false;
        completionQuote = null;

        universeParticles = [];
        universeNodes = [];
        universeObserverIndex = 0;
        universeManualProgress = null;
        universeLastRendered = [];

        if (universeFrameHandle !== null) {
            cancelAnimationFrame(
                universeFrameHandle
            );

            universeFrameHandle = null;
        }

        clearPersistedSessionRuntime();

        currentThoughtFolderId = null;
        currentThoughtId = null;
        currentThoughtFolderEditId = null;
        currentDayId = null;
        currentDreamId = null;

        reviewKind = "films";
        currentReviewFolderId = null;
        currentReviewEntryId = null;
        currentFolderEditId = null;
    }


    function importBackupFile(file) {
        if (!file) {
            return;
        }

        const reader =
            new FileReader();

        reader.onload = () => {
            try {
                const parsed =
                    JSON.parse(
                        String(
                            reader.result
                        )
                    );

                const source =
                    parsed?.data
                    ??
                    parsed;

                const imported =
                    normalizeState(source);

                const confirmed =
                    window.confirm(
                        "Aktuelle Daten durch dieses Backup ersetzen?"
                    );

                if (!confirmed) {
                    return;
                }

                state = imported;

                saveState();
                applyTheme();

                resetTransientState();
                showScreen(screens.home);

                alert(
                    "Backup wiederhergestellt."
                );

            } catch (error) {
                console.error(error);

                alert(
                    "Backup konnte nicht gelesen werden."
                );

            } finally {
                el.backupFileInput.value =
                    "";
            }
        };

        reader.readAsText(file);
    }


    // ==================================================
    // PDF / PRINT
    // ==================================================

    function openPrintPreview(
        title,
        bodyHtml,
        extraCss = "",
        options = {}
    ) {
        const printWindow =
            window.open(
                "",
                "_blank"
            );

        if (!printWindow) {
            alert(
                "PDF-Fenster konnte nicht geöffnet werden."
            );

            return;
        }

        const appUrl =
            window.location.href;

        const autoPrint =
            options.autoPrint
            !==
            false;

        const editPayload =
            options.editPayload
            ??
            null;

        const editButtonHtml =
            editPayload
                ? `<button id="editEntry" type="button">Bearbeiten</button>`
                : "";

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="de">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${escapeHtml(title || "PDF")}</title>

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.18.0/dist/katex.min.css"
                    crossorigin="anonymous"
                >

                <style>
                    @page {
                        size: A4;
                        margin: 22mm 20mm;
                    }

                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        color: #111;
                        background: #fff;
                        font-family:
                            -apple-system,
                            BlinkMacSystemFont,
                            "Helvetica Neue",
                            Arial,
                            sans-serif;
                        font-size: 11.5pt;
                        line-height: 1.6;
                    }

                    .print-toolbar {
                        position: sticky;
                        top: 0;
                        z-index: 50;

                        display: grid;
                        grid-template-columns: 1fr auto 1fr;
                        align-items: center;
                        gap: 14px;

                        padding: 14px 18px;

                        border-bottom: 1px solid #e7e7e2;

                        background: rgba(255,255,255,0.96);
                        backdrop-filter: blur(12px);
                    }

                    .print-toolbar button {
                        border: 0;
                        background: transparent;
                        color: #111;

                        padding: 6px 4px;

                        font: inherit;
                        font-size: 14px;

                        cursor: pointer;
                    }

                    #returnToApp {
                        justify-self: start;
                    }

                    #editEntry {
                        justify-self: center;
                        font-weight: 500;
                    }

                    #printNow {
                        justify-self: end;
                    }

                    .print-page {
                        max-width: 860px;
                        margin: 0 auto;
                        padding: 34px 28px 70px;
                    }

                    h1 {
                        margin: 0 0 28px;
                        font-size: 23pt;
                        font-weight: 600;
                    }

                    h2 {
                        margin: 26px 0 8px;
                        font-size: 12pt;
                        font-weight: 600;
                    }

                    ${extraCss}

                    @media print {
                        .print-toolbar {
                            display: none !important;
                        }

                        .print-page {
                            max-width: none;
                            margin: 0;
                            padding: 0;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="print-toolbar">
                    <button id="returnToApp" type="button">‹ App</button>
                    ${editButtonHtml}
                    <button id="printNow" type="button">PDF / Drucken</button>
                </div>

                <main class="print-page">
                    ${bodyHtml}
                </main>

                <script>
                    const appUrl = ${JSON.stringify(appUrl)};
                    const editPayload = ${JSON.stringify(editPayload)};
                    const autoPrint = ${JSON.stringify(autoPrint)};

                    function returnToApp() {
                        try {
                            if (
                                window.opener
                                &&
                                !window.opener.closed
                            ) {
                                window.opener.focus();
                                window.close();

                                setTimeout(() => {
                                    if (!window.closed) {
                                        window.location.href = appUrl;
                                    }
                                }, 120);

                                return;
                            }
                        } catch (error) {}

                        if (history.length > 1) {
                            history.back();
                        } else {
                            window.location.href = appUrl;
                        }
                    }

                    function editEntry() {
                        if (!editPayload) {
                            return;
                        }

                        try {
                            if (
                                window.opener
                                &&
                                !window.opener.closed
                            ) {
                                window.opener.postMessage(
                                    {
                                        type:
                                            "timeline-edit-entry",
                                        payload:
                                            editPayload
                                    },
                                    "*"
                                );

                                window.opener.focus();
                                window.close();

                                return;
                            }
                        } catch (error) {}

                        try {
                            const target =
                                new URL(
                                    appUrl
                                );

                            target.searchParams.set(
                                "timelineEditKind",
                                editPayload.kind
                            );

                            target.searchParams.set(
                                "timelineEditId",
                                editPayload.id
                            );

                            window.location.href =
                                target.toString();

                        } catch (error) {
                            window.location.href =
                                appUrl;
                        }
                    }

                    document.getElementById("returnToApp")
                        .addEventListener("click", returnToApp);

                    document.getElementById("printNow")
                        .addEventListener("click", () => window.print());

                    const editButton =
                        document.getElementById(
                            "editEntry"
                        );

                    if (editButton) {
                        editButton.addEventListener(
                            "click",
                            editEntry
                        );
                    }

                    window.onload = () => {
                        if (!autoPrint) {
                            return;
                        }

                        setTimeout(() => {
                            window.print();
                        }, 220);
                    };
                <\/script>
            </body>
            </html>
        `);

        printWindow.document.close();
    }


    function exportPrintableDocument(
        title,
        sections
    ) {
        const body =
            sections
                .filter(
                    section =>
                        String(
                            section.text
                            ??
                            ""
                        ).trim() !== ""
                )
                .map(
                    section => `
                        <section>
                            ${
                                section.heading
                                    ? `<h2>${escapeHtml(section.heading)}</h2>`
                                    : ""
                            }
                            <div>${textToHtml(section.text)}</div>
                        </section>
                    `
                )
                .join("");

        openPrintPreview(
            title,
            `
                <h1>${escapeHtml(title || "Text")}</h1>
                ${body}
            `
        );
    }


    function exportPrintableRichDocument(
        title,
        richHtml
    ) {
        const safeHtml =
            sanitizeRichHtml(
                richHtml
            );

        openPrintPreview(
            title,
            `
                <h1>${escapeHtml(title || "Gedanke")}</h1>
                <div class="content">${safeHtml}</div>
            `,
            `
                .content {
                    overflow-wrap: anywhere;
                }
            `
        );
    }


    function physicsPrintableHtml(
        sourceHtml = null
    ) {
        const clone =
            document.createElement(
                "div"
            );

        clone.innerHTML =
            sourceHtml
            ===
            null
                ? el.physicsBody.innerHTML
                : sanitizePhysicsHtml(
                    sourceHtml
                );

        clone.querySelectorAll(
            ".physics-formula-token"
        ).forEach(
            token => {
                const latex =
                    normalizePhysicsLatex(
                        token.dataset.latex
                        ??
                        ""
                    );

                const replacement =
                    document.createElement(
                        "span"
                    );

                replacement.className =
                    "physics-print-formula";

                if (
                    typeof window.katex
                    !==
                    "undefined"
                ) {
                    try {
                        replacement.innerHTML =
                            window.katex.renderToString(
                                latex,
                                {
                                    throwOnError:
                                        false,
                                    displayMode:
                                        false,
                                    strict:
                                        "ignore",
                                    output:
                                        "html"
                                }
                            );

                    } catch (
                        error
                    ) {
                        replacement.textContent =
                            `$${latex}$`;
                    }

                } else {
                    replacement.textContent =
                        `$${latex}$`;
                }

                token.replaceWith(
                    replacement
                );
            }
        );

        // Also render still-editable $...$ fragments in ordinary text nodes.
        const walker =
            document.createTreeWalker(
                clone,
                NodeFilter.SHOW_TEXT
            );

        const textNodes = [];
        let current =
            walker.nextNode();

        while (
            current
        ) {
            textNodes.push(
                current
            );

            current =
                walker.nextNode();
        }

        textNodes.forEach(
            node => {
                const text =
                    node.nodeValue
                    ??
                    "";

                const pattern =
                    /\$([^$\n]+)\$/g;

                if (
                    !pattern.test(
                        text
                    )
                ) {
                    return;
                }

                pattern.lastIndex =
                    0;

                const fragment =
                    document.createDocumentFragment();

                let lastIndex =
                    0;

                let match;

                while (
                    (
                        match =
                            pattern.exec(
                                text
                            )
                    )
                ) {
                    fragment.appendChild(
                        document.createTextNode(
                            text.slice(
                                lastIndex,
                                match.index
                            )
                        )
                    );

                    const math =
                        document.createElement(
                            "span"
                        );

                    math.className =
                        "physics-print-formula";

                    const latex =
                        normalizePhysicsLatex(
                            match[1]
                        );

                    if (
                        typeof window.katex
                        !==
                        "undefined"
                    ) {
                        try {
                            math.innerHTML =
                                window.katex.renderToString(
                                    latex,
                                    {
                                        throwOnError:
                                            false,
                                        displayMode:
                                            false,
                                        strict:
                                            "ignore",
                                        output:
                                            "html"
                                    }
                                );

                        } catch (
                            error
                        ) {
                            math.textContent =
                                `$${latex}$`;
                        }

                    } else {
                        math.textContent =
                            `$${latex}$`;
                    }

                    fragment.appendChild(
                        math
                    );

                    lastIndex =
                        pattern.lastIndex;
                }

                fragment.appendChild(
                    document.createTextNode(
                        text.slice(
                            lastIndex
                        )
                    )
                );

                node.replaceWith(
                    fragment
                );
            }
        );

        return clone.innerHTML;
    }


    function exportPhysicsPdf() {
        tokenizeClosedPhysicsFormulas(
            true
        );

        saveCurrentPhysicsNote();

        const item =
            currentPhysicsNote();

        if (!item) {
            return;
        }

        openPrintPreview(
            item.title.trim()
            ||
            "Physik",
            `
                <h1>${escapeHtml(item.title.trim() || "Physik")}</h1>
                <div class="physics-print-body">
                    ${physicsPrintableHtml()}
                </div>
            `,
            `
                .physics-print-body {
                    font-size: 12pt;
                    line-height: 1.7;
                    overflow-wrap: anywhere;
                }

                .physics-print-formula {
                    display: inline-block;
                    vertical-align: baseline;
                    margin: 0 0.08em;
                }

                .physics-print-formula .katex {
                    font-size: 1em;
                }

                .physics-print-formula .katex-html {
                    display: inline-block;
                }

                .physics-print-body div,
                .physics-print-body p {
                    min-height: 1.2em;
                }

                .physics-print-body div[style*="text-align: center"],
                .physics-print-body p[style*="text-align: center"] {
                    text-align: center;
                }
            `
        );
    }


    // ==================================================
    // HOME
    // ==================================================

    el.openPlannerButton.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plannerHub
            );
        }
    );



    el.openPhysicsButton.addEventListener(
        "click",
        () => {
            currentPhysicsFolderId =
                null;

            el.physicsSortSelect.value =
                "manual";

            renderPhysicsList();

            showScreen(
                screens.physicsList
            );
        }
    );

    el.openTextsButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );

            showScreen(
                screens.textsHub
            );
        }
    );

    el.backFromPlannerHub.addEventListener(
        "click",
        () => {
            showScreen(
                screens.home
            );
        }
    );

    el.backFromTextsHub.addEventListener(
        "click",
        () => {
            showScreen(
                screens.home
            );
        }
    );

    el.themeButton.addEventListener(
        "click",
        toggleTheme
    );

    el.backupButton.addEventListener(
        "click",
        exportBackup
    );

    el.restoreButton.addEventListener(
        "click",
        () => {
            el.backupFileInput.click();
        }
    );

    el.backupFileInput.addEventListener(
        "change",
        () => {
            importBackupFile(
                el.backupFileInput
                    .files?.[0]
            );
        }
    );


    el.timelineButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );

            renderTimeline();

            showScreen(
                screens.timeline
            );
        }
    );


    el.backFromTimeline.addEventListener(
        "click",
        () => {
            showScreen(
                screens.textsHub
            );
        }
    );


    el.textsMenuButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.textsMenuPanel.classList.toggle(
                "hidden"
            );
        }
    );


    el.textsSkyBackHotspot.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );

            el.backFromTextsHub.click();
        }
    );


    el.textsDrawerMenuHotspot.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.textsMenuPanel.classList.remove(
                "hidden"
            );
        }
    );


    el.closeTextsStudyMenuButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.textsMenuPanel.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.textsMenuButton
                &&
                event.target
                !==
                el.textsDrawerMenuHotspot
            ) {
                el.textsMenuPanel.classList.add(
                    "hidden"
                );
            }
        }
    );


    el.backupButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    el.restoreButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    el.themeButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    // ==================================================
    // PLANER — KOSMOS-NAVIGATION
    // ==================================================

    el.plannerGalaxyBackHotspot.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.backFromPlannerHub.click();
        }
    );


    el.plannerBlackHoleHotspot.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            /*
               Die bestehende Los-Logik entscheidet korrekt zwischen:
               laufender Session, Review/Abschluss und neuem aktiven Plan.
            */
            if (
                sessionPlan
            ) {
                el.goButton.click();

                return;
            }

            const active =
                state.plans.find(
                    plan =>
                        plan.active
                );

            if (
                active
                &&
                Array.isArray(
                    active.items
                )
                &&
                active.items.length
                >
                0
            ) {
                el.goButton.click();

                return;
            }

            // Kein startbarer aktiver Plan: direkt zur Planverwaltung.
            el.plannerPlansButton.click();
        }
    );


    // ==================================================
    // PLANNER HUB
    // ==================================================

    el.plannerStartButton.addEventListener(
        "click",
        () => {
            renderStartOverview();

            showScreen(
                screens.startOverview
            );
        }
    );

    el.plannerPlansButton.addEventListener(
        "click",
        () => {
            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );

    el.backFromStartOverview.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plannerHub
            );
        }
    );

    el.backFromPlans.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plannerHub
            );
        }
    );


    // ==================================================
    // PLAN LIST
    // ==================================================

    function renderPlans() {
        el.plansList.innerHTML = "";

        if (
            state.plans.length === 0
        ) {
            el.emptyPlansMessage.style.display =
                "block";

            return;
        }

        el.emptyPlansMessage.style.display =
            "none";

        state.plans.forEach(plan => {
            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "plan-row";

            const main =
                document.createElement(
                    "button"
                );

            main.type = "button";
            main.className =
                "row-main-button";

            const title =
                document.createElement(
                    "div"
                );

            title.className =
                "row-title";

            title.textContent =
                plan.name;

            const subtitle =
                document.createElement(
                    "div"
                );

            subtitle.className =
                "row-subtitle";

            const totalMinutes =
                plan.items.reduce(
                    (
                        sum,
                        item
                    ) =>
                        sum
                        +
                        Number(
                            item.duration
                            ||
                            0
                        ),
                    0
                );

            subtitle.textContent =
                `${plan.items.length} Elemente · ${formatDuration(totalMinutes)}`;

            main.append(
                title,
                subtitle
            );

            main.addEventListener(
                "click",
                () => {
                    openPlanEditor(
                        plan.id
                    );
                }
            );

            const heart =
                document.createElement(
                    "button"
                );

            heart.type = "button";
            heart.className =
                "heart-button";

            heart.textContent =
                plan.active
                    ? "♥"
                    : "♡";

            heart.addEventListener(
                "click",
                () => {
                    state.plans.forEach(
                        item => {
                            item.active =
                                item.id
                                ===
                                plan.id;
                        }
                    );

                    saveState();
                    renderPlans();
                }
            );

            row.append(
                main,
                heart
            );

            el.plansList.appendChild(
                row
            );
        });
    }


    el.addPlanButton.addEventListener(
        "click",
        () => {
            editingPlanId = null;
            draftPlan = null;

            el.planName.value = "";

            setError(
                el.newPlanError
            );

            showScreen(
                screens.newPlan
            );

            setTimeout(
                () => {
                    el.planName.focus();
                },
                0
            );
        }
    );


    el.backFromNewPlan.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plans
            );
        }
    );


    el.createPlanButton.addEventListener(
        "click",
        () => {
            const name =
                el.planName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.newPlanError,
                    "Name fehlt."
                );

                el.planName.focus();
                return;
            }

            draftPlan = {
                id: createId(),
                name,
                active: false,
                items: []
            };

            editingPlanId = null;

            el.deletePlanButton.style.display =
                "none";

            renderPlanEditor();

            showScreen(
                screens.planEditor
            );
        }
    );


    // ==================================================
    // PLAN EDITOR
    // ==================================================

    function openPlanEditor(planId) {
        const plan =
            state.plans.find(
                item =>
                    item.id
                    ===
                    planId
            );

        if (!plan) {
            return;
        }

        editingPlanId =
            planId;

        editingPlanItemId =
            null;

        draftPlan =
            clone(plan);

        el.deletePlanButton.style.display =
            "block";

        renderPlanEditor();

        showScreen(
            screens.planEditor
        );
    }


    function renderPlanEditor() {
        if (!draftPlan) {
            return;
        }

        setError(
            el.editorError
        );

        el.editorPlanTitle.textContent =
            draftPlan.name
            ||
            "Plan";

        el.editorPlanName.value =
            draftPlan.name;

        el.planItems.innerHTML =
            "";

        el.emptyPlanMessage.style.display =
            draftPlan.items.length === 0
                ? "block"
                : "none";

        draftPlan.items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "plan-item";

                row.tabIndex =
                    0;

                row.setAttribute(
                    "role",
                    "button"
                );

                row.setAttribute(
                    "aria-label",
                    item.type
                    ===
                    "break"
                        ? `Pause bearbeiten, ${item.duration} Minuten`
                        : `${item.name} bearbeiten`
                );

                const number =
                    document.createElement(
                        "div"
                    );

                number.className =
                    "item-number";

                number.textContent =
                    `${index + 1}.`;

                const info =
                    document.createElement(
                        "div"
                    );

                info.className =
                    "item-information";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "item-title";

                title.textContent =
                    item.type
                    ===
                    "break"
                        ? "Pause"
                        : item.name;

                const details =
                    document.createElement(
                        "div"
                    );

                details.className =
                    "item-details";

                details.textContent =
                    `${item.duration} Minuten`;

                if (
                    item.type
                    ===
                    "task"
                    &&
                    item.note
                ) {
                    details.textContent +=
                        ` · ${item.note}`;
                }

                info.append(
                    title,
                    details
                );

                const openItemEditor =
                    () => {
                        editingPlanItemId =
                            item.id;

                        setError(
                            item.type
                            ===
                            "break"
                                ? el.breakError
                                : el.taskError
                        );

                        if (
                            item.type
                            ===
                            "break"
                        ) {
                            el.breakDuration.value =
                                item.duration;

                            el.saveBreakButton.textContent =
                                "Speichern";

                            showScreen(
                                screens.break
                            );

                            setTimeout(
                                () => {
                                    el.breakDuration.focus();
                                },
                                0
                            );

                        } else {
                            el.taskName.value =
                                item.name
                                ??
                                "";

                            el.taskDuration.value =
                                item.duration;

                            el.taskNote.value =
                                item.note
                                ??
                                "";

                            el.saveTaskButton.textContent =
                                "Speichern";

                            showScreen(
                                screens.task
                            );

                            setTimeout(
                                () => {
                                    el.taskName.focus();
                                },
                                0
                            );
                        }
                    };

                row.addEventListener(
                    "click",
                    event => {
                        if (
                            event.target.closest(
                                ".item-controls"
                            )
                        ) {
                            return;
                        }

                        openItemEditor();
                    }
                );

                row.addEventListener(
                    "keydown",
                    event => {
                        if (
                            event.key
                            !==
                            "Enter"
                            &&
                            event.key
                            !==
                            " "
                        ) {
                            return;
                        }

                        event.preventDefault();

                        openItemEditor();
                    }
                );


                const controls =
                    document.createElement(
                        "div"
                    );

                controls.className =
                    "item-controls";

                const up =
                    document.createElement(
                        "button"
                    );

                up.type = "button";
                up.className =
                    "move-button";

                up.textContent =
                    "↑";

                up.disabled =
                    index === 0;

                up.addEventListener(
                    "click",
                    () => {
                        movePlanItem(
                            index,
                            index - 1
                        );
                    }
                );

                const down =
                    document.createElement(
                        "button"
                    );

                down.type = "button";
                down.className =
                    "move-button";

                down.textContent =
                    "↓";

                down.disabled =
                    index
                    ===
                    draftPlan.items.length
                    -
                    1;

                down.addEventListener(
                    "click",
                    () => {
                        movePlanItem(
                            index,
                            index + 1
                        );
                    }
                );

                const remove =
                    document.createElement(
                        "button"
                    );

                remove.type =
                    "button";

                remove.className =
                    "delete-item-button";

                remove.textContent =
                    "×";

                remove.addEventListener(
                    "click",
                    () => {
                        draftPlan.items.splice(
                            index,
                            1
                        );

                        renderPlanEditor();
                    }
                );

                controls.append(
                    up,
                    down,
                    remove
                );

                row.append(
                    number,
                    info,
                    controls
                );

                el.planItems.appendChild(
                    row
                );
            }
        );
    }


    function movePlanItem(
        from,
        to
    ) {
        if (
            !draftPlan
            ||
            to < 0
            ||
            to
            >=
            draftPlan.items.length
        ) {
            return;
        }

        const [moved] =
            draftPlan.items.splice(
                from,
                1
            );

        draftPlan.items.splice(
            to,
            0,
            moved
        );

        renderPlanEditor();
    }


    el.editorPlanName.addEventListener(
        "input",
        () => {
            if (!draftPlan) {
                return;
            }

            draftPlan.name =
                el.editorPlanName.value;

            el.editorPlanTitle.textContent =
                draftPlan.name.trim()
                ||
                "Plan";
        }
    );


    el.backFromEditor.addEventListener(
        "click",
        () => {
            const leave =
                window.confirm(
                    "Änderungen verwerfen?"
                );

            if (!leave) {
                return;
            }

            draftPlan = null;
            editingPlanId = null;
            editingPlanItemId = null;

            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );


    el.addTaskButton.addEventListener(
        "click",
        () => {
            editingPlanItemId =
                null;

            el.saveTaskButton.textContent =
                "Hinzufügen";

            el.taskName.value = "";
            el.taskDuration.value = "";
            el.taskNote.value = "";

            setError(
                el.taskError
            );

            showScreen(
                screens.task
            );

            setTimeout(
                () => {
                    el.taskName.focus();
                },
                0
            );
        }
    );


    el.backFromTask.addEventListener(
        "click",
        () => {
            editingPlanItemId =
                null;

            el.saveTaskButton.textContent =
                "Hinzufügen";

            showScreen(
                screens.planEditor
            );
        }
    );


    el.saveTaskButton.addEventListener(
        "click",
        () => {
            if (!draftPlan) {
                return;
            }

            const name =
                el.taskName
                    .value
                    .trim();

            const duration =
                validPositiveNumber(
                    el.taskDuration.value
                );

            if (!name) {
                setError(
                    el.taskError,
                    "Name fehlt."
                );

                el.taskName.focus();
                return;
            }

            if (!duration) {
                setError(
                    el.taskError,
                    "Dauer fehlt."
                );

                el.taskDuration.focus();
                return;
            }

            const note =
                el.taskNote
                    .value
                    .trim();

            if (
                editingPlanItemId
            ) {
                const existing =
                    draftPlan.items.find(
                        item =>
                            item.id
                            ===
                            editingPlanItemId
                    );

                if (
                    existing
                ) {
                    existing.type =
                        "task";

                    existing.name =
                        name;

                    existing.duration =
                        duration;

                    existing.note =
                        note;
                }

            } else {
                draftPlan.items.push({
                    id:
                        createId(),
                    type:
                        "task",
                    name,
                    duration,
                    note
                });
            }

            editingPlanItemId =
                null;

            el.saveTaskButton.textContent =
                "Hinzufügen";

            renderPlanEditor();

            showScreen(
                screens.planEditor
            );
        }
    );


    el.addBreakButton.addEventListener(
        "click",
        () => {
            editingPlanItemId =
                null;

            el.saveBreakButton.textContent =
                "Hinzufügen";

            el.breakDuration.value =
                "";

            setError(
                el.breakError
            );

            showScreen(
                screens.break
            );

            setTimeout(
                () => {
                    el.breakDuration.focus();
                },
                0
            );
        }
    );


    el.backFromBreak.addEventListener(
        "click",
        () => {
            editingPlanItemId =
                null;

            el.saveBreakButton.textContent =
                "Hinzufügen";

            showScreen(
                screens.planEditor
            );
        }
    );


    el.saveBreakButton.addEventListener(
        "click",
        () => {
            if (!draftPlan) {
                return;
            }

            const duration =
                validPositiveNumber(
                    el.breakDuration.value
                );

            if (!duration) {
                setError(
                    el.breakError,
                    "Dauer fehlt."
                );

                el.breakDuration.focus();
                return;
            }

            if (
                editingPlanItemId
            ) {
                const existing =
                    draftPlan.items.find(
                        item =>
                            item.id
                            ===
                            editingPlanItemId
                    );

                if (
                    existing
                ) {
                    existing.type =
                        "break";

                    existing.name =
                        "";

                    existing.duration =
                        duration;

                    existing.note =
                        "";
                }

            } else {
                draftPlan.items.push({
                    id:
                        createId(),
                    type:
                        "break",
                    name:
                        "",
                    duration,
                    note:
                        ""
                });
            }

            editingPlanItemId =
                null;

            el.saveBreakButton.textContent =
                "Hinzufügen";

            renderPlanEditor();

            showScreen(
                screens.planEditor
            );
        }
    );


    el.savePlanButton.addEventListener(
        "click",
        () => {
            if (!draftPlan) {
                return;
            }

            const name =
                el.editorPlanName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.editorError,
                    "Name fehlt."
                );

                el.editorPlanName.focus();
                return;
            }

            if (
                draftPlan.items.length
                ===
                0
            ) {
                setError(
                    el.editorError,
                    "Der Plan ist leer."
                );

                return;
            }

            draftPlan.name =
                name;

            if (
                editingPlanId
                ===
                null
            ) {
                state.plans.push(
                    clone(
                        draftPlan
                    )
                );

            } else {
                const index =
                    state.plans.findIndex(
                        item =>
                            item.id
                            ===
                            editingPlanId
                    );

                if (
                    index
                    !==
                    -1
                ) {
                    state.plans[index] =
                        clone(
                            draftPlan
                        );
                }
            }

            if (!saveState()) {
                setError(
                    el.editorError,
                    "Speichern fehlgeschlagen."
                );

                return;
            }

            draftPlan = null;
            editingPlanId = null;
            editingPlanItemId = null;

            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );


    el.deletePlanButton.addEventListener(
        "click",
        () => {
            if (
                editingPlanId
                ===
                null
            ) {
                return;
            }

            const confirmed =
                window.confirm(
                    "Plan löschen?"
                );

            if (!confirmed) {
                return;
            }

            state.plans =
                state.plans.filter(
                    item =>
                        item.id
                        !==
                        editingPlanId
                );

            saveState();

            draftPlan = null;
            editingPlanId = null;
            editingPlanItemId = null;

            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );


    // ==================================================
    // START OVERVIEW
    // ==================================================

    function renderStartOverview() {
        const active =
            state.plans.find(
                plan =>
                    plan.active
            );

        el.startPlanItems.innerHTML =
            "";

        if (!active) {
            el.startPlanTitle.textContent =
                "Start";

            el.noActivePlanMessage.style.display =
                "block";

            el.activePlanOverview.style.display =
                "none";

            return;
        }

        el.noActivePlanMessage.style.display =
            "none";

        el.activePlanOverview.style.display =
            "block";

        el.startPlanTitle.textContent =
            active.name;

        let total = 0;

        active.items.forEach(
            (
                item,
                index
            ) => {
                total +=
                    Number(
                        item.duration
                        ||
                        0
                    );

                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "start-plan-item";

                if (
                    item.type
                    ===
                    "break"
                ) {
                    row.classList.add(
                        "break"
                    );
                }

                const left =
                    document.createElement(
                        "div"
                    );

                left.className =
                    "start-item-left";

                const number =
                    document.createElement(
                        "span"
                    );

                number.className =
                    "start-item-number";

                number.textContent =
                    `${index + 1}.`;

                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "start-item-name";

                name.textContent =
                    item.type
                    ===
                    "break"
                        ? "Pause"
                        : item.name;

                const duration =
                    document.createElement(
                        "span"
                    );

                duration.className =
                    "start-item-duration";

                duration.textContent =
                    formatDuration(
                        item.duration
                    );

                left.append(
                    number,
                    name
                );

                row.append(
                    left,
                    duration
                );

                el.startPlanItems.appendChild(
                    row
                );
            }
        );

        el.totalPlanDuration.textContent =
            formatDuration(
                total
            );
    }


    el.goButton.addEventListener(
        "click",
        () => {
            if (sessionPlan) {
                if (sessionPlanFinishedPending) {
                    showPlanCompletion();
                } else if (sessionCompletionPending) {
                    openSessionReview();
                } else {
                    showScreen(
                        screens.session
                    );

                    refreshSessionPauseUi();

                    updateSessionTimer();

                    if (
                        !sessionPaused
                    ) {
                        startSessionTicker();
                        ensureUniverseAnimation();
                    }
                }

                return;
            }

            const active =
                state.plans.find(
                    plan =>
                        plan.active
                );

            if (
                !active
                ||
                active.items.length
                ===
                0
            ) {
                return;
            }

            startSession(
                active
            );
        }
    );


    function setSessionBackVisible(
        visible
    ) {
        sessionBackVisible =
            Boolean(
                visible
            );

        el.sessionFront.classList.toggle(
            "is-hidden",
            sessionBackVisible
        );

        el.sessionBack.classList.toggle(
            "is-visible",
            sessionBackVisible
        );
    }


    // ==================================================
    // SESSION — EXPANDIERENDES UNIVERSUM
    // ==================================================

    const COMPLETION_QUOTES = [
            {
                    "quote": "Werde nicht bloß besser; werde genauer darin, wer du sein willst.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Wer immer Schüler bleibt, hat den Lehrer noch nicht verstanden.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Ein Gedanke gewinnt Gewicht, wenn du ihn im Leben riskierst.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Chaos ist nicht nur Unordnung; manchmal ist es Material für einen Stern.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Die gefährlichste Bequemlichkeit ist ein fremdes Ideal, das sich wie das eigene anfühlt.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Misstraue Wahrheiten, die nie einen Preis von dir verlangen.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Eine Moral verrät viel darüber, wovor ihre Urheber Angst hatten.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Zur Genealogie der Moral"
            },
            {
                    "quote": "Manche Gewissheiten sind nur sehr alte Gewohnheiten.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die fröhliche Wissenschaft"
            },
            {
                    "quote": "Der freie Geist braucht weniger Geländer als gute Beine.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Menschliches, Allzumenschliches"
            },
            {
                    "quote": "Auch Ernst kann eine Form von Eitelkeit sein; tanzen hilft.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Die Frage ist nicht nur, was wahr ist, sondern was eine Wahrheit mit uns macht.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Ein Stil ist eine Entscheidung darüber, was man weglässt.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Ecce Homo"
            },
            {
                    "quote": "Wer sich selbst überwinden will, braucht zuerst etwas, das Widerstand leistet.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Vielleicht ist das Gegenteil einer tiefen Wahrheit ebenfalls nicht ganz oberflächlich.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Der Körper denkt oft früher als das Bewusstsein.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Eine gute Frage kann wertvoller sein als zehn beruhigende Antworten.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die fröhliche Wissenschaft"
            },
            {
                    "quote": "Das Leben rechtfertigt sich nicht durch Sicherheit, sondern durch Intensität.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die Geburt der Tragödie"
            },
            {
                    "quote": "Wer nur gegen etwas kämpft, riskiert, ihm ähnlich zu werden.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Musik kann einen Gedanken sagen, bevor Sprache ihn eingeholt hat.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die Geburt der Tragödie"
            },
            {
                    "quote": "Der Horizont wächst manchmal erst, wenn eine alte Gewissheit untergeht.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die fröhliche Wissenschaft"
            },
            {
                    "quote": "Richtiges Leben beginnt dort, wo Menschen nicht mehr zu Funktionen gemacht werden.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Die bequemste Unterhaltung ist oft die, die uns vergessen lässt, dass sie uns formt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Dialektik der Aufklärung"
            },
            {
                    "quote": "Kritik heißt, dem scheinbar Selbstverständlichen seine Geschichte zurückzugeben.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Ein Begriff ist nützlich, solange er nicht behauptet, die Sache vollständig zu besitzen.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Kunst wird interessant, wenn sie sich weigert, bloß angenehm zu funktionieren.",
                    "source": "Theodor W. Adorno · sinngemäß nach Ästhetische Theorie"
            },
            {
                    "quote": "Fortschritt wäre auch: weniger Gründe, Angst zu haben.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Das Ganze erklärt viel und entschuldigt nichts.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Wer nur effizient denkt, denkt irgendwann wie die Maschine, die er bedienen wollte.",
                    "source": "Theodor W. Adorno · sinngemäß nach Dialektik der Aufklärung"
            },
            {
                    "quote": "Widerspruch ist kein Defekt des Denkens; manchmal ist er sein ehrlichster Zustand.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Ein Werk darf schwieriger sein als der Markt, der es verkaufen möchte.",
                    "source": "Theodor W. Adorno · sinngemäß nach Ästhetische Theorie"
            },
            {
                    "quote": "Bildung verliert ihren Sinn, wenn sie nur noch als Eintrittskarte zählt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Theorie der Halbbildung"
            },
            {
                    "quote": "Das Banale wird mächtig, wenn niemand mehr bemerkt, dass es banal ist.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Die Gesellschaft steckt auch in den intimsten Gewohnheiten.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Versöhnung wäre nicht Gleichheit, sondern ein Zustand, in dem Verschiedenheit nicht bedroht.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Gute Kunst bestätigt die Welt nicht; sie macht ihre Risse hörbar.",
                    "source": "Theodor W. Adorno · sinngemäß nach Philosophie der neuen Musik"
            },
            {
                    "quote": "Denken beginnt dort, wo die fertige Kategorie nicht mehr genügt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Auch Geschmack hat eine Gesellschaftsgeschichte.",
                    "source": "Theodor W. Adorno · sinngemäß nach Kulturkritik und Gesellschaft"
            },
            {
                    "quote": "Wer alles sofort versteht, hat vielleicht nur das Bekannte wiedererkannt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Ästhetische Theorie"
            },
            {
                    "quote": "Erinnerung ist politisch, sobald Vergessen bequem wird.",
                    "source": "Theodor W. Adorno · sinngemäß nach Erziehung nach Auschwitz"
            },
            {
                    "quote": "Freiheit zeigt sich nicht darin, immer wählen zu dürfen, sondern anders leben zu können.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Ideologie funktioniert besonders gut, wenn wir sicher sind, keine Ideologie zu haben.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Manchmal ist der Zyniker der gehorsamste Untertan: Er weiß es besser und macht trotzdem weiter.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Das Problem ist nicht nur, was wir begehren, sondern wer uns beigebracht hat, es zu begehren.",
                    "source": "Slavoj Žižek · sinngemäß nach How to Read Lacan"
            },
            {
                    "quote": "Ein Ereignis ist der Moment, nach dem dieselben Fakten plötzlich etwas anderes bedeuten.",
                    "source": "Slavoj Žižek · sinngemäß nach Event"
            },
            {
                    "quote": "Die bequemste Freiheit ist die, bei der schon entschieden wurde, welche Optionen vernünftig sind.",
                    "source": "Slavoj Žižek · sinngemäß nach The Parallax View"
            },
            {
                    "quote": "Realität wird oft gerade durch die Fantasie erträglich, die wir für unrealistisch halten.",
                    "source": "Slavoj Žižek · sinngemäß nach The Plague of Fantasies"
            },
            {
                    "quote": "Kaffee ohne Koffein ist ein erstaunlich gutes Modell für Genuss ohne Konsequenzen.",
                    "source": "Slavoj Žižek · sinngemäß nach Welcome to the Desert of the Real"
            },
            {
                    "quote": "Wir wollen Veränderung — vorausgesetzt, danach bleibt alles ungefähr so bequem wie vorher.",
                    "source": "Slavoj Žižek · sinngemäß nach Living in the End Times"
            },
            {
                    "quote": "Die Pointe eines Witzes weiß manchmal mehr über Politik als eine Pressekonferenz.",
                    "source": "Slavoj Žižek · sinngemäß nach diversen Vorträgen und Schriften"
            },
            {
                    "quote": "Eine Gesellschaft erkennt man auch an den Dingen, über die sie nicht ernsthaft sprechen kann.",
                    "source": "Slavoj Žižek · sinngemäß nach Violence"
            },
            {
                    "quote": "Das Symptom ist nicht nur das Problem; oft hält es das ganze System zusammen.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Es reicht nicht, die Maske abzunehmen, wenn unter der Maske schon die nächste Maske wartet.",
                    "source": "Slavoj Žižek · sinngemäß nach The Parallax View"
            },
            {
                    "quote": "Manchmal besteht Mut darin, eine falsche Alternative überhaupt nicht zu wählen.",
                    "source": "Slavoj Žižek · sinngemäß nach In Defense of Lost Causes"
            },
            {
                    "quote": "Das Unmögliche ist häufig nur das, dessen Kosten niemand im bestehenden System tragen will.",
                    "source": "Slavoj Žižek · sinngemäß nach Less Than Nothing"
            },
            {
                    "quote": "Eine Katastrophe kann sichtbar machen, was vorher schon da war, aber als normal galt.",
                    "source": "Slavoj Žižek · sinngemäß nach Living in the End Times"
            },
            {
                    "quote": "Genuss ist verdächtig, sobald er zur Pflicht wird.",
                    "source": "Slavoj Žižek · sinngemäß nach The Metastases of Enjoyment"
            },
            {
                    "quote": "Die Wahrheit einer Position zeigt sich manchmal in dem Witz, den sie über sich selbst nicht erträgt.",
                    "source": "Slavoj Žižek · sinngemäß nach diversen Vorträgen und Schriften"
            },
            {
                    "quote": "Ein System kann Kritik lieben, solange die Kritik Teil seines Unterhaltungsprogramms bleibt.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Vielleicht sollten wir nicht schneller handeln, sondern zuerst genauer herausfinden, was unser Handeln reproduziert.",
                    "source": "Slavoj Žižek · sinngemäß nach Violence"
            },
            {
                    "quote": "Der Abgrund zwischen zwei Perspektiven verschwindet nicht immer durch einen Kompromiss.",
                    "source": "Slavoj Žižek · sinngemäß nach The Parallax View"
            },
            {
                    "quote": "Ein gutes Gedankenexperiment kostet wenig Material und kann ein ganzes Weltbild verschieben.",
                    "source": "Albert Einstein · sinngemäß nach Relativität: Die spezielle und allgemeine Theorie"
            },
            {
                    "quote": "Zeit ist nicht die Bühne der Physik; sie gehört selbst zum Stück.",
                    "source": "Albert Einstein · sinngemäß nach Zur Elektrodynamik bewegter Körper"
            },
            {
                    "quote": "Eine Theorie ist stark, wenn sie viel erklärt und wenig voraussetzt.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Intuition ist kein Ersatz für Mathematik, aber oft ihr erster Entwurf.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Der Beobachter steht nicht außerhalb der Beschreibung, die er von Bewegung macht.",
                    "source": "Albert Einstein · sinngemäß nach Zur Elektrodynamik bewegter Körper"
            },
            {
                    "quote": "Ein Problem wird interessanter, wenn die naheliegende Messgröße plötzlich vom Bezugssystem abhängt.",
                    "source": "Albert Einstein · sinngemäß nach Relativitätstheorie"
            },
            {
                    "quote": "Physik beginnt oft mit der Frage, welche Größen wirklich beobachtbar sind.",
                    "source": "Albert Einstein · sinngemäß nach frühen Arbeiten zur Relativität"
            },
            {
                    "quote": "Eleganz ist kein Beweis, aber ein bemerkenswert guter Hinweisgeber.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Ein Lichtstrahl ist ein erstaunlicher Gesprächspartner für ein Gedankenexperiment.",
                    "source": "Albert Einstein · sinngemäß nach autobiographischen Notizen"
            },
            {
                    "quote": "Raum und Zeit sind weniger absolut, als unser Alltag uns glauben lässt.",
                    "source": "Albert Einstein · sinngemäß nach Relativität: Die spezielle und allgemeine Theorie"
            },
            {
                    "quote": "Die Natur schuldet uns keine Anschaulichkeit.",
                    "source": "Albert Einstein · sinngemäß nach Schriften zur modernen Physik"
            },
            {
                    "quote": "Man sollte eine Sache so einfach darstellen, wie ihre Struktur es erlaubt — nicht einfacher.",
                    "source": "Albert Einstein · sinngemäß nach Schriften und Briefen"
            },
            {
                    "quote": "Neugier ist produktiver, wenn sie sich nicht zu früh von Autorität beruhigen lässt.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Eine Uhr misst Zeit; sie erklärt noch nicht, was Gleichzeitigkeit bedeutet.",
                    "source": "Albert Einstein · sinngemäß nach Zur Elektrodynamik bewegter Körper"
            },
            {
                    "quote": "Gravitation kann als Geometrie erscheinen, wenn man die richtige Sprache findet.",
                    "source": "Albert Einstein · sinngemäß nach Die Grundlage der allgemeinen Relativitätstheorie"
            },
            {
                    "quote": "Gute Physik verändert manchmal zuerst die Begriffe und erst danach die Gleichungen.",
                    "source": "Albert Einstein · sinngemäß nach Arbeiten zur Relativität"
            },
            {
                    "quote": "Das Staunen über die Verständlichkeit der Natur ist selbst ein philosophisches Problem.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Ein Bezugssystem ist kein Standpunkt Gottes, sondern ein Werkzeug.",
                    "source": "Albert Einstein · sinngemäß nach Relativitätstheorie"
            },
            {
                    "quote": "Wenn zwei Beobachter sich widersprechen, kann die Invariante interessanter sein als beide Messwerte.",
                    "source": "Albert Einstein · sinngemäß nach spezieller Relativitätstheorie"
            },
            {
                    "quote": "Manchmal besteht Fortschritt darin, eine scheinbar selbstverständliche Frage neu zu formulieren.",
                    "source": "Albert Einstein · sinngemäß nach autobiographischen Notizen"
            },
            {
                    "quote": "Eine Melodie sollte atmen können, selbst wenn die Finger sehr beschäftigt sind.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und musikalischer Praxis"
            },
            {
                    "quote": "Leichtigkeit ist nicht dasselbe wie Einfachheit; oft ist sie das Ergebnis sehr genauer Arbeit.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen an die Familie"
            },
            {
                    "quote": "Ein guter Einfall darf elegant sein und trotzdem frech.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen 1777–1791"
            },
            {
                    "quote": "Musik braucht Ordnung, aber sie lebt von dem Augenblick, in dem die Ordnung lächelt.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und Werken"
            },
            {
                    "quote": "Technik ist nützlich, sobald sie aufhört, sich selbst vorzuführen.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und musikalischer Praxis"
            },
            {
                    "quote": "Eine Pause kann genauso komponiert sein wie ein Ton.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Humor und Präzision vertragen sich ausgezeichnet.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen an die Familie"
            },
            {
                    "quote": "Eine Stimme wird interessanter, wenn eine zweite ihr wirklich zuhört.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach kontrapunktischer Praxis"
            },
            {
                    "quote": "Man kann sehr ernst komponieren, ohne feierlich zu werden.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und Werken"
            },
            {
                    "quote": "Ein Thema zeigt seinen Charakter erst, wenn man sieht, was es unter Druck tut.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Sonaten- und Variationspraxis"
            },
            {
                    "quote": "Eleganz entsteht oft dort, wo nichts mehr hinzugefügt werden muss.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Das Publikum darf überrascht werden, aber die Musik sollte wissen, warum.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen an Leopold Mozart"
            },
            {
                    "quote": "Ein schneller Satz braucht nicht weniger Gedanken, nur weniger Zeit, sie zu verstecken.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Kontrapunkt ist die Kunst, gleichzeitig Recht zu haben und dem anderen Platz zu lassen.",
                    "source": "Wolfgang Amadeus Mozart · spielerisch sinngemäß nach seiner kontrapunktischen Musik"
            },
            {
                    "quote": "Ein guter Schluss wirkt unvermeidlich, obwohl er vorher nicht langweilig vorhersehbar war.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Virtuosität ist am schönsten, wenn sie wie ein Nebeneffekt der Idee klingt.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und Klavierwerken"
            },
            {
                    "quote": "Eine kleine harmonische Verschiebung kann eine ganze Szene psychologisch verändern.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach den Opern"
            },
            {
                    "quote": "Wer nur schöne Töne sucht, verpasst vielleicht die Figur, die gerade lügt.",
                    "source": "Wolfgang Amadeus Mozart · spielerisch sinngemäß nach den Opern"
            },
            {
                    "quote": "Musik darf gleichzeitig mathematisch klar und menschlich unvernünftig sein.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach seinen Werken"
            },
            {
                    "quote": "Wenn eine Phrase selbstverständlich klingt, steckt oft besonders viel Entscheidung darin.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            }
    ];


    const EXPANSION_MODELS = [
        // radiation-like
        p =>
            Math.sqrt(
                Math.max(
                    0,
                    p
                )
            ),

        // matter-like
        p =>
            Math.pow(
                Math.max(
                    0,
                    p
                ),
                2 / 3
            ),

        // coasting
        p =>
            p,

        // late acceleration / de Sitter-like
        p =>
            (
                Math.exp(
                    3.2 * p
                )
                -
                1
            )
            /
            (
                Math.exp(3.2)
                -
                1
            ),

        // slow early universe, then accelerated late expansion
        p => {
            const matter =
                Math.pow(
                    Math.max(
                        p,
                        0
                    ),
                    2 / 3
                );

            const late =
                (
                    Math.exp(
                        4 * p
                    )
                    -
                    1
                )
                /
                (
                    Math.exp(4)
                    -
                    1
                );

            const blend =
                p * p * (3 - 2 * p);

            return (
                matter * (1 - blend)
                +
                late * blend
            );
        },

        // radiation -> matter -> acceleration, smoothly normalized
        p => {
            const early =
                Math.sqrt(
                    Math.max(
                        0,
                        p
                    )
                );

            const middle =
                Math.pow(
                    Math.max(
                        0,
                        p
                    ),
                    2 / 3
                );

            const late =
                (
                    Math.exp(
                        3.5 * p
                    )
                    -
                    1
                )
                /
                (
                    Math.exp(3.5)
                    -
                    1
                );

            if (p < 0.28) {
                return (
                    early
                    /
                    Math.sqrt(0.28)
                    *
                    0.36
                );
            }

            if (p < 0.72) {
                const q =
                    (
                        p - 0.28
                    )
                    /
                    0.44;

                return (
                    0.36
                    +
                    0.40
                    *
                    (
                        q * q * (3 - 2 * q)
                    )
                );
            }

            const q =
                (
                    p - 0.72
                )
                /
                0.28;

            return (
                0.76
                +
                0.24
                *
                (
                    (
                        Math.exp(
                            2.6 * q
                        )
                        -
                        1
                    )
                    /
                    (
                        Math.exp(2.6)
                        -
                        1
                    )
                )
            );
        }
    ];


    function stopSessionInterval() {
        if (
            sessionInterval
            !==
            null
        ) {
            clearInterval(
                sessionInterval
            );

            sessionInterval =
                null;
        }
    }


    function persistSessionRuntime() {
        if (
            !sessionPlan
        ) {
            try {
                sessionStorage.removeItem(
                    ACTIVE_SESSION_KEY
                );
            } catch (
                error
            ) {
                // Storage can be unavailable in restrictive browser modes.
            }

            return;
        }

        const payload = {
            version:
                1,
            plan:
                sessionPlan,
            index:
                sessionIndex,
            endTime:
                sessionEndTime,
            itemDurationMs:
                sessionItemDurationMs,
            paused:
                sessionPaused,
            pausedRemainingMs:
                sessionPausedRemainingMs,
            completionPending:
                sessionCompletionPending,
            planFinishedPending:
                sessionPlanFinishedPending,
            completionQuote:
                completionQuote
        };

        try {
            sessionStorage.setItem(
                ACTIVE_SESSION_KEY,
                JSON.stringify(
                    payload
                )
            );
        } catch (
            error
        ) {
            // A running timer must never depend on storage succeeding.
        }
    }


    function clearPersistedSessionRuntime() {
        try {
            sessionStorage.removeItem(
                ACTIVE_SESSION_KEY
            );
        } catch (
            error
        ) {
            // Ignore storage failures.
        }
    }


    function refreshSessionPauseUi() {
        el.sessionPauseButton.textContent =
            sessionPaused
                ? "Fortsetzen"
                : "Pause";

        el.sessionPauseButton.setAttribute(
            "aria-pressed",
            sessionPaused
                ? "true"
                : "false"
        );

        el.sessionBack.classList.toggle(
            "is-paused",
            sessionPaused
        );
    }


    function startSessionTicker() {
        stopSessionInterval();

        if (
            !sessionPlan
            ||
            sessionPaused
            ||
            sessionPlanFinishedPending
            ||
            sessionCompletionPending
            ||
            sessionEndTime
            ===
            null
        ) {
            return;
        }

        sessionInterval =
            setInterval(
                updateSessionTimer,
                250
            );
    }


    function restorePersistedSessionRuntime() {
        let raw =
            null;

        try {
            raw =
                sessionStorage.getItem(
                    ACTIVE_SESSION_KEY
                );
        } catch (
            error
        ) {
            return false;
        }

        if (!raw) {
            return false;
        }

        try {
            const saved =
                JSON.parse(
                    raw
                );

            if (
                !saved
                ||
                !saved.plan
                ||
                !Array.isArray(
                    saved.plan.items
                )
            ) {
                clearPersistedSessionRuntime();
                return false;
            }

            sessionPlan =
                saved.plan;

            sessionIndex =
                Math.max(
                    0,
                    Number(
                        saved.index
                    )
                    ||
                    0
                );

            sessionEndTime =
                Number.isFinite(
                    Number(
                        saved.endTime
                    )
                )
                    ? Number(
                        saved.endTime
                    )
                    : null;

            sessionItemDurationMs =
                Math.max(
                    0,
                    Number(
                        saved.itemDurationMs
                    )
                    ||
                    0
                );

            sessionPaused =
                Boolean(
                    saved.paused
                );

            sessionPausedRemainingMs =
                Math.max(
                    0,
                    Number(
                        saved.pausedRemainingMs
                    )
                    ||
                    0
                );

            sessionCompletionPending =
                Boolean(
                    saved.completionPending
                );

            sessionPlanFinishedPending =
                Boolean(
                    saved.planFinishedPending
                );

            sessionCompleting =
                false;

            completionQuote =
                saved.completionQuote
                ??
                null;

            refreshSessionPauseUi();

            if (
                sessionPlanFinishedPending
            ) {
                sessionEndTime =
                    null;

                stopSessionInterval();

                renderMiniSession();

                return true;
            }

            const item =
                currentSessionItem();

            if (!item) {
                clearPersistedSessionRuntime();

                sessionPlan =
                    null;

                return false;
            }

            // Rebuild visible labels in case the WebView itself was reloaded.
            if (
                item.type
                ===
                "task"
            ) {
                el.sessionTitle.textContent =
                    item.name;

                el.sessionNote.textContent =
                    item.note
                    ||
                    "";

                el.sessionNoteWrap.style.display =
                    item.note
                        ? "flex"
                        : "none";

            } else {
                el.sessionTitle.textContent =
                    "Pause";

                el.sessionNote.textContent =
                    "";

                el.sessionNoteWrap.style.display =
                    "none";
            }

            el.sessionProgress.textContent =
                `${sessionIndex + 1} von ${sessionPlan.items.length}`;

            generateUniverse();

            if (
                sessionPaused
            ) {
                sessionEndTime =
                    null;

                universeManualProgress =
                    sessionItemDurationMs
                    >
                    0
                        ? Math.max(
                            0,
                            Math.min(
                                1,
                                1
                                -
                                sessionPausedRemainingMs
                                /
                                sessionItemDurationMs
                            )
                        )
                        : 0;

                el.sessionTimer.textContent =
                    formatCountdown(
                        sessionPausedRemainingMs
                    );

                stopSessionInterval();

            } else if (
                sessionCompletionPending
            ) {
                sessionEndTime =
                    null;

                universeManualProgress =
                    1;

                stopSessionInterval();

            } else if (
                sessionEndTime
                !==
                null
            ) {
                universeManualProgress =
                    null;

                if (
                    Date.now()
                    >=
                    sessionEndTime
                ) {
                    setTimeout(
                        handleNaturalSessionEnd,
                        0
                    );

                } else {
                    updateSessionTimer();
                    startSessionTicker();
                }
            }

            renderMiniSession();

            return true;

        } catch (
            error
        ) {
            clearPersistedSessionRuntime();
            return false;
        }
    }


    function syncSessionAfterReturn() {
        if (
            !sessionPlan
        ) {
            return;
        }

        refreshSessionPauseUi();

        if (
            sessionPaused
        ) {
            el.sessionTimer.textContent =
                formatCountdown(
                    sessionPausedRemainingMs
                );

            stopSessionInterval();

            renderMiniSession();

            return;
        }

        if (
            sessionPlanFinishedPending
            ||
            sessionCompletionPending
        ) {
            stopSessionInterval();
            renderMiniSession();
            return;
        }

        if (
            sessionEndTime
            !==
            null
        ) {
            if (
                Date.now()
                >=
                sessionEndTime
            ) {
                handleNaturalSessionEnd();

            } else {
                updateSessionTimer();
                startSessionTicker();
                ensureUniverseAnimation();
            }
        }

        persistSessionRuntime();
    }


    function pauseCurrentSession() {
        if (
            !sessionPlan
            ||
            sessionPlanFinishedPending
            ||
            sessionCompletionPending
            ||
            sessionCompleting
        ) {
            return;
        }

        if (
            sessionPaused
        ) {
            sessionPaused =
                false;

            sessionEndTime =
                Date.now()
                +
                Math.max(
                    0,
                    sessionPausedRemainingMs
                );

            sessionPausedRemainingMs =
                0;

            universeManualProgress =
                null;

            refreshSessionPauseUi();

            updateSessionTimer();

            startSessionTicker();

            ensureUniverseAnimation();

            persistSessionRuntime();

            return;
        }

        if (
            sessionEndTime
            ===
            null
        ) {
            return;
        }

        sessionPausedRemainingMs =
            Math.max(
                0,
                sessionEndTime
                -
                Date.now()
            );

        sessionPaused =
            true;

        universeManualProgress =
            sessionItemDurationMs
            >
            0
                ? Math.max(
                    0,
                    Math.min(
                        1,
                        1
                        -
                        sessionPausedRemainingMs
                        /
                        sessionItemDurationMs
                    )
                )
                : 0;

        sessionEndTime =
            null;

        stopSessionInterval();

        if (
            universeFrameHandle
            !==
            null
        ) {
            cancelAnimationFrame(
                universeFrameHandle
            );

            universeFrameHandle =
                null;
        }

        el.sessionTimer.textContent =
            formatCountdown(
                sessionPausedRemainingMs
            );

        refreshSessionPauseUi();

        renderMiniSession();

        persistSessionRuntime();
    }


    function currentSessionItem() {
        if (
            !sessionPlan
            ||
            sessionPlanFinishedPending
        ) {
            return null;
        }

        return (
            sessionPlan.items[
                sessionIndex
            ]
            ??
            null
        );
    }


    function renderMiniSession() {
        if (
            !sessionPlan
            ||
            activeScreen()
            ===
            screens.session
            ||
            activeScreen()
            ===
            screens.sessionReview
            ||
            activeScreen()
            ===
            screens.planComplete
        ) {
            el.miniSessionBar.classList.add(
                "hidden"
            );

            return;
        }

        el.miniSessionBar.classList.remove(
            "hidden"
        );

        if (
            sessionPlanFinishedPending
        ) {
            el.miniSessionBar.classList.add(
                "pending"
            );

            el.miniSessionName.textContent =
                "Plan abgeschlossen";

            el.miniSessionTime.textContent =
                "Öffnen";

            return;
        }

        const item =
            currentSessionItem();

        if (!item) {
            el.miniSessionBar.classList.add(
                "hidden"
            );

            return;
        }

        el.miniSessionBar.classList.toggle(
            "pending",
            sessionCompletionPending
        );

        el.miniSessionName.textContent =
            item.type
            ===
            "break"
                ? "Pause"
                : item.name;

        if (
            sessionPaused
        ) {
            el.miniSessionBar.classList.add(
                "pending"
            );

            el.miniSessionTime.textContent =
                `Pausiert · ${formatCountdown(sessionPausedRemainingMs)}`;

            return;
        }

        if (
            sessionCompletionPending
        ) {
            el.miniSessionTime.textContent =
                "Abgeschlossen";

            return;
        }

        if (
            sessionEndTime
            !==
            null
        ) {
            el.miniSessionTime.textContent =
                formatCountdown(
                    sessionEndTime
                    -
                    Date.now()
                );
        }
    }


    function wrapPeriodic(value) {
        let result =
            value;

        while (
            result > 0.5
        ) {
            result -= 1;
        }

        while (
            result < -0.5
        ) {
            result += 1;
        }

        return result;
    }


    function gaussian() {
        let u = 0;
        let v = 0;

        while (
            u === 0
        ) {
            u =
                Math.random();
        }

        while (
            v === 0
        ) {
            v =
                Math.random();
        }

        return (
            Math.sqrt(
                -2
                *
                Math.log(u)
            )
            *
            Math.cos(
                2
                *
                Math.PI
                *
                v
            )
        );
    }


    function periodicDelta(
        a,
        b
    ) {
        return wrapPeriodic(
            a - b
        );
    }


    function normalizePeriodic(
        value
    ) {
        let result =
            value;

        while (
            result >= 0.5
        ) {
            result -= 1;
        }

        while (
            result < -0.5
        ) {
            result += 1;
        }

        return result;
    }


    function addUniverseParticle(
        particle
    ) {
        universeParticles.push({
            // target homogeneous comoving position
            hx:
                particle.hx,
            hy:
                particle.hy,

            // initial chaotic displacement around the homogeneous target
            cx:
                particle.cx,
            cy:
                particle.cy,

            size:
                particle.size
                ??
                (
                    0.7
                    +
                    Math.random()
                    *
                    1.25
                ),

            alpha:
                particle.alpha
                ??
                (
                    0.45
                    +
                    Math.random()
                    *
                    0.45
                )
        });

        return (
            universeParticles.length
            -
            1
        );
    }


    function generateUniverse() {
        universeSeed =
            Math.floor(
                Math.random()
                *
                1_000_000_000
            );

        universeParticles =
            createObserverCenteredUniverse();

        universeNodes =
            [];

        universeObserverIndex =
            0;

        universeExpansionModel =
            Math.floor(
                Math.random()
                *
                EXPANSION_MODELS.length
            );

        universeObserverPulseUntil =
            performance.now()
            +
            900;
    }


    function universeComovingPosition(
        particle,
        ordering
    ) {
        // ordering = 0: chaotic / clustered
        // ordering = 1: homogeneous Fibonacci disk
        const chaos =
            1
            -
            ordering;

        return {
            x:
                particle.hx
                +
                particle.cx
                *
                chaos,
            y:
                particle.hy
                +
                particle.cy
                *
                chaos
        };
    }


    function sessionVisualProgress() {
        if (
            universeManualProgress
            !==
            null
        ) {
            return universeManualProgress;
        }

        if (
            sessionPaused
            &&
            sessionItemDurationMs
            >
            0
        ) {
            return Math.max(
                0,
                Math.min(
                    1,
                    1
                    -
                    sessionPausedRemainingMs
                    /
                    sessionItemDurationMs
                )
            );
        }

        if (
            sessionEndTime
            ===
            null
            ||
            sessionItemDurationMs
            <=
            0
        ) {
            return 1;
        }

        return Math.max(
            0,
            Math.min(
                1,
                1
                -
                (
                    sessionEndTime
                    -
                    Date.now()
                )
                /
                sessionItemDurationMs
            )
        );
    }


    function expansionScale(
        progress,
        width,
        height
    ) {
        const model =
            EXPANSION_MODELS[
                universeExpansionModel
            ];

        const forwardCosmicTime =
            1
            -
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );

        const forwardScale =
            Math.max(
                0,
                Math.min(
                    1,
                    model(
                        forwardCosmicTime
                    )
                )
            );

        // Same expansion history, traversed backwards:
        // full circular universe at start -> nearly a point at 00:00.
        const minimumScale =
            0.006;

        const normalized =
            minimumScale
            +
            (
                1
                -
                minimumScale
            )
            *
            forwardScale;

        // Since comoving radius = 0.5, this initial diameter is larger than
        // the viewport diagonal, so the point distribution covers the whole screen.
        const fullDiameter =
            Math.hypot(
                width,
                height
            )
            *
            1.16;

        return (
            fullDiameter
            *
            normalized
        );
    }


    function universeColors() {
        const dark =
            state.settings.theme
            ===
            "dark";

        return dark
            ? {
                background:
                    "#111210",
                point:
                    "242,242,236",
                edge:
                    "188,194,199",
                observer:
                    "255,255,248"
            }
            : {
                background:
                    "#f6f6f2",
                point:
                    "18,18,17",
                edge:
                    "80,88,92",
                observer:
                    "0,0,0"
            };
    }


    function sizeUniverseCanvas() {
        const canvas =
            el.universeCanvas;

        const rect =
            canvas.getBoundingClientRect();

        const dpr =
            Math.min(
                2,
                window.devicePixelRatio
                ||
                1
            );

        const pixelWidth =
            Math.max(
                1,
                Math.round(
                    rect.width
                    *
                    dpr
                )
            );

        const pixelHeight =
            Math.max(
                1,
                Math.round(
                    rect.height
                    *
                    dpr
                )
            );

        if (
            canvas.width
            !==
            pixelWidth
            ||
            canvas.height
            !==
            pixelHeight
        ) {
            canvas.width =
                pixelWidth;

            canvas.height =
                pixelHeight;
        }

        return {
            width:
                rect.width,
            height:
                rect.height,
            dpr
        };
    }


    function drawUniverse(
        now
    ) {
        if (
            universeParticles.length
            ===
            0
        ) {
            return;
        }

        const canvas =
            el.universeCanvas;

        const context =
            canvas.getContext(
                "2d",
                {
                    alpha: false
                }
            );

        const {
            width,
            height,
            dpr
        } =
            sizeUniverseCanvas();

        context.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        const colors =
            universeColors();

        context.fillStyle =
            colors.background;

        context.fillRect(
            0,
            0,
            width,
            height
        );

        const progress =
            sessionVisualProgress();

        const scale =
            expansionScale(
                progress,
                width,
                height
            );

        // Entropy-reverse visual:
        // perturbations disappear as the universe contracts.
        const ordering =
            progress
            *
            progress
            *
            (
                3
                -
                2
                *
                progress
            );

        const centerX =
            width
            /
            2;

        const centerY =
            height
            /
            2;

        universeLastRendered =
            new Array(
                universeParticles.length
            );

        universeParticles.forEach(
            (
                particle,
                index
            ) => {
                const current =
                    universeComovingPosition(
                        particle,
                        ordering
                    );

                // The observer is the origin by construction.
                const x =
                    centerX
                    +
                    current.x
                    *
                    scale;

                const y =
                    centerY
                    +
                    current.y
                    *
                    scale;

                universeLastRendered[
                    index
                ] = {
                    index,
                    x,
                    y,
                    visible:
                        x > -24
                        &&
                        x < width + 24
                        &&
                        y > -24
                        &&
                        y < height + 24
                };
            }
        );

        universeParticles.forEach(
            (
                particle,
                index
            ) => {
                const rendered =
                    universeLastRendered[
                        index
                    ];

                if (
                    !rendered
                    ||
                    !rendered.visible
                ) {
                    return;
                }

                const radius =
                    Math.max(
                        0.48,
                        particle.size
                        *
                        (
                            0.82
                            +
                            0.18
                            *
                            (
                                1
                                -
                                progress
                            )
                        )
                    );

                const alpha =
                    particle.alpha
                    *
                    (
                        0.58
                        +
                        0.42
                        *
                        (
                            1
                            -
                            progress
                        )
                    );

                context.fillStyle =
                    `rgba(${colors.point},${alpha})`;

                context.beginPath();

                context.arc(
                    rendered.x,
                    rendered.y,
                    radius,
                    0,
                    Math.PI
                    *
                    2
                );

                context.fill();
            }
        );

        const selected =
            universeLastRendered[
                0
            ];

        if (
            selected
            &&
            selected.visible
        ) {
            const pulseRemaining =
                Math.max(
                    0,
                    universeObserverPulseUntil
                    -
                    now
                );

            if (
                pulseRemaining
                >
                0
            ) {
                const phase =
                    1
                    -
                    pulseRemaining
                    /
                    900;

                context.strokeStyle =
                    `rgba(${colors.observer},${0.30 * (1 - phase)})`;

                context.lineWidth =
                    0.8;

                context.beginPath();

                context.arc(
                    centerX,
                    centerY,
                    7
                    +
                    13
                    *
                    phase,
                    0,
                    Math.PI
                    *
                    2
                );

                context.stroke();
            }

            context.fillStyle =
                `rgba(${colors.observer},0.98)`;

            context.beginPath();

            context.arc(
                centerX,
                centerY,
                2.1,
                0,
                Math.PI
                *
                2
            );

            context.fill();
        }
    }


    function universeLoop(
        now
    ) {
        universeFrameHandle =
            null;

        if (
            !sessionPlan
            ||
            sessionPaused
            ||
            sessionPlanFinishedPending
            ||
            activeScreen()
            !==
            screens.session
        ) {
            return;
        }

        drawUniverse(
            now
        );

        if (
            universeManualProgress
            ===
            null
            &&
            sessionEndTime
            !==
            null
            &&
            Date.now()
            >=
            sessionEndTime
        ) {
            handleNaturalSessionEnd();
            return;
        }

        universeFrameHandle =
            requestAnimationFrame(
                universeLoop
            );
    }


    function ensureUniverseAnimation() {
        if (
            universeFrameHandle
            !==
            null
        ) {
            return;
        }

        if (
            !sessionPlan
            ||
            sessionPaused
            ||
            sessionPlanFinishedPending
            ||
            activeScreen()
            !==
            screens.session
        ) {
            return;
        }

        universeFrameHandle =
            requestAnimationFrame(
                universeLoop
            );
    }


    function startSession(plan) {
        sessionPlan =
            clone(plan);

        sessionIndex = 0;
        sessionCompletionPending = false;
        sessionPlanFinishedPending = false;
        sessionCompleting = false;
        sessionPaused = false;
        sessionPausedRemainingMs = 0;
        completionQuote = null;

        showScreen(
            screens.session
        );

        startCurrentSessionItem();
    }


    function startCurrentSessionItem() {
        if (
            !sessionPlan
            ||
            sessionIndex
            >=
            sessionPlan.items.length
        ) {
            finishPlan(
                false
            );

            return;
        }

        const item =
            currentSessionItem();

        if (!item) {
            finishPlan(
                false
            );

            return;
        }

        sessionCompletionPending =
            false;

        universeManualProgress =
            null;

        setSessionBackVisible(
            false
        );

        if (
            item.type
            ===
            "task"
        ) {
            el.sessionTitle.textContent =
                item.name;

            el.sessionNote.textContent =
                item.note
                ||
                "";

            el.sessionNoteWrap.style.display =
                item.note
                    ? "flex"
                    : "none";

        } else {
            el.sessionTitle.textContent =
                "Pause";

            el.sessionNote.textContent =
                "";

            el.sessionNoteWrap.style.display =
                "none";
        }

        el.sessionProgress.textContent =
            `${sessionIndex + 1} von ${sessionPlan.items.length}`;

        generateUniverse();

        sessionItemDurationMs =
            Number(
                item.duration
            )
            *
            60
            *
            1000;

        sessionPaused =
            false;

        sessionPausedRemainingMs =
            0;

        sessionEndTime =
            Date.now()
            +
            sessionItemDurationMs;

        refreshSessionPauseUi();

        updateSessionTimer();

        startSessionTicker();

        ensureUniverseAnimation();

        renderMiniSession();

        persistSessionRuntime();
    }


    function updateSessionTimer() {
        if (
            sessionPaused
        ) {
            el.sessionTimer.textContent =
                formatCountdown(
                    sessionPausedRemainingMs
                );

            renderMiniSession();
            return;
        }

        if (
            sessionEndTime
            ===
            null
        ) {
            renderMiniSession();
            return;
        }

        const remaining =
            sessionEndTime
            -
            Date.now();

        el.sessionTimer.textContent =
            formatCountdown(
                remaining
            );

        renderMiniSession();

        persistSessionRuntime();

        if (
            remaining
            <=
            0
        ) {
            handleNaturalSessionEnd();
        }
    }


    function handleNaturalSessionEnd() {
        if (
            sessionCompleting
            ||
            sessionCompletionPending
            ||
            sessionPlanFinishedPending
        ) {
            return;
        }

        stopSessionInterval();

        universeManualProgress =
            1;

        if (
            activeScreen()
            ===
            screens.session
        ) {
            drawUniverse(
                performance.now()
            );
        }

        sessionEndTime =
            null;

        sessionPaused =
            false;

        sessionPausedRemainingMs =
            0;

        refreshSessionPauseUi();

        const item =
            currentSessionItem();

        if (!item) {
            finishPlan(
                activeScreen()
                !==
                screens.session
            );

            return;
        }

        if (
            item.type
            ===
            "task"
            &&
            item.note.trim()
            !==
            ""
        ) {
            if (
                activeScreen()
                ===
                screens.session
            ) {
                openSessionReview();

            } else {
                sessionCompletionPending =
                    true;

                renderMiniSession();

                persistSessionRuntime();
            }

            return;
        }

        advanceSession(
            activeScreen()
            !==
            screens.session
        );
    }


    function openSessionReview() {
        const item =
            currentSessionItem();

        if (
            !item
            ||
            item.type
            !==
            "task"
        ) {
            return;
        }

        sessionCompletionPending =
            false;

        el.reviewTitle.textContent =
            item.name;

        el.reviewNote.value =
            item.note;

        el.reviewDuration.value =
            item.duration;

        setError(
            el.reviewError
        );

        showScreen(
            screens.sessionReview
        );

        persistSessionRuntime();
    }


    function animateUniverseToEnd(
        callback
    ) {
        const startProgress =
            sessionVisualProgress();

        const originalRemaining =
            Math.max(
                0,
                sessionEndTime
                ===
                null
                    ? 0
                    : sessionEndTime
                      -
                      Date.now()
            );

        const startTime =
            performance.now();

        const duration =
            620;

        universeManualProgress =
            startProgress;

        const frame =
            now => {
                const raw =
                    (
                        now
                        -
                        startTime
                    )
                    /
                    duration;

                const t =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            raw
                        )
                    );

                const eased =
                    1
                    -
                    Math.pow(
                        1 - t,
                        3
                    );

                universeManualProgress =
                    startProgress
                    +
                    (
                        1
                        -
                        startProgress
                    )
                    *
                    eased;

                el.sessionTimer.textContent =
                    formatCountdown(
                        originalRemaining
                        *
                        (
                            1 - eased
                        )
                    );

                drawUniverse(
                    now
                );

                if (
                    t < 1
                ) {
                    requestAnimationFrame(
                        frame
                    );

                } else {
                    universeManualProgress =
                        1;

                    el.sessionTimer.textContent =
                        "00:00";

                    callback();
                }
            };

        requestAnimationFrame(
            frame
        );
    }


    function endCurrentUnitEarly() {
        if (
            !sessionPlan
            ||
            sessionCompleting
            ||
            sessionPlanFinishedPending
        ) {
            return;
        }

        if (
            sessionPaused
        ) {
            sessionEndTime =
                Date.now()
                +
                sessionPausedRemainingMs;

            sessionPaused =
                false;

            sessionPausedRemainingMs =
                0;

            refreshSessionPauseUi();
        }

        sessionCompleting =
            true;

        stopSessionInterval();

        animateUniverseToEnd(
            () => {
                sessionEndTime =
                    null;

                sessionCompleting =
                    false;

                const item =
                    currentSessionItem();

                if (!item) {
                    finishPlan(
                        false
                    );

                    return;
                }

                if (
                    item.type
                    ===
                    "task"
                    &&
                    item.note.trim()
                    !==
                    ""
                ) {
                    openSessionReview();
                    return;
                }

                advanceSession(
                    false
                );
            }
        );
    }


    function updateOriginalPlanItem(
        sessionItem
    ) {
        if (!sessionPlan) {
            return;
        }

        const storedPlan =
            state.plans.find(
                plan =>
                    plan.id
                    ===
                    sessionPlan.id
            );

        if (!storedPlan) {
            return;
        }

        const storedItem =
            storedPlan.items.find(
                item =>
                    item.id
                    ===
                    sessionItem.id
            );

        if (!storedItem) {
            return;
        }

        storedItem.note =
            sessionItem.note;

        storedItem.duration =
            sessionItem.duration;

        saveState();
    }


    el.saveReviewButton.addEventListener(
        "click",
        () => {
            const item =
                currentSessionItem();

            if (
                !item
                ||
                item.type
                !==
                "task"
            ) {
                return;
            }

            const duration =
                validPositiveNumber(
                    el.reviewDuration.value
                );

            if (!duration) {
                setError(
                    el.reviewError,
                    "Dauer fehlt."
                );

                return;
            }

            item.note =
                el.reviewNote
                    .value
                    .trim();

            item.duration =
                duration;

            updateOriginalPlanItem(
                item
            );

            advanceSession(
                false
            );
        }
    );


    function advanceSession(
        preserveCurrentScreen
    ) {
        sessionIndex += 1;
        sessionCompletionPending =
            false;
        universeManualProgress =
            null;

        if (
            !sessionPlan
            ||
            sessionIndex
            >=
            sessionPlan.items.length
        ) {
            finishPlan(
                preserveCurrentScreen
            );

            return;
        }

        if (
            !preserveCurrentScreen
        ) {
            showScreen(
                screens.session
            );
        }

        startCurrentSessionItem();
    }


    function chooseCompletionQuote() {
        completionQuote =
            COMPLETION_QUOTES[
                Math.floor(
                    Math.random()
                    *
                    COMPLETION_QUOTES.length
                )
            ];
    }


    function showPlanCompletion() {
        if (!completionQuote) {
            chooseCompletionQuote();
        }

        el.nietzscheQuote.textContent =
            `„${completionQuote.quote}“`;

        el.nietzscheSource.textContent =
            completionQuote.source;

        showScreen(
            screens.planComplete
        );
    }


    function finishPlan(
        preserveCurrentScreen = false
    ) {
        stopSessionInterval();

        sessionEndTime =
            null;

        sessionItemDurationMs =
            0;

        sessionPaused =
            false;

        sessionPausedRemainingMs =
            0;

        sessionCompletionPending =
            false;

        sessionCompleting =
            false;

        sessionPlanFinishedPending =
            true;

        universeManualProgress =
            1;

        chooseCompletionQuote();

        setSessionBackVisible(
            false
        );

        refreshSessionPauseUi();

        persistSessionRuntime();

        if (
            preserveCurrentScreen
        ) {
            renderMiniSession();

        } else {
            showPlanCompletion();
        }
    }


    function clearFinishedSession() {
        stopSessionInterval();

        sessionPlan =
            null;

        sessionIndex =
            0;

        sessionEndTime =
            null;

        sessionItemDurationMs =
            0;

        sessionPaused =
            false;

        sessionPausedRemainingMs =
            0;

        sessionCompletionPending =
            false;

        sessionCompleting =
            false;

        sessionPlanFinishedPending =
            false;

        sessionBackVisible =
            false;

        setSessionBackVisible(
            false
        );

        completionQuote =
            null;

        universeParticles =
            [];

        universeNodes =
            [];

        universeLastRendered =
            [];

        universeManualProgress =
            null;

        if (
            universeFrameHandle
            !==
            null
        ) {
            cancelAnimationFrame(
                universeFrameHandle
            );

            universeFrameHandle =
                null;
        }

        clearPersistedSessionRuntime();

        refreshSessionPauseUi();

        renderMiniSession();
    }


    el.completePlanButton.addEventListener(
        "click",
        () => {
            clearFinishedSession();

            showScreen(
                screens.plannerHub
            );
        }
    );


    function createObserverCenteredUniverse(
        selectedParticle = null
    ) {
        const particleCount =
            360
            +
            Math.floor(
                Math.random()
                *
                70
            );

        const goldenAngle =
            Math.PI
            *
            (
                3
                -
                Math.sqrt(5)
            );

        const particles = [];

        // Exact observer at the origin.
        particles.push({
            hx: 0,
            hy: 0,
            cx: 0,
            cy: 0,
            size:
                selectedParticle?.size
                ??
                1.45,
            alpha:
                selectedParticle?.alpha
                ??
                0.98
        });

        // Uniform target distribution on a disk.
        for (
            let i = 1;
            i < particleCount;
            i += 1
        ) {
            const normalizedIndex =
                (
                    i
                    -
                    0.5
                )
                /
                (
                    particleCount
                    -
                    1
                );

            const targetRadius =
                0.5
                *
                Math.sqrt(
                    normalizedIndex
                );

            const targetAngle =
                i
                *
                goldenAngle
                +
                Math.random()
                *
                0.022;

            const hx =
                targetRadius
                *
                Math.cos(
                    targetAngle
                );

            const hy =
                targetRadius
                *
                Math.sin(
                    targetAngle
                );

            particles.push({
                hx,
                hy,
                cx: 0,
                cy: 0,
                size:
                    0.55
                    +
                    Math.random()
                    *
                    1.15,
                alpha:
                    0.34
                    +
                    Math.random()
                    *
                    0.56
            });
        }

        // Isotropic density perturbations.
        // They alter local density, but never the circular horizon itself.
        const perturbationCount =
            10
            +
            Math.floor(
                Math.random()
                *
                6
            );

        const perturbations = [];

        for (
            let i = 0;
            i < perturbationCount;
            i += 1
        ) {
            const r =
                Math.sqrt(
                    Math.random()
                )
                *
                0.38;

            const angle =
                Math.random()
                *
                Math.PI
                *
                2;

            perturbations.push({
                x:
                    r
                    *
                    Math.cos(
                        angle
                    ),
                y:
                    r
                    *
                    Math.sin(
                        angle
                    ),
                strength:
                    0.018
                    +
                    Math.random()
                    *
                    0.03,
                sign:
                    Math.random()
                    <
                    0.8
                        ? 1
                        : -1
            });
        }

        particles.forEach(
            (
                particle,
                index
            ) => {
                if (
                    index === 0
                ) {
                    return;
                }

                let dxTotal =
                    0;

                let dyTotal =
                    0;

                perturbations.forEach(
                    perturbation => {
                        const dx =
                            perturbation.x
                            -
                            particle.hx;

                        const dy =
                            perturbation.y
                            -
                            particle.hy;

                        const d2 =
                            dx * dx
                            +
                            dy * dy
                            +
                            0.01;

                        const influence =
                            perturbation.sign
                            *
                            perturbation.strength
                            /
                            d2;

                        dxTotal +=
                            dx
                            *
                            influence
                            *
                            0.014;

                        dyTotal +=
                            dy
                            *
                            influence
                            *
                            0.014;
                    }
                );

                dxTotal +=
                    gaussian()
                    *
                    0.008;

                dyTotal +=
                    gaussian()
                    *
                    0.008;

                // Keep every perturbed state inside the same circular comoving horizon.
                const tentativeX =
                    particle.hx
                    +
                    dxTotal;

                const tentativeY =
                    particle.hy
                    +
                    dyTotal;

                const radius =
                    Math.hypot(
                        tentativeX,
                        tentativeY
                    );

                if (
                    radius
                    >
                    0.495
                ) {
                    const factor =
                        0.495
                        /
                        radius;

                    const boundedX =
                        tentativeX
                        *
                        factor;

                    const boundedY =
                        tentativeY
                        *
                        factor;

                    particle.cx =
                        boundedX
                        -
                        particle.hx;

                    particle.cy =
                        boundedY
                        -
                        particle.hy;

                } else {
                    particle.cx =
                        dxTotal;

                    particle.cy =
                        dyTotal;
                }
            }
        );

        // Add a deliberately well-populated outer annulus.
        // This is not a rigid ring; it simply prevents a visually ragged horizon.
        const annulusCount =
            72;

        for (
            let i = 0;
            i < annulusCount;
            i += 1
        ) {
            const angle =
                (
                    i
                    /
                    annulusCount
                )
                *
                Math.PI
                *
                2
                +
                Math.random()
                *
                0.035;

            const radius =
                0.475
                +
                Math.random()
                *
                0.022;

            particles.push({
                hx:
                    radius
                    *
                    Math.cos(
                        angle
                    ),
                hy:
                    radius
                    *
                    Math.sin(
                        angle
                    ),
                cx:
                    gaussian()
                    *
                    0.0025,
                cy:
                    gaussian()
                    *
                    0.0025,
                size:
                    0.48
                    +
                    Math.random()
                    *
                    0.7,
                alpha:
                    0.28
                    +
                    Math.random()
                    *
                    0.42
            });
        }

        return particles;
    }


    function recenterUniverseOn(
        selectedIndex
    ) {
        const selected =
            universeParticles[
                selectedIndex
            ];

        if (!selected) {
            return;
        }

        // A new observer means a new observer-centered comoving chart.
        // Newly visible regions beyond the previous circular horizon are generated.
        universeParticles =
            createObserverCenteredUniverse(
                selected
            );

        universeNodes =
            [];

        universeObserverIndex =
            0;

        universeObserverPulseUntil =
            performance.now()
            +
            900;

        universeLastRendered =
            [];

        drawUniverse(
            performance.now()
        );
    }


    el.universeCanvas.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            if (
                !sessionPlan
                ||
                sessionPlanFinishedPending
                ||
                universeLastRendered.length
                ===
                0
            ) {
                return;
            }

            const rect =
                el.universeCanvas.getBoundingClientRect();

            const x =
                event.clientX
                -
                rect.left;

            const y =
                event.clientY
                -
                rect.top;

            let best =
                null;

            let bestDistance =
                Infinity;

            universeLastRendered.forEach(
                rendered => {
                    if (
                        !rendered
                        ||
                        !rendered.visible
                    ) {
                        return;
                    }

                    const distance =
                        Math.hypot(
                            rendered.x - x,
                            rendered.y - y
                        );

                    if (
                        distance
                        <
                        bestDistance
                    ) {
                        bestDistance =
                            distance;

                        best =
                            rendered;
                    }
                }
            );

            if (
                best
                &&
                bestDistance
                <=
                24
            ) {
                recenterUniverseOn(
                    best.index
                );

                return;
            }

            setSessionBackVisible(
                true
            );
        }
    );


    el.sessionCard.addEventListener(
        "click",
        event => {
            if (
                event.target
                ===
                el.universeCanvas
                ||
                event.target.closest(
                    "button"
                )
            ) {
                return;
            }

            if (
                !sessionPlan
                ||
                sessionPlanFinishedPending
            ) {
                return;
            }

            if (
                sessionBackVisible
            ) {
                setSessionBackVisible(
                    false
                );
            }
        }
    );


    el.sessionMenuButton.addEventListener(
        "click",
        () => {
            persistSessionRuntime();

            showScreen(
                screens.home
            );
        }
    );


    el.sessionPauseButton.addEventListener(
        "click",
        pauseCurrentSession
    );


    el.sessionEndButton.addEventListener(
        "click",
        endCurrentUnitEarly
    );


    el.miniSessionButton.addEventListener(
        "click",
        () => {
            if (
                sessionPlanFinishedPending
            ) {
                showPlanCompletion();
                return;
            }

            if (
                sessionCompletionPending
            ) {
                openSessionReview();
                return;
            }

            showScreen(
                screens.session
            );

            refreshSessionPauseUi();

            updateSessionTimer();

            if (
                !sessionPaused
            ) {
                startSessionTicker();
                ensureUniverseAnimation();
            }
        }
    );


    window.addEventListener(
        "resize",
        () => {
            if (
                sessionPlan
                &&
                activeScreen()
                ===
                screens.session
            ) {
                drawUniverse(
                    performance.now()
                );
            }
        }
    );



    // ==================================================
    // SCHACH
    // Regeln: chess.js 1.4.0
    // KI + Analyse: Stockfish 18 lite single-threaded
    // ==================================================

    const CHESS_PIECE_IMAGES = {
        w: {
            k: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_klt45.svg",
            q: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_qlt45.svg",
            r: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_rlt45.svg",
            b: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_blt45.svg",
            n: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_nlt45.svg",
            p: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_plt45.svg"
        },
        b: {
            k: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_kdt45.svg",
            q: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_qdt45.svg",
            r: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_rdt45.svg",
            b: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_bdt45.svg",
            n: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_ndt45.svg",
            p: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chess_pdt45.svg"
        }
    };


    function preloadChessPieces() {
        Object.values(
            CHESS_PIECE_IMAGES
        ).forEach(
            colorPieces => {
                Object.values(
                    colorPieces
                ).forEach(
                    source => {
                        const image =
                            new Image();

                        image.src =
                            source;
                    }
                );
            }
        );
    }


    function loadStoredChessSettings() {
        try {
            const raw =
                localStorage.getItem(
                    CHESS_STORAGE_KEY
                );

            if (
                !raw
            ) {
                return;
            }

            const parsed =
                JSON.parse(
                    raw
                );

            if (
                Number.isFinite(
                    Number(
                        parsed.elo
                    )
                )
            ) {
                chessElo =
                    Math.max(
                        100,
                        Math.min(
                            2500,
                            Math.round(
                                Number(
                                    parsed.elo
                                )
                                /
                                50
                            )
                            *
                            50
                        )
                    );
            }

            if (
                parsed.color
                ===
                "w"
                ||
                parsed.color
                ===
                "b"
            ) {
                chessHumanColor =
                    parsed.color;
            }

            if (
                typeof parsed.lastPgn
                ===
                "string"
            ) {
                chessFinalPgn =
                    parsed.lastPgn;
            }
        } catch (
            error
        ) {
            // Defaults remain valid.
        }
    }


    function saveChessSettings() {
        try {
            localStorage.setItem(
                CHESS_STORAGE_KEY,
                JSON.stringify({
                    elo:
                        chessElo,
                    color:
                        chessHumanColor,
                    lastPgn:
                        chessFinalPgn
                })
            );
        } catch (
            error
        ) {
            // Chess must remain playable if storage is unavailable.
        }
    }


    async function loadChessLibrary() {
        if (
            ChessConstructor
        ) {
            return ChessConstructor;
        }

        if (
            chessLibraryPromise
        ) {
            return chessLibraryPromise;
        }

        chessLibraryPromise =
            import(
                "https://cdn.jsdelivr.net/npm/chess.js@1.4.0/dist/esm/chess.js"
            )
            .then(
                module => {
                    ChessConstructor =
                        module.Chess;

                    return ChessConstructor;
                }
            )
            .catch(
                error => {
                    chessLibraryPromise =
                        null;

                    throw error;
                }
            );

        return chessLibraryPromise;
    }


    function initChessEngine() {
        if (
            chessEngine
            &&
            !chessEngineFailed
        ) {
            return;
        }

        /*
           v31 uses a corrected worker hash and a fresh network URL.
        */
        chessEngineFailed =
            false;

        chessEngineErrorMessage =
            "";

        if (
            chessEngine
        ) {
            try {
                chessEngine.terminate();
            } catch (
                error
            ) {
                // Ignore stale worker termination failures.
            }

            chessEngine =
                null;
        }

        try {
            const stockfishWasmUrl =
                "https://unpkg.com/stockfish@18.0.8/bin/stockfish-18-lite-single.wasm";

            const workerUrl =
                "./stockfish-worker.js?v=31"
                +
                "#"
                +
                encodeURIComponent(
                    stockfishWasmUrl
                );

            chessEngine =
                new Worker(
                    workerUrl
                );

            chessEngine.addEventListener(
                "message",
                event => {
                    handleChessEngineLine(
                        String(
                            event.data
                            ??
                            ""
                        )
                    );
                }
            );

            chessEngine.addEventListener(
                "error",
                event => {
                    chessEngineFailed =
                        true;

                    chessEngineReady =
                        false;

                    chessEngineThinking =
                        false;

                    chessEngineErrorMessage =
                        String(
                            event
                            &&
                            event.message
                            ||
                            "Stockfish-Worker konnte nicht geladen werden."
                        );

                    console.error(
                        "Stockfish worker error:",
                        event
                    );

                    chessEngineReadyWaiters
                        .splice(
                            0
                        )
                        .forEach(
                            waiter =>
                                waiter(
                                    false
                                )
                        );

                    if (
                        chessEngineTask
                    ) {
                        chessEngineTask.resolve(
                            null
                        );

                        chessEngineTask =
                            null;
                    }
                }
            );

            chessEngine.postMessage(
                "uci"
            );

        } catch (
            error
        ) {
            chessEngineFailed =
                true;
        }
    }


    function handleChessEngineLine(
        line
    ) {
        if (
            line.includes(
                "uciok"
            )
        ) {
            console.info(
                "Stockfish UCI initialized."
            );

            chessEngine.postMessage(
                "isready"
            );

            return;
        }

        if (
            line.includes(
                "readyok"
            )
        ) {
            console.info(
                "Stockfish ready."
            );

            chessEngineReady =
                true;

            chessEngineReadyWaiters
                .splice(
                    0
                )
                .forEach(
                    waiter =>
                        waiter(
                            true
                        )
                );

            return;
        }

        if (
            chessEngineTask
            &&
            line.startsWith(
                "info "
            )
        ) {
            const score =
                parseStockfishScore(
                    line,
                    chessEngineTask.fen
                );

            if (
                score
            ) {
                chessEngineTask.latestScore =
                    score;
            }

            return;
        }

        if (
            chessEngineTask
            &&
            line.startsWith(
                "bestmove "
            )
        ) {
            const task =
                chessEngineTask;

            chessEngineTask =
                null;

            const match =
                line.match(
                    /^bestmove\s+(\S+)/
                );

            task.resolve({
                bestmove:
                    match
                        ? match[
                            1
                        ]
                        : null,
                score:
                    task.latestScore
                    ??
                    null
            });
        }
    }


    function waitForChessEngine(
        timeout = 30000
    ) {
        initChessEngine();

        if (
            chessEngineReady
        ) {
            return Promise.resolve(
                true
            );
        }

        if (
            chessEngineFailed
        ) {
            return Promise.resolve(
                false
            );
        }

        return new Promise(
            resolve => {
                let settled =
                    false;

                const finish =
                    value => {
                        if (
                            settled
                        ) {
                            return;
                        }

                        settled =
                            true;

                        resolve(
                            value
                        );
                    };

                chessEngineReadyWaiters.push(
                    finish
                );

                window.setTimeout(
                    () => {
                        finish(
                            chessEngineReady
                        );
                    },
                    timeout
                );
            }
        );
    }


    async function runChessEngineTask({
        fen,
        commands,
        timeout = 5000
    }) {
        const ready =
            await waitForChessEngine(
                timeout
            );

        if (
            !ready
            ||
            !chessEngine
        ) {
            return null;
        }

        if (
            chessEngineTask
        ) {
            const previous =
                chessEngineTask;

            chessEngineTask =
                null;

            previous.resolve(
                null
            );

            chessEngine.postMessage(
                "stop"
            );

            await new Promise(
                resolve =>
                    window.setTimeout(
                        resolve,
                        35
                    )
            );
        }

        return new Promise(
            resolve => {
                let settled =
                    false;

                const finish =
                    result => {
                        if (
                            settled
                        ) {
                            return;
                        }

                        settled =
                            true;

                        resolve(
                            result
                        );
                    };

                chessEngineTask = {
                    fen,
                    latestScore:
                        null,
                    resolve:
                        finish
                };

                chessEngine.postMessage(
                    `position fen ${fen}`
                );

                commands.forEach(
                    command => {
                        chessEngine.postMessage(
                            command
                        );
                    }
                );

                window.setTimeout(
                    () => {
                        if (
                            chessEngineTask
                            &&
                            chessEngineTask.resolve
                            ===
                            finish
                        ) {
                            chessEngine.postMessage(
                                "stop"
                            );

                            chessEngineTask =
                                null;

                            finish(
                                null
                            );
                        }
                    },
                    timeout
                );
            }
        );
    }


    function parseStockfishScore(
        line,
        fen
    ) {
        const match =
            line.match(
                /\bscore\s+(cp|mate)\s+(-?\d+)/
            );

        if (
            !match
        ) {
            return null;
        }

        const type =
            match[
                1
            ];

        const raw =
            Number(
                match[
                    2
                ]
            );

        const turn =
            String(
                fen
            )
            .split(
                /\s+/
            )[
                1
            ];

        const whiteSign =
            turn
            ===
            "w"
                ? 1
                : -1;

        if (
            type
            ===
            "mate"
        ) {
            const whiteMate =
                raw
                *
                whiteSign;

            return {
                type:
                    "mate",
                value:
                    whiteMate,
                pawns:
                    whiteMate
                    >
                    0
                        ? 100
                        : -100
            };
        }

        const whiteCp =
            raw
            *
            whiteSign;

        return {
            type:
                "cp",
            value:
                whiteCp,
            pawns:
                whiteCp
                /
                100
        };
    }


    function squareFromRowColumn(
        row,
        column
    ) {
        return `${
            "abcdefgh"[
                column
            ]
        }${
            8
            -
            row
        }`;
    }


    function renderChessBoardInto(
        target,
        game,
        {
            selectedSquare = null,
            legalMoves = [],
            lastMove = null,
            clickHandler = null,
            orientation = "w"
        } = {}
    ) {
        target.innerHTML =
            "";

        const board =
            game.board();

        const squares =
            [];

        board.forEach(
            (
                row,
                rowIndex
            ) => {
                row.forEach(
                    (
                        piece,
                        columnIndex
                    ) => {
                        squares.push({
                            square:
                                squareFromRowColumn(
                                    rowIndex,
                                    columnIndex
                                ),
                            piece
                        });
                    }
                );
            }
        );

        if (
            orientation
            ===
            "b"
        ) {
            squares.reverse();
        }

        const legalTargets =
            new Map();

        legalMoves.forEach(
            move => {
                if (
                    !legalTargets.has(
                        move.to
                    )
                ) {
                    legalTargets.set(
                        move.to,
                        []
                    );
                }

                legalTargets
                    .get(
                        move.to
                    )
                    .push(
                        move
                    );
            }
        );

        squares.forEach(
            entry => {
                const square =
                    entry.square;

                const piece =
                    entry.piece;

                const fileIndex =
                    "abcdefgh".indexOf(
                        square[
                            0
                        ]
                    );

                const rank =
                    Number(
                        square[
                            1
                        ]
                    );

                /*
                   a8 is light and a1 is dark, exactly as in the
                   supplied Chess board blank.svg reference.
                */
                const light =
                    (
                        fileIndex
                        +
                        rank
                    )
                    %
                    2
                    ===
                    0;

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "chess-square";

                button.dataset.square =
                    square;

                button.classList.add(
                    light
                        ? "chess-square-light"
                        : "chess-square-dark"
                );

                button.style.setProperty(
                    "background-color",
                    light
                        ? "#FFCE9E"
                        : "#D18B47",
                    "important"
                );

                if (
                    selectedSquare
                    ===
                    square
                ) {
                    button.classList.add(
                        "selected"
                    );
                }

                if (
                    lastMove
                    &&
                    (
                        lastMove.from
                        ===
                        square
                        ||
                        lastMove.to
                        ===
                        square
                    )
                ) {
                    button.classList.add(
                        "last-move"
                    );
                }

                const targets =
                    legalTargets.get(
                        square
                    )
                    ??
                    [];

                if (
                    targets.length
                    >
                    0
                ) {
                    button.classList.add(
                        piece
                            ? "legal-capture"
                            : "legal-target"
                    );
                }

                if (
                    piece
                ) {
                    const image =
                        document.createElement(
                            "img"
                        );

                    image.className =
                        "chess-piece-image";

                    image.src =
                        CHESS_PIECE_IMAGES[
                            piece.color
                        ][
                            piece.type
                        ];

                    image.alt =
                        "";

                    image.draggable =
                        false;

                    button.appendChild(
                        image
                    );
                }

                if (
                    clickHandler
                ) {
                    button.addEventListener(
                        "click",
                        () => {
                            clickHandler(
                                square
                            );
                        }
                    );
                }

                target.appendChild(
                    button
                );
            }
        );
    }

    function movesFromSquare(
        game,
        square
    ) {
        try {
            return game.moves({
                square,
                verbose:
                    true
            });
        } catch (
            error
        ) {
            return [];
        }
    }


    // ==================================================
    // SCHACH — SETUP
    // ==================================================

    async function openChessSetup() {
        loadStoredChessSettings();

        el.chessSetupEloSlider.value =
            String(
                chessElo
            );

        el.chessSetupEloValue.textContent =
            `${chessElo} Elo`;

        updateChessColorChoice();

        preloadChessPieces();

        showScreen(
            screens.chessSetup
        );

        try {
            await loadChessLibrary();

            initChessEngine();

            /*
               Start loading the ~7 MB WASM engine while the user is still
               choosing Elo and color, so the first engine move is fast.
            */
            waitForChessEngine(
                30000
            );
        } catch (
            error
        ) {
            // The game screen will remain unavailable until the library loads.
        }
    }


    el.openChessButton.addEventListener(
        "click",
        openChessSetup
    );


    el.chessSetupEloSlider.addEventListener(
        "input",
        () => {
            chessElo =
                Number(
                    el.chessSetupEloSlider.value
                );

            el.chessSetupEloValue.textContent =
                `${chessElo} Elo`;

            saveChessSettings();
        }
    );


    function updateChessColorChoice() {
        const white =
            chessHumanColor
            ===
            "w";

        el.chooseChessWhite.classList.toggle(
            "selected",
            white
        );

        el.chooseChessBlack.classList.toggle(
            "selected",
            !white
        );

        el.chooseChessWhite.setAttribute(
            "aria-pressed",
            white
                ? "true"
                : "false"
        );

        el.chooseChessBlack.setAttribute(
            "aria-pressed",
            white
                ? "false"
                : "true"
        );
    }


    el.chooseChessWhite.addEventListener(
        "click",
        () => {
            chessHumanColor =
                "w";

            updateChessColorChoice();

            saveChessSettings();
        }
    );


    el.chooseChessBlack.addEventListener(
        "click",
        () => {
            chessHumanColor =
                "b";

            updateChessColorChoice();

            saveChessSettings();
        }
    );


    el.startChessGameButton.addEventListener(
        "click",
        async () => {
            try {
                const Chess =
                    await loadChessLibrary();

                chessGame =
                    new Chess();

                chessFinalPgn =
                    "";

                chessFinalResult =
                    "";

                chessSelectedSquare =
                    null;

                chessLegalMoves =
                    [];

                chessLastMove =
                    null;

                chessPendingPromotion =
                    null;

                chessEngineThinking =
                    false;

                chessEngineRequestToken +=
                    1;

                /*
                   Enter the game immediately. The first Stockfish WASM load
                   can take noticeably longer on Safari/Home Screen apps and
                   must never prevent the board from opening.
                */
                showScreen(
                    screens.chessPlay
                );

                renderChessPlayBoard();

                initChessEngine();

                const prepareEngine =
                    async () => {
                        const ready =
                            await waitForChessEngine(
                                30000
                            );

                        if (
                            !ready
                        ) {
                            const detail =
                                chessEngineErrorMessage
                                ||
                                "Die Stockfish-Engine hat innerhalb von 30 Sekunden nicht geantwortet.";

                            console.error(
                                detail
                            );

                            return false;
                        }

                        chessEngine.postMessage(
                            "ucinewgame"
                        );

                        /*
                           16 MB is enough for this mobile/single-thread build
                           and avoids unnecessary setup latency.
                        */
                        chessEngine.postMessage(
                            "setoption name Hash value 16"
                        );

                        return true;
                    };

                if (
                    chessHumanColor
                    ===
                    "b"
                ) {
                    prepareEngine().then(
                        ready => {
                            if (
                                ready
                                &&
                                chessGame
                                &&
                                !chessGame.isGameOver()
                                &&
                                chessGame.turn()
                                ===
                                "w"
                            ) {
                                playChessEngineTurn();
                            } else if (
                                !ready
                            ) {
                                window.alert(
                                    "Stockfish konnte nicht geladen werden. Bitte lade die Seite einmal vollständig neu; deine Internetverbindung ist dabei nicht zwingend das Problem."
                                );

                                showScreen(
                                    screens.chessSetup
                                );
                            }
                        }
                    );
                } else {
                    /*
                       White can make the first move while the engine finishes
                       loading. playChessEngineTurn() will wait if necessary.
                    */
                    prepareEngine();
                }

            } catch (
                error
            ) {
                console.error(
                    "Chess startup error:",
                    error
                );

                window.alert(
                    "Die Schachregeln konnten nicht geladen werden. Bitte lade die Seite einmal neu. Wenn der Fehler bleibt, sag mir bitte, welchen Browser du verwendest."
                );
            }
        }
    );


    // ==================================================
    // SCHACH — PARTIE
    // ==================================================

    function renderChessPlayBoard() {
        if (
            !chessGame
        ) {
            return;
        }

        renderChessBoardInto(
            el.chessPlayBoard,
            chessGame,
            {
                selectedSquare:
                    chessSelectedSquare,
                legalMoves:
                    chessLegalMoves,
                lastMove:
                    chessLastMove,
                clickHandler:
                    handleChessPlaySquare,
                orientation:
                    chessHumanColor
            }
        );
    }


    function clearChessPlaySelection() {
        chessSelectedSquare =
            null;

        chessLegalMoves =
            [];
    }


    function handleChessPlaySquare(
        square
    ) {
        if (
            !chessGame
            ||
            chessEngineThinking
            ||
            chessGame.isGameOver()
            ||
            chessGame.turn()
            !==
            chessHumanColor
        ) {
            return;
        }

        const piece =
            chessGame.get(
                square
            );

        if (
            !chessSelectedSquare
        ) {
            if (
                piece
                &&
                piece.color
                ===
                chessHumanColor
            ) {
                chessSelectedSquare =
                    square;

                chessLegalMoves =
                    movesFromSquare(
                        chessGame,
                        square
                    );

                renderChessPlayBoard();
            }

            return;
        }

        if (
            piece
            &&
            piece.color
            ===
            chessHumanColor
        ) {
            chessSelectedSquare =
                square;

            chessLegalMoves =
                movesFromSquare(
                    chessGame,
                    square
                );

            renderChessPlayBoard();

            return;
        }

        const candidates =
            chessLegalMoves.filter(
                move =>
                    move.to
                    ===
                    square
            );

        if (
            candidates.length
            ===
            0
        ) {
            clearChessPlaySelection();

            renderChessPlayBoard();

            return;
        }

        const promotions =
            candidates.filter(
                move =>
                    move.promotion
            );

        if (
            promotions.length
            >
            0
        ) {
            showPlayPromotion(
                chessSelectedSquare,
                square,
                promotions
            );

            return;
        }

        makeHumanPlayMove({
            from:
                chessSelectedSquare,
            to:
                square
        });
    }


    function showPlayPromotion(
        from,
        to,
        moves
    ) {
        chessPendingPromotion = {
            from,
            to
        };

        fillPromotionChoices(
            el.chessPlayPromotionChoices,
            moves,
            chessHumanColor,
            promotion => {
                el.chessPlayPromotionPanel.classList.add(
                    "hidden"
                );

                const pending =
                    chessPendingPromotion;

                chessPendingPromotion =
                    null;

                makeHumanPlayMove({
                    from:
                        pending.from,
                    to:
                        pending.to,
                    promotion
                });
            }
        );

        el.chessPlayPromotionPanel.classList.remove(
            "hidden"
        );
    }


    function fillPromotionChoices(
        container,
        moves,
        color,
        choose
    ) {
        const available =
            new Set(
                moves.map(
                    move =>
                        move.promotion
                )
            );

        container.innerHTML =
            "";

        [
            "q",
            "r",
            "b",
            "n"
        ].forEach(
            type => {
                if (
                    !available.has(
                        type
                    )
                ) {
                    return;
                }

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "chess-promotion-choice";

                button.textContent =
                    CHESS_PIECES[
                        color
                    ][
                        type
                    ];

                button.addEventListener(
                    "click",
                    () => {
                        choose(
                            type
                        );
                    }
                );

                container.appendChild(
                    button
                );
            }
        );
    }


    function makeHumanPlayMove(
        move
    ) {
        try {
            const made =
                chessGame.move(
                    move
                );

            if (
                !made
            ) {
                return;
            }

            chessLastMove = {
                from:
                    made.from,
                to:
                    made.to
            };

            clearChessPlaySelection();

            renderChessPlayBoard();

            if (
                chessGame.isGameOver()
            ) {
                finishChessGame();

                return;
            }

            playChessEngineTurn();

        } catch (
            error
        ) {
            clearChessPlaySelection();

            renderChessPlayBoard();
        }
    }


    function chessPieceValue(
        type
    ) {
        return {
            p: 1,
            n: 3.2,
            b: 3.3,
            r: 5,
            q: 9.2,
            k: 0
        }[
            type
        ]
        ??
        0;
    }


    function randomWeakChessMove() {
        const moves =
            chessGame.moves({
                verbose:
                    true
            });

        if (
            moves.length
            ===
            0
        ) {
            return null;
        }

        const pool =
            [];

        moves.forEach(
            move => {
                let weight =
                    5;

                if (
                    move.captured
                ) {
                    weight +=
                        Math.round(
                            chessPieceValue(
                                move.captured
                            )
                            *
                            3
                        );
                }

                if (
                    move.promotion
                ) {
                    weight +=
                        10;
                }

                if (
                    move.san
                    &&
                    move.san.includes(
                        "+"
                    )
                ) {
                    weight +=
                        3;
                }

                if (
                    move.san
                    &&
                    move.san.includes(
                        "#"
                    )
                ) {
                    weight +=
                        50;
                }

                for (
                    let index = 0;
                    index
                    <
                    weight;
                    index += 1
                ) {
                    pool.push(
                        move
                    );
                }
            }
        );

        return pool[
            Math.floor(
                Math.random()
                *
                pool.length
            )
        ];
    }


    function heuristicEmergencyChessMove() {
        const moves =
            chessGame.moves({
                verbose:
                    true
            });

        if (
            moves.length
            ===
            0
        ) {
            return null;
        }

        let best =
            null;

        let bestScore =
            -Infinity;

        moves.forEach(
            move => {
                let score =
                    Math.random()
                    *
                    0.08;

                if (
                    move.captured
                ) {
                    score +=
                        chessPieceValue(
                            move.captured
                        )
                        *
                        2.2;
                }

                if (
                    move.promotion
                ) {
                    score +=
                        chessPieceValue(
                            move.promotion
                        )
                        *
                        1.7;
                }

                if (
                    move.san
                    &&
                    move.san.includes(
                        "+"
                    )
                ) {
                    score +=
                        0.55;
                }

                if (
                    move.san
                    &&
                    move.san.includes(
                        "#"
                    )
                ) {
                    score +=
                        100;
                }

                /*
                   Prefer central development a little in the emergency path.
                   This is only used if Stockfish itself is unavailable.
                */
                if (
                    ["d4", "d5", "e4", "e5", "c4", "c5", "f4", "f5"].includes(
                        move.to
                    )
                ) {
                    score +=
                        0.2;
                }

                if (
                    score
                    >
                    bestScore
                ) {
                    bestScore =
                        score;

                    best =
                        move;
                }
            }
        );

        return best;
    }


    function weakMoveProbability() {
        if (
            chessElo
            >=
            1320
        ) {
            return 0;
        }

        const normalized =
            (
                chessElo
                -
                100
            )
            /
            1220;

        /*
           Below Stockfish's native UCI_Elo floor we progressively inject
           weak moves. Close to 1320 this becomes rare; at 100 it is common.
        */
        return Math.max(
            0.03,
            Math.min(
                0.92,
                0.92
                *
                Math.pow(
                    1
                    -
                    normalized,
                    1.35
                )
            )
        );
    }


    async function playChessEngineTurn() {
        if (
            !chessGame
            ||
            chessGame.isGameOver()
        ) {
            return;
        }

        const engineColor =
            chessHumanColor
            ===
            "w"
                ? "b"
                : "w";

        if (
            chessGame.turn()
            !==
            engineColor
        ) {
            return;
        }

        chessEngineThinking =
            true;

        const request =
            ++chessEngineRequestToken;

        let moveData =
            null;

        /*
           Stockfish's native UCI_Elo range begins at 1320. Below that,
           deliberate legal weak moves are injected progressively.
        */
        if (
            chessElo
            <
            1320
            &&
            Math.random()
            <
            weakMoveProbability()
        ) {
            await new Promise(
                resolve =>
                    window.setTimeout(
                        resolve,
                        70
                        +
                        Math.random()
                        *
                        90
                    )
            );

            if (
                request
                !==
                chessEngineRequestToken
            ) {
                return;
            }

            moveData =
                randomWeakChessMove();

        } else {
            const targetElo =
                Math.max(
                    1320,
                    Math.min(
                        2500,
                        chessElo
                    )
                );

            /*
               Strength is controlled by UCI_Elo. The search itself is kept
               short enough to feel immediate, but long enough for the lite
               engine to remain very strong at the top end.
            */
            const moveTime =
                Math.round(
                    180
                    +
                    (
                        targetElo
                        -
                        1320
                    )
                    /
                    1180
                    *
                    300
                );

            let result =
                await runChessEngineTask({
                    fen:
                        chessGame.fen(),
                    commands: [
                        "setoption name UCI_LimitStrength value true",
                        `setoption name UCI_Elo value ${targetElo}`,
                        `go movetime ${moveTime}`
                    ],
                    timeout:
                        8000
                });

            if (
                request
                !==
                chessEngineRequestToken
            ) {
                return;
            }

            /*
               One real-engine retry is preferable to silently replacing a
               2500-Elo opponent with a random move.
            */
            if (
                !result
                ||
                !result.bestmove
                ||
                !/^[a-h][1-8][a-h][1-8][qrbn]?$/.test(
                    result.bestmove
                )
            ) {
                result =
                    await runChessEngineTask({
                        fen:
                            chessGame.fen(),
                        commands: [
                            "setoption name UCI_LimitStrength value true",
                            `setoption name UCI_Elo value ${targetElo}`,
                            "go movetime 700"
                        ],
                        timeout:
                            4200
                    });
            }

            if (
                request
                !==
                chessEngineRequestToken
            ) {
                return;
            }

            if (
                result
                &&
                result.bestmove
                &&
                /^[a-h][1-8][a-h][1-8][qrbn]?$/.test(
                    result.bestmove
                )
            ) {
                moveData = {
                    from:
                        result.bestmove.slice(
                            0,
                            2
                        ),
                    to:
                        result.bestmove.slice(
                            2,
                            4
                        ),
                    promotion:
                        result.bestmove[
                            4
                        ]
                        ??
                        undefined
                };
            } else if (
                chessElo
                <
                1320
            ) {
                moveData =
                    randomWeakChessMove();
            } else {
                chessEngineThinking =
                    false;

                window.alert(
                    "Stockfish konnte keinen Zug berechnen. Bitte prüfe kurz die Internetverbindung und starte die Partie erneut."
                );

                showScreen(
                    screens.chessSetup
                );

                return;
            }
        }

        if (
            !moveData
        ) {
            chessEngineThinking =
                false;

            if (
                chessGame.isGameOver()
            ) {
                finishChessGame();
            }

            return;
        }

        try {
            const made =
                chessGame.move({
                    from:
                        moveData.from,
                    to:
                        moveData.to,
                    promotion:
                        moveData.promotion
                        ??
                        "q"
                });

            chessLastMove = {
                from:
                    made.from,
                to:
                    made.to
            };

        } catch (
            error
        ) {
            chessEngineThinking =
                false;

            if (
                chessElo
                >=
                1320
            ) {
                window.alert(
                    "Die Engine-Antwort war ungültig. Bitte starte die Partie erneut."
                );

                showScreen(
                    screens.chessSetup
                );

                return;
            }

            const fallback =
                randomWeakChessMove();

            if (
                fallback
            ) {
                const made =
                    chessGame.move({
                        from:
                            fallback.from,
                        to:
                            fallback.to,
                        promotion:
                            fallback.promotion
                            ??
                            "q"
                    });

                chessLastMove = {
                    from:
                        made.from,
                    to:
                        made.to
                };
            }
        }

        chessEngineThinking =
            false;

        renderChessPlayBoard();

        if (
            chessGame.isGameOver()
        ) {
            finishChessGame();
        }
    }

    function chessGameResultText(
        game
    ) {
        if (
            game.isCheckmate()
        ) {
            return game.turn()
            ===
            "w"
                ? "Schachmatt · Schwarz gewinnt"
                : "Schachmatt · Weiß gewinnt";
        }

        if (
            game.isStalemate()
        ) {
            return "Remis · Patt";
        }

        if (
            typeof game.isThreefoldRepetition
            ===
            "function"
            &&
            game.isThreefoldRepetition()
        ) {
            return "Remis · Stellungswiederholung";
        }

        if (
            typeof game.isInsufficientMaterial
            ===
            "function"
            &&
            game.isInsufficientMaterial()
        ) {
            return "Remis · Unzureichendes Material";
        }

        if (
            typeof game.isDrawByFiftyMoves
            ===
            "function"
            &&
            game.isDrawByFiftyMoves()
        ) {
            return "Remis · 50-Züge-Regel";
        }

        return "Remis";
    }


    function finishChessGame() {
        if (
            !chessGame
        ) {
            return;
        }

        chessEngineThinking =
            false;

        chessEngineRequestToken +=
            1;

        chessFinalPgn =
            chessGame.pgn();

        chessFinalResult =
            chessGameResultText(
                chessGame
            );

        saveChessSettings();

        window.setTimeout(
            () => {
                prepareChessAnalysis();

                showScreen(
                    screens.chessAnalysis
                );

                renderChessAnalysis();

                updateChessAnalysisEvaluation();
            },
            520
        );
    }


    el.backFromChessPlay.addEventListener(
        "click",
        () => {
            chessEngineRequestToken +=
                1;

            chessEngineThinking =
                false;

            el.chessPlayPromotionPanel.classList.add(
                "hidden"
            );

            showScreen(
                screens.textsHub
            );
        }
    );


    // ==================================================
    // SCHACH — ANALYSE
    // ==================================================

    function prepareChessAnalysis() {
        chessAnalysisFens =
            [];

        chessAnalysisSans =
            [];

        chessAnalysisEvalCache =
            new Map();

        chessAnalysisIndex =
            0;

        chessAnalysisVariation =
            false;

        chessAnalysisSelectedSquare =
            null;

        chessAnalysisLegalMoves =
            [];

        chessAnalysisLastMove =
            null;

        const replay =
            new ChessConstructor();

        chessAnalysisFens.push(
            replay.fen()
        );

        const sans =
            chessGame
                ? chessGame.history()
                : [];

        sans.forEach(
            san => {
                replay.move(
                    san
                );

                chessAnalysisSans.push(
                    san
                );

                chessAnalysisFens.push(
                    replay.fen()
                );
            }
        );

        loadChessAnalysisPosition(
            0
        );
    }


    function loadChessAnalysisPosition(
        index
    ) {
        if (
            !ChessConstructor
            ||
            chessAnalysisFens.length
            ===
            0
        ) {
            return;
        }

        chessAnalysisIndex =
            Math.max(
                0,
                Math.min(
                    chessAnalysisFens.length
                    -
                    1,
                    index
                )
            );

        chessAnalysisGame =
            new ChessConstructor(
                chessAnalysisFens[
                    chessAnalysisIndex
                ]
            );

        chessAnalysisSelectedSquare =
            null;

        chessAnalysisLegalMoves =
            [];

        chessAnalysisVariation =
            false;

        chessAnalysisBaseFen =
            chessAnalysisGame.fen();

        chessAnalysisBaseEval =
            null;

        el.chessAnalysisReturnLine.classList.add(
            "hidden"
        );

        if (
            chessAnalysisIndex
            >
            0
        ) {
            const before =
                new ChessConstructor(
                    chessAnalysisFens[
                        chessAnalysisIndex
                        -
                        1
                    ]
                );

            const verbose =
                before.moves({
                    verbose:
                        true
                });

            const san =
                chessAnalysisSans[
                    chessAnalysisIndex
                    -
                    1
                ];

            const move =
                verbose.find(
                    candidate =>
                        candidate.san
                        ===
                        san
                );

            chessAnalysisLastMove =
                move
                    ? {
                        from:
                            move.from,
                        to:
                            move.to
                    }
                    : null;
        } else {
            chessAnalysisLastMove =
                null;
        }
    }


    function renderChessAnalysis() {
        if (
            !chessAnalysisGame
        ) {
            return;
        }

        renderChessBoardInto(
            el.chessAnalysisBoard,
            chessAnalysisGame,
            {
                selectedSquare:
                    chessAnalysisSelectedSquare,
                legalMoves:
                    chessAnalysisLegalMoves,
                lastMove:
                    chessAnalysisLastMove,
                clickHandler:
                    handleChessAnalysisSquare,
                orientation:
                    chessHumanColor
            }
        );

        el.chessAnalysisResult.textContent =
            chessFinalResult;

        const total =
            Math.max(
                0,
                chessAnalysisFens.length
                -
                1
            );

        el.chessAnalysisCounter.textContent =
            `${chessAnalysisIndex} / ${total}`;

        if (
            chessAnalysisVariation
        ) {
            el.chessAnalysisMoveLabel.textContent =
                "Variante";

            el.chessAnalysisReturnLine.classList.remove(
                "hidden"
            );
        } else if (
            chessAnalysisIndex
            ===
            0
        ) {
            el.chessAnalysisMoveLabel.textContent =
                "Ausgangsstellung";
        } else {
            const ply =
                chessAnalysisIndex;

            const moveNumber =
                Math.ceil(
                    ply
                    /
                    2
                );

            const side =
                ply
                %
                2
                ===
                1
                    ? ""
                    : " …";

            el.chessAnalysisMoveLabel.textContent =
                `${moveNumber}.${side} ${
                    chessAnalysisSans[
                        ply
                        -
                        1
                    ]
                }`;
        }

        el.chessAnalysisPrev.disabled =
            chessAnalysisVariation
            ||
            chessAnalysisIndex
            <=
            0;

        el.chessAnalysisNext.disabled =
            chessAnalysisVariation
            ||
            chessAnalysisIndex
            >=
            total;
    }


    function handleChessAnalysisSquare(
        square
    ) {
        if (
            !chessAnalysisGame
            ||
            chessAnalysisGame.isGameOver()
        ) {
            return;
        }

        const piece =
            chessAnalysisGame.get(
                square
            );

        const turn =
            chessAnalysisGame.turn();

        if (
            !chessAnalysisSelectedSquare
        ) {
            if (
                piece
                &&
                piece.color
                ===
                turn
            ) {
                chessAnalysisSelectedSquare =
                    square;

                chessAnalysisLegalMoves =
                    movesFromSquare(
                        chessAnalysisGame,
                        square
                    );

                renderChessAnalysis();
            }

            return;
        }

        if (
            piece
            &&
            piece.color
            ===
            turn
        ) {
            chessAnalysisSelectedSquare =
                square;

            chessAnalysisLegalMoves =
                movesFromSquare(
                    chessAnalysisGame,
                    square
                );

            renderChessAnalysis();

            return;
        }

        const candidates =
            chessAnalysisLegalMoves.filter(
                move =>
                    move.to
                    ===
                    square
            );

        if (
            candidates.length
            ===
            0
        ) {
            chessAnalysisSelectedSquare =
                null;

            chessAnalysisLegalMoves =
                [];

            renderChessAnalysis();

            return;
        }

        const promotions =
            candidates.filter(
                move =>
                    move.promotion
            );

        if (
            promotions.length
            >
            0
        ) {
            chessAnalysisPromotion = {
                from:
                    chessAnalysisSelectedSquare,
                to:
                    square
            };

            fillPromotionChoices(
                el.chessAnalysisPromotionChoices,
                promotions,
                turn,
                promotion => {
                    el.chessAnalysisPromotionPanel.classList.add(
                        "hidden"
                    );

                    const pending =
                        chessAnalysisPromotion;

                    chessAnalysisPromotion =
                        null;

                    makeChessAnalysisMove({
                        from:
                            pending.from,
                        to:
                            pending.to,
                        promotion
                    });
                }
            );

            el.chessAnalysisPromotionPanel.classList.remove(
                "hidden"
            );

            return;
        }

        makeChessAnalysisMove({
            from:
                chessAnalysisSelectedSquare,
            to:
                square
        });
    }


    async function makeChessAnalysisMove(
        move
    ) {
        if (
            !chessAnalysisGame
        ) {
            return;
        }

        const beforeFen =
            chessAnalysisGame.fen();

        const mover =
            chessAnalysisGame.turn();

        const baseline =
            await evaluateChessFen(
                beforeFen
            );

        let made =
            null;

        try {
            made =
                chessAnalysisGame.move(
                    move
                );
        } catch (
            error
        ) {
            return;
        }

        chessAnalysisLastMove = {
            from:
                made.from,
            to:
                made.to
        };

        chessAnalysisSelectedSquare =
            null;

        chessAnalysisLegalMoves =
            [];

        chessAnalysisVariation =
            true;

        el.chessAnalysisReturnLine.classList.remove(
            "hidden"
        );

        renderChessAnalysis();

        el.chessAnalysisFeedback.textContent =
            "Alternative wird analysiert …";

        const after =
            await evaluateChessFen(
                chessAnalysisGame.fen(),
                true
            );

        if (
            !after
        ) {
            el.chessAnalysisFeedback.textContent =
                "Bewertung nicht verfügbar.";

            return;
        }

        setChessEvalBar(
            after
        );

        const quality =
            classifyChessMoveQuality(
                baseline,
                after,
                mover
            );

        el.chessAnalysisFeedback.textContent =
            `${made.san} · ${quality}`;
    }


    function classifyChessMoveQuality(
        before,
        after,
        mover
    ) {
        if (
            !before
            ||
            !after
        ) {
            return "analysiert";
        }

        const beforeScore =
            scoreForQuality(
                before
            );

        const afterScore =
            scoreForQuality(
                after
            );

        const loss =
            mover
            ===
            "w"
                ? beforeScore
                    -
                    afterScore
                : afterScore
                    -
                    beforeScore;

        if (
            loss
            <=
            0.12
        ) {
            return "sehr gut";
        }

        if (
            loss
            <=
            0.45
        ) {
            return "gut";
        }

        if (
            loss
            <=
            1.0
        ) {
            return "ungenau";
        }

        if (
            loss
            <=
            2.2
        ) {
            return "Fehler";
        }

        return "grober Fehler";
    }


    function scoreForQuality(
        score
    ) {
        if (
            score.type
            ===
            "mate"
        ) {
            return score.value
            >
            0
                ? 100
                : -100;
        }

        return score.pawns;
    }


    async function evaluateChessFen(
        fen,
        force = false
    ) {
        if (
            !force
            &&
            chessAnalysisEvalCache.has(
                fen
            )
        ) {
            return chessAnalysisEvalCache.get(
                fen
            );
        }

        const result =
            await runChessEngineTask({
                fen,
                commands: [
                    "setoption name UCI_LimitStrength value false",
                    "go movetime 220"
                ],
                timeout:
                    8000
            });

        if (
            result
            &&
            result.score
        ) {
            chessAnalysisEvalCache.set(
                fen,
                result.score
            );

            return result.score;
        }

        return null;
    }


    function setChessEvalBar(
        score
    ) {
        if (
            !score
        ) {
            el.chessEvalWhite.style.height =
                "50%";

            el.chessEvalWhite.style.top =
                "auto";

            el.chessEvalWhite.style.bottom =
                "0";

            el.chessEvalLabel.textContent =
                "–";

            el.chessEvalBar.dataset.eval =
                "unavailable";

            return;
        }

        let whitePercent =
            50;

        let label =
            "0.0";

        if (
            score.type
            ===
            "mate"
        ) {
            whitePercent =
                score.value
                >
                0
                    ? 99
                    : 1;

            label =
                score.value
                >
                0
                    ? `M${Math.abs(score.value)}`
                    : `−M${Math.abs(score.value)}`;
        } else {
            whitePercent =
                50
                +
                Math.tanh(
                    score.pawns
                    /
                    4.4
                )
                *
                48;

            label =
                score.pawns
                >=
                0
                    ? `+${score.pawns.toFixed(1)}`
                    : score.pawns.toFixed(
                        1
                    );
        }

        whitePercent =
            Math.max(
                1,
                Math.min(
                    99,
                    whitePercent
                )
            );

        /*
           White is at the bottom when the human plays White, and at the top
           when the board is rotated for a human Black player.
        */
        if (
            chessHumanColor
            ===
            "w"
        ) {
            el.chessEvalWhite.style.top =
                "auto";

            el.chessEvalWhite.style.bottom =
                "0";
        } else {
            el.chessEvalWhite.style.bottom =
                "auto";

            el.chessEvalWhite.style.top =
                "0";
        }

        el.chessEvalWhite.style.height =
            `${whitePercent}%`;

        el.chessEvalLabel.textContent =
            label;

        el.chessEvalBar.dataset.eval =
            label;
    }

    async function updateChessAnalysisEvaluation() {
        if (
            !chessAnalysisGame
        ) {
            return;
        }

        const token =
            ++chessAnalysisEvalToken;

        const fen =
            chessAnalysisGame.fen();

        el.chessAnalysisFeedback.textContent =
            chessAnalysisVariation
                ? "Variante wird analysiert …"
                : "Stellung wird analysiert …";

        /*
           Keep the previous bar position while calculating, but mark the
           number as pending instead of snapping back to 50%.
        */
        el.chessEvalLabel.classList.add(
            "pending"
        );

        const current =
            await evaluateChessFen(
                fen
            );

        if (
            token
            !==
            chessAnalysisEvalToken
        ) {
            return;
        }

        setChessEvalBar(
            current
        );

        el.chessEvalLabel.classList.remove(
            "pending"
        );

        if (
            chessAnalysisVariation
        ) {
            return;
        }

        if (
            chessAnalysisIndex
            ===
            0
        ) {
            el.chessAnalysisFeedback.textContent =
                "Ausgangsstellung";

            return;
        }

        const previousFen =
            chessAnalysisFens[
                chessAnalysisIndex
                -
                1
            ];

        const previous =
            await evaluateChessFen(
                previousFen
            );

        if (
            token
            !==
            chessAnalysisEvalToken
        ) {
            return;
        }

        const mover =
            chessAnalysisIndex
            %
            2
            ===
            1
                ? "w"
                : "b";

        const quality =
            classifyChessMoveQuality(
                previous,
                current,
                mover
            );

        el.chessAnalysisFeedback.textContent =
            `${
                chessAnalysisSans[
                    chessAnalysisIndex
                    -
                    1
                ]
            } · ${quality}`;
    }


    el.chessAnalysisPrev.addEventListener(
        "click",
        () => {
            if (
                chessAnalysisVariation
            ) {
                return;
            }

            loadChessAnalysisPosition(
                chessAnalysisIndex
                -
                1
            );

            renderChessAnalysis();

            updateChessAnalysisEvaluation();
        }
    );


    el.chessAnalysisNext.addEventListener(
        "click",
        () => {
            if (
                chessAnalysisVariation
            ) {
                return;
            }

            loadChessAnalysisPosition(
                chessAnalysisIndex
                +
                1
            );

            renderChessAnalysis();

            updateChessAnalysisEvaluation();
        }
    );


    el.chessAnalysisReturnLine.addEventListener(
        "click",
        () => {
            loadChessAnalysisPosition(
                chessAnalysisIndex
            );

            renderChessAnalysis();

            updateChessAnalysisEvaluation();
        }
    );


    el.backFromChessAnalysis.addEventListener(
        "click",
        () => {
            chessAnalysisEvalToken +=
                1;

            el.chessAnalysisPromotionPanel.classList.add(
                "hidden"
            );

            showScreen(
                screens.textsHub
            );
        }
    );


    // ZEITSTRAHL
    // ==================================================

    const TIMELINE_KINDS = {
        thoughts: {
            label:
                "Philosophie"
        },
        notes: {
            label:
                "Notizen"
        },
        days: {
            label:
                "Tage",
            glyph:
                "—"
        },
        dreams: {
            label:
                "Träume",
            glyph:
                "☾"
        },
        films: {
            label:
                "Filme",
            glyph:
                "◇"
        },
        books: {
            label:
                "Bücher",
            glyph:
                "Ⅱ"
        },
        physics: {
            label:
                "Physik",
            glyph:
                "φ"
        }
    };


    function timelineEntries() {
        const entries =
            [];

        state.thoughts
            .filter(
                item =>
                    item.type
                    ===
                    "thought"
            )
            .forEach(
                item => {
                    entries.push({
                        kind:
                            "thoughts",
                        id:
                            item.id,
                        item,
                        title:
                            item.title.trim()
                            ||
                            "Ohne Titel",
                        date:
                            timelineDateForEntry(
                                item,
                                "thoughts"
                            )
                    });
                }
            );

        state.notes
            .filter(
                item =>
                    item.type
                    ===
                    "thought"
            )
            .forEach(
                item => {
                    entries.push({
                        kind:
                            "notes",
                        id:
                            item.id,
                        item,
                        title:
                            item.title.trim()
                            ||
                            "Ohne Titel",
                        date:
                            timelineDateForEntry(
                                item,
                                "notes"
                            )
                    });
                }
            );

        state.days.forEach(
            item => {
                entries.push({
                    kind:
                        "days",
                    id:
                        item.id,
                    item,
                    title:
                        item.title.trim()
                        ||
                        "Ohne Titel",
                    date:
                        timelineDateForEntry(
                            item,
                            "days"
                        )
                });
            }
        );

        state.dreams.forEach(
            item => {
                entries.push({
                    kind:
                        "dreams",
                    id:
                        item.id,
                    item,
                    title:
                        item.title.trim()
                        ||
                        "Ohne Titel",
                    date:
                        timelineDateForEntry(
                            item,
                            "dreams"
                        )
                });
            }
        );

        state.films.entries
            .filter(
                item =>
                    item.type
                    ===
                    "review"
            )
            .forEach(
                item => {
                    entries.push({
                        kind:
                            "films",
                        id:
                            item.id,
                        item,
                        title:
                            item.title.trim()
                            ||
                            "Ohne Titel",
                        date:
                            timelineDateForEntry(
                                item,
                                "films"
                            )
                    });
                }
            );

        state.books.entries
            .filter(
                item =>
                    item.type
                    ===
                    "review"
            )
            .forEach(
                item => {
                    entries.push({
                        kind:
                            "books",
                        id:
                            item.id,
                        item,
                        title:
                            item.title.trim()
                            ||
                            "Ohne Titel",
                        date:
                            timelineDateForEntry(
                                item,
                                "books"
                            )
                    });
                }
            );

        state.physics.entries
            .filter(
                item =>
                    item.type
                    ===
                    "note"
            )
            .forEach(
                item => {
                    entries.push({
                        kind:
                            "physics",
                        id:
                            item.id,
                        item,
                        title:
                            item.title.trim()
                            ||
                            "Ohne Titel",
                        date:
                            timelineDateForEntry(
                                item,
                                "physics"
                            )
                    });
                }
            );

        return entries
            .filter(
                entry =>
                    !Number.isNaN(
                        entry.date.getTime()
                    )
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    b.date.getTime()
                    -
                    a.date.getTime()
            );
    }


    function timelineGapPixels(
        newer,
        older
    ) {
        if (
            !newer
            ||
            !older
        ) {
            return 14;
        }

        const hours =
            Math.max(
                0,
                (
                    newer.getTime()
                    -
                    older.getTime()
                )
                /
                3600000
            );

        return Math.round(
            Math.min(
                72,
                14
                +
                Math.log10(
                    hours
                    +
                    1
                )
                *
                19
            )
        );
    }


    function renderTimeline() {
        const entries =
            timelineEntries();

        el.timelineList.innerHTML =
            "";

        el.timelineEmpty.style.display =
            entries.length
                ? "none"
                : "block";

        entries.forEach(
            (
                entry,
                index
            ) => {
                const config =
                    TIMELINE_KINDS[
                        entry.kind
                    ];

                const row =
                    document.createElement(
                        "button"
                    );

                row.type =
                    "button";

                row.className =
                    "timeline-entry";

                const previous =
                    index
                    >
                    0
                        ? entries[
                            index - 1
                        ]
                        : null;

                row.style.setProperty(
                    "--timeline-gap",
                    `${
                        timelineGapPixels(
                            previous?.date,
                            entry.date
                        )
                    }px`
                );

                const time =
                    document.createElement(
                        "span"
                    );

                time.className =
                    "timeline-time";

                time.textContent =
                    formatTimelineTimestamp(
                        entry.date
                    );

                const mark =
                    document.createElement(
                        "span"
                    );

                mark.className =
                    `timeline-mark category-icon-${entry.kind}`;

                mark.innerHTML =
                    categoryIconSvg(
                        entry.kind
                    );

                const content =
                    document.createElement(
                        "span"
                    );

                content.className =
                    "timeline-entry-content";

                const title =
                    document.createElement(
                        "span"
                    );

                title.className =
                    "timeline-entry-title";

                title.textContent =
                    entry.title;

                content.appendChild(
                    title
                );

                row.append(
                    time,
                    mark,
                    content
                );

                row.addEventListener(
                    "click",
                    () => {
                        openTimelineEntryPdf(
                            entry
                        );
                    }
                );

                el.timelineList.appendChild(
                    row
                );
            }
        );
    }


    function printableSectionsHtml(
        title,
        sections
    ) {
        const body =
            sections
                .filter(
                    section =>
                        String(
                            section.text
                            ??
                            ""
                        ).trim()
                        !==
                        ""
                )
                .map(
                    section => `
                        <section>
                            ${
                                section.heading
                                    ? `<h2>${escapeHtml(section.heading)}</h2>`
                                    : ""
                            }
                            <div>${textToHtml(section.text)}</div>
                        </section>
                    `
                )
                .join(
                    ""
                );

        return `
            <h1>${escapeHtml(title || "Ohne Titel")}</h1>
            ${body}
        `;
    }


    function timelinePdfData(
        entry
    ) {
        const item =
            entry.item;

        const title =
            entry.title;

        if (
            entry.kind
            ===
            "thoughts"
            ||
            entry.kind
            ===
            "notes"
        ) {
            return {
                title,
                html:
                    `
                        <h1>${escapeHtml(title)}</h1>
                        <div class="content">
                            ${sanitizeRichHtml(item.bodyHtml)}
                        </div>
                    `,
                css:
                    `
                        .content {
                            overflow-wrap: anywhere;
                        }
                    `
            };
        }

        if (
            entry.kind
            ===
            "days"
        ) {
            return {
                title,
                html:
                    printableSectionsHtml(
                        title,
                        [
                            {
                                heading:
                                    "Datum",
                                text:
                                    formatDate(
                                        item.date
                                    )
                            },
                            {
                                heading:
                                    "Stimmung",
                                text:
                                    item.mood
                                        ? `${item.mood}/5`
                                        : ""
                            },
                            {
                                heading:
                                    "Tag",
                                text:
                                    item.body
                            },
                            {
                                heading:
                                    "Reflexion",
                                text:
                                    item.reflection
                            }
                        ]
                    ),
                css:
                    ""
            };
        }

        if (
            entry.kind
            ===
            "dreams"
        ) {
            return {
                title,
                html:
                    printableSectionsHtml(
                        title,
                        [
                            {
                                heading:
                                    "Datum",
                                text:
                                    formatDate(
                                        item.date
                                    )
                            },
                            {
                                heading:
                                    "Traum",
                                text:
                                    item.manifest
                            },
                            {
                                heading:
                                    "Affekt",
                                text:
                                    item.affect
                            },
                            {
                                heading:
                                    "Tagesreste",
                                text:
                                    item.dayResidue
                            },
                            {
                                heading:
                                    "Assoziationen",
                                text:
                                    item.associations
                            },
                            {
                                heading:
                                    "Verdichtung",
                                text:
                                    item.condensation
                            },
                            {
                                heading:
                                    "Verschiebung",
                                text:
                                    item.displacement
                            },
                            {
                                heading:
                                    "Wunsch / Konflikt",
                                text:
                                    item.wishConflict
                            },
                            {
                                heading:
                                    "Deutung",
                                text:
                                    item.interpretation
                            }
                        ]
                    ),
                css:
                    ""
            };
        }

        if (
            entry.kind
            ===
            "films"
            ||
            entry.kind
            ===
            "books"
        ) {
            return {
                title,
                html:
                    printableSectionsHtml(
                        title,
                        [
                            {
                                heading:
                                    "Bewertung",
                                text:
                                    item.rating
                                        ? `${item.rating}/10`
                                        : ""
                            },
                            {
                                heading:
                                    "Zusammenfassung",
                                text:
                                    item.summary
                            },
                            {
                                heading:
                                    "Deutung",
                                text:
                                    item.interpretation
                            },
                            {
                                heading:
                                    "Rezension",
                                text:
                                    item.review
                            }
                        ]
                    ),
                css:
                    ""
            };
        }

        return {
            title,
            html:
                `
                    <h1>${escapeHtml(title)}</h1>
                    <div class="physics-print-body">
                        ${physicsPrintableHtml(item.bodyHtml)}
                    </div>
                `,
            css:
                `
                    .physics-print-body {
                        font-size: 12pt;
                        line-height: 1.7;
                        overflow-wrap: anywhere;
                    }

                    .physics-print-formula {
                        display: inline-block;
                        vertical-align: baseline;
                        margin: 0 0.08em;
                    }

                    .physics-print-formula .katex {
                        font-size: 1em;
                    }

                    .physics-print-body div[style*="text-align: center"],
                    .physics-print-body p[style*="text-align: center"] {
                        text-align: center;
                    }
                `
        };
    }


    function openTimelineEntryPdf(
        entry
    ) {
        const pdf =
            timelinePdfData(
                entry
            );

        openPrintPreview(
            pdf.title,
            pdf.html,
            pdf.css,
            {
                autoPrint:
                    false,
                editPayload: {
                    kind:
                        entry.kind,
                    id:
                        entry.id
                }
            }
        );
    }


    function openTimelineEntryForEdit(
        payload
    ) {
        if (
            !payload
            ||
            !payload.id
            ||
            !payload.kind
        ) {
            return;
        }

        if (
            payload.kind
            ===
            "thoughts"
            ||
            payload.kind
            ===
            "notes"
        ) {
            currentRichKind =
                payload.kind;

            const item =
                thoughtEntries().find(
                    candidate =>
                        candidate.id
                        ===
                        payload.id
                        &&
                        candidate.type
                        ===
                        "thought"
                );

            if (!item) {
                return;
            }

            currentThoughtFolderId =
                item.parentId
                ??
                null;

            updateThoughtCategoryUi();

            openThoughtEditor(
                item.id
            );

            return;
        }

        if (
            payload.kind
            ===
            "days"
        ) {
            openDayEditor(
                payload.id
            );

            return;
        }

        if (
            payload.kind
            ===
            "dreams"
        ) {
            openDreamEditor(
                payload.id
            );

            return;
        }

        if (
            payload.kind
            ===
            "films"
            ||
            payload.kind
            ===
            "books"
        ) {
            reviewKind =
                payload.kind;

            const item =
                state[
                    payload.kind
                ].entries.find(
                    candidate =>
                        candidate.id
                        ===
                        payload.id
                        &&
                        candidate.type
                        ===
                        "review"
                );

            if (!item) {
                return;
            }

            currentReviewFolderId =
                item.parentId
                ??
                null;

            openReviewEditor(
                item.id
            );

            return;
        }

        if (
            payload.kind
            ===
            "physics"
        ) {
            const item =
                getPhysicsEntry(
                    payload.id
                );

            if (
                !item
                ||
                item.type
                !==
                "note"
            ) {
                return;
            }

            currentPhysicsFolderId =
                item.parentId
                ??
                null;

            openPhysicsEditor(
                item.id
            );
        }
    }


    function openTimelineEditFromLocation() {
        const params =
            new URLSearchParams(
                window.location.search
            );

        const kind =
            params.get(
                "timelineEditKind"
            );

        const id =
            params.get(
                "timelineEditId"
            );

        if (
            !kind
            ||
            !id
        ) {
            return;
        }

        params.delete(
            "timelineEditKind"
        );

        params.delete(
            "timelineEditId"
        );

        const query =
            params.toString();

        const cleanUrl =
            window.location.pathname
            +
            (
                query
                    ? `?${query}`
                    : ""
            )
            +
            window.location.hash;

        window.history.replaceState(
            {},
            "",
            cleanUrl
        );

        setTimeout(
            () => {
                openTimelineEntryForEdit({
                    kind,
                    id
                });
            },
            0
        );
    }


    window.addEventListener(
        "message",
        event => {
            if (
                event.data?.type
                !==
                "timeline-edit-entry"
            ) {
                return;
            }

            openTimelineEntryForEdit(
                event.data.payload
            );
        }
    );


    // ==================================================
    // TEXTE HUB
    // ==================================================

    el.openThoughtsButton.addEventListener(
        "click",
        () => {
            currentRichKind =
                "thoughts";

            currentThoughtFolderId =
                null;

            el.thoughtSortSelect.value =
                "manual";

            updateThoughtCategoryUi();

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.openNotesButton.addEventListener(
        "click",
        () => {
            currentRichKind =
                "notes";

            currentThoughtFolderId =
                null;

            el.thoughtSortSelect.value =
                "manual";

            updateThoughtCategoryUi();

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );

    el.openDaysButton.addEventListener(
        "click",
        () => {
            renderDayList();

            showScreen(
                screens.dayList
            );
        }
    );

    el.openDreamsButton.addEventListener(
        "click",
        () => {
            renderDreamList();

            showScreen(
                screens.dreamList
            );
        }
    );

    el.openFilmsButton.addEventListener(
        "click",
        () => {
            openReviewLibrary(
                "films"
            );
        }
    );

    el.openBooksButton.addEventListener(
        "click",
        () => {
            openReviewLibrary(
                "books"
            );
        }
    );




    document.addEventListener(
        "click",
        event => {
            [
                [
                    el.thoughtSortPanel,
                    el.thoughtCategoryIcon
                ],
                [
                    el.physicsSortPanel,
                    el.physicsCategoryIcon
                ],
                [
                    el.reviewSortPanel,
                    el.reviewLibraryIcon
                ]
            ].forEach(
                (
                    [
                        panel,
                        trigger
                    ]
                ) => {
                    if (
                        !panel
                        ||
                        !trigger
                        ||
                        panel.classList.contains(
                            "hidden"
                        )
                    ) {
                        return;
                    }

                    if (
                        panel.contains(
                            event.target
                        )
                        ||
                        trigger.contains(
                            event.target
                        )
                    ) {
                        return;
                    }

                    panel.classList.add(
                        "hidden"
                    );
                }
            );
        }
    );


    // ==================================================
    // PHYSIK — ORDNER, LATEX, SOLVER
    // ==================================================

    function physicsEntries() {
        return state.physics.entries;
    }


    function getPhysicsEntry(
        id
    ) {
        return (
            physicsEntries().find(
                item =>
                    item.id
                    ===
                    id
            )
            ??
            null
        );
    }


    function physicsChildren(
        parentId
    ) {
        return physicsEntries()
            .filter(
                item =>
                    item.parentId
                    ===
                    parentId
            );
    }


    function physicsPath(
        folderId
    ) {
        const path = [];
        const seen =
            new Set();

        let currentId =
            folderId;

        while (
            currentId
        ) {
            if (
                seen.has(
                    currentId
                )
            ) {
                break;
            }

            seen.add(
                currentId
            );

            const folder =
                getPhysicsEntry(
                    currentId
                );

            if (
                !folder
                ||
                folder.type
                !==
                "folder"
            ) {
                break;
            }

            path.unshift(
                folder
            );

            currentId =
                folder.parentId;
        }

        return path;
    }


    function physicsFolderDisplayPath(
        folder
    ) {
        return physicsPath(
            folder.id
        )
        .map(
            item =>
                item.title
        )
        .join(
            " › "
        );
    }


    function renderPhysicsBreadcrumbs() {
        el.physicsBreadcrumbs.innerHTML =
            "";

        const root =
            document.createElement(
                "button"
            );

        root.type =
            "button";

        root.className =
            "breadcrumb-button";

        root.textContent =
            "Physik";

        root.addEventListener(
            "click",
            () => {
                currentPhysicsFolderId =
                    null;

                renderPhysicsList();
            }
        );

        el.physicsBreadcrumbs.appendChild(
            root
        );

        physicsPath(
            currentPhysicsFolderId
        ).forEach(
            folder => {
                const separator =
                    document.createElement(
                        "span"
                    );

                separator.className =
                    "breadcrumb-separator";

                separator.textContent =
                    "›";

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "breadcrumb-button";

                button.textContent =
                    folder.title;

                button.addEventListener(
                    "click",
                    () => {
                        currentPhysicsFolderId =
                            folder.id;

                        renderPhysicsList();
                    }
                );

                el.physicsBreadcrumbs.append(
                    separator,
                    button
                );
            }
        );
    }


    function normalizePhysicsSiblingOrder(
        parentId
    ) {
        const siblings =
            physicsChildren(
                parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        a.order
                        ??
                        0
                    )
                    -
                    Number(
                        b.order
                        ??
                        0
                    )
            );

        siblings.forEach(
            (
                item,
                index
            ) => {
                item.order =
                    index;
            }
        );
    }


    function nextPhysicsOrder(
        parentId
    ) {
        const siblings =
            physicsChildren(
                parentId
            );

        if (
            siblings.length
            ===
            0
        ) {
            return 0;
        }

        return (
            Math.max(
                ...siblings.map(
                    item =>
                        Number(
                            item.order
                            ??
                            0
                        )
                )
            )
            +
            1
        );
    }


    function movePhysicsEntry(
        id,
        direction
    ) {
        const item =
            getPhysicsEntry(
                id
            );

        if (!item) {
            return;
        }

        normalizePhysicsSiblingOrder(
            item.parentId
        );

        const siblings =
            physicsChildren(
                item.parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    a.order
                    -
                    b.order
            );

        const index =
            siblings.findIndex(
                entry =>
                    entry.id
                    ===
                    id
            );

        const targetIndex =
            index
            +
            direction;

        if (
            targetIndex
            <
            0
            ||
            targetIndex
            >=
            siblings.length
        ) {
            return;
        }

        const target =
            siblings[
                targetIndex
            ];

        const order =
            item.order;

        item.order =
            target.order;

        target.order =
            order;

        saveState();
        renderPhysicsList();
    }


    function physicsNotePreview(
        item
    ) {
        const wrapper =
            document.createElement(
                "div"
            );

        wrapper.innerHTML =
            sanitizePhysicsHtml(
                item.bodyHtml
            );

        wrapper.querySelectorAll(
            ".physics-formula-token"
        ).forEach(
            token => {
                token.replaceWith(
                    document.createTextNode(
                        `$${token.dataset.latex ?? ""}$`
                    )
                );
            }
        );

        return (
            wrapper.textContent
            ??
            ""
        )
        .trim()
        .replace(
            /\s+/g,
            " "
        );
    }


    function renderPhysicsList() {
        renderPhysicsBreadcrumbs();

        el.physicsList.innerHTML =
            "";

        const mode =
            el.physicsSortSelect.value;

        const items =
            [...physicsChildren(
                currentPhysicsFolderId
            )]
            .sort(
                (
                    a,
                    b
                ) => {
                    if (
                        mode
                        ===
                        "title"
                    ) {
                        return a.title.localeCompare(
                            b.title,
                            "de"
                        );
                    }

                    if (
                        mode
                        ===
                        "updatedDesc"
                        ||
                        mode
                        ===
                        "updatedAsc"
                    ) {
                        const delta =
                            new Date(
                                b.updatedAt
                            ).getTime()
                            -
                            new Date(
                                a.updatedAt
                            ).getTime();

                        return mode
                        ===
                        "updatedDesc"
                            ? delta
                            : -delta;
                    }

                    return (
                        Number(
                            a.order
                            ??
                            0
                        )
                        -
                        Number(
                            b.order
                            ??
                            0
                        )
                    );
                }
            );

        const manual =
            mode
            ===
            "manual";

        el.physicsEmpty.style.display =
            items.length
            ===
            0
                ? "block"
                : "none";

        items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "text-row";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    row.classList.add(
                        "folder-row"
                    );
                }

                const main =
                    document.createElement(
                        "button"
                    );

                main.type =
                    "button";

                main.className =
                    "row-main-button";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "row-title";

                title.textContent =
                    item.title.trim()
                    ||
                    (
                        item.type
                        ===
                        "folder"
                            ? "Ordner"
                            : "Ohne Titel"
                    );

                const subtitle =
                    document.createElement(
                        "div"
                    );

                subtitle.className =
                    "row-subtitle";

                if (
                    item.type
                    !==
                    "folder"
                ) {
                    const preview =
                        physicsNotePreview(
                            item
                        );

                    subtitle.textContent =
                        preview
                            ? `${formatDate(item.updatedAt)} · ${preview}`
                            : formatDate(
                                item.updatedAt
                            );
                }

                main.appendChild(
                    title
                );

                if (
                    item.type
                    !==
                    "folder"
                ) {
                    main.appendChild(
                        subtitle
                    );
                }

                main.addEventListener(
                    "click",
                    () => {
                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            currentPhysicsFolderId =
                                item.id;

                            renderPhysicsList();

                        } else {
                            openPhysicsEditor(
                                item.id
                            );
                        }
                    }
                );

                row.appendChild(
                    main
                );

                if (
                    manual
                ) {
                                    const controls =
                                        document.createElement(
                                            "div"
                                        );

                                    controls.className =
                                        "library-move-controls";

                                    const up =
                                        document.createElement(
                                            "button"
                                        );

                                    up.type =
                                        "button";

                                    up.textContent =
                                        "↑";

                                    up.disabled =
                                        index
                                        ===
                                        0;

                                    up.addEventListener(
                                        "click",
                                        () => {
                                            movePhysicsEntry(
                                                item.id,
                                                -1
                                            );
                                        }
                                    );

                                    const down =
                                        document.createElement(
                                            "button"
                                        );

                                    down.type =
                                        "button";

                                    down.textContent =
                                        "↓";

                                    down.disabled =
                                        index
                                        ===
                                        items.length
                                        -
                                        1;

                                    down.addEventListener(
                                        "click",
                                        () => {
                                            movePhysicsEntry(
                                                item.id,
                                                1
                                            );
                                        }
                                    );

                                    controls.append(
                                        up,
                                        down
                                    );

                                    row.appendChild(
                                        controls
                                    );

                }

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    const more =
                        document.createElement(
                            "button"
                        );

                    more.type =
                        "button";

                    more.className =
                        "library-more-button";

                    more.textContent =
                        "···";

                    more.addEventListener(
                        "click",
                        () => {
                            openPhysicsFolderEditor(
                                item.id
                            );
                        }
                    );

                    row.appendChild(
                        more
                    );
                }

                el.physicsList.appendChild(
                    row
                );
            }
        );
    }


    el.physicsCategoryIcon.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.physicsSortPanel.classList.toggle(
                "hidden"
            );
        }
    );


    el.physicsSortSelect.addEventListener(
        "change",
        () => {
            el.physicsSortPanel.classList.add(
                "hidden"
            );

            renderPhysicsList();
        }
    );


    el.backFromPhysicsList.addEventListener(
        "click",
        () => {
            if (
                currentPhysicsFolderId
            ) {
                const folder =
                    getPhysicsEntry(
                        currentPhysicsFolderId
                    );

                currentPhysicsFolderId =
                    folder?.parentId
                    ??
                    null;

                renderPhysicsList();

                return;
            }

            showScreen(
                screens.textsHub
            );
        }
    );


    el.addPhysicsNoteButton.addEventListener(
        "click",
        () => {
            const item = {
                id:
                    createId(),
                type:
                    "note",
                parentId:
                    currentPhysicsFolderId,
                title:
                    "",
                bodyHtml:
                    "",
                order:
                    nextPhysicsOrder(
                        currentPhysicsFolderId
                    ),
                createdAt:
                    nowIso(),
                updatedAt:
                    nowIso()
            };

            state.physics.entries.push(
                item
            );

            saveState();

            openPhysicsEditor(
                item.id
            );
        }
    );


    // --------------------------------------------------
    // PHYSIK-ORDNER
    // --------------------------------------------------

    el.addPhysicsFolderButton.addEventListener(
        "click",
        () => {
            currentPhysicsFolderEditId =
                null;

            el.physicsFolderName.value =
                "";

            setError(
                el.physicsFolderError
            );

            el.deletePhysicsFolderButton.style.display =
                "none";

            showScreen(
                screens.physicsFolderEditor
            );

            setTimeout(
                () => {
                    el.physicsFolderName.focus();
                },
                0
            );
        }
    );


    function openPhysicsFolderEditor(
        id
    ) {
        const folder =
            getPhysicsEntry(
                id
            );

        if (
            !folder
            ||
            folder.type
            !==
            "folder"
        ) {
            return;
        }

        currentPhysicsFolderEditId =
            id;

        el.physicsFolderName.value =
            folder.title;

        setError(
            el.physicsFolderError
        );

        el.deletePhysicsFolderButton.style.display =
            "block";

        showScreen(
            screens.physicsFolderEditor
        );
    }


    el.backFromPhysicsFolderEditor.addEventListener(
        "click",
        () => {
            currentPhysicsFolderEditId =
                null;

            renderPhysicsList();

            showScreen(
                screens.physicsList
            );
        }
    );


    el.savePhysicsFolderButton.addEventListener(
        "click",
        () => {
            const name =
                el.physicsFolderName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.physicsFolderError,
                    "Name fehlt."
                );

                return;
            }

            if (
                currentPhysicsFolderEditId
            ) {
                const folder =
                    getPhysicsEntry(
                        currentPhysicsFolderEditId
                    );

                if (!folder) {
                    return;
                }

                folder.title =
                    name;

                folder.updatedAt =
                    nowIso();

            } else {
                state.physics.entries.push({
                    id:
                        createId(),
                    type:
                        "folder",
                    parentId:
                        currentPhysicsFolderId,
                    title:
                        name,
                    bodyHtml:
                        "",
                    order:
                        nextPhysicsOrder(
                            currentPhysicsFolderId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentPhysicsFolderEditId =
                null;

            renderPhysicsList();

            showScreen(
                screens.physicsList
            );
        }
    );


    function collectPhysicsDescendantIds(
        folderId
    ) {
        const found =
            new Set();

        const processed =
            new Set();

        const queue =
            [folderId];

        while (
            queue.length
        ) {
            const current =
                queue.shift();

            if (
                processed.has(
                    current
                )
            ) {
                continue;
            }

            processed.add(
                current
            );

            found.add(
                current
            );

            physicsEntries()
                .filter(
                    item =>
                        item.parentId
                        ===
                        current
                )
                .forEach(
                    item => {
                        found.add(
                            item.id
                        );

                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            queue.push(
                                item.id
                            );
                        }
                    }
                );
        }

        return found;
    }


    el.deletePhysicsFolderButton.addEventListener(
        "click",
        () => {
            if (
                !currentPhysicsFolderEditId
            ) {
                return;
            }

            if (
                !window.confirm(
                    "Ordner und alle enthaltenen Physiknotizen löschen?"
                )
            ) {
                return;
            }

            const ids =
                collectPhysicsDescendantIds(
                    currentPhysicsFolderEditId
                );

            state.physics.entries =
                state.physics.entries.filter(
                    item =>
                        !ids.has(
                            item.id
                        )
                );

            saveState();

            if (
                ids.has(
                    currentPhysicsFolderId
                )
            ) {
                currentPhysicsFolderId =
                    null;
            }

            currentPhysicsFolderEditId =
                null;

            renderPhysicsList();

            showScreen(
                screens.physicsList
            );
        }
    );


    // --------------------------------------------------
    // PHYSIK-EDITOR
    // --------------------------------------------------

    function physicsFolders() {
        return physicsEntries()
            .filter(
                item =>
                    item.type
                    ===
                    "folder"
            );
    }


    function renderPhysicsFolderOptions(
        selectedId
    ) {
        el.physicsFolderSelect.innerHTML =
            "";

        const root =
            document.createElement(
                "option"
            );

        root.value =
            "";

        root.textContent =
            "Ohne Ordner";

        el.physicsFolderSelect.appendChild(
            root
        );

        physicsFolders()
            .sort(
                (
                    a,
                    b
                ) =>
                    physicsFolderDisplayPath(a)
                        .localeCompare(
                            physicsFolderDisplayPath(b),
                            "de"
                        )
            )
            .forEach(
                folder => {
                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        folder.id;

                    option.textContent =
                        physicsFolderDisplayPath(
                            folder
                        );

                    el.physicsFolderSelect.appendChild(
                        option
                    );
                }
            );

        el.physicsFolderSelect.value =
            selectedId
            ??
            "";
    }


    function hydratePhysicsFormulas() {
        el.physicsBody.querySelectorAll(
            ".physics-formula-token"
        ).forEach(
            token => {
                renderPhysicsToken(
                    token
                );
            }
        );
    }


    function normalizePhysicsLatex(
        latex
    ) {
        return String(
            latex
            ??
            ""
        )
        .trim()
        .replace(
            /^`+|`+$/g,
            ""
        )
        .trim();
    }


    function renderPhysicsToken(
        token
    ) {
        const rawLatex =
            token.dataset.latex
            ??
            "";

        const latex =
            normalizePhysicsLatex(
                rawLatex
            );

        const mode =
            token.dataset.mode
            ===
            "raw"
                ? "raw"
                : "rendered";

        token.dataset.mode =
            mode;

        token.setAttribute(
            "contenteditable",
            "false"
        );

        token.classList.add(
            "physics-formula-token"
        );

        token.classList.toggle(
            "physics-formula-raw",
            mode
            ===
            "raw"
        );

        token.classList.toggle(
            "physics-formula-rendered",
            mode
            ===
            "rendered"
        );

        token.innerHTML =
            "";

        if (
            mode
            ===
            "raw"
        ) {
            token.textContent =
                `$${rawLatex}$`;

            return;
        }

        if (
            typeof window.katex
            ===
            "undefined"
        ) {
            token.textContent =
                `$${rawLatex}$`;

            token.classList.add(
                "formula-render-fallback"
            );

            return;
        }

        try {
            window.katex.render(
                latex,
                token,
                {
                    throwOnError:
                        false,
                    displayMode:
                        false,
                    strict:
                        "ignore"
                }
            );

            token.classList.remove(
                "formula-render-fallback"
            );

        } catch (
            error
        ) {
            token.textContent =
                `$${rawLatex}$`;

            token.classList.add(
                "formula-render-fallback"
            );
        }
    }


    function openPhysicsEditor(
        id
    ) {
        const item =
            getPhysicsEntry(
                id
            );

        if (
            !item
            ||
            item.type
            !==
            "note"
        ) {
            return;
        }

        currentPhysicsNoteId =
            id;

        selectedPhysicsFormula =
            null;

        pendingPhysicsSolve =
            null;

        el.physicsTitle.value =
            item.title;

        el.physicsBody.innerHTML =
            sanitizePhysicsHtml(
                item.bodyHtml
            );

        hydratePhysicsFormulas();

        renderPhysicsFolderOptions(
            item.parentId
        );

        el.physicsSaveState.textContent =
            "Gespeichert";

        hidePhysicsFormulaMenu();
        closePhysicsSolver();

        showScreen(
            screens.physicsEditor
        );

        if (
            !item.title
        ) {
            setTimeout(
                () => {
                    el.physicsTitle.focus();
                },
                0
            );
        }
    }


    function currentPhysicsNote() {
        const item =
            getPhysicsEntry(
                currentPhysicsNoteId
            );

        return (
            item
            &&
            item.type
            ===
            "note"
                ? item
                : null
        );
    }


    function saveCurrentPhysicsNote() {
        const item =
            currentPhysicsNote();

        if (!item) {
            return;
        }

        const oldParentId =
            item.parentId;

        const newParentId =
            el.physicsFolderSelect.value
            ||
            null;

        item.title =
            el.physicsTitle.value;

        item.bodyHtml =
            serializePhysicsBody();

        if (
            oldParentId
            !==
            newParentId
        ) {
            item.parentId =
                newParentId;

            item.order =
                nextPhysicsOrder(
                    newParentId
                );
        }

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.physicsSaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function schedulePhysicsSave() {
        el.physicsSaveState.textContent =
            "Speichert …";

        if (
            physicsSaveTimer
        ) {
            clearTimeout(
                physicsSaveTimer
            );
        }

        physicsSaveTimer =
            setTimeout(
                saveCurrentPhysicsNote,
                300
            );
    }


    function selectionInsidePhysicsBody() {
        const selection =
            window.getSelection();

        if (
            !selection
            ||
            selection.rangeCount
            ===
            0
        ) {
            return false;
        }

        const range =
            selection.getRangeAt(
                0
            );

        return (
            el.physicsBody.contains(
                range.commonAncestorContainer
            )
            ||
            range.commonAncestorContainer
            ===
            el.physicsBody
        );
    }


    function savePhysicsSelection() {
        if (
            selectionInsidePhysicsBody()
        ) {
            savedPhysicsRange =
                window.getSelection()
                    .getRangeAt(0)
                    .cloneRange();
        }
    }


    function updatePhysicsFormulaContextFromSelection() {
        if (
            activeScreen()
            !==
            screens.physicsEditor
            ||
            physicsToolbarInteraction
        ) {
            return;
        }

        const raw =
            rawFormulaAtCaret();

        if (raw) {
            showPhysicsFormulaMenu(
                raw
            );

            return;
        }

        const selection =
            window.getSelection();

        if (
            selection
            &&
            selection.anchorNode
        ) {
            const element =
                selection.anchorNode.nodeType
                ===
                Node.ELEMENT_NODE
                    ? selection.anchorNode
                    : selection.anchorNode.parentElement;

            const token =
                element?.closest?.(
                    ".physics-formula-token"
                );

            if (
                token
                &&
                el.physicsBody.contains(
                    token
                )
            ) {
                showPhysicsFormulaMenu({
                    kind:
                        token.dataset.mode
                        ===
                        "raw"
                            ? "rawToken"
                            : "renderedToken",
                    token,
                    latex:
                        token.dataset.latex
                        ??
                        ""
                });

                return;
            }
        }

        if (
            document.activeElement
            ===
            el.physicsBody
        ) {
            selectedPhysicsFormula =
                null;

            hidePhysicsFormulaMenu();
        }
    }


    document.addEventListener(
        "selectionchange",
        () => {
            savePhysicsSelection();

            requestAnimationFrame(
                updatePhysicsFormulaContextFromSelection
            );
        }
    );


    function placeCaretAfterNode(
        node
    ) {
        const range =
            document.createRange();

        range.setStartAfter(
            node
        );

        range.collapse(
            true
        );

        const selection =
            window.getSelection();

        selection.removeAllRanges();

        selection.addRange(
            range
        );

        savedPhysicsRange =
            range.cloneRange();
    }


    function insertPhysicsFormulaDelimiters() {
        el.physicsBody.focus();

        let range =
            savedPhysicsRange;

        if (
            !range
            ||
            !el.physicsBody.contains(
                range.commonAncestorContainer
            )
        ) {
            range =
                document.createRange();

            range.selectNodeContents(
                el.physicsBody
            );

            range.collapse(
                false
            );
        }

        const selectedText =
            range.toString();

        const textNode =
            document.createTextNode(
                `$${selectedText}$`
            );

        range.deleteContents();

        range.insertNode(
            textNode
        );

        const caret =
            document.createRange();

        if (
            selectedText
        ) {
            caret.setStart(
                textNode,
                textNode.nodeValue.length
            );

        } else {
            caret.setStart(
                textNode,
                1
            );
        }

        caret.collapse(
            true
        );

        const selection =
            window.getSelection();

        selection.removeAllRanges();

        selection.addRange(
            caret
        );

        savedPhysicsRange =
            caret.cloneRange();

        schedulePhysicsSave();
    }


    el.physicsHeaderTitle.addEventListener(
        "pointerdown",
        event => {
            event.preventDefault();
        }
    );


    el.physicsHeaderTitle.addEventListener(
        "click",
        insertPhysicsFormulaDelimiters
    );


    el.physicsPdfButton.addEventListener(
        "click",
        exportPhysicsPdf
    );


    function isEscapedDollar(
        text,
        index
    ) {
        let slashes =
            0;

        for (
            let i =
                index - 1;
            i >= 0
            &&
            text[i]
            ===
            "\\";
            i -= 1
        ) {
            slashes +=
                1;
        }

        return (
            slashes
            %
            2
            ===
            1
        );
    }


    function buildPhysicsTextProjection() {
        const chars = [];
        const mapping = [];
        const nodeRanges =
            new Map();

        function appendBoundary() {
            if (
                chars.length
                ===
                0
                ||
                chars[
                    chars.length - 1
                ]
                ===
                "\n"
            ) {
                return;
            }

            chars.push(
                "\n"
            );

            mapping.push(
                null
            );
        }


        function walk(
            node
        ) {
            if (
                node.nodeType
                ===
                Node.ELEMENT_NODE
                &&
                node.classList?.contains(
                    "physics-formula-token"
                )
            ) {
                appendBoundary();
                return;
            }

            if (
                node.nodeType
                ===
                Node.TEXT_NODE
            ) {
                const text =
                    node.nodeValue
                    ??
                    "";

                const start =
                    chars.length;

                nodeRanges.set(
                    node,
                    {
                        start,
                        length:
                            text.length
                    }
                );

                for (
                    let offset = 0;
                    offset <
                    text.length;
                    offset += 1
                ) {
                    chars.push(
                        text[offset]
                    );

                    mapping.push({
                        node,
                        offset
                    });
                }

                return;
            }

            if (
                node.nodeType
                !==
                Node.ELEMENT_NODE
            ) {
                return;
            }

            if (
                node.tagName
                ===
                "BR"
            ) {
                appendBoundary();
                return;
            }

            const isBlock =
                node
                !==
                el.physicsBody
                &&
                (
                    node.tagName
                    ===
                    "DIV"
                    ||
                    node.tagName
                    ===
                    "P"
                );

            if (
                isBlock
            ) {
                appendBoundary();
            }

            Array.from(
                node.childNodes
            ).forEach(
                walk
            );

            if (
                isBlock
            ) {
                appendBoundary();
            }
        }


        walk(
            el.physicsBody
        );

        return {
            text:
                chars.join(
                    ""
                ),
            mapping,
            nodeRanges
        };
    }


    function findRawPhysicsFormulaRanges(
        projection
    ) {
        const text =
            projection.text;

        const formulas =
            [];

        let index =
            0;

        while (
            index
            <
            text.length
        ) {
            if (
                text[index]
                !==
                "$"
                ||
                isEscapedDollar(
                    text,
                    index
                )
            ) {
                index +=
                    1;

                continue;
            }

            const delimiterLength =
                text[
                    index + 1
                ]
                ===
                "$"
                &&
                !isEscapedDollar(
                    text,
                    index + 1
                )
                    ? 2
                    : 1;

            const opener =
                "$".repeat(
                    delimiterLength
                );

            let close =
                index
                +
                delimiterLength;

            let found =
                -1;

            while (
                close
                <
                text.length
            ) {
                if (
                    delimiterLength
                    ===
                    1
                    &&
                    text[close]
                    ===
                    "\n"
                ) {
                    break;
                }

                if (
                    text.startsWith(
                        opener,
                        close
                    )
                    &&
                    !isEscapedDollar(
                        text,
                        close
                    )
                ) {
                    found =
                        close;

                    break;
                }

                close +=
                    1;
            }

            if (
                found
                ===
                -1
            ) {
                index +=
                    delimiterLength;

                continue;
            }

            const contentStart =
                index
                +
                delimiterLength;

            const contentEnd =
                found;

            const end =
                found
                +
                delimiterLength;

            const latex =
                text
                    .slice(
                        contentStart,
                        contentEnd
                    )
                    .trim();

            if (
                latex
            ) {
                formulas.push({
                    start:
                        index,
                    contentStart,
                    contentEnd,
                    end,
                    delimiterLength,
                    latex
                });
            }

            index =
                end;
        }

        return formulas;
    }


    function physicsGlobalCaretOffset(
        projection
    ) {
        const selection =
            window.getSelection();

        if (
            !selection
            ||
            selection.rangeCount
            ===
            0
        ) {
            return null;
        }

        const range =
            selection.getRangeAt(
                0
            );

        const container =
            range.startContainer;

        const offset =
            range.startOffset;

        if (
            container.nodeType
            ===
            Node.TEXT_NODE
        ) {
            const segment =
                projection.nodeRanges.get(
                    container
                );

            if (!segment) {
                return null;
            }

            return (
                segment.start
                +
                Math.min(
                    offset,
                    segment.length
                )
            );
        }

        const child =
            container.childNodes?.[
                offset
            ]
            ??
            null;

        if (child) {
            const walker =
                document.createTreeWalker(
                    child,
                    NodeFilter.SHOW_TEXT
                );

            const first =
                walker.nextNode();

            if (
                first
                &&
                projection.nodeRanges.has(
                    first
                )
            ) {
                return projection.nodeRanges.get(
                    first
                ).start;
            }
        }

        const previous =
            container.childNodes?.[
                Math.max(
                    0,
                    offset - 1
                )
            ]
            ??
            null;

        if (previous) {
            const texts = [];

            const walker =
                document.createTreeWalker(
                    previous,
                    NodeFilter.SHOW_TEXT
                );

            let current =
                walker.nextNode();

            while (
                current
            ) {
                texts.push(
                    current
                );

                current =
                    walker.nextNode();
            }

            const last =
                texts[
                    texts.length - 1
                ];

            if (
                last
                &&
                projection.nodeRanges.has(
                    last
                )
            ) {
                const segment =
                    projection.nodeRanges.get(
                        last
                    );

                return (
                    segment.start
                    +
                    segment.length
                );
            }
        }

        return null;
    }


    function domRangeForPhysicsFormula(
        formula,
        projection
    ) {
        const first =
            projection.mapping[
                formula.start
            ];

        const last =
            projection.mapping[
                formula.end - 1
            ];

        if (
            !first
            ||
            !last
        ) {
            return null;
        }

        const range =
            document.createRange();

        try {
            range.setStart(
                first.node,
                first.offset
            );

            range.setEnd(
                last.node,
                last.offset + 1
            );

            return range;

        } catch (
            error
        ) {
            return null;
        }
    }


    function rawFormulaAtCaret() {
        const projection =
            buildPhysicsTextProjection();

        const caretOffset =
            physicsGlobalCaretOffset(
                projection
            );

        if (
            caretOffset
            ===
            null
        ) {
            return null;
        }

        const formula =
            findRawPhysicsFormulaRanges(
                projection
            )
            .find(
                candidate =>
                    caretOffset
                    >=
                    candidate.start
                    &&
                    caretOffset
                    <=
                    candidate.end
            );

        if (!formula) {
            return null;
        }

        const range =
            domRangeForPhysicsFormula(
                formula,
                projection
            );

        if (!range) {
            return null;
        }

        return {
            kind:
                "rawText",
            range,
            latex:
                formula.latex,
            delimiterLength:
                formula.delimiterLength
        };
    }


    function showPhysicsFormulaMenu(
        formula
    ) {
        selectedPhysicsFormula =
            formula;

        el.physicsFormulaMenu.classList.remove(
            "hidden"
        );

        el.physicsHeaderTitle.classList.add(
            "hidden"
        );

        const isRawText =
            formula.kind
            ===
            "rawText";

        const isRawToken =
            formula.kind
            ===
            "rawToken";

        const isRenderedToken =
            formula.kind
            ===
            "renderedToken";

        el.convertPhysicsFormulaButton.style.display =
            (
                isRawText
                ||
                isRawToken
            )
                ? "inline-block"
                : "none";

        el.editPhysicsFormulaButton.style.display =
            (
                isRawToken
                ||
                isRenderedToken
            )
                ? "inline-block"
                : "none";

        el.physicsConstantsButton.style.display =
            "inline-block";
    }


    function hidePhysicsFormulaMenu() {
        el.physicsFormulaMenu.classList.add(
            "hidden"
        );

        el.physicsConstantsMenu.classList.add(
            "hidden"
        );

        el.physicsConstantsButton.setAttribute(
            "aria-expanded",
            "false"
        );

        el.physicsHeaderTitle.classList.remove(
            "hidden"
        );

    }


    function createPhysicsFormulaToken(
        latex,
        mode = "raw"
    ) {
        const token =
            document.createElement(
                "span"
            );

        token.className =
            "physics-formula-token";

        token.dataset.latex =
            String(
                latex
                ??
                ""
            );

        token.dataset.mode =
            mode
            ===
            "rendered"
                ? "rendered"
                : "raw";

        token.setAttribute(
            "contenteditable",
            "false"
        );

        renderPhysicsToken(
            token
        );

        return token;
    }


    function tokenizeClosedPhysicsFormulas(
        force = false
    ) {
        if (
            activeScreen()
            !==
            screens.physicsEditor
        ) {
            return;
        }

        const projection =
            buildPhysicsTextProjection();

        const caret =
            physicsGlobalCaretOffset(
                projection
            );

        const formulas =
            findRawPhysicsFormulaRanges(
                projection
            );

        formulas
            .slice()
            .reverse()
            .forEach(
                formula => {
                    if (
                        !force
                        &&
                        caret
                        !==
                        null
                        &&
                        caret
                        >=
                        formula.start
                        &&
                        caret
                        <=
                        formula.end
                    ) {
                        return;
                    }

                    const range =
                        domRangeForPhysicsFormula(
                            formula,
                            projection
                        );

                    if (!range) {
                        return;
                    }

                    const token =
                        createPhysicsFormulaToken(
                            formula.latex,
                            "raw"
                        );

                    try {
                        range.deleteContents();

                        range.insertNode(
                            token
                        );

                    } catch (
                        error
                    ) {
                        // Keep original text if the DOM changed meanwhile.
                    }
                }
            );
    }


    el.physicsBody.addEventListener(
        "click",
        event => {
            const token =
                event.target.closest(
                    ".physics-formula-token"
                );

            if (
                token
                &&
                el.physicsBody.contains(
                    token
                )
            ) {
                showPhysicsFormulaMenu({
                    kind:
                        token.dataset.mode
                        ===
                        "raw"
                            ? "rawToken"
                            : "renderedToken",
                    token,
                    latex:
                        token.dataset.latex
                        ??
                        ""
                });

                return;
            }

            requestAnimationFrame(
                () => {
                    const raw =
                        rawFormulaAtCaret();

                    if (raw) {
                        showPhysicsFormulaMenu(
                            raw
                        );

                    } else {
                        hidePhysicsFormulaMenu();
                    }
                }
            );
        }
    );


    function convertRawPhysicsFormula(
        formula
    ) {
        if (!formula) {
            return;
        }

        if (
            formula.kind
            ===
            "rawToken"
            &&
            formula.token?.isConnected
        ) {
            formula.token.dataset.mode =
                "rendered";

            renderPhysicsToken(
                formula.token
            );

            selectedPhysicsFormula = {
                kind:
                    "renderedToken",
                token:
                    formula.token,
                latex:
                    formula.latex
            };

            hidePhysicsFormulaMenu();

            schedulePhysicsSave();

            return;
        }

        if (
            formula.kind
            !==
            "rawText"
            ||
            !formula.range
        ) {
            return;
        }

        const token =
            createPhysicsFormulaToken(
                formula.latex,
                "rendered"
            );

        try {
            const range =
                formula.range.cloneRange();

            range.deleteContents();

            range.insertNode(
                token
            );

            placeCaretAfterNode(
                token
            );

            selectedPhysicsFormula = {
                kind:
                    "renderedToken",
                token,
                latex:
                    formula.latex
            };

            hidePhysicsFormulaMenu();

            schedulePhysicsSave();

        } catch (
            error
        ) {
            // Stale selection; leave text unchanged.
        }
    }


    el.convertPhysicsFormulaButton.addEventListener(
        "click",
        () => {
            convertRawPhysicsFormula(
                selectedPhysicsFormula
            );
        }
    );


    function editRenderedPhysicsFormula(
        formula
    ) {
        if (
            !formula
            ||
            ![
                "rawToken",
                "renderedToken"
            ].includes(
                formula.kind
            )
            ||
            !formula.token?.isConnected
        ) {
            return;
        }

        const text =
            document.createTextNode(
                `$${formula.latex}$`
            );

        formula.token.replaceWith(
            text
        );

        const range =
            document.createRange();

        range.setStart(
            text,
            Math.max(
                1,
                text.nodeValue.length - 1
            )
        );

        range.collapse(
            true
        );

        const selection =
            window.getSelection();

        selection.removeAllRanges();

        selection.addRange(
            range
        );

        savedPhysicsRange =
            range.cloneRange();

        el.physicsBody.focus();

        selectedPhysicsFormula =
            null;

        hidePhysicsFormulaMenu();

        schedulePhysicsSave();

        requestAnimationFrame(
            updatePhysicsFormulaContextFromSelection
        );
    }


    el.editPhysicsFormulaButton.addEventListener(
        "click",
        () => {
            editRenderedPhysicsFormula(
                selectedPhysicsFormula
            );
        }
    );




    function makeSelectedPhysicsFormulaEditableAtEnd() {
        const formula =
            selectedPhysicsFormula;

        if (!formula) {
            return false;
        }

        if (
            formula.kind
            ===
            "rawText"
        ) {
            return true;
        }

        if (
            ![
                "rawToken",
                "renderedToken"
            ].includes(
                formula.kind
            )
            ||
            !formula.token?.isConnected
        ) {
            return false;
        }

        const text =
            document.createTextNode(
                `$${formula.latex}$`
            );

        formula.token.replaceWith(
            text
        );

        const caret =
            document.createRange();

        caret.setStart(
            text,
            Math.max(
                1,
                text.nodeValue.length - 1
            )
        );

        caret.collapse(
            true
        );

        const selection =
            window.getSelection();

        selection.removeAllRanges();
        selection.addRange(
            caret
        );

        savedPhysicsRange =
            caret.cloneRange();

        selectedPhysicsFormula = {
            kind:
                "rawText",
            range:
                document.createRange(),
            latex:
                formula.latex
        };

        selectedPhysicsFormula.range.setStart(
            text,
            0
        );

        selectedPhysicsFormula.range.setEnd(
            text,
            text.nodeValue.length
        );

        return true;
    }


    function insertLatexAtPhysicsCaret(
        latex
    ) {
        if (
            !makeSelectedPhysicsFormulaEditableAtEnd()
        ) {
            return;
        }

        el.physicsBody.focus();

        let range =
            savedPhysicsRange;

        if (
            !range
            ||
            !el.physicsBody.contains(
                range.commonAncestorContainer
            )
        ) {
            return;
        }

        const textNode =
            document.createTextNode(
                latex
            );

        range.deleteContents();

        range.insertNode(
            textNode
        );

        const caret =
            document.createRange();

        caret.setStartAfter(
            textNode
        );

        caret.collapse(
            true
        );

        const selection =
            window.getSelection();

        selection.removeAllRanges();
        selection.addRange(
            caret
        );

        savedPhysicsRange =
            caret.cloneRange();

        el.physicsConstantsMenu.classList.add(
            "hidden"
        );

        physicsToolbarInteraction =
            false;

        schedulePhysicsSave();

        requestAnimationFrame(
            updatePhysicsFormulaContextFromSelection
        );
    }


    el.physicsFormulaMenu.addEventListener(
        "pointerdown",
        () => {
            // Keep the last editor selection/range alive while interacting
            // with the contextual formula toolbar. Do not prevent the
            // pointer event: on touch devices that can suppress the click.
            physicsToolbarInteraction =
                true;
        }
    );


    document.addEventListener(
        "pointerup",
        () => {
            setTimeout(
                () => {
                    physicsToolbarInteraction =
                        false;
                },
                0
            );
        }
    );


    el.physicsConstantsButton.addEventListener(
        "pointerdown",
        event => {
            physicsToolbarInteraction =
                true;

            event.stopPropagation();
        }
    );


    el.physicsConstantsButton.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            const willOpen =
                el.physicsConstantsMenu.classList.contains(
                    "hidden"
                );

            el.physicsConstantsMenu.classList.toggle(
                "hidden",
                !willOpen
            );

            el.physicsConstantsButton.setAttribute(
                "aria-expanded",
                willOpen
                    ? "true"
                    : "false"
            );
        }
    );


    document.querySelectorAll(
        ".physics-constant-item"
    ).forEach(
        button => {
            button.addEventListener(
                "pointerdown",
                event => {
                    physicsToolbarInteraction =
                        true;

                    event.stopPropagation();
                }
            );

            button.addEventListener(
                "click",
                event => {
                    event.preventDefault();
                    event.stopPropagation();

                    insertLatexAtPhysicsCaret(
                        button.dataset.latex
                        ??
                        ""
                    );

                    el.physicsConstantsButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        }
    );


    function formulaBlockForAlignment(
        formula
    ) {
        if (!formula) {
            return null;
        }

        if (
            [
                "rawToken",
                "renderedToken"
            ].includes(
                formula.kind
            )
            &&
            formula.token?.isConnected
        ) {
            let block =
                formula.token.closest(
                    "div, p"
                );

            if (
                block
                &&
                block
                !==
                el.physicsBody
            ) {
                return block;
            }

            block =
                document.createElement(
                    "div"
                );

            formula.token.parentNode.insertBefore(
                block,
                formula.token
            );

            block.appendChild(
                formula.token
            );

            return block;
        }

        if (
            formula.kind
            ===
            "rawText"
            &&
            formula.range
        ) {
            const range =
                formula.range.cloneRange();

            const common =
                range.commonAncestorContainer;

            const parent =
                common.nodeType
                ===
                Node.TEXT_NODE
                    ? common.parentElement
                    : common;

            const existing =
                parent?.closest?.(
                    "div, p"
                );

            if (
                existing
                &&
                existing
                !==
                el.physicsBody
                &&
                existing.textContent.trim()
                ===
                range.toString().trim()
            ) {
                return existing;
            }

            const block =
                document.createElement(
                    "div"
                );

            try {
                const content =
                    range.extractContents();

                block.appendChild(
                    content
                );

                range.insertNode(
                    block
                );

                return block;

            } catch (
                error
            ) {
                return null;
            }
        }

        return null;
    }


    function alignSelectedPhysicsFormula(
        alignment
    ) {
        if (
            ![
                "left",
                "center"
            ].includes(
                alignment
            )
        ) {
            return;
        }

        const block =
            formulaBlockForAlignment(
                selectedPhysicsFormula
            );

        if (!block) {
            return;
        }

        block.style.textAlign =
            alignment;

        schedulePhysicsSave();
    }


    el.physicsFormulaAlignLeftButton.addEventListener(
        "click",
        () => {
            alignSelectedPhysicsFormula(
                "left"
            );
        }
    );


    el.physicsFormulaAlignCenterButton.addEventListener(
        "click",
        () => {
            alignSelectedPhysicsFormula(
                "center"
            );
        }
    );


    el.physicsTitle.addEventListener(
        "input",
        schedulePhysicsSave
    );

    el.physicsBody.addEventListener(
        "input",
        () => {
            schedulePhysicsSave();

            requestAnimationFrame(
                () => {
                    tokenizeClosedPhysicsFormulas();

                    updatePhysicsFormulaContextFromSelection();
                }
            );
        }
    );


    el.physicsBody.addEventListener(
        "blur",
        () => {
            tokenizeClosedPhysicsFormulas();

            schedulePhysicsSave();
        }
    );

    el.physicsFolderSelect.addEventListener(
        "change",
        schedulePhysicsSave
    );


    el.backFromPhysicsEditor.addEventListener(
        "click",
        () => {
            saveCurrentPhysicsNote();

            const item =
                currentPhysicsNote();

            currentPhysicsFolderId =
                item?.parentId
                ??
                currentPhysicsFolderId;

            currentPhysicsNoteId =
                null;

            selectedPhysicsFormula =
                null;

            pendingPhysicsSolve =
                null;

            hidePhysicsFormulaMenu();
            closePhysicsSolver();

            renderPhysicsList();

            showScreen(
                screens.physicsList
            );
        }
    );


    el.deletePhysicsNoteButton.addEventListener(
        "click",
        () => {
            const item =
                currentPhysicsNote();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    "Physiknotiz löschen?"
                )
            ) {
                return;
            }

            const parentId =
                item.parentId;

            state.physics.entries =
                state.physics.entries.filter(
                    entry =>
                        entry.id
                        !==
                        item.id
                );

            saveState();

            currentPhysicsNoteId =
                null;

            currentPhysicsFolderId =
                parentId;

            selectedPhysicsFormula =
                null;

            closePhysicsSolver();

            renderPhysicsList();

            showScreen(
                screens.physicsList
            );
        }
    );




    document.addEventListener(
        "click",
        event => {
            if (
                !el.physicsConstantsMenu.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.physicsConstantsButton
            ) {
                el.physicsConstantsMenu.classList.add(
                    "hidden"
                );

                el.physicsConstantsButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }
    );

    // --------------------------------------------------
    // SOLVER
    // --------------------------------------------------

    function closePhysicsSolver() {
        el.physicsSolverPanel.classList.add(
            "hidden"
        );

        el.physicsVariablePicker.classList.add(
            "hidden"
        );

        el.physicsVariableButtons.innerHTML =
            "";

        el.physicsSolverSteps.innerHTML =
            "";

        el.physicsSolverError.textContent =
            "";

        pendingPhysicsSolve =
            null;

        acceptedPhysicsSolutionLatex =
            null;

        el.acceptPhysicsSolutionButton.classList.add(
            "hidden"
        );
    }


    el.closePhysicsSolverButton.addEventListener(
        "click",
        closePhysicsSolver
    );


    function solverAvailable() {
        return (
            typeof window.nerdamer
            !==
            "undefined"
        );
    }


    function buildSolverContext(
        latex
    ) {
        if (
            !solverAvailable()
        ) {
            throw new Error(
                "Solver nicht geladen."
            );
        }

        let expression =
            String(
                window.nerdamer.convertFromLaTeX(
                    latex
                )
            );

        const safeToDisplay =
            {};

        const explicitSymbols =
            String(
                latex
            )
            .replace(
                /\[A-Za-z]+/g,
                " "
            )
            .match(
                /[A-Za-z]/g
            )
            ??
            [];

        const hasUpperE =
            explicitSymbols.includes(
                "E"
            );

        const hasLowerE =
            explicitSymbols.includes(
                "e"
            );

        const hasI =
            explicitSymbols.includes(
                "i"
            );

        if (
            hasUpperE
        ) {
            expression =
                expression
                    .replace(
                        /E/g,
                        "ZZEnergy"
                    )
                    .replace(
                        /e/g,
                        "ZZEnergy"
                    );

            safeToDisplay.ZZEnergy =
                "E";
        }

        if (
            hasLowerE
            &&
            !hasUpperE
        ) {
            expression =
                expression.replace(
                    /e/g,
                    "ZZevar"
                );

            safeToDisplay.ZZevar =
                "e";
        }

        if (
            hasI
        ) {
            expression =
                expression.replace(
                    /i/g,
                    "ZZivar"
                );

            safeToDisplay.ZZivar =
                "i";
        }

        return {
            latex,
            expression,
            safeToDisplay
        };
    }


    function equationToZeroExpression(
        expression
    ) {
        const index =
            expression.indexOf(
                "="
            );

        if (
            index
            ===
            -1
        ) {
            return expression;
        }

        const left =
            expression.slice(
                0,
                index
            );

        const right =
            expression.slice(
                index + 1
            );

        return `(${left})-(${right})`;
    }


    function solverVariables(
        expression
    ) {
        try {
            return window.nerdamer(
                equationToZeroExpression(
                    expression
                )
            )
            .variables()
            .filter(
                variable =>
                    ![
                        "pi"
                    ].includes(
                        String(
                            variable
                        ).toLowerCase()
                    )
            );

        } catch (
            error
        ) {
            return [];
        }
    }


    function restoreSolverText(
        value,
        context
    ) {
        let result =
            String(
                value
            );

        Object.entries(
            context?.safeToDisplay
            ??
            {}
        ).forEach(
            (
                [
                    safe,
                    display
                ]
            ) => {
                result =
                    result.replace(
                        new RegExp(
                            `\b${safe}\b`,
                            "g"
                        ),
                        display
                    );
            }
        );

        return result;
    }


    function normalizeSolverLatexForKatex(
        value
    ) {
        return String(
            value
            ??
            ""
        )
        // TeX control words greedily consume following letters.
        // Nerdamer output joined as "\\qquad" + "x" became "\\qquadx".
        .replace(
            /\\qquad(?=[A-Za-z\\])/g,
            "\\qquad "
        )
        .replace(
            /\\quad(?=[A-Za-z\\])/g,
            "\\quad "
        )
        .replace(
            /\\,(?=[A-Za-z])/g,
            "\\, "
        );
    }


    function restoreSolverLatex(
        value,
        context
    ) {
        let result =
            String(
                value
            );

        Object.entries(
            context?.safeToDisplay
            ??
            {}
        ).forEach(
            (
                [
                    safe,
                    display
                ]
            ) => {
                result =
                    result
                        .replaceAll(
                            `\\mathrm{${safe}}`,
                            display
                        )
                        .replaceAll(
                            safe,
                            display
                        );
            }
        );

        return normalizeSolverLatexForKatex(
            result
        );
    }


    function toSolverLatex(
        expression,
        context = null
    ) {
        try {
            return restoreSolverLatex(
                window.nerdamer(
                    String(
                        expression
                    )
                )
                .toTeX(),
                context
            );

        } catch (
            error
        ) {
            return restoreSolverLatex(
                String(
                    expression
                ),
                context
            );
        }
    }


    function renderSolverMath(
        host,
        latex
    ) {
        const line =
            document.createElement(
                "div"
            );

        line.className =
            "solver-math";

        if (
            typeof window.katex
            !==
            "undefined"
        ) {
            try {
                window.katex.render(
                    normalizeSolverLatexForKatex(
                        latex
                    ),
                    line,
                    {
                        throwOnError:
                            false,
                        displayMode:
                            true,
                        strict:
                            "ignore"
                    }
                );

            } catch (
                error
            ) {
                line.textContent =
                    latex;
            }

        } else {
            line.textContent =
                latex;
        }

        host.appendChild(
            line
        );
    }


    function addSolverStep(
        label,
        latex,
        isResult = false
    ) {
        const step =
            document.createElement(
                "div"
            );

        step.className =
            "solver-step";

        if (
            isResult
        ) {
            step.classList.add(
                "solver-result"
            );
        }

        if (label) {
            const caption =
                document.createElement(
                    "div"
                );

            caption.className =
                "solver-step-caption";

            caption.textContent =
                label;

            step.appendChild(
                caption
            );
        }

        renderSolverMath(
            step,
            latex
        );

        el.physicsSolverSteps.appendChild(
            step
        );
    }


    function solveResults(
        expression,
        variable,
        context
    ) {
        const result =
            window.nerdamer.solveEquations(
                expression,
                variable
            );

        if (
            !Array.isArray(
                result
            )
        ) {
            return [];
        }

        return result.map(
            item => {
                const rawText =
                    item
                    &&
                    typeof item.toString
                    ===
                    "function"
                        ? item.toString()
                        : String(
                            item
                        );

                const rawLatex =
                    item
                    &&
                    typeof item.toTeX
                    ===
                    "function"
                        ? item.toTeX()
                        : toSolverLatex(
                            item,
                            context
                        );

                return {
                    text:
                        restoreSolverText(
                            rawText,
                            context
                        ),
                    latex:
                        restoreSolverLatex(
                            rawLatex,
                            context
                        )
                };
            }
        );
    }


    function polynomialDegree(
        zeroExpression,
        variable
    ) {
        try {
            const degree =
                Number(
                    window.nerdamer(
                        `deg(${zeroExpression},${variable})`
                    )
                    .evaluate()
                    .toString()
                );

            return Number.isFinite(
                degree
            )
                ? degree
                : null;

        } catch (
            error
        ) {
            return null;
        }
    }


    function polynomialCoefficient(
        zeroExpression,
        variable,
        power
    ) {
        return window.nerdamer(
            `vecget(coeffs(${zeroExpression},${variable}),${power})`
        )
        .toString();
    }


    function renderSolutionResult(
        variable,
        displayVariable,
        solutions
    ) {
        if (
            solutions.length
            ===
            0
        ) {
            acceptedPhysicsSolutionLatex =
                null;

            el.acceptPhysicsSolutionButton.classList.add(
                "hidden"
            );

            addSolverStep(
                "Ergebnis",
                `\\text{Keine Lösung gefunden}`,
                true
            );

            return;
        }

        const equations =
            solutions.map(
                solution =>
                    `${displayVariable}=${normalizeSolverLatexForKatex(solution.latex)}`
            );

        acceptedPhysicsSolutionLatex =
            equations.join(
                "\\qquad{}"
            );

        el.acceptPhysicsSolutionButton.classList.remove(
            "hidden"
        );

        equations.forEach(
            (
                equation,
                index
            ) => {
                addSolverStep(
                    solutions.length
                    ===
                    1
                        ? "Ergebnis"
                        : `Lösung ${index + 1}`,
                    `\\boxed{${equation}}`,
                    true
                );
            }
        );
    }


    function renderLinearSteps(
        zeroExpression,
        variable,
        displayVariable,
        solutions,
        context
    ) {
        try {
            const b =
                polynomialCoefficient(
                    zeroExpression,
                    variable,
                    0
                );

            const a =
                polynomialCoefficient(
                    zeroExpression,
                    variable,
                    1
                );

            const aTex =
                toSolverLatex(
                    a,
                    context
                );

            const bTex =
                toSolverLatex(
                    b,
                    context
                );

            addSolverStep(
                "Lineare Form",
                `${aTex}${displayVariable}+${bTex}=0`
            );

            addSolverStep(
                "Konstante verschieben",
                `${aTex}${displayVariable}=-\\left(${bTex}\\right)`
            );

            addSolverStep(
                `Durch den Koeffizienten von ${variable} teilen`,
                `${displayVariable}=\\frac{-\\left(${bTex}\\right)}{${aTex}}`
            );

        } catch (
            error
        ) {
            // Result below remains authoritative.
        }

        renderSolutionResult(
            variable,
            displayVariable,
            solutions
        );
    }


    function renderQuadraticSteps(
        zeroExpression,
        variable,
        displayVariable,
        solutions,
        context
    ) {
        try {
            const c =
                polynomialCoefficient(
                    zeroExpression,
                    variable,
                    0
                );

            const b =
                polynomialCoefficient(
                    zeroExpression,
                    variable,
                    1
                );

            const a =
                polynomialCoefficient(
                    zeroExpression,
                    variable,
                    2
                );

            const factorized =
                window.nerdamer.factor(
                    zeroExpression
                )
                .toString();

            const simplifiedZero =
                window.nerdamer(
                    zeroExpression
                )
                .toString();

            if (
                factorized
                !==
                simplifiedZero
            ) {
                addSolverStep(
                    "Faktorisieren",
                    `${toSolverLatex(factorized, context)}=0`
                );

                addSolverStep(
                    "Nullprodukt",
                    `\\text{Jeder Faktor kann gleich }0\\text{ sein}`
                );

                renderSolutionResult(
                    variable,
                    displayVariable,
                    solutions
                );

                return;
            }

            const aTex =
                toSolverLatex(
                    a,
                    context
                );

            const bTex =
                toSolverLatex(
                    b,
                    context
                );

            const cTex =
                toSolverLatex(
                    c,
                    context
                );

            const delta =
                window.nerdamer(
                    `(${b})^2-4*(${a})*(${c})`
                )
                .toString();

            const deltaTex =
                toSolverLatex(
                    delta,
                    context
                );

            addSolverStep(
                "Koeffizienten",
                `a=${aTex},\\qquad b=${bTex},\\qquad c=${cTex}`
            );

            addSolverStep(
                "Diskriminante",
                `\\Delta=b^2-4ac=${deltaTex}`
            );

            addSolverStep(
                "Quadratische Formel",
                `${displayVariable}=\\frac{-b\\pm\\sqrt{\\Delta}}{2a}`
            );

            addSolverStep(
                "Einsetzen",
                `${displayVariable}=\\frac{-\\left(${bTex}\\right)\\pm\\sqrt{${deltaTex}}}{2\\left(${aTex}\\right)}`
            );

        } catch (
            error
        ) {
            // Result below remains authoritative.
        }

        renderSolutionResult(
            variable,
            displayVariable,
            solutions
        );
    }


    function solvePhysicsForVariable(
        context,
        variable
    ) {
        const latex =
            context.latex;

        const expression =
            context.expression;

        const displayVariable =
            context.safeToDisplay[
                variable
            ]
            ??
            variable;

        el.physicsVariablePicker.classList.add(
            "hidden"
        );

        el.physicsSolverSteps.innerHTML =
            "";

        el.physicsSolverError.textContent =
            "";

        acceptedPhysicsSolutionLatex =
            null;

        el.acceptPhysicsSolutionButton.classList.add(
            "hidden"
        );

        try {
            const originalLatex =
                expression.includes(
                    "="
                )
                    ? latex
                    : `${latex}=0`;

            addSolverStep(
                "Ausgang",
                originalLatex
            );

            const zeroExpression =
                equationToZeroExpression(
                    expression
                );

            const solutions =
                solveResults(
                    expression,
                    variable,
                    context
                );

            const variables =
                solverVariables(
                    expression
                );

            const degree =
                variables.length
                ===
                1
                    ? polynomialDegree(
                        zeroExpression,
                        variable
                    )
                    : null;

            if (
                degree
                ===
                1
            ) {
                renderLinearSteps(
                    zeroExpression,
                    variable,
                    displayVariable,
                    solutions,
                    context
                );

                return;
            }

            if (
                degree
                ===
                2
            ) {
                renderQuadraticSteps(
                    zeroExpression,
                    variable,
                    displayVariable,
                    solutions,
                    context
                );

                return;
            }

            if (
                solutions.length
                >
                0
            ) {
                if (
                    solutions.length
                    ===
                    1
                ) {
                    addSolverStep(
                        `Nach ${displayVariable} umstellen`,
                        `${displayVariable}=${solutions[0].latex}`
                    );
                }

                renderSolutionResult(
                    variable,
                    displayVariable,
                    solutions
                );

                return;
            }

            renderSolutionResult(
                variable,
                displayVariable,
                solutions
            );

        } catch (
            error
        ) {
            el.physicsSolverError.textContent =
                "Diese Formel konnte nicht symbolisch umgestellt werden.";
        }
    }


    function solverExact(
        expression
    ) {
        try {
            return window.nerdamer(
                `simplify(${expression})`
            )
            .toString();

        } catch (
            error
        ) {
            return window.nerdamer(
                expression
            )
            .toString();
        }
    }


    function latexFragmentToSolver(
        latex
    ) {
        return String(
            window.nerdamer.convertFromLaTeX(
                normalizePhysicsLatex(
                    latex
                )
            )
        );
    }


    function parseLatexIntegral(
        latex
    ) {
        const normalized =
            normalizePhysicsLatex(
                latex
            );

        const match =
            normalized.match(
                /^\\int(?:_\{([^{}]+)\}|_([^\s^]+))?(?:\^\{([^{}]+)\}|\^([^\s]+))?\s*([\s\S]*?)\s*(?:\\,|\\;|\\!|\\quad|\s)*d\s*([A-Za-z])\s*$/
            );

        if (!match) {
            return null;
        }

        return {
            lower:
                match[1]
                ??
                match[2]
                ??
                null,
            upper:
                match[3]
                ??
                match[4]
                ??
                null,
            integrand:
                match[5]
                    .trim(),
            variable:
                match[6]
        };
    }


    function parseLatexDerivative(
        latex
    ) {
        const normalized =
            normalizePhysicsLatex(
                latex
            );

        let match =
            normalized.match(
                /^\\frac\{d\}\{d\s*([A-Za-z])\}\s*([\s\S]+)$/
            );

        if (match) {
            return {
                variable:
                    match[1],
                order:
                    1,
                expression:
                    match[2]
                        .trim()
            };
        }

        match =
            normalized.match(
                /^\\frac\{\\partial\}\{\\partial\s*([A-Za-z])\}\s*([\s\S]+)$/
            );

        if (match) {
            return {
                variable:
                    match[1],
                order:
                    1,
                expression:
                    match[2]
                        .trim()
            };
        }

        match =
            normalized.match(
                /^\\frac\{d\^\{?(\d+)\}?\}\{d\s*([A-Za-z])\^\{?(\d+)\}?\}\s*([\s\S]+)$/
            );

        if (
            match
            &&
            match[1]
            ===
            match[3]
        ) {
            return {
                variable:
                    match[2],
                order:
                    Number(
                        match[1]
                    ),
                expression:
                    match[4]
                        .trim()
            };
        }

        return null;
    }


    function parseLatexLimit(
        latex
    ) {
        const normalized =
            normalizePhysicsLatex(
                latex
            );

        const match =
            normalized.match(
                /^\\lim_\{([A-Za-z])\\to\s*([^{}]+)\}\s*([\s\S]+)$/
            );

        if (!match) {
            return null;
        }

        return {
            variable:
                match[1],
            target:
                match[2]
                    .trim(),
            expression:
                match[3]
                    .trim()
        };
    }


    function solvePhysicsIntegral(
        formula,
        integral
    ) {
        el.physicsVariablePicker.classList.add(
            "hidden"
        );

        el.physicsSolverSteps.innerHTML =
            "";

        el.physicsSolverError.textContent =
            "";

        acceptedPhysicsSolutionLatex =
            null;

        el.acceptPhysicsSolutionButton.classList.add(
            "hidden"
        );

        try {
            addSolverStep(
                "Ausgang",
                normalizePhysicsLatex(
                    formula.latex
                )
            );

            const integrand =
                latexFragmentToSolver(
                    integral.integrand
                );

            const anti =
                window.nerdamer(
                    `integrate(${integrand},${integral.variable})`
                )
                .toString();

            const antiLatex =
                toSolverLatex(
                    anti
                );

            addSolverStep(
                "Stammfunktion",
                `F(${integral.variable})=${antiLatex}`
            );

            if (
                integral.lower
                !==
                null
                &&
                integral.upper
                !==
                null
            ) {
                const lower =
                    latexFragmentToSolver(
                        integral.lower
                    );

                const upper =
                    latexFragmentToSolver(
                        integral.upper
                    );

                const upperValue =
                    window.nerdamer(
                        anti
                    )
                    .sub(
                        integral.variable,
                        upper
                    )
                    .toString();

                const lowerValue =
                    window.nerdamer(
                        anti
                    )
                    .sub(
                        integral.variable,
                        lower
                    )
                    .toString();

                addSolverStep(
                    "Grenzen einsetzen",
                    `${antiLatex}\\Big|_{${normalizePhysicsLatex(integral.lower)}}^{${normalizePhysicsLatex(integral.upper)}}`
                );

                const result =
                    solverExact(
                        `(${upperValue})-(${lowerValue})`
                    );

                const resultLatex =
                    toSolverLatex(
                        result
                    );

                acceptedPhysicsSolutionLatex =
                    resultLatex;

                el.acceptPhysicsSolutionButton.classList.remove(
                    "hidden"
                );

                addSolverStep(
                    "Ergebnis",
                    `\\boxed{${resultLatex}}`,
                    true
                );

                return;
            }

            const resultLatex =
                `${antiLatex}+C`;

            acceptedPhysicsSolutionLatex =
                resultLatex;

            el.acceptPhysicsSolutionButton.classList.remove(
                "hidden"
            );

            addSolverStep(
                "Ergebnis",
                `\\boxed{${resultLatex}}`,
                true
            );

        } catch (
            error
        ) {
            el.physicsSolverError.textContent =
                "Dieses Integral konnte nicht symbolisch ausgewertet werden.";
        }
    }


    function solvePhysicsDerivative(
        formula,
        derivative
    ) {
        el.physicsVariablePicker.classList.add(
            "hidden"
        );

        el.physicsSolverSteps.innerHTML =
            "";

        el.physicsSolverError.textContent =
            "";

        acceptedPhysicsSolutionLatex =
            null;

        el.acceptPhysicsSolutionButton.classList.add(
            "hidden"
        );

        try {
            addSolverStep(
                "Ausgang",
                normalizePhysicsLatex(
                    formula.latex
                )
            );

            const expression =
                latexFragmentToSolver(
                    derivative.expression
                );

            const result =
                derivative.order
                ===
                1
                    ? window.nerdamer(
                        `diff(${expression},${derivative.variable})`
                    )
                    .toString()
                    : window.nerdamer(
                        `diff(${expression},${derivative.variable},${derivative.order})`
                    )
                    .toString();

            const resultLatex =
                toSolverLatex(
                    result
                );

            addSolverStep(
                derivative.order
                ===
                1
                    ? "Ableiten"
                    : `${derivative.order}. Ableitung`,
                resultLatex
            );

            acceptedPhysicsSolutionLatex =
                resultLatex;

            el.acceptPhysicsSolutionButton.classList.remove(
                "hidden"
            );

            addSolverStep(
                "Ergebnis",
                `\\boxed{${resultLatex}}`,
                true
            );

        } catch (
            error
        ) {
            el.physicsSolverError.textContent =
                "Diese Ableitung konnte nicht symbolisch ausgewertet werden.";
        }
    }


    function solvePhysicsLimit(
        formula,
        limitData
    ) {
        el.physicsVariablePicker.classList.add(
            "hidden"
        );

        el.physicsSolverSteps.innerHTML =
            "";

        el.physicsSolverError.textContent =
            "";

        acceptedPhysicsSolutionLatex =
            null;

        el.acceptPhysicsSolutionButton.classList.add(
            "hidden"
        );

        try {
            addSolverStep(
                "Ausgang",
                normalizePhysicsLatex(
                    formula.latex
                )
            );

            const expression =
                latexFragmentToSolver(
                    limitData.expression
                );

            const target =
                latexFragmentToSolver(
                    limitData.target
                );

            const result =
                window.nerdamer(
                    `limit(${expression},${limitData.variable},${target})`
                )
                .toString();

            const resultLatex =
                toSolverLatex(
                    result
                );

            acceptedPhysicsSolutionLatex =
                resultLatex;

            el.acceptPhysicsSolutionButton.classList.remove(
                "hidden"
            );

            addSolverStep(
                "Ergebnis",
                `\\boxed{${resultLatex}}`,
                true
            );

        } catch (
            error
        ) {
            el.physicsSolverError.textContent =
                "Dieser Grenzwert konnte nicht symbolisch ausgewertet werden.";
        }
    }


    function topLevelPhysicsNode(
        node
    ) {
        if (!node) {
            return null;
        }

        let current =
            node;

        while (
            current
            &&
            current.parentNode
            &&
            current.parentNode
            !==
            el.physicsBody
        ) {
            current =
                current.parentNode;
        }

        if (
            current
            &&
            current.parentNode
            ===
            el.physicsBody
        ) {
            return current;
        }

        return null;
    }


    function capturePhysicsFormulaAnchor(
        formula
    ) {
        if (!formula) {
            return null;
        }

        if (
            [
                "rawToken",
                "renderedToken"
            ].includes(
                formula.kind
            )
            &&
            formula.token?.isConnected
        ) {
            const block =
                formula.token.closest(
                    "div, p"
                );

            if (
                block
                &&
                el.physicsBody.contains(
                    block
                )
            ) {
                return (
                    topLevelPhysicsNode(
                        block
                    )
                    ??
                    block
                );
            }

            return (
                topLevelPhysicsNode(
                    formula.token
                )
                ??
                formula.token
            );
        }

        if (
            formula.kind
            ===
            "rawText"
            &&
            formula.range
        ) {
            const startNode =
                formula.range.startContainer;

            const parent =
                startNode.nodeType
                ===
                Node.TEXT_NODE
                    ? startNode.parentElement
                    : startNode;

            const block =
                parent?.closest?.(
                    "div, p"
                );

            if (
                block
                &&
                el.physicsBody.contains(
                    block
                )
            ) {
                return (
                    topLevelPhysicsNode(
                        block
                    )
                    ??
                    block
                );
            }

            return (
                topLevelPhysicsNode(
                    startNode
                )
                ??
                startNode
            );
        }

        return null;
    }


    function solvePhysicsFormula(
        formula
    ) {
        if (
            !formula
            ||
            !formula.latex
        ) {
            return;
        }

        hidePhysicsFormulaMenu();

        el.physicsSolverPanel.classList.remove(
            "hidden"
        );

        el.physicsSolverSteps.innerHTML =
            "";

        el.physicsVariableButtons.innerHTML =
            "";

        el.physicsSolverError.textContent =
            "";

        acceptedPhysicsSolutionLatex =
            null;

        el.acceptPhysicsSolutionButton.classList.add(
            "hidden"
        );

        if (
            !solverAvailable()
        ) {
            el.physicsSolverError.textContent =
                "Der Solver konnte nicht geladen werden. Für den Solver wird eine Internetverbindung benötigt.";

            return;
        }

        const normalizedLatex =
            normalizePhysicsLatex(
                formula.latex
            );

        const sourceAnchor =
            capturePhysicsFormulaAnchor(
                formula
            );

        const integral =
            parseLatexIntegral(
                normalizedLatex
            );

        if (integral) {
            pendingPhysicsSolve = {
                formula,
                sourceAnchor,
                operation:
                    "integral"
            };

            solvePhysicsIntegral(
                formula,
                integral
            );

            return;
        }

        const derivative =
            parseLatexDerivative(
                normalizedLatex
            );

        if (derivative) {
            pendingPhysicsSolve = {
                formula,
                sourceAnchor,
                operation:
                    "derivative"
            };

            solvePhysicsDerivative(
                formula,
                derivative
            );

            return;
        }

        const limitData =
            parseLatexLimit(
                normalizedLatex
            );

        if (limitData) {
            pendingPhysicsSolve = {
                formula,
                sourceAnchor,
                operation:
                    "limit"
            };

            solvePhysicsLimit(
                formula,
                limitData
            );

            return;
        }

        try {
            const context =
                buildSolverContext(
                    normalizedLatex
                );

            const variables =
                solverVariables(
                    context.expression
                );

            context.variables =
                variables;

            context.formula =
                formula;

            context.sourceAnchor =
                sourceAnchor;

            pendingPhysicsSolve =
                context;

            if (
                variables.length
                ===
                0
            ) {
                el.physicsVariablePicker.classList.add(
                    "hidden"
                );

                addSolverStep(
                    "Ausgang",
                    normalizedLatex
                );

                const evaluated =
                    solverExact(
                        context.expression
                    );

                const resultLatex =
                    toSolverLatex(
                        evaluated,
                        context
                    );

                acceptedPhysicsSolutionLatex =
                    resultLatex;

                el.acceptPhysicsSolutionButton.classList.remove(
                    "hidden"
                );

                addSolverStep(
                    "Ergebnis",
                    `\\boxed{${resultLatex}}`,
                    true
                );

                return;
            }

            if (
                variables.length
                ===
                1
            ) {
                solvePhysicsForVariable(
                    context,
                    variables[0]
                );

                return;
            }

            el.physicsVariablePicker.classList.remove(
                "hidden"
            );

            variables.forEach(
                variable => {
                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type =
                        "button";

                    button.className =
                        "variable-button";

                    const display =
                        context.safeToDisplay[
                            variable
                        ]
                        ??
                        variable;

                    button.textContent =
                        display;

                    button.addEventListener(
                        "click",
                        () => {
                            solvePhysicsForVariable(
                                context,
                                variable
                            );
                        }
                    );

                    el.physicsVariableButtons.appendChild(
                        button
                    );
                }
            );

        } catch (
            error
        ) {
            el.physicsSolverError.textContent =
                "Diese Formel konnte vom symbolischen Solver nicht gelesen werden.";
        }
    }


    function insertPhysicsSolutionBelowFormula() {
        if (
            !acceptedPhysicsSolutionLatex
            ||
            !pendingPhysicsSolve?.formula
        ) {
            return;
        }

        const sourceAnchor =
            pendingPhysicsSolve.sourceAnchor;

        const normalizedResult =
            normalizeSolverLatexForKatex(
                acceptedPhysicsSolutionLatex
            );

        let insertionParent =
            null;

        let insertionReference =
            null;

        if (
            sourceAnchor
            &&
            sourceAnchor.isConnected
        ) {
            if (
                sourceAnchor.parentNode
                ===
                el.physicsBody
            ) {
                insertionParent =
                    el.physicsBody;

                insertionReference =
                    sourceAnchor.nextSibling;

            } else {
                const topLevel =
                    topLevelPhysicsNode(
                        sourceAnchor
                    );

                if (
                    topLevel
                    &&
                    topLevel.parentNode
                    ===
                    el.physicsBody
                ) {
                    insertionParent =
                        el.physicsBody;

                    insertionReference =
                        topLevel.nextSibling;
                }
            }
        }

        if (!insertionParent) {
            insertionParent =
                el.physicsBody;

            insertionReference =
                null;
        }

        // Avoid inserting the identical solver result twice.
        const previousResult =
            insertionReference?.previousSibling;

        if (
            previousResult
            &&
            previousResult.nodeType
            ===
            Node.ELEMENT_NODE
            &&
            previousResult.dataset?.physicsSolverResult
            ===
            normalizedResult
        ) {
            closePhysicsSolver();

            return;
        }

        const line =
            document.createElement(
                "div"
            );

        line.className =
            "physics-solver-result-line";

        line.dataset.physicsSolverResult =
            normalizedResult;

        if (
            sourceAnchor
            &&
            sourceAnchor.nodeType
            ===
            Node.ELEMENT_NODE
        ) {
            const sourceAlign =
                sourceAnchor.style?.textAlign
                ||
                "";

            if (
                sourceAlign
                ===
                "center"
                ||
                sourceAlign
                ===
                "left"
            ) {
                line.style.textAlign =
                    sourceAlign;
            }
        }

        const token =
            createPhysicsFormulaToken(
                normalizedResult,
                "raw"
            );

        line.appendChild(
            token
        );

        insertionParent.insertBefore(
            line,
            insertionReference
        );

        const range =
            document.createRange();

        range.setStartAfter(
            token
        );

        range.collapse(
            true
        );

        const selection =
            window.getSelection();

        selection.removeAllRanges();

        selection.addRange(
            range
        );

        savedPhysicsRange =
            range.cloneRange();

        closePhysicsSolver();

        el.physicsBody.focus();

        schedulePhysicsSave();

        showPhysicsFormulaMenu({
            kind:
                "rawToken",
            token,
            latex:
                normalizedResult
        });
    }


    el.acceptPhysicsSolutionButton.addEventListener(
        "click",
        insertPhysicsSolutionBelowFormula
    );

    el.solvePhysicsFormulaButton.addEventListener(
        "click",
        () => {
            solvePhysicsFormula(
                selectedPhysicsFormula
            );
        }
    );

    // ==================================================
    // GEDANKEN — ORDNER + RICH TEXT
    // ==================================================

    function thoughtEntries() {
        return currentRichKind
        ===
        "notes"
            ? state.notes
            : state.thoughts;
    }


    function setThoughtEntries(
        entries
    ) {
        if (
            currentRichKind
            ===
            "notes"
        ) {
            state.notes =
                entries;

        } else {
            state.thoughts =
                entries;
        }
    }


    function thoughtCategoryLabel() {
        return currentRichKind
        ===
        "notes"
            ? "Notizen"
            : "Philosophie";
    }


    function updateThoughtCategoryUi() {
        const kind =
            currentRichKind
            ===
            "notes"
                ? "notes"
                : "thoughts";

        el.thoughtCategoryIcon.dataset.categoryIcon =
            kind;

        el.thoughtCategoryIcon.setAttribute(
            "aria-label",
            `${thoughtCategoryLabel()} sortieren`
        );

        el.thoughtCategoryIcon.className =
            `category-center-icon category-sort-trigger category-icon-${kind}`;

        el.thoughtCategoryIcon.innerHTML =
            categoryIconSvg(
                kind
            );

        el.thoughtEmpty.textContent =
            currentRichKind
            ===
            "notes"
                ? "Noch keine Notizen."
                : "Noch keine Philosophie-Einträge.";

        el.thoughtEditorHeading.textContent =
            currentRichKind
            ===
            "notes"
                ? "Notiz"
                : "Philosophie";
    }


    function getThoughtEntry(id) {
        return (
            thoughtEntries().find(
                item =>
                    item.id
                    ===
                    id
            )
            ??
            null
        );
    }


    function thoughtChildren(
        parentId
    ) {
        return thoughtEntries()
            .filter(
                item =>
                    item.parentId
                    ===
                    parentId
            );
    }


    function thoughtPath(
        folderId
    ) {
        const path = [];
        let currentId =
            folderId;

        const seen =
            new Set();

        while (currentId) {
            if (
                seen.has(
                    currentId
                )
            ) {
                break;
            }

            seen.add(
                currentId
            );

            const folder =
                getThoughtEntry(
                    currentId
                );

            if (
                !folder
                ||
                folder.type
                !==
                "folder"
            ) {
                break;
            }

            path.unshift(
                folder
            );

            currentId =
                folder.parentId;
        }

        return path;
    }


    function thoughtFolderDisplayPath(
        folder
    ) {
        return thoughtPath(
            folder.id
        )
        .map(
            item =>
                item.title
        )
        .join(
            " › "
        );
    }


    function renderThoughtBreadcrumbs() {
        el.thoughtBreadcrumbs.innerHTML =
            "";

        const root =
            document.createElement(
                "button"
            );

        root.type =
            "button";

        root.className =
            "breadcrumb-button";

        root.textContent =
            thoughtCategoryLabel();

        root.addEventListener(
            "click",
            () => {
                currentThoughtFolderId =
                    null;

                renderThoughtList();
            }
        );

        el.thoughtBreadcrumbs.appendChild(
            root
        );

        thoughtPath(
            currentThoughtFolderId
        ).forEach(
            folder => {
                const separator =
                    document.createElement(
                        "span"
                    );

                separator.className =
                    "breadcrumb-separator";

                separator.textContent =
                    "›";

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "breadcrumb-button";

                button.textContent =
                    folder.title;

                button.addEventListener(
                    "click",
                    () => {
                        currentThoughtFolderId =
                            folder.id;

                        renderThoughtList();
                    }
                );

                el.thoughtBreadcrumbs.append(
                    separator,
                    button
                );
            }
        );
    }


    function stripRichText(html) {
        const element =
            document.createElement(
                "div"
            );

        element.innerHTML =
            sanitizeRichHtml(
                html
            );

        return (
            element.textContent
            ??
            ""
        ).trim();
    }


    function normalizeThoughtSiblingOrder(
        parentId
    ) {
        const siblings =
            thoughtChildren(
                parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        a.order
                        ??
                        0
                    )
                    -
                    Number(
                        b.order
                        ??
                        0
                    )
            );

        siblings.forEach(
            (
                item,
                index
            ) => {
                item.order =
                    index;
            }
        );
    }


    function nextThoughtOrder(
        parentId
    ) {
        const siblings =
            thoughtChildren(
                parentId
            );

        if (
            siblings.length
            ===
            0
        ) {
            return 0;
        }

        return (
            Math.max(
                ...siblings.map(
                    item =>
                        Number(
                            item.order
                            ??
                            0
                        )
                )
            )
            +
            1
        );
    }


    function moveThoughtEntry(
        id,
        direction
    ) {
        const item =
            getThoughtEntry(
                id
            );

        if (!item) {
            return;
        }

        normalizeThoughtSiblingOrder(
            item.parentId
        );

        const siblings =
            thoughtChildren(
                item.parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    a.order
                    -
                    b.order
            );

        const index =
            siblings.findIndex(
                entry =>
                    entry.id
                    ===
                    id
            );

        const targetIndex =
            index
            +
            direction;

        if (
            targetIndex < 0
            ||
            targetIndex
            >=
            siblings.length
        ) {
            return;
        }

        const target =
            siblings[
                targetIndex
            ];

        const oldOrder =
            item.order;

        item.order =
            target.order;

        target.order =
            oldOrder;

        saveState();
        renderThoughtList();
    }


    function renderThoughtList() {
        renderThoughtBreadcrumbs();

        el.thoughtList.innerHTML =
            "";

        const mode =
            el.thoughtSortSelect.value;

        const items =
            [...thoughtChildren(
                currentThoughtFolderId
            )]
            .sort(
                (
                    a,
                    b
                ) => {
                    if (
                        mode
                        ===
                        "title"
                    ) {
                        return a.title.localeCompare(
                            b.title,
                            "de"
                        );
                    }

                    if (
                        mode
                        ===
                        "updatedDesc"
                        ||
                        mode
                        ===
                        "updatedAsc"
                    ) {
                        const delta =
                            new Date(
                                b.updatedAt
                            ).getTime()
                            -
                            new Date(
                                a.updatedAt
                            ).getTime();

                        return mode
                        ===
                        "updatedDesc"
                            ? delta
                            : -delta;
                    }

                    return (
                        Number(
                            a.order
                            ??
                            0
                        )
                        -
                        Number(
                            b.order
                            ??
                            0
                        )
                    );
                }
            );

        const manual =
            mode
            ===
            "manual";

        el.thoughtEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "text-row";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    row.classList.add(
                        "folder-row"
                    );
                }

                const main =
                    document.createElement(
                        "button"
                    );

                main.type =
                    "button";

                main.className =
                    "row-main-button";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "row-title";

                title.textContent =
                    item.title.trim()
                    ||
                    (
                        item.type
                        ===
                        "folder"
                            ? "Ordner"
                            : "Ohne Titel"
                    );

                const subtitle =
                    document.createElement(
                        "div"
                    );

                subtitle.className =
                    "row-subtitle";

                if (
                    item.type
                    !==
                    "folder"
                ) {
                    const preview =
                        stripRichText(
                            item.bodyHtml
                        );

                    subtitle.textContent =
                        preview
                            ? `${formatDate(item.updatedAt)} · ${preview}`
                            : formatDate(
                                item.updatedAt
                            );
                }

                main.appendChild(
                    title
                );

                if (
                    item.type
                    !==
                    "folder"
                ) {
                    main.appendChild(
                        subtitle
                    );
                }

                main.addEventListener(
                    "click",
                    () => {
                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            currentThoughtFolderId =
                                item.id;

                            renderThoughtList();

                        } else {
                            openThoughtEditor(
                                item.id
                            );
                        }
                    }
                );

                row.appendChild(
                    main
                );

                if (
                    manual
                ) {
                                    const controls =
                                        document.createElement(
                                            "div"
                                        );

                                    controls.className =
                                        "library-move-controls";

                                    const up =
                                        document.createElement(
                                            "button"
                                        );

                                    up.type =
                                        "button";

                                    up.textContent =
                                        "↑";

                                    up.disabled =
                                        index === 0;

                                    up.addEventListener(
                                        "click",
                                        () => {
                                            moveThoughtEntry(
                                                item.id,
                                                -1
                                            );
                                        }
                                    );

                                    const down =
                                        document.createElement(
                                            "button"
                                        );

                                    down.type =
                                        "button";

                                    down.textContent =
                                        "↓";

                                    down.disabled =
                                        index
                                        ===
                                        items.length
                                        -
                                        1;

                                    down.addEventListener(
                                        "click",
                                        () => {
                                            moveThoughtEntry(
                                                item.id,
                                                1
                                            );
                                        }
                                    );

                                    controls.append(
                                        up,
                                        down
                                    );

                                    row.appendChild(
                                        controls
                                    );

                }

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    const more =
                        document.createElement(
                            "button"
                        );

                    more.type =
                        "button";

                    more.className =
                        "library-more-button";

                    more.textContent =
                        "···";

                    more.addEventListener(
                        "click",
                        () => {
                            openThoughtFolderEditor(
                                item.id
                            );
                        }
                    );

                    row.appendChild(
                        more
                    );
                }

                el.thoughtList.appendChild(
                    row
                );
            }
        );
    }


    el.thoughtCategoryIcon.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.thoughtSortPanel.classList.toggle(
                "hidden"
            );
        }
    );


    el.thoughtSortSelect.addEventListener(
        "change",
        () => {
            el.thoughtSortPanel.classList.add(
                "hidden"
            );

            renderThoughtList();
        }
    );


    el.backFromThoughtList.addEventListener(
        "click",
        () => {
            if (
                currentThoughtFolderId
            ) {
                const folder =
                    getThoughtEntry(
                        currentThoughtFolderId
                    );

                currentThoughtFolderId =
                    folder?.parentId
                    ??
                    null;

                renderThoughtList();
                return;
            }

            showScreen(
                screens.textsHub
            );
        }
    );


    el.addThoughtButton.addEventListener(
        "click",
        () => {
            const item = {
                id: createId(),
                type: "thought",
                parentId:
                    currentThoughtFolderId,
                title: "",
                bodyHtml: "",
                order:
                    nextThoughtOrder(
                        currentThoughtFolderId
                    ),
                createdAt:
                    nowIso(),
                updatedAt:
                    nowIso()
            };

            thoughtEntries().push(
                item
            );

            saveState();

            openThoughtEditor(
                item.id
            );
        }
    );


    // --------------------------------------------------
    // GEDANKEN-ORDNER
    // --------------------------------------------------

    el.addThoughtFolderButton.addEventListener(
        "click",
        () => {
            currentThoughtFolderEditId =
                null;

            el.thoughtFolderName.value =
                "";

            setError(
                el.thoughtFolderError
            );

            el.deleteThoughtFolderButton.style.display =
                "none";

            showScreen(
                screens.thoughtFolderEditor
            );

            setTimeout(
                () => {
                    el.thoughtFolderName.focus();
                },
                0
            );
        }
    );


    function openThoughtFolderEditor(
        id
    ) {
        const folder =
            getThoughtEntry(
                id
            );

        if (
            !folder
            ||
            folder.type
            !==
            "folder"
        ) {
            return;
        }

        currentThoughtFolderEditId =
            id;

        el.thoughtFolderName.value =
            folder.title;

        setError(
            el.thoughtFolderError
        );

        el.deleteThoughtFolderButton.style.display =
            "block";

        showScreen(
            screens.thoughtFolderEditor
        );
    }


    el.backFromThoughtFolderEditor.addEventListener(
        "click",
        () => {
            currentThoughtFolderEditId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.saveThoughtFolderButton.addEventListener(
        "click",
        () => {
            const name =
                el.thoughtFolderName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.thoughtFolderError,
                    "Name fehlt."
                );

                return;
            }

            if (
                currentThoughtFolderEditId
            ) {
                const folder =
                    getThoughtEntry(
                        currentThoughtFolderEditId
                    );

                if (!folder) {
                    return;
                }

                folder.title =
                    name;

                folder.updatedAt =
                    nowIso();

            } else {
                thoughtEntries().push({
                    id: createId(),
                    type: "folder",
                    parentId:
                        currentThoughtFolderId,
                    title: name,
                    bodyHtml: "",
                    order:
                        nextThoughtOrder(
                            currentThoughtFolderId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentThoughtFolderEditId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    function collectThoughtDescendantIds(
        folderId
    ) {
        const found =
            new Set();

        const processed =
            new Set();

        const queue =
            [folderId];

        while (
            queue.length
        ) {
            const current =
                queue.shift();

            if (
                processed.has(
                    current
                )
            ) {
                continue;
            }

            processed.add(
                current
            );

            found.add(
                current
            );

            thoughtEntries()
                .filter(
                    item =>
                        item.parentId
                        ===
                        current
                )
                .forEach(
                    item => {
                        found.add(
                            item.id
                        );

                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            queue.push(
                                item.id
                            );
                        }
                    }
                );
        }

        return found;
    }


    el.deleteThoughtFolderButton.addEventListener(
        "click",
        () => {
            if (
                !currentThoughtFolderEditId
            ) {
                return;
            }

            if (
                !window.confirm(
                    `${thoughtCategoryLabel()}-Ordner und alle enthaltenen Einträge löschen?`
                )
            ) {
                return;
            }

            const ids =
                collectThoughtDescendantIds(
                    currentThoughtFolderEditId
                );

            setThoughtEntries(
                thoughtEntries().filter(
                    item =>
                        !ids.has(
                            item.id
                        )
                )
            );

            saveState();

            if (
                ids.has(
                    currentThoughtFolderId
                )
            ) {
                currentThoughtFolderId =
                    null;
            }

            currentThoughtFolderEditId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    // --------------------------------------------------
    // GEDANKEN-EDITOR
    // --------------------------------------------------

    function thoughtFolders() {
        return thoughtEntries()
            .filter(
                item =>
                    item.type
                    ===
                    "folder"
            );
    }


    function renderThoughtFolderOptions(
        selectedId
    ) {
        el.thoughtFolderSelect.innerHTML =
            "";

        const root =
            document.createElement(
                "option"
            );

        root.value =
            "";

        root.textContent =
            "Ohne Ordner";

        el.thoughtFolderSelect.appendChild(
            root
        );

        thoughtFolders()
            .sort(
                (
                    a,
                    b
                ) =>
                    thoughtFolderDisplayPath(a)
                        .localeCompare(
                            thoughtFolderDisplayPath(b),
                            "de"
                        )
            )
            .forEach(
                folder => {
                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        folder.id;

                    option.textContent =
                        thoughtFolderDisplayPath(
                            folder
                        );

                    el.thoughtFolderSelect.appendChild(
                        option
                    );
                }
            );

        el.thoughtFolderSelect.value =
            selectedId
            ??
            "";
    }


    function openThoughtEditor(
        id
    ) {
        const item =
            getThoughtEntry(
                id
            );

        if (
            !item
            ||
            item.type
            !==
            "thought"
        ) {
            return;
        }

        currentThoughtId =
            id;

        updateThoughtCategoryUi();

        el.thoughtTitle.value =
            item.title;

        el.thoughtBody.innerHTML =
            sanitizeRichHtml(
                item.bodyHtml
            );

        renderThoughtFolderOptions(
            item.parentId
        );

        el.thoughtSaveState.textContent =
            "Gespeichert";

        el.thoughtToolsMenu.classList.add(
            "hidden"
        );

        showScreen(
            screens.thoughtEditor
        );

        if (!item.title) {
            setTimeout(
                () => {
                    el.thoughtTitle.focus();
                },
                0
            );
        }
    }


    function currentThought() {
        const item =
            getThoughtEntry(
                currentThoughtId
            );

        return (
            item
            &&
            item.type
            ===
            "thought"
                ? item
                : null
        );
    }


    function saveCurrentThought() {
        const item =
            currentThought();

        if (!item) {
            return;
        }

        const oldParentId =
            item.parentId;

        const newParentId =
            el.thoughtFolderSelect.value
            ||
            null;

        item.title =
            el.thoughtTitle.value;

        item.bodyHtml =
            sanitizeRichHtml(
                el.thoughtBody.innerHTML
            );

        if (
            oldParentId
            !==
            newParentId
        ) {
            item.parentId =
                newParentId;

            item.order =
                nextThoughtOrder(
                    newParentId
                );
        }

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.thoughtSaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function scheduleThoughtSave() {
        el.thoughtSaveState.textContent =
            "Speichert …";

        if (
            thoughtSaveTimer
        ) {
            clearTimeout(
                thoughtSaveTimer
            );
        }

        thoughtSaveTimer =
            setTimeout(
                saveCurrentThought,
                280
            );
    }


    function selectionInsideThoughtEditor() {
        const selection =
            window.getSelection();

        if (
            !selection
            ||
            selection.rangeCount
            ===
            0
        ) {
            return false;
        }

        const range =
            selection.getRangeAt(
                0
            );

        return (
            el.thoughtBody.contains(
                range.commonAncestorContainer
            )
            ||
            range.commonAncestorContainer
            ===
            el.thoughtBody
        );
    }


    function saveThoughtSelection() {
        if (
            selectionInsideThoughtEditor()
        ) {
            const selection =
                window.getSelection();

            savedThoughtRange =
                selection
                    .getRangeAt(0)
                    .cloneRange();
        }
    }


    function restoreThoughtSelection() {
        if (!savedThoughtRange) {
            el.thoughtBody.focus();
            return;
        }

        const selection =
            window.getSelection();

        selection.removeAllRanges();

        selection.addRange(
            savedThoughtRange
        );

        el.thoughtBody.focus();
    }


    function applyThoughtFormat(
        command,
        value = null
    ) {
        restoreThoughtSelection();

        document.execCommand(
            command,
            false,
            value
        );

        saveThoughtSelection();
        scheduleThoughtSave();
    }


    document.addEventListener(
        "selectionchange",
        saveThoughtSelection
    );


    el.thoughtTitle.addEventListener(
        "input",
        scheduleThoughtSave
    );

    el.thoughtBody.addEventListener(
        "input",
        scheduleThoughtSave
    );

    el.thoughtFolderSelect.addEventListener(
        "change",
        scheduleThoughtSave
    );


    el.thoughtToolsButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.thoughtToolsMenu.classList.toggle(
                "hidden"
            );
        }
    );


    document.querySelectorAll(
        ".format-button"
    ).forEach(
        button => {
            button.addEventListener(
                "click",
                () => {
                    applyThoughtFormat(
                        button.dataset.command,
                        button.dataset.value
                        ??
                        null
                    );
                }
            );
        }
    );


    el.thoughtColor.addEventListener(
        "input",
        () => {
            applyThoughtFormat(
                "foreColor",
                el.thoughtColor.value
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.thoughtToolsMenu.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.thoughtToolsButton
            ) {
                el.thoughtToolsMenu.classList.add(
                    "hidden"
                );
            }
        }
    );


    el.backFromThoughtEditor.addEventListener(
        "click",
        () => {
            saveCurrentThought();

            const item =
                currentThought();

            currentThoughtFolderId =
                item?.parentId
                ??
                currentThoughtFolderId;

            currentThoughtId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.deleteThoughtButton.addEventListener(
        "click",
        () => {
            const item =
                currentThought();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    `${currentRichKind === "notes" ? "Notiz" : "Philosophie-Eintrag"} löschen?`
                )
            ) {
                return;
            }

            const parentId =
                item.parentId;

            setThoughtEntries(
                thoughtEntries().filter(
                    thought =>
                        thought.id
                        !==
                        item.id
                )
            );

            saveState();

            currentThoughtId =
                null;

            currentThoughtFolderId =
                parentId;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.thoughtPdfButton.addEventListener(
        "click",
        () => {
            saveCurrentThought();

            const item =
                currentThought();

            if (!item) {
                return;
            }

            exportPrintableRichDocument(
                item.title.trim()
                ||
                (
                    currentRichKind
                    ===
                    "notes"
                        ? "Notiz"
                        : "Philosophie"
                ),
                item.bodyHtml
            );
        }
    );


    // ==================================================
    // TAGE
    // ==================================================

    function renderDayList() {
        el.dayList.innerHTML =
            "";

        const items =
            [...state.days]
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.date.localeCompare(
                            a.date
                        )
                        ||
                        new Date(
                            b.updatedAt
                        )
                        -
                        new Date(
                            a.updatedAt
                        )
                );

        el.dayEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        items.forEach(
            item => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "text-row day-list-row";

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "row-main-button";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "row-title day-line-title";

                title.textContent =
                    `${formatDate(item.date)}: ${item.title.trim() || "Ohne Titel"}`;

                button.appendChild(
                    title
                );

                button.addEventListener(
                    "click",
                    () => {
                        openDayEditor(
                            item.id
                        );
                    }
                );

                row.appendChild(
                    button
                );

                el.dayList.appendChild(
                    row
                );
            }
        );
    }


    el.backFromDayList.addEventListener(
        "click",
        () => {
            showScreen(
                screens.textsHub
            );
        }
    );


    el.addDayButton.addEventListener(
        "click",
        () => {
            const item = {
                id: createId(),
                date:
                    localDateValue(),
                title: "",
                mood: null,
                body: "",
                reflection: "",
                createdAt: nowIso(),
                updatedAt: nowIso()
            };

            state.days.push(
                item
            );

            saveState();

            openDayEditor(
                item.id
            );
        }
    );


    function openDayEditor(id) {
        const item =
            state.days.find(
                day =>
                    day.id
                    ===
                    id
            );

        if (!item) {
            return;
        }

        currentDayId =
            id;

        el.dayDate.value =
            item.date;

        el.dayTitle.value =
            item.title;

        el.dayMood.value =
            item.mood
                ? String(
                    item.mood
                )
                : "";

        el.dayBody.value =
            item.body;

        el.dayReflection.value =
            item.reflection;

        el.daySaveState.textContent =
            "Gespeichert";

        showScreen(
            screens.dayEditor
        );
    }


    function currentDay() {
        return (
            state.days.find(
                item =>
                    item.id
                    ===
                    currentDayId
            )
            ??
            null
        );
    }


    function saveCurrentDay() {
        const item =
            currentDay();

        if (!item) {
            return;
        }

        item.date =
            el.dayDate.value
            ||
            localDateValue();

        item.title =
            el.dayTitle.value;

        item.mood =
            el.dayMood.value
                ? Number(
                    el.dayMood.value
                )
                : null;

        item.body =
            el.dayBody.value;

        item.reflection =
            el.dayReflection.value;

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.daySaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function scheduleDaySave() {
        el.daySaveState.textContent =
            "Speichert …";

        if (daySaveTimer) {
            clearTimeout(
                daySaveTimer
            );
        }

        daySaveTimer =
            setTimeout(
                saveCurrentDay,
                300
            );
    }


    [
        el.dayDate,
        el.dayTitle,
        el.dayMood,
        el.dayBody,
        el.dayReflection
    ].forEach(
        input => {
            input.addEventListener(
                "input",
                scheduleDaySave
            );

            input.addEventListener(
                "change",
                scheduleDaySave
            );
        }
    );


    el.backFromDayEditor.addEventListener(
        "click",
        () => {
            saveCurrentDay();

            currentDayId =
                null;

            renderDayList();

            showScreen(
                screens.dayList
            );
        }
    );


    el.deleteDayButton.addEventListener(
        "click",
        () => {
            const item =
                currentDay();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    "Tagebucheintrag löschen?"
                )
            ) {
                return;
            }

            state.days =
                state.days.filter(
                    day =>
                        day.id
                        !==
                        item.id
                );

            saveState();

            currentDayId =
                null;

            renderDayList();

            showScreen(
                screens.dayList
            );
        }
    );


    el.dayPdfButton.addEventListener(
        "click",
        () => {
            saveCurrentDay();

            const item =
                currentDay();

            if (!item) {
                return;
            }

            exportPrintableDocument(
                item.title.trim()
                ||
                formatDate(
                    item.date
                ),
                [
                    {
                        heading: "Datum",
                        text:
                            formatDate(
                                item.date
                            )
                    },
                    {
                        heading: "Stimmung",
                        text:
                            item.mood
                                ? `${item.mood}/5`
                                : ""
                    },
                    {
                        heading: "Der Tag",
                        text:
                            item.body
                    },
                    {
                        heading: "Was bleibt",
                        text:
                            item.reflection
                    }
                ]
            );
        }
    );


    // ==================================================
    // TRÄUME
    // ==================================================

    function renderDreamList() {
        el.dreamList.innerHTML =
            "";

        const items =
            [...state.dreams]
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.date.localeCompare(
                            a.date
                        )
                        ||
                        new Date(
                            b.updatedAt
                        )
                        -
                        new Date(
                            a.updatedAt
                        )
                );

        el.dreamEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        items.forEach(item => {
            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "text-row";

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "row-main-button";

            const title =
                document.createElement(
                    "div"
                );

            title.className =
                "row-title";

            title.textContent =
                item.title.trim()
                ||
                "Traum";

            const subtitle =
                document.createElement(
                    "div"
                );

            subtitle.className =
                "row-subtitle";

            subtitle.textContent =
                item.interpretation.trim()
                    ? `${formatDate(item.date)} · gedeutet`
                    : formatDate(
                        item.date
                    );

            button.append(
                title,
                subtitle
            );

            button.addEventListener(
                "click",
                () => {
                    openDreamEditor(
                        item.id
                    );
                }
            );

            row.appendChild(
                button
            );

            el.dreamList.appendChild(
                row
            );
        });
    }


    el.backFromDreamList.addEventListener(
        "click",
        () => {
            showScreen(
                screens.textsHub
            );
        }
    );


    el.addDreamButton.addEventListener(
        "click",
        () => {
            const item = {
                id: createId(),
                date:
                    localDateValue(),
                title: "",
                manifest: "",
                affect: "",
                dayResidue: "",
                associations: "",
                condensation: "",
                displacement: "",
                wishConflict: "",
                interpretation: "",
                createdAt: nowIso(),
                updatedAt: nowIso()
            };

            state.dreams.push(
                item
            );

            saveState();

            openDreamEditor(
                item.id
            );
        }
    );


    function openDreamEditor(id) {
        const item =
            state.dreams.find(
                dream =>
                    dream.id
                    ===
                    id
            );

        if (!item) {
            return;
        }

        currentDreamId =
            id;

        el.dreamDate.value =
            item.date;

        el.dreamTitle.value =
            item.title;

        el.dreamManifest.value =
            item.manifest;

        el.dreamAffect.value =
            item.affect;

        el.dreamDayResidue.value =
            item.dayResidue;

        el.dreamAssociations.value =
            item.associations;

        el.dreamCondensation.value =
            item.condensation;

        el.dreamDisplacement.value =
            item.displacement;

        el.dreamWishConflict.value =
            item.wishConflict;

        el.dreamInterpretation.value =
            item.interpretation;

        el.dreamSaveState.textContent =
            "Gespeichert";

        showScreen(
            screens.dreamEditor
        );
    }


    function currentDream() {
        return (
            state.dreams.find(
                item =>
                    item.id
                    ===
                    currentDreamId
            )
            ??
            null
        );
    }


    function saveCurrentDream() {
        const item =
            currentDream();

        if (!item) {
            return;
        }

        item.date =
            el.dreamDate.value
            ||
            localDateValue();

        item.title =
            el.dreamTitle.value;

        item.manifest =
            el.dreamManifest.value;

        item.affect =
            el.dreamAffect.value;

        item.dayResidue =
            el.dreamDayResidue.value;

        item.associations =
            el.dreamAssociations.value;

        item.condensation =
            el.dreamCondensation.value;

        item.displacement =
            el.dreamDisplacement.value;

        item.wishConflict =
            el.dreamWishConflict.value;

        item.interpretation =
            el.dreamInterpretation.value;

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.dreamSaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function scheduleDreamSave() {
        el.dreamSaveState.textContent =
            "Speichert …";

        if (
            dreamSaveTimer
        ) {
            clearTimeout(
                dreamSaveTimer
            );
        }

        dreamSaveTimer =
            setTimeout(
                saveCurrentDream,
                300
            );
    }


    [
        el.dreamDate,
        el.dreamTitle,
        el.dreamManifest,
        el.dreamAffect,
        el.dreamDayResidue,
        el.dreamAssociations,
        el.dreamCondensation,
        el.dreamDisplacement,
        el.dreamWishConflict,
        el.dreamInterpretation
    ].forEach(
        input => {
            input.addEventListener(
                "input",
                scheduleDreamSave
            );

            input.addEventListener(
                "change",
                scheduleDreamSave
            );
        }
    );


    el.backFromDreamEditor.addEventListener(
        "click",
        () => {
            saveCurrentDream();

            currentDreamId =
                null;

            renderDreamList();

            showScreen(
                screens.dreamList
            );
        }
    );


    el.deleteDreamButton.addEventListener(
        "click",
        () => {
            const item =
                currentDream();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    "Traum löschen?"
                )
            ) {
                return;
            }

            state.dreams =
                state.dreams.filter(
                    dream =>
                        dream.id
                        !==
                        item.id
                );

            saveState();

            currentDreamId =
                null;

            renderDreamList();

            showScreen(
                screens.dreamList
            );
        }
    );


    el.dreamPdfButton.addEventListener(
        "click",
        () => {
            saveCurrentDream();

            const item =
                currentDream();

            if (!item) {
                return;
            }

            exportPrintableDocument(
                item.title.trim()
                ||
                "Traum",
                [
                    {
                        heading: "Datum",
                        text:
                            formatDate(
                                item.date
                            )
                    },
                    {
                        heading: "Manifester Traum",
                        text:
                            item.manifest
                    },
                    {
                        heading: "Affekte",
                        text:
                            item.affect
                    },
                    {
                        heading: "Tagesreste",
                        text:
                            item.dayResidue
                    },
                    {
                        heading: "Freie Assoziationen",
                        text:
                            item.associations
                    },
                    {
                        heading: "Verdichtung",
                        text:
                            item.condensation
                    },
                    {
                        heading: "Verschiebung",
                        text:
                            item.displacement
                    },
                    {
                        heading: "Wunsch / Konflikt",
                        text:
                            item.wishConflict
                    },
                    {
                        heading: "Deutung",
                        text:
                            item.interpretation
                    }
                ]
            );
        }
    );


    // ==================================================
    // FILM / LITERATUR LIBRARY
    // ==================================================

    function libraryState() {
        return state[
            reviewKind
        ];
    }


    function libraryEntries() {
        return libraryState().entries;
    }


    function libraryLabel() {
        return reviewKind
        ===
        "films"
            ? "Filme"
            : "Bücher";
    }


    function reviewLabel() {
        return reviewKind
        ===
        "films"
            ? "Film"
            : "Buch";
    }


    function openReviewLibrary(
        kind
    ) {
        reviewKind =
            kind;

        currentReviewFolderId =
            null;

        currentReviewEntryId =
            null;

        currentFolderEditId =
            null;

        el.reviewSortSelect.value =
            "manual";

        renderReviewLibrary();

        showScreen(
            screens.reviewLibrary
        );
    }


    function getEntry(id) {
        return (
            libraryEntries().find(
                item =>
                    item.id
                    ===
                    id
            )
            ??
            null
        );
    }


    function folderChildren(
        parentId
    ) {
        return libraryEntries()
            .filter(
                item =>
                    item.parentId
                    ===
                    parentId
            );
    }


    function currentFolder() {
        if (
            !currentReviewFolderId
        ) {
            return null;
        }

        return getEntry(
            currentReviewFolderId
        );
    }


    function folderPath(folderId) {
        const path = [];
        let currentId =
            folderId;

        const safety =
            new Set();

        while (currentId) {
            if (
                safety.has(
                    currentId
                )
            ) {
                break;
            }

            safety.add(
                currentId
            );

            const folder =
                getEntry(
                    currentId
                );

            if (
                !folder
                ||
                folder.type
                !==
                "folder"
            ) {
                break;
            }

            path.unshift(
                folder
            );

            currentId =
                folder.parentId;
        }

        return path;
    }


    function renderBreadcrumbs() {
        el.reviewBreadcrumbs.innerHTML =
            "";

        const root =
            document.createElement(
                "button"
            );

        root.type =
            "button";

        root.className =
            "breadcrumb-button";

        root.textContent =
            libraryLabel();

        root.addEventListener(
            "click",
            () => {
                currentReviewFolderId =
                    null;

                renderReviewLibrary();
            }
        );

        el.reviewBreadcrumbs.appendChild(
            root
        );

        folderPath(
            currentReviewFolderId
        ).forEach(
            folder => {
                const sep =
                    document.createElement(
                        "span"
                    );

                sep.className =
                    "breadcrumb-separator";

                sep.textContent =
                    "›";

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "breadcrumb-button";

                button.textContent =
                    folder.title;

                button.addEventListener(
                    "click",
                    () => {
                        currentReviewFolderId =
                            folder.id;

                        renderReviewLibrary();
                    }
                );

                el.reviewBreadcrumbs.append(
                    sep,
                    button
                );
            }
        );
    }


    function sortedLibraryChildren() {
        const items =
            folderChildren(
                currentReviewFolderId
            );

        const mode =
            el.reviewSortSelect.value;

        if (
            mode
            ===
            "title"
        ) {
            return [...items].sort(
                (
                    a,
                    b
                ) =>
                    a.title.localeCompare(
                        b.title,
                        "de"
                    )
            );
        }

        if (
            mode
            ===
            "ratingDesc"
        ) {
            return [...items].sort(
                (
                    a,
                    b
                ) => {
                    if (
                        a.type
                        ===
                        "folder"
                        &&
                        b.type
                        !==
                        "folder"
                    ) {
                        return -1;
                    }

                    if (
                        b.type
                        ===
                        "folder"
                        &&
                        a.type
                        !==
                        "folder"
                    ) {
                        return 1;
                    }

                    return (
                        (b.rating ?? -1)
                        -
                        (a.rating ?? -1)
                    );
                }
            );
        }

        if (
            mode
            ===
            "ratingAsc"
        ) {
            return [...items].sort(
                (
                    a,
                    b
                ) => {
                    if (
                        a.type
                        ===
                        "folder"
                        &&
                        b.type
                        !==
                        "folder"
                    ) {
                        return -1;
                    }

                    if (
                        b.type
                        ===
                        "folder"
                        &&
                        a.type
                        !==
                        "folder"
                    ) {
                        return 1;
                    }

                    return (
                        (a.rating ?? 99)
                        -
                        (b.rating ?? 99)
                    );
                }
            );
        }

        return [...items].sort(
            (
                a,
                b
            ) =>
                Number(
                    a.order
                    ||
                    0
                )
                -
                Number(
                    b.order
                    ||
                    0
                )
        );
    }


    function renderReviewLibrary() {
        const iconKind =
            reviewKind
            ===
            "films"
                ? "films"
                : "books";

        el.reviewLibraryIcon.dataset.categoryIcon =
            iconKind;

        el.reviewLibraryIcon.className =
            `category-center-icon category-sort-trigger category-icon-${iconKind}`;

        el.reviewLibraryIcon.innerHTML =
            categoryIconSvg(
                iconKind
            );

        el.reviewLibraryIcon.setAttribute(
            "aria-label",
            `${libraryLabel()} sortieren`
        );

        renderBreadcrumbs();

        const items =
            sortedLibraryChildren();

        el.reviewLibraryList.innerHTML =
            "";

        el.reviewLibraryEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        const manual =
            el.reviewSortSelect.value
            ===
            "manual";

        items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "library-row";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    row.classList.add(
                        "folder"
                    );
                }

                const main =
                    document.createElement(
                        "button"
                    );

                main.type =
                    "button";

                main.className =
                    "row-main-button";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "row-title";

                title.textContent =
                    item.title.trim()
                    ||
                    (
                        item.type
                        ===
                        "folder"
                            ? "Ordner"
                            : "Ohne Titel"
                    );

                main.appendChild(
                    title
                );

                main.addEventListener(
                    "click",
                    () => {
                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            currentReviewFolderId =
                                item.id;

                            renderReviewLibrary();

                        } else {
                            openReviewEditor(
                                item.id
                            );
                        }
                    }
                );

                row.appendChild(
                    main
                );

                if (manual) {
                    const controls =
                        document.createElement(
                            "div"
                        );

                    controls.className =
                        "library-move-controls";

                    const up =
                        document.createElement(
                            "button"
                        );

                    up.type =
                        "button";

                    up.textContent =
                        "↑";

                    up.disabled =
                        index
                        ===
                        0;

                    up.addEventListener(
                        "click",
                        () => {
                            moveLibraryItem(
                                item.id,
                                -1
                            );
                        }
                    );

                    const down =
                        document.createElement(
                            "button"
                        );

                    down.type =
                        "button";

                    down.textContent =
                        "↓";

                    down.disabled =
                        index
                        ===
                        items.length
                        -
                        1;

                    down.addEventListener(
                        "click",
                        () => {
                            moveLibraryItem(
                                item.id,
                                1
                            );
                        }
                    );

                    controls.append(
                        up,
                        down
                    );

                    row.appendChild(
                        controls
                    );
                }

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    const more =
                        document.createElement(
                            "button"
                        );

                    more.type =
                        "button";

                    more.className =
                        "library-more-button";

                    more.textContent =
                        "···";

                    more.addEventListener(
                        "click",
                        () => {
                            openFolderEditor(
                                item.id
                            );
                        }
                    );

                    row.appendChild(
                        more
                    );
                }

                el.reviewLibraryList.appendChild(
                    row
                );
            }
        );
    }


    function normalizeSiblingOrder(
        parentId
    ) {
        const siblings =
            folderChildren(
                parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        a.order
                        ||
                        0
                    )
                    -
                    Number(
                        b.order
                        ||
                        0
                    )
            );

        siblings.forEach(
            (
                item,
                index
            ) => {
                item.order =
                    index;
            }
        );
    }


    function nextOrder(
        parentId
    ) {
        const siblings =
            folderChildren(
                parentId
            );

        if (
            siblings.length
            ===
            0
        ) {
            return 0;
        }

        return (
            Math.max(
                ...siblings.map(
                    item =>
                        Number(
                            item.order
                            ||
                            0
                        )
                )
            )
            +
            1
        );
    }


    function moveLibraryItem(
        id,
        direction
    ) {
        const item =
            getEntry(id);

        if (!item) {
            return;
        }

        normalizeSiblingOrder(
            item.parentId
        );

        const siblings =
            folderChildren(
                item.parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    a.order
                    -
                    b.order
            );

        const index =
            siblings.findIndex(
                entry =>
                    entry.id
                    ===
                    id
            );

        const targetIndex =
            index
            +
            direction;

        if (
            targetIndex < 0
            ||
            targetIndex
            >=
            siblings.length
        ) {
            return;
        }

        const target =
            siblings[
                targetIndex
            ];

        const oldOrder =
            item.order;

        item.order =
            target.order;

        target.order =
            oldOrder;

        saveState();
        renderReviewLibrary();
    }


    el.backFromReviewLibrary.addEventListener(
        "click",
        () => {
            if (
                currentReviewFolderId
            ) {
                const folder =
                    currentFolder();

                currentReviewFolderId =
                    folder?.parentId
                    ??
                    null;

                renderReviewLibrary();
                return;
            }

            showScreen(
                screens.textsHub
            );
        }
    );


    el.reviewLibraryIcon.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.reviewSortPanel.classList.toggle(
                "hidden"
            );
        }
    );


    el.reviewSortSelect.addEventListener(
        "change",
        () => {
            el.reviewSortPanel.classList.add(
                "hidden"
            );

            renderReviewLibrary();
        }
    );


    // ==================================================
    // FOLDERS
    // ==================================================

    el.addFolderButton.addEventListener(
        "click",
        () => {
            currentFolderEditId =
                null;

            el.folderName.value =
                "";

            setError(
                el.folderError
            );

            el.deleteFolderButton.style.display =
                "none";

            showScreen(
                screens.folderEditor
            );

            setTimeout(
                () => {
                    el.folderName.focus();
                },
                0
            );
        }
    );


    function openFolderEditor(id) {
        const folder =
            getEntry(id);

        if (
            !folder
            ||
            folder.type
            !==
            "folder"
        ) {
            return;
        }

        currentFolderEditId =
            id;

        el.folderName.value =
            folder.title;

        setError(
            el.folderError
        );

        el.deleteFolderButton.style.display =
            "block";

        showScreen(
            screens.folderEditor
        );
    }


    el.backFromFolderEditor.addEventListener(
        "click",
        () => {
            currentFolderEditId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    el.saveFolderButton.addEventListener(
        "click",
        () => {
            const name =
                el.folderName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.folderError,
                    "Name fehlt."
                );

                return;
            }

            if (
                currentFolderEditId
            ) {
                const folder =
                    getEntry(
                        currentFolderEditId
                    );

                if (!folder) {
                    return;
                }

                folder.title =
                    name;

                folder.updatedAt =
                    nowIso();

            } else {
                libraryEntries().push({
                    id: createId(),
                    type: "folder",
                    parentId:
                        currentReviewFolderId,
                    title: name,
                    rating: null,
                    summary: "",
                    interpretation: "",
                    review: "",
                    order:
                        nextOrder(
                            currentReviewFolderId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentFolderEditId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    function collectDescendantIds(
        folderId
    ) {
        const found =
            new Set();

        const processed =
            new Set();

        const queue =
            [folderId];

        while (
            queue.length
        ) {
            const current =
                queue.shift();

            if (
                processed.has(
                    current
                )
            ) {
                continue;
            }

            processed.add(
                current
            );

            found.add(
                current
            );

            libraryEntries()
                .filter(
                    item =>
                        item.parentId
                        ===
                        current
                )
                .forEach(
                    item => {
                        found.add(
                            item.id
                        );

                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            queue.push(
                                item.id
                            );
                        }
                    }
                );
        }

        return found;
    }


    el.deleteFolderButton.addEventListener(
        "click",
        () => {
            if (
                !currentFolderEditId
            ) {
                return;
            }

            if (
                !window.confirm(
                    "Ordner und alle enthaltenen Einträge löschen?"
                )
            ) {
                return;
            }

            const ids =
                collectDescendantIds(
                    currentFolderEditId
                );

            libraryState().entries =
                libraryEntries().filter(
                    item =>
                        !ids.has(
                            item.id
                        )
                );

            saveState();

            if (
                ids.has(
                    currentReviewFolderId
                )
            ) {
                currentReviewFolderId =
                    null;
            }

            currentFolderEditId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    // ==================================================
    // REVIEWS
    // ==================================================

    el.addReviewEntryButton.addEventListener(
        "click",
        () => {
            currentReviewEntryId =
                null;

            el.reviewEntryTitle.value =
                "";

            el.reviewEntryRating.value =
                "";

            el.reviewEntrySummary.value =
                "";

            el.reviewEntryInterpretation.value =
                "";

            el.reviewEntryReview.value =
                "";

            setError(
                el.reviewEntryError
            );

            renderReviewFolderOptions(
                currentReviewFolderId
            );

            el.deleteReviewEntryButton.style.display =
                "none";

            el.reviewEditorHeading.textContent =
                reviewLabel();

            showScreen(
                screens.reviewEditor
            );

            setTimeout(
                () => {
                    el.reviewEntryTitle.focus();
                },
                0
            );
        }
    );


    function allFolders() {
        return libraryEntries()
            .filter(
                item =>
                    item.type
                    ===
                    "folder"
            );
    }


    function folderDisplayPath(
        folder
    ) {
        return folderPath(
            folder.id
        )
        .map(
            item =>
                item.title
        )
        .join(
            " › "
        );
    }


    function renderReviewFolderOptions(
        selectedId
    ) {
        el.reviewEntryFolder.innerHTML =
            "";

        const root =
            document.createElement(
                "option"
            );

        root.value =
            "";

        root.textContent =
            "Ohne Ordner";

        el.reviewEntryFolder.appendChild(
            root
        );

        allFolders()
            .sort(
                (
                    a,
                    b
                ) =>
                    folderDisplayPath(a)
                        .localeCompare(
                            folderDisplayPath(b),
                            "de"
                        )
            )
            .forEach(
                folder => {
                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        folder.id;

                    option.textContent =
                        folderDisplayPath(
                            folder
                        );

                    el.reviewEntryFolder.appendChild(
                        option
                    );
                }
            );

        el.reviewEntryFolder.value =
            selectedId
            ??
            "";
    }


    function openReviewEditor(id) {
        const item =
            getEntry(id);

        if (
            !item
            ||
            item.type
            !==
            "review"
        ) {
            return;
        }

        currentReviewEntryId =
            id;

        el.reviewEditorHeading.textContent =
            reviewLabel();

        el.reviewEntryTitle.value =
            item.title;

        el.reviewEntryRating.value =
            item.rating
                ? String(
                    item.rating
                )
                : "";

        el.reviewEntrySummary.value =
            item.summary;

        el.reviewEntryInterpretation.value =
            item.interpretation;

        el.reviewEntryReview.value =
            item.review;

        renderReviewFolderOptions(
            item.parentId
        );

        setError(
            el.reviewEntryError
        );

        el.deleteReviewEntryButton.style.display =
            "block";

        showScreen(
            screens.reviewEditor
        );
    }


    el.backFromReviewEditor.addEventListener(
        "click",
        () => {
            currentReviewEntryId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    function reviewFormData() {
        const ratingValue =
            el.reviewEntryRating.value;

        return {
            title:
                el.reviewEntryTitle
                    .value
                    .trim(),
            rating:
                ratingValue === ""
                    ? null
                    : Number(
                        ratingValue
                    ),
            summary:
                el.reviewEntrySummary
                    .value
                    .trim(),
            interpretation:
                el.reviewEntryInterpretation
                    .value
                    .trim(),
            review:
                el.reviewEntryReview
                    .value
                    .trim(),
            parentId:
                el.reviewEntryFolder.value
                ||
                null
        };
    }


    el.saveReviewEntryButton.addEventListener(
        "click",
        () => {
            const data =
                reviewFormData();

            if (!data.title) {
                setError(
                    el.reviewEntryError,
                    "Titel fehlt."
                );

                el.reviewEntryTitle.focus();
                return;
            }

            if (
                data.rating
                !==
                null
                &&
                (
                    data.rating < 1
                    ||
                    data.rating > 10
                )
            ) {
                setError(
                    el.reviewEntryError,
                    "Bewertung muss zwischen 1 und 10 liegen."
                );

                return;
            }

            if (
                currentReviewEntryId
            ) {
                const item =
                    getEntry(
                        currentReviewEntryId
                    );

                if (!item) {
                    return;
                }

                const oldParentId =
                    item.parentId;

                Object.assign(
                    item,
                    data,
                    {
                        updatedAt:
                            nowIso()
                    }
                );

                if (
                    oldParentId
                    !==
                    data.parentId
                ) {
                    item.order =
                        nextOrder(
                            data.parentId
                        );
                }

            } else {
                libraryEntries().push({
                    id: createId(),
                    type: "review",
                    ...data,
                    order:
                        nextOrder(
                            data.parentId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentReviewEntryId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    el.deleteReviewEntryButton.addEventListener(
        "click",
        () => {
            if (
                !currentReviewEntryId
            ) {
                return;
            }

            if (
                !window.confirm(
                    "Eintrag löschen?"
                )
            ) {
                return;
            }

            libraryState().entries =
                libraryEntries().filter(
                    item =>
                        item.id
                        !==
                        currentReviewEntryId
                );

            saveState();

            currentReviewEntryId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    el.reviewPdfButton.addEventListener(
        "click",
        () => {
            const data =
                reviewFormData();

            if (!data.title) {
                setError(
                    el.reviewEntryError,
                    "Titel fehlt."
                );

                return;
            }

            exportPrintableDocument(
                data.title,
                [
                    {
                        heading:
                            "Bewertung",
                        text:
                            data.rating
                                ? `${data.rating}/10`
                                : ""
                    },
                    {
                        heading:
                            "Zusammenfassung",
                        text:
                            data.summary
                    },
                    {
                        heading:
                            "Deutung",
                        text:
                            data.interpretation
                    },
                    {
                        heading:
                            "Bewertung",
                        text:
                            data.review
                    }
                ]
            );
        }
    );


    // ==================================================
    // SESSION LIFECYCLE
    // ==================================================

    document.addEventListener(
        "visibilitychange",
        () => {
            if (
                document.visibilityState
                ===
                "hidden"
            ) {
                persistSessionRuntime();
                return;
            }

            syncSessionAfterReturn();
        }
    );


    window.addEventListener(
        "pageshow",
        () => {
            syncSessionAfterReturn();
        }
    );


    window.addEventListener(
        "focus",
        () => {
            syncSessionAfterReturn();
        }
    );


    // ==================================================
    // VOLLBILD-TEXTFELDER
    // ==================================================

    function labelForTextarea(
        textarea
    ) {
        if (
            !textarea?.id
        ) {
            return null;
        }

        return document.querySelector(
            `label[for="${textarea.id}"]`
        );
    }


    function openFullTextEditor(
        textarea
    ) {
        if (
            !textarea
            ||
            textarea
            ===
            el.fullTextEditorArea
        ) {
            return;
        }

        fullTextTarget =
            textarea;

        fullTextPreviousScreen =
            activeScreen();

        fullTextPreviousScrollY =
            window.scrollY;

        const label =
            labelForTextarea(
                textarea
            );

        el.fullTextEditorTitle.textContent =
            label?.textContent?.trim()
            ||
            textarea.getAttribute(
                "aria-label"
            )
            ||
            "Text";

        el.fullTextEditorArea.value =
            textarea.value
            ??
            "";

        showScreen(
            screens.fullTextEditor
        );

        setTimeout(
            () => {
                el.fullTextEditorArea.focus();

                el.fullTextEditorArea.setSelectionRange(
                    el.fullTextEditorArea.value.length,
                    el.fullTextEditorArea.value.length
                );
            },
            0
        );
    }


    function closeFullTextEditor(
        save
    ) {
        const target =
            fullTextTarget;

        const previous =
            fullTextPreviousScreen;

        const previousScroll =
            fullTextPreviousScrollY;

        if (
            save
            &&
            target
        ) {
            target.value =
                el.fullTextEditorArea.value;

            target.dispatchEvent(
                new Event(
                    "input",
                    {
                        bubbles:
                            true
                    }
                )
            );

            target.dispatchEvent(
                new Event(
                    "change",
                    {
                        bubbles:
                            true
                    }
                )
            );
        }

        fullTextTarget =
            null;

        fullTextPreviousScreen =
            null;

        if (previous) {
            showScreen(
                previous
            );

            requestAnimationFrame(
                () => {
                    window.scrollTo(
                        0,
                        previousScroll
                    );
                }
            );
        }
    }


    function initializeFullscreenTextareas() {
        document.querySelectorAll(
            "textarea"
        ).forEach(
            textarea => {
                if (
                    textarea
                    ===
                    el.fullTextEditorArea
                ) {
                    return;
                }

                textarea.readOnly =
                    true;

                textarea.classList.add(
                    "fullscreen-field-trigger"
                );

                textarea.addEventListener(
                    "click",
                    event => {
                        event.preventDefault();

                        openFullTextEditor(
                            textarea
                        );
                    }
                );

                const label =
                    labelForTextarea(
                        textarea
                    );

                if (label) {
                    label.classList.add(
                        "fullscreen-field-label"
                    );

                    label.addEventListener(
                        "click",
                        event => {
                            event.preventDefault();

                            openFullTextEditor(
                                textarea
                            );
                        }
                    );
                }
            }
        );
    }


    el.finishFullTextEditorButton.addEventListener(
        "click",
        () => {
            closeFullTextEditor(
                true
            );
        }
    );


    el.cancelFullTextEditorButton.addEventListener(
        "click",
        () => {
            closeFullTextEditor(
                false
            );
        }
    );


    // ==================================================
    // INITIALIZATION
    // ==================================================

    restorePersistedSessionRuntime();

    hydrateCategoryIcons();

    initializeFullscreenTextareas();

    initializeV20ThemeDefault();

    applyTheme();

    openTimelineEditFromLocation();
    saveState();
    renderMiniSession();

})();
