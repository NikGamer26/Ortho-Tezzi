import { objectNotEmpty } from '../utils';
import { Axios } from './axios-config';

export const getProductsCategories = () => {
  return Axios.get('/product-type/');
};

export const getProducts = (filterOptions) => {
  let queryParams = '';
  const queryObject = {};

  if (filterOptions) {
    if (filterOptions?.sorting) queryObject.ordering = filterOptions.sorting;
    if (filterOptions?.category)
      queryObject.product_type = filterOptions.category;
  }

  if (objectNotEmpty(queryObject)) {
    queryParams += '?' + new URLSearchParams(queryObject).toString();
  }

  return Axios.get(`/product/${queryParams}`);
};
