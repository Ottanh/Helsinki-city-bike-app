import { StationInterface } from "../../types"
import './StationStats.css';

interface Props {
  station: StationInterface;
}

const StationStats = ({ station }: Props) => {
  return (
    <div className="Stats">
      <h2 id="station-name">{station.name} Station</h2>
      <table className="Stats-table">
        <tbody>
          <tr className="Stats-row">
            <td>Journeys started</td>
            <td>{station.n_started}</td>
          </tr>
          <tr className="Stats-row">
            <td>Journeys finished</td>
            <td>{station.n_finished}</td>
          </tr>
          <tr className="Stats-row">
            <td>Average distance of journey starting at station</td>
            <td>{Math.round(station.avg_journey_started)} m</td>
          </tr>
          <tr className="Stats-row">
            <td>Average distance of journey ending at station</td>
            <td>{Math.round(station.avg_journey_finished)} m</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StationStats;