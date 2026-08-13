/*
 * Stockfish 18.0.8 lite single-threaded worker loader.
 *
 * app.js launches this worker as:
 *
 *   stockfish-worker.js#<encoded WASM URL>,worker
 *
 * Stockfish.js itself reads that hash and loads the supplied WASM URL.
 * This is the engine's own worker loading mechanism and avoids the old
 * broken inference of "stockfish-worker.wasm".
 *
 * Stockfish.js / Stockfish: GPL-3.0
 */

importScripts(
    "https://unpkg.com/stockfish@18.0.8/bin/stockfish-18-lite-single.js"
);
