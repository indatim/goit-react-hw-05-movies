import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #1a9c00;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #20be00;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  padding: 8px 16px;
  border: 0px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #1a9c00;
  color: white;
  font-weight: 500;
  font-size: 16px;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: white;
    background-color: #1a9c00;
  }
`;
