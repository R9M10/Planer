/*
 * Planer v31 — Stockfish 18.0.8 lite single-threaded worker.
 *
 * app.js creates:
 *
 *   stockfish-worker.js?v=31#<encoded WASM URL>
 *
 * IMPORTANT:
 * The Stockfish 18 loader uses the FIRST hash component as the WASM URL.
 * Do NOT append ",worker" here. In Stockfish 18 that second hash component
 * activates a special internal branch and skips the normal UCI engine
 * initialization for this wrapper.
 *
 * Stockfish.js / Stockfish: GPL-3.0
 */

importScripts(
    "https://unpkg.com/stockfish@18.0.8/bin/stockfish-18-lite-single.js"
);
