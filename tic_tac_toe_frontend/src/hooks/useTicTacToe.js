import { useEffect, useMemo, useState } from 'react';
import { calculateWinner, isDraw as detectDraw, isValidMove } from '../utils/game';
import { logEvent } from '../utils/audit';

/**
// ============================================================================
// HOOK: useTicTacToe
// ============================================================================
// Purpose: Centralize Tic Tac Toe state and behavior.
// State: board[9], currentPlayer, winner, isDraw, gameActive, error
// Behavior: handleMove(index), resetGame()
// Audit: Logs game start, move, invalid move, end, and reset.
// ============================================================================
*/

/**
// PUBLIC_INTERFACE
 * useTicTacToe
 * @returns {{
 *  board: Array<string|null>,
 *  currentPlayer: 'X'|'O',
 *  winner: 'X'|'O'|null,
 *  isDraw: boolean,
 *  gameActive: boolean,
 *  error: string|null,
 *  handleMove: (index:number)=>void,
 *  resetGame: ()=>void
 * }}
 */
export function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [error, setError] = useState(null);

  const winner = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(() => detectDraw(board), [board]);
  const gameActive = !winner && !isDraw;

  // On mount, log game start
  useEffect(() => {
    logEvent('GAME_START', { board: board.slice(), currentPlayer });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On winner/draw change, log game end
  useEffect(() => {
    if (winner) {
      logEvent('GAME_END', { result: 'WIN', winner });
    } else if (isDraw) {
      logEvent('GAME_END', { result: 'DRAW' });
    }
  }, [winner, isDraw]);

  // PUBLIC_INTERFACE
  function handleMove(index) {
    setError(null);
    if (!isValidMove(board, index, gameActive)) {
      setError('Invalid move. That square cannot be played.');
      logEvent('INVALID_MOVE', { index, board: board.slice(), currentPlayer, gameActive });
      return;
    }

    setBoard(prev => {
      const next = prev.slice();
      next[index] = currentPlayer;
      return next;
    });

    logEvent('MOVE', { index, player: currentPlayer });

    setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
  }

  // PUBLIC_INTERFACE
  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setError(null);
    logEvent('RESET', {});
    logEvent('GAME_START', { board: Array(9).fill(null), currentPlayer: 'X' });
  }

  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    gameActive,
    error,
    handleMove,
    resetGame
  };
}
