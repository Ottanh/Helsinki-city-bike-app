import { Navigate, Route, Routes } from "react-router-dom";
import JourneyList from "./components/JourneyList/JourneyList";
import './App.css';
import StationList from "./components/StationList/StationList";


function App() {
  return (
    <div className="App">
      <h1>HS city bike app</h1>
      <Routes>
        <Route path="/" element={<Navigate to='/journeys' />} />
        <Route path="journeys" element={<JourneyList />} />
        <Route path="stations" element={<StationList />} />
      </Routes>
    </div>
  );
}

export default App;
