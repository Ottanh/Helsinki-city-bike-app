import { Journey as JourneyType } from "../../types";
import './Journey.css';

interface Props {
  journey: JourneyType
}

const Journey = ({ journey }: Props) => {
  return (
    <tr>
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