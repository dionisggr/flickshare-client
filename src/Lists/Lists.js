import React from 'react';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import Loader from '../Main/Loader/Loader';
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

    newState.showListField = !this.state.showListField;

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

    const { mainLists } = this.props;
    const { userLists, refreshed } = this.state;

    if (!refreshed && mainLists.length < 1 && userLists.length < 1) {
      api.getUserLists(user_id)
      .then(userLists => {
        this.setState({ userLists, refreshed: true });
      })
      .catch(error => <Error message={error} />)
    }
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
    const { mainLists, location } = this.props;
    const { userLists, showListField } = this.state;

    const header = (location.pathname === '/home')
      ? <h3>Top Suggestions</h3>
      : <h3>My Lists</h3>
    
    let lists = (mainLists.length < 1)
      ? userLists
      : mainLists;
    
    const loader = <Loader type="line-spin-fade-loader" />;

    const button = (!showListField && mainLists.length < 1)
      ? <button
        type='button'
        onClick={this.showEdit}
      >
        Add
      </button>
      : null;
    
    const listEdit = (showListField)
      ? <ListEdit
          pathname={this.props.location.pathname}
          addList={this.addList}
          showEdit={this.showEdit}
        />
      : null;
    
    if (!lists.length) {
      lists = [];
    }
    
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
        {loader}
      </div>
    );
  };
};

export default Lists;