import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  dataPost: {},
  dataComments: [],
};

const details = (state = initialState, action) => {

  switch (action.type) {

    case types.DETAILS_FULFILLED: {
      return {
        ...state,
        dataPost: action.dataPost.data,
        dataComments: action.dataComments.data,
        isFetching: false,
        shouldFetch: false,
        error: null,
      };
    }

    case types.DETAILS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    }

    case types.DETAILS_REJECTED: {
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

export default details;
