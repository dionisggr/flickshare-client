import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import MoviePreview from './MoviePreview';
import Error from './Error';
import './ListPreview.css';

import React, { Component } from 'react';
import api from './api';

class ListPreview extends Component {
  static defaultProps = {
    list: { movies: [] }
  };

  state = { list: { movies: [] } };

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

    let { list, list_id } = this.props;

    if (!list.list_id) {
      list = this.state.list;
    };

    console.log(list);

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