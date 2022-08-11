import { render, screen } from '@testing-library/react';
import StationStats from './StationStats';

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
    operaattor: 'testOperator',
    kapasiteet: 10,
    x: 1,
    y: 1,
    n_finished: 1,
    n_started: 2,
    avg_journey_started: 11,
    avg_journey_finished: 22,
  }


test('renders station stats', () => {
  render(
    <StationStats station={station}/>
  );

  const journeysStarted = screen.getByText('1');
  const journeysFinished = screen.getByText('2');
  const avgStarted  = screen.getByText('11 m');
  const avgFinished = screen.getByText('22 m');
  expect(journeysStarted).toBeInTheDocument();
  expect(journeysFinished).toBeInTheDocument();
  expect(avgStarted).toBeInTheDocument();
  expect(avgFinished).toBeInTheDocument();
});