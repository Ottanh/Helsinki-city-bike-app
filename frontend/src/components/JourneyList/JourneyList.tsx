import axios from "axios";
import { useEffect, useState } from "react";
import { JourneyInterface } from "../../types";
import ErrorView from "../ErrorView/ErrorView";
import Loading from "../Loading/Loading";
import Journey from "./Journey";

const JourneyList = () => {
  const [journeys, setJourneys] = useState<JourneyInterface[]>();
  const [page, setPage] = useState(0);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/journey?page=${page}&size=10`)
      .then((res => {
        setJourneys(res.data);
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
  },[page])

  const previous = () => {
    if(page > 0) {
      setPage(page - 1);
    }
  }

  const next = () => {
    setPage(page + 1);
  }

  if(error){
    return <ErrorView error={error} />;
  }

  if(!journeys || journeys.length === 0){
    return(
      <>
      <Loading />
      <div className="Page-controls">
        <button onClick={previous}>prev</button>
        <span className="Page-count">{page}</span>
        <button onClick={next}>next</button>
      </div>
      </>
    )
  }

  return (
    <>
      <article className="Main-content">
        <table className="Journey-list">
          <thead>
            <tr className="Header-row">
              <th>Departure station</th>
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