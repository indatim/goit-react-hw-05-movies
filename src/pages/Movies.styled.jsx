import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Input = styled.input`
  display: flex;
  width: 200px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: 0.3s linear;
  
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  &:focus {
    width: 350px;
  }
`;