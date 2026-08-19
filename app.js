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
        chessRoom: $("chessRoomScreen"),
        filmRoom: $("filmRoomScreen"),
        mapRoom: $("mapRoomScreen"),
        focus: $("focusScreen"),
        flashcardsHome: $("flashcardsHomeScreen"),
        flashcardsDecks: $("flashcardsDecksScreen"),
        flashcardsDeck: $("flashcardsDeckScreen"),
        flashcardsPractice: $("flashcardsPracticeScreen"),
        flashcardsProgress: $("flashcardsProgressScreen"),
        flashcardsEditor: $("flashcardsEditorScreen"),
        flashcardsImport: $("flashcardsImportScreen"),
        calculator: $("calculatorScreen"),
        wallpaperRuntime: $("wallpaperRuntimeScreen"),
        wallpaperList: $("wallpaperListScreen"),
        wallpaperCreate: $("wallpaperCreateScreen"),
        wallpaperEditor: $("wallpaperEditorScreen"),
        music: $("musicScreen"),
        news: $("newsScreen"),
        wikipedia: $("wikipediaScreen"),
        youtube: $("youtubeScreen"),
        chessSetup: $("chessSetupScreen"),
        chessLearnList: $("chessLearnListScreen"),
        chessLearnCards: $("chessLearnCardsScreen"),
        chessLearnDetail: $("chessLearnDetailScreen"),
        chessLearnPractice: $("chessLearnPracticeScreen"),
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
        textsMapRoomHotspot: $("textsMapRoomHotspot"),
        chessRoomBoardHotspot: $("chessRoomBoardHotspot"),
        chessRoomAcademyHotspot: $("chessRoomAcademyHotspot"),
        chessRoomYoutubeHotspot: $("chessRoomYoutubeHotspot"),
        filmRoomCameraHotspot: $("filmRoomCameraHotspot"),
        filmRoomBackHotspot: $("filmRoomBackHotspot"),
        filmRoomRightHotspot: $("filmRoomRightHotspot"),
        mapRoomMapHotspot: $("mapRoomMapHotspot"),
        mapRoomPianoHotspot: $("mapRoomPianoHotspot"),
        mapRoomLeftHotspot: $("mapRoomLeftHotspot"),
        mapRoomRightHotspot: $("mapRoomRightHotspot"),
        backFromMusic: $("backFromMusic"),
        spotifyAccountButton: $("spotifyAccountButton"),
        spotifyAccountMenu: $("spotifyAccountMenu"),
        spotifyDisconnectButton: $("spotifyDisconnectButton"),
        spotifyConnectView: $("spotifyConnectView"),
        spotifyConnectButton: $("spotifyConnectButton"),
        spotifyConnectStatus: $("spotifyConnectStatus"),
        spotifyAppView: $("spotifyAppView"),
        musicTabs: $("musicTabs"),
        musicSearchPanel: $("musicSearchPanel"),
        musicPlaylistsPanel: $("musicPlaylistsPanel"),
        musicLibraryPanel: $("musicLibraryPanel"),
        spotifySearchForm: $("spotifySearchForm"),
        spotifySearchInput: $("spotifySearchInput"),
        spotifySearchStatus: $("spotifySearchStatus"),
        spotifySearchResults: $("spotifySearchResults"),
        spotifyNewPlaylistButton: $("spotifyNewPlaylistButton"),
        spotifyPlaylistsStatus: $("spotifyPlaylistsStatus"),
        spotifyPlaylistsList: $("spotifyPlaylistsList"),
        spotifyPlaylistDetail: $("spotifyPlaylistDetail"),
        spotifyPlaylistDetailBack: $("spotifyPlaylistDetailBack"),
        spotifyPlaylistDetailHead: $("spotifyPlaylistDetailHead"),
        spotifyPlaylistTracks: $("spotifyPlaylistTracks"),
        spotifyLibraryRefresh: $("spotifyLibraryRefresh"),
        spotifyLibraryStatus: $("spotifyLibraryStatus"),
        spotifyLibraryList: $("spotifyLibraryList"),
        spotifyPlayerBar: $("spotifyPlayerBar"),
        spotifyPlayerArtwork: $("spotifyPlayerArtwork"),
        spotifyPlayerTitle: $("spotifyPlayerTitle"),
        spotifyPlayerArtist: $("spotifyPlayerArtist"),
        spotifyPreviousButton: $("spotifyPreviousButton"),
        spotifyPlayPauseButton: $("spotifyPlayPauseButton"),
        spotifyNextButton: $("spotifyNextButton"),
        spotifyPlaylistPicker: $("spotifyPlaylistPicker"),
        spotifyPlaylistPickerList: $("spotifyPlaylistPickerList"),
        spotifyPickerNewPlaylist: $("spotifyPickerNewPlaylist"),
        spotifyPlaylistPickerCancel: $("spotifyPlaylistPickerCancel"),
        spotifyPlaylistComposer: $("spotifyPlaylistComposer"),
        spotifyPlaylistComposerForm: $("spotifyPlaylistComposerForm"),
        spotifyPlaylistName: $("spotifyPlaylistName"),
        spotifyPlaylistDescription: $("spotifyPlaylistDescription"),
        spotifyPlaylistPublic: $("spotifyPlaylistPublic"),
        spotifyPlaylistComposerStatus: $("spotifyPlaylistComposerStatus"),
        spotifyPlaylistComposerCancel: $("spotifyPlaylistComposerCancel"),
        backFromNews: $("backFromNews"),
        newsTitleButton: $("newsTitleButton"),
        newsSortMenu: $("newsSortMenu"),
        newsRefreshButton: $("newsRefreshButton"),
        newsCategories: $("newsCategories"),
        newsSearchToggle: $("newsSearchToggle"),
        newsSearchPanel: $("newsSearchPanel"),
        newsSearchInput: $("newsSearchInput"),
        newsSearchClear: $("newsSearchClear"),
        newsStatus: $("newsStatus"),
        newsList: $("newsList"),
        newsListView: $("newsListView"),
        newsArticleView: $("newsArticleView"),
        newsArticleSource: $("newsArticleSource"),
        newsArticleTitle: $("newsArticleTitle"),
        newsArticleMeta: $("newsArticleMeta"),
        newsArticleStandfirst: $("newsArticleStandfirst"),
        newsArticleImageWrap: $("newsArticleImageWrap"),
        newsArticleImage: $("newsArticleImage"),
        newsArticleImageCredit: $("newsArticleImageCredit"),
        newsArticleBody: $("newsArticleBody"),
        newsArticleNotice: $("newsArticleNotice"),
        newsGuardianAttribution: $("newsGuardianAttribution"),
        newsBellingcatAttribution: $("newsBellingcatAttribution"),
        newsArticleOriginal: $("newsArticleOriginal"),
        chessRoomBackHotspot: $("chessRoomBackHotspot"),

        backFromWikipedia: $("backFromWikipedia"),
        wikipediaSearchForm: $("wikipediaSearchForm"),
        wikipediaSearchInput: $("wikipediaSearchInput"),
        wikipediaSearchButton: $("wikipediaSearchButton"),
        wikipediaFolderButton: $("wikipediaFolderButton"),
        wikipediaFolderComposer: $("wikipediaFolderComposer"),
        wikipediaFolderNameInput: $("wikipediaFolderNameInput"),
        wikipediaFolderCreateCancel: $("wikipediaFolderCreateCancel"),
        wikipediaFolders: $("wikipediaFolders"),
        wikipediaStatus: $("wikipediaStatus"),
        wikipediaLanding: $("wikipediaLanding"),
        wikipediaFolderView: $("wikipediaFolderView"),
        wikipediaFolderViewTitle: $("wikipediaFolderViewTitle"),
        wikipediaFolderArticles: $("wikipediaFolderArticles"),
        wikipediaResults: $("wikipediaResults"),
        wikipediaArticle: $("wikipediaArticle"),
        wikipediaArticleTitle: $("wikipediaArticleTitle"),
        wikipediaSaveArticleButton: $("wikipediaSaveArticleButton"),
        wikipediaArticleBody: $("wikipediaArticleBody"),
        wikipediaArticleFooter: $("wikipediaArticleFooter"),
        wikipediaFolderPicker: $("wikipediaFolderPicker"),
        wikipediaFolderPickerList: $("wikipediaFolderPickerList"),
        wikipediaFolderPickerNew: $("wikipediaFolderPickerNew"),
        wikipediaFolderPickerCancel: $("wikipediaFolderPickerCancel"),
        backFromYoutube: $("backFromYoutube"),
        youtubeTitleButton: $("youtubeTitleButton"),
        youtubeSortMenu: $("youtubeSortMenu"),
        youtubeSortNormal: $("youtubeSortNormal"),
        youtubeSortViews: $("youtubeSortViews"),
        youtubeSortDate: $("youtubeSortDate"),
        youtubeSearchForm: $("youtubeSearchForm"),
        youtubeSearchInput: $("youtubeSearchInput"),
        youtubeSearchButton: $("youtubeSearchButton"),
        youtubeFolderButton: $("youtubeFolderButton"),
        youtubeFolderComposer: $("youtubeFolderComposer"),
        youtubeFolderNameInput: $("youtubeFolderNameInput"),
        youtubeFolderCreateCancel: $("youtubeFolderCreateCancel"),
        youtubeFolders: $("youtubeFolders"),
        youtubeStatus: $("youtubeStatus"),
        youtubeTabs: $("youtubeTabs"),
        youtubeTabVideos: $("youtubeTabVideos"),
        youtubeTabChannels: $("youtubeTabChannels"),
        youtubeLanding: $("youtubeLanding"),
        youtubeFolderView: $("youtubeFolderView"),
        youtubeFolderViewTitle: $("youtubeFolderViewTitle"),
        youtubeFolderVideos: $("youtubeFolderVideos"),
        youtubeResults: $("youtubeResults"),
        youtubeResultsList: $("youtubeResultsList"),
        youtubeChannelView: $("youtubeChannelView"),
        youtubeChannelTitle: $("youtubeChannelTitle"),
        youtubeChannelVideos: $("youtubeChannelVideos"),
        youtubeChannelMore: $("youtubeChannelMore"),
        youtubeFolderPicker: $("youtubeFolderPicker"),
        youtubeFolderPickerList: $("youtubeFolderPickerList"),
        youtubeFolderPickerNew: $("youtubeFolderPickerNew"),
        youtubeFolderPickerCancel: $("youtubeFolderPickerCancel"),
        youtubePlayer: $("youtubePlayer"),
        youtubePlayerClose: $("youtubePlayerClose"),
        youtubePlayerStage: $("youtubePlayerStage"),
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
        openChessLearnButton: $("openChessLearnButton"),
        startChessGameButton: $("startChessGameButton"),

        backFromChessLearnList: $("backFromChessLearnList"),
        openChessLearnCards: $("openChessLearnCards"),
        chessLearnOpeningList: $("chessLearnOpeningList"),

        backFromChessLearnCards: $("backFromChessLearnCards"),
        chessLearnCardsProgress: $("chessLearnCardsProgress"),
        chessLearnCard: $("chessLearnCard"),
        chessLearnCardMoves: $("chessLearnCardMoves"),
        chessLearnCardAnswer: $("chessLearnCardAnswer"),
        chessLearnCardName: $("chessLearnCardName"),
        chessLearnCardSide: $("chessLearnCardSide"),
        chessLearnCardHint: $("chessLearnCardHint"),
        chessLearnCardNext: $("chessLearnCardNext"),

        backFromChessLearnDetail: $("backFromChessLearnDetail"),
        chessLearnDetailTitle: $("chessLearnDetailTitle"),
        chessLearnDetailSide: $("chessLearnDetailSide"),
        chessLearnDetailIdea: $("chessLearnDetailIdea"),
        startChessLearnPractice: $("startChessLearnPractice"),
        chessLearnBoard: $("chessLearnBoard"),
        chessLearnEvalBar: $("chessLearnEvalBar"),
        chessLearnEvalWhite: $("chessLearnEvalWhite"),
        chessLearnEvalLabel: $("chessLearnEvalLabel"),
        chessLearnFeedback: $("chessLearnFeedback"),
        chessLearnPrev: $("chessLearnPrev"),
        chessLearnNext: $("chessLearnNext"),
        chessLearnMoveLabel: $("chessLearnMoveLabel"),
        chessLearnCounter: $("chessLearnCounter"),
        chessLearnReturnLine: $("chessLearnReturnLine"),
        chessLearnMoves: $("chessLearnMoves"),

        backFromChessLearnPractice: $("backFromChessLearnPractice"),
        chessLearnPracticeTitle: $("chessLearnPracticeTitle"),
        chessLearnPracticeSide: $("chessLearnPracticeSide"),
        chessLearnPracticePrompt: $("chessLearnPracticePrompt"),
        chessLearnPracticeBoard: $("chessLearnPracticeBoard"),
        chessLearnPracticeProgress: $("chessLearnPracticeProgress"),
        chessLearnPracticeResult: $("chessLearnPracticeResult"),

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

    let blackHoleScene = null;

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

    let roomTurnBusy = false;
    let roomTurnTimer = null;

    let wikipediaCurrentTitle = "";
    let wikipediaLastQuery = "";
    let wikipediaArticleHistory = [];
    let wikipediaSearchTimer = null;
    let wikipediaRequestToken = 0;
    let wikipediaOpenFolderId = null;
    let wikipediaReturnFolderId = null;
    let wikipediaFolderComposerSaveArticle = false;

    const YOUTUBE_API_KEY = "AIzaSyAz9U2UkGHBuQr-sagektBlN5WxsoR_HAI";
    const YOUTUBE_API_ROOT = "https://www.googleapis.com/youtube/v3";

    let youtubeLastQuery = "";
    let youtubeSearchVideos = [];
    let youtubeSearchChannels = [];
    let youtubeActiveTab = "videos";
    let youtubeSortOrder = "relevance";
    let youtubeOpenFolderId = null;
    let youtubeRequestToken = 0;
    let youtubeCurrentChannel = null;
    let youtubeChannelNextPageToken = "";
    let youtubePendingSaveVideo = null;
    let youtubeFolderComposerSaveVideo = false;

    /*
       Request the side-room images immediately. Safari may otherwise defer
       CSS background images on display:none screens until the first turn.
    */
    [
        "./chess-room-day.png",
        "./chess-room-night.png",
        "./film-room-day.png",
        "./film-room-night.png",
        "./map-room-day.png",
        "./map-room-night.png"
    ].forEach(
        source => {
            const image =
                new Image();

            image.decoding =
                "async";

            image.src =
                source;
        }
    );

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
            ||
            screen.querySelector(
                ".chess-room-background"
            )
            ||
            screen.querySelector(
                ".film-room-background"
            )
            ||
            screen.querySelector(
                ".map-room-background"
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
        document.querySelectorAll(
            ".screen"
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


    function turnBetweenStudyRooms(
        fromScreen,
        toScreen,
        direction = "right"
    ) {
        if (
            roomTurnBusy
            ||
            !fromScreen
            ||
            !toScreen
        ) {
            return;
        }

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (
            reducedMotion
        ) {
            activateScreenImmediately(
                toScreen,
                false
            );

            return;
        }

        const fromVisual =
            screenVisualElement(
                fromScreen
            );

        const toVisual =
            screenVisualElement(
                toScreen
            );

        if (
            !fromVisual
            ||
            !toVisual
        ) {
            activateScreenImmediately(
                toScreen,
                true
            );

            return;
        }

        roomTurnBusy =
            true;

        ++screenTransitionToken;

        clearScreenTransitionOverlay();

        if (
            roomTurnTimer
        ) {
            clearTimeout(
                roomTurnTimer
            );
        }

        const readVisual =
            visual => {
                const style =
                    window.getComputedStyle(
                        visual
                    );

                return {
                    image:
                        style.backgroundImage,
                    size:
                        style.backgroundSize,
                    position:
                        style.backgroundPosition,
                    repeat:
                        style.backgroundRepeat
                };
            };

        const fromStyle =
            readVisual(
                fromVisual
            );

        const toStyle =
            readVisual(
                toVisual
            );

        const stage =
            document.createElement(
                "div"
            );

        stage.className =
            `room-turn-stage ${
                direction
                ===
                "left"
                    ? "room-turn-stage-left"
                    : "room-turn-stage-right"
            }`;

        const makePanel =
            (
                className,
                visualStyle
            ) => {
                const panel =
                    document.createElement(
                        "div"
                    );

                panel.className =
                    `room-turn-panel ${className}`;

                panel.style.backgroundImage =
                    visualStyle.image;

                panel.style.backgroundSize =
                    visualStyle.size;

                panel.style.backgroundPosition =
                    visualStyle.position;

                panel.style.backgroundRepeat =
                    visualStyle.repeat;

                return panel;
            };

        stage.append(
            makePanel(
                "room-turn-stage-source",
                fromStyle
            ),
            makePanel(
                "room-turn-stage-target",
                toStyle
            )
        );

        document.body.classList.add(
            "room-turning"
        );

        document.body.appendChild(
            stage
        );

        /*
           The real target is switched underneath the compositor before
           the animation starts. The temporary stage remains fully opaque,
           so there is never a frame where the page background can flash.
        */
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

        toScreen.classList.add(
            "active"
        );

        window.scrollTo(
            0,
            0
        );

        renderMiniSession();

        void stage.offsetWidth;

        requestAnimationFrame(
            () => {
                stage.classList.add(
                    "room-turn-stage-go"
                );
            }
        );

        let cleaned =
            false;

        const cleanup =
            () => {
                if (
                    cleaned
                ) {
                    return;
                }

                cleaned =
                    true;

                stage.remove();

                document.body.classList.remove(
                    "room-turning"
                );

                roomTurnBusy =
                    false;

                if (
                    roomTurnTimer
                ) {
                    clearTimeout(
                        roomTurnTimer
                    );
                }

                roomTurnTimer =
                    null;
            };

        const finishOnPaintedTarget =
            () => {
                requestAnimationFrame(
                    () => {
                        requestAnimationFrame(
                            cleanup
                        );
                    }
                );
            };

        stage.addEventListener(
            "transitionend",
            event => {
                if (
                    event.target.classList.contains(
                        "room-turn-stage-target"
                    )
                    &&
                    event.propertyName
                    ===
                    "transform"
                ) {
                    finishOnPaintedTarget();
                }
            }
        );

        roomTurnTimer =
            window.setTimeout(
                finishOnPaintedTarget,
                790
            );
    }


    function showScreen(
        screen
    ) {
        if (
            focusModeEnabled
            &&
            (
                screen === screens.textsHub
                ||
                screen === screens.chessRoom
                ||
                screen === screens.filmRoom
                ||
                screen === screens.mapRoom
                ||
                screen === screens.wallpaperRuntime
            )
        ) {
            screen =
                screens.focus;
        }

        if (
            wallpaperSystemReady
            &&
            activeWallpaperId
            !==
            SYSTEM_WALLPAPER_ID
            &&
            (
                screen === screens.textsHub
                ||
                screen === screens.chessRoom
                ||
                screen === screens.filmRoom
                ||
                screen === screens.mapRoom
            )
            &&
            !wallpaperBypassRoomRedirect
        ) {
            renderActiveWallpaperRoot();
            screen = wallpaperRuntimeScreen;
        }

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
            wikipedia: {
                folders: []
            },
            youtube: {
                folders: []
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


    function normalizeWikipediaFolder(
        folder
    ) {
        const createdAt =
            folder?.createdAt
            ??
            nowIso();

        const articles =
            Array.isArray(
                folder?.articles
            )
                ? folder.articles
                    .map(
                        article => {
                            const title =
                                String(
                                    article?.title
                                    ??
                                    ""
                                )
                                .trim();

                            if (
                                !title
                            ) {
                                return null;
                            }

                            return {
                                title,
                                addedAt:
                                    article?.addedAt
                                    ??
                                    createdAt
                            };
                        }
                    )
                    .filter(
                        Boolean
                    )
                : [];

        const seen =
            new Set();

        return {
            id:
                folder?.id
                ??
                createId(),
            name:
                String(
                    folder?.name
                    ??
                    "Ordner"
                )
                .trim()
                ||
                "Ordner",
            articles:
                articles.filter(
                    article => {
                        const key =
                            article.title
                            .toLocaleLowerCase(
                                "de-DE"
                            );

                        if (
                            seen.has(
                                key
                            )
                        ) {
                            return false;
                        }

                        seen.add(
                            key
                        );

                        return true;
                    }
                ),
            createdAt
        };
    }


    function normalizeYoutubeFolder(
        folder
    ) {
        const createdAt =
            folder?.createdAt
            ??
            nowIso();

        const videos =
            Array.isArray(
                folder?.videos
            )
                ? folder.videos
                    .map(
                        video => {
                            const videoId =
                                String(
                                    video?.videoId
                                    ??
                                    ""
                                )
                                .trim();

                            const title =
                                String(
                                    video?.title
                                    ??
                                    ""
                                )
                                .trim();

                            if (
                                !videoId
                                ||
                                !title
                            ) {
                                return null;
                            }

                            return {
                                videoId,
                                title,
                                channelId:
                                    String(
                                        video?.channelId
                                        ??
                                        ""
                                    )
                                    .trim(),
                                channelTitle:
                                    String(
                                        video?.channelTitle
                                        ??
                                        ""
                                    )
                                    .trim(),
                                addedAt:
                                    video?.addedAt
                                    ??
                                    createdAt
                            };
                        }
                    )
                    .filter(
                        Boolean
                    )
                : [];

        const seen =
            new Set();

        return {
            id:
                folder?.id
                ??
                createId(),
            name:
                String(
                    folder?.name
                    ??
                    "Ordner"
                )
                .trim()
                ||
                "Ordner",
            videos:
                videos.filter(
                    video => {
                        if (
                            seen.has(
                                video.videoId
                            )
                        ) {
                            return false;
                        }

                        seen.add(
                            video.videoId
                        );

                        return true;
                    }
                ),
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

        clean.wikipedia.folders =
            Array.isArray(
                raw.wikipedia?.folders
            )
                ? raw.wikipedia.folders.map(
                    normalizeWikipediaFolder
                )
                : [];

        clean.youtube.folders =
            Array.isArray(
                raw.youtube?.folders
            )
                ? raw.youtube.folders.map(
                    normalizeYoutubeFolder
                )
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
                showScreen(screens.textsHub);

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
                screens.textsHub
            );
        }
    );

    el.backFromTextsHub.addEventListener(
        "click",
        () => {
            showScreen(
                screens.textsHub
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

            showScreen(
                screens.plannerHub
            );
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
    // PLANER — PANTHEON-NAVIGATION
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
               Odysseus nutzt die bestehende Los-Logik:
               laufende Session, Review/Abschluss oder neuer aktiver Plan.
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

                requestAnimationFrame(
                    () => {
                        if (
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



    // ==================================================
    // V44 — VERFEINERTE SCHWARZES-LOCH-UHR
    //
    // Änderungen gegenüber v43:
    // - keine explizit gemalte Akkretionsscheibe mehr
    // - kein heller / weißer Ring um den Ereignishorizont
    // - realistischere zeitliche Skalierung: vollständige Schwärze
    //   erst ganz am Ende
    // - Objekte beginnen in der Nähe des Lochs thermisch zu glühen;
    //   dadurch entsteht die Scheibenanmutung organisch aus dem Einfall
    // - jede Session-Einheit erhält nun bei jedem Start neue
    //   zufällige Startpositionen der Objekte
    // ==================================================

    function clamp01(
        value
    ) {
        return Math.max(
            0,
            Math.min(
                1,
                value
            )
        );
    }


    function smoothstep01(
        value
    ) {
        const t =
            clamp01(
                value
            );

        return (
            t
            *
            t
            *
            (
                3
                -
                2
                *
                t
            )
        );
    }


    function cosmicRng(
        seed
    ) {
        let state =
            seed
            >>>
            0;

        return () => {
            state +=
                0x6D2B79F5;

            let value =
                state;

            value =
                Math.imul(
                    value
                    ^
                    (
                        value
                        >>>
                        15
                    ),
                    value
                    |
                    1
                );

            value ^=
                value
                +
                Math.imul(
                    value
                    ^
                    (
                        value
                        >>>
                        7
                    ),
                    value
                    |
                    61
                );

            return (
                (
                    value
                    ^
                    (
                        value
                        >>>
                        14
                    )
                )
                >>>
                0
            )
            /
            4294967296;
        };
    }


    function cosmicGaussian(
        random
    ) {
        let u = 0;
        let v = 0;

        while (
            u
            ===
            0
        ) {
            u = random();
        }

        while (
            v
            ===
            0
        ) {
            v = random();
        }

        return (
            Math.sqrt(
                -2
                *
                Math.log(
                    u
                )
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


    function randomSceneSeed() {
        if (
            typeof crypto !== "undefined"
            &&
            typeof crypto.getRandomValues === "function"
        ) {
            const values =
                new Uint32Array(
                    1
                );

            crypto.getRandomValues(
                values
            );

            return values[0] >>> 0;
        }

        return (
            (
                Date.now()
                ^
                Math.floor(
                    Math.random()
                    *
                    0xFFFFFFFF
                )
            )
            >>>
            0
        );
    }


    function createGalaxySprite(
        random,
        index
    ) {
        const size = 256;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext("2d");
        const center = size / 2;

        const arms =
            index % 3 === 2 ? 3 : 2;

        const flatten =
            0.48 + random() * 0.24;

        const twist =
            0.045 + random() * 0.03;

        const palettes = [
            { core: "255,235,196", warm: "244,192,126", cool: "167,196,255" },
            { core: "255,246,220", warm: "235,174,116", cool: "142,185,255" },
            { core: "242,235,213", warm: "215,170,122", cool: "169,199,237" }
        ];

        const palette = palettes[index % palettes.length];

        context.clearRect(0, 0, size, size);
        context.globalCompositeOperation = "lighter";

        const halo = context.createRadialGradient(
            center,
            center,
            0,
            center,
            center,
            center * 0.94
        );

        halo.addColorStop(0, `rgba(${palette.core},0.64)`);
        halo.addColorStop(0.14, `rgba(${palette.warm},0.25)`);
        halo.addColorStop(0.52, `rgba(${palette.cool},0.05)`);
        halo.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = halo;
        context.beginPath();
        context.arc(center, center, center * 0.94, 0, Math.PI * 2);
        context.fill();

        const starCount = 1320;

        for (let particleIndex = 0; particleIndex < starCount; particleIndex += 1) {
            const radius = Math.pow(random(), 0.58) * center * 0.82;
            const arm = particleIndex % arms;
            const armAngle = arm * (Math.PI * 2 / arms);
            const scatter = cosmicGaussian(random) * (0.12 + radius / center * 0.22);
            const angle = armAngle + radius * twist + scatter;
            const radialJitter = cosmicGaussian(random) * 3.1;
            const rr = Math.max(0, radius + radialJitter);
            const x = center + Math.cos(angle) * rr;
            const y = center + Math.sin(angle) * rr * flatten;
            const normalized = rr / (center * 0.82);
            const warmChance = random();
            let color = palette.cool;
            if (warmChance < 0.34) {
                color = palette.warm;
            }
            if (normalized < 0.18) {
                color = palette.core;
            }
            const alpha = (1 - normalized) * (0.24 + random() * 0.62);
            const pointSize = 0.35 + random() * (normalized < 0.2 ? 1.2 : 0.7);
            context.fillStyle = `rgba(${color},${alpha})`;
            context.beginPath();
            context.arc(x, y, pointSize, 0, Math.PI * 2);
            context.fill();
        }

        const core = context.createRadialGradient(center, center, 0, center, center, 28);
        core.addColorStop(0, `rgba(${palette.core},0.98)`);
        core.addColorStop(0.18, `rgba(${palette.core},0.72)`);
        core.addColorStop(1, "rgba(255,255,255,0)");

        context.fillStyle = core;
        context.beginPath();
        context.arc(center, center, 28, 0, Math.PI * 2);
        context.fill();
        context.globalCompositeOperation = "source-over";

        return canvas;
    }


    function makeBlackHoleScene() {
        const seed = randomSceneSeed();
        const random = cosmicRng(seed);
        const stars = [];
        const starCount = 620;

        for (let index = 0; index < starCount; index += 1) {
            const x = random();
            const y = random();
            const dx = x - 0.5;
            const dy = y - 0.5;
            const normalizedRadius = Math.min(1, Math.hypot(dx, dy) / 0.72);

            stars.push({
                x,
                y,
                captureStart: clamp01(0.16 + normalizedRadius * 0.58 + (random() - 0.5) * 0.12),
                spin: random() < 0.5 ? -1 : 1,
                size: 0.38 + Math.pow(random(), 2.1) * 1.7,
                alpha: 0.34 + random() * 0.62,
                phase: random() * Math.PI * 2,
                twinkle: 0.35 + random() * 1.1,
                warmth: random()
            });
        }

        const galaxies = [];
        const galaxyCount = 5;

        for (let index = 0; index < galaxyCount; index += 1) {
            const angle = random() * Math.PI * 2;
            const radius = 0.32 + random() * 0.34;
            galaxies.push({
                x: 0.5 + Math.cos(angle) * radius,
                y: 0.5 + Math.sin(angle) * radius,
                captureStart: clamp01(0.38 + index * 0.10 + random() * 0.08),
                spin: random() < 0.5 ? -1 : 1,
                rotation: random() * Math.PI * 2,
                scale: 0.60 + random() * 0.44,
                sprite: createGalaxySprite(random, index)
            });
        }

        const planetColors = [
            ["47,85,125", "133,179,216"],
            ["117,65,43", "216,149,83"],
            ["65,91,70", "166,180,111"],
            ["89,71,123", "166,139,198"],
            ["110,92,68", "215,194,148"]
        ];

        const planets = [];
        const planetCount = 6;

        for (let index = 0; index < planetCount; index += 1) {
            const angle = random() * Math.PI * 2;
            const radius = 0.25 + random() * 0.40;
            planets.push({
                x: 0.5 + Math.cos(angle) * radius,
                y: 0.5 + Math.sin(angle) * radius,
                captureStart: clamp01(0.44 + index * 0.07 + random() * 0.08),
                spin: random() < 0.5 ? -1 : 1,
                size: 6 + random() * 13,
                ringed: index === 2,
                colors: planetColors[index % planetColors.length]
            });
        }

        return { seed, stars, galaxies, planets };
    }


    function blackHoleRadius(
        progress,
        width,
        height
    ) {
        const diagonal = Math.hypot(width, height);
        const base = Math.max(18, Math.min(width, height) * 0.045);

        let eased;

        if (progress < 0.92) {
            const p = progress / 0.92;
            eased = 0.17 * Math.pow(p, 2.25);
        } else {
            const p = (progress - 0.92) / 0.08;
            eased = 0.17 + 0.83 * Math.pow(clamp01(p), 1.4);
        }

        return base + diagonal * 0.82 * eased;
    }


    function cosmicObjectPosition(
        object,
        progress,
        width,
        height,
        horizonRadius
    ) {
        const centerX = width / 2;
        const centerY = height / 2;
        const startX = object.x * width;
        const startY = object.y * height;
        const dx = startX - centerX;
        const dy = startY - centerY;
        const initialRadius = Math.max(1, Math.hypot(dx, dy));
        const baseAngle = Math.atan2(dy, dx);

        const local = progress <= object.captureStart
            ? 0
            : clamp01((progress - object.captureStart) / (1 - object.captureStart));

        const plunge = smoothstep01(local);
        const ambientTurn = object.spin * progress * 0.08;
        const angle = baseAngle + ambientTurn + object.spin * (local * 0.72 + local * local * 5.5);

        let radius = initialRadius * (1 - 0.78 * Math.pow(plunge, 1.24));

        if (progress > 0.96) {
            const crush = smoothstep01((progress - 0.96) / 0.04);
            radius *= (1 - 0.88 * crush);
        }

        const visible = local < 0.999 && radius > horizonRadius * 0.985;

        return {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            angle,
            radius,
            initialRadius,
            q: local,
            visible
        };
    }


    function drawCosmicBackground(
        context,
        width,
        height
    ) {
        context.fillStyle = "#010204";
        context.fillRect(0, 0, width, height);

        context.save();
        context.translate(width * 0.48, height * 0.49);
        context.rotate(-0.48);
        context.scale(1.9, 0.34);

        const dust = context.createRadialGradient(
            0,
            0,
            0,
            0,
            0,
            Math.max(width, height) * 0.48
        );

        dust.addColorStop(0, "rgba(88,106,132,0.072)");
        dust.addColorStop(0.42, "rgba(99,83,111,0.03)");
        dust.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = dust;
        context.beginPath();
        context.arc(0, 0, Math.max(width, height) * 0.48, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }


    function drawInfallHeat(
        context,
        position,
        baseRadius,
        q,
        strength
    ) {
        if (q < 0.60) {
            return;
        }

        const heat = smoothstep01((q - 0.60) / 0.40) * strength;
        const tangent = position.angle + Math.PI / 2;

        context.save();
        context.translate(position.x, position.y);
        context.rotate(tangent);

        const hotLength = baseRadius * (1.6 + heat * 4.4);
        const hotHeight = Math.max(1.2, baseRadius * (0.65 - heat * 0.18));

        context.scale(1 + heat * 2.2, Math.max(0.22, 1 - heat * 0.68));

        const warm = context.createRadialGradient(0, 0, 0, 0, 0, hotLength);
        warm.addColorStop(0, `rgba(255,250,235,${0.18 * heat})`);
        warm.addColorStop(0.20, `rgba(255,206,128,${0.32 * heat})`);
        warm.addColorStop(0.55, `rgba(247,122,48,${0.18 * heat})`);
        warm.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = warm;
        context.beginPath();
        context.ellipse(0, 0, hotLength, hotHeight, 0, 0, Math.PI * 2);
        context.fill();

        const cool = context.createRadialGradient(0, 0, 0, 0, 0, hotLength * 0.62);
        cool.addColorStop(0, `rgba(198,222,255,${0.08 * heat})`);
        cool.addColorStop(0.58, `rgba(102,154,255,${0.06 * heat})`);
        cool.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = cool;
        context.beginPath();
        context.ellipse(0, 0, hotLength * 0.62, hotHeight * 0.68, 0, 0, Math.PI * 2);
        context.fill();

        context.restore();
    }


    function drawCapturedStar(
        context,
        star,
        position,
        progress,
        now
    ) {
        if (!position.visible) {
            return;
        }

        const q = position.q;
        const tangent = position.angle + Math.PI / 2;
        const stretch = 0.4 + Math.pow(q, 3.4) * 15;
        const twinkle = 0.86 + 0.14 * Math.sin(now * 0.001 * star.twinkle + star.phase);
        const fade = 1 - Math.pow(q, 6);

        let color = "214,226,255";
        if (star.warmth < 0.16) {
            color = "255,220,174";
        } else if (star.warmth > 0.88) {
            color = "178,205,255";
        }

        drawInfallHeat(context, position, Math.max(1.4, star.size * 4.2), q, 0.6);

        const alpha = star.alpha * twinkle * fade;
        context.strokeStyle = `rgba(${color},${alpha})`;
        context.lineWidth = Math.max(0.45, star.size * 0.72);
        context.beginPath();
        context.moveTo(
            position.x - Math.cos(tangent) * stretch * 0.5,
            position.y - Math.sin(tangent) * stretch * 0.5
        );
        context.lineTo(
            position.x + Math.cos(tangent) * stretch * 0.5,
            position.y + Math.sin(tangent) * stretch * 0.5
        );
        context.stroke();

        context.fillStyle = `rgba(${color},${Math.min(1, alpha * 1.18)})`;
        context.beginPath();
        context.arc(
            position.x,
            position.y,
            Math.max(0.42, star.size * (1 + q * 0.42)),
            0,
            Math.PI * 2
        );
        context.fill();
    }


    function drawCapturedGalaxy(
        context,
        galaxy,
        position
    ) {
        if (!position.visible) {
            return;
        }

        const q = position.q;
        const stretch = 1 + Math.pow(q, 3) * 2.1;
        const compress = Math.max(0.30, 1 - Math.pow(q, 2.7) * 0.58);
        const fade = 1 - Math.pow(q, 5);
        const baseSize = Math.min(150, Math.max(72, position.initialRadius * 0.32)) * galaxy.scale;

        drawInfallHeat(context, position, baseSize * 0.24, q, 1.05);

        context.save();
        context.translate(position.x, position.y);
        context.rotate(galaxy.rotation + position.angle * 0.10 + galaxy.spin * q * 1.9);
        context.scale(stretch, compress);
        context.globalAlpha = 0.94 * fade;
        context.drawImage(galaxy.sprite, -baseSize / 2, -baseSize / 2, baseSize, baseSize);
        context.restore();
    }


    function drawCapturedPlanet(
        context,
        planet,
        position
    ) {
        if (!position.visible) {
            return;
        }

        const q = position.q;
        const radius = planet.size * (1 + q * 0.36);
        const stretch = 1 + Math.pow(q, 3.2) * 1.35;
        const fade = 1 - Math.pow(q, 5);

        drawInfallHeat(context, position, radius * 1.35, q, 0.92);

        context.save();
        context.translate(position.x, position.y);
        context.rotate(position.angle + Math.PI / 2);
        context.scale(stretch, Math.max(0.55, 1 - q * 0.34));

        if (planet.ringed) {
            context.strokeStyle = `rgba(194,176,139,${0.34 * fade})`;
            context.lineWidth = Math.max(1, radius * 0.12);
            context.beginPath();
            context.ellipse(0, 0, radius * 1.72, radius * 0.46, 0, 0, Math.PI * 2);
            context.stroke();
        }

        const gradient = context.createRadialGradient(
            -radius * 0.35,
            -radius * 0.42,
            radius * 0.08,
            0,
            0,
            radius * 1.08
        );

        gradient.addColorStop(0, `rgba(${planet.colors[1]},${0.98 * fade})`);
        gradient.addColorStop(0.48, `rgba(${planet.colors[0]},${0.94 * fade})`);
        gradient.addColorStop(1, `rgba(3,5,8,${0.98 * fade})`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }


    function drawBlackHole(
        context,
        width,
        height,
        progress,
        horizonRadius
    ) {
        const centerX = width / 2;
        const centerY = height / 2;

        context.save();
        context.translate(centerX, centerY);

        const lens = context.createRadialGradient(
            0,
            0,
            horizonRadius * 0.55,
            0,
            0,
            horizonRadius * 1.9
        );

        lens.addColorStop(0, "rgba(0,0,0,0)");
        lens.addColorStop(0.34, "rgba(0,0,0,0.10)");
        lens.addColorStop(0.72, "rgba(8,10,14,0.18)");
        lens.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = lens;
        context.beginPath();
        context.arc(0, 0, horizonRadius * 1.9, 0, Math.PI * 2);
        context.fill();

        const edge = context.createRadialGradient(
            -horizonRadius * 0.12,
            -horizonRadius * 0.10,
            horizonRadius * 0.10,
            0,
            0,
            horizonRadius
        );

        edge.addColorStop(0, "#000000");
        edge.addColorStop(0.80, "#000000");
        edge.addColorStop(1, "#010101");

        context.fillStyle = edge;
        context.beginPath();
        context.arc(0, 0, horizonRadius, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }


    function generateUniverse() {
        blackHoleScene = makeBlackHoleScene();
        universeSeed = blackHoleScene.seed;
        universeParticles = [];
        universeNodes = [];
        universeLastRendered = [];
    }


    function drawUniverse(
        now
    ) {
        const canvas = el.universeCanvas;
        const context = canvas.getContext("2d", { alpha: false });
        const { width, height, dpr } = sizeUniverseCanvas();

        context.setTransform(dpr, 0, 0, dpr, 0, 0);

        const progress = clamp01(sessionVisualProgress());

        drawCosmicBackground(context, width, height);

        if (!blackHoleScene) {
            blackHoleScene = makeBlackHoleScene();
        }

        const horizonRadius = blackHoleRadius(progress, width, height);

        blackHoleScene.stars.forEach(star => {
            const position = cosmicObjectPosition(star, progress, width, height, horizonRadius);
            drawCapturedStar(context, star, position, progress, now);
        });

        blackHoleScene.galaxies.forEach(galaxy => {
            const position = cosmicObjectPosition(galaxy, progress, width, height, horizonRadius);
            drawCapturedGalaxy(context, galaxy, position);
        });

        blackHoleScene.planets.forEach(planet => {
            const position = cosmicObjectPosition(planet, progress, width, height, horizonRadius);
            drawCapturedPlanet(context, planet, position);
        });

        drawBlackHole(context, width, height, progress, horizonRadius);

        const finalFade = smoothstep01((progress - 0.988) / 0.012);

        if (finalFade > 0) {
            context.fillStyle = `rgba(0,0,0,${finalFade})`;
            context.fillRect(0, 0, width, height);
        }

        if (progress >= 0.9995) {
            context.fillStyle = "#000";
            context.fillRect(0, 0, width, height);
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

        blackHoleScene =
            null;

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
            ) {
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
                screens.textsHub
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
    // BIBLIOTHEK / WIKIPEDIA
    // ==================================================

    const WIKIPEDIA_API =
        "https://de.wikipedia.org/w/api.php";


    function wikipediaApiUrl(
        parameters
    ) {
        const url =
            new URL(
                WIKIPEDIA_API
            );

        Object.entries(
            parameters
        ).forEach(
            ([key, value]) => {
                url.searchParams.set(
                    key,
                    value
                );
            }
        );

        url.searchParams.set(
            "origin",
            "*"
        );

        url.searchParams.set(
            "format",
            "json"
        );

        url.searchParams.set(
            "formatversion",
            "2"
        );

        return url.toString();
    }


    function setWikipediaStatus(
        message = "",
        busy = false
    ) {
        el.wikipediaStatus.textContent =
            message;

        el.wikipediaStatus.classList.toggle(
            "busy",
            busy
        );
    }


    function hideWikipediaFolderComposer() {
        el.wikipediaFolderComposer.classList.add(
            "hidden"
        );

        el.wikipediaFolderNameInput.value =
            "";

        wikipediaFolderComposerSaveArticle =
            false;
    }


    function showWikipediaFolderComposer(
        saveCurrentArticle = false
    ) {
        wikipediaFolderComposerSaveArticle =
            Boolean(
                saveCurrentArticle
                &&
                wikipediaCurrentTitle
            );

        el.wikipediaFolderComposer.classList.remove(
            "hidden"
        );

        window.setTimeout(
            () => {
                el.wikipediaFolderNameInput.focus();
            },
            40
        );
    }


    function wikipediaFolderById(
        folderId
    ) {
        return (
            state.wikipedia.folders.find(
                folder =>
                    folder.id
                    ===
                    folderId
            )
            ??
            null
        );
    }


    function renderWikipediaFolders() {
        el.wikipediaFolders.innerHTML =
            "";

        const folders =
            state.wikipedia.folders;

        const landingVisible =
            !el.wikipediaLanding.classList.contains(
                "hidden"
            );

        el.wikipediaFolders.classList.toggle(
            "hidden",
            !landingVisible
            ||
            folders.length
            ===
            0
        );

        el.wikipediaFolderButton.classList.toggle(
            "hidden",
            !landingVisible
        );

        folders.forEach(
            folder => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wiki-folder-chip";

                if (
                    folder.id
                    ===
                    wikipediaOpenFolderId
                ) {
                    button.classList.add(
                        "active"
                    );
                }

                const icon =
                    document.createElement(
                        "span"
                    );

                icon.className =
                    "wiki-folder-chip-icon";

                icon.innerHTML =
                    bookshelfIconSvg();

                const label =
                    document.createElement(
                        "span"
                    );

                label.className =
                    "wiki-folder-chip-label";

                label.textContent =
                    folder.name;

                const count =
                    document.createElement(
                        "span"
                    );

                count.className =
                    "wiki-folder-chip-count";

                count.textContent =
                    String(
                        folder.articles.length
                    );

                button.append(
                    icon,
                    label,
                    count
                );

                button.addEventListener(
                    "click",
                    () => {
                        showWikipediaFolder(
                            folder.id
                        );
                    }
                );

                el.wikipediaFolders.appendChild(
                    button
                );
            }
        );
    }


    function showWikipediaLanding() {
        wikipediaCurrentTitle =
            "";

        wikipediaOpenFolderId =
            null;

        wikipediaReturnFolderId =
            null;

        el.wikipediaLanding.classList.remove(
            "hidden"
        );

        el.wikipediaFolderView.classList.add(
            "hidden"
        );

        el.wikipediaResults.classList.add(
            "hidden"
        );

        el.wikipediaArticle.classList.add(
            "hidden"
        );

        el.wikipediaResults.innerHTML =
            "";

        renderWikipediaFolders();

        setWikipediaStatus(
            ""
        );
    }


    function showWikipediaFolder(
        folderId
    ) {
        const folder =
            wikipediaFolderById(
                folderId
            );

        if (
            !folder
        ) {
            showWikipediaLanding();
            return;
        }

        wikipediaRequestToken +=
            1;

        wikipediaCurrentTitle =
            "";

        wikipediaOpenFolderId =
            folder.id;

        wikipediaReturnFolderId =
            folder.id;

        el.wikipediaLanding.classList.add(
            "hidden"
        );

        el.wikipediaResults.classList.add(
            "hidden"
        );

        el.wikipediaArticle.classList.add(
            "hidden"
        );

        el.wikipediaFolderView.classList.remove(
            "hidden"
        );

        el.wikipediaFolderViewTitle.textContent =
            folder.name;

        el.wikipediaFolderArticles.innerHTML =
            "";

        if (
            folder.articles.length
            ===
            0
        ) {
            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "wiki-folder-empty";

            empty.textContent =
                "Noch keine Artikel.";

            el.wikipediaFolderArticles.appendChild(
                empty
            );
        } else {
            folder.articles.forEach(
                article => {
                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type =
                        "button";

                    button.className =
                        "wiki-folder-article";

                    button.textContent =
                        article.title;

                    button.addEventListener(
                        "click",
                        () => {
                            wikipediaReturnFolderId =
                                folder.id;

                            openWikipediaArticle(
                                article.title,
                                false
                            );
                        }
                    );

                    el.wikipediaFolderArticles.appendChild(
                        button
                    );
                }
            );
        }

        renderWikipediaFolders();

        setWikipediaStatus(
            ""
        );
    }


    function createWikipediaFolder(
        rawName
    ) {
        const name =
            String(
                rawName
                ??
                ""
            )
            .trim();

        if (
            !name
        ) {
            return null;
        }

        const duplicate =
            state.wikipedia.folders.find(
                folder =>
                    folder.name.toLocaleLowerCase(
                        "de-DE"
                    )
                    ===
                    name.toLocaleLowerCase(
                        "de-DE"
                    )
            );

        if (
            duplicate
        ) {
            return duplicate;
        }

        const folder = {
            id:
                createId(),
            name,
            articles: [],
            createdAt:
                nowIso()
        };

        state.wikipedia.folders.push(
            folder
        );

        saveState();

        renderWikipediaFolders();

        return folder;
    }


    function plainWikipediaSnippet(
        html
    ) {
        const holder =
            document.createElement(
                "div"
            );

        holder.innerHTML =
            html
            ??
            "";

        return (
            holder.textContent
            ??
            ""
        )
            .replace(
                /\s+/g,
                " "
            )
            .trim();
    }


    async function searchWikipedia(
        query
    ) {
        const cleanQuery =
            String(
                query
                ??
                ""
            )
            .trim();

        if (
            cleanQuery.length
            <
            2
        ) {
            showWikipediaLanding();
            return;
        }

        wikipediaLastQuery =
            cleanQuery;

        wikipediaCurrentTitle =
            "";

        wikipediaOpenFolderId =
            null;

        wikipediaReturnFolderId =
            null;

        const token =
            ++wikipediaRequestToken;

        el.wikipediaLanding.classList.add(
            "hidden"
        );

        el.wikipediaFolderView.classList.add(
            "hidden"
        );

        el.wikipediaArticle.classList.add(
            "hidden"
        );

        el.wikipediaResults.classList.remove(
            "hidden"
        );

        el.wikipediaResults.innerHTML =
            "";

        renderWikipediaFolders();

        setWikipediaStatus(
            "Suche …",
            true
        );

        try {
            const response =
                await fetch(
                    wikipediaApiUrl({
                        action: "query",
                        list: "search",
                        srsearch: cleanQuery,
                        srlimit: "10",
                        srprop: "snippet|wordcount",
                        utf8: "1"
                    }),
                    {
                        mode: "cors",
                        credentials: "omit"
                    }
                );

            if (
                !response.ok
            ) {
                throw new Error(
                    `Wikipedia HTTP ${response.status}`
                );
            }

            const data =
                await response.json();

            if (
                token
                !==
                wikipediaRequestToken
            ) {
                return;
            }

            const results =
                data.query
                &&
                Array.isArray(
                    data.query.search
                )
                    ? data.query.search
                    : [];

            renderWikipediaResults(
                results
            );

            setWikipediaStatus(
                results.length
                    ? ""
                    : "Nichts gefunden."
            );

        } catch (
            error
        ) {
            console.error(
                "Wikipedia search failed:",
                error
            );

            if (
                token
                !==
                wikipediaRequestToken
            ) {
                return;
            }

            setWikipediaStatus(
                "Wikipedia konnte gerade nicht erreicht werden."
            );
        }
    }


    function renderWikipediaResults(
        results
    ) {
        el.wikipediaResults.innerHTML =
            "";

        results.forEach(
            result => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wiki-result";

                const title =
                    document.createElement(
                        "span"
                    );

                title.className =
                    "wiki-result-title";

                title.textContent =
                    result.title;

                const snippet =
                    document.createElement(
                        "span"
                    );

                snippet.className =
                    "wiki-result-snippet";

                snippet.textContent =
                    plainWikipediaSnippet(
                        result.snippet
                    );

                button.append(
                    title,
                    snippet
                );

                button.addEventListener(
                    "click",
                    () => {
                        wikipediaReturnFolderId =
                            null;

                        openWikipediaArticle(
                            result.title,
                            false
                        );
                    }
                );

                el.wikipediaResults.appendChild(
                    button
                );
            }
        );
    }


    function normalizeWikipediaMediaUrl(
        value
    ) {
        const raw =
            String(
                value
                ??
                ""
            );

        if (
            raw.startsWith(
                "//"
            )
        ) {
            return `https:${raw}`;
        }

        if (
            raw.startsWith(
                "/"
            )
        ) {
            return `https://de.wikipedia.org${raw}`;
        }

        return raw;
    }


    function wikipediaTitleFromHref(
        href
    ) {
        if (
            !href
            ||
            href.startsWith(
                "#"
            )
        ) {
            return null;
        }

        try {
            const url =
                new URL(
                    href,
                    "https://de.wikipedia.org"
                );

            if (
                url.hostname
                !==
                "de.wikipedia.org"
                ||
                !url.pathname.startsWith(
                    "/wiki/"
                )
            ) {
                return null;
            }

            const title =
                decodeURIComponent(
                    url.pathname.slice(
                        6
                    )
                )
                .replace(
                    /_/g,
                    " "
                );

            if (
                /^(Datei|File|Spezial|Special|Hilfe|Help|Portal|Kategorie|Category|Wikipedia):/i.test(
                    title
                )
            ) {
                return null;
            }

            return title;

        } catch (
            error
        ) {
            return null;
        }
    }


    function sanitizeWikipediaHtml(
        html
    ) {
        const parser =
            new DOMParser();

        const documentNode =
            parser.parseFromString(
                String(
                    html
                    ??
                    ""
                ),
                "text/html"
            );

        documentNode.querySelectorAll(
            "script, style, iframe, object, embed, form, input, button, textarea, select, link, meta, noscript, .mw-editsection, .navbox, .vertical-navbox, .metadata, .noprint"
        ).forEach(
            node => {
                node.remove();
            }
        );

        documentNode.querySelectorAll(
            "*"
        ).forEach(
            node => {
                Array.from(
                    node.attributes
                ).forEach(
                    attribute => {
                        const name =
                            attribute.name.toLowerCase();

                        if (
                            name.startsWith(
                                "on"
                            )
                            ||
                            name
                            ===
                            "style"
                            ||
                            name
                            ===
                            "srcdoc"
                        ) {
                            node.removeAttribute(
                                attribute.name
                            );
                        }
                    }
                );
            }
        );

        documentNode.querySelectorAll(
            "img"
        ).forEach(
            image => {
                image.loading =
                    "lazy";

                image.decoding =
                    "async";

                if (
                    image.hasAttribute(
                        "src"
                    )
                ) {
                    image.src =
                        normalizeWikipediaMediaUrl(
                            image.getAttribute(
                                "src"
                            )
                        );
                }

                if (
                    image.hasAttribute(
                        "srcset"
                    )
                ) {
                    const normalized =
                        image
                        .getAttribute(
                            "srcset"
                        )
                        .split(
                            ","
                        )
                        .map(
                            part => {
                                const bits =
                                    part
                                    .trim()
                                    .split(
                                        /\s+/
                                    );

                                bits[0] =
                                    normalizeWikipediaMediaUrl(
                                        bits[0]
                                    );

                                return bits.join(
                                    " "
                                );
                            }
                        )
                        .join(
                            ", "
                        );

                    image.setAttribute(
                        "srcset",
                        normalized
                    );
                }
            }
        );

        documentNode.querySelectorAll(
            "a[href]"
        ).forEach(
            anchor => {
                const href =
                    anchor.getAttribute(
                        "href"
                    );

                if (
                    href
                    &&
                    href.startsWith(
                        "#"
                    )
                ) {
                    return;
                }

                const internalTitle =
                    wikipediaTitleFromHref(
                        href
                    );

                if (
                    internalTitle
                ) {
                    anchor.href =
                        "#";

                    anchor.dataset.wikiTitle =
                        internalTitle;

                    return;
                }

                try {
                    const externalUrl =
                        new URL(
                            href,
                            "https://de.wikipedia.org"
                        );

                    anchor.href =
                        externalUrl.href;

                    anchor.target =
                        "_blank";

                    anchor.rel =
                        "noopener noreferrer";

                } catch (
                    error
                ) {
                    anchor.removeAttribute(
                        "href"
                    );
                }
            }
        );

        return documentNode.body.innerHTML;
    }


    async function openWikipediaArticle(
        title,
        pushHistory = true
    ) {
        const cleanTitle =
            String(
                title
                ??
                ""
            )
            .trim();

        if (
            !cleanTitle
        ) {
            return;
        }

        if (
            pushHistory
            &&
            wikipediaCurrentTitle
        ) {
            wikipediaArticleHistory.push(
                wikipediaCurrentTitle
            );
        }

        const token =
            ++wikipediaRequestToken;

        setWikipediaStatus(
            "Artikel wird geladen …",
            true
        );

        try {
            const response =
                await fetch(
                    wikipediaApiUrl({
                        action: "parse",
                        page: cleanTitle,
                        prop: "text|displaytitle",
                        redirects: "1"
                    }),
                    {
                        mode: "cors",
                        credentials: "omit"
                    }
                );

            if (
                !response.ok
            ) {
                throw new Error(
                    `Wikipedia HTTP ${response.status}`
                );
            }

            const data =
                await response.json();

            if (
                token
                !==
                wikipediaRequestToken
            ) {
                return;
            }

            if (
                !data.parse
                ||
                !data.parse.text
            ) {
                throw new Error(
                    "Wikipedia article missing"
                );
            }

            wikipediaCurrentTitle =
                data.parse.title
                ||
                cleanTitle;

            wikipediaOpenFolderId =
                null;

            el.wikipediaLanding.classList.add(
                "hidden"
            );

            el.wikipediaFolderView.classList.add(
                "hidden"
            );

            el.wikipediaResults.classList.add(
                "hidden"
            );

            el.wikipediaArticle.classList.remove(
                "hidden"
            );

            el.wikipediaArticleTitle.textContent =
                wikipediaCurrentTitle;

            el.wikipediaArticleBody.innerHTML =
                sanitizeWikipediaHtml(
                    data.parse.text
                );

            const articleUrl =
                `https://de.wikipedia.org/wiki/${encodeURIComponent(
                    wikipediaCurrentTitle.replace(
                        / /g,
                        "_"
                    )
                )}`;

            el.wikipediaArticleFooter.innerHTML =
                "";

            const attribution =
                document.createElement(
                    "span"
                );

            attribution.textContent =
                "Text aus der deutschsprachigen Wikipedia";

            const source =
                document.createElement(
                    "a"
                );

            source.href =
                articleUrl;

            source.target =
                "_blank";

            source.rel =
                "noopener noreferrer";

            source.textContent =
                "Original in Wikipedia";

            const license =
                document.createElement(
                    "a"
                );

            license.href =
                "https://creativecommons.org/licenses/by-sa/4.0/deed.de";

            license.target =
                "_blank";

            license.rel =
                "noopener noreferrer";

            license.textContent =
                "CC BY-SA 4.0";

            el.wikipediaArticleFooter.append(
                attribution,
                source,
                license
            );

            renderWikipediaFolders();

            setWikipediaStatus(
                ""
            );

            window.scrollTo(
                0,
                0
            );

        } catch (
            error
        ) {
            console.error(
                "Wikipedia article failed:",
                error
            );

            if (
                token
                !==
                wikipediaRequestToken
            ) {
                return;
            }

            setWikipediaStatus(
                "Der Artikel konnte nicht geladen werden."
            );
        }
    }


    function closeWikipediaFolderPicker() {
        el.wikipediaFolderPicker.classList.add(
            "hidden"
        );
    }


    function addWikipediaArticleToFolder(
        folderId
    ) {
        const folder =
            wikipediaFolderById(
                folderId
            );

        const title =
            wikipediaCurrentTitle;

        if (
            !folder
            ||
            !title
        ) {
            return;
        }

        const alreadySaved =
            folder.articles.some(
                article =>
                    article.title.toLocaleLowerCase(
                        "de-DE"
                    )
                    ===
                    title.toLocaleLowerCase(
                        "de-DE"
                    )
            );

        if (
            !alreadySaved
        ) {
            folder.articles.push({
                title,
                addedAt:
                    nowIso()
            });

            saveState();
        }

        closeWikipediaFolderPicker();

        renderWikipediaFolders();

        setWikipediaStatus(
            `In „${folder.name}“ abgelegt.`
        );

        window.setTimeout(
            () => {
                if (
                    el.wikipediaStatus.textContent
                    ===
                    `In „${folder.name}“ abgelegt.`
                ) {
                    setWikipediaStatus(
                        ""
                    );
                }
            },
            1500
        );
    }


    function openWikipediaFolderPicker() {
        if (
            !wikipediaCurrentTitle
        ) {
            return;
        }

        el.wikipediaFolderPickerList.innerHTML =
            "";

        state.wikipedia.folders.forEach(
            folder => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wiki-folder-picker-option";

                const name =
                    document.createElement(
                        "span"
                    );

                name.textContent =
                    folder.name;

                const count =
                    document.createElement(
                        "span"
                    );

                count.className =
                    "wiki-folder-picker-option-count";

                count.textContent =
                    String(
                        folder.articles.length
                    );

                button.append(
                    name,
                    count
                );

                button.addEventListener(
                    "click",
                    () => {
                        addWikipediaArticleToFolder(
                            folder.id
                        );
                    }
                );

                el.wikipediaFolderPickerList.appendChild(
                    button
                );
            }
        );

        el.wikipediaFolderPicker.classList.remove(
            "hidden"
        );
    }


    function openWikipediaPortal() {
        wikipediaRequestToken +=
            1;

        wikipediaArticleHistory =
            [];

        wikipediaCurrentTitle =
            "";

        wikipediaLastQuery =
            "";

        wikipediaOpenFolderId =
            null;

        wikipediaReturnFolderId =
            null;

        el.wikipediaSearchInput.value =
            "";

        hideWikipediaFolderComposer();

        closeWikipediaFolderPicker();

        showWikipediaLanding();

        showScreen(
            screens.wikipedia
        );
    }


    el.chessRoomAcademyHotspot.addEventListener(
        "click",
        openWikipediaPortal
    );


    el.wikipediaSearchForm.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            searchWikipedia(
                el.wikipediaSearchInput.value
            );
        }
    );


    el.wikipediaSearchInput.addEventListener(
        "input",
        () => {
            if (
                wikipediaSearchTimer
            ) {
                clearTimeout(
                    wikipediaSearchTimer
                );
            }

            const value =
                el.wikipediaSearchInput.value
                .trim();

            if (
                value.length
                <
                2
            ) {
                wikipediaRequestToken +=
                    1;

                showWikipediaLanding();
                return;
            }

            wikipediaSearchTimer =
                window.setTimeout(
                    () => {
                        searchWikipedia(
                            value
                        );
                    },
                    320
                );
        }
    );


    el.wikipediaFolderButton.addEventListener(
        "click",
        () => {
            if (
                el.wikipediaFolderComposer.classList.contains(
                    "hidden"
                )
            ) {
                showWikipediaFolderComposer();
            } else {
                hideWikipediaFolderComposer();
            }
        }
    );


    el.wikipediaFolderComposer.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            const shouldSaveArticle =
                wikipediaFolderComposerSaveArticle
                &&
                Boolean(
                    wikipediaCurrentTitle
                );

            const folder =
                createWikipediaFolder(
                    el.wikipediaFolderNameInput.value
                );

            if (
                folder
            ) {
                hideWikipediaFolderComposer();

                if (
                    shouldSaveArticle
                ) {
                    addWikipediaArticleToFolder(
                        folder.id
                    );
                } else {
                    showWikipediaFolder(
                        folder.id
                    );
                }
            }
        }
    );


    el.wikipediaFolderCreateCancel.addEventListener(
        "click",
        hideWikipediaFolderComposer
    );


    el.wikipediaSaveArticleButton.addEventListener(
        "click",
        openWikipediaFolderPicker
    );


    el.wikipediaFolderPickerCancel.addEventListener(
        "click",
        closeWikipediaFolderPicker
    );


    el.wikipediaFolderPicker.addEventListener(
        "click",
        event => {
            if (
                event.target
                ===
                el.wikipediaFolderPicker
            ) {
                closeWikipediaFolderPicker();
            }
        }
    );


    el.wikipediaFolderPickerNew.addEventListener(
        "click",
        () => {
            closeWikipediaFolderPicker();

            showWikipediaFolderComposer(
                true
            );
        }
    );


    el.wikipediaArticleBody.addEventListener(
        "click",
        event => {
            const anchor =
                event.target.closest(
                    "a[data-wiki-title]"
                );

            if (
                !anchor
            ) {
                return;
            }

            event.preventDefault();

            openWikipediaArticle(
                anchor.dataset.wikiTitle,
                true
            );
        }
    );


    el.backFromWikipedia.addEventListener(
        "click",
        () => {
            wikipediaRequestToken +=
                1;

            closeWikipediaFolderPicker();

            if (
                wikipediaCurrentTitle
                &&
                wikipediaArticleHistory.length
                >
                0
            ) {
                const previousTitle =
                    wikipediaArticleHistory.pop();

                wikipediaCurrentTitle =
                    "";

                openWikipediaArticle(
                    previousTitle,
                    false
                );

                return;
            }

            if (
                wikipediaCurrentTitle
                &&
                wikipediaReturnFolderId
            ) {
                const folderId =
                    wikipediaReturnFolderId;

                wikipediaCurrentTitle =
                    "";

                showWikipediaFolder(
                    folderId
                );

                return;
            }

            if (
                wikipediaCurrentTitle
            ) {
                wikipediaCurrentTitle =
                    "";

                if (
                    wikipediaLastQuery
                ) {
                    el.wikipediaSearchInput.value =
                        wikipediaLastQuery;

                    searchWikipedia(
                        wikipediaLastQuery
                    );
                } else {
                    showWikipediaLanding();
                }

                return;
            }

            if (
                wikipediaOpenFolderId
            ) {
                showWikipediaLanding();
                return;
            }

            showScreen(
                screens.chessRoom
            );
        }
    );



    // ==================================================
    // YOUTUBE
    // ==================================================

    function decodeYoutubeText(
        value
    ) {
        const textarea =
            document.createElement(
                "textarea"
            );

        textarea.innerHTML =
            String(
                value
                ??
                ""
            );

        return textarea.value;
    }


    function youtubeApiUrl(
        resource,
        params = {}
    ) {
        const url =
            new URL(
                `${YOUTUBE_API_ROOT}/${resource}`
            );

        Object.entries({
            ...params,
            key:
                YOUTUBE_API_KEY
        }).forEach(
            ([key, value]) => {
                if (
                    value
                    ===
                    undefined
                    ||
                    value
                    ===
                    null
                    ||
                    value
                    ===
                    ""
                ) {
                    return;
                }

                url.searchParams.set(
                    key,
                    String(
                        value
                    )
                );
            }
        );

        return url.toString();
    }


    async function fetchYoutubeJson(
        resource,
        params
    ) {
        const response =
            await fetch(
                youtubeApiUrl(
                    resource,
                    params
                ),
                {
                    method:
                        "GET",
                    mode:
                        "cors",
                    cache:
                        "no-store"
                }
            );

        let data =
            null;

        try {
            data =
                await response.json();
        } catch (
            error
        ) {
            data =
                null;
        }

        if (
            !response.ok
        ) {
            const apiError =
                new Error(
                    data?.error?.message
                    ??
                    `YouTube HTTP ${response.status}`
                );

            apiError.status =
                response.status;

            throw apiError;
        }

        return (
            data
            ??
            {}
        );
    }


    function setYoutubeStatus(
        text = "",
        isError = false
    ) {
        el.youtubeStatus.textContent =
            text;

        el.youtubeStatus.classList.toggle(
            "error",
            Boolean(
                isError
            )
        );
    }


    function youtubeFolderById(
        folderId
    ) {
        return (
            state.youtube.folders.find(
                folder =>
                    folder.id
                    ===
                    folderId
            )
            ??
            null
        );
    }


    function hideYoutubeFolderComposer() {
        el.youtubeFolderComposer.classList.add(
            "hidden"
        );

        el.youtubeFolderNameInput.value =
            "";

        youtubeFolderComposerSaveVideo =
            false;
    }


    function showYoutubeFolderComposer(
        saveCurrentVideo = false
    ) {
        youtubeFolderComposerSaveVideo =
            Boolean(
                saveCurrentVideo
                &&
                youtubePendingSaveVideo
            );

        el.youtubeFolderComposer.classList.remove(
            "hidden"
        );

        requestAnimationFrame(
            () => {
                el.youtubeFolderNameInput.focus();
            }
        );
    }


    function createYoutubeFolder(
        rawName
    ) {
        const name =
            String(
                rawName
                ??
                ""
            )
            .trim();

        if (
            !name
        ) {
            return null;
        }

        const existing =
            state.youtube.folders.find(
                folder =>
                    folder.name.toLocaleLowerCase(
                        "de-DE"
                    )
                    ===
                    name.toLocaleLowerCase(
                        "de-DE"
                    )
            );

        if (
            existing
        ) {
            return existing;
        }

        const folder = {
            id:
                createId(),
            name,
            videos:
                [],
            createdAt:
                nowIso()
        };

        state.youtube.folders.push(
            folder
        );

        saveState();

        renderYoutubeFolders();

        return folder;
    }


    function renderYoutubeFolders() {
        el.youtubeFolders.innerHTML =
            "";

        const folders =
            state.youtube.folders;

        const landingVisible =
            !el.youtubeLanding.classList.contains(
                "hidden"
            );

        el.youtubeFolders.classList.toggle(
            "hidden",
            !landingVisible
            ||
            folders.length
            ===
            0
        );

        el.youtubeFolderButton.classList.toggle(
            "hidden",
            !landingVisible
        );

        folders.forEach(
            folder => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wiki-folder-chip";

                if (
                    youtubeOpenFolderId
                    ===
                    folder.id
                ) {
                    button.classList.add(
                        "active"
                    );
                }

                const icon =
                    document.createElement(
                        "span"
                    );

                icon.className =
                    "wiki-folder-chip-icon";

                icon.innerHTML =
                    bookshelfIconSvg();

                const label =
                    document.createElement(
                        "span"
                    );

                label.className =
                    "wiki-folder-chip-label";

                label.textContent =
                    folder.name;

                const count =
                    document.createElement(
                        "span"
                    );

                count.className =
                    "wiki-folder-chip-count";

                count.textContent =
                    String(
                        folder.videos.length
                    );

                button.append(
                    icon,
                    label,
                    count
                );

                button.addEventListener(
                    "click",
                    () => {
                        showYoutubeFolder(
                            folder.id
                        );
                    }
                );

                el.youtubeFolders.appendChild(
                    button
                );
            }
        );
    }


    function hideYoutubeContentViews() {
        el.youtubeLanding.classList.add(
            "hidden"
        );

        el.youtubeFolderView.classList.add(
            "hidden"
        );

        el.youtubeResults.classList.add(
            "hidden"
        );

        el.youtubeChannelView.classList.add(
            "hidden"
        );
    }


    function showYoutubeLanding() {
        youtubeOpenFolderId =
            null;

        youtubeCurrentChannel =
            null;

        youtubeChannelNextPageToken =
            "";

        el.youtubeTabs.classList.add(
            "hidden"
        );

        hideYoutubeContentViews();

        el.youtubeLanding.classList.remove(
            "hidden"
        );

        el.youtubeResultsList.innerHTML =
            "";

        renderYoutubeFolders();

        setYoutubeStatus(
            ""
        );
    }


    function makeYoutubeVideoRow(
        video
    ) {
        const row =
            document.createElement(
                "div"
            );

        row.className =
            "youtube-list-row";

        const openButton =
            document.createElement(
                "button"
            );

        openButton.type =
            "button";

        openButton.className =
            "youtube-list-open";

        const title =
            document.createElement(
                "span"
            );

        title.className =
            "youtube-list-title";

        title.textContent =
            video.title;

        const meta =
            document.createElement(
                "span"
            );

        meta.className =
            "youtube-list-meta";

        meta.textContent =
            video.channelTitle
            ||
            "YouTube";

        openButton.append(
            title,
            meta
        );

        openButton.addEventListener(
            "click",
            () => {
                openYoutubePlayer(
                    video
                );
            }
        );

        const saveButton =
            document.createElement(
                "button"
            );

        saveButton.type =
            "button";

        saveButton.className =
            "youtube-save-video-button";

        saveButton.textContent =
            "+";

        saveButton.setAttribute(
            "aria-label",
            "Video in Ordner ablegen"
        );

        saveButton.addEventListener(
            "click",
            event => {
                event.stopPropagation();

                youtubePendingSaveVideo =
                    {
                        ...video
                    };

                openYoutubeFolderPicker();
            }
        );

        row.append(
            openButton,
            saveButton
        );

        return row;
    }


    function makeYoutubeChannelRow(
        channel
    ) {
        const row =
            document.createElement(
                "div"
            );

        row.className =
            "youtube-list-row channel-row";

        const openButton =
            document.createElement(
                "button"
            );

        openButton.type =
            "button";

        openButton.className =
            "youtube-list-open";

        const title =
            document.createElement(
                "span"
            );

        title.className =
            "youtube-list-title";

        title.textContent =
            channel.title;

        const meta =
            document.createElement(
                "span"
            );

        meta.className =
            "youtube-list-meta";

        meta.textContent =
            "Kanal";

        openButton.append(
            title,
            meta
        );

        openButton.addEventListener(
            "click",
            () => {
                openYoutubeChannel(
                    channel
                );
            }
        );

        row.appendChild(
            openButton
        );

        return row;
    }


    function renderYoutubeResults() {
        el.youtubeResultsList.innerHTML =
            "";

        const isVideos =
            youtubeActiveTab
            ===
            "videos";

        el.youtubeTabVideos.classList.toggle(
            "active",
            isVideos
        );

        el.youtubeTabChannels.classList.toggle(
            "active",
            !isVideos
        );

        const items =
            isVideos
                ? youtubeSearchVideos
                : youtubeSearchChannels;

        if (
            items.length
            ===
            0
        ) {
            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "youtube-empty";

            empty.textContent =
                isVideos
                    ? "Keine Videos gefunden."
                    : "Keine Kanäle gefunden.";

            el.youtubeResultsList.appendChild(
                empty
            );

            return;
        }

        items.forEach(
            item => {
                el.youtubeResultsList.appendChild(
                    isVideos
                        ? makeYoutubeVideoRow(
                            item
                        )
                        : makeYoutubeChannelRow(
                            item
                        )
                );
            }
        );
    }


    async function searchYoutube(
        rawQuery
    ) {
        const query =
            String(
                rawQuery
                ??
                ""
            )
            .trim();

        if (
            !query
        ) {
            showYoutubeLanding();
            return;
        }

        youtubeLastQuery =
            query;

        youtubeOpenFolderId =
            null;

        youtubeCurrentChannel =
            null;

        youtubeChannelNextPageToken =
            "";

        youtubeActiveTab =
            "videos";

        const requestToken =
            ++youtubeRequestToken;

        hideYoutubeFolderComposer();

        hideYoutubeSortMenu();

        hideYoutubeContentViews();

        el.youtubeResults.classList.remove(
            "hidden"
        );

        el.youtubeTabs.classList.add(
            "hidden"
        );

        el.youtubeResultsList.innerHTML =
            "";

        renderYoutubeFolders();

        setYoutubeStatus(
            "Suche …"
        );

        try {
            /*
               Videos use the selected official search.list order.
               Channels remain relevance-sorted so the film sorting
               has predictable semantics.
            */
            const [
                videoData,
                channelData
            ] =
                await Promise.all([
                    fetchYoutubeJson(
                        "search",
                        {
                            part:
                                "snippet",
                            q:
                                query,
                            type:
                                "video",
                            maxResults:
                                50,
                            order:
                                youtubeSortOrder
                        }
                    ),
                    fetchYoutubeJson(
                        "search",
                        {
                            part:
                                "snippet",
                            q:
                                query,
                            type:
                                "channel",
                            maxResults:
                                50,
                            order:
                                "relevance"
                        }
                    )
                ]);

            if (
                requestToken
                !==
                youtubeRequestToken
            ) {
                return;
            }

            youtubeSearchVideos =
                (
                    Array.isArray(
                        videoData.items
                    )
                        ? videoData.items
                        : []
                )
                .map(
                    item => {
                        const snippet =
                            item?.snippet
                            ??
                            {};

                        const videoId =
                            item?.id?.videoId
                            ??
                            "";

                        if (
                            !videoId
                        ) {
                            return null;
                        }

                        return {
                            videoId,
                            title:
                                decodeYoutubeText(
                                    snippet.title
                                ),
                            channelId:
                                String(
                                    snippet.channelId
                                    ??
                                    ""
                                ),
                            channelTitle:
                                decodeYoutubeText(
                                    snippet.channelTitle
                                    ??
                                    ""
                                )
                        };
                    }
                )
                .filter(
                    Boolean
                );

            youtubeSearchChannels =
                (
                    Array.isArray(
                        channelData.items
                    )
                        ? channelData.items
                        : []
                )
                .map(
                    item => {
                        const snippet =
                            item?.snippet
                            ??
                            {};

                        const channelId =
                            item?.id?.channelId
                            ??
                            "";

                        if (
                            !channelId
                        ) {
                            return null;
                        }

                        return {
                            channelId,
                            title:
                                decodeYoutubeText(
                                    snippet.title
                                    ??
                                    snippet.channelTitle
                                    ??
                                    ""
                                )
                        };
                    }
                )
                .filter(
                    Boolean
                );

            el.youtubeTabs.classList.remove(
                "hidden"
            );

            renderYoutubeResults();

            setYoutubeStatus(
                ""
            );
        } catch (
            error
        ) {
            console.error(
                "YouTube search failed:",
                error
            );

            if (
                requestToken
                !==
                youtubeRequestToken
            ) {
                return;
            }

            setYoutubeStatus(
                error?.status
                ===
                403
                    ? "YouTube-API nicht verfügbar. Prüfe Schlüssel und Website-Beschränkung."
                    : "Die Filmsuche konnte gerade nicht erreicht werden.",
                true
            );
        }
    }

    function showYoutubeSearchResults() {
        youtubeOpenFolderId =
            null;

        youtubeCurrentChannel =
            null;

        youtubeChannelNextPageToken =
            "";

        hideYoutubeContentViews();

        el.youtubeResults.classList.remove(
            "hidden"
        );

        el.youtubeTabs.classList.remove(
            "hidden"
        );

        renderYoutubeFolders();

        renderYoutubeResults();

        setYoutubeStatus(
            ""
        );
    }


    function showYoutubeFolder(
        folderId
    ) {
        const folder =
            youtubeFolderById(
                folderId
            );

        if (
            !folder
        ) {
            showYoutubeLanding();
            return;
        }

        youtubeRequestToken +=
            1;

        youtubeOpenFolderId =
            folder.id;

        youtubeCurrentChannel =
            null;

        youtubeChannelNextPageToken =
            "";

        el.youtubeTabs.classList.add(
            "hidden"
        );

        hideYoutubeContentViews();

        el.youtubeFolderView.classList.remove(
            "hidden"
        );

        el.youtubeFolderViewTitle.textContent =
            folder.name;

        el.youtubeFolderVideos.innerHTML =
            "";

        if (
            folder.videos.length
            ===
            0
        ) {
            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "youtube-empty";

            empty.textContent =
                "Noch keine Videos.";

            el.youtubeFolderVideos.appendChild(
                empty
            );
        } else {
            folder.videos.forEach(
                video => {
                    el.youtubeFolderVideos.appendChild(
                        makeYoutubeVideoRow(
                            video
                        )
                    );
                }
            );
        }

        renderYoutubeFolders();

        setYoutubeStatus(
            ""
        );
    }


    async function openYoutubeChannel(
        channel
    ) {
        const requestToken =
            ++youtubeRequestToken;

        youtubeOpenFolderId =
            null;

        youtubeCurrentChannel = {
            channelId:
                channel.channelId,
            title:
                channel.title,
            uploadsPlaylistId:
                ""
        };

        youtubeChannelNextPageToken =
            "";

        el.youtubeTabs.classList.add(
            "hidden"
        );

        hideYoutubeContentViews();

        el.youtubeChannelView.classList.remove(
            "hidden"
        );

        el.youtubeChannelTitle.textContent =
            channel.title;

        el.youtubeChannelVideos.innerHTML =
            "";

        el.youtubeChannelMore.classList.add(
            "hidden"
        );

        renderYoutubeFolders();

        setYoutubeStatus(
            "Kanal wird geladen …"
        );

        try {
            const data =
                await fetchYoutubeJson(
                    "channels",
                    {
                        part:
                            "snippet,contentDetails",
                        id:
                            channel.channelId,
                        maxResults:
                            1
                    }
                );

            if (
                requestToken
                !==
                youtubeRequestToken
            ) {
                return;
            }

            const channelData =
                Array.isArray(
                    data.items
                )
                    ? data.items[0]
                    : null;

            const uploadsPlaylistId =
                channelData?.contentDetails?.relatedPlaylists?.uploads
                ??
                "";

            const officialTitle =
                decodeYoutubeText(
                    channelData?.snippet?.title
                    ??
                    channel.title
                );

            if (
                !uploadsPlaylistId
            ) {
                throw new Error(
                    "Keine Upload-Playlist gefunden."
                );
            }

            youtubeCurrentChannel = {
                channelId:
                    channel.channelId,
                title:
                    officialTitle,
                uploadsPlaylistId
            };

            el.youtubeChannelTitle.textContent =
                officialTitle;

            await loadMoreYoutubeChannelVideos(
                true,
                requestToken
            );
        } catch (
            error
        ) {
            console.error(
                "YouTube channel failed:",
                error
            );

            if (
                requestToken
                !==
                youtubeRequestToken
            ) {
                return;
            }

            setYoutubeStatus(
                "Der Kanal konnte gerade nicht geladen werden.",
                true
            );
        }
    }


    async function loadMoreYoutubeChannelVideos(
        replace = false,
        expectedToken = youtubeRequestToken
    ) {
        const channel =
            youtubeCurrentChannel;

        if (
            !channel?.uploadsPlaylistId
        ) {
            return;
        }

        el.youtubeChannelMore.classList.add(
            "hidden"
        );

        if (
            !replace
        ) {
            setYoutubeStatus(
                "Weitere Videos …"
            );
        }

        try {
            const data =
                await fetchYoutubeJson(
                    "playlistItems",
                    {
                        part:
                            "snippet,contentDetails",
                        playlistId:
                            channel.uploadsPlaylistId,
                        maxResults:
                            50,
                        pageToken:
                            replace
                                ? ""
                                : youtubeChannelNextPageToken
                    }
                );

            if (
                expectedToken
                !==
                youtubeRequestToken
            ) {
                return;
            }

            if (
                replace
            ) {
                el.youtubeChannelVideos.innerHTML =
                    "";
            }

            const videos =
                (
                    Array.isArray(
                        data.items
                    )
                        ? data.items
                        : []
                )
                .map(
                    item => {
                        const snippet =
                            item?.snippet
                            ??
                            {};

                        const videoId =
                            item?.contentDetails?.videoId
                            ??
                            snippet?.resourceId?.videoId
                            ??
                            "";

                        const title =
                            decodeYoutubeText(
                                snippet.title
                                ??
                                ""
                            );

                        if (
                            !videoId
                            ||
                            !title
                            ||
                            title
                            ===
                            "Private video"
                            ||
                            title
                            ===
                            "Deleted video"
                        ) {
                            return null;
                        }

                        return {
                            videoId,
                            title,
                            channelId:
                                channel.channelId,
                            channelTitle:
                                channel.title
                        };
                    }
                )
                .filter(
                    Boolean
                );

            if (
                replace
                &&
                videos.length
                ===
                0
            ) {
                const empty =
                    document.createElement(
                        "div"
                    );

                empty.className =
                    "youtube-empty";

                empty.textContent =
                    "Keine öffentlichen Videos gefunden.";

                el.youtubeChannelVideos.appendChild(
                    empty
                );
            } else {
                videos.forEach(
                    video => {
                        el.youtubeChannelVideos.appendChild(
                            makeYoutubeVideoRow(
                                video
                            )
                        );
                    }
                );
            }

            youtubeChannelNextPageToken =
                String(
                    data.nextPageToken
                    ??
                    ""
                );

            el.youtubeChannelMore.classList.toggle(
                "hidden",
                !youtubeChannelNextPageToken
            );

            setYoutubeStatus(
                ""
            );
        } catch (
            error
        ) {
            console.error(
                "YouTube channel videos failed:",
                error
            );

            if (
                expectedToken
                !==
                youtubeRequestToken
            ) {
                return;
            }

            setYoutubeStatus(
                "Die Videos konnten gerade nicht geladen werden.",
                true
            );
        }
    }


    function closeYoutubeFolderPicker() {
        el.youtubeFolderPicker.classList.add(
            "hidden"
        );
    }


    function addYoutubeVideoToFolder(
        folderId
    ) {
        const folder =
            youtubeFolderById(
                folderId
            );

        const video =
            youtubePendingSaveVideo;

        if (
            !folder
            ||
            !video?.videoId
        ) {
            return;
        }

        const alreadySaved =
            folder.videos.some(
                saved =>
                    saved.videoId
                    ===
                    video.videoId
            );

        if (
            !alreadySaved
        ) {
            folder.videos.push({
                videoId:
                    video.videoId,
                title:
                    video.title,
                channelId:
                    video.channelId
                    ??
                    "",
                channelTitle:
                    video.channelTitle
                    ??
                    "",
                addedAt:
                    nowIso()
            });

            saveState();
        }

        closeYoutubeFolderPicker();

        renderYoutubeFolders();

        setYoutubeStatus(
            `In „${folder.name}“ abgelegt.`
        );

        window.setTimeout(
            () => {
                if (
                    el.youtubeStatus.textContent
                    ===
                    `In „${folder.name}“ abgelegt.`
                ) {
                    setYoutubeStatus(
                        ""
                    );
                }
            },
            1500
        );
    }


    function openYoutubeFolderPicker() {
        if (
            !youtubePendingSaveVideo?.videoId
        ) {
            return;
        }

        el.youtubeFolderPickerList.innerHTML =
            "";

        state.youtube.folders.forEach(
            folder => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wiki-folder-picker-option";

                const name =
                    document.createElement(
                        "span"
                    );

                name.textContent =
                    folder.name;

                const count =
                    document.createElement(
                        "span"
                    );

                count.className =
                    "wiki-folder-picker-option-count";

                count.textContent =
                    String(
                        folder.videos.length
                    );

                button.append(
                    name,
                    count
                );

                button.addEventListener(
                    "click",
                    () => {
                        addYoutubeVideoToFolder(
                            folder.id
                        );
                    }
                );

                el.youtubeFolderPickerList.appendChild(
                    button
                );
            }
        );

        el.youtubeFolderPicker.classList.remove(
            "hidden"
        );
    }


    function closeYoutubePlayer() {
        el.youtubePlayerStage.innerHTML =
            "";

        el.youtubePlayer.classList.add(
            "hidden"
        );

        document.body.classList.remove(
            "youtube-player-open"
        );

        const fullscreenElement =
            document.fullscreenElement
            ??
            document.webkitFullscreenElement;

        if (
            fullscreenElement
            ===
            el.youtubePlayer
        ) {
            const exitFullscreen =
                document.exitFullscreen
                ??
                document.webkitExitFullscreen;

            if (
                exitFullscreen
            ) {
                try {
                    const result =
                        exitFullscreen.call(
                            document
                        );

                    if (
                        result?.catch
                    ) {
                        result.catch(
                            () => {}
                        );
                    }
                } catch (
                    error
                ) {
                    // Vollbild ist optional.
                }
            }
        }
    }


    function openYoutubePlayer(
        video
    ) {
        if (
            !video?.videoId
        ) {
            return;
        }

        el.youtubePlayerStage.innerHTML =
            "";

        const iframe =
            document.createElement(
                "iframe"
            );

        iframe.src =
            `https://www.youtube.com/embed/${encodeURIComponent(
                video.videoId
            )}?autoplay=1&playsinline=0&rel=0&fs=1&origin=${encodeURIComponent(
                window.location.origin
            )}`;

        iframe.title =
            video.title
            ??
            "YouTube Video";

        iframe.allow =
            "autoplay; encrypted-media; picture-in-picture; fullscreen";

        iframe.setAttribute(
            "allowfullscreen",
            ""
        );

        iframe.setAttribute(
            "referrerpolicy",
            "strict-origin-when-cross-origin"
        );

        el.youtubePlayerStage.appendChild(
            iframe
        );

        el.youtubePlayer.classList.remove(
            "hidden"
        );

        document.body.classList.add(
            "youtube-player-open"
        );

        const requestFullscreen =
            el.youtubePlayer.requestFullscreen
            ??
            el.youtubePlayer.webkitRequestFullscreen;

        if (
            requestFullscreen
        ) {
            try {
                const result =
                    requestFullscreen.call(
                        el.youtubePlayer
                    );

                if (
                    result?.catch
                ) {
                    result.catch(
                        () => {}
                    );
                }
            } catch (
                error
            ) {
                // Viewportfüllender Player bleibt als Fallback.
            }
        }
    }


    function renderYoutubeSortState() {
        [
            el.youtubeSortNormal,
            el.youtubeSortViews,
            el.youtubeSortDate
        ].forEach(
            button => {
                button.classList.toggle(
                    "active",
                    button.dataset.youtubeOrder
                    ===
                    youtubeSortOrder
                );
            }
        );
    }


    function hideYoutubeSortMenu() {
        el.youtubeSortMenu.classList.add(
            "hidden"
        );

        el.youtubeTitleButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function toggleYoutubeSortMenu() {
        const willOpen =
            el.youtubeSortMenu.classList.contains(
                "hidden"
            );

        el.youtubeSortMenu.classList.toggle(
            "hidden",
            !willOpen
        );

        el.youtubeTitleButton.setAttribute(
            "aria-expanded",
            willOpen
                ? "true"
                : "false"
        );

        if (
            willOpen
        ) {
            renderYoutubeSortState();
        }
    }


    function setYoutubeSortOrder(
        order
    ) {
        const allowed =
            new Set([
                "relevance",
                "viewCount",
                "date"
            ]);

        if (
            !allowed.has(
                order
            )
        ) {
            return;
        }

        youtubeSortOrder =
            order;

        renderYoutubeSortState();

        hideYoutubeSortMenu();

        if (
            youtubeLastQuery
        ) {
            searchYoutube(
                youtubeLastQuery
            );
        }
    }



    // ==================================================
    // V51 — NACHRICHTEN: GUARDIAN VOLLTEXT + BELLINGCAT RSS
    // ==================================================

    const NEWS_STATIC_FEED =
        "./data/news.json";

    const NEWS_CACHE_KEY =
        "plannerNewsCache_v51";

    const NEWS_CATEGORY_LABELS = {
        world:
            "Welt",
        science:
            "Wissenschaft",
        investigative:
            "Investigativ",
        bellingcat:
            "Bellingcat"
    };

    let newsActiveCategory =
        "world";

    let newsRequestToken =
        0;

    let newsFeedCache =
        null;

    let newsArticleIndex =
        new Map();

    let newsArticleOpen =
        false;

    let newsListScrollTop =
        0;

    let newsSearchOpen =
        false;

    let newsSearchQuery =
        "";

    let newsSortOrder =
        "newest";

    let newsSearchIndex =
        new Map();


    function parseNewsDate(
        raw
    ) {
        const parsed =
            new Date(
                String(
                    raw
                    ??
                    ""
                )
            );

        return Number.isNaN(
            parsed.getTime()
        )
            ? null
            : parsed;
    }


    function formatNewsTime(
        raw
    ) {
        const date =
            parseNewsDate(
                raw
            );

        if (
            !date
        ) {
            return "";
        }

        const deltaMs =
            Math.max(
                0,
                Date.now()
                -
                date.getTime()
            );

        const minutes =
            Math.floor(
                deltaMs
                /
                60000
            );

        if (
            minutes
            <
            1
        ) {
            return "gerade eben";
        }

        if (
            minutes
            <
            60
        ) {
            return `vor ${minutes} Min.`;
        }

        const hours =
            Math.floor(
                minutes
                /
                60
            );

        if (
            hours
            <
            24
        ) {
            return `vor ${hours} Std.`;
        }

        return date.toLocaleDateString(
            "de-DE",
            {
                day:
                    "2-digit",
                month:
                    "2-digit",
                year:
                    date.getFullYear()
                    !==
                    new Date().getFullYear()
                        ? "numeric"
                        : undefined
            }
        );
    }


    function formatNewsDateLong(
        raw
    ) {
        const date =
            parseNewsDate(
                raw
            );

        if (
            !date
        ) {
            return "";
        }

        return date.toLocaleDateString(
            "de-DE",
            {
                day:
                    "numeric",
                month:
                    "long",
                year:
                    "numeric"
            }
        );
    }


    function setNewsStatus(
        text,
        busy = false
    ) {
        el.newsStatus.textContent =
            text;

        el.newsStatus.classList.toggle(
            "busy",
            busy
        );
    }


    function renderNewsCategoryState() {
        el.newsCategories
            .querySelectorAll(
                "[data-news-category]"
            )
            .forEach(
                button => {
                    button.classList.toggle(
                        "active",
                        button.dataset.newsCategory
                        ===
                        newsActiveCategory
                    );
                }
            );
    }


    function safeNewsImageUrl(
        raw
    ) {
        const value =
            String(
                raw
                ??
                ""
            )
            .trim();

        if (
            !value
        ) {
            return "";
        }

        try {
            const url =
                new URL(
                    value
                );

            if (
                url.protocol
                !==
                "https:"
            ) {
                return "";
            }

            return url.href;
        } catch (
            error
        ) {
            return "";
        }
    }


    function normalizeNewsArticle(
        article
    ) {
        if (
            !article
            ||
            !article.id
            ||
            !article.title
            ||
            !article.url
        ) {
            return null;
        }

        return {
            id:
                String(
                    article.id
                ),
            source:
                String(
                    article.source
                    ??
                    ""
                ),
            title:
                String(
                    article.title
                    ??
                    ""
                )
                .trim(),
            url:
                String(
                    article.url
                    ??
                    ""
                ),
            publishedAt:
                String(
                    article.publishedAt
                    ??
                    ""
                ),
            byline:
                String(
                    article.byline
                    ??
                    ""
                ),
            standfirst:
                String(
                    article.standfirst
                    ??
                    article.excerpt
                    ??
                    ""
                ),
            bodyHtml:
                String(
                    article.bodyHtml
                    ??
                    ""
                ),
            fullText:
                Boolean(
                    article.fullText
                ),
            category:
                String(
                    article.category
                    ??
                    ""
                ),
            imageUrl:
                safeNewsImageUrl(
                    article.imageUrl
                ),
            imageAlt:
                String(
                    article.imageAlt
                    ??
                    ""
                ),
            imageCredit:
                String(
                    article.imageCredit
                    ??
                    ""
                )
        };
    }



    // ==================================================
    // SPOTIFY — PKCE, WEB API + WEB PLAYBACK SDK
    // ==================================================

    const SPOTIFY_CLIENT_ID =
        "b55ca9d0f3be423a86cad1a2112c04cb";

    const SPOTIFY_REDIRECT_URI =
        "https://r9m10.github.io/Planer/";

    const SPOTIFY_SCOPES = [
        "user-read-private",
        "user-library-read",
        "user-library-modify",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-private",
        "playlist-modify-public",
        "user-read-playback-state",
        "user-modify-playback-state",
        "streaming"
    ];

    const SPOTIFY_TOKEN_KEY =
        "planer_spotify_tokens_v1";

    const SPOTIFY_PKCE_VERIFIER_KEY =
        "planer_spotify_pkce_verifier_v1";

    const SPOTIFY_PKCE_STATE_KEY =
        "planer_spotify_pkce_state_v1";

    let spotifyTokens =
        loadSpotifyTokens();

    let spotifyProfile =
        null;

    let spotifyActiveTab =
        "search";

    let spotifySearchData =
        {
            tracks: [],
            albums: [],
            artists: []
        };

    let spotifyPlaylists =
        [];

    let spotifyPendingTrack =
        null;

    let spotifyPlaylistAfterCreate =
        null;

    let spotifySdkPromise =
        null;

    let spotifyPlayer =
        null;

    let spotifyPlayerDeviceId =
        "";

    let spotifyPlayerReadyPromise =
        null;

    let spotifyPlayerReadyResolve =
        null;

    let spotifyPlayerState =
        null;


    function spotifySetText(
        element,
        text = ""
    ) {
        if (element) {
            element.textContent =
                text;
        }
    }


    function loadSpotifyTokens() {
        try {
            const raw =
                localStorage.getItem(
                    SPOTIFY_TOKEN_KEY
                );

            if (!raw) {
                return null;
            }

            const parsed =
                JSON.parse(
                    raw
                );

            if (
                !parsed
                ||
                !parsed.refreshToken
            ) {
                return null;
            }

            return parsed;
        } catch {
            return null;
        }
    }


    function saveSpotifyTokens(
        tokenResponse,
        existing = null
    ) {
        const accessToken =
            tokenResponse.access_token
            ??
            existing?.accessToken
            ??
            "";

        const refreshToken =
            tokenResponse.refresh_token
            ??
            existing?.refreshToken
            ??
            "";

        if (
            !accessToken
            ||
            !refreshToken
        ) {
            throw new Error(
                "Spotify hat keine vollständigen Tokens zurückgegeben."
            );
        }

        spotifyTokens = {
            accessToken,
            refreshToken,
            scope:
                tokenResponse.scope
                ??
                existing?.scope
                ??
                "",
            expiresAt:
                Date.now()
                +
                Math.max(
                    60,
                    Number(
                        tokenResponse.expires_in
                        ??
                        3600
                    )
                )
                *
                1000
                -
                45000,
            authorizedAt:
                existing?.authorizedAt
                ??
                Date.now()
        };

        localStorage.setItem(
            SPOTIFY_TOKEN_KEY,
            JSON.stringify(
                spotifyTokens
            )
        );
    }


    function clearSpotifyTokens() {
        spotifyTokens =
            null;

        spotifyProfile =
            null;

        localStorage.removeItem(
            SPOTIFY_TOKEN_KEY
        );

        localStorage.removeItem(
            SPOTIFY_PKCE_VERIFIER_KEY
        );

        localStorage.removeItem(
            SPOTIFY_PKCE_STATE_KEY
        );
    }


    function spotifyRandomString(
        length = 64
    ) {
        const alphabet =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";

        const values =
            crypto.getRandomValues(
                new Uint8Array(
                    length
                )
            );

        return Array.from(
            values,
            value =>
                alphabet[
                    value
                    %
                    alphabet.length
                ]
        ).join("");
    }


    async function spotifyCodeChallenge(
        verifier
    ) {
        const bytes =
            new TextEncoder().encode(
                verifier
            );

        const digest =
            await crypto.subtle.digest(
                "SHA-256",
                bytes
            );

        return btoa(
            String.fromCharCode(
                ...new Uint8Array(
                    digest
                )
            )
        )
        .replace(
            /=/g,
            ""
        )
        .replace(
            /\+/g,
            "-"
        )
        .replace(
            /\//g,
            "_"
        );
    }


    async function beginSpotifyAuthorization() {
        spotifySetText(
            el.spotifyConnectStatus,
            "Spotify wird geöffnet …"
        );

        const verifier =
            spotifyRandomString(
                96
            );

        const state =
            spotifyRandomString(
                32
            );

        const challenge =
            await spotifyCodeChallenge(
                verifier
            );

        localStorage.setItem(
            SPOTIFY_PKCE_VERIFIER_KEY,
            verifier
        );

        localStorage.setItem(
            SPOTIFY_PKCE_STATE_KEY,
            state
        );

        const authUrl =
            new URL(
                "https://accounts.spotify.com/authorize"
            );

        authUrl.search =
            new URLSearchParams({
                client_id:
                    SPOTIFY_CLIENT_ID,
                response_type:
                    "code",
                redirect_uri:
                    SPOTIFY_REDIRECT_URI,
                code_challenge_method:
                    "S256",
                code_challenge:
                    challenge,
                state,
                scope:
                    SPOTIFY_SCOPES.join(
                        " "
                    )
            }).toString();

        window.location.assign(
            authUrl.toString()
        );
    }


    function cleanSpotifyCallbackUrl() {
        const url =
            new URL(
                window.location.href
            );

        [
            "code",
            "state",
            "error"
        ].forEach(
            key =>
                url.searchParams.delete(
                    key
                )
        );

        history.replaceState(
            {},
            document.title,
            `${url.pathname}${url.search}${url.hash}`
        );
    }


    async function exchangeSpotifyCode(
        code,
        returnedState
    ) {
        const expectedState =
            localStorage.getItem(
                SPOTIFY_PKCE_STATE_KEY
            );

        const verifier =
            localStorage.getItem(
                SPOTIFY_PKCE_VERIFIER_KEY
            );

        if (
            !expectedState
            ||
            !returnedState
            ||
            returnedState
            !==
            expectedState
        ) {
            throw new Error(
                "Spotify-Anmeldung konnte nicht sicher bestätigt werden."
            );
        }

        if (!verifier) {
            throw new Error(
                "Der Spotify-Anmeldevorgang ist abgelaufen. Bitte erneut verbinden."
            );
        }

        const response =
            await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method:
                        "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },
                    body:
                        new URLSearchParams({
                            client_id:
                                SPOTIFY_CLIENT_ID,
                            grant_type:
                                "authorization_code",
                            code,
                            redirect_uri:
                                SPOTIFY_REDIRECT_URI,
                            code_verifier:
                                verifier
                        })
                }
            );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data?.error_description
                ||
                data?.error
                ||
                "Spotify-Anmeldung fehlgeschlagen."
            );
        }

        saveSpotifyTokens(
            data,
            null
        );

        localStorage.removeItem(
            SPOTIFY_PKCE_VERIFIER_KEY
        );

        localStorage.removeItem(
            SPOTIFY_PKCE_STATE_KEY
        );
    }


    async function refreshSpotifyAccessToken() {
        if (
            !spotifyTokens?.refreshToken
        ) {
            return null;
        }

        const response =
            await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method:
                        "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },
                    body:
                        new URLSearchParams({
                            grant_type:
                                "refresh_token",
                            refresh_token:
                                spotifyTokens.refreshToken,
                            client_id:
                                SPOTIFY_CLIENT_ID
                        })
                }
            );

        const data =
            await response.json();

        if (!response.ok) {
            if (
                data?.error
                ===
                "invalid_grant"
            ) {
                clearSpotifyTokens();
                renderSpotifyAuthState();
                throw new Error(
                    "Die Spotify-Verbindung ist abgelaufen. Bitte erneut verbinden."
                );
            }

            throw new Error(
                data?.error_description
                ||
                data?.error
                ||
                "Spotify-Token konnte nicht erneuert werden."
            );
        }

        saveSpotifyTokens(
            data,
            spotifyTokens
        );

        return spotifyTokens.accessToken;
    }


    async function getSpotifyAccessToken(
        forceRefresh = false
    ) {
        if (
            !spotifyTokens?.refreshToken
        ) {
            return null;
        }

        if (
            forceRefresh
            ||
            !spotifyTokens.accessToken
            ||
            Date.now()
            >=
            Number(
                spotifyTokens.expiresAt
                ??
                0
            )
        ) {
            return refreshSpotifyAccessToken();
        }

        return spotifyTokens.accessToken;
    }


    async function spotifyApi(
        path,
        options = {},
        retry = true
    ) {
        const token =
            await getSpotifyAccessToken();

        if (!token) {
            throw new Error(
                "Bitte zuerst Spotify verbinden."
            );
        }

        const headers =
            new Headers(
                options.headers
                ??
                {}
            );

        headers.set(
            "Authorization",
            `Bearer ${token}`
        );

        if (
            options.body
            &&
            !headers.has(
                "Content-Type"
            )
        ) {
            headers.set(
                "Content-Type",
                "application/json"
            );
        }

        const response =
            await fetch(
                path.startsWith(
                    "http"
                )
                    ? path
                    : `https://api.spotify.com/v1${path}`,
                {
                    ...options,
                    headers
                }
            );

        if (
            response.status
            ===
            401
            &&
            retry
        ) {
            await getSpotifyAccessToken(
                true
            );

            return spotifyApi(
                path,
                options,
                false
            );
        }

        if (
            response.status
            ===
            429
        ) {
            const retryAfter =
                Math.max(
                    1,
                    Number(
                        response.headers.get(
                            "Retry-After"
                        )
                        ??
                        1
                    )
                );

            if (
                retry
                &&
                retryAfter
                <=
                10
            ) {
                await new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            retryAfter
                            *
                            1000
                        )
                );

                return spotifyApi(
                    path,
                    options,
                    false
                );
            }

            throw new Error(
                `Spotify bittet um eine kurze Pause (${retryAfter} s).`
            );
        }

        if (
            response.status
            ===
            204
        ) {
            return null;
        }

        const contentType =
            response.headers.get(
                "content-type"
            )
            ??
            "";

        const data =
            contentType.includes(
                "application/json"
            )
                ? await response.json()
                : await response.text();

        if (!response.ok) {
            const message =
                data?.error?.message
                ||
                data?.message
                ||
                data?.error_description
                ||
                (typeof data === "string"
                    ? data
                    : "")
                ||
                `Spotify-Fehler ${response.status}`;

            throw new Error(
                message
            );
        }

        return data;
    }


    async function loadSpotifyProfile() {
        if (spotifyProfile) {
            return spotifyProfile;
        }

        spotifyProfile =
            await spotifyApi(
                "/me"
            );

        return spotifyProfile;
    }


    function renderSpotifyAuthState() {
        const connected =
            Boolean(
                spotifyTokens?.refreshToken
            );

        el.spotifyConnectView.classList.toggle(
            "hidden",
            connected
        );

        el.spotifyAppView.classList.toggle(
            "hidden",
            !connected
        );

        el.spotifyAccountButton.classList.toggle(
            "hidden",
            !connected
        );

        if (!connected) {
            el.spotifyPlayerBar.classList.add(
                "hidden"
            );
        }
    }


    function spotifyImageUrl(
        images
    ) {
        if (
            !Array.isArray(
                images
            )
        ) {
            return "";
        }

        const sorted =
            [...images]
            .filter(
                image =>
                    image?.url
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    Math.abs(
                        Number(
                            a.width
                            ??
                            300
                        )
                        -
                        300
                    )
                    -
                    Math.abs(
                        Number(
                            b.width
                            ??
                            300
                        )
                        -
                        300
                    )
            );

        return sorted[0]?.url
            ??
            "";
    }


    function spotifyArtistsText(
        artists
    ) {
        return Array.isArray(
            artists
        )
            ? artists
                .map(
                    artist =>
                        artist?.name
                )
                .filter(
                    Boolean
                )
                .join(
                    ", "
                )
            : "";
    }


    function makeSpotifyArtwork(
        url,
        className,
        alt = ""
    ) {
        if (!url) {
            const placeholder =
                document.createElement(
                    "div"
                );

            placeholder.className =
                `${className} music-playlist-placeholder`;

            placeholder.textContent =
                "♪";

            placeholder.setAttribute(
                "aria-hidden",
                "true"
            );

            return placeholder;
        }

        const image =
            document.createElement(
                "img"
            );

        image.className =
            className;

        image.src =
            url;

        image.alt =
            alt;

        image.loading =
            "lazy";

        return image;
    }


    function makeSpotifyExternalLink(
        url,
        label = "In Spotify öffnen"
    ) {
        if (!url) {
            return null;
        }

        const link =
            document.createElement(
                "a"
            );

        link.className =
            "music-row-link";

        link.href =
            url;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

        link.textContent =
            "↗";

        link.setAttribute(
            "aria-label",
            label
        );

        link.addEventListener(
            "click",
            event =>
                event.stopPropagation()
        );

        return link;
    }


    function makeSpotifyTrackRow(
        track,
        options = {}
    ) {
        const row =
            document.createElement(
                "div"
            );

        row.className =
            "music-track-row";

        const art =
            makeSpotifyArtwork(
                spotifyImageUrl(
                    track?.album?.images
                    ??
                    track?.images
                ),
                "music-track-art",
                track?.album?.name
                ??
                ""
            );

        const main =
            document.createElement(
                "div"
            );

        main.className =
            "music-row-main";

        const title =
            document.createElement(
                "div"
            );

        title.className =
            "music-row-title";

        title.textContent =
            track?.name
            ??
            "Unbekannter Titel";

        const subtitle =
            document.createElement(
                "div"
            );

        subtitle.className =
            "music-row-subtitle";

        subtitle.textContent =
            spotifyArtistsText(
                track?.artists
            )
            ||
            track?.album?.name
            ||
            "Spotify";

        main.append(
            title,
            subtitle
        );

        const actions =
            document.createElement(
                "div"
            );

        actions.className =
            "music-row-actions";

        if (
            track?.uri
        ) {
            const play =
                document.createElement(
                    "button"
                );

            play.className =
                "music-row-button music-row-play";

            play.type =
                "button";

            play.textContent =
                "▶";

            play.setAttribute(
                "aria-label",
                `„${track.name}“ abspielen`
            );

            play.addEventListener(
                "click",
                async () => {
                    try {
                        await spotifyPlayTrack(
                            track
                        );
                    } catch (error) {
                        spotifySetText(
                            el.spotifySearchStatus,
                            error.message
                        );
                    }
                }
            );

            actions.appendChild(
                play
            );

            if (
                options.allowAdd
                !==
                false
            ) {
                const add =
                    document.createElement(
                        "button"
                    );

                add.className =
                    "music-row-button";

                add.type =
                    "button";

                add.textContent =
                    "+";

                add.setAttribute(
                    "aria-label",
                    `„${track.name}“ zu Playlist hinzufügen`
                );

                add.addEventListener(
                    "click",
                    () =>
                        openSpotifyPlaylistPicker(
                            track
                        )
                );

                actions.appendChild(
                    add
                );
            }
        }

        const external =
            makeSpotifyExternalLink(
                track?.external_urls?.spotify,
                `„${track?.name ?? "Titel"}“ in Spotify öffnen`
            );

        if (external) {
            actions.appendChild(
                external
            );
        }

        row.append(
            art,
            main,
            actions
        );

        return row;
    }


    function makeSpotifyEntityRow(
        entity,
        type
    ) {
        const row =
            document.createElement(
                "div"
            );

        row.className =
            "music-entity-row";

        const isArtist =
            type
            ===
            "artist";

        const art =
            makeSpotifyArtwork(
                spotifyImageUrl(
                    entity?.images
                ),
                `music-entity-art ${isArtist ? "music-artist-art" : ""}`,
                entity?.name
                ??
                ""
            );

        const main =
            document.createElement(
                "div"
            );

        main.className =
            "music-row-main";

        const title =
            document.createElement(
                "div"
            );

        title.className =
            "music-row-title";

        title.textContent =
            entity?.name
            ??
            "Spotify";

        const subtitle =
            document.createElement(
                "div"
            );

        subtitle.className =
            "music-row-subtitle";

        subtitle.textContent =
            isArtist
                ? "Künstler"
                : spotifyArtistsText(
                    entity?.artists
                )
                ||
                "Album";

        main.append(
            title,
            subtitle
        );

        const actions =
            document.createElement(
                "div"
            );

        actions.className =
            "music-row-actions";

        if (
            !isArtist
            &&
            entity?.uri
        ) {
            const play =
                document.createElement(
                    "button"
                );

            play.className =
                "music-row-button music-row-play";

            play.type =
                "button";

            play.textContent =
                "▶";

            play.setAttribute(
                "aria-label",
                `„${entity.name}“ abspielen`
            );

            play.addEventListener(
                "click",
                async () => {
                    try {
                        await spotifyPlayContext(
                            entity.uri
                        );
                    } catch (error) {
                        spotifySetText(
                            el.spotifySearchStatus,
                            error.message
                        );
                    }
                }
            );

            actions.appendChild(
                play
            );
        }

        const external =
            makeSpotifyExternalLink(
                entity?.external_urls?.spotify,
                `„${entity?.name ?? "Spotify"}“ in Spotify öffnen`
            );

        if (external) {
            actions.appendChild(
                external
            );
        }

        row.append(
            art,
            main,
            actions
        );

        return row;
    }


    function renderSpotifySearchResults() {
        el.spotifySearchResults.replaceChildren();

        const sections = [
            [
                "Songs",
                spotifySearchData.tracks,
                item =>
                    makeSpotifyTrackRow(
                        item
                    )
            ],
            [
                "Alben",
                spotifySearchData.albums,
                item =>
                    makeSpotifyEntityRow(
                        item,
                        "album"
                    )
            ],
            [
                "Künstler",
                spotifySearchData.artists,
                item =>
                    makeSpotifyEntityRow(
                        item,
                        "artist"
                    )
            ]
        ];

        sections.forEach(
            ([
                label,
                items,
                makeRow
            ]) => {
                if (
                    !Array.isArray(
                        items
                    )
                    ||
                    !items.length
                ) {
                    return;
                }

                const section =
                    document.createElement(
                        "section"
                    );

                section.className =
                    "music-result-section";

                const heading =
                    document.createElement(
                        "div"
                    );

                heading.className =
                    "music-result-section-title";

                heading.textContent =
                    label;

                section.appendChild(
                    heading
                );

                items.forEach(
                    item =>
                        section.appendChild(
                            makeRow(
                                item
                            )
                        )
                );

                el.spotifySearchResults.appendChild(
                    section
                );
            }
        );
    }


    async function searchSpotify(
        query
    ) {
        const q =
            String(
                query
                ??
                ""
            ).trim();

        if (!q) {
            spotifySearchData = {
                tracks: [],
                albums: [],
                artists: []
            };

            el.spotifySearchResults.replaceChildren();

            spotifySetText(
                el.spotifySearchStatus,
                ""
            );

            return;
        }

        spotifySetText(
            el.spotifySearchStatus,
            "Suche …"
        );

        const params =
            new URLSearchParams({
                q,
                type:
                    "track,album,artist",
                limit:
                    "10"
            });

        const data =
            await spotifyApi(
                `/search?${params.toString()}`
            );

        spotifySearchData = {
            tracks:
                data?.tracks?.items
                ??
                [],
            albums:
                data?.albums?.items
                ??
                [],
            artists:
                data?.artists?.items
                ??
                []
        };

        renderSpotifySearchResults();

        const count =
            spotifySearchData.tracks.length
            +
            spotifySearchData.albums.length
            +
            spotifySearchData.artists.length;

        spotifySetText(
            el.spotifySearchStatus,
            count
                ? `${count} Ergebnisse`
                : "Keine Treffer"
        );
    }


    function spotifyPlaylistItemCount(
        playlist
    ) {
        return Number(
            playlist?.items?.total
            ??
            playlist?.tracks?.total
            ??
            0
        );
    }


    function renderSpotifyPlaylists() {
        el.spotifyPlaylistsList.replaceChildren();

        if (
            !spotifyPlaylists.length
        ) {
            spotifySetText(
                el.spotifyPlaylistsStatus,
                "Noch keine Playlists gefunden."
            );

            return;
        }

        spotifySetText(
            el.spotifyPlaylistsStatus,
            `${spotifyPlaylists.length} Playlists`
        );

        spotifyPlaylists.forEach(
            playlist => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "music-playlist-row";

                row.tabIndex =
                    0;

                row.setAttribute(
                    "role",
                    "button"
                );

                const art =
                    makeSpotifyArtwork(
                        spotifyImageUrl(
                            playlist?.images
                        ),
                        "music-playlist-art",
                        playlist?.name
                        ??
                        ""
                    );

                const main =
                    document.createElement(
                        "div"
                    );

                main.className =
                    "music-row-main";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "music-row-title";

                title.textContent =
                    playlist?.name
                    ??
                    "Playlist";

                const subtitle =
                    document.createElement(
                        "div"
                    );

                subtitle.className =
                    "music-row-subtitle";

                const total =
                    spotifyPlaylistItemCount(
                        playlist
                    );

                subtitle.textContent =
                    `${total} ${total === 1 ? "Titel" : "Titel"}`;

                main.append(
                    title,
                    subtitle
                );

                const actions =
                    document.createElement(
                        "div"
                    );

                actions.className =
                    "music-row-actions";

                if (
                    playlist?.uri
                ) {
                    const play =
                        document.createElement(
                            "button"
                        );

                    play.className =
                        "music-row-button music-row-play";

                    play.type =
                        "button";

                    play.textContent =
                        "▶";

                    play.setAttribute(
                        "aria-label",
                        `„${playlist.name}“ abspielen`
                    );

                    play.addEventListener(
                        "click",
                        async event => {
                            event.stopPropagation();

                            try {
                                await spotifyPlayContext(
                                    playlist.uri
                                );
                            } catch (error) {
                                spotifySetText(
                                    el.spotifyPlaylistsStatus,
                                    error.message
                                );
                            }
                        }
                    );

                    actions.appendChild(
                        play
                    );
                }

                const external =
                    makeSpotifyExternalLink(
                        playlist?.external_urls?.spotify,
                        `„${playlist?.name ?? "Playlist"}“ in Spotify öffnen`
                    );

                if (external) {
                    actions.appendChild(
                        external
                    );
                }

                const open =
                    () =>
                        openSpotifyPlaylist(
                            playlist
                        );

                row.addEventListener(
                    "click",
                    open
                );

                row.addEventListener(
                    "keydown",
                    event => {
                        if (
                            event.key
                            ===
                            "Enter"
                            ||
                            event.key
                            ===
                            " "
                        ) {
                            event.preventDefault();
                            open();
                        }
                    }
                );

                row.append(
                    art,
                    main,
                    actions
                );

                el.spotifyPlaylistsList.appendChild(
                    row
                );
            }
        );
    }


    async function loadSpotifyPlaylists(
        force = false
    ) {
        if (
            spotifyPlaylists.length
            &&
            !force
        ) {
            renderSpotifyPlaylists();
            return spotifyPlaylists;
        }

        spotifySetText(
            el.spotifyPlaylistsStatus,
            "Playlists werden geladen …"
        );

        const data =
            await spotifyApi(
                "/me/playlists?limit=50"
            );

        spotifyPlaylists =
            Array.isArray(
                data?.items
            )
                ? data.items.filter(
                    Boolean
                )
                : [];

        renderSpotifyPlaylists();

        return spotifyPlaylists;
    }


    async function openSpotifyPlaylist(
        playlist
    ) {
        if (
            !playlist?.id
        ) {
            return;
        }

        el.spotifyPlaylistsList.classList.add(
            "hidden"
        );

        el.spotifyNewPlaylistButton.classList.add(
            "hidden"
        );

        el.spotifyPlaylistDetail.classList.remove(
            "hidden"
        );

        el.spotifyPlaylistDetailHead.replaceChildren();
        el.spotifyPlaylistTracks.replaceChildren();

        const title =
            document.createElement(
                "h2"
            );

        title.textContent =
            playlist.name
            ??
            "Playlist";

        const description =
            document.createElement(
                "p"
            );

        description.textContent =
            playlist.description
            ||
            `${spotifyPlaylistItemCount(playlist)} Titel`;

        el.spotifyPlaylistDetailHead.append(
            title,
            description
        );

        spotifySetText(
            el.spotifyPlaylistsStatus,
            "Titel werden geladen …"
        );

        try {
            const data =
                await spotifyApi(
                    `/playlists/${encodeURIComponent(playlist.id)}/items?limit=50`
                );

            const rows =
                Array.isArray(
                    data?.items
                )
                    ? data.items
                    : [];

            const tracks =
                rows
                .map(
                    entry =>
                        entry?.item
                        ??
                        entry?.track
                        ??
                        entry
                )
                .filter(
                    item =>
                        item?.type
                        ===
                        "track"
                        ||
                        item?.uri?.startsWith(
                            "spotify:track:"
                        )
                );

            tracks.forEach(
                track =>
                    el.spotifyPlaylistTracks.appendChild(
                        makeSpotifyTrackRow(
                            track,
                            {
                                allowAdd:
                                    false
                            }
                        )
                    )
            );

            spotifySetText(
                el.spotifyPlaylistsStatus,
                tracks.length
                    ? `${tracks.length} Titel`
                    : "Diese Playlist ist leer."
            );
        } catch (error) {
            spotifySetText(
                el.spotifyPlaylistsStatus,
                error.message
            );
        }
    }


    function closeSpotifyPlaylistDetail() {
        el.spotifyPlaylistDetail.classList.add(
            "hidden"
        );

        el.spotifyPlaylistsList.classList.remove(
            "hidden"
        );

        el.spotifyNewPlaylistButton.classList.remove(
            "hidden"
        );

        renderSpotifyPlaylists();
    }


    async function loadSpotifyLibrary() {
        spotifySetText(
            el.spotifyLibraryStatus,
            "Mediathek wird geladen …"
        );

        el.spotifyLibraryList.replaceChildren();

        const data =
            await spotifyApi(
                "/me/tracks?limit=50"
            );

        const tracks =
            Array.isArray(
                data?.items
            )
                ? data.items
                    .map(
                        entry =>
                            entry?.track
                            ??
                            entry?.item
                            ??
                            entry
                    )
                    .filter(
                        Boolean
                    )
                : [];

        tracks.forEach(
            track =>
                el.spotifyLibraryList.appendChild(
                    makeSpotifyTrackRow(
                        track
                    )
                )
        );

        spotifySetText(
            el.spotifyLibraryStatus,
            tracks.length
                ? `${tracks.length} gespeicherte Titel`
                : "Noch keine gespeicherten Titel."
        );
    }


    async function saveSpotifyTrackToLibrary(
        track
    ) {
        if (!track?.uri) {
            return;
        }

        const params =
            new URLSearchParams({
                uris:
                    track.uri
            });

        await spotifyApi(
            `/me/library?${params.toString()}`,
            {
                method:
                    "PUT"
            }
        );
    }


    function showMusicTab(
        tab
    ) {
        const valid = [
            "search",
            "playlists",
            "library"
        ];

        spotifyActiveTab =
            valid.includes(
                tab
            )
                ? tab
                : "search";

        el.musicTabs
            .querySelectorAll(
                "[data-music-tab]"
            )
            .forEach(
                button =>
                    button.classList.toggle(
                        "active",
                        button.dataset.musicTab
                        ===
                        spotifyActiveTab
                    )
            );

        el.musicSearchPanel.classList.toggle(
            "hidden",
            spotifyActiveTab
            !==
            "search"
        );

        el.musicPlaylistsPanel.classList.toggle(
            "hidden",
            spotifyActiveTab
            !==
            "playlists"
        );

        el.musicLibraryPanel.classList.toggle(
            "hidden",
            spotifyActiveTab
            !==
            "library"
        );

        if (
            spotifyActiveTab
            ===
            "playlists"
        ) {
            void loadSpotifyPlaylists().catch(
                error =>
                    spotifySetText(
                        el.spotifyPlaylistsStatus,
                        error.message
                    )
            );
        }

        if (
            spotifyActiveTab
            ===
            "library"
        ) {
            void loadSpotifyLibrary().catch(
                error =>
                    spotifySetText(
                        el.spotifyLibraryStatus,
                        error.message
                    )
            );
        }
    }


    function openSpotifyPlaylistPicker(
        track
    ) {
        spotifyPendingTrack =
            track;

        el.spotifyPlaylistPicker.classList.remove(
            "hidden"
        );

        el.spotifyPlaylistPickerList.replaceChildren();

        const render =
            () => {
                el.spotifyPlaylistPickerList.replaceChildren();

                spotifyPlaylists.forEach(
                    playlist => {
                        const button =
                            document.createElement(
                                "button"
                            );

                        button.className =
                            "music-sheet-playlist";

                        button.type =
                            "button";

                        button.textContent =
                            playlist.name
                            ??
                            "Playlist";

                        button.addEventListener(
                            "click",
                            async () => {
                                try {
                                    spotifySetText(
                                        el.spotifySearchStatus,
                                        `Füge zu „${playlist.name}“ hinzu …`
                                    );

                                    await spotifyApi(
                                        `/playlists/${encodeURIComponent(playlist.id)}/items`,
                                        {
                                            method:
                                                "POST",
                                            body:
                                                JSON.stringify({
                                                    uris: [
                                                        track.uri
                                                    ]
                                                })
                                        }
                                    );

                                    closeSpotifyPlaylistPicker();

                                    spotifySetText(
                                        el.spotifySearchStatus,
                                        `Zu „${playlist.name}“ hinzugefügt.`
                                    );

                                    spotifyPlaylists =
                                        [];
                                } catch (error) {
                                    spotifySetText(
                                        el.spotifySearchStatus,
                                        error.message
                                    );
                                }
                            }
                        );

                        el.spotifyPlaylistPickerList.appendChild(
                            button
                        );
                    }
                );
            };

        if (
            spotifyPlaylists.length
        ) {
            render();
        } else {
            const loading =
                document.createElement(
                    "div"
                );

            loading.className =
                "music-status";

            loading.textContent =
                "Playlists werden geladen …";

            el.spotifyPlaylistPickerList.appendChild(
                loading
            );

            void loadSpotifyPlaylists()
                .then(
                    render
                )
                .catch(
                    error => {
                        loading.textContent =
                            error.message;
                    }
                );
        }
    }


    function closeSpotifyPlaylistPicker() {
        el.spotifyPlaylistPicker.classList.add(
            "hidden"
        );

        spotifyPendingTrack =
            null;
    }


    function openSpotifyPlaylistComposer(
        afterCreate = null
    ) {
        spotifyPlaylistAfterCreate =
            afterCreate;

        el.spotifyPlaylistName.value =
            "";

        el.spotifyPlaylistDescription.value =
            "";

        el.spotifyPlaylistPublic.checked =
            false;

        spotifySetText(
            el.spotifyPlaylistComposerStatus,
            ""
        );

        el.spotifyPlaylistComposer.classList.remove(
            "hidden"
        );

        requestAnimationFrame(
            () =>
                el.spotifyPlaylistName.focus()
        );
    }


    function closeSpotifyPlaylistComposer() {
        el.spotifyPlaylistComposer.classList.add(
            "hidden"
        );

        spotifyPlaylistAfterCreate =
            null;
    }


    async function createSpotifyPlaylist(
        name,
        description,
        isPublic
    ) {
        const playlist =
            await spotifyApi(
                "/me/playlists",
                {
                    method:
                        "POST",
                    body:
                        JSON.stringify({
                            name,
                            description,
                            public:
                                Boolean(
                                    isPublic
                                )
                        })
                }
            );

        spotifyPlaylists =
            [];

        return playlist;
    }


    function loadSpotifySdk() {
        if (
            window.Spotify?.Player
        ) {
            return Promise.resolve();
        }

        if (spotifySdkPromise) {
            return spotifySdkPromise;
        }

        spotifySdkPromise =
            new Promise(
                (
                    resolve,
                    reject
                ) => {
                    const timeout =
                        window.setTimeout(
                            () =>
                                reject(
                                    new Error(
                                        "Spotify-Player konnte nicht geladen werden."
                                    )
                                ),
                            15000
                        );

                    window.onSpotifyWebPlaybackSDKReady =
                        () => {
                            clearTimeout(
                                timeout
                            );
                            resolve();
                        };

                    const existing =
                        document.querySelector(
                            'script[src="https://sdk.scdn.co/spotify-player.js"]'
                        );

                    if (!existing) {
                        const script =
                            document.createElement(
                                "script"
                            );

                        script.src =
                            "https://sdk.scdn.co/spotify-player.js";

                        script.async =
                            true;

                        script.addEventListener(
                            "error",
                            () => {
                                clearTimeout(
                                    timeout
                                );

                                reject(
                                    new Error(
                                        "Spotify-Player konnte nicht geladen werden."
                                    )
                                );
                            }
                        );

                        document.head.appendChild(
                            script
                        );
                    }
                }
            );

        return spotifySdkPromise;
    }


    async function ensureSpotifyPlayer() {
        if (spotifyPlayer) {
            return spotifyPlayer;
        }

        await loadSpotifySdk();

        spotifyPlayerReadyPromise =
            new Promise(
                resolve => {
                    spotifyPlayerReadyResolve =
                        resolve;
                }
            );

        spotifyPlayer =
            new window.Spotify.Player({
                name:
                    "Planer · Musik",
                getOAuthToken:
                    callback => {
                        void getSpotifyAccessToken()
                            .then(
                                token => {
                                    if (token) {
                                        callback(
                                            token
                                        );
                                    }
                                }
                            );
                    },
                volume:
                    0.72,
                enableMediaSession:
                    true
            });

        spotifyPlayer.addListener(
            "ready",
            ({
                device_id
            }) => {
                spotifyPlayerDeviceId =
                    device_id;

                if (
                    spotifyPlayerReadyResolve
                ) {
                    spotifyPlayerReadyResolve(
                        device_id
                    );

                    spotifyPlayerReadyResolve =
                        null;
                }
            }
        );

        spotifyPlayer.addListener(
            "not_ready",
            ({
                device_id
            }) => {
                if (
                    spotifyPlayerDeviceId
                    ===
                    device_id
                ) {
                    spotifyPlayerDeviceId =
                        "";
                }
            }
        );

        spotifyPlayer.addListener(
            "player_state_changed",
            state => {
                spotifyPlayerState =
                    state;

                renderSpotifyPlayerState(
                    state
                );
            }
        );

        [
            "initialization_error",
            "authentication_error",
            "account_error",
            "playback_error"
        ].forEach(
            eventName =>
                spotifyPlayer.addListener(
                    eventName,
                    ({
                        message
                    }) => {
                        spotifySetText(
                            el.spotifySearchStatus,
                            message
                            ||
                            "Spotify-Playerfehler"
                        );
                    }
                )
        );

        spotifyPlayer.addListener(
            "autoplay_failed",
            () => {
                spotifySetText(
                    el.spotifySearchStatus,
                    "Tippe einmal auf Play, damit der Browser die Wiedergabe freigibt."
                );
            }
        );

        const connected =
            await spotifyPlayer.connect();

        if (!connected) {
            throw new Error(
                "Spotify-Player konnte nicht verbunden werden."
            );
        }

        return spotifyPlayer;
    }


    async function spotifyDeviceId() {
        await ensureSpotifyPlayer();

        if (
            spotifyPlayerDeviceId
        ) {
            return spotifyPlayerDeviceId;
        }

        return Promise.race([
            spotifyPlayerReadyPromise,
            new Promise(
                (
                    _,
                    reject
                ) =>
                    setTimeout(
                        () =>
                            reject(
                                new Error(
                                    "Spotify-Player ist noch nicht bereit. Bitte erneut versuchen."
                                )
                            ),
                        9000
                    )
            )
        ]);
    }


    async function spotifyActivatePlayer() {
        const player =
            await ensureSpotifyPlayer();

        if (
            typeof player.activateElement
            ===
            "function"
        ) {
            try {
                await player.activateElement();
            } catch {
                // Browser may not require it.
            }
        }

        return player;
    }


    async function spotifyPlayTrack(
        track
    ) {
        if (!track?.uri) {
            return;
        }

        await spotifyActivatePlayer();

        const deviceId =
            await spotifyDeviceId();

        await spotifyApi(
            `/me/player/play?device_id=${encodeURIComponent(deviceId)}`,
            {
                method:
                    "PUT",
                body:
                    JSON.stringify({
                        uris: [
                            track.uri
                        ]
                    })
            }
        );

        renderSpotifyPlayerFallback(
            track
        );
    }


    async function spotifyPlayContext(
        contextUri
    ) {
        if (!contextUri) {
            return;
        }

        await spotifyActivatePlayer();

        const deviceId =
            await spotifyDeviceId();

        await spotifyApi(
            `/me/player/play?device_id=${encodeURIComponent(deviceId)}`,
            {
                method:
                    "PUT",
                body:
                    JSON.stringify({
                        context_uri:
                            contextUri
                    })
            }
        );
    }


    function renderSpotifyPlayerFallback(
        track
    ) {
        const artwork =
            spotifyImageUrl(
                track?.album?.images
            );

        if (artwork) {
            el.spotifyPlayerArtwork.src =
                artwork;

            el.spotifyPlayerArtwork.classList.remove(
                "hidden"
            );
        } else {
            el.spotifyPlayerArtwork.removeAttribute(
                "src"
            );
        }

        spotifySetText(
            el.spotifyPlayerTitle,
            track?.name
            ??
            "Spotify"
        );

        spotifySetText(
            el.spotifyPlayerArtist,
            spotifyArtistsText(
                track?.artists
            )
        );

        el.spotifyPlayerBar.classList.remove(
            "hidden"
        );

        el.spotifyPlayPauseButton.textContent =
            "Ⅱ";

        el.spotifyPlayPauseButton.setAttribute(
            "aria-label",
            "Wiedergabe pausieren"
        );
    }


    function renderSpotifyPlayerState(
        state
    ) {
        if (!state) {
            return;
        }

        const track =
            state.track_window?.current_track;

        if (!track) {
            return;
        }

        const artwork =
            spotifyImageUrl(
                track.album?.images
            );

        if (artwork) {
            el.spotifyPlayerArtwork.src =
                artwork;
        }

        spotifySetText(
            el.spotifyPlayerTitle,
            track.name
            ??
            "Spotify"
        );

        spotifySetText(
            el.spotifyPlayerArtist,
            spotifyArtistsText(
                track.artists
            )
        );

        el.spotifyPlayerBar.classList.remove(
            "hidden"
        );

        const paused =
            Boolean(
                state.paused
            );

        el.spotifyPlayPauseButton.textContent =
            paused
                ? "▶"
                : "Ⅱ";

        el.spotifyPlayPauseButton.setAttribute(
            "aria-label",
            paused
                ? "Wiedergabe fortsetzen"
                : "Wiedergabe pausieren"
        );
    }


    function hideSpotifyAccountMenu() {
        el.spotifyAccountMenu.classList.add(
            "hidden"
        );

        el.spotifyAccountButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function toggleSpotifyAccountMenu() {
        const open =
            el.spotifyAccountMenu.classList.contains(
                "hidden"
            );

        el.spotifyAccountMenu.classList.toggle(
            "hidden",
            !open
        );

        el.spotifyAccountButton.setAttribute(
            "aria-expanded",
            String(
                open
            )
        );
    }


    async function openMusicPortal() {
        hideSpotifyAccountMenu();
        renderSpotifyAuthState();
        showScreen(
            screens.music
        );

        if (
            !spotifyTokens?.refreshToken
        ) {
            return;
        }

        spotifySetText(
            el.spotifyConnectStatus,
            ""
        );

        try {
            await loadSpotifyProfile();
            await ensureSpotifyPlayer();
            showMusicTab(
                spotifyActiveTab
            );
        } catch (error) {
            spotifySetText(
                el.spotifySearchStatus,
                error.message
            );
        }
    }


    async function initializeSpotifyOnLoad() {
        renderSpotifyAuthState();

        const params =
            new URLSearchParams(
                window.location.search
            );

        const code =
            params.get(
                "code"
            );

        const state =
            params.get(
                "state"
            );

        const authError =
            params.get(
                "error"
            );

        if (
            !code
            &&
            !authError
        ) {
            return;
        }

        showScreen(
            screens.music
        );

        if (authError) {
            cleanSpotifyCallbackUrl();
            spotifySetText(
                el.spotifyConnectStatus,
                authError
                ===
                "access_denied"
                    ? "Spotify-Verbindung wurde abgebrochen."
                    : `Spotify-Anmeldung: ${authError}`
            );
            return;
        }

        spotifySetText(
            el.spotifyConnectStatus,
            "Spotify wird verbunden …"
        );

        try {
            await exchangeSpotifyCode(
                code,
                state
            );

            cleanSpotifyCallbackUrl();
            renderSpotifyAuthState();
            await loadSpotifyProfile();
            await ensureSpotifyPlayer();
            showMusicTab(
                "search"
            );
            spotifySetText(
                el.spotifySearchStatus,
                "Verbunden. Suche nach Musik oder öffne deine Playlists."
            );
        } catch (error) {
            cleanSpotifyCallbackUrl();
            clearSpotifyTokens();
            renderSpotifyAuthState();
            spotifySetText(
                el.spotifyConnectStatus,
                error.message
            );
        }
    }


    el.mapRoomPianoHotspot.addEventListener(
        "click",
        openMusicPortal
    );


    el.backFromMusic.addEventListener(
        "click",
        () => {
            hideSpotifyAccountMenu();

            if (
                !el.spotifyPlaylistComposer.classList.contains(
                    "hidden"
                )
            ) {
                closeSpotifyPlaylistComposer();
                return;
            }

            if (
                !el.spotifyPlaylistPicker.classList.contains(
                    "hidden"
                )
            ) {
                closeSpotifyPlaylistPicker();
                return;
            }

            if (
                !el.spotifyPlaylistDetail.classList.contains(
                    "hidden"
                )
            ) {
                closeSpotifyPlaylistDetail();
                return;
            }

            showScreen(
                screens.mapRoom
            );
        }
    );


    el.spotifyConnectButton.addEventListener(
        "click",
        () => {
            void beginSpotifyAuthorization()
                .catch(
                    error =>
                        spotifySetText(
                            el.spotifyConnectStatus,
                            error.message
                        )
                );
        }
    );


    el.spotifyAccountButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();
            toggleSpotifyAccountMenu();
        }
    );


    el.spotifyDisconnectButton.addEventListener(
        "click",
        () => {
            hideSpotifyAccountMenu();

            if (spotifyPlayer) {
                try {
                    spotifyPlayer.disconnect();
                } catch {
                    // already disconnected
                }
            }

            spotifyPlayer =
                null;

            spotifyPlayerDeviceId =
                "";

            spotifyPlaylists =
                [];

            clearSpotifyTokens();
            renderSpotifyAuthState();
            spotifySetText(
                el.spotifyConnectStatus,
                "Spotify wurde getrennt."
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.spotifyAccountMenu.classList.contains(
                    "hidden"
                )
                &&
                !el.spotifyAccountMenu.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.spotifyAccountButton
            ) {
                hideSpotifyAccountMenu();
            }
        }
    );


    el.musicTabs.addEventListener(
        "click",
        event => {
            const button =
                event.target.closest(
                    "[data-music-tab]"
                );

            if (!button) {
                return;
            }

            showMusicTab(
                button.dataset.musicTab
            );
        }
    );


    el.spotifySearchForm.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            void searchSpotify(
                el.spotifySearchInput.value
            ).catch(
                error =>
                    spotifySetText(
                        el.spotifySearchStatus,
                        error.message
                    )
            );
        }
    );


    el.spotifyNewPlaylistButton.addEventListener(
        "click",
        () =>
            openSpotifyPlaylistComposer()
    );


    el.spotifyPlaylistDetailBack.addEventListener(
        "click",
        closeSpotifyPlaylistDetail
    );


    el.spotifyLibraryRefresh.addEventListener(
        "click",
        () => {
            void loadSpotifyLibrary().catch(
                error =>
                    spotifySetText(
                        el.spotifyLibraryStatus,
                        error.message
                    )
            );
        }
    );


    el.spotifyPlaylistPickerCancel.addEventListener(
        "click",
        closeSpotifyPlaylistPicker
    );


    el.spotifyPickerNewPlaylist.addEventListener(
        "click",
        () => {
            const track =
                spotifyPendingTrack;

            el.spotifyPlaylistPicker.classList.add(
                "hidden"
            );

            openSpotifyPlaylistComposer(
                async playlist => {
                    if (
                        track?.uri
                        &&
                        playlist?.id
                    ) {
                        await spotifyApi(
                            `/playlists/${encodeURIComponent(playlist.id)}/items`,
                            {
                                method:
                                    "POST",
                                body:
                                    JSON.stringify({
                                        uris: [
                                            track.uri
                                        ]
                                    })
                            }
                        );

                        spotifySetText(
                            el.spotifySearchStatus,
                            `„${track.name}“ wurde zu „${playlist.name}“ hinzugefügt.`
                        );
                    }
                }
            );
        }
    );


    el.spotifyPlaylistComposerCancel.addEventListener(
        "click",
        closeSpotifyPlaylistComposer
    );


    el.spotifyPlaylistComposerForm.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            const name =
                el.spotifyPlaylistName.value.trim();

            const description =
                el.spotifyPlaylistDescription.value.trim();

            if (!name) {
                spotifySetText(
                    el.spotifyPlaylistComposerStatus,
                    "Bitte gib der Playlist einen Namen."
                );
                return;
            }

            const afterCreate =
                spotifyPlaylistAfterCreate;

            spotifySetText(
                el.spotifyPlaylistComposerStatus,
                "Playlist wird erstellt …"
            );

            void createSpotifyPlaylist(
                name,
                description,
                el.spotifyPlaylistPublic.checked
            )
            .then(
                async playlist => {
                    if (
                        typeof afterCreate
                        ===
                        "function"
                    ) {
                        await afterCreate(
                            playlist
                        );
                    }

                    closeSpotifyPlaylistComposer();
                    spotifyPlaylists =
                        [];

                    if (
                        spotifyActiveTab
                        ===
                        "playlists"
                    ) {
                        await loadSpotifyPlaylists(
                            true
                        );
                    }
                }
            )
            .catch(
                error =>
                    spotifySetText(
                        el.spotifyPlaylistComposerStatus,
                        error.message
                    )
            );
        }
    );


    el.spotifyPlayPauseButton.addEventListener(
        "click",
        () => {
            void spotifyActivatePlayer()
                .then(
                    player =>
                        player.togglePlay()
                )
                .catch(
                    error =>
                        spotifySetText(
                            el.spotifySearchStatus,
                            error.message
                        )
                );
        }
    );


    el.spotifyPreviousButton.addEventListener(
        "click",
        () => {
            void spotifyActivatePlayer()
                .then(
                    player =>
                        player.previousTrack()
                )
                .catch(
                    error =>
                        spotifySetText(
                            el.spotifySearchStatus,
                            error.message
                        )
                );
        }
    );


    el.spotifyNextButton.addEventListener(
        "click",
        () => {
            void spotifyActivatePlayer()
                .then(
                    player =>
                        player.nextTrack()
                )
                .catch(
                    error =>
                        spotifySetText(
                            el.spotifySearchStatus,
                            error.message
                        )
                );
        }
    );


    function normalizeNewsFeed(
        raw
    ) {
        const categories = {};
        newsArticleIndex = new Map();
        newsSearchIndex = new Map();

        Object.keys(
            NEWS_CATEGORY_LABELS
        )
        .forEach(
            category => {
                const seen =
                    new Set();

                const rows =
                    Array.isArray(
                        raw?.categories?.[category]
                    )
                        ? raw.categories[category]
                        : [];

                categories[category] =
                    rows
                    .map(
                        normalizeNewsArticle
                    )
                    .filter(
                        article => {
                            if (
                                !article
                                ||
                                seen.has(
                                    article.id
                                )
                            ) {
                                return false;
                            }

                            seen.add(
                                article.id
                            );

                            newsArticleIndex.set(
                                article.id,
                                article
                            );

                            newsSearchIndex.set(
                                article.id,
                                [
                                    article.source,
                                    article.title,
                                    article.byline,
                                    stripNewsHtmlToText(
                                        article.standfirst
                                    ),
                                    stripNewsHtmlToText(
                                        article.bodyHtml
                                    ),
                                    NEWS_CATEGORY_LABELS[
                                        article.category
                                    ]
                                    ??
                                    article.category
                                ]
                                .join(
                                    " "
                                )
                                .toLocaleLowerCase(
                                    "de-DE"
                                )
                            );

                            return true;
                        }
                    );
            }
        );

        return {
            generatedAt:
                String(
                    raw?.generatedAt
                    ??
                    ""
                ),
            categories
        };
    }


    function readNewsCache() {
        try {
            const parsed =
                JSON.parse(
                    localStorage.getItem(
                        NEWS_CACHE_KEY
                    )
                    ||
                    "null"
                );

            if (
                !parsed?.categories
            ) {
                return null;
            }

            return parsed;
        } catch (
            error
        ) {
            return null;
        }
    }


    function writeNewsCache(
        feed
    ) {
        try {
            localStorage.setItem(
                NEWS_CACHE_KEY,
                JSON.stringify(
                    feed
                )
            );
        } catch (
            error
        ) {
            // Cache ist nur Komfort.
        }
    }


    function stripNewsHtmlToText(
        html
    ) {
        if (
            !html
        ) {
            return "";
        }

        const documentObject =
            new DOMParser()
            .parseFromString(
                html,
                "text/html"
            );

        return (
            documentObject.body.textContent
            ??
            ""
        )
        .replace(
            /\s+/g,
            " "
        )
        .trim();
    }


    function appendSanitizedNewsHtml(
        target,
        html
    ) {
        target.replaceChildren();

        if (
            !html
        ) {
            return;
        }

        const parsed =
            new DOMParser()
            .parseFromString(
                `<div>${html}</div>`,
                "text/html"
            );

        const root =
            parsed.body.firstElementChild;

        if (
            !root
        ) {
            return;
        }

        const allowedTags =
            new Set([
                "P",
                "H2",
                "H3",
                "H4",
                "BLOCKQUOTE",
                "UL",
                "OL",
                "LI",
                "A",
                "STRONG",
                "EM",
                "B",
                "I",
                "BR",
                "FIGURE",
                "FIGCAPTION",
                "IMG",
                "HR"
            ]);

        const copyNode =
            (
                sourceNode,
                destination
            ) => {
                if (
                    sourceNode.nodeType
                    ===
                    Node.TEXT_NODE
                ) {
                    destination.appendChild(
                        document.createTextNode(
                            sourceNode.textContent
                            ??
                            ""
                        )
                    );

                    return;
                }

                if (
                    sourceNode.nodeType
                    !==
                    Node.ELEMENT_NODE
                ) {
                    return;
                }

                const tagName =
                    sourceNode.tagName;

                if (
                    allowedTags.has(
                        tagName
                    )
                ) {
                    const element =
                        document.createElement(
                            tagName.toLowerCase()
                        );

                    if (
                        tagName
                        ===
                        "A"
                    ) {
                        const href =
                            sourceNode.getAttribute(
                                "href"
                            );

                        if (
                            href
                        ) {
                            try {
                                const resolved =
                                    new URL(
                                        href,
                                        window.location.href
                                    );

                                if (
                                    resolved.protocol
                                    ===
                                    "https:"
                                    ||
                                    resolved.protocol
                                    ===
                                    "http:"
                                ) {
                                    element.href =
                                        resolved.href;

                                    element.target =
                                        "_blank";

                                    element.rel =
                                        "noopener noreferrer";
                                }
                            } catch (
                                error
                            ) {
                                // Ungültigen Link weglassen.
                            }
                        }
                    }

                    if (
                        tagName
                        ===
                        "IMG"
                    ) {
                        const src =
                            sourceNode.getAttribute(
                                "src"
                            );

                        if (
                            src
                        ) {
                            try {
                                const resolved =
                                    new URL(
                                        src,
                                        window.location.href
                                    );

                                if (
                                    resolved.protocol
                                    ===
                                    "https:"
                                    ||
                                    resolved.protocol
                                    ===
                                    "http:"
                                ) {
                                    element.src =
                                        resolved.href;

                                    element.alt =
                                        sourceNode.getAttribute(
                                            "alt"
                                        )
                                        ||
                                        "";

                                    element.loading =
                                        "lazy";

                                    element.decoding =
                                        "async";

                                    element.referrerPolicy =
                                        "no-referrer-when-downgrade";
                                }
                            } catch (
                                error
                            ) {
                                // Ungültige Bild-URL weglassen.
                            }
                        }
                    }

                    [...sourceNode.childNodes]
                    .forEach(
                        child =>
                            copyNode(
                                child,
                                element
                            )
                    );

                    destination.appendChild(
                        element
                    );

                    return;
                }

                [...sourceNode.childNodes]
                .forEach(
                    child =>
                        copyNode(
                            child,
                            destination
                        )
                );
            };

        [...root.childNodes]
        .forEach(
            child =>
                copyNode(
                    child,
                    target
                )
        );
    }


    function allNewsArticles() {
        const byId =
            new Map();

        Object.values(
            newsFeedCache?.categories
            ??
            {}
        )
        .forEach(
            rows => {
                rows.forEach(
                    article => {
                        if (
                            !byId.has(
                                article.id
                            )
                        ) {
                            byId.set(
                                article.id,
                                article
                            );
                        }
                    }
                );
            }
        );

        return [
            ...byId.values()
        ];
    }


    function sortNewsArticles(
        articles
    ) {
        const rows =
            [
                ...articles
            ];

        const dateValue =
            article => {
                const date =
                    parseNewsDate(
                        article.publishedAt
                    );

                return date
                    ? date.getTime()
                    : 0;
            };

        if (
            newsSortOrder
            ===
            "oldest"
        ) {
            rows.sort(
                (
                    a,
                    b
                ) =>
                    dateValue(
                        a
                    )
                    -
                    dateValue(
                        b
                    )
            );

            return rows;
        }

        if (
            newsSortOrder
            ===
            "source"
        ) {
            rows.sort(
                (
                    a,
                    b
                ) =>
                    a.source.localeCompare(
                        b.source,
                        "de",
                        {
                            sensitivity:
                                "base"
                        }
                    )
                    ||
                    dateValue(
                        b
                    )
                    -
                    dateValue(
                        a
                    )
            );

            return rows;
        }

        if (
            newsSortOrder
            ===
            "title"
        ) {
            rows.sort(
                (
                    a,
                    b
                ) =>
                    a.title.localeCompare(
                        b.title,
                        "de",
                        {
                            sensitivity:
                                "base"
                        }
                    )
            );

            return rows;
        }

        rows.sort(
            (
                a,
                b
            ) =>
                dateValue(
                    b
                )
                -
                dateValue(
                    a
                )
        );

        return rows;
    }


    function newsSearchArticles() {
        const all =
            allNewsArticles();

        const query =
            newsSearchQuery
            .trim()
            .toLocaleLowerCase(
                "de-DE"
            );

        if (
            !query
        ) {
            return all;
        }

        const terms =
            query
            .split(
                /\s+/
            )
            .filter(
                Boolean
            );

        return all.filter(
            article => {
                const haystack =
                    newsSearchIndex.get(
                        article.id
                    )
                    ??
                    "";

                return terms.every(
                    term =>
                        haystack.includes(
                            term
                        )
                );
            }
        );
    }


    function newsVisibleArticles() {
        const rows =
            newsSearchOpen
                ? newsSearchArticles()
                : (
                    newsFeedCache?.categories?.[
                        newsActiveCategory
                    ]
                    ??
                    []
                );

        return sortNewsArticles(
            rows
        );
    }


    function renderNewsSortState() {
        el.newsSortMenu
            .querySelectorAll(
                "[data-news-sort]"
            )
            .forEach(
                button => {
                    button.classList.toggle(
                        "active",
                        button.dataset.newsSort
                        ===
                        newsSortOrder
                    );
                }
            );
    }


    function hideNewsSortMenu() {
        el.newsSortMenu.classList.add(
            "hidden"
        );

        el.newsTitleButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function toggleNewsSortMenu() {
        if (
            newsArticleOpen
        ) {
            return;
        }

        const willOpen =
            el.newsSortMenu.classList.contains(
                "hidden"
            );

        el.newsSortMenu.classList.toggle(
            "hidden",
            !willOpen
        );

        el.newsTitleButton.setAttribute(
            "aria-expanded",
            String(
                willOpen
            )
        );

        if (
            willOpen
        ) {
            renderNewsSortState();
        }
    }


    function newsStatusText(
        articles
    ) {
        if (
            newsSearchOpen
        ) {
            const query =
                newsSearchQuery.trim();

            return query
                ? `${articles.length} Treffer für „${query}“`
                : `${articles.length} Artikel · alle Rubriken`;
        }

        const updated =
            newsFeedCache?.generatedAt
                ? ` · aktualisiert ${formatNewsTime(newsFeedCache.generatedAt)}`
                : "";

        return `${articles.length} Artikel${updated}`;
    }


    function renderCurrentNewsState() {
        const articles =
            newsVisibleArticles();

        renderNewsList(
            articles
        );

        setNewsStatus(
            newsStatusText(
                articles
            )
        );
    }


    function openNewsSearch() {
        if (
            newsSearchOpen
        ) {
            return;
        }

        newsSearchOpen =
            true;

        newsSearchQuery =
            el.newsSearchInput.value
            ??
            "";

        el.newsSearchPanel.classList.remove(
            "hidden"
        );

        el.newsSearchToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        hideNewsSortMenu();

        renderCurrentNewsState();

        requestAnimationFrame(
            () => {
                el.newsSearchInput.focus();
            }
        );
    }


    function closeNewsSearch(
        clear = true
    ) {
        newsSearchOpen =
            false;

        if (
            clear
        ) {
            newsSearchQuery =
                "";

            el.newsSearchInput.value =
                "";
        }

        el.newsSearchPanel.classList.add(
            "hidden"
        );

        el.newsSearchToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        if (
            newsFeedCache
        ) {
            renderCurrentNewsState();
        }
    }


    function makeNewsThumbnail(
        article
    ) {
        if (
            !article.imageUrl
        ) {
            return null;
        }

        const wrap =
            document.createElement(
                "div"
            );

        wrap.className =
            "news-item-thumb-wrap";

        const image =
            document.createElement(
                "img"
            );

        image.className =
            "news-item-thumb";

        image.src =
            article.imageUrl;

        image.alt =
            "";

        image.loading =
            "lazy";

        image.decoding =
            "async";

        image.addEventListener(
            "error",
            () => {
                wrap.remove();
            },
            {
                once:
                    true
            }
        );

        wrap.appendChild(
            image
        );

        return wrap;
    }


    function renderNewsList(
        articles
    ) {
        el.newsList.replaceChildren();

        if (
            articles.length
            ===
            0
        ) {
            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "news-empty";

            empty.textContent =
                "Für diese Rubrik sind gerade keine Artikel im Feed.";

            el.newsList.appendChild(
                empty
            );

            return;
        }

        articles.forEach(
            article => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "news-item";

                button.dataset.newsArticleId =
                    article.id;

                const copy =
                    document.createElement(
                        "div"
                    );

                copy.className =
                    "news-item-copy";

                const meta =
                    document.createElement(
                        "div"
                    );

                meta.className =
                    "news-item-meta";

                const source =
                    document.createElement(
                        "span"
                    );

                source.className =
                    "news-item-source";

                source.textContent =
                    article.source;

                meta.appendChild(
                    source
                );

                if (
                    newsSearchOpen
                ) {
                    const categoryLabel =
                        NEWS_CATEGORY_LABELS[
                            article.category
                        ];

                    if (
                        categoryLabel
                    ) {
                        const categoryDot =
                            document.createElement(
                                "span"
                            );

                        categoryDot.className =
                            "news-item-dot";

                        categoryDot.textContent =
                            "·";

                        const category =
                            document.createElement(
                                "span"
                            );

                        category.className =
                            "news-item-category";

                        category.textContent =
                            categoryLabel;

                        meta.append(
                            categoryDot,
                            category
                        );
                    }
                }

                const timeText =
                    formatNewsTime(
                        article.publishedAt
                    );

                if (
                    timeText
                ) {
                    const dot =
                        document.createElement(
                            "span"
                        );

                    dot.className =
                        "news-item-dot";

                    dot.textContent =
                        "·";

                    const time =
                        document.createElement(
                            "span"
                        );

                    time.textContent =
                        timeText;

                    meta.append(
                        dot,
                        time
                    );
                }

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "news-item-title";

                title.textContent =
                    article.title;

                const standfirstText =
                    stripNewsHtmlToText(
                        article.standfirst
                    );

                copy.append(
                    meta,
                    title
                );

                if (
                    standfirstText
                ) {
                    const trail =
                        document.createElement(
                            "div"
                        );

                    trail.className =
                        "news-item-trail";

                    trail.textContent =
                        standfirstText;

                    copy.appendChild(
                        trail
                    );
                }

                button.appendChild(
                    copy
                );

                const thumbnail =
                    makeNewsThumbnail(
                        article
                    );

                if (
                    thumbnail
                ) {
                    button.appendChild(
                        thumbnail
                    );
                }

                el.newsList.appendChild(
                    button
                );
            }
        );
    }


    function currentNewsArticles() {
        return newsVisibleArticles();
    }


    function renderNewsFeed(
        feed
    ) {
        newsFeedCache =
            normalizeNewsFeed(
                feed
            );

        renderNewsCategoryState();
        renderCurrentNewsState();
    }


    function showNewsListView() {
        newsArticleOpen =
            false;

        el.newsArticleView.hidden =
            true;

        el.newsListView.hidden =
            false;

        el.newsRefreshButton.hidden =
            false;

        requestAnimationFrame(
            () => {
                window.scrollTo(
                    0,
                    newsListScrollTop
                );
            }
        );
    }


    function setNewsArticleImage(
        article
    ) {
        const hasImage =
            Boolean(
                article.imageUrl
            );

        el.newsArticleImageWrap.hidden =
            !hasImage;

        if (
            !hasImage
        ) {
            el.newsArticleImage.removeAttribute(
                "src"
            );

            el.newsArticleImage.alt =
                "";

            el.newsArticleImageCredit.textContent =
                "";

            return;
        }

        el.newsArticleImage.src =
            article.imageUrl;

        el.newsArticleImage.alt =
            article.imageAlt
            ||
            article.title;

        el.newsArticleImageCredit.textContent =
            article.imageCredit;

        el.newsArticleImageCredit.hidden =
            !article.imageCredit;

        el.newsArticleImage.onerror =
            () => {
                el.newsArticleImageWrap.hidden =
                    true;
            };
    }


    function openNewsArticle(
        articleId
    ) {
        const article =
            newsArticleIndex.get(
                articleId
            );

        if (
            !article
        ) {
            return;
        }

        newsListScrollTop =
            window.scrollY
            ||
            document.documentElement.scrollTop
            ||
            0;

        newsArticleOpen =
            true;

        el.newsListView.hidden =
            true;

        el.newsArticleView.hidden =
            false;

        el.newsRefreshButton.hidden =
            true;

        el.newsArticleSource.textContent =
            article.source;

        el.newsArticleTitle.textContent =
            article.title;

        const metaParts = [];

        if (
            article.byline
        ) {
            metaParts.push(
                stripNewsHtmlToText(
                    article.byline
                )
            );
        }

        const longDate =
            formatNewsDateLong(
                article.publishedAt
            );

        if (
            longDate
        ) {
            metaParts.push(
                longDate
            );
        }

        el.newsArticleMeta.textContent =
            metaParts.join(
                " · "
            );

        setNewsArticleImage(
            article
        );

        const standfirstText =
            stripNewsHtmlToText(
                article.standfirst
            );

        el.newsArticleStandfirst.textContent =
            standfirstText;

        el.newsArticleStandfirst.hidden =
            !standfirstText;

        el.newsArticleNotice.hidden =
            true;

        el.newsArticleNotice.textContent =
            "";

        el.newsGuardianAttribution.hidden =
            article.source
            !==
            "The Guardian";

        el.newsBellingcatAttribution.hidden =
            article.source
            !==
            "Bellingcat";

        if (
            article.fullText
            &&
            article.bodyHtml
        ) {
            appendSanitizedNewsHtml(
                el.newsArticleBody,
                article.bodyHtml
            );
        } else {
            el.newsArticleBody.replaceChildren();

            if (
                article.source
                ===
                "Bellingcat"
            ) {
                el.newsArticleNotice.hidden =
                    false;

                el.newsArticleNotice.textContent =
                    "Bellingcat wird hier als interne Vorschau aus dem offiziellen Feed angezeigt. Für die vollständige Recherche führt der Quellenlink unten zum Originalartikel.";
            }
        }

        el.newsArticleOriginal.href =
            article.url;

        el.newsArticleOriginal.textContent =
            article.source
            ===
            "The Guardian"
                ? "Original bei The Guardian ↗"
                : "Vollständigen Artikel bei Bellingcat lesen ↗";

        window.scrollTo(
            0,
            0
        );
    }


    async function loadNewsStaticFeed(
        force = false
    ) {
        const requestToken =
            ++newsRequestToken;

        const cached =
            readNewsCache();

        if (
            !force
            &&
            newsFeedCache
        ) {
            renderNewsFeed(
                newsFeedCache
            );
        } else if (
            cached?.categories
        ) {
            renderNewsFeed(
                cached
            );

            setNewsStatus(
                "Aktualisiere im Hintergrund",
                true
            );
        } else {
            el.newsList.replaceChildren();

            setNewsStatus(
                "Lade Nachrichten",
                true
            );
        }

        try {
            const response =
                await fetch(
                    `${NEWS_STATIC_FEED}?v=${Date.now()}`,
                    {
                        cache:
                            "no-store"
                    }
                );

            if (
                !response.ok
            ) {
                throw new Error(
                    `news feed ${response.status}`
                );
            }

            const feed =
                normalizeNewsFeed(
                    await response.json()
                );

            const total =
                Object.values(
                    feed.categories
                )
                .reduce(
                    (
                        sum,
                        rows
                    ) =>
                        sum
                        +
                        rows.length,
                    0
                );

            if (
                total
                ===
                0
            ) {
                throw new Error(
                    "news feed empty"
                );
            }

            if (
                requestToken
                !==
                newsRequestToken
            ) {
                return;
            }

            writeNewsCache(
                feed
            );

            renderNewsFeed(
                feed
            );
        } catch (
            error
        ) {
            if (
                requestToken
                !==
                newsRequestToken
            ) {
                return;
            }

            const fallback =
                readNewsCache();

            if (
                fallback?.categories
            ) {
                renderNewsFeed(
                    fallback
                );

                setNewsStatus(
                    "Gespeicherte Nachrichten · Live-Feed gerade nicht erreichbar"
                );
            } else {
                renderNewsList(
                    []
                );

                setNewsStatus(
                    "Nachrichten-Feed noch nicht erzeugt · GitHub Pages Workflow starten"
                );
            }
        }
    }


    async function fetchNews(
        category = newsActiveCategory,
        options = {}
    ) {
        newsActiveCategory =
            Object.prototype.hasOwnProperty.call(
                NEWS_CATEGORY_LABELS,
                category
            )
                ? category
                : "world";

        renderNewsCategoryState();

        if (
            newsFeedCache
        ) {
            renderCurrentNewsState();

            if (
                options.force
            ) {
                await loadNewsStaticFeed(
                    true
                );
            }

            return;
        }

        await loadNewsStaticFeed(
            Boolean(
                options.force
            )
        );
    }


    function openNewsPortal() {
        hideNewsSortMenu();

        newsSearchOpen =
            false;

        newsSearchQuery =
            "";

        el.newsSearchInput.value =
            "";

        el.newsSearchPanel.classList.add(
            "hidden"
        );

        el.newsSearchToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        showScreen(
            screens.news
        );

        showNewsListView();

        fetchNews(
            newsActiveCategory
        );
    }


    function openYoutubePortal() {
        youtubeRequestToken +=
            1;

        youtubeLastQuery =
            "";

        youtubeSearchVideos =
            [];

        youtubeSearchChannels =
            [];

        youtubeActiveTab =
            "videos";

        youtubeOpenFolderId =
            null;

        youtubeCurrentChannel =
            null;

        youtubeChannelNextPageToken =
            "";

        youtubePendingSaveVideo =
            null;

        el.youtubeSearchInput.value =
            "";

        hideYoutubeFolderComposer();

        hideYoutubeSortMenu();

        closeYoutubeFolderPicker();

        closeYoutubePlayer();

        showYoutubeLanding();

        showScreen(
            screens.youtube
        );
    }


    el.chessRoomYoutubeHotspot.addEventListener(
        "click",
        () => {
            turnBetweenStudyRooms(
                screens.chessRoom,
                screens.filmRoom,
                "right"
            );
        }
    );


    el.filmRoomBackHotspot.addEventListener(
        "click",
        () => {
            turnBetweenStudyRooms(
                screens.filmRoom,
                screens.chessRoom,
                "left"
            );
        }
    );


    el.filmRoomRightHotspot.addEventListener(
        "click",
        () => {
            turnBetweenStudyRooms(
                screens.filmRoom,
                screens.mapRoom,
                "right"
            );
        }
    );


    el.mapRoomLeftHotspot.addEventListener(
        "click",
        () => {
            turnBetweenStudyRooms(
                screens.mapRoom,
                screens.filmRoom,
                "left"
            );
        }
    );


    el.mapRoomRightHotspot.addEventListener(
        "click",
        () => {
            turnBetweenStudyRooms(
                screens.mapRoom,
                screens.textsHub,
                "right"
            );
        }
    );


    el.mapRoomMapHotspot.addEventListener(
        "click",
        openNewsPortal
    );


    el.filmRoomCameraHotspot.addEventListener(
        "click",
        openYoutubePortal
    );


    el.backFromNews.addEventListener(
        "click",
        () => {
            if (
                newsArticleOpen
            ) {
                showNewsListView();
                return;
            }

            if (
                newsSearchOpen
            ) {
                closeNewsSearch(
                    true
                );
                return;
            }

            newsRequestToken += 1;

            hideNewsSortMenu();

            showScreen(
                screens.mapRoom
            );
        }
    );


    el.newsRefreshButton.addEventListener(
        "click",
        () => {
            fetchNews(
                newsActiveCategory,
                {
                    force:
                        true
                }
            );
        }
    );


    el.newsCategories.addEventListener(
        "click",
        event => {
            const button =
                event.target.closest(
                    "[data-news-category]"
                );

            if (
                !button
            ) {
                return;
            }

            const category =
                button.dataset.newsCategory;

            if (
                newsSearchOpen
            ) {
                newsSearchOpen =
                    false;

                newsSearchQuery =
                    "";

                el.newsSearchInput.value =
                    "";

                el.newsSearchPanel.classList.add(
                    "hidden"
                );

                el.newsSearchToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            if (
                category
                ===
                newsActiveCategory
            ) {
                renderCurrentNewsState();
                return;
            }

            fetchNews(
                category
            );
        }
    );


    el.newsTitleButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();
            toggleNewsSortMenu();
        }
    );


    el.newsSortMenu.addEventListener(
        "click",
        event => {
            const button =
                event.target.closest(
                    "[data-news-sort]"
                );

            if (
                !button
            ) {
                return;
            }

            const order =
                button.dataset.newsSort;

            if (
                ![
                    "newest",
                    "oldest",
                    "source",
                    "title"
                ].includes(
                    order
                )
            ) {
                return;
            }

            newsSortOrder =
                order;

            renderNewsSortState();
            hideNewsSortMenu();

            if (
                newsFeedCache
            ) {
                renderCurrentNewsState();
            }
        }
    );


    el.newsSearchToggle.addEventListener(
        "click",
        () => {
            if (
                newsSearchOpen
            ) {
                closeNewsSearch(
                    true
                );
            } else {
                openNewsSearch();
            }
        }
    );


    el.newsSearchInput.addEventListener(
        "input",
        () => {
            newsSearchQuery =
                el.newsSearchInput.value
                ??
                "";

            if (
                newsFeedCache
            ) {
                renderCurrentNewsState();
            }
        }
    );


    el.newsSearchInput.addEventListener(
        "keydown",
        event => {
            if (
                event.key
                ===
                "Escape"
            ) {
                event.preventDefault();

                closeNewsSearch(
                    true
                );
            }
        }
    );


    el.newsSearchClear.addEventListener(
        "click",
        () => {
            if (
                el.newsSearchInput.value
            ) {
                el.newsSearchInput.value =
                    "";

                newsSearchQuery =
                    "";

                renderCurrentNewsState();

                el.newsSearchInput.focus();
                return;
            }

            closeNewsSearch(
                true
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.newsSortMenu.classList.contains(
                    "hidden"
                )
                &&
                !el.newsSortMenu.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.newsTitleButton
            ) {
                hideNewsSortMenu();
            }
        }
    );


    el.newsList.addEventListener(
        "click",
        event => {
            const button =
                event.target.closest(
                    "[data-news-article-id]"
                );

            if (
                !button
            ) {
                return;
            }

            openNewsArticle(
                button.dataset.newsArticleId
            );
        }
    );


    el.youtubeTitleButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            toggleYoutubeSortMenu();
        }
    );


    [
        el.youtubeSortNormal,
        el.youtubeSortViews,
        el.youtubeSortDate
    ].forEach(
        button => {
            button.addEventListener(
                "click",
                () => {
                    setYoutubeSortOrder(
                        button.dataset.youtubeOrder
                    );
                }
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.youtubeSortMenu.classList.contains(
                    "hidden"
                )
                &&
                !el.youtubeSortMenu.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.youtubeTitleButton
            ) {
                hideYoutubeSortMenu();
            }
        }
    );


    el.youtubeSearchForm.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            /*
               Bewusst nur beim Absenden:
               keine Suchvorschläge, keine API-Anfrage während der Eingabe.
            */
            searchYoutube(
                el.youtubeSearchInput.value
            );
        }
    );


    el.youtubeTabVideos.addEventListener(
        "click",
        () => {
            youtubeActiveTab =
                "videos";

            renderYoutubeResults();
        }
    );


    el.youtubeTabChannels.addEventListener(
        "click",
        () => {
            youtubeActiveTab =
                "channels";

            renderYoutubeResults();
        }
    );


    el.youtubeFolderButton.addEventListener(
        "click",
        () => {
            if (
                el.youtubeFolderComposer.classList.contains(
                    "hidden"
                )
            ) {
                showYoutubeFolderComposer();
            } else {
                hideYoutubeFolderComposer();
            }
        }
    );


    el.youtubeFolderComposer.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            const shouldSaveVideo =
                youtubeFolderComposerSaveVideo
                &&
                Boolean(
                    youtubePendingSaveVideo?.videoId
                );

            const folder =
                createYoutubeFolder(
                    el.youtubeFolderNameInput.value
                );

            if (
                folder
            ) {
                hideYoutubeFolderComposer();

                if (
                    shouldSaveVideo
                ) {
                    addYoutubeVideoToFolder(
                        folder.id
                    );
                } else {
                    showYoutubeFolder(
                        folder.id
                    );
                }
            }
        }
    );


    el.youtubeFolderCreateCancel.addEventListener(
        "click",
        hideYoutubeFolderComposer
    );


    el.youtubeFolderPickerCancel.addEventListener(
        "click",
        closeYoutubeFolderPicker
    );


    el.youtubeFolderPicker.addEventListener(
        "click",
        event => {
            if (
                event.target
                ===
                el.youtubeFolderPicker
            ) {
                closeYoutubeFolderPicker();
            }
        }
    );


    el.youtubeFolderPickerNew.addEventListener(
        "click",
        () => {
            closeYoutubeFolderPicker();

            showYoutubeFolderComposer(
                true
            );
        }
    );


    el.youtubeChannelMore.addEventListener(
        "click",
        () => {
            loadMoreYoutubeChannelVideos();
        }
    );


    el.youtubePlayerClose.addEventListener(
        "click",
        closeYoutubePlayer
    );


    document.addEventListener(
        "keydown",
        event => {
            if (
                event.key
                ===
                "Escape"
                &&
                !el.youtubePlayer.classList.contains(
                    "hidden"
                )
            ) {
                closeYoutubePlayer();
            }
        }
    );


    el.backFromYoutube.addEventListener(
        "click",
        () => {
            if (
                !el.youtubeSortMenu.classList.contains(
                    "hidden"
                )
            ) {
                hideYoutubeSortMenu();
                return;
            }

            if (
                !el.youtubePlayer.classList.contains(
                    "hidden"
                )
            ) {
                closeYoutubePlayer();
                return;
            }

            youtubeRequestToken +=
                1;

            closeYoutubeFolderPicker();

            if (
                youtubeCurrentChannel
            ) {
                youtubeCurrentChannel =
                    null;

                youtubeChannelNextPageToken =
                    "";

                if (
                    youtubeLastQuery
                ) {
                    showYoutubeSearchResults();
                } else {
                    showYoutubeLanding();
                }

                return;
            }

            if (
                youtubeOpenFolderId
            ) {
                showYoutubeLanding();
                return;
            }

            if (
                !el.youtubeResults.classList.contains(
                    "hidden"
                )
                &&
                youtubeLastQuery
            ) {
                youtubeLastQuery =
                    "";

                youtubeSearchVideos =
                    [];

                youtubeSearchChannels =
                    [];

                el.youtubeSearchInput.value =
                    "";

                showYoutubeLanding();
                return;
            }

            showScreen(
                screens.filmRoom
            );
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
    // V57 — SCHACH: ERÖFFNUNGEN LERNEN
    // ==================================================

    /*
       Das Repertoire ist absichtlich klein und praktisch:
       fünf Linien für Weiß, fünf Antworten mit Schwarz.
       Ziel bei ~1300 Elo ist Wiedererkennen + typische Entwicklung,
       nicht das Auswendiglernen tiefer Engine-Theorie.
    */
    const CHESS_OPENING_LINES = [
        {
            id: "italian",
            name: "Italienische Partie",
            side: "w",
            idea: "Schnelle Entwicklung, Druck auf f7, c3–d4 vorbereiten und den König früh rochieren.",
            san: [
                "e4", "e5",
                "Nf3", "Nc6",
                "Bc4", "Bc5",
                "c3", "Nf6",
                "d3", "d6",
                "O-O", "O-O",
                "Re1", "a6"
            ]
        },
        {
            id: "ruy-lopez",
            name: "Spanische Partie",
            side: "w",
            idea: "Den Springer c6 binden, e5 langfristig unter Druck setzen und mit c3 sowie d4 das Zentrum aufbauen.",
            san: [
                "e4", "e5",
                "Nf3", "Nc6",
                "Bb5", "a6",
                "Ba4", "Nf6",
                "O-O", "Be7",
                "Re1", "b5",
                "Bb3", "d6",
                "c3", "O-O"
            ]
        },
        {
            id: "scotch",
            name: "Schottische Partie",
            side: "w",
            idea: "Das Zentrum sofort mit d4 öffnen und Entwicklungsvorsprung statt langfristiger Manöver suchen.",
            san: [
                "e4", "e5",
                "Nf3", "Nc6",
                "d4", "exd4",
                "Nxd4", "Nf6",
                "Nxc6", "bxc6",
                "e5", "Qe7",
                "Qe2", "Nd5"
            ]
        },
        {
            id: "queens-gambit",
            name: "Damengambit",
            side: "w",
            idea: "Mit c4 das schwarze d5-Zentrum angreifen, Figuren natürlich entwickeln und Raum im Zentrum gewinnen.",
            san: [
                "d4", "d5",
                "c4", "e6",
                "Nc3", "Nf6",
                "Nf3", "Be7",
                "Bg5", "O-O",
                "e3", "h6",
                "Bh4", "b6"
            ]
        },
        {
            id: "london",
            name: "London-System",
            side: "w",
            idea: "Ein stabiles Entwicklungsschema mit Bf4, e3, Bd3 und Nbd2; erst entwickeln, dann den Zentrumsvorstoß vorbereiten.",
            san: [
                "d4", "d5",
                "Nf3", "Nf6",
                "Bf4", "e6",
                "e3", "Bd6",
                "Bg3", "O-O",
                "Bd3", "c5",
                "Nbd2", "Nc6"
            ]
        },
        {
            id: "caro-kann",
            name: "Caro-Kann-Verteidigung",
            side: "b",
            idea: "Das Zentrum mit c6–d5 angreifen und den weißfeldrigen Läufer vor ...e6 aktiv entwickeln.",
            san: [
                "e4", "c6",
                "d4", "d5",
                "Nc3", "dxe4",
                "Nxe4", "Bf5",
                "Ng3", "Bg6",
                "h4", "h6",
                "Nf3", "Nd7"
            ]
        },
        {
            id: "accelerated-dragon",
            name: "Sizilianisch · Beschleunigter Drache",
            side: "b",
            idea: "Asymmetrisch um das Zentrum kämpfen, den Läufer nach g7 fianchettieren und aktives Figurenspiel erzeugen.",
            san: [
                "e4", "c5",
                "Nf3", "Nc6",
                "d4", "cxd4",
                "Nxd4", "g6",
                "Nc3", "Bg7",
                "Be3", "Nf6",
                "Bc4", "O-O"
            ]
        },
        {
            id: "french",
            name: "Französische Verteidigung",
            side: "b",
            idea: "Das weiße e5-Zentrum mit ...c5 und später ...f6 angreifen; die Bauernkette bestimmt den Plan.",
            san: [
                "e4", "e6",
                "d4", "d5",
                "Nc3", "Nf6",
                "e5", "Nfd7",
                "f4", "c5",
                "Nf3", "Nc6",
                "Be3", "a6"
            ]
        },
        {
            id: "slav",
            name: "Slawische Verteidigung",
            side: "b",
            idea: "d5 mit c6 stabilisieren, den Läufer c8 aktiv halten und das Damengambit solide beantworten.",
            san: [
                "d4", "d5",
                "c4", "c6",
                "Nf3", "Nf6",
                "Nc3", "dxc4",
                "a4", "Bf5",
                "e3", "e6",
                "Bxc4", "Bb4"
            ]
        },
        {
            id: "kings-indian",
            name: "Königsindische Verteidigung",
            side: "b",
            idea: "Weiß zunächst das Zentrum besetzen lassen, sicher rochieren und anschließend mit ...e5 Gegenspiel erzeugen.",
            san: [
                "d4", "Nf6",
                "c4", "g6",
                "Nc3", "Bg7",
                "e4", "d6",
                "Nf3", "O-O",
                "Be2", "e5",
                "O-O", "Nc6"
            ]
        }
    ];

    const CHESS_OPENING_PROGRESS_KEY =
        "personalPlannerSuite_chess_openings_v1";

    let chessOpeningProgress =
        {};

    let chessLearnOpening =
        null;

    let chessLearnCompiled =
        null;

    let chessLearnGame =
        null;

    let chessLearnIndex =
        0;

    let chessLearnVariation =
        false;

    let chessLearnSelectedSquare =
        null;

    let chessLearnLegalMoves =
        [];

    let chessLearnLastMove =
        null;

    let chessLearnBaseFen =
        "";

    let chessLearnEvalToken =
        0;

    let chessLearnEvalCache =
        new Map();

    let chessLearnWrongExpectedIndex =
        null;

    let chessLearnPracticeGame =
        null;

    let chessLearnPracticePly =
        0;

    let chessLearnPracticeSelectedSquare =
        null;

    let chessLearnPracticeLegalMoves =
        [];

    let chessLearnPracticeLastMove =
        null;

    let chessLearnPracticeLocked =
        false;

    let chessLearnPracticeCompleting =
        false;

    let chessLearnPracticeToken =
        0;

    let chessLearnCardOrder =
        [];

    let chessLearnCardIndex =
        0;

    let chessLearnCardRevealed =
        false;


    function loadChessOpeningProgress() {
        try {
            const parsed =
                JSON.parse(
                    localStorage.getItem(
                        CHESS_OPENING_PROGRESS_KEY
                    )
                    ||
                    "{}"
                );

            chessOpeningProgress =
                parsed
                &&
                typeof parsed
                ===
                "object"
                    ? parsed
                    : {};
        } catch (
            error
        ) {
            chessOpeningProgress =
                {};
        }
    }


    function saveChessOpeningProgress() {
        try {
            localStorage.setItem(
                CHESS_OPENING_PROGRESS_KEY,
                JSON.stringify(
                    chessOpeningProgress
                )
            );
        } catch (
            error
        ) {
            // Training remains usable without persistent progress.
        }
    }


    function chessOpeningSideLabel(
        side
    ) {
        return side
        ===
        "w"
            ? "Weiß"
            : "Schwarz";
    }


    function openingMovePreview(
        opening
    ) {
        const parts =
            [];

        for (
            let index = 0;
            index < Math.min(
                opening.san.length,
                8
            );
            index += 2
        ) {
            const number =
                index / 2 + 1;

            parts.push(
                `${number}. ${opening.san[index]} ${opening.san[index + 1] ?? ""}`.trim()
            );
        }

        return parts.join(
            "  "
        );
    }


    async function compileChessOpening(
        opening
    ) {
        if (
            opening._compiled
        ) {
            return opening._compiled;
        }

        const Chess =
            await loadChessLibrary();

        const game =
            new Chess();

        const fens = [
            game.fen()
        ];

        const moves =
            [];

        for (
            let index = 0;
            index < opening.san.length;
            index += 1
        ) {
            const san =
                opening.san[
                    index
                ];

            const beforeMoves =
                game.moves({
                    verbose:
                        true
                });

            const candidate =
                beforeMoves.find(
                    move =>
                        move.san
                        ===
                        san
                );

            if (
                !candidate
            ) {
                throw new Error(
                    `Ungültige Eröffnungslinie: ${opening.name}, Zug ${index + 1} (${san})`
                );
            }

            const made =
                game.move(
                    san
                );

            moves.push({
                from:
                    made.from,
                to:
                    made.to,
                promotion:
                    made.promotion
                    ??
                    undefined,
                san:
                    made.san,
                color:
                    made.color
            });

            fens.push(
                game.fen()
            );
        }

        opening._compiled = {
            fens,
            moves
        };

        return opening._compiled;
    }


    function renderChessOpeningList() {
        loadChessOpeningProgress();

        el.chessLearnOpeningList.innerHTML =
            "";

        CHESS_OPENING_LINES.forEach(
            (
                opening,
                index
            ) => {
                const row =
                    document.createElement(
                        "button"
                    );

                row.type =
                    "button";

                row.className =
                    "chess-learn-opening-row";

                const number =
                    document.createElement(
                        "span"
                    );

                number.className =
                    "chess-learn-opening-number";

                number.textContent =
                    String(
                        index + 1
                    )
                    .padStart(
                        2,
                        "0"
                    );

                const copy =
                    document.createElement(
                        "span"
                    );

                copy.className =
                    "chess-learn-opening-copy";

                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "chess-learn-opening-name";

                name.textContent =
                    opening.name;

                const preview =
                    document.createElement(
                        "span"
                    );

                preview.className =
                    "chess-learn-opening-preview";

                preview.textContent =
                    openingMovePreview(
                        opening
                    );

                copy.append(
                    name,
                    preview
                );

                const meta =
                    document.createElement(
                        "span"
                    );

                meta.className =
                    "chess-learn-opening-meta";

                const side =
                    document.createElement(
                        "span"
                    );

                side.className =
                    "chess-learn-side-badge";

                side.textContent =
                    chessOpeningSideLabel(
                        opening.side
                    );

                const count =
                    Number(
                        chessOpeningProgress[
                            opening.id
                        ]
                        ??
                        0
                    );

                const complete =
                    document.createElement(
                        "span"
                    );

                complete.className =
                    "chess-learn-complete-count";

                complete.textContent =
                    count > 0
                        ? `✓ ${count}×`
                        : "";

                meta.append(
                    side,
                    complete
                );

                row.append(
                    number,
                    copy,
                    meta
                );

                row.addEventListener(
                    "click",
                    () => {
                        void openChessOpeningDetail(
                            opening.id
                        );
                    }
                );

                el.chessLearnOpeningList.appendChild(
                    row
                );
            }
        );
    }


    async function openChessLearnList() {
        try {
            await loadChessLibrary();

            preloadChessPieces();

            initChessEngine();

            waitForChessEngine(
                30000
            );

            renderChessOpeningList();

            showScreen(
                screens.chessLearnList
            );
        } catch (
            error
        ) {
            console.error(
                "Opening trainer startup error:",
                error
            );

            window.alert(
                "Der Eröffnungsmodus konnte nicht geladen werden. Bitte lade die Seite einmal neu."
            );
        }
    }


    function setChessLearnEvalBar(
        score
    ) {
        if (
            !score
        ) {
            el.chessLearnEvalWhite.style.height =
                "50%";

            el.chessLearnEvalWhite.style.top =
                "auto";

            el.chessLearnEvalWhite.style.bottom =
                "0";

            el.chessLearnEvalLabel.textContent =
                "–";

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
                score.value > 0
                    ? 99
                    : 1;

            label =
                score.value > 0
                    ? `M${Math.abs(score.value)}`
                    : `−M${Math.abs(score.value)}`;
        } else {
            whitePercent =
                50
                +
                Math.tanh(
                    score.pawns / 4.4
                )
                *
                48;

            label =
                score.pawns >= 0
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

        if (
            chessLearnOpening?.side
            ===
            "w"
        ) {
            el.chessLearnEvalWhite.style.top =
                "auto";

            el.chessLearnEvalWhite.style.bottom =
                "0";
        } else {
            el.chessLearnEvalWhite.style.bottom =
                "auto";

            el.chessLearnEvalWhite.style.top =
                "0";
        }

        el.chessLearnEvalWhite.style.height =
            `${whitePercent}%`;

        el.chessLearnEvalLabel.textContent =
            label;
    }


    async function evaluateChessLearnFen(
        fen,
        force = false
    ) {
        if (
            !force
            &&
            chessLearnEvalCache.has(
                fen
            )
        ) {
            return chessLearnEvalCache.get(
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
            result?.score
        ) {
            chessLearnEvalCache.set(
                fen,
                result.score
            );

            return result.score;
        }

        return null;
    }


    async function openChessOpeningDetail(
        openingId,
        index = 0,
        feedback = ""
    ) {
        const opening =
            CHESS_OPENING_LINES.find(
                item =>
                    item.id
                    ===
                    openingId
            );

        if (
            !opening
        ) {
            return;
        }

        try {
            chessLearnOpening =
                opening;

            chessLearnCompiled =
                await compileChessOpening(
                    opening
                );

            chessLearnEvalCache =
                new Map();

            chessLearnWrongExpectedIndex =
                feedback
                    ? index
                    : null;

            el.chessLearnDetailTitle.textContent =
                opening.name;

            el.chessLearnDetailSide.textContent =
                `Repertoire · ${chessOpeningSideLabel(opening.side)}`;

            el.chessLearnDetailIdea.textContent =
                opening.idea;

            loadChessLearnPosition(
                index
            );

            renderChessLearnLine();

            showScreen(
                screens.chessLearnDetail
            );

            renderChessLearnDetail();

            if (
                feedback
            ) {
                el.chessLearnFeedback.textContent =
                    feedback;
            } else {
                void updateChessLearnEvaluation();
            }

        } catch (
            error
        ) {
            console.error(
                error
            );

            window.alert(
                "Diese Eröffnungslinie konnte nicht geladen werden."
            );
        }
    }


    function loadChessLearnPosition(
        index
    ) {
        if (
            !ChessConstructor
            ||
            !chessLearnCompiled
        ) {
            return;
        }

        chessLearnIndex =
            Math.max(
                0,
                Math.min(
                    chessLearnCompiled.fens.length - 1,
                    index
                )
            );

        chessLearnGame =
            new ChessConstructor(
                chessLearnCompiled.fens[
                    chessLearnIndex
                ]
            );

        chessLearnVariation =
            false;

        chessLearnSelectedSquare =
            null;

        chessLearnLegalMoves =
            [];

        chessLearnBaseFen =
            chessLearnGame.fen();

        el.chessLearnReturnLine.classList.add(
            "hidden"
        );

        if (
            chessLearnIndex > 0
        ) {
            const last =
                chessLearnCompiled.moves[
                    chessLearnIndex - 1
                ];

            chessLearnLastMove = {
                from:
                    last.from,
                to:
                    last.to
            };
        } else {
            chessLearnLastMove =
                null;
        }
    }


    function renderChessLearnDetail() {
        if (
            !chessLearnGame
            ||
            !chessLearnOpening
        ) {
            return;
        }

        renderChessBoardInto(
            el.chessLearnBoard,
            chessLearnGame,
            {
                selectedSquare:
                    chessLearnSelectedSquare,
                legalMoves:
                    chessLearnLegalMoves,
                lastMove:
                    chessLearnLastMove,
                clickHandler:
                    handleChessLearnSquare,
                orientation:
                    chessLearnOpening.side
            }
        );

        const total =
            chessLearnCompiled.moves.length;

        el.chessLearnCounter.textContent =
            `${chessLearnIndex} / ${total}`;

        if (
            chessLearnVariation
        ) {
            el.chessLearnMoveLabel.textContent =
                "Alternative";

            el.chessLearnReturnLine.classList.remove(
                "hidden"
            );
        } else if (
            chessLearnIndex === 0
        ) {
            el.chessLearnMoveLabel.textContent =
                "Ausgangsstellung";
        } else {
            const ply =
                chessLearnIndex;

            const moveNumber =
                Math.ceil(
                    ply / 2
                );

            const side =
                ply % 2 === 1
                    ? ""
                    : " …";

            el.chessLearnMoveLabel.textContent =
                `${moveNumber}.${side} ${chessLearnOpening.san[ply - 1]}`;
        }

        el.chessLearnPrev.disabled =
            chessLearnVariation
            ||
            chessLearnIndex <= 0;

        el.chessLearnNext.disabled =
            chessLearnVariation
            ||
            chessLearnIndex >= total;

        renderChessLearnLine();
    }


    function renderChessLearnLine() {
        if (
            !chessLearnOpening
        ) {
            return;
        }

        el.chessLearnMoves.innerHTML =
            "";

        chessLearnOpening.san.forEach(
            (
                san,
                index
            ) => {
                if (
                    index % 2 === 0
                ) {
                    const number =
                        document.createElement(
                            "span"
                        );

                    number.className =
                        "chess-learn-move-number";

                    number.textContent =
                        `${index / 2 + 1}.`;

                    el.chessLearnMoves.appendChild(
                        number
                    );
                }

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "chess-learn-move-button";

                const mover =
                    index % 2 === 0
                        ? "w"
                        : "b";

                if (
                    mover
                    ===
                    chessLearnOpening.side
                ) {
                    button.classList.add(
                        "repertoire-move"
                    );
                }

                if (
                    !chessLearnVariation
                    &&
                    chessLearnIndex
                    ===
                    index + 1
                ) {
                    button.classList.add(
                        "active"
                    );
                }

                if (
                    chessLearnWrongExpectedIndex
                    ===
                    index
                ) {
                    button.classList.add(
                        "expected"
                    );
                }

                button.textContent =
                    san;

                button.addEventListener(
                    "click",
                    () => {
                        chessLearnWrongExpectedIndex =
                            null;

                        loadChessLearnPosition(
                            index + 1
                        );

                        renderChessLearnDetail();

                        void updateChessLearnEvaluation();
                    }
                );

                el.chessLearnMoves.appendChild(
                    button
                );
            }
        );
    }


    function handleChessLearnSquare(
        square
    ) {
        if (
            !chessLearnGame
            ||
            chessLearnGame.isGameOver()
        ) {
            return;
        }

        const piece =
            chessLearnGame.get(
                square
            );

        const turn =
            chessLearnGame.turn();

        if (
            !chessLearnSelectedSquare
        ) {
            if (
                piece
                &&
                piece.color
                ===
                turn
            ) {
                chessLearnSelectedSquare =
                    square;

                chessLearnLegalMoves =
                    movesFromSquare(
                        chessLearnGame,
                        square
                    );

                renderChessLearnDetail();
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
            chessLearnSelectedSquare =
                square;

            chessLearnLegalMoves =
                movesFromSquare(
                    chessLearnGame,
                    square
                );

            renderChessLearnDetail();

            return;
        }

        const candidates =
            chessLearnLegalMoves.filter(
                move =>
                    move.to
                    ===
                    square
            );

        if (
            candidates.length === 0
        ) {
            chessLearnSelectedSquare =
                null;

            chessLearnLegalMoves =
                [];

            renderChessLearnDetail();

            return;
        }

        const chosen =
            candidates.find(
                move =>
                    !move.promotion
                    ||
                    move.promotion
                    ===
                    "q"
            )
            ??
            candidates[0];

        void makeChessLearnAlternative({
            from:
                chosen.from,
            to:
                chosen.to,
            promotion:
                chosen.promotion
        });
    }


    async function makeChessLearnAlternative(
        move
    ) {
        if (
            !chessLearnGame
        ) {
            return;
        }

        const beforeFen =
            chessLearnGame.fen();

        const mover =
            chessLearnGame.turn();

        const baseline =
            await evaluateChessLearnFen(
                beforeFen
            );

        let made;

        try {
            made =
                chessLearnGame.move(
                    move
                );
        } catch (
            error
        ) {
            return;
        }

        chessLearnLastMove = {
            from:
                made.from,
            to:
                made.to
        };

        chessLearnSelectedSquare =
            null;

        chessLearnLegalMoves =
            [];

        chessLearnVariation =
            true;

        el.chessLearnReturnLine.classList.remove(
            "hidden"
        );

        renderChessLearnDetail();

        el.chessLearnFeedback.textContent =
            "Alternative wird analysiert …";

        const after =
            await evaluateChessLearnFen(
                chessLearnGame.fen(),
                true
            );

        if (
            !after
        ) {
            el.chessLearnFeedback.textContent =
                `${made.san} · Bewertung nicht verfügbar`;

            return;
        }

        setChessLearnEvalBar(
            after
        );

        const quality =
            classifyChessMoveQuality(
                baseline,
                after,
                mover
            );

        el.chessLearnFeedback.textContent =
            `${made.san} · ${quality}`;
    }


    async function updateChessLearnEvaluation() {
        if (
            !chessLearnGame
        ) {
            return;
        }

        const token =
            ++chessLearnEvalToken;

        el.chessLearnEvalLabel.classList.add(
            "pending"
        );

        if (
            !chessLearnWrongExpectedIndex
        ) {
            el.chessLearnFeedback.textContent =
                "Stellung wird analysiert …";
        }

        const score =
            await evaluateChessLearnFen(
                chessLearnGame.fen()
            );

        if (
            token
            !==
            chessLearnEvalToken
        ) {
            return;
        }

        setChessLearnEvalBar(
            score
        );

        el.chessLearnEvalLabel.classList.remove(
            "pending"
        );

        if (
            chessLearnVariation
        ) {
            return;
        }

        if (
            chessLearnWrongExpectedIndex
            !==
            null
        ) {
            const expected =
                chessLearnOpening.san[
                    chessLearnWrongExpectedIndex
                ];

            el.chessLearnFeedback.textContent =
                `Falsch · erwartet war ${expected}`;

            return;
        }

        if (
            chessLearnIndex === 0
        ) {
            el.chessLearnFeedback.textContent =
                "Ausgangsstellung";

            return;
        }

        const move =
            chessLearnOpening.san[
                chessLearnIndex - 1
            ];

        el.chessLearnFeedback.textContent =
            `${move} · Hauptvariante`;
    }


    function uciMatchesOpeningMove(
        from,
        to,
        promotion,
        expected
    ) {
        return (
            from === expected.from
            &&
            to === expected.to
            &&
            (
                (
                    promotion
                    ??
                    undefined
                )
                ===
                (
                    expected.promotion
                    ??
                    undefined
                )
                ||
                (
                    !expected.promotion
                    &&
                    !promotion
                )
            )
        );
    }


    async function startChessOpeningPractice() {
        if (
            !chessLearnOpening
        ) {
            return;
        }

        try {
            chessLearnCompiled =
                await compileChessOpening(
                    chessLearnOpening
                );

            const Chess =
                await loadChessLibrary();

            chessLearnPracticeGame =
                new Chess();

            chessLearnPracticePly =
                0;

            chessLearnPracticeSelectedSquare =
                null;

            chessLearnPracticeLegalMoves =
                [];

            chessLearnPracticeLastMove =
                null;

            chessLearnPracticeLocked =
                false;

            chessLearnPracticeCompleting =
                false;

            chessLearnPracticeToken +=
                1;

            el.chessLearnPracticeResult.textContent =
                "";

            el.chessLearnPracticeResult.classList.add(
                "hidden"
            );

            el.chessLearnPracticeTitle.textContent =
                chessLearnOpening.name;

            el.chessLearnPracticeSide.textContent =
                `Du spielst ${chessOpeningSideLabel(chessLearnOpening.side)}`;

            el.chessLearnPracticePrompt.textContent =
                "Spiele die Variante aus dem Gedächtnis.";

            showScreen(
                screens.chessLearnPractice
            );

            renderChessLearnPractice();

            void continueChessOpeningPractice();

        } catch (
            error
        ) {
            console.error(
                error
            );

            window.alert(
                "Die Übung konnte nicht gestartet werden."
            );
        }
    }


    function renderChessLearnPractice() {
        if (
            !chessLearnPracticeGame
            ||
            !chessLearnOpening
        ) {
            return;
        }

        renderChessBoardInto(
            el.chessLearnPracticeBoard,
            chessLearnPracticeGame,
            {
                selectedSquare:
                    chessLearnPracticeSelectedSquare,
                legalMoves:
                    chessLearnPracticeLegalMoves,
                lastMove:
                    chessLearnPracticeLastMove,
                clickHandler:
                    handleChessLearnPracticeSquare,
                orientation:
                    chessLearnOpening.side
            }
        );

        const fullMoves =
            Math.ceil(
                chessLearnCompiled.moves.length / 2
            );

        const currentMove =
            Math.min(
                fullMoves,
                Math.floor(
                    chessLearnPracticePly / 2
                )
                +
                1
            );

        el.chessLearnPracticeProgress.textContent =
            `${currentMove} / ${fullMoves}`;

        if (
            chessLearnPracticePly
            <
            chessLearnCompiled.moves.length
            &&
            chessLearnCompiled.moves[
                chessLearnPracticePly
            ].color
            ===
            chessLearnOpening.side
        ) {
            el.chessLearnPracticePrompt.textContent =
                "Du bist dran.";
        } else {
            el.chessLearnPracticePrompt.textContent =
                "Antwort der Variante …";
        }
    }


    async function continueChessOpeningPractice() {
        const token =
            chessLearnPracticeToken;

        if (
            !chessLearnPracticeGame
            ||
            chessLearnPracticePly
            >=
            chessLearnCompiled.moves.length
        ) {
            await completeChessOpeningPractice();

            return;
        }

        const expected =
            chessLearnCompiled.moves[
                chessLearnPracticePly
            ];

        if (
            expected.color
            ===
            chessLearnOpening.side
        ) {
            chessLearnPracticeLocked =
                false;

            renderChessLearnPractice();

            return;
        }

        chessLearnPracticeLocked =
            true;

        renderChessLearnPractice();

        await new Promise(
            resolve =>
                window.setTimeout(
                    resolve,
                    420
                )
        );

        if (
            token
            !==
            chessLearnPracticeToken
            ||
            !chessLearnPracticeGame
        ) {
            return;
        }

        try {
            const made =
                chessLearnPracticeGame.move({
                    from:
                        expected.from,
                    to:
                        expected.to,
                    promotion:
                        expected.promotion
                });

            chessLearnPracticeLastMove = {
                from:
                    made.from,
                to:
                    made.to
            };

            chessLearnPracticePly +=
                1;

            chessLearnPracticeSelectedSquare =
                null;

            chessLearnPracticeLegalMoves =
                [];

            renderChessLearnPractice();

            if (
                chessLearnPracticePly
                >=
                chessLearnCompiled.moves.length
            ) {
                await completeChessOpeningPractice();

                return;
            }

            chessLearnPracticeLocked =
                false;

            renderChessLearnPractice();

        } catch (
            error
        ) {
            console.error(
                "Opening practice line error:",
                error
            );

            chessLearnPracticeLocked =
                false;
        }
    }


    function handleChessLearnPracticeSquare(
        square
    ) {
        if (
            !chessLearnPracticeGame
            ||
            chessLearnPracticeLocked
            ||
            chessLearnPracticePly
            >=
            chessLearnCompiled.moves.length
        ) {
            return;
        }

        const expected =
            chessLearnCompiled.moves[
                chessLearnPracticePly
            ];

        if (
            expected.color
            !==
            chessLearnOpening.side
            ||
            chessLearnPracticeGame.turn()
            !==
            chessLearnOpening.side
        ) {
            return;
        }

        const piece =
            chessLearnPracticeGame.get(
                square
            );

        if (
            !chessLearnPracticeSelectedSquare
        ) {
            if (
                piece
                &&
                piece.color
                ===
                chessLearnOpening.side
            ) {
                chessLearnPracticeSelectedSquare =
                    square;

                chessLearnPracticeLegalMoves =
                    movesFromSquare(
                        chessLearnPracticeGame,
                        square
                    );

                renderChessLearnPractice();
            }

            return;
        }

        if (
            piece
            &&
            piece.color
            ===
            chessLearnOpening.side
        ) {
            chessLearnPracticeSelectedSquare =
                square;

            chessLearnPracticeLegalMoves =
                movesFromSquare(
                    chessLearnPracticeGame,
                    square
                );

            renderChessLearnPractice();

            return;
        }

        const candidates =
            chessLearnPracticeLegalMoves.filter(
                move =>
                    move.to
                    ===
                    square
            );

        if (
            candidates.length === 0
        ) {
            chessLearnPracticeSelectedSquare =
                null;

            chessLearnPracticeLegalMoves =
                [];

            renderChessLearnPractice();

            return;
        }

        const candidate =
            candidates.find(
                move =>
                    uciMatchesOpeningMove(
                        move.from,
                        move.to,
                        move.promotion,
                        expected
                    )
            )
            ??
            candidates[0];

        if (
            !uciMatchesOpeningMove(
                candidate.from,
                candidate.to,
                candidate.promotion,
                expected
            )
        ) {
            void failChessOpeningPractice();

            return;
        }

        try {
            const made =
                chessLearnPracticeGame.move({
                    from:
                        candidate.from,
                    to:
                        candidate.to,
                    promotion:
                        candidate.promotion
                });

            chessLearnPracticeLastMove = {
                from:
                    made.from,
                to:
                    made.to
            };

            chessLearnPracticePly +=
                1;

            chessLearnPracticeSelectedSquare =
                null;

            chessLearnPracticeLegalMoves =
                [];

            renderChessLearnPractice();

            void continueChessOpeningPractice();

        } catch (
            error
        ) {
            chessLearnPracticeSelectedSquare =
                null;

            chessLearnPracticeLegalMoves =
                [];

            renderChessLearnPractice();
        }
    }


    async function failChessOpeningPractice() {
        if (
            chessLearnPracticeLocked
        ) {
            return;
        }

        chessLearnPracticeLocked =
            true;

        const expectedIndex =
            chessLearnPracticePly;

        chessLearnPracticeToken +=
            1;

        el.chessLearnPracticeResult.textContent =
            "Falsch";

        el.chessLearnPracticeResult.classList.remove(
            "hidden"
        );

        await new Promise(
            resolve =>
                window.setTimeout(
                    resolve,
                    680
                )
        );

        el.chessLearnPracticeResult.classList.add(
            "hidden"
        );

        chessLearnPracticeGame =
            null;

        chessLearnPracticeLocked =
            false;

        chessLearnPracticeCompleting =
            false;

        el.chessLearnPracticeResult.textContent =
            "";

        await openChessOpeningDetail(
            chessLearnOpening.id,
            expectedIndex,
            `Falsch · erwartet war ${chessLearnOpening.san[expectedIndex]}`
        );
    }


    async function completeChessOpeningPractice() {
        if (
            chessLearnPracticeCompleting
        ) {
            return;
        }

        chessLearnPracticeCompleting =
            true;

        chessLearnPracticeLocked =
            true;

        chessLearnPracticeToken +=
            1;

        const id =
            chessLearnOpening.id;

        chessOpeningProgress[
            id
        ] =
            Number(
                chessOpeningProgress[
                    id
                ]
                ??
                0
            )
            +
            1;

        saveChessOpeningProgress();

        el.chessLearnPracticeResult.textContent =
            "Richtig";

        el.chessLearnPracticeResult.classList.remove(
            "hidden"
        );

        await new Promise(
            resolve =>
                window.setTimeout(
                    resolve,
                    720
                )
        );

        el.chessLearnPracticeResult.classList.add(
            "hidden"
        );

        chessLearnPracticeGame =
            null;

        renderChessOpeningList();

        showScreen(
            screens.chessLearnList
        );

        chessLearnPracticeLocked =
            false;

        chessLearnPracticeCompleting =
            false;

        el.chessLearnPracticeResult.textContent =
            "";
    }



    function shuffleChessOpenings() {
        const rows =
            [
                ...CHESS_OPENING_LINES
            ];

        for (
            let index =
                rows.length - 1;
            index > 0;
            index -= 1
        ) {
            const other =
                Math.floor(
                    Math.random()
                    *
                    (
                        index + 1
                    )
                );

            [
                rows[index],
                rows[other]
            ] = [
                rows[other],
                rows[index]
            ];
        }

        return rows;
    }


    function openingFullMoveText(
        opening
    ) {
        const parts =
            [];

        for (
            let index = 0;
            index < opening.san.length;
            index += 2
        ) {
            const moveNumber =
                index / 2 + 1;

            const white =
                opening.san[
                    index
                ]
                ??
                "";

            const black =
                opening.san[
                    index + 1
                ]
                ??
                "";

            parts.push(
                `${moveNumber}. ${white}${black ? ` ${black}` : ""}`
            );
        }

        return parts.join(
            "   "
        );
    }


    function renderChessLearnCard() {
        const opening =
            chessLearnCardOrder[
                chessLearnCardIndex
            ];

        if (
            !opening
        ) {
            renderChessOpeningList();

            showScreen(
                screens.chessLearnList
            );

            return;
        }

        el.chessLearnCardsProgress.textContent =
            `${chessLearnCardIndex + 1} / ${chessLearnCardOrder.length}`;

        el.chessLearnCardMoves.textContent =
            openingFullMoveText(
                opening
            );

        el.chessLearnCardName.textContent =
            opening.name;

        el.chessLearnCardSide.textContent =
            `Repertoire · ${chessOpeningSideLabel(opening.side)}`;

        el.chessLearnCardAnswer.classList.toggle(
            "hidden",
            !chessLearnCardRevealed
        );

        el.chessLearnCardHint.textContent =
            chessLearnCardRevealed
                ? ""
                : "Tippen zum Aufdecken";

        el.chessLearnCardNext.classList.toggle(
            "hidden",
            !chessLearnCardRevealed
        );

        el.chessLearnCardNext.textContent =
            chessLearnCardIndex
            ===
            chessLearnCardOrder.length - 1
                ? "Fertig"
                : "Weiter";
    }


    function openChessLearnCards() {
        chessLearnCardOrder =
            shuffleChessOpenings();

        chessLearnCardIndex =
            0;

        chessLearnCardRevealed =
            false;

        renderChessLearnCard();

        showScreen(
            screens.chessLearnCards
        );
    }


    el.openChessLearnCards.addEventListener(
        "click",
        openChessLearnCards
    );


    el.backFromChessLearnCards.addEventListener(
        "click",
        () => {
            renderChessOpeningList();

            showScreen(
                screens.chessLearnList
            );
        }
    );


    el.chessLearnCard.addEventListener(
        "click",
        () => {
            if (
                chessLearnCardRevealed
            ) {
                return;
            }

            chessLearnCardRevealed =
                true;

            renderChessLearnCard();
        }
    );


    el.chessLearnCardNext.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            if (
                !chessLearnCardRevealed
            ) {
                return;
            }

            if (
                chessLearnCardIndex
                >=
                chessLearnCardOrder.length - 1
            ) {
                renderChessOpeningList();

                showScreen(
                    screens.chessLearnList
                );

                return;
            }

            chessLearnCardIndex +=
                1;

            chessLearnCardRevealed =
                false;

            renderChessLearnCard();
        }
    );


    el.openChessLearnButton.addEventListener(
        "click",
        () => {
            void openChessLearnList();
        }
    );


    el.backFromChessLearnList.addEventListener(
        "click",
        () => {
            showScreen(
                screens.chessSetup
            );
        }
    );


    el.backFromChessLearnDetail.addEventListener(
        "click",
        () => {
            chessLearnEvalToken +=
                1;

            chessLearnWrongExpectedIndex =
                null;

            renderChessOpeningList();

            showScreen(
                screens.chessLearnList
            );
        }
    );


    el.chessLearnPrev.addEventListener(
        "click",
        () => {
            if (
                chessLearnVariation
            ) {
                return;
            }

            chessLearnWrongExpectedIndex =
                null;

            loadChessLearnPosition(
                chessLearnIndex - 1
            );

            renderChessLearnDetail();

            void updateChessLearnEvaluation();
        }
    );


    el.chessLearnNext.addEventListener(
        "click",
        () => {
            if (
                chessLearnVariation
            ) {
                return;
            }

            chessLearnWrongExpectedIndex =
                null;

            loadChessLearnPosition(
                chessLearnIndex + 1
            );

            renderChessLearnDetail();

            void updateChessLearnEvaluation();
        }
    );


    el.chessLearnReturnLine.addEventListener(
        "click",
        () => {
            loadChessLearnPosition(
                chessLearnIndex
            );

            renderChessLearnDetail();

            void updateChessLearnEvaluation();
        }
    );


    el.startChessLearnPractice.addEventListener(
        "click",
        () => {
            chessLearnWrongExpectedIndex =
                null;

            void startChessOpeningPractice();
        }
    );


    el.backFromChessLearnPractice.addEventListener(
        "click",
        () => {
            chessLearnPracticeToken +=
                1;

            chessLearnPracticeGame =
                null;

            void openChessOpeningDetail(
                chessLearnOpening.id,
                0
            );
        }
    );


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


    el.textsMapRoomHotspot.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );

            turnBetweenStudyRooms(
                screens.textsHub,
                screens.mapRoom,
                "left"
            );
        }
    );


    el.openChessButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );

            turnBetweenStudyRooms(
                screens.textsHub,
                screens.chessRoom,
                "right"
            );
        }
    );


    el.chessRoomBackHotspot.addEventListener(
        "click",
        () => {
            turnBetweenStudyRooms(
                screens.chessRoom,
                screens.textsHub,
                "left"
            );
        }
    );


    el.chessRoomBoardHotspot.addEventListener(
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

                const pieceNames = {
                    q: "Dame",
                    r: "Turm",
                    b: "Läufer",
                    n: "Springer"
                };

                button.setAttribute(
                    "aria-label",
                    pieceNames[
                        type
                    ]
                );

                const image =
                    document.createElement(
                        "img"
                    );

                image.className =
                    "chess-promotion-piece-image";

                image.src =
                    CHESS_PIECE_IMAGES[
                        color
                    ][
                        type
                    ];

                image.alt =
                    "";

                image.draggable =
                    false;

                button.appendChild(
                    image
                );

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
    // V61 — RECHNER
    // ==================================================

    const WOLFRAM_APP_ID_KEY =
        "personalPlannerSuite_wolfram_appid_v1";

    const CALCULATOR_CONSTANTS = [
        { token: "c",      label: "c",    name: "Lichtgeschwindigkeit",       value: 299792458,          display: "299 792 458 m/s" },
        { token: "h",      label: "h",    name: "Planck-Konstante",           value: 6.62607015e-34,     display: "6.62607015×10⁻³⁴ J s" },
        { token: "hbar",   label: "ħ",    name: "Reduzierte Planck-Konst.",   value: 1.0545718176461565e-34, display: "1.0545718176×10⁻³⁴ J s" },
        { token: "G",      label: "G",    name: "Gravitationskonstante",      value: 6.67430e-11,        display: "6.67430×10⁻¹¹ m³ kg⁻¹ s⁻²" },
        { token: "kB",     label: "kB",   name: "Boltzmann-Konstante",        value: 1.380649e-23,       display: "1.380649×10⁻²³ J/K" },
        { token: "qe",     label: "e",    name: "Elementarladung",            value: 1.602176634e-19,    display: "1.602176634×10⁻¹⁹ C" },
        { token: "eps0",   label: "ε₀",   name: "Elektrische Feldkonstante",  value: 8.8541878188e-12,   display: "8.8541878188×10⁻¹² F/m" },
        { token: "mu0",    label: "μ₀",   name: "Magnetische Feldkonstante",  value: 1.25663706127e-6,   display: "1.25663706127×10⁻⁶ N/A²" },
        { token: "me",     label: "mₑ",   name: "Elektronenmasse",            value: 9.1093837139e-31,   display: "9.1093837139×10⁻³¹ kg" },
        { token: "mp",     label: "mₚ",   name: "Protonenmasse",              value: 1.67262192595e-27,  display: "1.67262192595×10⁻²⁷ kg" },
        { token: "mn",     label: "mₙ",   name: "Neutronenmasse",             value: 1.67492750056e-27,  display: "1.67492750056×10⁻²⁷ kg" },
        { token: "NA",     label: "Nₐ",   name: "Avogadro-Konstante",         value: 6.02214076e23,      display: "6.02214076×10²³ mol⁻¹" },
        { token: "alpha",  label: "α",    name: "Feinstrukturkonstante",      value: 7.2973525643e-3,    display: "7.2973525643×10⁻³" },
        { token: "R",      label: "R",    name: "Molare Gaskonstante",        value: 8.31446261815324,   display: "8.314462618 J mol⁻¹ K⁻¹" },
        { token: "sigmaSB",label: "σ",    name: "Stefan-Boltzmann-Konst.",    value: 5.670374419e-8,     display: "5.670374419×10⁻⁸ W m⁻² K⁻⁴" },
        { token: "a0",     label: "a₀",   name: "Bohr-Radius",                value: 5.29177210544e-11,  display: "5.29177210544×10⁻¹¹ m" },
        { token: "muB",    label: "μB",   name: "Bohrsches Magneton",         value: 9.2740100657e-24,   display: "9.2740100657×10⁻²⁴ J/T" },
        { token: "muN",    label: "μN",   name: "Kernmagneton",               value: 5.0507837393e-27,   display: "5.0507837393×10⁻²⁷ J/T" },
        { token: "Rinf",   label: "R∞",   name: "Rydberg-Konstante",          value: 10973731.568157,    display: "10 973 731.568157 m⁻¹" },
        { token: "eV",     label: "eV",   name: "Elektronenvolt in Joule",    value: 1.602176634e-19,    display: "1.602176634×10⁻¹⁹ J" },
        { token: "F",      label: "F",    name: "Faraday-Konstante",          value: 96485.33212331002,  display: "96 485.332123 C/mol" }
    ];

    const calculatorInput =
        $("calculatorInput");

    const calculatorLocalResult =
        $("calculatorLocalResult");

    const calculatorResultValue =
        $("calculatorResultValue");

    const calculatorResultExact =
        $("calculatorResultExact");

    const calculatorStatus =
        $("calculatorStatus");

    const calculatorConstants =
        $("calculatorConstants");

    const calculatorWolframResult =
        $("calculatorWolframResult");

    const calculatorWolframImage =
        $("calculatorWolframImage");

    const calculatorWolframLoading =
        $("calculatorWolframLoading");

    const calculatorWolframError =
        $("calculatorWolframError");

    const calculatorWolframSettings =
        $("calculatorWolframSettings");

    const calculatorWolframAppIdInput =
        $("calculatorWolframAppIdInput");


    function openCalculator() {
        calculatorStatus.textContent =
            "";

        showScreen(
            screens.calculator
        );

        requestAnimationFrame(
            () => calculatorInput.focus()
        );
    }


    function insertCalculatorText(
        text
    ) {
        const start =
            calculatorInput.selectionStart
            ??
            calculatorInput.value.length;

        const end =
            calculatorInput.selectionEnd
            ??
            start;

        calculatorInput.setRangeText(
            text,
            start,
            end,
            "end"
        );

        calculatorInput.focus();
    }


    function replaceStandalone(
        expression,
        token,
        replacement
    ) {
        const escaped =
            token.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

        const regex =
            new RegExp(
                `(^|[^A-Za-z0-9_])${escaped}(?=$|[^A-Za-z0-9_])`,
                "g"
            );

        return expression.replace(
            regex,
            (
                match,
                prefix
            ) =>
                `${prefix}(${replacement})`
        );
    }


    function calculatorPreparedExpression(
        raw
    ) {
        let expression =
            String(
                raw
                ??
                ""
            )
            .replace(
                /×/g,
                "*"
            )
            .replace(
                /÷/g,
                "/"
            )
            .replace(
                /−/g,
                "-"
            )
            .replace(
                /π/g,
                "pi"
            )
            .replace(
                /√/g,
                "sqrt"
            )
            .replace(
                /ħ/g,
                "hbar"
            )
            .replace(
                /ε₀|ε0/g,
                "eps0"
            )
            .replace(
                /μ₀|μ0/g,
                "mu0"
            )
            .replace(
                /mₑ/g,
                "me"
            )
            .replace(
                /mₚ/g,
                "mp"
            )
            .replace(
                /mₙ/g,
                "mn"
            )
            .replace(
                /Nₐ/g,
                "NA"
            )
            .replace(
                /R∞/g,
                "Rinf"
            );

        const aliases = [
            ["epsilon0", "eps0"],
            ["epsilon_0", "eps0"],
            ["mu_0", "mu0"],
            ["k_B", "kB"],
            ["kb", "kB"],
            ["q_e", "qe"],
            ["e_charge", "qe"],
            ["elementary_charge", "qe"],
            ["fine_structure", "alpha"],
            ["sigma_SB", "sigmaSB"],
            ["mu_B", "muB"],
            ["mu_N", "muN"],
            ["N_A", "NA"],
            ["R_inf", "Rinf"]
        ];

        aliases.forEach(
            (
                [
                    alias,
                    canonical
                ]
            ) => {
                expression =
                    replaceStandalone(
                        expression,
                        alias,
                        canonical
                    );
            }
        );

        /*
           Standalone "e" means elementary charge in this physics-oriented
           calculator. Scientific notation such as 1e-3 is deliberately left
           untouched because the preceding character is numeric.
        */
        expression =
            expression.replace(
                /(^|[^A-Za-z0-9_])e(?=$|[^A-Za-z0-9_])/g,
                "$1(qe)"
            );

        const sorted =
            [
                ...CALCULATOR_CONSTANTS
            ]
            .sort(
                (
                    a,
                    b
                ) =>
                    b.token.length
                    -
                    a.token.length
            );

        sorted.forEach(
            constant => {
                expression =
                    replaceStandalone(
                        expression,
                        constant.token,
                        String(
                            constant.value
                        )
                    );
            }
        );

        return expression;
    }


    function calculatorExactConstant(
        raw
    ) {
        const normalized =
            String(
                raw
                ??
                ""
            )
            .trim()
            .replace(
                /ħ/g,
                "hbar"
            )
            .replace(
                /ε₀|ε0/g,
                "eps0"
            )
            .replace(
                /μ₀|μ0/g,
                "mu0"
            )
            .replace(
                /mₑ/g,
                "me"
            )
            .replace(
                /mₚ/g,
                "mp"
            )
            .replace(
                /mₙ/g,
                "mn"
            )
            .replace(
                /Nₐ/g,
                "NA"
            )
            .replace(
                /R∞/g,
                "Rinf"
            );

        if (
            normalized
            ===
            "e"
        ) {
            return CALCULATOR_CONSTANTS.find(
                item =>
                    item.token
                    ===
                    "qe"
            );
        }

        return CALCULATOR_CONSTANTS.find(
            item =>
                item.token
                ===
                normalized
        )
        ??
        null;
    }


    function formatCalculatorNumber(
        value
    ) {
        const number =
            Number(
                value
            );

        if (
            !Number.isFinite(
                number
            )
        ) {
            return String(
                value
            );
        }

        if (
            number === 0
        ) {
            return "0";
        }

        const magnitude =
            Math.abs(
                number
            );

        if (
            magnitude >= 1e7
            ||
            magnitude < 1e-6
        ) {
            return number.toExponential(
                10
            )
            .replace(
                /e\+/,
                "e"
            );
        }

        return Number(
            number.toPrecision(
                12
            )
        )
        .toString();
    }


    function evaluateCalculatorLocal() {
        const raw =
            calculatorInput.value.trim();

        if (
            !raw
        ) {
            return;
        }

        calculatorStatus.textContent =
            "";

        calculatorWolframResult.classList.add(
            "hidden"
        );

        const directConstant =
            calculatorExactConstant(
                raw
            );

        if (
            directConstant
        ) {
            calculatorResultValue.textContent =
                directConstant.display;

            calculatorResultExact.textContent =
                directConstant.name;

            calculatorLocalResult.classList.remove(
                "hidden"
            );

            return;
        }

        if (
            typeof nerdamer
            !==
            "function"
        ) {
            calculatorStatus.textContent =
                "Der lokale Rechenkern ist noch nicht geladen.";

            return;
        }

        try {
            const expression =
                calculatorPreparedExpression(
                    raw
                );

            let symbolic;

            if (
                /^solve\s+/i.test(
                    expression
                )
            ) {
                const equation =
                    expression.replace(
                        /^solve\s+/i,
                        ""
                    );

                symbolic =
                    nerdamer(
                        `solve(${equation})`
                    );
            } else {
                symbolic =
                    nerdamer(
                        expression
                    );
            }

            const numeric =
                symbolic.evaluate();

            const numericText =
                numeric.text();

            const symbolicText =
                symbolic.text();

            calculatorResultValue.textContent =
                formatCalculatorNumber(
                    numericText
                );

            calculatorResultExact.textContent =
                symbolicText !== numericText
                    ? symbolicText
                    : "";

            calculatorLocalResult.classList.remove(
                "hidden"
            );
        } catch (
            error
        ) {
            calculatorLocalResult.classList.add(
                "hidden"
            );

            calculatorStatus.textContent =
                "Lokal nicht eindeutig berechenbar – versuche Wolfram.";
        }
    }


    function renderCalculatorConstants() {
        calculatorConstants.innerHTML =
            "";

        CALCULATOR_CONSTANTS.forEach(
            constant => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "calculator-constant-chip";

                const symbol =
                    document.createElement(
                        "span"
                    );

                symbol.className =
                    "calculator-constant-symbol";

                symbol.textContent =
                    constant.label;

                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "calculator-constant-name";

                name.textContent =
                    constant.name;

                button.append(
                    symbol,
                    name
                );

                button.title =
                    constant.display;

                button.addEventListener(
                    "click",
                    () => insertCalculatorText(
                        constant.token
                    )
                );

                calculatorConstants.appendChild(
                    button
                );
            }
        );
    }


    function openWolframSettings() {
        calculatorWolframAppIdInput.value =
            localStorage.getItem(
                WOLFRAM_APP_ID_KEY
            )
            ??
            "";

        calculatorWolframSettings.classList.remove(
            "hidden"
        );

        requestAnimationFrame(
            () => calculatorWolframAppIdInput.focus()
        );
    }


    function closeWolframSettings() {
        calculatorWolframSettings.classList.add(
            "hidden"
        );
    }


    function runWolframCalculator() {
        const query =
            calculatorInput.value.trim();

        if (
            !query
        ) {
            return;
        }

        const appId =
            localStorage.getItem(
                WOLFRAM_APP_ID_KEY
            );

        if (
            !appId
        ) {
            calculatorStatus.textContent =
                "Wolfram AppID einmalig lokal hinterlegen.";

            openWolframSettings();
            return;
        }

        calculatorStatus.textContent =
            "";

        calculatorWolframResult.classList.remove(
            "hidden"
        );

        calculatorWolframImage.classList.add(
            "hidden"
        );

        calculatorWolframLoading.classList.remove(
            "hidden"
        );

        calculatorWolframError.textContent =
            "";

        const dark =
            document.documentElement.dataset.theme
            ===
            "dark";

        const params =
            new URLSearchParams({
                appid:
                    appId,
                i:
                    query,
                units:
                    "metric",
                width:
                    "700",
                fontsize:
                    "16",
                background:
                    dark
                        ? "11120F"
                        : "F6F6F2",
                foreground:
                    dark
                        ? "white"
                        : "black"
            });

        calculatorWolframImage.onload =
            () => {
                calculatorWolframLoading.classList.add(
                    "hidden"
                );

                calculatorWolframImage.classList.remove(
                    "hidden"
                );
            };

        calculatorWolframImage.onerror =
            () => {
                calculatorWolframLoading.classList.add(
                    "hidden"
                );

                calculatorWolframImage.classList.add(
                    "hidden"
                );

                calculatorWolframError.textContent =
                    "Wolfram|Alpha konnte diese Anfrage nicht laden. Prüfe AppID oder Anfrage.";
            };

        calculatorWolframImage.src =
            `https://api.wolframalpha.com/v1/simple?${params.toString()}`;
    }


    renderCalculatorConstants();


    $("calculatorForm").addEventListener(
        "submit",
        event => {
            event.preventDefault();
            evaluateCalculatorLocal();
        }
    );


    document.querySelectorAll(
        "[data-calculator-insert]"
    )
    .forEach(
        button => {
            button.addEventListener(
                "click",
                () => insertCalculatorText(
                    button.dataset.calculatorInsert
                )
            );
        }
    );


    $("calculatorWolframButton").addEventListener(
        "click",
        runWolframCalculator
    );


    $("calculatorWolframSettingsButton").addEventListener(
        "click",
        openWolframSettings
    );


    $("calculatorWolframCancel").addEventListener(
        "click",
        closeWolframSettings
    );


    $("calculatorWolframSave").addEventListener(
        "click",
        () => {
            const value =
                calculatorWolframAppIdInput.value.trim();

            if (
                value
            ) {
                localStorage.setItem(
                    WOLFRAM_APP_ID_KEY,
                    value
                );
            }

            closeWolframSettings();

            calculatorStatus.textContent =
                value
                    ? "Wolfram|Alpha ist verbunden."
                    : "";
        }
    );


    $("calculatorWolframForget").addEventListener(
        "click",
        () => {
            localStorage.removeItem(
                WOLFRAM_APP_ID_KEY
            );

            calculatorWolframAppIdInput.value =
                "";

            closeWolframSettings();

            calculatorStatus.textContent =
                "Wolfram AppID entfernt.";
        }
    );


    $("backFromCalculator").addEventListener(
        "click",
        () => {
            if (
                typeof returnToFocusIfEnabled
                ===
                "function"
                &&
                returnToFocusIfEnabled()
            ) {
                return;
            }

            showScreen(
                screens.textsHub
            );
        }
    );


    // ==================================================
    // V60 — KARTEIKARTEN
    // ==================================================

    const FLASHCARDS_KEY = "personalPlannerSuite_flashcards_v1";
    let flashcardsState = (() => {
        try {
            const value = JSON.parse(localStorage.getItem(FLASHCARDS_KEY) || "");
            if (value && Array.isArray(value.decks)) return value;
        } catch {}
        return { version: 1, decks: [] };
    })();

    let currentFlashcardsDeckId = null;
    let flashcardsEditingDeckId = null;
    let flashcardsPracticeCardId = null;
    let flashcardsPracticeRevealed = false;

    const fc = {
        list: $("flashcardsDeckList"),
        empty: $("flashcardsDecksEmpty"),
        deckTitle: $("flashcardsDeckTitle"),
        deckMeta: $("flashcardsDeckMeta"),
        practiceTitle: $("flashcardsPracticeTitle"),
        card: $("flashcardsPracticeCard"),
        front: $("flashcardsPracticeFront"),
        back: $("flashcardsPracticeBack"),
        hint: $("flashcardsPracticeRevealHint"),
        ratingArea: $("flashcardsPracticeRatingArea"),
        lastRating: $("flashcardsLastRating"),
        progressAverage: $("flashcardsProgressAverage"),
        progressRuns: $("flashcardsProgressRuns"),
        canvas: $("flashcardsProgressCanvas"),
        editorTitle: $("flashcardsEditorTitle"),
        name: $("flashcardsDeckNameInput"),
        cards: $("flashcardsEditorCards"),
        error: $("flashcardsEditorError"),
        deleteDeck: $("deleteFlashcardsDeckButton"),
        importInput: $("flashcardsImportInput"),
        importStatus: $("flashcardsImportStatus")
    };

    function fcId(prefix) {
        return crypto?.randomUUID
            ? `${prefix}-${crypto.randomUUID()}`
            : `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }

    function saveFlashcards() {
        localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(flashcardsState));
    }

    function flashcardsDeck(id) {
        return flashcardsState.decks.find(deck => deck.id === id) || null;
    }

    function flashcardsAverage(deck) {
        if (!deck?.cards?.length) return 5;
        return deck.cards.reduce((sum, card) => sum + Number(card.rating ?? 5), 0) / deck.cards.length;
    }

    function flashcardWeight(rating) {
        const r = Math.max(1, Math.min(5, Number(rating ?? 5)));
        return 3 - 0.5 * (r - 1); // 1→3, 2→2.5, 3→2, 4→1.5, 5→1
    }

    function chooseFlashcard(deck) {
        if (!deck?.cards?.length) return null;
        const rows = deck.cards.map(card => ({ card, weight: flashcardWeight(card.rating) }));
        const total = rows.reduce((sum, row) => sum + row.weight, 0);
        let draw = Math.random() * total;
        for (const row of rows) {
            draw -= row.weight;
            if (draw <= 0) return row.card;
        }
        return rows.at(-1).card;
    }

    function openFlashcardsHome() {
        showScreen(screens.flashcardsHome);
    }

    function renderFlashcardsDecks() {
        fc.list.innerHTML = "";
        const decks = [...flashcardsState.decks].sort((a,b) => a.name.localeCompare(b.name, "de"));
        fc.empty.classList.toggle("hidden", decks.length > 0);

        decks.forEach(deck => {
            const row = document.createElement("button");
            row.type = "button";
            row.className = "flashcards-deck-row";

            const copy = document.createElement("span");
            copy.className = "flashcards-deck-row-copy";

            const name = document.createElement("span");
            name.className = "flashcards-deck-row-name";
            name.textContent = deck.name;

            const meta = document.createElement("span");
            meta.className = "flashcards-deck-row-meta";
            meta.textContent = `${deck.cards.length} Karte${deck.cards.length === 1 ? "" : "n"} · Ø ${flashcardsAverage(deck).toFixed(2)}`;

            const arrow = document.createElement("span");
            arrow.className = "flashcards-row-arrow";
            arrow.textContent = "›";

            copy.append(name, meta);
            row.append(copy, arrow);
            row.addEventListener("click", () => openFlashcardsDeck(deck.id));
            fc.list.appendChild(row);
        });
    }

    function openFlashcardsDecks() {
        renderFlashcardsDecks();
        showScreen(screens.flashcardsDecks);
    }

    function openFlashcardsDeck(id) {
        const deck = flashcardsDeck(id);
        if (!deck) return openFlashcardsDecks();
        currentFlashcardsDeckId = deck.id;
        fc.deckTitle.textContent = deck.name;
        fc.deckMeta.textContent = `${deck.cards.length} Karte${deck.cards.length === 1 ? "" : "n"} · Durchschnitt ${flashcardsAverage(deck).toFixed(2)}`;
        showScreen(screens.flashcardsDeck);
    }

    function renumberFlashcardRows() {
        fc.cards.querySelectorAll(".flashcards-editor-card").forEach((row, i) => {
            row.querySelector(".flashcards-editor-card-number").textContent = `Karte ${i + 1}`;
        });
    }

    function addFlashcardEditorRow(card = null) {
        const row = document.createElement("div");
        row.className = "flashcards-editor-card";
        row.dataset.cardId = card?.id || fcId("card");
        row.innerHTML = `
            <div class="flashcards-editor-card-heading">
                <span class="flashcards-editor-card-number"></span>
                <button class="flashcards-editor-remove" type="button">Entfernen</button>
            </div>
            <label>Vorderseite</label>
            <textarea class="flashcards-editor-front" rows="3"></textarea>
            <label>Rückseite</label>
            <textarea class="flashcards-editor-back" rows="4"></textarea>
        `;
        row.querySelector(".flashcards-editor-front").value = card?.front || "";
        row.querySelector(".flashcards-editor-back").value = card?.back || "";
        row.querySelector(".flashcards-editor-remove").addEventListener("click", () => {
            row.remove();
            renumberFlashcardRows();
        });
        fc.cards.appendChild(row);
        renumberFlashcardRows();
        return row;
    }

    function openFlashcardsEditor(id = null) {
        flashcardsEditingDeckId = id;
        const deck = id ? flashcardsDeck(id) : null;
        fc.editorTitle.textContent = deck ? "Bearbeiten" : "Neues Deck";
        fc.name.value = deck?.name || "";
        fc.cards.innerHTML = "";
        (deck?.cards?.length ? deck.cards : [null]).forEach(addFlashcardEditorRow);
        fc.error.textContent = "";
        fc.deleteDeck.classList.toggle("hidden", !deck);
        showScreen(screens.flashcardsEditor);
        if (!deck) setTimeout(() => fc.name.focus(), 60);
    }

    function collectFlashcardEditorCards() {
        const oldDeck = flashcardsEditingDeckId ? flashcardsDeck(flashcardsEditingDeckId) : null;
        const old = new Map((oldDeck?.cards || []).map(card => [card.id, card]));
        return [...fc.cards.querySelectorAll(".flashcards-editor-card")].map(row => {
            const id = row.dataset.cardId || fcId("card");
            return {
                id,
                front: row.querySelector(".flashcards-editor-front").value.trim(),
                back: row.querySelector(".flashcards-editor-back").value.trim(),
                rating: Number(old.get(id)?.rating ?? 5)
            };
        });
    }

    function saveFlashcardsEditor() {
        const name = fc.name.value.trim();
        const cards = collectFlashcardEditorCards();

        if (!name) return void (fc.error.textContent = "Bitte gib dem Deck einen Namen.");
        if (!cards.length) return void (fc.error.textContent = "Füge mindestens eine Karte hinzu.");
        if (cards.some(card => !card.front || !card.back)) {
            return void (fc.error.textContent = "Bitte fülle bei jeder Karte Vorder- und Rückseite aus.");
        }

        const now = new Date().toISOString();
        if (flashcardsEditingDeckId) {
            const deck = flashcardsDeck(flashcardsEditingDeckId);
            if (!deck) return;
            deck.name = name;
            deck.cards = cards;
            deck.updatedAt = now;
            currentFlashcardsDeckId = deck.id;
        } else {
            const deck = {
                id: fcId("deck"),
                name,
                cards,
                history: [{ run: 0, average: 5, at: now }],
                createdAt: now,
                updatedAt: now
            };
            flashcardsState.decks.push(deck);
            currentFlashcardsDeckId = deck.id;
            flashcardsEditingDeckId = deck.id;
        }
        saveFlashcards();
        openFlashcardsDeck(currentFlashcardsDeckId);
    }

    function startFlashcardsPractice() {
        const deck = flashcardsDeck(currentFlashcardsDeckId);
        if (!deck?.cards?.length) return;
        fc.practiceTitle.textContent = deck.name;
        flashcardsPracticeCardId = chooseFlashcard(deck)?.id || null;
        flashcardsPracticeRevealed = false;
        renderFlashcardsPractice();
        showScreen(screens.flashcardsPractice);
    }

    function renderFlashcardsPractice() {
        const deck = flashcardsDeck(currentFlashcardsDeckId);
        const card = deck?.cards.find(item => item.id === flashcardsPracticeCardId);
        if (!card) return;
        fc.front.textContent = card.front;
        fc.back.textContent = card.back;
        fc.back.classList.toggle("hidden", !flashcardsPracticeRevealed);
        fc.hint.classList.toggle("hidden", flashcardsPracticeRevealed);
        fc.ratingArea.classList.toggle("hidden", !flashcardsPracticeRevealed);
        fc.lastRating.textContent = `Zuletzt: ${Number(card.rating ?? 5)}`;
    }

    function rateFlashcard(rating) {
        const deck = flashcardsDeck(currentFlashcardsDeckId);
        const card = deck?.cards.find(item => item.id === flashcardsPracticeCardId);
        if (!deck || !card) return;

        card.rating = Math.max(1, Math.min(5, Number(rating)));
        if (!Array.isArray(deck.history) || !deck.history.length) {
            deck.history = [{ run: 0, average: 5, at: deck.createdAt || new Date().toISOString() }];
        }
        const run = Number(deck.history.at(-1)?.run || 0) + 1;
        deck.history.push({ run, average: flashcardsAverage(deck), at: new Date().toISOString() });
        deck.updatedAt = new Date().toISOString();
        saveFlashcards();

        flashcardsPracticeCardId = chooseFlashcard(deck)?.id || null; // independent draw; repeats are allowed
        flashcardsPracticeRevealed = false;
        renderFlashcardsPractice();
    }

    function openFlashcardsProgress() {
        const deck = flashcardsDeck(currentFlashcardsDeckId);
        if (!deck) return;
        const history = Array.isArray(deck.history) ? deck.history : [];
        fc.progressAverage.textContent = flashcardsAverage(deck).toFixed(2);
        fc.progressRuns.textContent = String(history.at(-1)?.run || 0);
        showScreen(screens.flashcardsProgress);
        requestAnimationFrame(drawFlashcardsProgress);
    }

    function drawFlashcardsProgress() {
        const deck = flashcardsDeck(currentFlashcardsDeckId);
        if (!deck || !fc.canvas) return;
        const points = deck.history?.length ? deck.history : [{run:0, average:flashcardsAverage(deck)}];
        const rect = fc.canvas.getBoundingClientRect();
        if (rect.width < 20 || rect.height < 20) return;

        const dpr = Math.min(2, window.devicePixelRatio || 1);
        fc.canvas.width = Math.round(rect.width * dpr);
        fc.canvas.height = Math.round(rect.height * dpr);
        const ctx = fc.canvas.getContext("2d");
        ctx.setTransform(dpr,0,0,dpr,0,0);
        ctx.clearRect(0,0,rect.width,rect.height);

        const root = getComputedStyle(document.documentElement);
        const text = root.getPropertyValue("--text").trim() || "#111";
        const muted = root.getPropertyValue("--muted").trim() || "#777";
        const line = root.getPropertyValue("--line").trim() || "#ddd";
        const pad={l:38,r:12,t:16,b:28}, w=rect.width-pad.l-pad.r, h=rect.height-pad.t-pad.b;
        const maxRun=Math.max(1,Number(points.at(-1)?.run||0));
        const x=run=>pad.l+w*Number(run||0)/maxRun;
        const y=avg=>pad.t+h*(1-(Math.max(1,Math.min(5,Number(avg)))-1)/4);

        ctx.font="11px -apple-system,BlinkMacSystemFont,sans-serif";
        ctx.textAlign="right"; ctx.textBaseline="middle";
        for (let v=1; v<=5; v++) {
            const yy=y(v);
            ctx.strokeStyle=line; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad.l,yy); ctx.lineTo(pad.l+w,yy); ctx.stroke();
            ctx.fillStyle=muted; ctx.fillText(String(v),pad.l-9,yy);
        }
        ctx.strokeStyle=text; ctx.lineWidth=1.7; ctx.lineJoin="round"; ctx.lineCap="round"; ctx.beginPath();
        points.forEach((point,i)=>{ const xx=x(point.run??i), yy=y(point.average); i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy); });
        ctx.stroke();
        const last=points.at(-1); ctx.fillStyle=text; ctx.beginPath(); ctx.arc(x(last.run),y(last.average),3,0,Math.PI*2); ctx.fill();
        ctx.fillStyle=muted; ctx.textBaseline="top"; ctx.textAlign="left"; ctx.fillText("0",pad.l,pad.t+h+8);
        ctx.textAlign="right"; ctx.fillText(String(maxRun),pad.l+w,pad.t+h+8);
    }

    function importedFlashcardsDeck(raw) {
        if (!raw || typeof raw !== "object") return null;
        const name = String(raw.name || "").trim();
        const cards = (Array.isArray(raw.cards) ? raw.cards : []).map(card => {
            const front = String(card?.front ?? card?.question ?? "").trim();
            const back = String(card?.back ?? card?.answer ?? "").trim();
            return front && back ? { id: fcId("card"), front, back, rating: 5 } : null;
        }).filter(Boolean);
        if (!name || !cards.length) return null;
        const now = new Date().toISOString();
        return { id:fcId("deck"), name, cards, history:[{run:0,average:5,at:now}], createdAt:now, updatedAt:now };
    }

    async function importFlashcards(file) {
        if (!file) return;
        fc.importStatus.textContent = "Importiere …";
        try {
            const parsed = JSON.parse(await file.text());
            const rawDecks = Array.isArray(parsed?.decks) ? parsed.decks : parsed?.deck ? [parsed.deck] : parsed?.cards ? [parsed] : [];
            const decks = rawDecks.map(importedFlashcardsDeck).filter(Boolean);
            if (!decks.length) throw new Error("Die Datei enthält kein gültiges Deck.");
            flashcardsState.decks.push(...decks);
            saveFlashcards();
            fc.importStatus.textContent = decks.length === 1 ? `„${decks[0].name}“ wurde importiert.` : `${decks.length} Decks wurden importiert.`;
        } catch (error) {
            fc.importStatus.textContent = error?.message || "Die Datei konnte nicht importiert werden.";
        }
    }

    $("backFromFlashcardsHome").addEventListener("click", () => showScreen(screens.textsHub));
    $("openFlashcardsDecks").addEventListener("click", openFlashcardsDecks);
    $("openFlashcardsImport").addEventListener("click", () => { fc.importStatus.textContent=""; showScreen(screens.flashcardsImport); });
    $("backFromFlashcardsDecks").addEventListener("click", openFlashcardsHome);
    $("newFlashcardsDeckButton").addEventListener("click", () => openFlashcardsEditor());
    $("backFromFlashcardsDeck").addEventListener("click", openFlashcardsDecks);
    $("practiceFlashcardsDeck").addEventListener("click", startFlashcardsPractice);
    $("progressFlashcardsDeck").addEventListener("click", openFlashcardsProgress);
    $("editFlashcardsDeck").addEventListener("click", () => openFlashcardsEditor(currentFlashcardsDeckId));
    $("backFromFlashcardsPractice").addEventListener("click", () => openFlashcardsDeck(currentFlashcardsDeckId));
    fc.card.addEventListener("click", () => { if (!flashcardsPracticeRevealed) { flashcardsPracticeRevealed=true; renderFlashcardsPractice(); } });
    document.querySelectorAll("[data-flashcard-rating]").forEach(button => button.addEventListener("click", () => rateFlashcard(button.dataset.flashcardRating)));
    $("backFromFlashcardsProgress").addEventListener("click", () => openFlashcardsDeck(currentFlashcardsDeckId));
    $("backFromFlashcardsEditor").addEventListener("click", () => flashcardsEditingDeckId ? openFlashcardsDeck(flashcardsEditingDeckId) : openFlashcardsDecks());
    $("saveFlashcardsDeckButton").addEventListener("click", saveFlashcardsEditor);
    $("addFlashcardsCardButton").addEventListener("click", () => {
        const row=addFlashcardEditorRow();
        row.querySelector(".flashcards-editor-front")?.focus();
        row.scrollIntoView({behavior:"smooth",block:"center"});
    });
    fc.deleteDeck.addEventListener("click", () => {
        const deck=flashcardsDeck(flashcardsEditingDeckId);
        if (!deck || !confirm(`„${deck.name}“ wirklich löschen?`)) return;
        flashcardsState.decks=flashcardsState.decks.filter(item=>item.id!==deck.id);
        saveFlashcards(); currentFlashcardsDeckId=null; flashcardsEditingDeckId=null; openFlashcardsDecks();
    });
    $("backFromFlashcardsImport").addEventListener("click", openFlashcardsHome);
    $("chooseFlashcardsImportButton").addEventListener("click", () => fc.importInput.click());
    fc.importInput.addEventListener("change", event => { void importFlashcards(event.target.files?.[0]); event.target.value=""; });
    window.addEventListener("resize", () => {
        if (screens.flashcardsProgress.classList.contains("active")) requestAnimationFrame(drawFlashcardsProgress);
    });


    // ==================================================
    // V59 — FOKUSMODUS
    // ==================================================

    var FOCUS_MODE_KEY =
        "personalPlannerSuite_focus_mode_v1";

    var focusModeEnabled =
        localStorage.getItem(
            FOCUS_MODE_KEY
        )
        ===
        "1";

    let focusSuggestionIndex =
        0;

    const focusSearchInput =
        $("focusSearchInput");

    const focusSuggestions =
        $("focusSuggestions");

    const focusMenuPanel =
        $("focusMenuPanel");

    const FOCUS_APPLICATIONS = [
        {
            id: "planner",
            name: "Planer",
            hint: "Planen",
            aliases: [
                "planer", "plan", "planung", "planen", "aufgabe", "aufgaben",
                "todo", "to do", "kalender", "zeit", "session", "lernen", "arbeit"
            ]
        },
        {
            id: "books",
            name: "Bücher",
            hint: "Lesen",
            aliases: [
                "bücher", "buch", "books", "lesen", "lektüre", "literatur", "reading"
            ]
        },
        {
            id: "dreams",
            name: "Träume",
            hint: "Archiv",
            aliases: [
                "träume", "traum", "dream", "dreams", "schlaf", "nachttraum"
            ]
        },
        {
            id: "days",
            name: "Tage",
            hint: "Journal",
            aliases: [
                "tage", "tag", "tagebuch", "journal", "diary", "chronik", "heute"
            ]
        },
        {
            id: "thoughts",
            name: "Philosophie",
            hint: "Gedanken",
            aliases: [
                "philosophie", "philo", "gedanken", "denken", "ideen", "idee",
                "reflexion", "reflektieren"
            ]
        },
        {
            id: "physics",
            name: "Physik",
            hint: "Formeln",
            aliases: [
                "physik", "physics", "formel", "formeln", "gleichung", "gleichungen",
                "rechnen", "qft", "quanten", "mechanik", "relativität", "konstanten"
            ]
        },
        {
            id: "notes",
            name: "Notizen",
            hint: "Notieren",
            aliases: [
                "notizen", "notiz", "notes", "memo", "memos", "aufschreiben", "text"
            ]
        },
        {
            id: "films",
            name: "Filme",
            hint: "YouTube",
            aliases: [
                "filme", "film", "kino", "movie", "movies", "youtube", "video",
                "videos", "kanal", "kanäle", "serien"
            ]
        },
        {
            id: "wikipedia",
            name: "Wikipedia",
            hint: "Bibliothek",
            aliases: [
                "wikipedia", "wiki", "bibliothek", "lexikon", "wissen", "artikel",
                "enzyklopädie", "recherche"
            ]
        },
        {
            id: "news",
            name: "Nachrichten",
            hint: "Aktuelles",
            aliases: [
                "nachrichten", "news", "aktuell", "aktuelles", "welt", "wissenschaft",
                "investigativ", "guardian", "bellingcat", "zeitung"
            ]
        },
        {
            id: "music",
            name: "Musik",
            hint: "Spotify",
            aliases: [
                "musik", "music", "spotify", "song", "songs", "lied", "lieder",
                "playlist", "playlists", "album", "alben", "hören"
            ]
        },
        {
            id: "chess",
            name: "Schach",
            hint: "Spielen · Lernen",
            aliases: [
                "schach", "chess", "elo", "brett", "eröffnung", "eröffnungen",
                "opening", "openings", "stockfish", "taktik", "partie"
            ]
        },
        {
            id: "flashcards",
            name: "Karteikarten",
            hint: "Decks",
            aliases: [
                "karteikarten", "karte", "karten", "flashcards", "flashcard",
                "lernkarten", "lernkarte", "deck", "decks", "anki",
                "wiederholen", "wiederholung", "abfragen"
            ]
        },
        {
            id: "calculator",
            name: "Rechner",
            hint: "Mathematik · Physik",
            aliases: [
                "rechner", "calculator", "calc", "rechnen", "berechnen",
                "mathe", "mathematik", "physik rechnen", "wolfram", "wolfram alpha",
                "konstanten", "naturkonstanten", "gleichung", "funktion"
            ]
        },
        {
            id: "wallpapers",
            name: "Tapetenwechsel",
            hint: "Design",
            aliases: [
                "tapetenwechsel", "tapete", "tapeten", "wallpaper", "wallpapers",
                "design", "startbild", "hintergrund"
            ]
        },
        {
            id: "timeline",
            name: "Zeitstrahl",
            hint: "Ansicht",
            aliases: [
                "zeitstrahl", "timeline", "zeitachse", "achse"
            ]
        },
        {
            id: "menu",
            name: "Menü",
            hint: "Fokus beenden",
            aliases: [
                "menü", "menu", "einstellungen", "settings", "optionen",
                "focus", "fokus", "beenden", "zurück", "home"
            ]
        }
    ];


    function normalizeFocusText(
        value
    ) {
        return String(
            value
            ??
            ""
        )
        .toLocaleLowerCase(
            "de-DE"
        )
        .normalize(
            "NFD"
        )
        .replace(
            /[\\u0300-\\u036f]/g,
            ""
        )
        .replace(
            /ß/g,
            "ss"
        )
        .trim();
    }


    function focusOneEditAway(
        a,
        b
    ) {
        if (
            Math.abs(
                a.length - b.length
            ) > 1
        ) {
            return false;
        }

        let i = 0;
        let j = 0;
        let edits = 0;

        while (
            i < a.length
            &&
            j < b.length
        ) {
            if (
                a[i] === b[j]
            ) {
                i += 1;
                j += 1;
                continue;
            }

            edits += 1;

            if (
                edits > 1
            ) {
                return false;
            }

            if (
                a.length > b.length
            ) {
                i += 1;
            } else if (
                b.length > a.length
            ) {
                j += 1;
            } else {
                i += 1;
                j += 1;
            }
        }

        if (
            i < a.length
            ||
            j < b.length
        ) {
            edits += 1;
        }

        return edits <= 1;
    }


    function focusMatchScore(
        app,
        rawQuery
    ) {
        const query =
            normalizeFocusText(
                rawQuery
            );

        if (
            !query
        ) {
            return Infinity;
        }

        const name =
            normalizeFocusText(
                app.name
            );

        const aliases =
            app.aliases.map(
                normalizeFocusText
            );

        if (name === query) return 0;
        if (name.startsWith(query)) return 1;
        if (aliases.some(alias => alias === query)) return 2;

        const prefixIndex =
            aliases.findIndex(
                alias => alias.startsWith(query)
            );

        if (prefixIndex >= 0) return 3 + prefixIndex / 100;
        if (name.includes(query)) return 5;

        const containsIndex =
            aliases.findIndex(
                alias => alias.includes(query)
            );

        if (containsIndex >= 0) return 6 + containsIndex / 100;

        if (
            query.length >= 4
            &&
            [name, ...aliases].some(
                candidate => focusOneEditAway(
                    query,
                    candidate
                )
            )
        ) {
            return 8;
        }

        return Infinity;
    }


    function getFocusMatches(
        query
    ) {
        return FOCUS_APPLICATIONS
            .map(
                app => ({
                    app,
                    score: focusMatchScore(
                        app,
                        query
                    )
                })
            )
            .filter(
                item => Number.isFinite(
                    item.score
                )
            )
            .sort(
                (a, b) =>
                    a.score - b.score
                    ||
                    a.app.name.localeCompare(
                        b.app.name,
                        "de"
                    )
            )
            .slice(
                0,
                7
            )
            .map(
                item => item.app
            );
    }


    function renderFocusSuggestions() {
        const query =
            focusSearchInput.value;

        const matches =
            getFocusMatches(
                query
            );

        focusSuggestions.innerHTML =
            "";

        if (
            !query.trim()
            ||
            matches.length === 0
        ) {
            focusSuggestions.classList.add(
                "hidden"
            );

            focusSuggestionIndex = 0;
            return;
        }

        focusSuggestionIndex =
            Math.max(
                0,
                Math.min(
                    focusSuggestionIndex,
                    matches.length - 1
                )
            );

        matches.forEach(
            (app, index) => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "focus-suggestion";

                if (
                    index === focusSuggestionIndex
                ) {
                    button.classList.add(
                        "active"
                    );
                }

                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "focus-suggestion-name";

                name.textContent =
                    app.name;

                button.appendChild(
                    name
                );

                button.addEventListener(
                    "pointerdown",
                    event => {
                        event.preventDefault();
                    }
                );

                button.addEventListener(
                    "click",
                    event => {
                        event.stopPropagation();

                        openFocusApplication(
                            app.id
                        );
                    }
                );

                focusSuggestions.appendChild(
                    button
                );
            }
        );

        focusSuggestions.classList.remove(
            "hidden"
        );
    }


    function resetFocusSearch() {
        focusSearchInput.value =
            "";

        focusSuggestionIndex =
            0;

        focusSuggestions.innerHTML =
            "";

        focusSuggestions.classList.add(
            "hidden"
        );
    }


    function showFocusHome(
        focusInput = false
    ) {
        resetFocusSearch();

        showScreen(
            screens.focus
        );

        if (
            focusInput
        ) {
            requestAnimationFrame(
                () => focusSearchInput.focus()
            );
        }
    }


    async function goToNormalHomeFromFocus() {
        if (
            typeof activeWallpaperId !== "undefined"
            &&
            typeof SYSTEM_WALLPAPER_ID !== "undefined"
            &&
            activeWallpaperId !== SYSTEM_WALLPAPER_ID
            &&
            typeof renderActiveWallpaperRoot === "function"
        ) {
            await renderActiveWallpaperRoot();

            wallpaperBypassRoomRedirect = true;

            showScreen(
                wallpaperRuntimeScreen
            );

            wallpaperBypassRoomRedirect = false;
            return;
        }

        wallpaperBypassRoomRedirect = true;

        showScreen(
            screens.textsHub
        );

        wallpaperBypassRoomRedirect = false;
    }


    function setFocusMode(
        enabled,
        options = {}
    ) {
        focusModeEnabled =
            Boolean(
                enabled
            );

        localStorage.setItem(
            FOCUS_MODE_KEY,
            focusModeEnabled
                ? "1"
                : "0"
        );

        focusMenuPanel.classList.add(
            "hidden"
        );

        el.textsMenuPanel.classList.add(
            "hidden"
        );

        customWallpaperMenuPanel.classList.add(
            "hidden"
        );

        if (
            focusModeEnabled
        ) {
            showFocusHome(
                Boolean(
                    options.focusInput
                )
            );
        } else if (
            options.goHome !== false
        ) {
            void goToNormalHomeFromFocus();
        }
    }


    function openFocusMenu() {
        resetFocusSearch();
        focusSearchInput.blur();

        focusMenuPanel.classList.remove(
            "hidden"
        );
    }


    function openFocusApplication(
        id
    ) {
        resetFocusSearch();
        focusSearchInput.blur();

        focusMenuPanel.classList.add(
            "hidden"
        );

        switch (id) {
            case "planner":
                showScreen(screens.plannerHub);
                break;
            case "books":
                el.openBooksButton.click();
                break;
            case "dreams":
                el.openDreamsButton.click();
                break;
            case "days":
                el.openDaysButton.click();
                break;
            case "thoughts":
                el.openThoughtsButton.click();
                break;
            case "physics":
                el.openPhysicsButton.click();
                break;
            case "notes":
                el.openNotesButton.click();
                break;
            case "films":
                openYoutubePortal();
                break;
            case "wikipedia":
                openWikipediaPortal();
                break;
            case "news":
                openNewsPortal();
                break;
            case "music":
                void openMusicPortal();
                break;
            case "chess":
                openChessSetup();
                break;
            case "flashcards":
                openFlashcardsHome();
                break;
            case "calculator":
                openCalculator();
                break;
            case "wallpapers":
                void openWallpaperManager();
                break;
            case "timeline":
                el.timelineButton.click();
                break;
            case "menu":
                openFocusMenu();
                break;
        }
    }


    focusSearchInput.addEventListener(
        "input",
        () => {
            focusSuggestionIndex = 0;
            renderFocusSuggestions();
        }
    );


    focusSearchInput.addEventListener(
        "keydown",
        event => {
            const matches =
                getFocusMatches(
                    focusSearchInput.value
                );

            if (
                event.key === "ArrowDown"
                &&
                matches.length
            ) {
                event.preventDefault();
                focusSuggestionIndex =
                    (focusSuggestionIndex + 1)
                    %
                    matches.length;
                renderFocusSuggestions();
                return;
            }

            if (
                event.key === "ArrowUp"
                &&
                matches.length
            ) {
                event.preventDefault();
                focusSuggestionIndex =
                    (focusSuggestionIndex - 1 + matches.length)
                    %
                    matches.length;
                renderFocusSuggestions();
                return;
            }

            if (
                event.key === "Enter"
                &&
                matches.length
            ) {
                event.preventDefault();
                openFocusApplication(
                    matches[focusSuggestionIndex].id
                );
                return;
            }

            if (
                event.key === "Escape"
            ) {
                event.preventDefault();
                resetFocusSearch();
                focusSearchInput.blur();
            }
        }
    );


    focusSearchInput.addEventListener(
        "focus",
        renderFocusSuggestions
    );


    $("focusModeButton").addEventListener(
        "click",
        () => {
            setFocusMode(
                true,
                { focusInput: false }
            );
        }
    );


    $("customWallpaperFocus").addEventListener(
        "click",
        () => {
            setFocusMode(
                true,
                { focusInput: false }
            );
        }
    );


    $("focusMenuClose").addEventListener(
        "click",
        () => {
            focusMenuPanel.classList.add(
                "hidden"
            );
            showFocusHome(false);
        }
    );


    $("focusDisableButton").addEventListener(
        "click",
        () => setFocusMode(false)
    );


    $("focusMenuTimeline").addEventListener(
        "click",
        () => {
            focusMenuPanel.classList.add("hidden");
            el.timelineButton.click();
        }
    );


    $("focusMenuWallpapers").addEventListener(
        "click",
        () => {
            focusMenuPanel.classList.add("hidden");
            void openWallpaperManager();
        }
    );


    $("focusMenuBackup").addEventListener(
        "click",
        () => {
            focusMenuPanel.classList.add("hidden");
            el.backupButton.click();
        }
    );


    $("focusMenuRestore").addEventListener(
        "click",
        () => {
            focusMenuPanel.classList.add("hidden");
            el.restoreButton.click();
        }
    );


    $("focusMenuTheme").addEventListener(
        "click",
        () => {
            focusMenuPanel.classList.add("hidden");
            el.themeButton.click();
            showFocusHome(false);
        }
    );


    /* Tapetenwechsel besitzt bei eigener Tapete einen direkten Home-Rückweg.
       Im Fokusmodus soll auch dieser Rückweg im Fokus landen. */
    $("backFromWallpaperList").addEventListener(
        "click",
        event => {
            if (
                !focusModeEnabled
            ) {
                return;
            }

            event.preventDefault();
            event.stopImmediatePropagation();
            showFocusHome(false);
        },
        true
    );

    // ==================================================
    // V55 — TAPETENWECHSEL
    // ==================================================

    const SYSTEM_WALLPAPER_ID =
        "system-study";

    const WALLPAPER_ACTIVE_KEY =
        "planner_active_wallpaper_v1";

    const WALLPAPER_DB_NAME =
        "planner_wallpapers_v1";

    const WALLPAPER_DB_VERSION =
        1;

    const WALLPAPER_STORE =
        "wallpapers";

    let wallpaperDb =
        null;

    let wallpaperSystemReady =
        false;

    let wallpaperBypassRoomRedirect =
        false;

    let activeWallpaperId =
        localStorage.getItem(
            WALLPAPER_ACTIVE_KEY
        )
        ||
        SYSTEM_WALLPAPER_ID;

    let wallpaperRuntimeWallpaper =
        null;

    let wallpaperRuntimeSceneId =
        null;

    let wallpaperRuntimeHistory =
        [];

    let wallpaperRuntimeObjectUrl =
        null;

    let wallpaperEditorWallpaper =
        null;

    let wallpaperEditorSceneId =
        null;

    let wallpaperEditorHistory =
        [];

    let wallpaperEditorObjectUrl =
        null;

    let wallpaperPendingCreateFile =
        null;

    let wallpaperPendingCreatePreviewUrl =
        null;

    let wallpaperPendingPoint =
        null;

    let wallpaperEditingHotspotId =
        null;

    let wallpaperRepositionHotspotId =
        null;

    let wallpaperPendingSceneSource =
        null;

    let wallpaperSelectedItemId =
        null;

    const wallpaperRuntimeScreen =
        $("wallpaperRuntimeScreen");

    const wallpaperRuntimeImage =
        $("wallpaperRuntimeImage");

    const wallpaperRuntimeHotspots =
        $("wallpaperRuntimeHotspots");

    const wallpaperListScreen =
        $("wallpaperListScreen");

    const wallpaperList =
        $("wallpaperList");

    const wallpaperCreateScreen =
        $("wallpaperCreateScreen");

    const wallpaperEditorScreen =
        $("wallpaperEditorScreen");

    const wallpaperEditorImage =
        $("wallpaperEditorImage");

    const wallpaperEditorMarkers =
        $("wallpaperEditorMarkers");

    const wallpaperEditorSceneLabel =
        $("wallpaperEditorSceneLabel");

    const wallpaperEditorHint =
        $("wallpaperEditorHint");

    const wallpaperTargetSheet =
        $("wallpaperTargetSheet");

    const wallpaperTargetList =
        $("wallpaperTargetList");

    const wallpaperPhotoSheet =
        $("wallpaperPhotoSheet");

    const wallpaperItemSheet =
        $("wallpaperItemSheet");

    const wallpaperItemSheetTitle =
        $("wallpaperItemSheetTitle");

    const customWallpaperMenuPanel =
        $("customWallpaperMenuPanel");

    const WALLPAPER_TARGETS = [
        ["books", "Bücher"],
        ["planner", "Planer"],
        ["dreams", "Träume"],
        ["days", "Tage"],
        ["thoughts", "Philosophie"],
        ["physics", "Physik"],
        ["notes", "Notizen"],
        ["films", "Filme"],
        ["wikipedia", "Wikipedia"],
        ["news", "Nachrichten"],
        ["music", "Musik"],
        ["chess", "Schach"],
        ["menu", "Menü"],
        ["back", "Zurück"],
        ["scene", "Neues Foto"]
    ];


    function wallpaperUid(
        prefix = "id"
    ) {
        if (
            crypto?.randomUUID
        ) {
            return `${prefix}-${crypto.randomUUID()}`;
        }

        return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }


    function openWallpaperDb() {
        return new Promise(
            (
                resolve,
                reject
            ) => {
                const request =
                    indexedDB.open(
                        WALLPAPER_DB_NAME,
                        WALLPAPER_DB_VERSION
                    );

                request.onupgradeneeded =
                    () => {
                        const db =
                            request.result;

                        if (
                            !db.objectStoreNames.contains(
                                WALLPAPER_STORE
                            )
                        ) {
                            db.createObjectStore(
                                WALLPAPER_STORE,
                                {
                                    keyPath:
                                        "id"
                                }
                            );
                        }
                    };

                request.onsuccess =
                    () => resolve(
                        request.result
                    );

                request.onerror =
                    () => reject(
                        request.error
                    );
            }
        );
    }


    function wallpaperStoreRequest(
        mode,
        operation
    ) {
        return new Promise(
            (
                resolve,
                reject
            ) => {
                const tx =
                    wallpaperDb.transaction(
                        WALLPAPER_STORE,
                        mode
                    );

                const store =
                    tx.objectStore(
                        WALLPAPER_STORE
                    );

                let request;

                try {
                    request =
                        operation(
                            store
                        );
                } catch (
                    error
                ) {
                    reject(
                        error
                    );
                    return;
                }

                request.onsuccess =
                    () => resolve(
                        request.result
                    );

                request.onerror =
                    () => reject(
                        request.error
                    );
            }
        );
    }


    function getAllWallpapers() {
        return wallpaperStoreRequest(
            "readonly",
            store =>
                store.getAll()
        );
    }


    function getWallpaper(
        id
    ) {
        return wallpaperStoreRequest(
            "readonly",
            store =>
                store.get(
                    id
                )
        );
    }


    function putWallpaper(
        wallpaper
    ) {
        wallpaper.updatedAt =
            new Date().toISOString();

        return wallpaperStoreRequest(
            "readwrite",
            store =>
                store.put(
                    wallpaper
                )
        );
    }


    function deleteWallpaper(
        id
    ) {
        return wallpaperStoreRequest(
            "readwrite",
            store =>
                store.delete(
                    id
                )
        );
    }


    function setActiveWallpaper(
        id
    ) {
        activeWallpaperId =
            id;

        localStorage.setItem(
            WALLPAPER_ACTIVE_KEY,
            id
        );
    }


    function revokeWallpaperUrl(
        kind
    ) {
        if (
            kind === "runtime"
            &&
            wallpaperRuntimeObjectUrl
        ) {
            URL.revokeObjectURL(
                wallpaperRuntimeObjectUrl
            );

            wallpaperRuntimeObjectUrl =
                null;
        }

        if (
            kind === "editor"
            &&
            wallpaperEditorObjectUrl
        ) {
            URL.revokeObjectURL(
                wallpaperEditorObjectUrl
            );

            wallpaperEditorObjectUrl =
                null;
        }
    }


    function wallpaperScene(
        wallpaper,
        sceneId
    ) {
        return wallpaper?.scenes?.find(
            scene =>
                scene.id
                ===
                sceneId
        )
        ??
        null;
    }


    function imageCoverGeometry(
        image,
        container
    ) {
        const rect =
            container.getBoundingClientRect();

        const iw =
            image.naturalWidth
            ||
            1;

        const ih =
            image.naturalHeight
            ||
            1;

        const scale =
            Math.max(
                rect.width / iw,
                rect.height / ih
            );

        const dw =
            iw * scale;

        const dh =
            ih * scale;

        return {
            rect,
            iw,
            ih,
            scale,
            offsetX:
                (rect.width - dw) / 2,
            offsetY:
                (rect.height - dh) / 2
        };
    }


    function pointFromClient(
        image,
        container,
        clientX,
        clientY
    ) {
        const g =
            imageCoverGeometry(
                image,
                container
            );

        const x =
            (
                clientX
                -
                g.rect.left
                -
                g.offsetX
            )
            /
            g.scale
            /
            g.iw;

        const y =
            (
                clientY
                -
                g.rect.top
                -
                g.offsetY
            )
            /
            g.scale
            /
            g.ih;

        return {
            x:
                Math.max(
                    0,
                    Math.min(
                        1,
                        x
                    )
                ),
            y:
                Math.max(
                    0,
                    Math.min(
                        1,
                        y
                    )
                )
        };
    }


    function clientPointFromNormalized(
        image,
        container,
        x,
        y
    ) {
        const g =
            imageCoverGeometry(
                image,
                container
            );

        return {
            left:
                g.offsetX
                +
                x
                *
                g.iw
                *
                g.scale,
            top:
                g.offsetY
                +
                y
                *
                g.ih
                *
                g.scale
        };
    }


    function loadImageFile(
        file
    ) {
        return new Promise(
            (
                resolve,
                reject
            ) => {
                const url =
                    URL.createObjectURL(
                        file
                    );

                const image =
                    new Image();

                image.onload =
                    () => {
                        URL.revokeObjectURL(
                            url
                        );

                        resolve(
                            image
                        );
                    };

                image.onerror =
                    () => {
                        URL.revokeObjectURL(
                            url
                        );

                        reject(
                            new Error(
                                "Bild konnte nicht gelesen werden."
                            )
                        );
                    };

                image.src =
                    url;
            }
        );
    }


    async function compressWallpaperImage(
        file
    ) {
        const image =
            await loadImageFile(
                file
            );

        const maxEdge =
            2400;

        const ratio =
            Math.min(
                1,
                maxEdge
                /
                Math.max(
                    image.naturalWidth,
                    image.naturalHeight
                )
            );

        const width =
            Math.max(
                1,
                Math.round(
                    image.naturalWidth
                    *
                    ratio
                )
            );

        const height =
            Math.max(
                1,
                Math.round(
                    image.naturalHeight
                    *
                    ratio
                )
            );

        const canvas =
            document.createElement(
                "canvas"
            );

        canvas.width =
            width;

        canvas.height =
            height;

        const ctx =
            canvas.getContext(
                "2d",
                {
                    alpha:
                        false
                }
            );

        ctx.drawImage(
            image,
            0,
            0,
            width,
            height
        );

        const blob =
            await new Promise(
                (
                    resolve,
                    reject
                ) => {
                    canvas.toBlob(
                        result => {
                            if (
                                result
                            ) {
                                resolve(
                                    result
                                );
                            } else {
                                reject(
                                    new Error(
                                        "Bild konnte nicht gespeichert werden."
                                    )
                                );
                            }
                        },
                        "image/jpeg",
                        0.88
                    );
                }
            );

        return {
            blob,
            width,
            height
        };
    }


    async function renderWallpaperList() {
        const wallpapers =
            (
                await getAllWallpapers()
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    (
                        b.updatedAt
                        ??
                        ""
                    )
                    .localeCompare(
                        a.updatedAt
                        ??
                        ""
                    )
            );

        wallpaperList.innerHTML =
            "";

        const rows = [
            {
                id:
                    SYSTEM_WALLPAPER_ID,
                name:
                    "Studienzimmer",
                system:
                    true
            },
            ...wallpapers
        ];

        rows.forEach(
            item => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "wallpaper-row";

                const main =
                    document.createElement(
                        "button"
                    );

                main.type =
                    "button";

                main.className =
                    "wallpaper-row-main";

                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "wallpaper-row-name";

                name.textContent =
                    item.name;

                const subtitle =
                    document.createElement(
                        "span"
                    );

                subtitle.className =
                    "wallpaper-row-subtitle";

                subtitle.textContent =
                    item.system
                        ? "Standard · nicht löschbar"
                        : `${item.scenes?.length ?? 1} Foto${(item.scenes?.length ?? 1) === 1 ? "" : "s"}`;

                main.append(
                    name,
                    subtitle
                );

                main.addEventListener(
                    "click",
                    () => {
                        if (
                            item.system
                        ) {
                            setActiveWallpaper(
                                SYSTEM_WALLPAPER_ID
                            );

                            renderWallpaperList();
                            return;
                        }

                        wallpaperSelectedItemId =
                            item.id;

                        wallpaperItemSheetTitle.textContent =
                            item.name;

                        wallpaperItemSheet.classList.remove(
                            "hidden"
                        );
                    }
                );

                const heart =
                    document.createElement(
                        "button"
                    );

                heart.type =
                    "button";

                heart.className =
                    "wallpaper-heart";

                heart.classList.toggle(
                    "active",
                    activeWallpaperId
                    ===
                    item.id
                );

                heart.textContent =
                    activeWallpaperId
                    ===
                    item.id
                        ? "♥"
                        : "♡";

                heart.setAttribute(
                    "aria-label",
                    `${item.name} aktivieren`
                );

                heart.addEventListener(
                    "click",
                    async event => {
                        event.stopPropagation();

                        setActiveWallpaper(
                            item.id
                        );

                        await renderWallpaperList();
                    }
                );

                row.append(
                    main,
                    heart
                );

                wallpaperList.appendChild(
                    row
                );
            }
        );
    }


    async function openWallpaperManager() {
        customWallpaperMenuPanel.classList.add(
            "hidden"
        );

        el.textsMenuPanel.classList.add(
            "hidden"
        );

        await renderWallpaperList();

        showScreen(
            wallpaperListScreen
        );
    }


    function resetWallpaperCreateForm() {
        $("wallpaperNameInput").value =
            "";

        wallpaperPendingCreateFile =
            null;

        $("wallpaperCreateStatus").textContent =
            "Name eingeben und ein Foto auswählen.";

        $("wallpaperCreateContinue").disabled =
            true;

        $("wallpaperCreatePreviewWrap").classList.add(
            "hidden"
        );

        if (
            wallpaperPendingCreatePreviewUrl
        ) {
            URL.revokeObjectURL(
                wallpaperPendingCreatePreviewUrl
            );

            wallpaperPendingCreatePreviewUrl =
                null;
        }

        $("wallpaperCreatePreview").removeAttribute(
            "src"
        );
    }


    function updateWallpaperCreateContinue() {
        const hasName =
            Boolean(
                $("wallpaperNameInput").value.trim()
            );

        const hasPhoto =
            Boolean(
                wallpaperPendingCreateFile
            );

        $("wallpaperCreateContinue").disabled =
            !(hasName && hasPhoto);

        if (
            hasName
            &&
            hasPhoto
        ) {
            $("wallpaperCreateStatus").textContent =
                "Bereit. Mit „Weiter“ öffnest du den Vollbild-Editor.";
        } else if (
            hasName
        ) {
            $("wallpaperCreateStatus").textContent =
                "Jetzt noch ein Foto auswählen.";
        } else if (
            hasPhoto
        ) {
            $("wallpaperCreateStatus").textContent =
                "Jetzt noch einen Namen eingeben.";
        } else {
            $("wallpaperCreateStatus").textContent =
                "Name eingeben und ein Foto auswählen.";
        }
    }


    function selectWallpaperCreateFile(
        file
    ) {
        if (
            !file
            ||
            !file.type.startsWith(
                "image/"
            )
        ) {
            return;
        }

        wallpaperPendingCreateFile =
            file;

        if (
            wallpaperPendingCreatePreviewUrl
        ) {
            URL.revokeObjectURL(
                wallpaperPendingCreatePreviewUrl
            );
        }

        wallpaperPendingCreatePreviewUrl =
            URL.createObjectURL(
                file
            );

        $("wallpaperCreatePreview").src =
            wallpaperPendingCreatePreviewUrl;

        $("wallpaperCreatePreviewWrap").classList.remove(
            "hidden"
        );

        updateWallpaperCreateContinue();
    }


    async function startNewWallpaperEditor() {
        const name =
            $("wallpaperNameInput").value.trim();

        if (
            !name
            ||
            !wallpaperPendingCreateFile
        ) {
            return;
        }

        $("wallpaperCreateContinue").disabled =
            true;

        $("wallpaperCreateStatus").textContent =
            "Foto wird vorbereitet …";

        try {
            const image =
                await compressWallpaperImage(
                    wallpaperPendingCreateFile
                );

            const sceneId =
                wallpaperUid(
                    "scene"
                );

            wallpaperEditorWallpaper = {
                id:
                    wallpaperUid(
                        "wallpaper"
                    ),
                name,
                rootSceneId:
                    sceneId,
                scenes: [
                    {
                        id:
                            sceneId,
                        image:
                            image.blob,
                        width:
                            image.width,
                        height:
                            image.height,
                        hotspots:
                            []
                    }
                ],
                createdAt:
                    new Date().toISOString(),
                updatedAt:
                    new Date().toISOString()
            };

            wallpaperEditorSceneId =
                sceneId;

            wallpaperEditorHistory =
                [];

            wallpaperEditingHotspotId =
                null;

            wallpaperRepositionHotspotId =
                null;

            resetWallpaperCreateForm();

            await renderWallpaperEditorScene();

            showScreen(
                wallpaperEditorScreen
            );
        } catch (
            error
        ) {
            $("wallpaperCreateStatus").textContent =
                error?.message
                ??
                "Foto konnte nicht vorbereitet werden.";

            updateWallpaperCreateContinue();
        }
    }


    async function renderWallpaperEditorScene() {
        const scene =
            wallpaperScene(
                wallpaperEditorWallpaper,
                wallpaperEditorSceneId
            );

        if (
            !scene
        ) {
            return;
        }

        revokeWallpaperUrl(
            "editor"
        );

        wallpaperEditorObjectUrl =
            URL.createObjectURL(
                scene.image
            );

        wallpaperEditorImage.src =
            wallpaperEditorObjectUrl;

        wallpaperEditorSceneLabel.textContent =
            `Foto ${wallpaperEditorWallpaper.scenes.findIndex(item => item.id === scene.id) + 1} / ${wallpaperEditorWallpaper.scenes.length}`;

        wallpaperEditorHint.textContent =
            "Tippe auf eine Stelle im Foto und wähle, was dort geöffnet werden soll.";

        const redraw =
            () => renderWallpaperEditorMarkers();

        if (
            wallpaperEditorImage.complete
        ) {
            requestAnimationFrame(
                redraw
            );
        } else {
            wallpaperEditorImage.onload =
                redraw;
        }
    }


    function wallpaperTargetLabel(
        hotspot
    ) {
        if (
            hotspot.type
            ===
            "scene"
        ) {
            return "↗";
        }

        if (
            hotspot.type
            ===
            "menu"
        ) {
            return "≡";
        }

        if (
            hotspot.type
            ===
            "back"
        ) {
            return "‹";
        }

        const entry =
            WALLPAPER_TARGETS.find(
                item =>
                    item[0]
                    ===
                    hotspot.type
            );

        return entry
            ? entry[1].slice(
                0,
                1
            )
            : "•";
    }


    function renderWallpaperEditorMarkers() {
        wallpaperEditorMarkers.innerHTML =
            "";

        const scene =
            wallpaperScene(
                wallpaperEditorWallpaper,
                wallpaperEditorSceneId
            );

        if (
            !scene
            ||
            !wallpaperEditorImage.naturalWidth
        ) {
            return;
        }

        scene.hotspots.forEach(
            hotspot => {
                const point =
                    clientPointFromNormalized(
                        wallpaperEditorImage,
                        wallpaperEditorScreen,
                        hotspot.x,
                        hotspot.y
                    );

                const marker =
                    document.createElement(
                        "button"
                    );

                marker.type =
                    "button";

                marker.className =
                    "wallpaper-editor-marker";

                marker.style.left =
                    `${point.left}px`;

                marker.style.top =
                    `${point.top}px`;

                marker.textContent =
                    wallpaperTargetLabel(
                        hotspot
                    );

                marker.title =
                    hotspot.label
                    ??
                    hotspot.type;

                marker.addEventListener(
                    "click",
                    event => {
                        event.stopPropagation();

                        wallpaperPendingPoint = {
                            x:
                                hotspot.x,
                            y:
                                hotspot.y
                        };

                        wallpaperEditingHotspotId =
                            hotspot.id;

                        openWallpaperTargetSheet(
                            true
                        );
                    }
                );

                wallpaperEditorMarkers.appendChild(
                    marker
                );
            }
        );
    }


    function openWallpaperTargetSheet(
        editing = false
    ) {
        wallpaperTargetList.innerHTML =
            "";

        WALLPAPER_TARGETS.forEach(
            (
                [
                    type,
                    label
                ]
            ) => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wallpaper-target-option";

                button.textContent =
                    label;

                button.addEventListener(
                    "click",
                    () => chooseWallpaperTarget(
                        type,
                        label
                    )
                );

                wallpaperTargetList.appendChild(
                    button
                );
            }
        );

        if (
            editing
        ) {
            const scene =
                wallpaperScene(
                    wallpaperEditorWallpaper,
                    wallpaperEditorSceneId
                );

            const currentHotspot =
                scene?.hotspots?.find(
                    item =>
                        item.id
                        ===
                        wallpaperEditingHotspotId
                );

            if (
                currentHotspot?.type
                ===
                "scene"
                &&
                currentHotspot.targetValue
            ) {
                const openLinked =
                    document.createElement(
                        "button"
                    );

                openLinked.type =
                    "button";

                openLinked.className =
                    "wallpaper-target-option";

                openLinked.textContent =
                    "Verknüpftes Foto öffnen";

                openLinked.addEventListener(
                    "click",
                    async () => {
                        wallpaperTargetSheet.classList.add(
                            "hidden"
                        );

                        wallpaperEditorHistory.push(
                            wallpaperEditorSceneId
                        );

                        wallpaperEditorSceneId =
                            currentHotspot.targetValue;

                        wallpaperEditingHotspotId =
                            null;

                        wallpaperPendingPoint =
                            null;

                        await renderWallpaperEditorScene();
                    }
                );

                wallpaperTargetList.prepend(
                    openLinked
                );
            }

            const reposition =
                document.createElement(
                    "button"
                );

            reposition.type =
                "button";

            reposition.className =
                "wallpaper-target-option";

            reposition.textContent =
                "Position ändern";

            reposition.addEventListener(
                "click",
                () => {
                    wallpaperTargetSheet.classList.add(
                        "hidden"
                    );

                    wallpaperRepositionHotspotId =
                        wallpaperEditingHotspotId;

                    wallpaperEditingHotspotId =
                        null;

                    wallpaperPendingPoint =
                        null;

                    wallpaperEditorHint.textContent =
                        "Tippe auf die neue Position des Links.";
                }
            );

            wallpaperTargetList.appendChild(
                reposition
            );

            const remove =
                document.createElement(
                    "button"
                );

            remove.type =
                "button";

            remove.className =
                "wallpaper-target-option wallpaper-danger-row";

            remove.textContent =
                "Link löschen";

            remove.addEventListener(
                "click",
                () => {
                    const scene =
                        wallpaperScene(
                            wallpaperEditorWallpaper,
                            wallpaperEditorSceneId
                        );

                    scene.hotspots =
                        scene.hotspots.filter(
                            item =>
                                item.id
                                !==
                                wallpaperEditingHotspotId
                        );

                    wallpaperEditingHotspotId =
                        null;

                    wallpaperTargetSheet.classList.add(
                        "hidden"
                    );

                    renderWallpaperEditorMarkers();
                }
            );

            wallpaperTargetList.appendChild(
                remove
            );
        }

        wallpaperTargetSheet.classList.remove(
            "hidden"
        );
    }


    function createOrUpdateWallpaperHotspot(
        type,
        label,
        targetValue = null
    ) {
        const scene =
            wallpaperScene(
                wallpaperEditorWallpaper,
                wallpaperEditorSceneId
            );

        if (
            !scene
            ||
            !wallpaperPendingPoint
        ) {
            return;
        }

        const existing =
            scene.hotspots.find(
                item =>
                    item.id
                    ===
                    wallpaperEditingHotspotId
            );

        if (
            existing
        ) {
            existing.type =
                type;

            existing.label =
                label;

            existing.targetValue =
                targetValue;

            existing.x =
                wallpaperPendingPoint.x;

            existing.y =
                wallpaperPendingPoint.y;
        } else {
            scene.hotspots.push(
                {
                    id:
                        wallpaperUid(
                            "hotspot"
                        ),
                    x:
                        wallpaperPendingPoint.x,
                    y:
                        wallpaperPendingPoint.y,
                    type,
                    label,
                    targetValue
                }
            );
        }

        wallpaperEditingHotspotId =
            null;

        wallpaperPendingPoint =
            null;

        renderWallpaperEditorMarkers();
    }


    function chooseWallpaperTarget(
        type,
        label
    ) {
        wallpaperTargetSheet.classList.add(
            "hidden"
        );

        if (
            type
            ===
            "scene"
        ) {
            wallpaperPendingSceneSource = {
                fromSceneId:
                    wallpaperEditorSceneId,
                editingHotspotId:
                    wallpaperEditingHotspotId,
                point:
                    wallpaperPendingPoint
            };

            wallpaperPhotoSheet.classList.remove(
                "hidden"
            );

            return;
        }

        createOrUpdateWallpaperHotspot(
            type,
            label
        );
    }


    async function addWallpaperSceneFromFile(
        file
    ) {
        if (
            !file
            ||
            !file.type.startsWith(
                "image/"
            )
            ||
            !wallpaperPendingSceneSource
        ) {
            return;
        }

        wallpaperPhotoSheet.classList.add(
            "hidden"
        );

        wallpaperEditorHint.textContent =
            "Foto wird vorbereitet …";

        try {
            const image =
                await compressWallpaperImage(
                    file
                );

            const newSceneId =
                wallpaperUid(
                    "scene"
                );

            wallpaperEditorWallpaper.scenes.push(
                {
                    id:
                        newSceneId,
                    image:
                        image.blob,
                    width:
                        image.width,
                    height:
                        image.height,
                    hotspots:
                        []
                }
            );

            const source =
                wallpaperScene(
                    wallpaperEditorWallpaper,
                    wallpaperPendingSceneSource.fromSceneId
                );

            const existing =
                source.hotspots.find(
                    item =>
                        item.id
                        ===
                        wallpaperPendingSceneSource.editingHotspotId
                );

            if (
                existing
            ) {
                existing.type =
                    "scene";

                existing.label =
                    "Neues Foto";

                existing.targetValue =
                    newSceneId;

                existing.x =
                    wallpaperPendingSceneSource.point.x;

                existing.y =
                    wallpaperPendingSceneSource.point.y;
            } else {
                source.hotspots.push(
                    {
                        id:
                            wallpaperUid(
                                "hotspot"
                            ),
                        x:
                            wallpaperPendingSceneSource.point.x,
                        y:
                            wallpaperPendingSceneSource.point.y,
                        type:
                            "scene",
                        label:
                            "Neues Foto",
                        targetValue:
                            newSceneId
                    }
                );
            }

            wallpaperEditorHistory.push(
                wallpaperPendingSceneSource.fromSceneId
            );

            wallpaperEditorSceneId =
                newSceneId;

            wallpaperPendingSceneSource =
                null;

            wallpaperPendingPoint =
                null;

            wallpaperEditingHotspotId =
                null;

            await renderWallpaperEditorScene();
        } catch (
            error
        ) {
            wallpaperEditorHint.textContent =
                error?.message
                ??
                "Foto konnte nicht hinzugefügt werden.";
        }
    }


    function validateWallpaperEditor() {
        const root =
            wallpaperScene(
                wallpaperEditorWallpaper,
                wallpaperEditorWallpaper.rootSceneId
            );

        if (
            !root?.hotspots.some(
                item =>
                    item.type
                    ===
                    "menu"
            )
        ) {
            return {
                ok:
                    false,
                sceneId:
                    root?.id,
                message:
                    "Auf dem Hauptfoto muss mindestens ein Link „Menü“ vorhanden sein."
            };
        }

        for (
            const scene
            of
            wallpaperEditorWallpaper.scenes
        ) {
            if (
                scene.id
                ===
                wallpaperEditorWallpaper.rootSceneId
            ) {
                continue;
            }

            const hasExit =
                scene.hotspots.some(
                    item =>
                        item.type
                        ===
                        "menu"
                        ||
                        item.type
                        ===
                        "back"
                );

            if (
                !hasExit
            ) {
                return {
                    ok:
                        false,
                    sceneId:
                        scene.id,
                    message:
                        "Jedes zusätzliche Foto braucht mindestens „Zurück“ oder „Menü“, damit keine Sackgasse entsteht."
                };
            }
        }

        return {
            ok:
                true
        };
    }


    async function finishWallpaperEditor() {
        const validation =
            validateWallpaperEditor();

        if (
            !validation.ok
        ) {
            wallpaperEditorSceneId =
                validation.sceneId
                ||
                wallpaperEditorWallpaper.rootSceneId;

            await renderWallpaperEditorScene();

            wallpaperEditorHint.textContent =
                validation.message;

            return;
        }

        await putWallpaper(
            wallpaperEditorWallpaper
        );

        wallpaperEditorWallpaper =
            null;

        revokeWallpaperUrl(
            "editor"
        );

        await renderWallpaperList();

        showScreen(
            wallpaperListScreen
        );
    }


    async function editWallpaper(
        id
    ) {
        const wallpaper =
            await getWallpaper(
                id
            );

        if (
            !wallpaper
        ) {
            return;
        }

        wallpaperEditorWallpaper =
            wallpaper;

        wallpaperEditorSceneId =
            wallpaper.rootSceneId;

        wallpaperEditorHistory =
            [];

        wallpaperRepositionHotspotId =
            null;

        await renderWallpaperEditorScene();

        showScreen(
            wallpaperEditorScreen
        );
    }


    async function renderActiveWallpaperRoot() {
        if (
            activeWallpaperId
            ===
            SYSTEM_WALLPAPER_ID
        ) {
            return;
        }

        const wallpaper =
            await getWallpaper(
                activeWallpaperId
            );

        if (
            !wallpaper
        ) {
            setActiveWallpaper(
                SYSTEM_WALLPAPER_ID
            );

            return;
        }

        wallpaperRuntimeWallpaper =
            wallpaper;

        wallpaperRuntimeHistory =
            [];

        await renderWallpaperRuntimeScene(
            wallpaper.rootSceneId
        );
    }


    async function renderWallpaperRuntimeScene(
        sceneId
    ) {
        const scene =
            wallpaperScene(
                wallpaperRuntimeWallpaper,
                sceneId
            );

        if (
            !scene
        ) {
            return;
        }

        wallpaperRuntimeSceneId =
            sceneId;

        revokeWallpaperUrl(
            "runtime"
        );

        wallpaperRuntimeObjectUrl =
            URL.createObjectURL(
                scene.image
            );

        wallpaperRuntimeImage.src =
            wallpaperRuntimeObjectUrl;

        const redraw =
            () => renderWallpaperRuntimeHotspots();

        if (
            wallpaperRuntimeImage.complete
        ) {
            requestAnimationFrame(
                redraw
            );
        } else {
            wallpaperRuntimeImage.onload =
                redraw;
        }
    }


    function renderWallpaperRuntimeHotspots() {
        wallpaperRuntimeHotspots.innerHTML =
            "";

        const scene =
            wallpaperScene(
                wallpaperRuntimeWallpaper,
                wallpaperRuntimeSceneId
            );

        if (
            !scene
            ||
            !wallpaperRuntimeImage.naturalWidth
        ) {
            return;
        }

        scene.hotspots.forEach(
            hotspot => {
                const point =
                    clientPointFromNormalized(
                        wallpaperRuntimeImage,
                        wallpaperRuntimeScreen,
                        hotspot.x,
                        hotspot.y
                    );

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "wallpaper-runtime-hotspot";

                button.style.left =
                    `${point.left}px`;

                button.style.top =
                    `${point.top}px`;

                button.setAttribute(
                    "aria-label",
                    hotspot.label
                    ??
                    hotspot.type
                );

                button.addEventListener(
                    "click",
                    event => {
                        event.stopPropagation();

                        void activateWallpaperHotspot(
                            hotspot
                        );
                    }
                );

                wallpaperRuntimeHotspots.appendChild(
                    button
                );
            }
        );
    }


    async function activateWallpaperHotspot(
        hotspot
    ) {
        if (
            hotspot.type
            ===
            "scene"
        ) {
            wallpaperRuntimeHistory.push(
                wallpaperRuntimeSceneId
            );

            await renderWallpaperRuntimeScene(
                hotspot.targetValue
            );

            return;
        }

        if (
            hotspot.type
            ===
            "back"
        ) {
            const previous =
                wallpaperRuntimeHistory.pop();

            if (
                previous
            ) {
                await renderWallpaperRuntimeScene(
                    previous
                );
            } else if (
                wallpaperRuntimeWallpaper
            ) {
                await renderWallpaperRuntimeScene(
                    wallpaperRuntimeWallpaper.rootSceneId
                );
            }

            return;
        }

        if (
            hotspot.type
            ===
            "menu"
        ) {
            customWallpaperMenuPanel.classList.remove(
                "hidden"
            );

            return;
        }

        launchWallpaperApplication(
            hotspot.type
        );
    }


    function launchWallpaperApplication(
        type
    ) {
        customWallpaperMenuPanel.classList.add(
            "hidden"
        );

        switch (
            type
        ) {
            case "planner":
                showScreen(
                    screens.plannerHub
                );
                break;

            case "books":
                el.openBooksButton.click();
                break;

            case "dreams":
                el.openDreamsButton.click();
                break;

            case "days":
                el.openDaysButton.click();
                break;

            case "thoughts":
                el.openThoughtsButton.click();
                break;

            case "physics":
                el.openPhysicsButton.click();
                break;

            case "notes":
                el.openNotesButton.click();
                break;

            case "films":
                openYoutubePortal();
                break;

            case "wikipedia":
                openWikipediaPortal();
                break;

            case "news":
                openNewsPortal();
                break;

            case "music":
                void openMusicPortal();
                break;

            case "chess":
                openChessSetup();
                break;
        }
    }


    async function activateWallpaperAndGoHome(
        id
    ) {
        setActiveWallpaper(
            id
        );

        if (
            id
            ===
            SYSTEM_WALLPAPER_ID
        ) {
            wallpaperBypassRoomRedirect =
                true;

            showScreen(
                screens.textsHub
            );

            wallpaperBypassRoomRedirect =
                false;

            return;
        }

        await renderActiveWallpaperRoot();

        showScreen(
            wallpaperRuntimeScreen
        );
    }


    function blobToDataUrl(
        blob
    ) {
        return new Promise(
            (
                resolve,
                reject
            ) => {
                const reader =
                    new FileReader();

                reader.onload =
                    () => resolve(
                        reader.result
                    );

                reader.onerror =
                    () => reject(
                        reader.error
                    );

                reader.readAsDataURL(
                    blob
                );
            }
        );
    }


    async function dataUrlToBlob(
        dataUrl
    ) {
        const response =
            await fetch(
                dataUrl
            );

        return response.blob();
    }


    async function exportWallpaper(
        id
    ) {
        const wallpaper =
            await getWallpaper(
                id
            );

        if (
            !wallpaper
        ) {
            return;
        }

        const exported = {
            format:
                "planerwallpaper",
            version:
                1,
            wallpaper: {
                ...wallpaper,
                scenes:
                    []
            }
        };

        for (
            const scene
            of
            wallpaper.scenes
        ) {
            exported.wallpaper.scenes.push(
                {
                    ...scene,
                    image:
                        await blobToDataUrl(
                            scene.image
                        )
                }
            );
        }

        const blob =
            new Blob(
                [
                    JSON.stringify(
                        exported
                    )
                ],
                {
                    type:
                        "application/json"
                }
            );

        const url =
            URL.createObjectURL(
                blob
            );

        const a =
            document.createElement(
                "a"
            );

        a.href =
            url;

        a.download =
            `${wallpaper.name.replace(/[^\p{L}\p{N}_-]+/gu, "_") || "Tapete"}.planerwallpaper`;

        document.body.appendChild(
            a
        );

        a.click();

        a.remove();

        setTimeout(
            () => URL.revokeObjectURL(
                url
            ),
            1000
        );
    }


    async function importWallpaperFile(
        file
    ) {
        if (
            !file
        ) {
            return;
        }

        try {
            const parsed =
                JSON.parse(
                    await file.text()
                );

            if (
                parsed?.format
                !==
                "planerwallpaper"
                ||
                !parsed?.wallpaper?.scenes?.length
            ) {
                throw new Error(
                    "Keine gültige Tapeten-Datei."
                );
            }

            const imported =
                parsed.wallpaper;

            imported.id =
                wallpaperUid(
                    "wallpaper"
                );

            imported.name =
                `${imported.name || "Importierte Tapete"}`;

            const sceneIdMap =
                new Map();

            imported.scenes.forEach(
                scene => {
                    const oldId =
                        scene.id;

                    const newId =
                        wallpaperUid(
                            "scene"
                        );

                    sceneIdMap.set(
                        oldId,
                        newId
                    );

                    scene.id =
                        newId;
                }
            );

            imported.rootSceneId =
                sceneIdMap.get(
                    imported.rootSceneId
                )
                ||
                imported.scenes[0].id;

            for (
                const scene
                of
                imported.scenes
            ) {
                scene.image =
                    await dataUrlToBlob(
                        scene.image
                    );

                scene.hotspots =
                    (
                        scene.hotspots
                        ??
                        []
                    )
                    .map(
                        hotspot => ({
                            ...hotspot,
                            id:
                                wallpaperUid(
                                    "hotspot"
                                ),
                            targetValue:
                                hotspot.type
                                ===
                                "scene"
                                    ? sceneIdMap.get(
                                        hotspot.targetValue
                                    )
                                    : hotspot.targetValue
                        })
                    );
            }

            imported.createdAt =
                new Date().toISOString();

            imported.updatedAt =
                imported.createdAt;

            await putWallpaper(
                imported
            );

            await renderWallpaperList();
        } catch (
            error
        ) {
            alert(
                error?.message
                ??
                "Tapete konnte nicht importiert werden."
            );
        }
    }


    async function duplicateWallpaper(
        id
    ) {
        const wallpaper =
            await getWallpaper(
                id
            );

        if (
            !wallpaper
        ) {
            return;
        }

        const clone =
            structuredClone(
                wallpaper
            );

        const sceneIdMap =
            new Map();

        clone.scenes.forEach(
            scene => {
                const old =
                    scene.id;

                scene.id =
                    wallpaperUid(
                        "scene"
                    );

                sceneIdMap.set(
                    old,
                    scene.id
                );
            }
        );

        clone.scenes.forEach(
            scene => {
                scene.hotspots =
                    scene.hotspots.map(
                        hotspot => ({
                            ...hotspot,
                            id:
                                wallpaperUid(
                                    "hotspot"
                                ),
                            targetValue:
                                hotspot.type
                                ===
                                "scene"
                                    ? sceneIdMap.get(
                                        hotspot.targetValue
                                    )
                                    : hotspot.targetValue
                        })
                    );
            }
        );

        clone.id =
            wallpaperUid(
                "wallpaper"
            );

        clone.rootSceneId =
            sceneIdMap.get(
                wallpaper.rootSceneId
            );

        clone.name =
            `${wallpaper.name} Kopie`;

        clone.createdAt =
            new Date().toISOString();

        clone.updatedAt =
            clone.createdAt;

        await putWallpaper(
            clone
        );

        await renderWallpaperList();
    }


    async function initializeWallpaperSystem() {
        try {
            wallpaperDb =
                await openWallpaperDb();

            wallpaperSystemReady =
                true;

            if (
                activeWallpaperId
                !==
                SYSTEM_WALLPAPER_ID
            ) {
                const exists =
                    await getWallpaper(
                        activeWallpaperId
                    );

                if (
                    !exists
                ) {
                    setActiveWallpaper(
                        SYSTEM_WALLPAPER_ID
                    );
                } else {
                    wallpaperRuntimeWallpaper =
                        exists;

                    wallpaperRuntimeHistory =
                        [];

                    await renderWallpaperRuntimeScene(
                        exists.rootSceneId
                    );

                    showScreen(
                        wallpaperRuntimeScreen
                    );
                }
            }
        } catch (
            error
        ) {
            console.error(
                "Tapetenwechsel konnte nicht initialisiert werden:",
                error
            );

            wallpaperSystemReady =
                false;
        }
    }


    // ----- Existing study-room drawer -----

    $("openWallpaperManagerButton").addEventListener(
        "click",
        () => {
            void openWallpaperManager();
        }
    );


    // ----- Wallpaper list -----

    $("backFromWallpaperList").addEventListener(
        "click",
        () => {
            if (
                activeWallpaperId
                ===
                SYSTEM_WALLPAPER_ID
            ) {
                wallpaperBypassRoomRedirect =
                    true;

                showScreen(
                    screens.textsHub
                );

                wallpaperBypassRoomRedirect =
                    false;
            } else {
                void renderActiveWallpaperRoot().then(
                    () => showScreen(
                        wallpaperRuntimeScreen
                    )
                );
            }
        }
    );


    $("addWallpaperButton").addEventListener(
        "click",
        () => {
            resetWallpaperCreateForm();

            showScreen(
                wallpaperCreateScreen
            );

            setTimeout(
                () => $("wallpaperNameInput").focus(),
                80
            );
        }
    );


    $("wallpaperImportButton").addEventListener(
        "click",
        () => $("wallpaperImportInput").click()
    );


    $("wallpaperImportInput").addEventListener(
        "change",
        event => {
            void importWallpaperFile(
                event.target.files?.[0]
            );

            event.target.value =
                "";
        }
    );


    // ----- Create screen -----

    $("backFromWallpaperCreate").addEventListener(
        "click",
        () => {
            resetWallpaperCreateForm();

            showScreen(
                wallpaperListScreen
            );
        }
    );


    $("wallpaperCameraButton").addEventListener(
        "click",
        () => $("wallpaperCameraInput").click()
    );


    $("wallpaperGalleryButton").addEventListener(
        "click",
        () => $("wallpaperGalleryInput").click()
    );

    $("wallpaperReplacePhotoButton").addEventListener(
        "click",
        () => $("wallpaperGalleryInput").click()
    );


    $("wallpaperCameraInput").addEventListener(
        "change",
        event => {
            selectWallpaperCreateFile(
                event.target.files?.[0]
            );

            event.target.value =
                "";
        }
    );


    $("wallpaperGalleryInput").addEventListener(
        "change",
        event => {
            selectWallpaperCreateFile(
                event.target.files?.[0]
            );

            event.target.value =
                "";
        }
    );


    $("wallpaperNameInput").addEventListener(
        "input",
        updateWallpaperCreateContinue
    );


    $("wallpaperCreateContinue").addEventListener(
        "click",
        () => {
            void startNewWallpaperEditor();
        }
    );


    // ----- Editor -----

    wallpaperEditorScreen.addEventListener(
        "click",
        event => {
            if (
                event.target
                !==
                wallpaperEditorImage
            ) {
                return;
            }

            const point =
                pointFromClient(
                    wallpaperEditorImage,
                    wallpaperEditorScreen,
                    event.clientX,
                    event.clientY
                );

            if (
                wallpaperRepositionHotspotId
            ) {
                const scene =
                    wallpaperScene(
                        wallpaperEditorWallpaper,
                        wallpaperEditorSceneId
                    );

                const hotspot =
                    scene?.hotspots?.find(
                        item =>
                            item.id
                            ===
                            wallpaperRepositionHotspotId
                    );

                if (
                    hotspot
                ) {
                    hotspot.x =
                        point.x;

                    hotspot.y =
                        point.y;
                }

                wallpaperRepositionHotspotId =
                    null;

                wallpaperEditorHint.textContent =
                    "Position geändert. Tippe auf eine Stelle für einen weiteren Link.";

                renderWallpaperEditorMarkers();

                return;
            }

            wallpaperPendingPoint =
                point;

            wallpaperEditingHotspotId =
                null;

            openWallpaperTargetSheet(
                false
            );
        }
    );


    window.addEventListener(
        "resize",
        () => {
            if (
                wallpaperRuntimeScreen.classList.contains(
                    "active"
                )
            ) {
                renderWallpaperRuntimeHotspots();
            }

            if (
                wallpaperEditorScreen.classList.contains(
                    "active"
                )
            ) {
                renderWallpaperEditorMarkers();
            }
        }
    );


    $("wallpaperTargetCancel").addEventListener(
        "click",
        () => {
            wallpaperTargetSheet.classList.add(
                "hidden"
            );

            wallpaperPendingPoint =
                null;

            wallpaperEditingHotspotId =
                null;
        }
    );


    $("wallpaperPhotoSheetCancel").addEventListener(
        "click",
        () => {
            wallpaperPhotoSheet.classList.add(
                "hidden"
            );

            wallpaperPendingSceneSource =
                null;

            wallpaperPendingPoint =
                null;

            wallpaperEditingHotspotId =
                null;
        }
    );


    $("wallpaperSceneCameraButton").addEventListener(
        "click",
        () => {
            wallpaperPhotoSheet.classList.add(
                "hidden"
            );

            $("wallpaperSceneCameraInput").click();
        }
    );


    $("wallpaperSceneGalleryButton").addEventListener(
        "click",
        () => {
            wallpaperPhotoSheet.classList.add(
                "hidden"
            );

            $("wallpaperSceneGalleryInput").click();
        }
    );


    $("wallpaperSceneCameraInput").addEventListener(
        "change",
        event => {
            const file =
                event.target.files?.[0];

            event.target.value =
                "";

            void addWallpaperSceneFromFile(
                file
            );
        }
    );


    $("wallpaperSceneGalleryInput").addEventListener(
        "change",
        event => {
            const file =
                event.target.files?.[0];

            event.target.value =
                "";

            void addWallpaperSceneFromFile(
                file
            );
        }
    );


    $("backFromWallpaperEditor").addEventListener(
        "click",
        async event => {
            event.stopPropagation();

            if (
                wallpaperEditorHistory.length
            ) {
                wallpaperEditorSceneId =
                    wallpaperEditorHistory.pop();

                await renderWallpaperEditorScene();

                return;
            }

            if (
                confirm(
                    "Bearbeitung verlassen? Nicht gespeicherte Änderungen gehen verloren."
                )
            ) {
                wallpaperEditorWallpaper =
                    null;

                revokeWallpaperUrl(
                    "editor"
                );

                await renderWallpaperList();

                showScreen(
                    wallpaperListScreen
                );
            }
        }
    );


    $("finishWallpaperEditor").addEventListener(
        "click",
        event => {
            event.stopPropagation();

            void finishWallpaperEditor();
        }
    );


    // ----- Item actions -----

    $("wallpaperItemSheetCancel").addEventListener(
        "click",
        () => {
            wallpaperItemSheet.classList.add(
                "hidden"
            );

            wallpaperSelectedItemId =
                null;
        }
    );


    wallpaperItemSheet.addEventListener(
        "click",
        async event => {
            const button =
                event.target.closest(
                    "[data-wallpaper-item-action]"
                );

            if (
                !button
                ||
                !wallpaperSelectedItemId
            ) {
                return;
            }

            const id =
                wallpaperSelectedItemId;

            const action =
                button.dataset.wallpaperItemAction;

            wallpaperItemSheet.classList.add(
                "hidden"
            );

            wallpaperSelectedItemId =
                null;

            if (
                action
                ===
                "activate"
            ) {
                setActiveWallpaper(
                    id
                );

                await renderWallpaperList();

                return;
            }

            if (
                action
                ===
                "edit"
            ) {
                await editWallpaper(
                    id
                );

                return;
            }

            if (
                action
                ===
                "rename"
            ) {
                const wallpaper =
                    await getWallpaper(
                        id
                    );

                const name =
                    prompt(
                        "Neuer Name",
                        wallpaper?.name
                        ??
                        ""
                    );

                if (
                    name?.trim()
                ) {
                    wallpaper.name =
                        name.trim();

                    await putWallpaper(
                        wallpaper
                    );

                    await renderWallpaperList();
                }

                return;
            }

            if (
                action
                ===
                "duplicate"
            ) {
                await duplicateWallpaper(
                    id
                );

                return;
            }

            if (
                action
                ===
                "export"
            ) {
                await exportWallpaper(
                    id
                );

                return;
            }

            if (
                action
                ===
                "delete"
            ) {
                const wallpaper =
                    await getWallpaper(
                        id
                    );

                if (
                    wallpaper
                    &&
                    confirm(
                        `„${wallpaper.name}“ wirklich löschen?`
                    )
                ) {
                    await deleteWallpaper(
                        id
                    );

                    if (
                        activeWallpaperId
                        ===
                        id
                    ) {
                        setActiveWallpaper(
                            SYSTEM_WALLPAPER_ID
                        );
                    }

                    await renderWallpaperList();
                }
            }
        }
    );


    // ----- Custom wallpaper menu -----

    $("closeCustomWallpaperMenu").addEventListener(
        "click",
        () => customWallpaperMenuPanel.classList.add(
            "hidden"
        )
    );


    $("customWallpaperManage").addEventListener(
        "click",
        () => {
            void openWallpaperManager();
        }
    );


    $("customWallpaperTimeline").addEventListener(
        "click",
        () => {
            customWallpaperMenuPanel.classList.add(
                "hidden"
            );

            el.timelineButton.click();
        }
    );


    $("customWallpaperBackup").addEventListener(
        "click",
        () => {
            customWallpaperMenuPanel.classList.add(
                "hidden"
            );

            el.backupButton.click();
        }
    );


    $("customWallpaperRestore").addEventListener(
        "click",
        () => {
            customWallpaperMenuPanel.classList.add(
                "hidden"
            );

            el.restoreButton.click();
        }
    );


    $("customWallpaperTheme").addEventListener(
        "click",
        () => {
            customWallpaperMenuPanel.classList.add(
                "hidden"
            );

            el.themeButton.click();
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !customWallpaperMenuPanel.classList.contains(
                    "hidden"
                )
                &&
                !customWallpaperMenuPanel.contains(
                    event.target
                )
            ) {
                customWallpaperMenuPanel.classList.add(
                    "hidden"
                );
            }
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

    void initializeSpotifyOnLoad();

    void initializeWallpaperSystem();

    if (
        focusModeEnabled
    ) {
        showFocusHome(
            false
        );
    }

    openTimelineEditFromLocation();
    saveState();
    renderMiniSession();

})();
