import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'components/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import { Container, CardWrapper } from './Credits.styled';
import defaultImage from './noimage.png';
import { Suspense } from 'react';

const Credits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const POSTER_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCredits(movieId);
        setCast(data.cast);
      } catch (err) {
        return err.message;
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Container>
        <Suspense fallback={<Loader />}></Suspense>
        {/* <h3>Cast</h3> */}
        <>
          {cast.map(({ id, original_name, profile_path, character }) => (
            <CardWrapper key={id}>
              <img
                src={
                  profile_path === null
                    ? `${defaultImage}`
                    : `${POSTER_URL}/${profile_path}`
                }
                alt={''}
              />
              <h2>{original_name}</h2>
              <p>Character: {character}</p>
            </CardWrapper>
          ))}
        </>
      </Container>
    </>
  );
};

export default Credits;
