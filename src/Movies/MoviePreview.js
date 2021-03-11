import React from 'react';
import Loader from 'react-loaders';
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
          list={list}
          movie={movie}
          setMovies={setMovies}
        />
      : null
    
    if (!movie.movie_id) {
      return <Loader type="ball-spin-fade-loader" />;
    };
    
    return (
      <div
        className='movie-preview'
        onMouseEnter={() => this.setState({ showOptions: !this.state.showOptions })}
        onMouseLeave={() => this.setState({ showOptions: false })}
        onClick={() => this.setState({ showOptions: !this.state.showOptions})}
      >
        <label>{name}</label>

        <img src={poster} alt={`${name} poster`} />
      
        {movieOptions}
      </div>
    );
  }
};

export default MoviePreview;