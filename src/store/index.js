import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slices/contactSlices.js';

const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});

export default store;
