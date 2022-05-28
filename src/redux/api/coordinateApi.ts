import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "@utils/auth";
import { BASE_API_URL } from "@utils/const";

interface IGetAddressRequestData {
  groupId: number;
  startLocationX: string;
  startLocationY: string;
  startAddress: string;
}

interface IGetAddressResponseData {
  result: string;
  msg: string;
}

export const coordinateApi = createApi({
  reducerPath: "coordinateApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),

  endpoints: (builder) => ({
    postCoordinate: builder.query<
      IGetAddressResponseData,
      IGetAddressRequestData
    >({
      query: ({ groupId, startLocationX, startLocationY, startAddress }) => ({
        url: `/api/groups/${groupId}/location`,
        method: "POST",
        body: {
          startLocationX,
          startLocationY,
          startAddress,
        },
      }),
    }),
  }),
});

export const { useLazyPostCoordinateQuery } = coordinateApi;
