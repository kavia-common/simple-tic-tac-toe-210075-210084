import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ocean Tic Tac Toe title and New Game button', () => {
  render(<App />);
  expect(screen.getByText(/Ocean Tic Tac Toe/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /New Game/i })).toBeInTheDocument();
  expect(screen.getByRole('application', { name: /Tic Tac Toe Game/i })).toBeInTheDocument();
});

test('renders 9 squares for the board', () => {
  render(<App />);
  const squares = screen.getAllByRole('button');
  // includes New Game + View Audit Log buttons; ensure at least 11 buttons total (9 squares + 2 controls)
  expect(squares.length).toBeGreaterThanOrEqual(11);
});
