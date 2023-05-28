import { Axios, AuthApiToken } from './axios-config';

export const getCart = () => Axios.get('/cart/', { headers: AuthApiToken() });

export const postToCart = (data) =>
  Axios.post('/cart/', data, { headers: AuthApiToken() });

export const patchProductCart = ({ id, newCount }) => {
  return Axios.patch(
    `/cart/${id}/`,
    { quantity: newCount },
    {
      headers: AuthApiToken(),
    }
  );
};

export const getCardStatistic = () =>
  Axios.get('/cart/cart_statistic/', { headers: AuthApiToken() });

export const deleteFromCartById = (id) =>
  Axios.delete(`/cart/${id}/`, { headers: AuthApiToken() });
export const deleteCartClear = () =>
  Axios.delete(`/cart/clear/`, { headers: AuthApiToken() });
