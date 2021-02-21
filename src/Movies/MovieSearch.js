import React from 'react';
import Movie from './Movie';
import MovieService from '../services/movie-service';
import Error from '../error-handlers/Error';
import api from '../services/api';
import './MovieSearch.css';

class MovieSearch extends React.Component {
  state = { results: [] };

  search = async (evt) => {
    evt.preventDefault();

    const movie = evt.target.movie_input.value;

    const response = await api.searchMovie(movie)
      .catch(error => <Error message={error} />);
    
    const results = MovieService.prepare(response.results);
    
    this.setState({ results });
  };

  render() {
    return (
      <div className='movie-search'>
        <form
          className='search'
          onSubmit={this.search}
        >
          <h3>Movie Search</h3>
          <input
            type='text'
            id='movie_input'
            name='movie_input'
            placeholder='Search...'
          />
          <button type='submit'>Search</button>
        </form>
        <div className='results'>
          {
            this.state.results.map((movie, idx) => 
              <Movie
                key={idx}
                movie={movie}
              />
            )
          }
        </div>
      </div>
    );
  };
};

export default MovieSearch;