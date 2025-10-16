import React from 'react';

/**
// ============================================================================
// COMPONENT: StatusBar
// ============================================================================
// Purpose: Show current turn, winner, or draw with subtle styling.
// ============================================================================
*/

/**
// PUBLIC_INTERFACE
 * StatusBar component
 * @param {{ status: string, gameActive: boolean, winner: 'X'|'O'|null, isDraw: boolean }} props
 * status - human-readable status text
 * gameActive - whether game is active
 * winner - winner if any
 * isDraw - true if draw
 */
export function StatusBar({ status, gameActive, winner, isDraw }) {
  const icon = winner ? '🏆' : isDraw ? '🤝' : '🎮';
  const tone =
    winner ? 'success' : isDraw ? 'secondary' : 'primary';

  return (
    <div className="status" id="turn-indicator" data-tone={tone} role="status" aria-live="polite">
      <span aria-hidden>{icon}</span>
      <span>{status}</span>
      {!gameActive && !winner && !isDraw ? <em> (inactive)</em> : null}
    </div>
  );
}
