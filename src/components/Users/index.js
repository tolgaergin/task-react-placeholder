import React from 'react';
import { ItemList } from './style';
import Loading from '../Loading';

import UserItem from './UserItem';

function UserList(props) {
  const { users, isFetching } = props;

  if (isFetching) {
    return <Loading />;
  } else {
    return (
      <ItemList>
        {
          Object.keys(users).map(key =>
            <UserItem
              key={key}
              index={key}
              user={users[key]} />
          )
        }
      </ItemList>
    );
  }
};

export default UserList;
