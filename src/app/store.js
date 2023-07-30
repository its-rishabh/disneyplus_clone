import { configureStore, getDefaultMiddleware, createCustomMiddleWare } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';

export default configureStore({
    reducer: {
        user: userReducer
    },        
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createCustomMiddleWare()),
});