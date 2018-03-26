import * as types from '../../constants/action-types';
import axios from 'axios';
import { API_URL } from '../../constants/config';

const userPostsFulfilled = (dataUser, dataPosts) => ({
  type: types.USERPOSTS_FULFILLED,
  dataUser,
  dataPosts,
});

const userPostsPending = payload => ({
  type: types.USERPOSTS_PENDING,
  payload,
});

const userPostsRejected = payload => ({
  type: types.USERPOSTS_REJECTED,
  payload,
});

export const getUserPosts = (id) => (dispatch, getState) => {

  dispatch(userPostsPending('loading'));

  const getUserById = () => axios.get(`${API_URL}/users/${id}`);
  const getPostsByUserId = () => axios.get(`${API_URL}/posts?userId=${id}`);

  axios.all([getUserById(), getPostsByUserId()])
    .then(axios.spread((dataUser, dataPosts) => (
      dispatch(userPostsFulfilled(dataUser, dataPosts))
    )))
    .catch((err) => {
      dispatch(userPostsRejected());
    });
};
