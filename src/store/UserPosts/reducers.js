import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  dataUser: {},
  dataPosts: [],
};

const userPosts = (state = initialState, action) => {

  switch (action.type) {

    case types.USERPOSTS_FULFILLED: {
      return {
        ...state,
        dataUser: action.dataUser.data,
        dataPosts: action.dataPosts.data,
        isFetching: false,
        shouldFetch: false,
        error: null,
      };
    }

    case types.USERPOSTS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    }

    case types.USERPOSTS_REJECTED: {
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

export default userPosts;
