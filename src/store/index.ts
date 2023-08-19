import { configureStore } from "@reduxjs/toolkit";
import { api } from "../utils/api";
import cartSlice from "./reducer/cart";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
