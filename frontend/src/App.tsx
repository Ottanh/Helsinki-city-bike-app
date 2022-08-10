import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from "./components/Menu/Menu";
import SingleStation from "./components/SingleStation/SingleStation";
import { FaBicycle } from 'react-icons/fa';
import StationListView from "./views/StationListView/StationListView";
import JourneyListView from "./views/JourneyListView/JourneyListView";

function App() {
  return (
    <div className="App">
      <div className="Title-and-logo">
        <FaBicycle className="Logo" size={70}/>
        <h1>HS City Bike App</h1>
      </div>
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to='/journeys' />} />
        <Route path="journeys" element={<JourneyListView />} />
        <Route path="stations" element={<StationListView />} />
        <Route path="/stations/:id" element={<SingleStation />} />
      </Routes>
    </div>
  );
}

export default App;
