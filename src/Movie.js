import React from 'react';
import Error from './Error';
import './Movie.css';

class Movie extends React.Component {
  static defaultProps = { history: {}, location: {} };

  state = { movie: {} };

  componentDidMount() {
    const { location: { movie } } = this.props;

    if (movie) {
      window.localStorage.setItem('flickshareMovie', JSON.stringify(movie));
    };

    window.scroll(0, 0);
  };

  render() {
    let { history, location: { movie } } = this.props;

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

    const { movie_id } = this.props;

    const button = (!movie_id)
      ? <button
          type='button'
          onClick={history.goBack}
        >
          Add to List
        </button>
      : <button
          type='button'
          onClick={history.goBack}
        >
          BACK
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

export default Movie;