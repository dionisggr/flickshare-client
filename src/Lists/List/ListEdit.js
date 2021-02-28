import React from 'react';
import './ListEdit.css';

class ListEdit extends React.Component {
  state = { input: '', listName: null };

  hideListField = () => {
    const { showEdit } = this.props;

    showEdit();
  }

  addName = (evt) => {
    evt.preventDefault();

    const { addList } = this.props;
    const name = evt.target.list_name.value;

    addList(name);
  };

  componentDidMount() {
    const { listName } = this.props;

    if (listName) {
      this.setState({ listName });
    };
  };

  render() {
    return (
      <form
        className='list-edit'
        onSubmit={this.addName}
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
        <button type='submit'>Create</button>
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

export default ListEdit;