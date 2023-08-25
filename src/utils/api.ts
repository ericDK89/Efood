import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPurchaseFood {
  products: [
    {
      id: number;
      price: number;
    }
  ];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: string;
      expires: {
        month: string;
        year: string;
      };
    };
  };
}

interface PurchaseFoodRes {
  orderId: string;
}

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
    postPurchaseFood: builder.mutation<PurchaseFoodRes, IPurchaseFood>({
      query: (body) => ({
        url: "/checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});
