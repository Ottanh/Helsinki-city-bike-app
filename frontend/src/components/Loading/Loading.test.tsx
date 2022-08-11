import { render, screen } from '@testing-library/react';
import Loading from './Loading';


test('renders loading animation', () => {
  render(<Loading />);
  const loading = screen.getByTestId('triangle-loading');
  expect(loading).toBeInTheDocument();
});
