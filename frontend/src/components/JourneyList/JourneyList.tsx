import { JourneyInterface } from "../../types";
import Journey from "./Journey";

interface Props {
  journeys: JourneyInterface[]
}

const JourneyList = ({ journeys }: Props) => {
  return (
    <section className="Main-content">
      <table className="Journey-list">
        <thead>
          <tr className="Header-row">
            <th>Departure station</th>
            <th>Return station</th>
            <th>Covered distance</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {journeys.map((journey: JourneyInterface) => (
            <Journey key={journey.id} journey={journey} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default JourneyList;