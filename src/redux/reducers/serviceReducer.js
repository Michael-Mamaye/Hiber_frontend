import { createSlice } from "@reduxjs/toolkit";
import { Get_all_services } from "../constants";

const serviceReducer = createSlice({
    name: 'servicesList',
    initialState:{
        servicesData:[],
    },
    reducers:{
        getAllServices(){
            return Get_all_services
        }
    }
})

export default serviceReducer.reducer;
