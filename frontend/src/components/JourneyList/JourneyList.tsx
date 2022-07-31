import axios from "axios";
import { useEffect, useState } from "react";
import { Journey as JourneyType } from "../../types";
import Journey from "../Journey/Journey";
import './JourneyList.css';


const JourneyList = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/journey?page=0&size=10')
      .then((res => {
        setJourneys(res.data);
      }))
  },[])


  return (
    <table className="Journey-list">
      <tr className="Header-row">
        <th>ID</th>
        <th>Departure</th>
        <th>Departure station</th>
        <th>Return</th>
        <th>Return station</th>
        <th>Covered distance</th>
        <th>Duration</th>
      </tr>
      {journeys.map((journey: JourneyType) => (
        <Journey key={journey.id} journey={journey} />
      ))}
    </table>
  );
}

export default JourneyList;