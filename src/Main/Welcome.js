import React from 'react';
import { Link } from 'react-router-dom';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import welcomeBackground from '../img/welcome-background.jpeg';
import './Welcome.css';

class Welcome extends React.Component {
  componentWillUnmount() {
    window.scroll(0, 0);
  }; 
  
  render() {
    const flickshareToken = JSON.parse(window.localStorage.getItem('flickshareToken'));
    
    const decoded = (flickshareToken)
      ? jwt.verify(flickshareToken, JWT_SECRET, (error, decoded) => {
          if (error) return null;
          return decoded;
        })
      : null;

    const buttons = (decoded)
      ? <Link to='/home'>Home</Link>
      : <>
          <Link to='/signup'>Create a new account!</Link>
          <Link to='/login'>Login | Demo</Link>
          <Link to='/home'>I just want to browse.</Link>
        </>

    return (
      <div className='welcome'>
        <img src={welcomeBackground} alt='background' />
        <div className='with-background'>

          <h3>Welcome to FlickShare!</h3>

          <label>Never struggle again looking for what to watch.</label>

          <p>Good movie suggestions are hard to come by. Usually we rely on the Internet or our friends to decide what to watch next.</p>
          <p>What if we could get some ideas from our own interests?</p>
          <p>What if we could create lists of interests and edit them in the future for different results?</p>

          <label>It's simple:</label>

          <ol>
            <li>Create an account.</li>
            <li>Create a list (or many) with your favorite movies.</li>
            <li>Hit the <b>Get Suggestions!</b> button</li>
            <li>Come back for more!</li>
          </ol>

          {buttons}
          
        </div>
      </div>
    );
  }
};

export default Welcome;