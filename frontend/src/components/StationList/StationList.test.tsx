import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StationList from './StationList';

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
    n_finished: 10,
    n_started: 10,
    avg_journey_started: 10,
    avg_journey_finished: 10,
  }


test('renders headers', () => {
  render(
    <MemoryRouter>
      <StationList stations={[station]}/>
    </MemoryRouter>
  );

  const name = screen.getByText('Name');
  const address = screen.getByText('Address');
  const city = screen.getByText('City');
  const operator = screen.getByText('Operator');
  expect(name).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(operator).toBeInTheDocument();
});

test('renders station', () => {
  render(
    <MemoryRouter>
      <StationList stations={[station]}/>
    </MemoryRouter>
  );

  const name = screen.getByText('station1');
  const address = screen.getByText('address1');
  const city = screen.getByText('city1');
  const operator = screen.getByText('testOperator');
  expect(name).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(operator).toBeInTheDocument();
});
