import { Station as StationType } from "../../types";
import './Station.css';

interface Props {
  station: StationType
}

const Station = ({ station }: Props) => {
  return (
    <tr>
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