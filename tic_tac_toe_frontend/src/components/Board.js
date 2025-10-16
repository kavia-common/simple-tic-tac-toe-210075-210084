import React from 'react';
import { Square } from './Square';

/**
// ============================================================================
// COMPONENT: Board
// ============================================================================
// Purpose: Render a 3x3 grid of Square components and route clicks upward.
// GxP: Input validation is enforced in hook; this renders UI consistently.
// ============================================================================
*/

/**
// PUBLIC_INTERFACE
 * Board component
 * @param {{ squares: Array<string|null>, onPlay: (index:number)=>void, disabled: boolean, currentPlayer: 'X'|'O' }} props
 * squares - 9-length array of current board values
 * onPlay - handler for cell clicks with index
 * disabled - prevent all moves when true (e.g., after game end)
 * currentPlayer - used for aria description on the board
 */
export function Board({ squares, onPlay, disabled, currentPlayer }) {
  return (
    <div
      className="board"
      role="grid"
      aria-label="Tic Tac Toe Board"
      aria-describedby="turn-indicator"
      data-current-player={currentPlayer}
    >
      {squares.map((val, idx) => (
        <Square
          key={idx}
          value={val}
          index={idx}
          disabled={disabled || Boolean(val)}
          onClick={() => onPlay(idx)}
        />
      ))}
    </div>
  );
}
