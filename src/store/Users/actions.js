import * as types from '../../constants/action-types';
import axios from 'axios';
import { API_URL } from '../../constants/config';

const usersFulfilled = payload => ({
  type: types.USERS_FULFILLED,
  payload,
});

const usersPending = payload => ({
  type: types.USERS_PENDING,
  payload,
});

export const usersShouldFetch = payload => ({
  type: types.USERS_SHOULD_FETCH,
  payload,
});

const usersRejected = payload => ({
  type: types.USERS_REJECTED,
  payload,
});

const checkUsers = state => {
  const users = state.users;

  // if users array is empty
  if (users.data.length === 0) {
    return true;
  }

  // if force to isFetch
  if (users.shouldFetch) {
    return true;
  }

  // if fetching currently, stop fetching again
  if (users.isFetching) {
    return false;
  }
};

export const getUsers = () => (dispatch, getState) => {

  if (checkUsers(getState())) {
    dispatch(usersPending('loading'));

    axios
      .get(`${API_URL}/users`)
      .then(response => {
        dispatch(usersFulfilled(response.data));
      })
      .catch(error => {
        dispatch(usersRejected(error));
      });

  }
};
