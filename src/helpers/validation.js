import Error from '../Error';
import api from "../api";

const validation = {
  validUsername: (user) => {
    const { username } = user;

    return api.usernameExists(username)
      .then(found => {
        return found === username;
      })
      .catch(error => <Error message={error} />)
  }
  ,
  validPassword: (user, evt) => {
    const { password, repeat_password } = user;

    console.log(password, repeat_password);

    if (
      password.length < 8 ||                  // Less than 8 characters. Validation: Need at least 8 characters.
      password.includes(' ') ||             // Includes a space. Validation: No spaces.
      !/\d/.test(password) ||               // Does not include a number. Validation: Need at least 1 number.
      password.toLowerCase() === password   // Does not include Uppercases. Validation: Need at least 1 uppercase.
    ) {
      evt.target.querySelector('#error_password').style.display = 'block';
      return false;
    };

    if (password !== repeat_password) {
      evt.target.querySelector('#error_repeat_password').style.display = 'block';
      return false;
    };

    return true;
  }
};

export default validation;