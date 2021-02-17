import React from 'react';

import './Register.css';

class Register extends React.Component {

  componentDidMount() {
    window.scroll(0,0);
  };

  render() {
    return (
      <form className='register' autoComplete='off'>
        <h3>REGISTER</h3>

        <label htmlFor='first_name'>First Name:</label>
        <input type='text' name='first_name' id='first_name'
        />

        <label htmlFor='last_name'>Last Name:</label>
        <input type='text' name='last_name' id='last_name'
        />

        <label htmlFor='email'>E-mail:</label>
        <input type='text' name='email' id='email'
        />

        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' id='username'
        />

        <label htmlFor='password'>Password</label>
        <input type='text' name='password' id='password'
        />
      
        <label htmlFor='repeat_password'>Repeat password:</label>
        <input type='text' name='repeat_password' id='repeat_password'
        />
      
        <button type='submit'>Submit</button>
      </form>
    );
  };
};

export default Register;