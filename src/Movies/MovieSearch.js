import React from 'react';
import { withRouter } from 'react-router-dom';
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

  addToList = (movie) => {
    const { match } = this.props;
    const list_id = parseInt(match.params.list);

    api.addMovieToList(list_id, movie)
      .then(() => window.location.reload())
      .catch(error => console.log({ error }));
  };

  componentDidMount() {
    const movieInput = document.querySelector('#movie_input');

    if (movieInput) {
      movieInput.focus()
    };

    if (this.props.location.pathname !== '/movie/search') {
      window.scroll(0, movieInput.offsetTop);
    };
  }

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
            this.state.results
              .filter(movie => movie.poster)
              .map((movie, idx) => 
                <Movie
                  key={idx}
                  movie={movie}
                  addToList={this.addToList}
                />
              )
          }
        </div>
      </div>
    );
  };
};

export default withRouter(MovieSearch);