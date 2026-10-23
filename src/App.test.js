import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Hi, My Name is Hashir/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /My Projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /Tech I Work With/i })).toBeInTheDocument();
});
