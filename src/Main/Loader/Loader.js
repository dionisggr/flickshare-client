import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  state = { noMovies: false };

  render() {
    setTimeout(() => {
      this.setState({ noMovies: true});
    }, 3000);

    const message = (this.state.noMovies)
      ? <h3>No movies!</h3>
      : <h3>Loading...</h3>
    
    const loader = (!this.state.noMovies)
      ? <div className='loader' />
      : null;

    return (
      <div className='loading'>
        {message}
        {loader}
      </div>
    );
  };
};

export default Loader;