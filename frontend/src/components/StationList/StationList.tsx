import { StationInterface } from "../../types";
import Station from "./Station";


interface Props {
  stations: StationInterface[];
}

const StationList = ({ stations }: Props) => {
  return (
      <section className="Main-content">
        <table className="Station-list">
          <thead>
            <tr className="Header-row">
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Operator</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((station: StationInterface) => (
              <Station key={station.id} station={station} />
            ))}
          </tbody>
        </table>
      </section>
  );
}



export default StationList;