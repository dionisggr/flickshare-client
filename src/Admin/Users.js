import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../error-handlers/Error';
import api from '../services/api';
import UserPreview from '../Users/UserPreview';
import './Users.css';

class Users extends React.Component {
  state = { users: [] };

  componentDidMount() {
    api.getAllUsers()
      .then(users => {
        this.setState({ users });
      })
      .catch(error => <Error message={error} />);
  };

  render() {

    const { users } = this.state;
    return (
      <div className='users'>
        <h3>Users</h3>
        {
          users.map((user, idx) =>
            <UserPreview
              key={idx}
              user={user}
            />
          )
        }

        <Link
          to='/admin'
          className='home-button'
        >Home</Link>
      </div>
    );
  };
};

export default Users;