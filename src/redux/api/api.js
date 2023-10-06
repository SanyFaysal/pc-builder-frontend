// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pc-builder-server-hfm7oupw6-sanyfaysal.vercel.app/',
  }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => '/news',
    }),
  }),
});

export const { useGetNewsesQuery } = apiSlice;
