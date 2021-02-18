import React from 'react';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import Error from './Error';
import api from './api';
import './Login.css';

class Login extends React.Component {
  login = async (evt) => {
    evt.preventDefault();

    const username = evt.target.username.value;
    const password = evt.target.password.value;

    const { history, userLogged, setUserLists } = this.props;

    const { flickshareToken } = await api.login(username, password)
      .catch(error => <Error message={error} />);
    
    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;
    
    const user_id = (decoded) ? decoded.user_id : null;

    const userLists = await api.getUserLists(user_id)
      .catch(error => <Error message={error} />);
    
    window.localStorage.setItem('flickshareToken', JSON.stringify(flickshareToken));

    userLogged(true);

    history.push('/home');
  }

  render() {
    return (
      <form className='login' onSubmit={this.login}>
        <h3>LOGIN</h3>
        <label htmlFor='username'>Username</label>
        <input
          type='text' required
          name='username' id='username'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='text' required
          name='password' id='password'
        />
        <button type='submit'>Submit</button>
      </form>
    );
  };
};

export default Login;