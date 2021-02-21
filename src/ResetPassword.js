import React from 'react';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import Error from './Error';
import validation from './services/validation';
import api from './api';
import './ResetPassword.css';

class ResetPassword extends React.Component {
  resetPassword = async (evt) => {
    evt.preventDefault();

    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;

    const password = evt.target.password.value;
    const repeat_password = evt.target.repeat_password.value;

    const user = { password, repeat_password };

    const { history } = this.props;

    const validPassword = validation.validPassword(user, evt);

    if (validPassword) {
      await api.changeUserPassword(password)
      history.push('/home');
    };

  }

  render() {
    return (
      <form
        className='reset-password'
        onSubmit={this.resetPassword}
      >
        <h3>RESET PASSWORD</h3>
        <label htmlFor='password'>Password</label>
        <input
          type='text' required
          name='password' id='password'
        />
        <label htmlFor='password'>Repeat Password</label>
        <input
          type='text' required
          name='repeat_password' id='repeat_password'
        />
        <button type='submit'>Reset</button>
      </form>
    );
  };
};

export default ResetPassword;