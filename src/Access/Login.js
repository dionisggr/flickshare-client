import React from 'react';
import api from '../services/api';
import './Login.css';

class Login extends React.Component {
  static defaultProps = { userLogged: {} };

  login = async (evt) => {
    evt.preventDefault();

    const username = evt.target.username.value;
    const password = evt.target.password.value;

    const { history, userLogged, setIdleTimer } = this.props;

    const response = await api.login(username, password)
      .catch(error => console.log({ error }));
    
    if (response) {
      const { flickshareToken } = response;

      window.localStorage.setItem('flickshareToken', JSON.stringify(flickshareToken));
  
      userLogged(true);
      setIdleTimer();
  
      history.push('/home');

    } else {
      evt.target.querySelector('#error_login').style.display = 'block';
      evt.target.querySelector('#username').value = '';
      evt.target.querySelector('#password').value = '';
    };
  };

  render() {
    return (
      <form
        id='login'
        className='login'
        onSubmit={this.login}>

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
        <label
          htmlFor='login'
          id='error_login'
          className='error'
          style={{ display: 'none' }}
        >
          <p>Invalid credentials.</p>
        </label>

        <button type='submit'>Submit</button>

      </form>
    );
  };
};

export default Login;