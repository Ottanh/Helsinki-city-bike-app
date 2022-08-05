import axios from "axios";
import { useEffect, useState } from "react";
import { StationInterface } from "../../types";
import Station from "./Station";


const StationList = () => {
  const [stations, setStations] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/station?page=${page}&size=10`)
      .then((res => {
        setStations(res.data);
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
        {stations.map((station: StationInterface) => (
          <Station key={station.id} station={station} />
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

export default StationList;