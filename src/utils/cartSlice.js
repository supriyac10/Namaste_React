import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({
                ...action.payload,
                uniqueId: Date.now() + Math.random()
            });
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.uniqueId !== action.payload
            );
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

