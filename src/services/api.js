import { API_URL, API_KEY, TMDB_API_URL, TMDB_API_KEY } from '../config';
import Error from '../error-handlers/Error';

const api = {
  verifyResponse: (res) => {
    if (!res.ok) throw new Error('Could not request.');
    return res.json();
  }
  ,
  searchMovie: (movie) => {
    const searchOptions = '&page=1&include_adult=false';
    movie = encodeURIComponent(movie);
    
    return fetch(
      `${TMDB_API_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${movie}${searchOptions}`
    )
      .then(api.verifyResponse);
  }
  ,
  getAllLists: () => {
    return fetch(`${API_URL}/lists`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getMainLists: () => {
    return fetch(`${API_URL}/lists/main`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getListById: (id) => {
    return fetch(`${API_URL}/lists/${id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  createList: (list) => {
    return fetch(`${API_URL}/lists`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list)
    })
      .then(api.verifyResponse);
  }
  ,
  addMovieToList: (list_id, movie) => {
    return fetch(`${API_URL}/movies/lists/${list_id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movie })
    })
      .then(api.verifyResponse);
  }
  ,
  removeMovieFromList: (list_id, movie_id) => {
    return fetch(`${API_URL}/movies/${movie_id}/lists/${list_id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
  }
  ,
  getUserInfo: (user_id) => {
    return fetch(`${API_URL}/users/${user_id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getUserLists: (user_id) => {
    return fetch(`${API_URL}/lists/users/${user_id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getUserSuggestions: (user_id) => {
    return fetch(`${API_URL}/lists/suggestions/users/${user_id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getAllUsers: () => {
    return fetch(`${API_URL}/users`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  addUser: (user) => {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(api.verifyResponse);
  }
  ,
  editUser: (user_id, values) => {
    return fetch(`${API_URL}/users/${user_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(api.verifyResponse);
  }
  ,
  deleteUser: (user_id) => {
    return fetch(`${API_URL}/users/${user_id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
  }
  ,
  usernameExists: (username) => {
    return fetch(`${API_URL}/users/username`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(api.verifyResponse);
  },
  changeUserPassword: (user_id, password) => {
    return fetch(`${API_URL}/users/${user_id}/password`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    })
      .then(api.verifyResponse);
  }
  ,
  login: (username, password) => {
    return fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(api.verifyResponse);
  }
  ,
  refreshToken: (flickshareToken) => {
    return fetch(`${API_URL}/login`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ flickshareToken })
    })
      .then(api.verifyResponse);
  }
  ,
  getMovieSuggestions: (tmdb_id) => {
    const searchOptions = '&page=1&include_adult=false';
    return fetch(
      `${TMDB_API_URL}/movie/${tmdb_id}/similar?api_key=${TMDB_API_KEY}${searchOptions}`
    )
  }
  ,
  getMoviesSuggestions: (movies) => {
    return Promise.all(movies.map(movie => {
      return api.getMovieSuggestions(movie.tmdb_id)
    }))
      .then(response => Promise.all(response.map(res => {
        if (!res.ok) throw new Error('Invalid request.');
        return res.json();
      })))
      .catch(error => <Error message={error} />);
  }
};

export default api;