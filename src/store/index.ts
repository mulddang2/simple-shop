import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { initialState } from './cart/CartSlice';
import { listenerMiddleware } from './middleware';

const cartState = JSON.parse(localStorage.getItem('cart') || 'null');

const store = configureStore({
  preloadedState: {
    cartReducer: cartState === null ? initialState : cartState,
  },
  reducer: {
    cartReducer: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
