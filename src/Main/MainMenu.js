import { JWT_SECRET } from '../config';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
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
  
  const visitorRedirect = (!user_id) ? '/signup' : null;
  
  return (
    <div className='main-menu'>
      <ul>
        <li><Link to={visitorRedirect || `/users/${user_id}/suggestions`}>Suggestions</Link></li>
        <li><Link to={visitorRedirect || `/users/${user_id}/lists`}>My Lists</Link></li>
        <li><Link to={visitorRedirect || '/movie/search'}>Search</Link></li>
      </ul>
    </div>
  );
};

export default MainMenu;