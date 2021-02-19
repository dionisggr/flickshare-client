import React from 'react';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import ListPreview from './ListPreview';
import Error from './Error';
import api from './api';
import './Lists.css';

class Lists extends React.Component {
  static defaultProps = { mainLists: [] };

  state = { userLists: [] };

  componentDidMount() {
    const user_id = parseInt(this.props.user_id);

    if (user_id) {
      api.getUserLists(user_id)
        .then(userLists => {
          this.setState({ userLists });
        })
        .catch(error => <Error message={error} />)
    };
  };

  render() {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) console.log(error);
          return decoded;
        })
      : null;
    
    const { mainLists } = this.props;
    const { userLists } = this.state;

    const username = (decoded)
      ? decoded.username[0].toUpperCase() + decoded.username.slice(1)
      : null;
    
    const header = (mainLists.length > 0)
      ? <h3>Top Suggestions</h3>
      : <h3>{username}'s Lists</h3>
    
    const lists = (userLists.length > 1)
      ? userLists
      : mainLists;
    
    console.log(lists);

    return (
      <div className='lists'>
        {header}
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

export default Lists;