/*
 * Stockfish 18 loader for the browser.
 *
 * The local worker wrapper lets GitHub Pages create a same-origin Worker,
 * while the pinned Stockfish.js build and its WASM binary are fetched
 * from UNPKG at runtime.
 *
 * Stockfish.js: GPL-3.0
 * https://github.com/nmrugg/stockfish.js
 */

self.Module = {
    locateFile(path) {
        if (
            String(path).endsWith(".wasm")
        ) {
            return "https://unpkg.com/stockfish@18.0.8/bin/stockfish-18-lite-single.wasm";
        }

        return path;
    }
};

importScripts(
    "https://unpkg.com/stockfish@18.0.8/bin/stockfish-18-lite-single.js"
);
