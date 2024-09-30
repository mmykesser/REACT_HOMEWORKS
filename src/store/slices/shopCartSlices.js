import { createSlice } from '@reduxjs/toolkit';
import storageService from '../../utils/StorageService';

const saveToLocalStorage = (state) => {
  storageService._rewriteStorageData(state);
};

export const cartReducer = createSlice({
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity = 1 } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += quantity;
      } else {
        state.push({ id, title, price, quantity });
      }
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const newState = state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      saveToLocalStorage(newState);
      return newState;
    },
    setCart: (state, action) => {
      saveToLocalStorage(action.payload);
      return action.payload;
    },
    clearCart: () => {
      saveToLocalStorage([]);
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateCart, setCart, clearCart } =
  cartReducer.actions;

export default cartReducer.reducer;
