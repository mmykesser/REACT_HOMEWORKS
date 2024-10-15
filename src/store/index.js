import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from './slicesApi/fakeStoreApi.js';
import cartReducer from './slices/shopCartSlices.js';
import favoritesReducer from './slices/favoritesSlices.js';

const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    shoppingCart: cartReducer,
    favorites: favoritesReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fakeStoreApi.middleware);
  },
});

export default store;
