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
import List from './List';
import ListPreview from './ListPreview';
// import Movies from './Movies';
import Movie from './Movie';
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
            <List
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
            <List
              user_id={match.params.user}
              history={history}
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
          render={({ match }) =>
            <ListPreview
              list_id={match.params.list}
            />
          }
        />

        <Route
          exact path='/edit/lists/:list'
          render={({ match }) =>
            <ListPreview
              list_id={match.params.list}
            />
          }
        />

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