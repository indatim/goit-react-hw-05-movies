import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/tmdb-api';
import { Review } from './Reviews.styled';
import { StyledFaUserCircle } from 'components/Icons/Icons.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (err) {
        return err.message;
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<Loader />}></Suspense>
      {reviews.map(({ author, content, id }) => (
        <Review key={id}>
          <h4>
            <StyledFaUserCircle />
            {author}
          </h4>
          <p>{content}</p>
        </Review>
      ))}
    </>
  );
};
export default Reviews;
