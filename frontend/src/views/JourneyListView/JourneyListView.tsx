import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import JourneyList from "../../components/JourneyList/JourneyList";
import Loading from "../../components/Loading/Loading";
import PageControls from "../../components/PageControls/PageControls";
import { JourneyInterface } from "../../types";

const JourneyListView = () => {
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

  if(error){
    return <Error error={error} />;
  }

  if(!journeys || journeys.length === 0){
    return <Loading />;
  }

  return (
    <>
      <JourneyList journeys={journeys} />
      <PageControls page={page} setPage={setPage} />
    </>
  );
}

export default JourneyListView;