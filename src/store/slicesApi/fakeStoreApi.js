import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../utils/API_CONFIG.js';

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (build) => ({
    getLimitProducts: build.query({
      query: (limit) => `products?limit=${limit}`,
    }),

    getAllProducts: build.query({
      query: () => `products`,
    }),

    getSingleProdukt: build.query({
      query: (productId) => `products/${productId}`,
    }),

    getSortResults: build.query({
      query: (desc) => `products?sort=${desc}`,
    }),

    getAllCategories: build.query({
      query: () => `products/categories`,
    }),
    getSpecificCategory: build.query({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const {
  useGetLimitProductsQuery,
  useGetAllProductsQuery,
  useGetSingleProduktQuery,
  useGetSortResults,
  useGetAllCategoriesQuery,
  useGetSpecificCategoryQuery,
} = fakeStoreApi;
