import React from 'react';
import './App.css';
import { Board } from './components/Board';
import { StatusBar } from './components/StatusBar';
import { useTicTacToe } from './hooks/useTicTacToe';
import { getAuditLog } from './utils/audit';

/**
// ============================================================================
// REQUIREMENT TRACEABILITY
// ============================================================================
// Requirement ID: REQ-TTT-001
// User Story: As two local players, we want to play Tic Tac Toe with a clear UI.
// Acceptance Criteria:
// - 3x3 clickable grid, alternate turns, winner/draw detection
// - Prevent invalid moves, reset game, responsive layout
// - Ocean Professional theme, audit log with timestamps, accessible controls
// GxP Impact: NO - Frontend-only game with lightweight audit for trace/debug.
// Risk Level: LOW
// ============================================================================ 
*/

/**
 * App: Top-level component renders status, board, and controls.
 * Ensures a centered layout and exposes an audit log helper button (for dev).
 */
function App() {
  const {
    board, currentPlayer, winner, isDraw, gameActive, handleMove, resetGame, error
  } = useTicTacToe();

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'It’s a draw!'
      : `Turn: ${currentPlayer}`;

  return (
    <div className="app-shell" role="application" aria-label="Tic Tac Toe Game">
      <div className="card" aria-live="polite">
        <div className="header">
          <div className="title">
            <span className="badge" aria-hidden>◎</span>
            <span>Ocean Tic Tac Toe</span>
          </div>
          <StatusBar
            status={statusText}
            gameActive={gameActive}
            winner={winner}
            isDraw={isDraw}
          />
        </div>

        <Board
          squares={board}
          onPlay={handleMove}
          disabled={!gameActive}
          currentPlayer={currentPlayer}
        />

        <div className="controls">
          <button
            type="button"
            className="btn"
            onClick={resetGame}
            aria-label="Reset or start a new game"
          >
            New Game
          </button>
          <button
            type="button"
            className="btn secondary"
            aria-label="Show audit log in console"
            onClick={() => {
              // Display audit log for dev/debug usage
              // Note: In prod, this remains a lightweight client trace.
              // eslint-disable-next-line no-console
              console.table(getAuditLog());
              alert('Audit log printed to console.');
            }}
          >
            View Audit Log
          </button>
          <span className="helper" role="status" aria-live="polite">
            {error || (gameActive ? 'Place your mark by tapping a square.' : 'Game ended. Start a new game.')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
