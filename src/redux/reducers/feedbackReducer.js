import { createSlice } from "@reduxjs/toolkit";

const feedbackReducer = createSlice({
    name: 'feedbacksList',
    initialState:{
        feedbacksData:[],
    },
})

export default feedbackReducer.reducer;
