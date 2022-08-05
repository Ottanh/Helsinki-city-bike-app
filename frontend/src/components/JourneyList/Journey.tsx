import { JourneyInterface } from "../../types";
import './Journey.css';

interface Props {
  journey: JourneyInterface
}

const Journey = ({ journey }: Props) => {
  return (
    <tr className="Journey-row">
      <td>{journey.id}</td>
      <td>{new Date(journey.departure).toLocaleString()}</td>
      <td>{journey.departureStation.name}</td>
      <td>{new Date(journey.return).toLocaleString()}</td>
      <td>{journey.returnStation.name}</td>
      <td>{journey.coveredDistance}</td>
      <td>{journey.duration}</td>
    </tr>
  );
}

export default Journey;