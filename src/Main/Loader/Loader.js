import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  render() {
    return (
      <div className='loading'>
        <h3>Loading...</h3>
        <div className='loader' />
      </div>
    );
  };
};

export default Loader;