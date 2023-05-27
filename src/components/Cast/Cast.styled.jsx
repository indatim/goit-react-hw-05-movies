import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  align-items: baseline;
  width: auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: space-around;
  grid-gap: 5px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const CastCard = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid black;
  border-radius: 4px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(191, 84, 84, 0.12);

  > img {
    display: block;
    width: 215px;
    height: 323px;
    background-color: #dedede;
    object-fit: cover;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  > a {
    text-decoration: none;
  }

  > h2 {
    margin: 4px 0px 0px 4px;
    font-size: 16px;
  }

  > p {
    margin: 4px 0px 6px 4px;
    font-size: 14px;
  }
`;