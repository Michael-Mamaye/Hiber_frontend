import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import feedbackReducer from "./reducers/feedbackReducer";
import membersReducer from "./reducers/memberReducer";
import productReducer from "./reducers/productReducer";
import servicesReducer from "./reducers/serviceReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware= createSagaMiddleware()

const store= configureStore({
    reducer:{
        servicesData:servicesReducer,
        productsData: productReducer,
        feedbacksData: feedbackReducer,
        membersData:membersReducer
    },
    middleware:(curryGetDefaultMiddleware)=>curryGetDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export default store;