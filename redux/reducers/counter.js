import * as types from '../actions/actionTypes';
import helpers from '../../routes/helper';
const initialState = {
  count: 0,
  cartText: 'Add to cart'
};

export default function counter(state = initialState, action = {}) {

  switch (action.type) {
    case types.INCREMENT:
      return {
       
        count: state.count + 1,
        cartText:'Goto cart'
      };
    case types.DECREMENT:
      return {
       
        count: state.count - 1,
        cartText: 'Add to cart'
      };
    case types.CHANGETEXT:
    return{
      ...state,
      cartText:'Goto cart'
    } 
    case types.CHANGETEXT1:
    return{
      ...state,
      cartText:'Add to cart'
    } 
    default:
      return state;
  }
}
