import { render, screen } from '@testing-library/react';
import Error from './Error';

test('renders error', () => {
  render(<Error error='Error'/>);
  const error = screen.getByText('Error');
  expect(error).toBeInTheDocument();
});
