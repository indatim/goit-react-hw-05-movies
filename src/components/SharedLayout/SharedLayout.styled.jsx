import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
`;

export const LinkLogo = styled(NavLink)`
  text-decoration: none;
`;

export const Link = styled(NavLink)`
  display: flex;
  height: 50px;
  width: 50px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #1a9c00;
  }

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: white;
    background-color: #1a9c00;
  }
`;
