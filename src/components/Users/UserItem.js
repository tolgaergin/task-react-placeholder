import React from 'react';

import { Item, UserPhoto, UserFullName, UserName, UserLinks, LinkItem } from './style';
import Fakerator from 'fakerator';

// Generate placeholder avatar
const fake = Fakerator();

const UserItem = ({ user, index }) => (
  <Item to={`/posts/user/${user.id}`} user={user}>
    <UserPhoto src={fake.internet.avatar()} />
    <UserFullName>{user.name}</UserFullName>
    <UserName>{user.username}</UserName>
    <UserLinks>
      <LinkItem>Website: {user.website}</LinkItem>
      <LinkItem>Email: {user.email}</LinkItem>
    </UserLinks>
  </Item>
);

export default UserItem;
