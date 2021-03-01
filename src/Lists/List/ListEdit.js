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

    if (!location.pathname) {
      addList(name);
    } else {
      editList(name);
    };
  };

  componentDidMount() {
    const { listName } = this.props;
    const newState = { ...this.state };

    if (listName) {
      newState.listName = listName;
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
        <button type='submit'>Save</button>
        <button
          type='button'
          onClick={this.hideListField}
        >
          Cancel
        </button>
      </form>
    );
  };
};

export default withRouter(ListEdit);