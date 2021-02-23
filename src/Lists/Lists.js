import React from 'react';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import ListPreview from './List/ListPreview';
import ListEdit from './List/ListEdit';
import Error from '../error-handlers/Error';
import api from '../services/api';
import './Lists.css';

class Lists extends React.Component {
  static defaultProps = { mainLists: [], user_id: null };

  state = { userLists: [], showListField: false };

  showEdit = () => {
    const newState = { ...this.state };

    newState.showListField = true;

    this.setState(newState);
  };

  addList = (name) => {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));

    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;
    
    const user_id = (decoded) ? decoded.user_id : null;

    const list = {
      name, user_id, suggestion: false, movies: []
    };

    api.createList(list)
      .then(newList => {
        const { history } = this.props;
        const newState = { ...this.state };

        newState.userLists.push(newList);
        newState.showListField = false;
        newState.showMovieSearch = false;

        this.setState(newState);

        history.push(`/lists/${newList.list_id}`);
      })
      .catch(error => console.log(error))
  };

  componentDidUpdate = () => {
    const user_id = parseInt(this.props.user_id);

    const { pathname } = this.props.location;

    console.log(this.props.mainLists)

    if (user_id && this.state.userLists.length < 1 && pathname !== '/home') {
      api.getUserLists(user_id)
        .then(userLists => {
          this.setState({ userLists });
        })
        .catch(error => <Error message={error} />)
    };
  }

  componentDidMount() {
    const user_id = parseInt(this.props.user_id);

    if (user_id) {
      api.getUserLists(user_id)
        .then(userLists => {
          this.setState({ userLists });
        })
        .catch(error => <Error message={error} />)
    };
  };

  render() {
    const { mainLists } = this.props;
    const { userLists, showListField } = this.state;

    const header = (mainLists.length > 0)
      ? <h3>Top Suggestions</h3>
      : <h3>My Lists</h3>
    
    const lists = (mainLists.length < 1)
      ? userLists
      : mainLists;

    const button = (mainLists.length < 1)
      ? <button
        type='button'
        onClick={this.showEdit}
      >
        Add
      </button>
      : null;
    
    const listEdit = (showListField)
      ? <ListEdit addList={this.addList} />
      : null;

    return (
      <div className='lists'>
        {header}
        {button}
        {listEdit}
        {
          lists.map(list =>  
            <ListPreview
              key={list.list_id}
              list={list}
            />
          )
        }
      </div>
    );
  };
};

export default Lists;