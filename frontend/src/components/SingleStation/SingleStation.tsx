import axios from "axios";
import { useEffect, useState } from "react";
import { StationInterface } from "../../types";
import { useParams } from "react-router-dom";
import './SingleStation.css';
import ErrorView from "../ErrorView/ErrorView";
import Loading from "../Loading/Loading";


const SingleStation = () => {
  const { id } = useParams();
  const [station, setStation] = useState<StationInterface>();
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/station/${id}`)
      .then((res => {
        setStation(res.data);
      }))
      .catch((error) => {
        if (error.response) {
          setError(error.response.status)
        } else if (error.request) {
          setError('No response received')
        } else {
          setError('An error happened')
        }
      });
  },[])

  const mapURL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=${station?.osoite}`

  if(error){
    return <ErrorView error={error} />;
    
  }

  if(!station){
    return <Loading />;
  }

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
          <div className="Map">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0" 
              style={{border:0}}
              referrerPolicy="no-referrer-when-downgrade"
              src={mapURL}
              allowFullScreen>
            </iframe>
          </div>
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