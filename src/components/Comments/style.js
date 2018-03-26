import styled from 'styled-components';

export const ItemList = styled.ul `
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li `
  position: relative;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(205, 205, 205, 0.5);

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

export const UserPhoto = styled.img `
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;
