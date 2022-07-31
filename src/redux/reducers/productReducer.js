import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name: 'productsList',
    initialState:{
        productsData:[],
       
    }
})

export default productReducer.reducer;
