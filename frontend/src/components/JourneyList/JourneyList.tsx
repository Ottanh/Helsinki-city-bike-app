import axios from "axios";
import { useEffect, useState } from "react";
import { Journey as JourneyType } from "../../types";
import Journey from "../Journey/Journey";
import './JourneyList.css';


const JourneyList = () => {
  const [journeys, setJourneys] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/journey?page=${page}&size=10`)
      .then((res => {
        setJourneys(res.data);
      }))
  },[page])

  const previous = () => {
    if(page > 0) {
      setPage(page - 1);
    }
  }

  const next = () => {
    setPage(page + 1);
  }

  return (
    <>
      <table className="Journey-list">
        <thead>
          <tr className="Header-row">
            <th>ID</th>
            <th>Departure</th>
            <th>Departure station</th>
            <th>Return</th>
            <th>Return station</th>
            <th>Covered distance</th>
            <th>Duration</th>
          </tr>
        </thead>
        {journeys.map((journey: JourneyType) => (
          <Journey key={journey.id} journey={journey} />
        ))}
      </table>
      <div className="Page-controls">
        <button onClick={previous}>prev</button>
        <span className="Page-count">{page}</span>
        <button onClick={next}>next</button>
      </div>
    </>
  );
}

export default JourneyList;