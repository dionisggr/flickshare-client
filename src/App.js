import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { JWT_SECRET } from './config'
import jwt from 'jsonwebtoken';
import Header from './Header';
import MainMenu from './MainMenu';
import Footer from './Footer';
import Welcome from './Welcome';
import Register from './Register'; 
import Login from './Login'; 
import ResetPassword from './ResetPassword'; 
import User from './User'; 
import Users from './Users'; 
import UserEdit from './UserEdit'; 
import Lists from './Lists';
import Suggestions from './Suggestions';
import List from './List';
import Movie from './Movie';
import MovieSearch from './MovieSearch';
import Admin from './Admin'
import Error from './Error';
import ErrorBoundary from './error-handlers/error-boundary';
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

  setUserLists = (userLists) => {
    const newState = { ...this.state };
    newState.userLists = userLists;

    this.setState(newState);
  };

  componentDidMount = async () => {
    const newState = { ...this.state };

    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));
    
    const loggedIn = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, _) => {
          if (error) return false;
          return true;
        })
      : false;
    
    if (loggedIn) {
      newState.loggedIn = true;
    } else {
      window.localStorage.removeItem('flickshareToken');
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

    const mainMenu = (loggedIn)
      ? <MainMenu />
      : null;
    
    return (
      <main className='App'>
        <Header
          loggedIn={loggedIn}
          userLogged={this.userLogged}
        />

        <ErrorBoundary>
          {mainMenu}
        </ErrorBoundary>

        <ErrorBoundary>
          <Switch>
            <Route
              exact path='/'
              loggedIn={loggedIn}
              component={Welcome}
            />

            <Route
              exact path='/admin'
              component={Admin}
            />

            <Route
              exact path='/admin/users'
              component={Users}
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

            <Route
              path='/users/:user/resetpassword'
              render={({ history }) =>
                <ResetPassword history={history} />
              }
            />

            <Route
              path='/movie/search'
              component={MovieSearch}
            />

            <Route
              path='/home'
              render={({ history }) =>
                <Lists
                  history={history}
                  mainLists={mainLists}
                />
              }
            />

            <Route
              exact path='/users/:user'
              render={({ match, history }) =>
                <User
                  history={history}
                  user_id={match.params.user}
                />
              }
            />

            <Route
              path='/users/:user/lists'
              render={({ match, history }) =>
                <Lists
                  history={history}
                  user_id={match.params.user}
                />
              }
            />

            <Route
              path='/users/:user/suggestions'
              render={({ match, history }) =>
                <Suggestions
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

            <Route
              exact path='/lists/:list'
              render={({ match, history }) =>
                <List
                  history={history}
                  list_id={match.params.list}
                />
              }
            />

            <Route
              path='/movies/:movie'
              render={({ history, location, match }) =>
                <Movie
                  movie_id={match.params.movie}
                  history={history}
                  location={location}
                />
              }
            />
          </Switch>
        </ErrorBoundary>  

        <Footer />
      </main>
    );
  };
};

export default App;