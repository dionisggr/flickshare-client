import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

class Error extends React.Component {
  static defaultProps = { message: '' };

  render() {
    const { message } = this.props;

    return (
      <div className='error'>
        <h3>Error</h3>
        <h4>{message}</h4>
        <Link to='/home'>HOME</Link>
      </div>
    );
  };
};

export default Error;