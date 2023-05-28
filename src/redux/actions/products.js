import {
  getProducts,
  getProductsCategories,
} from '../../services/axios/products-calls';

export const fetchProducts = (filterOptions) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_PRODUCTS_LOADING',
    });

    try {
      const { data } = await getProducts(filterOptions);
      dispatch({
        type: 'SET_PRODUCTS_SUCCESS',
        payload: data,
      });
    } catch (error) {
      // Обработка ошибки
      dispatch({
        type: 'SET_PRODUCTS_FAILURE',
        payload: error.message,
      });
    }
  };
};

export const fetchProductsCategories = () => {
  return async (dispatch) => {
    const { data } = await getProductsCategories();
    dispatch({
      type: 'SET_PRODUCTS_CATEGORIES',
      payload: data,
    });
  };
};
