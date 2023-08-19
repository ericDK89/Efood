import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  items: Foods[];
}

const initialState: ICart = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Foods>) => {
      const food = action.payload;

      const alreadyAdded = state.items.find(
        (food) => food.id === action.payload.id
      );

      if (food && !alreadyAdded) {
        state.items.push(food);
      } else {
        alert("Erro");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items = state.items.filter((food) => food.id !== id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice;
