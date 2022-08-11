import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";


test('renders menu', () => {
  render(
    <MemoryRouter>
      <Menu/>
    </MemoryRouter>
  );

  const journeys = screen.getByText('Journeys');
  const stations = screen.getByText('Stations');
  expect(journeys).toBeInTheDocument();
  expect(stations).toBeInTheDocument();
});
