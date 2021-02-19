import { Link } from 'react-router-dom';
import './MovieOptions.css';

function MovieOptions(props) {

  const { movie } = props;
  const { movie_id } = movie;

  return (
    <div className='movie-preview-options'>
          <button
            type='button'
            className='add'
          >
            +
          </button>
  
          <Link to={{
            pathname: `/movies/${movie_id}`,
            movie
          }}>
            More Info
          </Link>
      </div>
  );
};

export default MovieOptions;