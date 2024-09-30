import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from './slicesApi/fakeStoreApi.js';
import cartReducer from './slices/shopCartSlices.js';

const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    shoppingCart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fakeStoreApi.middleware);
  },
});

export default store;
