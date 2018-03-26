import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {

    case types.USERS_SHOULD_FETCH: {
      return {
        ...state,
        shouldFetch: true,
        error: null,
      };
    }

    case types.USERS_FULFILLED: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
        error: null,
      };
    }

    case types.USERS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    }

    case types.USERS_REJECTED: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default:
      return state;

  }
};

export default users;
