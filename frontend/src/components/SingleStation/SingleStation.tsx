import axios from "axios";
import { useEffect, useState } from "react";
import { StationInterface } from "../../types";
import { useParams } from "react-router-dom";
import './SingleStation.css';


const SingleStation = () => {
  const { id } = useParams();
  const [station, setStation] = useState<StationInterface>();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/station/${id}`)
      .then((res => {
        setStation(res.data);
      }))
  },[])

  const mapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCLJj8ekLBNrM1pJg5B48D8GPtUDERWlzk&q=${station?.osoite}`

  if(!station){
    return(
      <div>
        Station not found
      </div>
    )
  }

  return (
    <article className="Main-content" >
      <div className="Single-station">
        <span id="Station-name">{station.name}</span>
        <div className="Upper-row">
          <table className="Stats">
            <tr className="Stats-row">
              <td>Journeys started</td>
              <td>{station.n_starts}</td>
            </tr>
            <tr className="Stats-row">
              <td>Journeys finished</td>
              <td>{station.n_ends}</td>
            </tr>
            <tr className="Stats-row">
              <td>Average distance of jounrey ending at station</td>
              <td>todo</td>
            </tr>
            <tr className="Stats-row">
              <td>Average distance of jounrey starting at station</td>
              <td>todo</td>
            </tr>
          </table>
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