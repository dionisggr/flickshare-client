import React from 'react';
import './error-boundary.css';

class ErrorBoundary extends React.Component {
  state = { error: false };

  static getDerivedStateFromError(error) {
    return { error };
  };

  render() {
    // Return either error or props children (this component is set as Boundary)
    if (this.state.error) return (
      <div className='error-boundary'>
        <h2>Something went wrong.</h2>
      </div>
    );

    return this.props.children;
  };
};

export default ErrorBoundary;