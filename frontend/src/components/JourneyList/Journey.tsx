import { Link } from "react-router-dom";
import { JourneyInterface } from "../../types";
import './Journey.css';

interface Props {
  journey: JourneyInterface
}

const Journey = ({ journey }: Props) => {
  return (
    <tr className="Journey-row">
      <td>
        <Link to={`/stations/${journey.departureStation.id}`}>
          {journey.departureStation.name}
        </Link>
      </td>
      <td>
        <Link to={`/stations/${journey.returnStation.id}`}>
          {journey.returnStation.name}
        </Link>
      </td>
      <td>{journey.coveredDistance}</td>
      <td>{journey.duration}</td>
    </tr>
  );
}

export default Journey;