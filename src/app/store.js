// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from '../features/user/userSlice';

// export default configureStore({
//     reducer: {
//         user: userReducer
//     },        
//     middleware: getDefaultMiddleware({
//         serializableCheck: false,
//     }),
// });


import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import logger from "redux-logger";

const store = configureStore({
    reducer: {
      user: userReducer,
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

  export default store;