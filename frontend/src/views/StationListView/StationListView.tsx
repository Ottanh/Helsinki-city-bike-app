import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import PageControls from "../../components/PageControls/PageControls";
import StationList from "../../components/StationList/StationList";
import { BACKEND_URI } from "../../config";
import { StationInterface } from "../../types";


const StationListView = () => {
  const [stations, setStations] = useState<StationInterface[]>();
  const [page, setPage] = useState(0);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    axios.get(`${BACKEND_URI}/api/station?page=${page}&size=10`)
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
      <Error error={error} />
    )
  }

  if(!stations || stations?.length === 0){
    return <Loading />;
  }

  return (
    <>
      <StationList stations={stations}/>
      <PageControls page={page} setPage={setPage} />
    </>
  );
}

export default StationListView;