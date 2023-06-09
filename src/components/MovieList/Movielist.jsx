import { Link, useLocation } from 'react-router-dom';
import defaultImage from '../noposter.png';
import {
  Container,
  MovieCard,
  MovieTitle,
  MovieImg,
} from 'components/MovieList/MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300';

  return (
    <Container>
      {movies.map(movie => {
        const { title, release_date, poster_path, id } = movie;
        const poster = poster_path === null ? `${defaultImage}` : `${POSTER_URL}/${poster_path}`;
        
        return (
          <MovieCard key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg src={poster} alt={title} />
              <MovieTitle>
                {title}, {release_date.slice(0, 4)}
              </MovieTitle>
            </Link>
          </MovieCard>
        );
      })}
    </Container>
  );
};