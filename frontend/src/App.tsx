import { Navigate, Route, Routes } from "react-router-dom";
import JourneyList from "./components/JourneyList/JourneyList";
import './App.css';
import StationList from "./components/StationList/StationList";
import Menu from "./components/Menu/Menu";
import SingleStation from "./components/SingleStation/SingleStation";
import { FaBicycle } from 'react-icons/fa';

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
        <Route path="journeys" element={<JourneyList />} />
        <Route path="stations" element={<StationList />} />
        <Route path="/stations/:id" element={<SingleStation />} />
      </Routes>
    </div>
  );
}

export default App;
