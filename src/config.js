const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  API_KEY: process.env.REACT_APP_API_KEY || 'my-secret-admin',
  API_ADMIN_KEY: process.env.REACT_APP_API_ADMIN_KEY || 'my-secret-admin',
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET || 'my-secret-jwt'
};

module.exports = config;