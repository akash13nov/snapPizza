import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../utils/cartSlice';
import userReducer from '../utils/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
