import React from 'react';
import { withRouter } from 'react-router-dom';
import './ListEdit.css';

class ListEdit extends React.Component {
  state = { input: '', listName: null, newList: false };

  hideListField = () => {
    const { showEdit, showEditMode } = this.props;

    const edit = showEdit || showEditMode;

    edit();
  }

  saveName = (evt) => {
    evt.preventDefault();

    const { addList, editList, location } = this.props;
    const name = evt.target.list_name.value;

    if (addList) {
      addList(name);
    } else {
      editList(name);
    };
  };

  componentDidMount() {
    const { listName, list } = this.props;
    const newState = { ...this.state };

    if (list) {
      newState.input = list.name;
    } else {
      newState.newList = true;
    };

    this.setState(newState);
  };

  render() {
    return (
      <form
        className='list-edit'
        onSubmit={this.saveName}
      >
        <label htmlFor='list_name'>Name:</label>
        <input
          type='text'
          id='list_name'
          name='list_name'
          value={this.state.input}
          onChange={(evt) => this.setState({ input: evt.target.value})}
          required
        />
        <div className='edit-movie-buttons'>
          <button type='submit'>Save</button>
          <button
            type='button'
            onClick={this.hideListField}
          >
              Cancel
          </button>
        </div>
      </form>
    );
  };
};

export default withRouter(ListEdit);