# Ocean Tic Tac Toe (Frontend-Only)

A modern, responsive Tic Tac Toe game built with React and vanilla CSS, themed with the Ocean Professional palette.

## Features

- 3x3 board, two local players (X and O), alternate turns
- Winner and draw detection
- Prevents invalid moves and plays after game end
- New Game reset control
- Responsive, centered layout for mobile and desktop
- Ocean Professional theme (blue accents, subtle shadows, rounded corners)
- Lightweight client-side audit-like log (timestamped) in console

## Scripts

- `npm start` - Start dev server at http://localhost:3000
- `npm test` - CRA test runner
- `npm run build` - Production build

## Audit Log

A lightweight audit-style log records:
- GAME_START, MOVE, INVALID_MOVE, RESET, GAME_END

Use the "View Audit Log" button to print the current in-memory log to the console.

## Accessibility

- Squares are real buttons with aria labels
- Status has role="status" and aria-live
- Focus-visible styles for keyboard users

## Code Map

- `src/App.js` - App shell, game wiring
- `src/components/Board.js` - 3x3 grid
- `src/components/Square.js` - board tile
- `src/components/StatusBar.js` - status indicator
- `src/hooks/useTicTacToe.js` - game state and actions
- `src/utils/game.js` - pure utilities for winner, draw, and guards
- `src/utils/audit.js` - in-memory audit-like logger
- `src/App.css` - theme and layout styles
