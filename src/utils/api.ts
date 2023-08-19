import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => "/restaurantes",
    }),
    getFoods: builder.query<Restaurants, string>({
      query: (id: string) => `/restaurantes/${id}`,
    }),
  }),
});
