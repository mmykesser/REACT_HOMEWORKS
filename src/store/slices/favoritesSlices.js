import { createSlice } from '@reduxjs/toolkit';
import storageService from '../../utils/StorageService';

const favoritesService = new storageService.constructor(
  storageService.constructor.storageTypes.local,
  'favorites'
);

const saveToLocalStorage = (state) => {
  favoritesService._rewriteStorageData(state);
};

export const favoritesSlices = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const newItem = action.payload;
      if (!state.some((item) => item.id === newItem.id)) {
        state.push(newItem);
        saveToLocalStorage(state);
      }
    },
    removeFromFavorites: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
    setFavorites: (state, action) => {
      saveToLocalStorage(action.payload);
      return action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoritesSlices.actions;

export default favoritesSlices.reducer;
