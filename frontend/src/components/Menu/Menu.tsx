import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <Link className="Journey-link" to="/journeys" >Journeys</Link>
      <Link className="Station-link" to="/stations" >Stations</Link>
    </div>
  );
}


export default Menu;