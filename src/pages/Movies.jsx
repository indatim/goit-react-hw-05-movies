import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getKeyWord } from 'components/tmdb-api';
import { Form, Input } from './Movies.styled';
import { SearchBtn } from 'components/Button/Buttons.styled';
import { StyledIoSearchCircle } from 'components/Icons/Icons.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/Movielist';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') ?? '';

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: name });
    setName('');
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  useEffect(() => {
    const fetchByName = async () => {
      try {
        const { results } = await getKeyWord(searchName);
        setMovies(results);
      } catch (err) {
        return err.message;
      }
    };
    fetchByName();
  }, [searchName]);

  return (
    <>
      <Form onSubmit={onHandleSubmit}>
        <Input
          type="text"
          value={name}
          placeholder="Enter movie title ..."
          onChange={handleChange}
        />
        <SearchBtn type="submit">
          <StyledIoSearchCircle />
          Search
        </SearchBtn>
      </Form>
      <Suspense fallback={<Loader />}></Suspense>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
