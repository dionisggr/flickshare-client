import { Link } from 'react-router-dom';
import MoviePreview from './MoviePreview';
import Error from './Error';
import './ListPreview.css';

import React, { Component } from 'react';
import api from './api';

class ListPreview extends Component {
  static defaultProps = {
    list: { movies: [] }
  };

  state = {
    list: { movies: [] },
    autoScroller: null,
    refresh: false
  };

  scroll = (evt, direction) => {
    const movieList = evt.target.parentElement.parentElement
      .querySelector('div.list-preview-movies');
    
    const newState = { ...this.state };
    
    if (direction === 'left') {
      newState.autoScroller = setInterval(() => {
        movieList.scrollLeft -= 5;
      }, 10);

    } else if (direction === 'right') {
      newState.autoScroller = setInterval(() => {
        movieList.scrollLeft += 5;
      }, 10);

    } else {
      clearInterval(newState.autoScroller);
    };

    this.setState(newState);
  };

  setMovies = (movies) => {
    const newState = { ...this.state };

    newState.list.movies = movies;
    newState.refresh = true;

    this.setState(newState);
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
    let { list } = this.props;

    if (!list.list_id) {
      list = this.state.list;
    };

    if (list.movies.length < 1) return null;

    if (this.state.refresh) {
      list = this.state.list;
    };

    return (
      <div className='list-preview'>
        <Link to={`/lists/${list.list_id}`}>
          <h3>{list.name}</h3>
        </Link>
     
        <div className='list-preview-movies'>          
          {
            list.movies.map(movie =>
              <MoviePreview
                setMovies={this.setMovies}
                key={movie.movie_id}
                list={list}
                movie={movie}
              />
            )
          }
        </div>

        <div className='scroll-left'>
          <button
            type='button'
            onMouseEnter={(evt) => this.scroll(evt, 'left')}
            onMouseLeave={(evt) => this.scroll(evt, 'stop')}
          >
            P
          </button>
        </div>

        <div className='scroll-right'>
          <button
            type='button'
            onMouseEnter={(evt) => this.scroll(evt, 'right')}
            onMouseLeave={(evt) => this.scroll(evt, 'stop')}
          >
            N
          </button>
        </div>
      </div>
    );
  }
}

export default ListPreview;