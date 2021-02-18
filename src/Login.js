import React from 'react';
import Error from './Error';
import api from './api';
import './Login.css';

class Login extends React.Component {
  login = (evt) => {
    evt.preventDefault();

    const username = evt.target.username.value;
    const password = evt.target.password.value;

    const { history, userLogged } = this.props;

    api.login(username, password)
      .then(({ flickshareToken }) => {
        window.localStorage.setItem('flickshareToken', JSON.stringify(flickshareToken));

        userLogged(true);

        history.push('/home');
      })
      .catch(error => <Error message={error} />)
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