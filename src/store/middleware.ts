import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { addItem, clearItem, removeItem } from './cart/CartSlice';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addItem, removeItem, clearItem),
  effect: (_action, listenerApi) => {
    (async () => {
      localStorage.setItem(
        'cart',
        JSON.stringify((listenerApi.getState() as RootState).cartReducer)
      );
    })();
  },
});
