import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {

    case types.POSTS_SHOULD_FETCH: {
      return {
        ...state,
        shouldFetch: true,
        error: null,
      };
    }

    case types.POSTS_FULFILLED: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
        error: null,
      };
    }

    case types.POSTS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    }

    case types.POSTS_REJECTED: {
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

export default posts;
