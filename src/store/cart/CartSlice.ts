import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { CartItem } from '../../types/CartItem';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      const inputProductId = action.payload;

      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].productId === inputProductId) {
          state.items[i].count++;
          return;
        }
      }

      state.items.push({ productId: inputProductId, count: 1 });
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const inputProductId = action.payload;

      for (let i = 0; i < state.items.length; i++) {
        if (
          state.items[i].productId === inputProductId &&
          1 < state.items[i].count
        ) {
          state.items[i].count--;
          return;
        }
      }

      state.items = state.items.filter(
        (itme) => itme.productId !== action.payload
      );
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cartReducer.items;
export const getCartItemCount = (state: RootState) => {
  let totalCount = 0;

  state.cartReducer.items.forEach((item) => {
    totalCount += item.count;
  });

  return totalCount;
};

export default cartSlice.reducer;
