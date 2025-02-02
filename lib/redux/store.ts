import { configureStore } from "@reduxjs/toolkit";
import { challengeSlice } from "./slices/challengeSlice";
import { authApi } from "./slices/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [challengeSlice.reducerPath]: challengeSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(challengeSlice.middleware)
        .concat(authApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
