(() => {
    "use strict";

    const $ = id => document.getElementById(id);

    // ==================================================
    // V67 — SESSION FLIP RESTORE
    // Front remains the quiet clock from v65.
    // A tap on that front is forwarded to the original
    // universe canvas click handler, which owns the native
    // "show back" state. Stopping propagation is essential:
    // otherwise sessionCard's native handler would close
    // the back again during the same click.
    // ==================================================

    const sessionFront = $("sessionFront");
    const universeCanvas = $("universeCanvas");

    if (sessionFront && universeCanvas) {
        sessionFront.addEventListener(
            "click",
            event => {
                if (!document.documentElement.classList.contains("v65-focus-mode")) {
                    return;
                }

                if (event.target.closest?.("button")) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

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