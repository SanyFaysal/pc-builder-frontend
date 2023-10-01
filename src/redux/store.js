import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/api';
import productSlice from './product/productSlice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    buildComponent: productSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
