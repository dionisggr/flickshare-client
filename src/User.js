import React from 'react';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import Error from './Error';
import api from './api';
import './User.css';

class User extends React.Component {
  state = { user: {} };

  deleteUser = () => {
    const { history, user: user_id } = this.props;

    api.deleteUser(user_id)
      .then(() => {
        return history.push('/');
      })
      .catch(error => <Error message={error} />)
  };

  componentDidMount = async () => {
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
    const {
      user_id, first_name, last_name, email, username
    } = this.state.user;

    const { history } = this.props;

    return (
      <div className='user'>
        <img
          src={`https://robohash.org/${username}`}
          alt={`${first_name}'s avatar`}
        />
        <div className='user-info'>
          <label><b>Username: </b>{username}</label>
          <label><b>Email: </b>{email}</label>
          <label><b>First Name: </b>{first_name}</label>
          <label><b>Last Name: </b>{last_name}</label>
        </div>
        <button 
          type='button'
          onClick={() => history.push(`/edit/users/${user_id}`)}
        >
          EDIT
        </button>
        <button 
          type='button'
          onClick={this.deleteUser}
        >
          DELETE ACCOUNT
        </button>
        <button 
          type='button'
          onClick={history.goBack}
        >
          BACK
        </button>
      </div>
    );
  };
};

export default User;