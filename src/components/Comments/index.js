import React from 'react';
import { ItemList } from './style';
import Loading from '../Loading';

import CommentItem from './CommentItem';

function CommentsList(props) {
  const { comments, isFetching } = props;

  if (isFetching) {
    return <Loading />;
  } else {
    return (
      <ItemList>
        {
          Object.keys(comments).map(key =>
            <CommentItem
              key={key}
              index={key}
              comment={comments[key]} />
          )
        }
      </ItemList>
    );
  }
};

export default CommentsList;
