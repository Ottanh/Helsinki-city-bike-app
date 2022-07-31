import { Navigate, Route, Routes } from "react-router-dom";
import JourneyList from "./components/JourneyList/JourneyList";
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>HS city bike app</h1>
      <Routes>
        <Route path="/" element={<Navigate to='/journeys' />} />
        <Route path="journeys" element={<JourneyList />} />
      </Routes>
    </div>
  );
}

export default App;
