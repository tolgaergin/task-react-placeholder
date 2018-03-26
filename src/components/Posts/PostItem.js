import React from 'react';
import Fakerator from 'fakerator';
import { Item, PostImage, PostTitle, PostDetail } from './style';

import { randomCategory, capitalizeFirstLetter } from '../../constants/helpers';

// Generate placeholder avatar
const fake = Fakerator();

const PostItem = ({ post, index }) => (
  <Item to={`/post/${post.id}`}>
    <PostImage src={fake.internet.image(640, 480, randomCategory())} />
    <PostTitle>{capitalizeFirstLetter(post.title)}</PostTitle>
    <PostDetail>{post.body.replace(/\n/g, '').substring(0, 80)}</PostDetail>
  </Item>
);

export default PostItem;
