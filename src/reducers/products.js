import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS_BY_CATEGORY,
  SEARCH_PRODUCTS_BY_TITLE,
} from '../actions/products';

const initialState = {
  products: [],
  filteredProducts: [],
  searchedProducts: [],
  loading: false,
  error: false,
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case FILTER_PRODUCTS_BY_CATEGORY: {
      const filteredProducts = state.products.filter(product => {
        const filteredCategories = product.categories.filter(
          category => category.id === payload.categoryId
        );

        return filteredCategories.length > 0;
      });

      return {
        ...state,
        filteredProducts,
        searchedProducts: [],
      };
    }

    case SEARCH_PRODUCTS_BY_TITLE: {
      const searchedProducts = state.filteredProducts.filter(item => {
        if (payload.title) {
          return (
            item.title.toLowerCase().search(payload.title.toLowerCase()) !== -1
          );
        }

        return item;
      });

      return { ...state, searchedProducts };
    }

    default:
      return state;
  }
};

export default productsReducer;
