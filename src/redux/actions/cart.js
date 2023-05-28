import {
  deleteCartClear,
  deleteFromCartById,
  getCardStatistic,
  getCart,
  patchProductCart,
  postToCart,
} from '../../services/axios/cart-calls';

export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});
export const clearCart = () => {
  return async (dispatch) => {
    await deleteCartClear();
    dispatch({
      type: 'CLEAR_CART',
    });
  };
};

export const removeCartItem = (id, index) => {
  return async (dispatch) => {
    await deleteFromCartById(id);
    dispatch({
      type: 'REMOVE_CART_ITEM',
      payload: index,
    });
    dispatch(fetchCartStatistic());
  };
};

export const updateCartItemCount = ({ id, newCount, productIndex }) => {
  return async (dispatch) => {
    await patchProductCart({ id, newCount });

    dispatch({
      type: 'SET_UPDATE_COUNT_ITEM',
      payload: { productIndex, newCount },
    });
    dispatch(fetchCartStatistic());
  };
};

export const addProductToCart = (data) => {
  return async () => {
    await postToCart({
      product_id: data.productId,
      size: data.size,
      gender: data.gender,
      quantity: 1,
    });
  };
};

export const fetchCartItems = () => {
  return async (dispatch) => {
    const { data } = await getCart();
    dispatch({
      type: 'SET_CART_ITEMS',
      payload: data,
    });
  };
};

export const fetchCartStatistic = () => {
  return async (dispatch) => {
    const { data } = await getCardStatistic();
    dispatch({
      type: 'SET_CART_STATISTIC',
      payload: {
        totalPrice: data.price_sum || 0,
        totalCount: data.quantity || 0,
      },
    });
  };
};
