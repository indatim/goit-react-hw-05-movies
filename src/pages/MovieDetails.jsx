import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { MainInfo, AboutMovie, AddInfo, LinkBack, LinkCast, LinkReviews } from './MovieDetails.styled';
import { StyledIoCaretBackCircle, StyledFaUsers, StyledTbMessages } from 'components/Icons/Icons.styled';
import defaultImage from './noposter.png';
import { Loader } from 'components/Loader/Loader';
import { getMovieById } from 'components/tmdb-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovies(data);
      } catch (err) {
        return err.message;
      }
    };
    fetchData();
  }, [movieId]);
  
  return (
    <main>
      <LinkBack to={location.state?.from || '/'}>
        <StyledIoCaretBackCircle /> Go Back
      </LinkBack>
      {movies && (
        <>
          <MainInfo>
            <img
              src={
                movies.poster_path === null
                  ? `${defaultImage}`
                  : `${POSTER_URL}/${movies.poster_path}`
              }
              alt={movies.title}
            />

            <AboutMovie>
              <h2>{movies.title}</h2>
              <p>Rating: {movies.vote_average}</p>
              <p>Release Date: {movies.release_date}</p>
              <h3>Overview:</h3>
              <p>{movies.overview}</p>
            </AboutMovie>
            <AddInfo>
              <p>Additional information:</p>
              <ul>
                <li>
                  <LinkCast
                    to={`/movies/${movieId}/cast`}
                    state={{ from: location.state?.from || '/movies' }}
                  >
                    <StyledFaUsers /> Cast
                  </LinkCast>
                </li>
                <li>
                  <LinkReviews
                    to={`/movies/${movieId}/reviews`}
                    state={{ from: location.state?.from || '/movies' }}
                  >
                    <StyledTbMessages/>Reviews
                  </LinkReviews>
                </li>
              </ul>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </AddInfo>
          </MainInfo>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
