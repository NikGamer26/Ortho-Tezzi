const initialState = {
  products: [],
  categories: null,
  error: null,
  loading: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case 'SET_PRODUCTS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'SET_PRODUCTS_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default products;
