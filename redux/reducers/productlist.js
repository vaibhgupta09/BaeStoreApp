import {FETECHING_PRODUCTS_REQUEST,FETECHING_PRODUCTS_SUCCESS,FETECHING_PRODUCTS_FAILURE}  from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  errorMessage:'',
  productArray:[]
};

const productlist=(state=initialState,action) =>{
    switch (action.type)
    {
        case FETECHING_PRODUCTS_REQUEST:
        return {...state,isFetching:true};
        case FETECHING_PRODUCTS_FAILURE:
        return {...state,isFetching:false,errorMessage:action.payload};
        case FETECHING_PRODUCTS_SUCCESS:
        return {...state,isFetching:false,productArray:action.payload}
        default:
        return state;
    }

}
export default productlist;