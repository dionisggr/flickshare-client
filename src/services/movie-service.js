const MovieService = {
  prepare: (values) => {
    const movies = values.map(value => {
      const {
        id: tmdb_id,
        overview: description,
        vote_average: avg_vote,
        popularity, release_date, poster_path,
        title, original_title, vote_count
      } = value;
  
      const movie = {
        name: title || original_title,
        poster: `https://image.tmdb.org/t/p/original/${poster_path}`,
        description, release_date, popularity,
        avg_vote, vote_count, tmdb_id, 
      };  
      return movie;
    });
    
    return movies;
  }
};

export default MovieService;