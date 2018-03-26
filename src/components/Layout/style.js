import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div `
  display: block;
  text-align: center;
  padding: 10px 0 25px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 5px 4px 0px #f0f0f078;
`;

export const HeaderLink = styled(NavLink) `
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 10px;
  border-radius: 20px;
  color: #555;
  border: 1px solid transparent;

  &:hover {
    color: #0da421;
    border-color: #0da421;
  }

  &.selected {
    color: #0da421;
  }
`;

export const StyledTitle = styled.div `
  font-size: 20px;
  margin: 30px 0 35px 0;
  text-align: center;
  opacity: 0.5;
`;
