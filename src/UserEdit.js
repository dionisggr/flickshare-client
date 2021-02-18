import React from 'react';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import Error from './Error';
import api from './api';
import './UserEdit.css';

class UserEdit extends React.Component {
  state = { user: {} };

  changeValue = (evt, property) => {
    const newState = { ...this.state };
    const value = evt.target.value;

    newState.user[property] = value;
    this.setState(newState);
  };

  editUser = (evt) => {
    evt.preventDefault();

    const { user_id } = this.state.user;
    const { history } = this.props;

    const values = {
      first_name: evt.target.first_name.value,
      last_name: evt.target.last_name.value,
      username: evt.target.username.value,
      email: evt.target.email.value
    };

    api.editUser(user_id, values)
      .then(user => {
        this.setState({ user });
        history.push(`/users/${user_id}`);
      })
      .catch(error => <Error message={error} />);
  };

  componentDidMount () {
    window.scroll(0, 0);
    
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;

    if (!decoded) return <Error message='Unauthorized access' />;

    const { user_id } = this.props;

    api.getUserInfo(user_id)
      .then(user => {
        this.setState({ user });
      })
      .catch(error => <Error message={error} />)
  };

  render() {
    const { first_name, last_name, username, email } = this.state.user;

    return (
      <form
        className='user-edit'
        autoComplete='off'
        onSubmit={this.editUser}
      >
        <h3>MY ACCOUNT</h3>

        <img src='' alt='' />

        <label htmlFor='first_name'>First Name:</label>
        <input
          type='text' name='first_name'
          id='first_name' value={first_name}
          onChange={(evt) => this.changeValue(evt, 'first_name')}
        />

        <label htmlFor='last_name'>Last Name:</label>
        <input
          type='text' name='last_name'
          id='last_name' value={last_name}
          onChange={(evt) => this.changeValue(evt, 'last_name')}
        />

        <label htmlFor='email'>E-mail:</label>
        <input
          type='text' name='email'
          id='email' value={email}
          onChange={(evt) => this.changeValue(evt, 'email')}
        />

        <label htmlFor='username'>Username:</label>
        <input
          type='text' name='username'
          id='username' value={username}
          onChange={(evt) => this.changeValue(evt, 'username')}
        />
      
        <button type='submit'>Submit</button>
      </form>
    );
  };
};

export default UserEdit;