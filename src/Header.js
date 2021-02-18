import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import './Header.css';

class Header extends React.Component {
  static defaultProps = { loggedIn: false };

  logout = () => {
    const { userLogged } = this.props;

    userLogged(false);
    
    window.localStorage.removeItem('flickshareToken');
  };

  render() {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));
    
    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;
    
    const redirect = (decoded) ? '/home' : '/';

    const buttons = (decoded)
      ? <>
        <li><Link to={`/users/${decoded.user_id}`}>Account</Link></li>
        <li>
          <Link to='/'
            onClick={this.logout}>Logout
          </Link>
        </li>
      </>
      : <>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </>;

    return (
      <header>
        <h1><Link to={redirect}>FlickShare</Link></h1>
        <nav>
          <ul>
            {buttons}
          </ul>
        </nav>
      </header>
    )
  };
};

export default withRouter(Header);