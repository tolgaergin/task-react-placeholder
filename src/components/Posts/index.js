import React from 'react';
import { ItemList } from './style';
import Loading from '../Loading';

import PostItem from './PostItem';

function PostsList(props) {
  const { posts, isFetching } = props;

  if (isFetching) {
    return <Loading />;
  } else {
    return (
      <ItemList>
        {
          Object.keys(posts).map(key =>
            <PostItem
              key={key}
              index={key}
              post={posts[key]} />
          )
        }
      </ItemList>
    );
  }
};

export default PostsList;
