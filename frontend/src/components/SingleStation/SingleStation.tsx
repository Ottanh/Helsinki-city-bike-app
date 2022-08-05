import axios from "axios";
import { useEffect, useState } from "react";
import { Station as StationType } from "../../types";
import { useParams } from "react-router-dom";
import './SingleStation.css';


const SingleStation = () => {
  const { id } = useParams();
  const [station, setStation] = useState<StationType>();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/station/${id}`)
      .then((res => {
        setStation(res.data);
      }))
  },[])

  if(!station){
    return(
      <div>
        Station not found
      </div>
    )
  }

  return (
    <div className="Single-station">
      <h2 id="Station-name">{station.name}</h2>
      {station.osoite}
    </div>
  );
}

export default SingleStation;