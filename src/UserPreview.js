import { Link } from 'react-router-dom';
import './UserPreview.css';

function UserPreview(props) {

  const { user_id, username, first_name, last_name, email } = props.user;

  return (
    
    <Link
      to={`/users/${user_id}`}
      className='user-preview'
    >
      <label>{username}</label>
      <label>{email}</label>
      <label>{first_name}</label>
      <label>{last_name}</label>
    </Link>
  );
};

export default UserPreview;