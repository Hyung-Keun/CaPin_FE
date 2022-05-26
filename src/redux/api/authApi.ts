import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "@utils/auth";
import { BASE_API_URL } from "@utils/const";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),

  endpoints: (builder) => ({
    getAuth: builder.query({
      query: (kakao_code) => ({
        url: `/login/oauth2/Kakao?code=${kakao_code}`,
        method: "GET",
      }),
    }),
    logOut: builder.query({
      query: () => ({
        url: `/api/logout`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAuthQuery, useLazyLogOutQuery } = authApi;
