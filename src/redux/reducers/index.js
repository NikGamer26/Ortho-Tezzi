import { combineReducers } from 'redux';

import cartReducer from './cart';
import userReducer from './user';
import productsReducer from './products';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
});

export default rootReducer;
