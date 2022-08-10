import axios from "axios";
import { useEffect, useState } from "react";
import ErrorView from "../../components/ErrorView/ErrorView";
import Loading from "../../components/Loading/Loading";
import PageControls from "../../components/PageControls/PageControls";
import StationList from "../../components/StationList/StationList";
import { StationInterface } from "../../types";


const StationListView = () => {
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

  if(error){
    return(
      <ErrorView error={error} />
    )
  }

  if(!stations || stations?.length === 0){
    return(
      <>
      <Loading />
      <PageControls page={page} setPage={setPage} />
    </>
    )
  }

  return (
    <StationList stations={stations}/>
  );
}

export default StationListView;