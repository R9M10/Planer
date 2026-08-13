/*
 * Stockfish 18.0.8 lite single-threaded browser loader.
 *
 * Stockfish.js itself is designed to run directly as a Worker. Because this
 * app uses a small same-origin wrapper on GitHub Pages, the Emscripten build
 * otherwise resolves stockfish-18-lite-single.wasm relative to THIS wrapper
 * and fails to find it. The request rewrite below points only that WASM file
 * to the pinned package URL.
 *
 * Stockfish.js: GPL-3.0
 * https://github.com/nmrugg/stockfish.js
 */

const STOCKFISH_BASE =
    "https://unpkg.com/stockfish@18.0.8/bin/";

const STOCKFISH_JS =
    STOCKFISH_BASE
    +
    "stockfish-18-lite-single.js";

const STOCKFISH_WASM =
    STOCKFISH_BASE
    +
    "stockfish-18-lite-single.wasm";


function isStockfishWasmUrl(value) {
    return /stockfish-18-lite-single\.wasm(?:[?#].*)?$/.test(
        String(
            value
            ??
            ""
        )
    );
}


/*
 * Emscripten may use fetch() on some browsers.
 */
if (
    typeof self.fetch
    ===
    "function"
) {
    const nativeFetch =
        self.fetch.bind(
            self
        );

    self.fetch =
        function rewrittenFetch(
            input,
            init
        ) {
            const url =
                typeof input
                ===
                "string"
                    ? input
                    : input
                        &&
                        input.url;

            if (
                isStockfishWasmUrl(
                    url
                )
            ) {
                return nativeFetch(
                    STOCKFISH_WASM,
                    init
                );
            }

            return nativeFetch(
                input,
                init
            );
        };
}


/*
 * The single-threaded worker also uses synchronous XMLHttpRequest in Worker
 * contexts. Rewrite only the WASM request; all other requests are untouched.
 */
if (
    typeof self.XMLHttpRequest
    ===
    "function"
) {
    const NativeXMLHttpRequest =
        self.XMLHttpRequest;

    function RewrittenXMLHttpRequest() {
        const xhr =
            new NativeXMLHttpRequest();

        const nativeOpen =
            xhr.open;

        xhr.open =
            function rewrittenOpen(
                method,
                url,
                ...rest
            ) {
                const finalUrl =
                    isStockfishWasmUrl(
                        url
                    )
                        ? STOCKFISH_WASM
                        : url;

                return nativeOpen.call(
                    xhr,
                    method,
                    finalUrl,
                    ...rest
                );
            };

        return xhr;
    }

    RewrittenXMLHttpRequest.prototype =
        NativeXMLHttpRequest.prototype;

    self.XMLHttpRequest =
        RewrittenXMLHttpRequest;
}


importScripts(
    STOCKFISH_JS
);
