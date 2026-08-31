(() => {
    "use strict";

    const $ = id => document.getElementById(id);

    // ==================================================
    // V68 — SESSION FLIP RESTORE
    // Front remains the quiet clock from v65.
    // A tap on the front is forwarded to the original
    // universe canvas click handler, which owns the native
    // sessionBackVisible state and class toggles.
    //
    // IMPORTANT: the synthetic canvas click bubbles through
    // sessionFront as well. Let that event pass untouched,
    // otherwise this capture handler would stop it before the
    // original canvas listener can run.
    // ==================================================

    const sessionFront = $("sessionFront");
    const universeCanvas = $("universeCanvas");

    if (sessionFront && universeCanvas) {
        sessionFront.addEventListener(
            "click",
            event => {
                // This is the forwarded click itself. Do not intercept it.
                if (event.target === universeCanvas) {
                    return;
                }

                if (!document.documentElement.classList.contains("v65-focus-mode")) {
                    return;
                }

                if (event.target.closest?.("button")) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                // Re-use the original app.js canvas listener so its private
                // sessionBackVisible state stays perfectly in sync.
                universeCanvas.click();
            },
            true
        );
    }

    // ==================================================
    // V67 — FULL WRITING FOCUS
    // The old full-text screen had "back" = discard and
    // "Fertig" = save. With only one visible back control,
    // back must save before returning.
    // ==================================================

    const fullEditorScreen = $("fullTextEditorScreen");
    const fullEditorBack = $("cancelFullTextEditorButton");
    const fullEditorFinish = $("finishFullTextEditorButton");
    const fullEditorArea = $("fullTextEditorArea");

    if (fullEditorBack && fullEditorFinish) {
        fullEditorBack.setAttribute("aria-label", "Speichern und zurück");

        fullEditorBack.addEventListener(
            "click",
            event => {
                if (!fullEditorScreen?.classList.contains("active")) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                fullEditorFinish.click();
            },
            true
        );
    }

    // iOS can restore scroll position oddly when the keyboard opens.
    // Keep the actual writing surface pinned to its top-level screen.
    if (fullEditorArea) {
        fullEditorArea.addEventListener("focus", () => {
            if (fullEditorScreen?.classList.contains("active")) {
                requestAnimationFrame(() => window.scrollTo(0, 0));
            }
        });
    }
})();
