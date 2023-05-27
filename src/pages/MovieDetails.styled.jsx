import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainInfo = styled.div`
  display: flex;
  margin-bottom: 5px;

  display: grid;
  grid-template:
    'image about about'
    'image about about'
    'image addinfo addinfo';

  > img {
    display: block;
    grid-area: image;
    object-fit: cover;
    background-color: #dedede;
  }
`;

export const AboutMovie = styled.div`
  margin-left: 20px;
  grid-area: about;
  margin-bottom: 0px;

  > h2 {
    margin: 0;
    font-size: 40px;
    font-weight: 500;
  }

  > p {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  > h3 {
    margin: 0;
    font-size: 16px;
  }
`;

export const AddInfo = styled.div`
  display: flex;
  grid-area: addinfo;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  margin-left: 20px;
  margin-bottom: 20px;
  justify-content: center;

  > p {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
  }

  > ul {
    display: flex;
    padding: 0;
    list-style: none;
    gap: 10px;
  }
`;

export const LinkBack = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 8px 16px;
  margin-bottom: 6px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #1a9c00;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: white;
    background-color: #20be00;
  }
`;

export const LinkCast = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 8px 16px;
  margin-bottom: 6px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #1a9c00;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: white;
    background-color: #20be00;
  }
`;

export const LinkReviews = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 8px 16px;
  margin-bottom: 6px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #1a9c00;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: white;
    background-color: #20be00;
  }
`;