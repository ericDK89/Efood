import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cart";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
