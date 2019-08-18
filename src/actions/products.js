import fetch from 'cross-fetch';

import { URL } from '../utils/constants/urls';

export const GET_PRODUCTS_STARTED = 'gousto/products/GET_PRODUCTS_STARTED';
export const GET_PRODUCTS_SUCCESS = 'gousto/products/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'gousto/products/GET_PRODUCTS_ERROR';
export const FILTER_PRODUCTS_BY_CATEGORY =
  'gousto/products/FILTER_PRODUCTS_BY_CATEGORY';
export const SEARCH_PRODUCTS_BY_TITLE =
  'gousto/products/SEARCH_PRODUCTS_BY_TITLE';
const getProductsStarted = () => ({
  type: GET_PRODUCTS_STARTED,
});

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: { products },
});

const getProductsError = error => ({
  type: GET_PRODUCTS_ERROR,
  payload: { error },
  error: true,
});

const getProducts = () => {
  return async dispatch => {
    dispatch(getProductsStarted());

    try {
      const response = await fetch(URL.products);
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }

      const { data } = await response.json();

      dispatch(getProductsSuccess(data));
    } catch (error) {
      dispatch(getProductsError(error.message));
    }
  };
};

const filterProductsByCategory = categoryId => ({
  type: FILTER_PRODUCTS_BY_CATEGORY,
  payload: { categoryId },
});

const searchProductsByTitle = title => ({
  type: SEARCH_PRODUCTS_BY_TITLE,
  payload: { title },
});

export { getProducts, filterProductsByCategory, searchProductsByTitle };
