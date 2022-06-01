import { CafeInfo } from "@type/cafe";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "@utils/auth";
import { BASE_API_URL } from "@utils/const";

export const cafeApi = createApi({
  reducerPath: "cafeApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),

  endpoints: (builder) => ({
    getCafeList: builder.query({
      query: (groupId) => ({
        url: `/api/groups/${groupId}/cafe-recommendation`,
        method: "GET",
      }),
    }),
    getCafeListRecommend: builder.query<
      { cafes: CafeInfo[] },
      { lat: number; lng: number }
    >({
      query: ({ lat, lng }) => ({
        url: `/api/cafe-reco?locationX=${lng}&locationY=${lat}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetCafeListQuery, useLazyGetCafeListRecommendQuery } =
  cafeApi;
