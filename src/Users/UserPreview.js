import React from 'react';
import { Link } from 'react-router-dom';
import './UserPreview.css';

class UserPreview extends React.Component {
  static defaultProps = { user: {} };

  render() {
    const { user_id, username, first_name, last_name, email } = this.props.user;

    return (
    
      <Link
        to={`/users/${user_id}`}
        className='user-preview'
      >
        <label>{username}</label>
        <label>{email}</label>
        <label>{first_name}</label>
        <label>{last_name}</label>
      </Link>
    );
  };
};

export default UserPreview;