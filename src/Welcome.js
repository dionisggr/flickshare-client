import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

class Welcome extends React.Component {

  componentWillUnmount() {
    window.scroll(0, 0);
  }; 
  
  render() {
    return (
      <div className='welcome'>
        <h3>Welcome to FlickShare!</h3>

        <label>Why struggle choosing a movie to watch?</label>

        <p>Good movie suggestions are hard to come by. Usually we rely on the Internet or our friends to decide what to watch next.</p>
        <p>What if we could combine both?</p>
        <p>What if we could create a list with our favorite movies and be suggested other movies based on your likes?</p>
        <p>What if we could take this step further, and base suggestions on your friends lists as well?</p>

        <label>It's simple:</label>
        <ol>
          <li>Create an account.</li>
          <li>Create a list with your favorite movies.</li>
          <li>Make new friends, watch other users' lists and send suggestions!</li>
          <li>Come back for more!</li>
        </ol>
        <Link to='/register'>Create a new account!</Link>
        <Link to='/home'>I just want to browse.</Link>
      </div>
    );
  }
};

export default Welcome;