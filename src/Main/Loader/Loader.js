import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  state = { message: 'Searching...' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'Still working here...'});
    }, 4000);

    setTimeout(() => {
      this.setState({ message: 'I refuse to give up...' })
    }, 8000);

    setTimeout(() => {
      this.setState({ message: 'Guess what...' })
    }, 12000);

    setTimeout(() => {
      this.setState({ message: 'All empty!' })
    }, 15000);
  }

  render() { 
    const { message } = this.state;

    return (
      <div className='loading'>
        <h3>{message}</h3>
      </div>
    );
  };
};

export default Loader;