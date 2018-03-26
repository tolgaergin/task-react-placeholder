import * as types from '../../constants/action-types';
import axios from 'axios';
import { API_URL } from '../../constants/config';

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

  const getPostById = () => axios.get(`${API_URL}/posts/${id}`);
  const getCommentsById = () => axios.get(`${API_URL}/posts/${id}/comments`);

  axios.all([getPostById(), getCommentsById()])
    .then(axios.spread((dataPost, dataComments) => (
      dispatch(detailFulfilled(dataPost, dataComments))
    )))
    .catch((err) => {
      dispatch(detailRejected());
    });
};
