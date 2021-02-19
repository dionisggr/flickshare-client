import React from 'react';
import Movie from './Movie';
import Error from './Error';
import api from './api';
import MovieService from './services/movie-service';
import './MovieSearch.css';

class MovieSearch extends React.Component {
  state = { results: [] };

  search = async (evt) => {
    evt.preventDefault();

    const movie = evt.target.movie_input.value;

    const response = await api.searchMovie(movie)
      .catch(error => <Error message={error} />);
    
    const results = MovieService.prepare(response.results);

    console.log(this.state.results);
    this.setState({ results });
    console.log(this.state.results);
  };

  render() {
    const { results } = this.state;

    console.log(this.state.results);

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
            this.state.results.map(movie => 
              <Movie movie={movie} />
            )
          }
        </div>
      </div>
    );
  };
};

export default MovieSearch;