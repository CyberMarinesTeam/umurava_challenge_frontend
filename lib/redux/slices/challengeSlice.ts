import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ChallengeType = {
  title: string;
  deadline: string;
  duration: number;
  moneyPrice: number;
  contactEmail: string;
  projectBrief: string;
  requirements: string[];
  product_design: string[];
  deliverables: string[];
  category: string;
};

export const challengeSlice = createApi({
  reducerPath: "challenge",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/challenges" }),
  endpoints: (builder) => ({
    getChallenges: builder.query<ChallengeType[], void>({
      query: () => "/",
    }),
    getOpenChallengeDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/open/${daysAgo}`,
    }),
    getOngoingChallengeDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/ongoing/${daysAgo}`,
    }),
    getCompletedChallengeDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/completed/${daysAgo}`,
    }),
    getChallengeById: builder.query<ChallengeType, string>({
      query: (id) => `/${id}`,
    }),
    createChallenge: builder.mutation<
      { message: string; newChallenge: ChallengeType },
      { id: string; newChallenge: ChallengeType }
    >({
      query: ({ id, newChallenge }) => ({
        url: `/${id}`,
        method: "POST",
        body: newChallenge,
      }),
    }),
    updateChallenge: builder.mutation<
      { message: string; newChallenge: ChallengeType },
      { id: string; newChallenge: ChallengeType }
    >({
      query: ({ id, newChallenge }) => ({
        url: `/${id}`,
        method: "PUT",
        body: newChallenge,
      }),
    }),
    deleteChallenge: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetChallengesQuery,
  useGetOpenChallengeDaysAgoQuery,
  useGetOngoingChallengeDaysAgoQuery,
  useGetCompletedChallengeDaysAgoQuery,
  useGetChallengeByIdQuery,
  useCreateChallengeMutation,
  useUpdateChallengeMutation,
  useDeleteChallengeMutation,
} = challengeSlice;
