import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const h = screen.getByText('HS city bike app');
  expect(h).toBeInTheDocument();
});
