import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "@utils/auth";
import { BASE_API_URL } from "@utils/const";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),

  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `/api/profile`,
        method: "GET",
      }),
    }),
    editUser: builder.query({
      query: ({ username, image }) => ({
        url: `/api/profile/edit`,
        method: "POST",
        body: {
          username,
          image,
        },
      }),
    }),
  }),
});

export const { useGetUserQuery, useLazyEditUserQuery } = userApi;
