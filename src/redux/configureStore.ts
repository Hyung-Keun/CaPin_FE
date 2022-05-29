import { createLogger } from "redux-logger";

import { authApi } from "./api/authApi";
import { coordinateApi } from "./api/coordinateApi";
import { placeApi } from "./api/placeApi";
import { studyApi } from "./api/studyApi";
import areaReducer from "./modules/areaSlice";
import authReducer from "./modules/authSlice";
import initReducer from "./modules/initSlice";
import mapReducer from "./modules/mapSlice";
import studyReducer from "./modules/studySlice";
import userReducer from "./modules/userSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  area: areaReducer,
  auth: authReducer,
  init: initReducer,
  map: mapReducer,
  study: studyReducer,
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [placeApi.reducerPath]: placeApi.reducer,
  [studyApi.reducerPath]: studyApi.reducer,
  [coordinateApi.reducerPath]: coordinateApi.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { ignoredPaths: ["some.nested.path"] },
      serializableCheck: { ignoredPaths: ["some.nested.path"] },
    }).concat(loggerMiddleware),
  // .concat(authApi.middleware)
  // .concat(placeApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
