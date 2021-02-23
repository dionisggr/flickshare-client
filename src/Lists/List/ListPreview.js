import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviePreview from '../../Movies/MoviePreview';
import Error from '../../error-handlers/Error';
import api from '../../services/api';
import './ListPreview.css';

class ListPreview extends Component {
  static defaultProps = {
    list: { movies: [] },
    list_id: null
  };

  state = {
    list: { movies: [] },
    autoScroller: null,
    refresh: false
  };

  scroll = (evt, direction) => {
    const movieList = evt.target.parentElement.parentElement.parentElement
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
      newState.list.movies = newState.list.movies;
    };

    this.setState(newState);
  };

  setMovies = (movies) => {
    const newState = { ...this.state };

    newState.list = this.props.list;
    newState.list.movies = movies || [];
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

    if (this.state.refresh) {
      list = this.state.list;
    };

    const renderList = (list.movies.length > 0)
      ? list.movies.map(movie =>
        <MoviePreview
          setMovies={this.setMovies}
          key={movie.movie_id}
          list={list}
          movie={movie}
        />
      )
      : <div className='no-movies'>
          <h3>Wow, so much empty.</h3>
        </div>
    
    const leftArrow = (list.movies.length > 2)
      ? <div className='scroll-left'>
          <button
            type='button'
            onMouseEnter={(evt) => this.scroll(evt, 'left')}
            onMouseLeave={(evt) => this.scroll(evt, 'stop')}
          >
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
      : null;
    
    const rightArrow = (list.movies.length > 2)
      ? <div className='scroll-right'>
          <button
            type='button'
            onMouseEnter={(evt) => this.scroll(evt, 'right')}
            onMouseLeave={(evt) => this.scroll(evt, 'stop')}
          >
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      : null;


    return (
      <div className='list-preview'>
        <Link to={`/lists/${list.list_id}`}>
          <h3>{list.name}</h3>
        </Link>
     
        <div className='list-preview-movies'>            
          {renderList}
        </div>

        {leftArrow}
        {rightArrow}
      </div>
    );
  }
}

export default ListPreview;