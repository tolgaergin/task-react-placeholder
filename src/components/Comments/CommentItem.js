import React from 'react';
import { Item } from './style';

import { capitalizeFirstLetter } from '../../constants/helpers';

const CommentItem = ({ comment, index }) => (
  <Item>{capitalizeFirstLetter(comment.body)}</Item>
);

export default CommentItem;
