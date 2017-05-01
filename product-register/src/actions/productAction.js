import { FETCH_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, SEARCH_PRODUCT } from './constants';

const fetchProductDone = products => ({ type: FETCH_PRODUCT, payload: products });

export const fetchProduct = () => (dispatch => fetch('http://localhost:3004/product')
    .then(res => res.json())
    .then(data => (dispatch(fetchProductDone(data))),
  ));

export const addProduct = newProduct => ({ type: ADD_PRODUCT, payload: newProduct });
export const deleteProduct = id => ({ type: DELETE_PRODUCT, payload: id });

export const searchProduct = searchkey => ({ type: SEARCH_PRODUCT, payload: searchkey });
