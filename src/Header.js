import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  static defaultProps = { loggedIn: false };

  logout = () => {
    const { userLogged } = this.props;

    userLogged(false);
    
    window.localStorage.removeItem('flickshareToken');
  };

  render() {
    const { loggedIn } = this.props;

    const redirect = (loggedIn) ? '/home' : '/';

    const buttons = (loggedIn)
      ? <>
        <li><Link to='/home'>Account</Link></li>
        <li>
          <Link to='/home'
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

export default Header;