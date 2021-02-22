import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { JWT_SECRET } from '../../config';
import jwt from 'jsonwebtoken';
import MoviePreview from '../../Movies/MoviePreview';
import MovieSearch from '../../Movies/MovieSearch';
import MovieService from '../../services/movie-service';
import Error from '../../error-handlers/Error';
import api from '../../services/api';
import './List.css';

class List extends Component {
  static defaultProps = {
    list: { movies: [] },
    list_id: null,
  };

  state = {
    list: { movies: [] },
    showMovieSearch: false,
    editMode: false,
  };

  addMovie = (movie) => {
    const newState = { ...this.state };
    
    newState.list.movies.push(movie);
    
    this.setState(newState);
    
    window.scrollTo(0, 0);
  };

  renderMovieSearch = () => {
    const newState = { ...this.state };

    newState.showMovieSearch = true;

    this.setState(newState);
  }; 

  showEditMode = () => {
    const newState = { ...this.state };

    newState.editMode = true;

    this.setState(newState);
  };

  cancelEditMode = () => {
    const newState = { ...this.state };

    newState.editMode = false;

    this.setState(newState);
  };

  editList = async (evt, list_id) => {
    const newState = { ...this.state };

    const name = evt.target.parentElement
      .querySelector('#list_name').value;
    
    const list = await api.getListById(list_id);

    const { user_id } = list;
    const editedList = { name, user_id };

    newState.list = await api.editList(list_id, editedList);
    newState.editMode = false;

    this.setState(newState);
  };

  deleteList = (list_id, user_id) => {
    const { history } = this.props;

    api.deleteList(list_id)
      .then(() => history.push(`/users/${user_id}/lists`))
      .catch(error => console.log({ error }));
  };

  getSuggestions = async (list) => {
    const { history } = this.props;

    const data = (await api.getMoviesSuggestions(list.movies))
      .reduce((total, each) => total.concat(each.results), []);
      
    const movies = MovieService.prepare(data)
      .sort((previous, next) => next.popularity - previous.popularity)
      .slice(0, 25);
    
    if (movies.length < 1) {
      return this.setState({ list: null });
    };
    
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null
          return decoded;
        })
      : null;
    
    const user_id = (decoded) ? parseInt(decoded.user_id) : null;

    const newList = {
      name: `From ${list.name}`, suggestion: true,
      user_id, movies
    };

    api.createList(newList)
      .then(() => history.push(`/users/${user_id}/suggestions`))
      .catch(error => <Error message={error} />)
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
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;
    
    const user_id = (decoded) ? decoded.user_id : null;
    const admin = (decoded) ? decoded.admin : false;

    let { list, history } = this.props;

    if (!list.list_id) {
      list = this.state.list;
    };

    if (!list) {
      return <Error message={`Wow, you're good! No movies.`} />;
    };

    if (user_id !== list.user_id && !admin) {
      return <Error message={'Invalid access'} />
    };

    const getSuggestionsButton = (decoded && list.movies.length > 1)
      ? <button
          type='button'
          onClick={() => this.getSuggestions(list)}
        >
          Get Suggestions
        </button>
      : null;
    
    const addButton = (!this.state.editMode && user_id === list.user_id)
      ? <button
          type='button'
          onClick={this.renderMovieSearch}
        >
          Add
        </button>
      : null;
    
    const editButton = (!this.state.editMode)
      ? (user_id === list.user_id)
        ? < button
            type='button'
            onClick={this.showEditMode}
          >
            Edit
          </button>
        : null
      : <>
          <button
            type='button'
            onClick={(evt) => this.editList(evt, list.list_id)}
          >
            Save
          </button>
          <button
            type='button'
            onClick={this.cancelEditMode}
          >
            Cancel
          </button>
      </>
    
    const deleteButton = (!this.state.editMode && user_id === list.user_id)
      ? <button
          type='button'
          onClick={() => this.deleteList(list.list_id, user_id)}
        >
          Delete
        </button>
      : null;
    
    const movieSearch = (this.state.showMovieSearch)
      ? <MovieSearch
          list_id={list.list_id}
          addMovie={this.addMovie}
        />
      : null;
    
    const listName = (this.state.editMode)
      ? <input
          type='text'
          id='list_name'
          name='list_name'
          defaultValue={list.name}
        />
      : <Link to={`/lists/${list.list_id}`}>
          <h4>{list.name}</h4>
        </Link>

    return (
      <div className='list'>
        <h3>List Details</h3>

        {listName}

        {editButton}

        {deleteButton}

        {addButton}
        
        <div className='list-movies'>
          {
            list.movies.map(movie =>
              <MoviePreview
                key={movie.movie_id}
                movie={movie} />
            )
          }
        </div>

        {getSuggestionsButton}
        
        {movieSearch}

        <button
          type='button'
          onClick={() => history.push('/home')}
        >
          BACK
        </button>
      </div>
    );
  }
}

export default List;