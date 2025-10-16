//
// ============================================================================
// GAME UTILS
// ============================================================================
// Purpose: Provide pure, testable functions for Tic Tac Toe game logic.
// These functions have no side effects and can be unit-tested easily.
// ============================================================================

/**
// PUBLIC_INTERFACE
 * calculateWinner
 * Determine if there is a winner for the given 3x3 board.
 * @param {Array<string|null>} board - Array of 9: 'X' | 'O' | null
 * @returns {'X'|'O'|null} - Winner symbol or null if no winner
 */
export function calculateWinner(board) {
  // Validation
  if (!Array.isArray(board) || board.length !== 9) return null;

  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // Rows
    [0,3,6],[1,4,7],[2,5,8], // Cols
    [0,4,8],[2,4,6]          // Diagonals
  ];

  for (const [a,b,c] of lines) {
    const va = board[a], vb = board[b], vc = board[c];
    if (va && va === vb && vb === vc) return va;
  }
  return null;
}

/**
// PUBLIC_INTERFACE
 * isDraw
 * Determine if the current board is in a draw state (no empty and no winner).
 * @param {Array<string|null>} board
 * @returns {boolean}
 */
export function isDraw(board) {
  if (!Array.isArray(board) || board.length !== 9) return false;
  if (calculateWinner(board)) return false;
  return board.every(cell => cell);
}

/**
// PUBLIC_INTERFACE
 * isValidMove
 * Check if a move is valid given the board and game state.
 * @param {Array<string|null>} board
 * @param {number} index - 0..8
 * @param {boolean} gameActive
 * @returns {boolean}
 */
export function isValidMove(board, index, gameActive) {
  if (!gameActive) return false;
  if (!Array.isArray(board) || board.length !== 9) return false;
  if (typeof index !== 'number' || index < 0 || index > 8) return false;
  return !board[index];
}
