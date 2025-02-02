import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const challengeSlice = createApi({
  reducerPath: "challenge",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/challenges" }),
  endpoints: (builder) => ({
    getChallenges: builder.query({
      query: () => "/",
    }),
    getOpenChallengeDaysAgo: builder.query({
      query: (daysAgo) => `/open/${daysAgo}`,
    }),
    getOngoingChallengeDaysAgo: builder.query({
      query: (daysAgo) => `/ongoing/${daysAgo}`,
    }),
    getCompletedChallengeDaysAgo: builder.query({
      query: (daysAgo) => `/completed/${daysAgo}`,
    }),
    getChallengeById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});
