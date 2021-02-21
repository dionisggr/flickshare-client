import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import MoviePreview from './MoviePreview';
import MovieService from './services/movie-service';
import Error from './Error';
import './List.css';

import React, { Component } from 'react';
import api from './api';

class ListPreview extends Component {
  static defaultProps = {
    list: { movies: [] }
  };

  state = { list: { movies: [] } };

  getSuggestions = async (list) => {
    const { history } = this.props;

    const data = (await api.getMoviesSuggestions(list.movies))
      .reduce((total, each) => total.concat(each.results), []);
      
    const movies = MovieService.prepare(data)
      .sort((previous, next) => next.popularity - previous.popularity)
      .slice(0, 25);
    
    if (movies.length < 1) {
      return this.setState({ list: null });
    };
    
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null
          return decoded;
        })
      : null;
    
    const user_id = (decoded) ? parseInt(decoded.user_id) : null;

    const newList = {
      name: `From ${list.name}`, suggestion: true,
      user_id, movies
    };

    api.createList(newList)
      .then(() => history.push(`/users/${user_id}/suggestions`))
      .catch(error => <Error message={error} />)
  };

  componentDidMount() {
    const list_id = parseInt(this.props.list_id);

    if (list_id) {
      api.getListById(list_id)
        .then(list => {
          this.setState({ list });
        })
        .catch(error => <Error message={error}/>)
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
    
    const user_id = (decoded) ? decoded.user_id : null;
    const admin = (decoded) ? decoded.admin : false;

    let { list, history } = this.props;

    if (!list.list_id) {
      list = this.state.list;
    };

    if (!list) {
      return <Error message={`Wow, you're good! No suggestions.`} />;
    };

    if (list.movies.length < 1) return null;

    if (user_id !== list.user_id && !admin) {
      return <Error message={'Invalid access'} />
    };

    const getSuggestionsButton = (decoded)
      ? <button
          type='button'
          onClick={() => this.getSuggestions(list)}
        >
          Get Suggestions
        </button>
      : null;

    return (
      <div className='list'>
        <h3>List Details</h3>
        <Link to={`/lists/${list.list_id}`}>
          <h4>{list.name}</h4>
        </Link>
        
        <div className='list-movies'>
          {
            list.movies.map(movie =>
              <MoviePreview
                key={movie.movie_id}
                movie={movie} />
            )
          }
        </div>

        {getSuggestionsButton}

        <button
          type='button'
          onClick={() => history.push('/home')}
        >
          BACK
        </button>
      </div>
    );
  }
}

export default ListPreview;