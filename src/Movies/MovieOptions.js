import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import Error from '../error-handlers/Error';
import api from '../services/api';
import './MovieOptions.css';

class MovieOptions extends React.Component {
  static defaultProps = { list: {}, setMovies: {} };
  
  state = { lists: null, movieWasAdded: null, list: {} };

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
      .catch(error => <Error message={error} />);
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

  removeMovie = async (list_id, movie_id) => {
    api.removeMovieFromList(list_id, movie_id)
      .then((res) => window.location.reload())
      .catch(error => <Error message={error} />);
  };

  componentDidMount = async () => {
    const newState = { ...this.state };
    const { list, match } = this.props;
    const list_id = parseInt(match.params.list);

    if (!list.list_id) {
      const list = await api.getListById(list_id);

      newState.list = list;

      this.setState(newState);
    };
  };

  render() {
    const { lists, movieWasAdded } = this.state;
    let { movie, list } = this.props;
    const { movie_id } = movie;
    const list_id = (list.list_id)
      ? list.list_id
      : parseInt(this.props.match.params.list);

    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
        if (error) return null;
        return decoded;
      })
      : null;
    
    const addButton = (decoded)
      ? <button
        type='button'
        className='add'
        onClick={this.getUserLists}
      >
        +
        </button>
      : null;
    
    if (!list.list_id) {
      list = this.state.list;
    };    
    
    const removeButton = (
      decoded && list && decoded.user_id === list.user_id
    )
      ? <button
        className='remove-movie'
        onClick={() => this.removeMovie(list_id, movie_id)}
      >
        x
        </button>
      : null;

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

    const movieListOptions = (lists)
      ? <div className='movie-list-options'>
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
      : null;
    
    const moviePreviewOptions = (!lists)
      ? <div className='movie-preview-options'>
          {removeButton}
          {addButton}

          <Link to={{
            pathname: `/movies/${movie_id}`,
            movie
          }}>
            More Info
            </Link>

        </div>
      : null;
    
    return (
      <>
        { movieListOptions}
        { moviePreviewOptions}
      </>
    );
  };
};

export default withRouter(MovieOptions);