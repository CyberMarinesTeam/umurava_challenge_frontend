import { configureStore } from "@reduxjs/toolkit";
import { challengeSlice } from "./slices/challengeSlice";
import { authApi } from "./slices/authSlice";
import authReducer from "./slices/authSlice";
import { participantsApi } from "./slices/participantsSlice";
import searchReducer from "./slices/searchSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      auth: authReducer,
      [challengeSlice.reducerPath]: challengeSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [participantsApi.reducerPath]: participantsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(challengeSlice.middleware)
        .concat(authApi.middleware)
        .concat(participantsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
