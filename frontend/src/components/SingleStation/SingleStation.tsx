import { StationInterface } from '../../types';
import StationMap from '../StationMap/StationMap';
import './SingleStation.css';

interface Props {
  station: StationInterface
  mapURL: string
}

const SingleStation = ({ station, mapURL }: Props) => {
  return (
    <article className="Main-content" >
      <div className="Single-station">
        <div className="Upper-row">
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
          <StationMap mapURL={mapURL} />
        </div>
        <div className="Bottom-row">
          <div className="Starts">
          </div>
          <div className="Ends">
          </div>
        </div>
      </div>
    </article>
  );
}

export default SingleStation;