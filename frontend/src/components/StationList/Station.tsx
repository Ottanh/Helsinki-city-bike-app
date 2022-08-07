import { Link } from "react-router-dom";
import { StationInterface } from "../../types";

interface Props {
  station: StationInterface
}

const Station = ({ station }: Props) => {
  return (
    <tr className="Station-row">
      <td>{station.id}</td>
      <td>{station.fid}</td>
      <td>
        <Link to={`/stations/${station.id}`}>
          {station.name}
        </Link>
      </td>
      <td>{station.osoite}</td>
      <td>{station.kaupunki}</td>
      <td>{station.operaattor}</td>
    </tr>
  );
}

export default Station;