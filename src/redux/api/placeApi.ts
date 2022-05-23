import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placeApi = createApi({
  reducerPath: "placeApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dapi.kakao.com/",
    prepareHeaders: (headers) => {
      const config = "KakaoAK 24e90403fc1550929e4a3e67f0a86a14";

      if (config) {
        headers.set("Authorization", config);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAddress: builder.query({
      query: (address) => ({
        url: `/v2/local/search/address.json?query=${address}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAddressQuery } = placeApi;
