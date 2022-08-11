import { render, screen } from '@testing-library/react';
import PageControls from './PageControls';
import userEvent from '@testing-library/user-event';

test('renders buttons and page number', () => {
  let page = 0;

  const setPage = (newPage: number) => {
    page = newPage;
  }

  render(<PageControls page={page} setPage={setPage} />);

  const prev = screen.getByText('prev');
  const next = screen.getByText('next');
  const pagenumber = screen.getByText('0');
  expect(prev).toBeInTheDocument();
  expect(next).toBeInTheDocument();
  expect(pagenumber).toBeInTheDocument();
});

test('changes page', async () => {
  let page = 0;

  const setPage = (newPage: number) => {
    page = newPage;
  }

  const { rerender } = render(<PageControls page={page} setPage={setPage} />);
  const prev = screen.getByText('prev');
  const next = screen.getByText('next');
  const user = userEvent.setup();

  // next page
  await user.click(next);
  rerender(<PageControls page={page} setPage={setPage} />);
  const pagenumber1 = screen.getByText('1');
  expect(pagenumber1).toBeInTheDocument();
  // previous page
  await user.click(prev);
  rerender(<PageControls page={page} setPage={setPage} />);
  const pagenumber2 = screen.getByText('0');
  expect(pagenumber2).toBeInTheDocument();
  // does not go negative
  await user.click(prev);
  rerender(<PageControls page={page} setPage={setPage} />);
  const pagenumber3 = screen.getByText('0');
  expect(pagenumber3).toBeInTheDocument();
});
