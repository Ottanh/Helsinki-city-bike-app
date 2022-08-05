import { StationInterface } from "../../types";
import './Station.css';

interface Props {
  station: StationInterface
}

const Station = ({ station }: Props) => {
  return (
    <tr className="Station-row">
      <td>{station.id}</td>
      <td>{station.fid}</td>
      <td>{station.name}</td>
      <td>{station.osoite}</td>
      <td>{station.kaupunki}</td>
      <td>{station.operaattor}</td>
    </tr>
  );
}

export default Station;