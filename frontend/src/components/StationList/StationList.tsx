import axios from "axios";
import { useEffect, useState } from "react";
import { StationInterface } from "../../types";
import ErrorView from "../ErrorView/ErrorView";
import Loading from "../Loading/Loading";
import Station from "./Station";



const StationList = () => {
  const [stations, setStations] = useState<StationInterface[]>();
  const [page, setPage] = useState(0);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/station?page=${page}&size=10`)
      .then((res => {
        setStations(res.data);
        console.log(res.data);
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
    return(
      <ErrorView error={error} />
    )
  }

  if(!stations || stations?.length === 0){
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
        <table className="Station-list">
          <thead>
            <tr className="Header-row">
              <th>ID</th>
              <th>FID</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Operator</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((station: StationInterface) => (
              <Station key={station.id} station={station} />
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

export default StationList;