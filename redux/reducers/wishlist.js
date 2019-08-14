import * as types from '../actions/actionTypes';

const initialState = {
  like: false
};

export default function wishlist(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIKE:
      return {
        ...state,
        like: true
      };
    case types.DISLIKE:
      return {
        ...state,
        like:false
      };
    default:
      return state;
  }
}
