import axios from "axios";
import { useEffect, useState } from "react";
import { StationInterface } from "../../types";
import { useParams } from "react-router-dom";
import ErrorView from "../../components/ErrorView/ErrorView";
import Loading from "../../components/Loading/Loading";
import StationMap from "../../components/StationMap/StationMap";
import StationStats from "../../components/StationStats/StationStats";
import './SingleStationView.css';


const SingleStationView = () => {
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
    <section className="Main-content" >
      <div className="Single-station">
        <div className="Upper-row">
          <StationStats station={station}/>
          <StationMap mapURL={mapURL} />
        </div>
        <div className="Bottom-row">
          <div className="Starts">
          </div>
          <div className="Ends">
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleStationView;