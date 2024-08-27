import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api/postsApi.js';

export default configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});
