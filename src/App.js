import React from 'react';
import { Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import Register from './Register'; 
import Login from './Login'; 
import User from './User'; 
import UserEdit from './UserEdit'; 
import Home from './Home';
// import Movies from './Movies';
import Movie from './Movie';
// import List from './List';
import Error from './Error';
import { JWT_SECRET } from './config'
import api from './api';
import './App.css';


class App extends React.Component {
  state = {
    loggedIn: false,
    mainLists: []
  };

  userLogged = (status) => {
    const newState = { ...this.state };
    newState.loggedIn = status;

    this.setState(newState);
  }

  componentDidMount = async () => {
    const newState = { ...this.state };

    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));
    
    const loggedIn = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, _) => {
          if (error) return false;
          return true;
        })
      : null;
    
    if (loggedIn) {
      newState.loggedIn = true;
    };
    
    newState.mainLists = await api.getMainLists()
      .catch(error => <Error message={error} />)

    this.setState(newState);
  };

  componentWillUnmount() {
    window.localStorage.removeItem('flickshareMovie');
  };

  render() {
    const { mainLists, loggedIn } = this.state;

    return (
      <main className='App'>
        <Header
          loggedIn={loggedIn}
          userLogged={this.userLogged}
        />

        <Route
          exact path='/'
          component={Welcome}
        />

        <Route
          path='/register'
          render={({ history }) =>
            <Register
              history={history}
              userLogged={this.userLogged}
            />
          }
        />

        <Route
          path='/login'
          render={({ history }) =>
            <Login
              history={history}
              userLogged={this.userLogged}
            />
          }
        />

        {/* <Route exact path='/users' component={Users} /> */}
        {/* <Route path='/suggestions' component={List} /> */}
        {/* <Route path='/friends' component={Friends} /> */}
        {/* <Route exact path='/movies' component={Movies} /> */}

        <Route
          path='/home'
          render={({ history }) =>
            <Home
              history={history}
              mainLists={mainLists}
            />
          }
        />

        <Route
          path='/users/:user'
          render={({ match, history }) =>
            <User
              history={history}
              user_id={match.params.user}
            />
          }
        />

        <Route
          path='/edit/users/:user'
          render={({ match, history }) =>
            <UserEdit
              history={history}
              user_id={match.params.user}
            />
          }
        />

        {/* <Route exact path='/lists/:list' render={({ match }) =>
          <List list={match.params.list} />
        } /> */}

        {/* <Route path='/lists/:list/movies/:movie' render={({ match }) =>
          <User params={match.params} />
        } /> */}

        <Route
          path='/movies/:movie'
          render={({ history, location }) =>
            <Movie
              history={history}
              location={location}
            />
          }
        />

        <Footer />
      </main>
    );
  };
};

export default App;