import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {

  const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

  const decoded = (flickshareToken)
    ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
        if (error) return null;
        return decoded;
      })
    : null;

  const user_id = (decoded) ? decoded.user_id : null;
  
  return (
    <div className='main-menu'>
      <ul>
        <li><Link to={`/users/${user_id}/suggestions`}>Suggestions</Link></li>
        <li><Link to={`/users/${user_id}/lists`}>My Lists</Link></li>
        <li><Link to='/movie/search'>Search</Link></li>
      </ul>
    </div>
  );
};

export default MainMenu;