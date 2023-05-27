import { LoadMoreBtn } from 'components/Button/Buttons.styled';

export const LoadMoreButton = ({ clickBtn }) => (
  <LoadMoreBtn type="button" onClick={clickBtn}>
    Load More
  </LoadMoreBtn>
);
