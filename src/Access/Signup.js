import React from 'react';
import validation from '../services/validation';
import api from '../services/api';
import './Signup.css';

class Signup extends React.Component {
  static defaultProps = { userLogged: {} };

  addUser = async (evt) => {
    evt.preventDefault();

    evt.target.querySelectorAll('label.error').forEach(label => {
      label.style.display = 'none';
    });

    const { history, userLogged, setIdleTimer } = this.props;

    const newUser = {
      first_name: evt.target.first_name.value,
      last_name: evt.target.last_name.value,
      username: evt.target.username.value,
      email: evt.target.email.value,
      password: evt.target.password.value,
      repeat_password: evt.target.repeat_password.value,
    };

    const usernameExists = await validation.validUsername(newUser);

    if (usernameExists) {
      return evt.target.querySelector('#error_username').style.display = 'block';
    };

    const validPassword = await validation.validPassword(newUser, evt);

    if (!validPassword) {
      return;
    }

    delete newUser.repeat_password;

    for (const [key, value] of Object.entries(newUser)) {
      if (!value && key !== 'repeat_password') {
        return evt.target.querySelector(`#error_${key}`).style.display = 'block';
      };
    };

    newUser.admin = true;

    api.addUser(newUser)
      .then(({ flickshareToken }) => {
        window.localStorage.setItem('flickshareToken', JSON.stringify(flickshareToken));

        userLogged(true);
        setIdleTimer();
        
        history.push(`/home`);
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    window.scroll(0,0);
  };

  render() {
    return (
      <form
        className='signup'
        autoComplete='off'
        onSubmit={this.addUser}
      >
        <h3>Sign-Up</h3>

        <h4>User Information</h4>

        <label htmlFor='first_name'>First Name:</label>
        <input
          type='text' required
          name='first_name' id='first_name'
          autoComplete='none'
        />

        <label htmlFor='last_name'>Last Name:</label>
        <input 
          type='text' required
          name='last_name' id='last_name'
          autoComplete='none'
        />

        <label htmlFor='email'>E-mail:</label>
        <input 
          type='text' required
          name='email' id='email'
          autoComplete='none'
        />

        <h4>Account Information</h4>

        <label htmlFor='username'>Username:</label>
        <input 
          type='text' required
          name='username' id='username'
          autoComplete='none'
        />
        <label
          htmlFor='username'
          id='error_username'
          className='error'
          style={{ display: 'none' }}
        >
          <p>Username exists.</p>
        </label>

        <label htmlFor='password'>Password</label>
        <input 
          type='password' required
          name='password' id='password'
          autoComplete='new-password'
        />
        <label
          htmlFor='password'
          id='error_password'
          className='error'
          style={{ display: 'none' }}
        >
          <p>Password must be at least 8 charaters.</p>
          <p>Password must not contain spaces.</p>
          <p>Password must contain at least 1 Uppercase.</p>
          <p>Password must contain at least 1 number.</p>
        </label>
      
        <label htmlFor='repeat_password'>Repeat password:</label>
        <input 
          type='password' required
          name='repeat_password' id='repeat_password'
          autoComplete='new-password'
        />
        <label
          htmlFor='password'
          id='error_repeat_password'
          className='error'
          style={{ display: 'none' }}
        >
          <p>Passwords must match.</p>
        </label>
      
        <button type='submit'>Submit</button>
      </form>
    );
  };
};

export default Signup;