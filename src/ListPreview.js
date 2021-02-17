import { Link } from 'react-router-dom';
import MoviePreview from './MoviePreview';
import './ListPreview.css';

import React, { Component } from 'react';

class ListPreview extends Component {

  static defaultProps = {
    list: { movies: [] }
  };

  render() {

    const { list } = this.props;

    if (list.movies.length < 1) return null;

    return (
      <div className='list-preview'>
        <Link to={`/lists/${list.list_id}`}>
          <h4>{list.name}</h4>
        </Link>
        
        <div className='list-preview-movies'>
        {
          list.movies.map(movie =>
            <MoviePreview
              key={movie.movie_id}
              movie={movie} />
          )
          }
        </div>
      </div>
    );
  }
}

export default ListPreview;