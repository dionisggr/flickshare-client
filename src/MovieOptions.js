import { Link } from 'react-router-dom';

function MovieOptions(props) {

  const { id } = props;

  return (
    <div className='movie-preview-options'>
          <button
            type='button'
            className='add'
          >
            +
          </button>
  
          <Link to={`/movies/${id}`}></Link>
      </div>
  );
};

export default MovieOptions;