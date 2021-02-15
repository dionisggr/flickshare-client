import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>FlickShare</h1>
      <nav>
        <ul>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;