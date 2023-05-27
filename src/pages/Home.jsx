import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MovieList/Movielist';
import { getMovies } from 'components/tmdb-api';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await getMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {error ? (
        <p>Please try again later.</p>
      ) : null}
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;