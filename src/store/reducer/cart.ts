import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  items: Food[];
}

const initialState: ICart = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      const food = action.payload;

      const alreadyAdded = state.items.find(
        (food) => food.id === action.payload.id
      );

      if (food && !alreadyAdded) {
        state.items.push(food);
      } else {
        alert("Prato já adicionado.");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items = state.items.filter((food) => food.id !== id);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice;
