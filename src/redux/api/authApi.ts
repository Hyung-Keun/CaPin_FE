import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://3.34.91.80",
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
        url: `/api/logout}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAuthQuery } = authApi;
