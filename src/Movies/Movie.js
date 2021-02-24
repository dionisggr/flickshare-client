import React from 'react';
import { withRouter } from 'react-router-dom';
import Error from '../error-handlers/Error';
import './Movie.css';
// import api from '../services/api';

class Movie extends React.Component {
  static defaultProps = {
    history: {}, location: {},
    movie: {}, movie_id: null
  };

  state = { movie: {} };

  componentDidMount() {
    let { location: { movie } } = this.props;

    if (!movie || !movie.movie_id) {
      movie = this.state.movie;
    };

    if (movie) {
      window.localStorage.setItem('flickshareMovie', JSON.stringify(movie));
    };

    console.log(movie)

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  };

  render() {
    let { location: { movie }, addToList } = this.props;

    if (!movie) {
      movie = this.props.movie;
    };

    if (!movie) {
      movie = JSON.parse(window.localStorage.getItem('flickshareMovie'));
    };

    if (!movie) {
      return <Error message='Something went wrong.' />
    };

    const { name, description, poster, release_date, avg_vote } = movie;

    const vote_count = parseInt(movie.vote_count).toLocaleString('en');

    const { movie_id, location, history } = this.props;

    const button = (!movie_id && location.pathname !== '/movie/search')
      ? <button
          type='button'
          onClick={() => addToList(movie)}
        >
          Add to List
        </button>
      : <button
          type='button'
          onClick={history.goBack}
        >
          Back
        </button>

    return (
      <div className='movie'>
        <img src={poster} alt={`${name} poster`} />
        <div className='movie-data'>
          <label><b>Name: </b>{name}</label>
          <label><b>Description: </b>{description}</label>
          <label><b>Release Date: </b>{release_date}</label>
          <label><b>Average Vote: </b>{avg_vote}</label>
          <label><b>Vote Count: </b>{vote_count}</label>
        </div>
        {button}
      </div>
    );
  };
};

export default withRouter(Movie);