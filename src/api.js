import { API_URL, API_ADMIN_KEY } from './config';

const api = {
  verifyResponse: (res) => {
    if (!res.ok) throw new Error('Could not request.');
    return res.json();
  }
  ,
  getMainLists: () => {
    return fetch(`${API_URL}/lists/main`, {
      headers: { 'Authorization': `Bearer ${API_ADMIN_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getListById: (id) => {
    return fetch(`${API_URL}/lists/${id}`, {
      headers: { 'Authorization': `Bearer ${API_ADMIN_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getUserInfo: (user_id) => {
    return fetch(`${API_URL}/users/${user_id}`, {
      headers: { 'Authorization': `Bearer ${API_ADMIN_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  getUserLists: (user_id) => {
    return fetch(`${API_URL}/lists/users/${user_id}`, {
      headers: { 'Authorization': `Bearer ${API_ADMIN_KEY}` }
    })
      .then(api.verifyResponse);
  }
  ,
  addUser: (user) => {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_ADMIN_KEY}`,
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
        'Authorization': `Bearer ${API_ADMIN_KEY}`,
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
      headers: { 'Authorization': `Bearer ${API_ADMIN_KEY}` }
    });
  }
  ,
  usernameExists: (username) => {
    return fetch(`${API_URL}/users/username`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_ADMIN_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(api.verifyResponse);
  }
  ,
  login: (username, password) => {
    return fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_ADMIN_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(api.verifyResponse);
  }
};

export default api;