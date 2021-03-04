const config = {
  // API_URL: process.env.REACT_APP_API_URL || 'https://cryptic-badlands-24275.herokuapp.com/api',
  API_URL: 'http://localhost:8000/api',
  API_KEY: process.env.REACT_APP_API_KEY || 'my-secret-admin',
  API_ADMIN_KEY: process.env.REACT_APP_API_ADMIN_KEY || 'my-secret-admin',
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET || 'my-secret-jwt',
  TMDB_API_KEY: process.env.REACT_APP_TMDB_API_KEY || '59b42538d4bcf7fe1a42cf887d900824',
  TMDB_API_URL: process.env.REACT_APP_TMDB_API_URL || 'https://api.themoviedb.org/3'
};

module.exports = config;