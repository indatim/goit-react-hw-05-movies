import styled from '@emotion/styled';
import { SiThemoviedatabase } from 'react-icons/si';
import { RiMovie2Fill } from 'react-icons/ri';
import { HiHome } from 'react-icons/hi';
import { IoSearchCircle, IoCaretBackCircle } from 'react-icons/io5';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { TbMessages } from 'react-icons/tb';

export const StyledSiThemoviedatabase = styled(SiThemoviedatabase)`
  display: flex;
  color: #1a9c00;
  font-size: 100px;
  justify-content: center;
  background-color: transparent;
  border: 5px solid transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.09);
    color: #20be00;
  }
`;

export const StyledRiMovie2Fill = styled(RiMovie2Fill)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  background-color: transparent;
  border: 5px solid transparent;
`;

export const StyledHiHome = styled(HiHome)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  background-color: transparent;
  border: 5px solid transparent;
`;

export const StyledIoSearchCircle = styled(IoSearchCircle)`
  display: flex;
  font-size: 24px;
  justify-content: center;
  background-color: transparent;
`;

export const StyledIoCaretBackCircle = styled(IoCaretBackCircle)`
  display: flex;
  font-size: 20px;
  align-self: center;
  background-color: transparent;
  border: 5px solid transparent;
`;

export const StyledFaUserCircle = styled(FaUserCircle)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  background-color: transparent;
  border: 5px solid transparent;
`;

export const StyledFaUsers = styled(FaUsers)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  background-color: transparent;
  border: 5px solid transparent;
`;

export const StyledTbMessages = styled(TbMessages)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  background-color: transparent;
  border: 5px solid transparent;
`;