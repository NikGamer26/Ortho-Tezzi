const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_CART_STATISTIC':
      return {
        ...state,
        totalPrice: action.payload.totalPrice || 0,
        totalCount: action.payload.totalCount,
      };

    case 'REMOVE_CART_ITEM': {
      const newItems = [...state.items];
      newItems.splice(action.payload, 1);
      return {
        ...state,
        items: newItems,
      };
    }

    case 'SET_UPDATE_COUNT_ITEM': {
      const newItems = [...state.items];

      newItems[action.payload.productIndex].quantity = action.payload.newCount;
      return {
        ...state,
        items: newItems,
      };
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, items: {} };

    default:
      return state;
  }
};

export default cart;
