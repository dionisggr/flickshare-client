import React from 'react';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import validation from '../services/validation';
import api from '../services/api';
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
    
    const user_id = (decoded) ? parseInt(decoded.user_id) : null;

    const { history } = this.props;

    const password = evt.target.password.value;
    const repeat_password = evt.target.repeat_password.value;

    const user = { password, repeat_password };
    
    const validPassword = validation.validPassword(user, evt);
    
    if (validPassword) {
      await api.changeUserPassword(user_id, password)
        .catch(error => console.log(error));

      history.push(`/users/${user_id}`);
    };
  }

  render() {
    return (
      <form
        className='reset-password'
        onSubmit={this.resetPassword}
      >
        <h3>RESET PASSWORD</h3>

        <label htmlFor='password'>New Password</label>

        <input
          type='password' required
          name='password' id='password'
        />
        <label
          htmlFor='password'
          id='error_password'
          className='error'
          style={{ display: 'none' }}
        >
          <p>Password must be at least 8 charaters.</p>
          <p>Password must not contain spaces.</p>
          <p>Password must contain at least 1 Uppercase.</p>
          <p>Password must contain at least 1 number.</p>
        </label>

        <label htmlFor='password'>Repeat Password</label>
        <label
          htmlFor='password'
          id='error_repeat_password'
          className='error'
          style={{ display: 'none' }}
        >
          <p>Passwords must match.</p>
        </label>

        <input
          type='password' required
          name='repeat_password' id='repeat_password'
        />

        <button type='submit'>Reset</button>

      </form>
    );
  };
};

export default ResetPassword;