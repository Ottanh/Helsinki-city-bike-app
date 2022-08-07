import axios from "axios";
import { useEffect, useState } from "react";
import { JourneyInterface } from "../../types";
import Journey from "./Journey";

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
      <article className="Main-content">
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
          <tbody>
            {journeys.map((journey: JourneyInterface) => (
              <Journey key={journey.id} journey={journey} />
            ))}
          </tbody>
        </table>
      </article>
      <div className="Page-controls">
        <button onClick={previous}>prev</button>
        <span className="Page-count">{page}</span>
        <button onClick={next}>next</button>
      </div>
    </>
  );
}

export default JourneyList;