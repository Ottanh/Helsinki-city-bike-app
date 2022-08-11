import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PopularStations from './PopularStations';

const station = {
    id: 1,
    fid: 1,
    nimi: 'station1',
    namn: 'station1',
    name: 'station1',
    osoite: 'address1',
    address: 'address1',
    kaupunki: 'city1',
    stad: 'city1',
    operaattor: null,
    kapasiteet: 10,
    x: 1,
    y: 1,
    n_finished: 10,
    n_started: 10,
    avg_journey_started: 10,
    avg_journey_finished: 10,
    n_journeys: 100
  }


test('renders headers', () => {
  render(
    <MemoryRouter>
      <PopularStations stations={[station]}/>
    </MemoryRouter>
  );

  const name = screen.getByText('Name');
  const address = screen.getByText('Address');
  const city = screen.getByText('City');
  const journeys = screen.getByText('Journeys');
  expect(name).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(journeys).toBeInTheDocument();
});

test('renders journey', () => {
  render(
    <MemoryRouter>
      <PopularStations stations={[station]}/>
    </MemoryRouter>
  );

  const name = screen.getByText('station1');
  const address = screen.getByText('address1');
  const city = screen.getByText('city1');
  const journeys = screen.getByText('100');
  expect(name).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(journeys).toBeInTheDocument();
});
