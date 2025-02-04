import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Participant {
  id: string;
  user: string;
  challenge: string;
  status: boolean;
}

export const participantsApi = createApi({
  reducerPath: "participantsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/participants" }),
  endpoints: (builder) => ({
    startChallenge: builder.mutation<
      Participant,
      { userId: string | undefined; challengeId: string }
    >({
      query: ({ userId, challengeId }) => ({
        url: `/${userId}/start/${challengeId}`,
        method: "POST",
      }),
    }),
    getChallengesByUserWithStatus: builder.query<
      Participant[],
      { userId: string; status: string }
    >({
      query: ({ userId, status }) => `/${userId}/${status}`,
    }),
    getStatus: builder.query({
      query: ({ userId, challengeId }) => `/status/${userId}/${challengeId}`,
    }),
  }),
});

export const {
  useStartChallengeMutation,
  useGetChallengesByUserWithStatusQuery,
  useGetStatusQuery,
} = participantsApi;
