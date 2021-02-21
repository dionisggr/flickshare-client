import React from 'react';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import ListPreview from './ListPreview';
import Error from './Error';
import api from './api';
import './Admin.css';

class Admin extends React.Component {
  state = { lists: [] };

  componentDidMount() {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;

    const admin = (decoded) ? decoded.admin : false;
    const user_id = (decoded) ? parseInt(decoded.user_id) : null;
      
    if (admin) {
      api.getAllLists()
        .then(lists => {
          this.setState({ lists });
        })
        .catch(error => <Error message={error} />)
    };
  };

  render() {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;
    
    if (!decoded.admin) {
      return <Error message='Unauthorized access.' />;
    };
    
    const { lists } = this.state;
     
    return (
      <div className='admin-lists'>
        <h3>All Lists</h3>
        {
          lists.map(list =>  
            <ListPreview
              key={list.list_id}
              list={list}
            />
          )
        }
      </div>
    );
  };
};

export default Admin;