import { createLogger } from "redux-logger";

import { authApi } from "./api/authApi";
import authReducer from "./modules/authSlice";
import userReducer from "./modules/userSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { ignoredPaths: ["some.nested.path"] },
      serializableCheck: { ignoredPaths: ["some.nested.path"] },
    }).concat(loggerMiddleware),

  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
