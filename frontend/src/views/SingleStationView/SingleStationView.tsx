import axios from "axios";
import { useEffect, useState } from "react";
import { StationInterface, StationJourneys } from "../../types";
import { useParams } from "react-router-dom";
import ErrorView from "../../components/ErrorView/ErrorView";
import Loading from "../../components/Loading/Loading";
import StationMap from "../../components/StationMap/StationMap";
import StationStats from "../../components/StationStats/StationStats";
import './SingleStationView.css';
import PopularStations from "../../components/PopularStations/PopularStations";


const SingleStationView = () => {
  const { id } = useParams();
  const [station, setStation] = useState<StationInterface>();
  const [departureStations, setDepartureStations] = useState<StationJourneys[]>([]);
  const [returnStations, setReturnStations] = useState<StationJourneys[]>([]);
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
    axios.get(`http://localhost:3001/api/station/${id}/pop_departure`)
      .then((res => {
        setDepartureStations(res.data);
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
      axios.get(`http://localhost:3001/api/station/${id}/pop_return`)
      .then((res => {
        setReturnStations(res.data);
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
          <section className="Popular-stations">
            <h3 id="pop-station-header">Most popular departure stations ending in {station.name}</h3>
            <PopularStations stations={departureStations} />
          </section>
          <section className="Popular-stations">
            <h3 id="pop-station-header">Most popular return stations starting from {station.name}</h3>
            <PopularStations stations={returnStations} />
          </section>
        </div>
      </div>
    </section>
  );
}

export default SingleStationView;