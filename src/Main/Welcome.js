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
          <Link to='/home'>I just want to browse.</Link>
        </>

    return (
      <div className='welcome'>
        <div className='with-background'>
          <img src={welcomeBackground} alt='welcome-background' />
          
          <h3>Welcome to FlickShare!</h3>

          <label>Why struggle choosing a movie to watch?</label>

          <p>Good movie suggestions are hard to come by. Usually we rely on the Internet or our friends to decide what to watch next.</p>
          <p>What if we could just get some ideas from our own interests?</p>
          <p>What if we could save these lists and edit them in the future for different results?</p>

          <label>It's simple:</label>

          <ol>
            <li>Create an account.</li>
            <li>Create a list (or many!) with your favorite movies.</li>
            <li>Hit the Get Suggestions! button</li>
            <li>Come back for more!</li>
          </ol>

          {buttons}
          
        </div>
      </div>
    );
  }
};

export default Welcome;