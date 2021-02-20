import React from 'react';
import { Link } from 'react-router-dom';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import Error from './Error';
import api from './api';
import './MovieOptions.css';

class MovieOptions extends React.Component {
  state = { lists: null, movieWasAdded: null };

  getUserLists = () => {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;
    
    const user_id = (decoded) ? decoded.user_id : null;

    api.getUserLists(user_id)
      .then(lists => {
        return this.setState({ lists });
      })
      .catch(error => <Error message={error}/>)
  };

  addToList = (list_id, movie) => {
    api.addMovieToList(list_id, movie)
      .then(() => {
        const newState = { ...this.state };

        newState.lists = null;
        newState.movieWasAdded = true;

        return this.setState(newState);
      })
      .catch(() => {
        const newState = { ...this.state };
        
        newState.movieWasAdded = false;

        this.setState(newState);
      });
  };

  render() {
    const { lists, movieWasAdded } = this.state;
    const { movie } = this.props;
    const { movie_id } = movie;

    if (movieWasAdded !== null) {
      setTimeout(() => {
        const newState = { ...this.state };
        newState.movieWasAdded = null;
        this.setState(newState);
      }, 1500)

      return (
        <div className='movie-added'>
          {
            (movieWasAdded)
              ? < h4 > Movie added.</h4>
              : < h4 > Already on list!</h4>
          }
        </div>
      );
    };

    if (lists) {
      return (
        <div className='movie-list-options'>
          <label>Lists</label>
          <ul>
            {
              lists.map((list, idx) =>
                <li key={idx}>
                  <button
                    type='button'
                    onClick={() => this.addToList(list.list_id, movie)}
                  >
                    {list.name}
                  </button>
                </li>
              )
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div className='movie-preview-options'>
          <button
            type='button'
            className='add'
            onClick={this.getUserLists}
          >
            +
          </button>
  
          <Link to={{
            pathname: `/movies/${movie_id}`,
            movie
          }}>
            More Info
          </Link>
        </div>
      );
    };
  };
};

export default MovieOptions;