import React from 'react';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import Error from '../error-handlers/Error';
import api from '../services/api';
import './User.css';

class User extends React.Component {
  static defaultProps = { user_id: null };

  state = { user: {} };

  deleteUser = async () => {
    const { history, user_id } = this.props;

    await api.deleteUser(user_id)
      .catch(error => <Error message={error} />);
    
    window.localStorage.removeItem('flickshareToken');
    
    return history.push('/');
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
      first_name, last_name, email, username
    } = this.state.user;

    const { history, user_id } = this.props;

    return (
      <div className='user'>
        <h3>User Account</h3>
        <div className='user-info'>
          <label><b>Username: </b>{username}</label>
          <label><b>Email: </b>{email}</label>
          <label><b>First Name: </b>{first_name}</label>
          <label><b>Last Name: </b>{last_name}</label>
        </div>
        <button 
          type='button'
          className='lists-button'
          onClick={() => history.push(`/users/${user_id}/lists`)}
        >
          Lists
        </button>
        <button 
          type='button'
          className='reset-password-button'
          onClick={() => history.push(`/users/${user_id}/resetpassword`)}
        >
          Reset Password
        </button>
        <button 
          type='button'
          onClick={() => history.push(`/edit/users/${user_id}`)}
        >
          Edit Account
        </button>
        <button 
          type='button'
          onClick={this.deleteUser}
        >
          Delete Account
        </button>
        <button 
          type='button'
          onClick={history.goBack}
        >
          Back
        </button>
      </div>
    );
  };
};

export default User;