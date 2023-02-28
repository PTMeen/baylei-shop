import { convertObjToArr } from "@/utils/convertObjToArr";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, ...rest } = action.payload;

      if (!state.cartItems[_id]) {
        state.cartItems[_id] = { ...rest, qty: 1 };
        return;
      }

      state.cartItems[_id].qty += 1;
    },
  },
});

export const getCartItems = (state) => {
  return convertObjToArr(state.cart.cartItems);
};

export const getTotalCartItemsQty = (state) => {
  if (!state.cart) return;
  const itemList = convertObjToArr(state.cart.cartItems);
  const totalQty = itemList.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);
  return totalQty;
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
