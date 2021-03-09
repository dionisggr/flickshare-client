import React from 'react';
import { JWT_SECRET } from '../../config';
import jwt from 'jsonwebtoken';
import ListPreview from '../List/ListPreview';
import Error from '../../error-handlers/Error';
import api from '../../services/api';
import './Suggestions.css';

class Suggestions extends React.Component {
  static defaultProps = { user_id: null };

  state = { suggestions: [] };

  componentDidMount() {
    const user_id = parseInt(this.props.user_id);

    if (user_id) {
      api.getUserSuggestions(user_id)
      .then(suggestions => {
        this.setState({ suggestions });
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
    
    if (!decoded) {
      return <Error message='Unauthorized request.' />
    };
    
    const username = decoded.username[0].toUpperCase() + decoded.username.slice(1);
    
    const { suggestions } = this.state;
    const { history } = this.props;
      
    return (
      <div className='suggestions'>
        <h3>{username}'s Suggestions</h3>
        <div className='suggestion-list'>
          {
            suggestions.map(list =>  
              <ListPreview
                key={list.list_id}
                list={list}
              />
            )
          }
        </div>
        <button
          type='button'
          onClick={() => history.push('/home')}
        >
          Back
        </button>
      </div>
    );
  };
};

export default Suggestions;