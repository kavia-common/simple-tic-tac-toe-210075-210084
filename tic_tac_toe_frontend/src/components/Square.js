import React from 'react';

/**
// ============================================================================
// COMPONENT: Square
// ============================================================================
// Purpose: Render a single square (tile) in the Tic Tac Toe board.
// Accessibility: Button with proper aria labels and disabled states.
// ============================================================================
*/

/**
// PUBLIC_INTERFACE
 * Square component
 * A presentational, accessible button for a single grid cell.
 * @param {{ value: string|null, onClick: () => void, disabled: boolean, index: number }} props
 * value - 'X' | 'O' | null
 * onClick - click handler when valid
 * disabled - when true, prevents interaction
 * index - position 0..8 for aria labeling
 */
export function Square({ value, onClick, disabled, index }) {
  const ariaLabel = value
    ? `Square ${index + 1}, occupied by ${value}`
    : `Square ${index + 1}, empty`;

  return (
    <button
      type="button"
      className={`square${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {value || ''}
    </button>
  );
}
