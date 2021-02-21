import React from 'react';
import MovieOptions from './MovieOptions';
import './MoviePreview.css';

class MoviePreview extends React.Component {
  static defaultProps = { movie: {}, list: {}, setMovies: {} };

  state = { showOptions: false };

  render() {
    const { movie, list, setMovies } = this.props;
    const { name, poster } = movie;

    const movieOptions = (this.state.showOptions)
      ? <MovieOptions
          setMovies={setMovies}
          list={list}
          movie={movie}
        />
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