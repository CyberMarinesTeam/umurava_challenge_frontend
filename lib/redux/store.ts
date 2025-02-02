import { configureStore } from "@reduxjs/toolkit";
import { challengeSlice } from "./slices/challengeSlice";
export const store = configureStore({
	reducer: {
		[challengeSlice
			.reducerPath]: challengeSlice.reducer,
	},
//   middleware: (getDefaultMiddleware) => {
//     getDefaultMiddleware().concat(challengeSlice.middleware);
//   },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
