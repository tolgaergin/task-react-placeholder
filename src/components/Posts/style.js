import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemList = styled.div `
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled(Link) `
  position: relative;
  width: 31%;
  padding: 0;
  margin: 0 15px 30px 0;
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

export const PostImage = styled.img `
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const PostTitle = styled.div `
  font-weight: bold;
  font-size: 18px;
  padding: 15px 20px 0;
`;

export const PostDetail = styled.div `
  padding: 0 20px 20px;
  margin-top: 15px;
  opacity: 0.8;
`;;

export const UserPhoto = styled.img `
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;
