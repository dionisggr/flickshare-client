import React from 'react';
import { Link } from 'react-router-dom';
import MovieOptions from './MovieOptions';
import './MoviePreview.css';

class MoviePreview extends React.Component {
  state = { showOptions: false };

  render() {
    const { movie } = this.props;
    const { name, poster, movie_id } = movie;

    const movieOptions = (this.state.showOptions)
      ? <MovieOptions movie={movie} />
      : null
    
    return (
      <div
        className='movie-preview'
        onMouseEnter={() => this.setState({ showOptions: true })}
        onMouseLeave={() => this.setState({ showOptions: false })}
      >
        <label>{name}</label>

        <img src={poster} alt={`${name} poster`} />
      
        {movieOptions}
      </div>
    );
  }
};

export default MoviePreview;