import { StationJourneys } from "../../types";
import Station from "./Station";
import './PopularStations.css';

interface Props {
  stations: StationJourneys[];
}

const PopularStations = ({ stations }: Props) => {
  return (
    <table className="Popular-stations-table">
      <thead>
        <tr className="Header-row">
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Journeys</th>
        </tr>
      </thead>
      <tbody>
        {stations.map((station: StationJourneys) => (
          <Station key={station.id} station={station} />
        ))}
      </tbody>
    </table>
  );
}

export default PopularStations;