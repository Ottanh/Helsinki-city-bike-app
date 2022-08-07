import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <NavLink 
        className={({ isActive }) =>
          isActive ? 'Journey-link-active' : 'Journey-link'
        } 
        to="/journeys" 
      >
        Journeys
      </NavLink>
      <NavLink className={({ isActive }) =>
          isActive ? 'Station-link-active' : 'Station-link'
        } 
        to="/stations" 
      >
        Stations
      </NavLink>
    </div>
  );
}


export default Menu;