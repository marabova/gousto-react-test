import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  SELECT_CATEGORY,
} from '../actions/categories';

const initialState = {
  categories: [],
  selectedCategory: {},
  loading: false,
  error: false,
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
      };

    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        ...payload,
        loading: false,
        error: true,
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: state.categories.find(
          category => category.id === payload.categoryId
        ),
      };

    default:
      return state;
  }
};

export default categoriesReducer;
