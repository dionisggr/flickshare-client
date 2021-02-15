import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Footer from './Footer';
// import Welcome from './Welcome';
// import Register from './Register'; 
// import Login from './Login'; 
// import User from './User'; 
// import MainLists from './MainLists';
// import Movies from './Movies';
// import Movie from './Movie';
// import List from './List';

class App extends React.Component {
  state = {
    mainLists: [],
    user: { id: null, username: null }
  };

  render() {

    // const { mainLists, user } = this.state;

    return (
      <main className='App'>
        <Header />

        {/* <Route exact path='/' component={Welcome} /> */}
        {/* <Route path='/register' component={Register} /> */}
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route exact path='/users' component={Users} /> */}
        {/* <Route path='/suggestions' component={List} /> */}
        {/* <Route path='/friends' component={Friends} /> */}
        {/* <Route exact path='/movies' component={Movies} /> */}

        {/* <Route path='/home' render={() =>
          <MainLists mainLists={mainLists} />
        } /> */}

        {/* <Route path='/users/:user' render={({ match }) =>
          <User user={match.params.user} />
        } /> */}

        {/* <Route exact path='/lists/:list' render={({ match }) =>
          <List list={match.params.list} />
        } /> */}

        {/* <Route path='/lists/:list/movies/:movie' render={({ match }) =>
          <User params={match.params} />
        } /> */}

        {/* <Route path='/movies/:movie' render={({ match }) =>
          <Movie movie={match.params.movie} />
        } /> */}

        <Footer />
      </main>
    );
  };
};

export default App;