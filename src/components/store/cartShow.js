import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
    show:false
}

const cartShowSlice = createSlice({
    name:"showCart",
    initialState: initialShowState,
    reducers:{
        cartShow(state){
            state.show = !state.show
        }
    }
})

export const cartShowActions = cartShowSlice.actions;
export default cartShowSlice.reducer;