import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../products/productsSlice'
import cartReducer from '../cart/cartSlice'

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart:cartReducer,
  },
});
