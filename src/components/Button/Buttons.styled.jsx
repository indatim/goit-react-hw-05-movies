import styled from '@emotion/styled';

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
