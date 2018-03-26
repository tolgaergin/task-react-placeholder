import * as types from '../../constants/action-types';
import axios from 'axios';
import { API_URL } from '../../constants/config';

const postsFulfilled = payload => ({
  type: types.POSTS_FULFILLED,
  payload,
});

const postsPending = payload => ({
  type: types.POSTS_PENDING,
  payload,
});

export const postsShouldFetch = payload => ({
  type: types.POSTS_SHOULD_FETCH,
  payload,
});

const postsRejected = payload => ({
  type: types.POSTS_REJECTED,
  payload,
});

const checkPosts = state => {
  const posts = state.posts;

  // if posts array is empty
  if (posts.data.length === 0) {
    return true;
  }

  // if force to isFetch
  if (posts.shouldFetch) {
    return true;
  }

  // if fetching currently, stop fetching again
  if (posts.isFetching) {
    return false;
  }
};

export const getPosts = () => (dispatch, getState) => {

  if (checkPosts(getState())) {
    dispatch(postsPending('loading'));

    axios
      .get(`${API_URL}/posts?_limit=10`)
      .then(response => {
        dispatch(postsFulfilled(response.data));
      })
      .catch(error => {
        dispatch(postsRejected(error));
      });

  }
};

const detailFulfilled = (dataPost, dataComments) => ({
  type: types.DETAILS_FULFILLED,
  dataPost,
  dataComments,
});

const detailPending = payload => ({
  type: types.DETAILS_PENDING,
  payload,
});

const detailRejected = payload => ({
  type: types.DETAILS_REJECTED,
  payload,
});

export const getPostsDetail = (id) => (dispatch, getState) => {

  dispatch(detailPending('loading'));

  const getPostById = () =>  axios.get(`${API_URL}/posts/${id}`);
  const getCommentsById = () =>  axios.get(`${API_URL}/posts/${id}/comments`);

  axios.all([getPostById(), getCommentsById()])
    .then(axios.spread((dataPost, dataComments)=>(
      dispatch(detailFulfilled(dataPost, dataComments))
    )))
    .catch((err) => {
      dispatch(detailRejected());
    });
};
