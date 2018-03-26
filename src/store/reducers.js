import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './Users/reducers';
import userPosts from './UserPosts/reducers';
import posts from './Posts/reducers';
import details from './Details/reducers';

export default combineReducers({
  router: routerReducer,
  users,
  userPosts,
  posts,
  details,
});
