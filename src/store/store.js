import { configureStore } from '@reduxjs/toolkit';
import storeDetailsReducer from './storeDetailsReducer';  // import your slice reducer
import Cart from './Cart'

export const store = configureStore({
  reducer: {
    auth: storeDetailsReducer, 
    cart: Cart
  },
 
});