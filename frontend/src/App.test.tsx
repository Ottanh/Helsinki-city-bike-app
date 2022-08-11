import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders header', () => {
  render(
    <MemoryRouter >
      <App />
    </MemoryRouter>
  );
  const header = screen.getByText('HS City Bike App');
  expect(header).toBeInTheDocument();
});
