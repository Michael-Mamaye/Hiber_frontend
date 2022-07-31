import { createSlice } from "@reduxjs/toolkit";

const memberReducer = createSlice({
    name: 'membersList',
    initialState:{
        membersData:[],
        
    }
})

export default memberReducer.reducer;
