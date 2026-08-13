/*
 * Planer v30 — Stockfish 18.0.8 lite single-threaded worker.
 *
 * IMPORTANT:
 * app.js creates this worker as
 *
 *   stockfish-worker.js?v=30#<encoded WASM URL>,worker
 *
 * The QUERY (?v=30) is intentional cache-busting.
 * The HASH is intentionally preserved because Stockfish.js itself reads:
 *
 *   self.location.hash.substr(1).split(",")
 *
 * and uses the first value as the WASM URL when the second value is "worker".
 *
 * Stockfish.js / Stockfish: GPL-3.0
 */

importScripts(
    "https://unpkg.com/stockfish@18.0.8/bin/stockfish-18-lite-single.js"
);
