import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import { Container, CastCard } from './Cast.styled';
import defaultImage from './noimage.png';
import { Suspense } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const POSTER_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCast(movieId);
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
        <>
          {cast.map(({ id, original_name, profile_path, character }) => (
            <CastCard key={id}>
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
            </CastCard>
          ))}
        </>
      </Container>
    </>
  );
};

export default Cast;
