import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemList = styled.div `
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled(Link) `
  position: relative;
  min-width: 28%;
  max-width: 240px;
  padding: 0;
  margin: 15px;
  border: 1px solid rgba(205, 205, 205, 0.5);
  border-radius: 4px;

  box-shadow: 0 0 0 0 #00000005;
  transition: box-shadow 0.3s ease-out;
  text-decoration: none;
  color: #333;

  &:hover {
    box-shadow: 0 0 20px 3px #00000014;
  }
`;

export const UserPhoto = styled.img `
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 20px auto;
`;

export const UserFullName = styled.div `
  font-size: 18px;
  text-align: center;
`;

export const UserName = styled.div `
  opacity: 0.8;
  text-align: center;
`;

export const UserLinks = styled.ul `
  list-style-type: none;
  font-size: 13px;
  opacity: 0.9;
  margin: 15px 0 0;
  padding: 0;
`;

export const LinkItem = styled.li `
  display: block;
  padding: 8px 15px;
  border-top: 1px solid #f0f0f0;
`;
