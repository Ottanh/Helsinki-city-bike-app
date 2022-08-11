import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JourneyList from './JourneyList';

const journey = {
  id: 1,
  departure: new Date().toDateString(),
  return: new Date().toDateString(),
  departureStation: {
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
    avg_journey_finished: 10
  },
  returnStation: {
    id: 2,
    fid: 2,
    nimi: 'station2',
    namn: 'station2',
    name: 'station2',
    osoite: 'address2',
    address: 'address2',
    kaupunki: 'city2',
    stad: 'city2',
    operaattor: null,
    kapasiteet: 10,
    x: 2,
    y: 2,
    n_finished: 10,
    n_started: 10,
    avg_journey_started: 10,
    avg_journey_finished: 10
  },
  coveredDistance: 111,
  duration: 222
}

test('renders headers', () => {
  render(
    <MemoryRouter>
      <JourneyList journeys={[journey]} />
    </MemoryRouter>
  );

  const departureStation = screen.getByText('Departure station');
  const returnStation = screen.getByText('Return station');
  const coveredDistance = screen.getByText('Covered distance');
  const duration = screen.getByText('Duration');
  expect(departureStation).toBeInTheDocument();
  expect(returnStation).toBeInTheDocument();
  expect(coveredDistance).toBeInTheDocument();
  expect(duration).toBeInTheDocument();
});

test('renders journey', () => {
  render(
    <MemoryRouter>
      <JourneyList journeys={[journey]} />
    </MemoryRouter>
  );

  const departureStation = screen.getByText('station1');
  const returnStation = screen.getByText('station2');
  const coveredDistance = screen.getByText('111');
  const duration = screen.getByText('222');
  expect(departureStation).toBeInTheDocument();
  expect(returnStation).toBeInTheDocument();
  expect(coveredDistance).toBeInTheDocument();
  expect(duration).toBeInTheDocument();
});
