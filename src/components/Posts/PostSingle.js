import React from 'react';
import Loading from '../Loading';

import Fakerator from 'fakerator';
import { PostImage, PostTitle, PostDetail } from './style';

import { randomCategory, capitalizeFirstLetter } from '../../constants/helpers';

// Generate placeholder avatar
const fake = Fakerator();

function PostSingle(props) {
  const { post } = props;

  if (post.title && post.body) {
    return (
      <div>
        <PostImage src={fake.internet.image(640, 480, randomCategory())} />
        <PostTitle>{capitalizeFirstLetter(post.title)}</PostTitle>
        <PostDetail>{capitalizeFirstLetter(post.body.replace(/\n/g, ''))}</PostDetail>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default PostSingle;
