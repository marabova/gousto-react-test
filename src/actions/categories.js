import fetch from 'cross-fetch';

import { URL } from '../utils/constants/urls';

export const GET_CATEGORIES_START = 'gousto/categories/GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS =
  'gousto/categories/GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'gousto/categories/GET_CATEGORIES_ERROR';
export const SELECT_CATEGORY = 'gousto/categories/SELECT_CATEGORY';

const selectCategory = categoryId => ({
  type: SELECT_CATEGORY,
  payload: { categoryId },
});

const getCategoriesStart = () => ({
  type: GET_CATEGORIES_START,
});

const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { categories },
});

const getCategoriesError = error => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { error },
  error: true,
});

const getCategories = () => {
  return async dispatch => {
    dispatch(getCategoriesStart());

    try {
      const response = await fetch(URL.categories);
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }

      const { data } = await response.json();

      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      dispatch(getCategoriesError(error.message));
    }
  };
};

export { getCategories, selectCategory };
