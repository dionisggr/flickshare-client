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