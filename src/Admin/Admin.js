import React from 'react';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import ListPreview from '../Lists/List/ListPreview';
import Error from '../error-handlers/Error';
import api from '../services/api';
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
    
    if (decoded && !decoded.admin) {
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