import api from '../services/api';

const TokenService = {
  refresh: () => {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken')); 
    
    api.refreshToken(flickshareToken)
      .then(({ flickshareToken }) => {
        console.log(flickshareToken);
        // window.localStorage.setItem('flickshareToken', flickshareToken)
      })
      .catch(error => console.log(error));
  }
};

export default TokenService;