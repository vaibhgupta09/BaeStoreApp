import {FETECHING_PRODUCTS_REQUEST,FETECHING_PRODUCTS_SUCCESS,FETECHING_PRODUCTS_FAILURE} from './actionTypes';
import URL from '../../routes/Constant';

export const fetechingProductsRequest = () => ({type:FETECHING_PRODUCTS_REQUEST});
export const fetechingProductsSuccess = json => ({
    type:FETECHING_PRODUCTS_SUCCESS,
    payload:json
});
export const fetechingProductsFailure = error => ({
    type:FETECHING_PRODUCTS_FAILURE,
    payload:error
});
export const fetchProducts = (categoryName)  => {
    return async dispatch => {
        dispatch(fetechingProductsRequest());
        try{
            let response = await fetch(URL+'/inventory/'+categoryName+'/showProduct');
            let json=await response.json();
           
            dispatch(fetechingProductsSuccess(json));
        }
        catch(error)
        {
            dispatch(fetechingProductsFailure(error));
        }
    }
}

