import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  justify-content: space-around;
  gap: 20px;
`;

export const MovieCard = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(191, 84, 84, 0.12);

  > a {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieTitle = styled.h4`
  padding: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
  align-content: center;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MovieImg = styled.img`
  display: block;
  width: 100%;
  height: 90%;
  object-fit: cover;
`;
