import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Header />
        <Sidebar />

        <Route path='/' component={Welcome} />
        <Route path='/home' component={List} />
      </main>
    );
  };
};

export default App;