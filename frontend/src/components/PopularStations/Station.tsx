import { Link } from "react-router-dom";
import {  StationJourneys } from "../../types";

interface Props {
  station: StationJourneys;
}

const Station = ({ station }: Props) => {
  return (
    <tr className="Station-row">
      <td>
        <Link to={`/stations/${station.id}`}>
          {station.name}
        </Link>
      </td>
      <td>{station.osoite}</td>
      <td>{station.kaupunki}</td>
      <td>{station.n_journeys}</td>
    </tr>
  );
}

export default Station;