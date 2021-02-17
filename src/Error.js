import React from 'react';

class Error extends React.Component {
  render() {

    const { message } = this.props;

    return (
      <div className='error'>
        <h4>{message}</h4>
      </div>
    );
  };
};

export default Error;