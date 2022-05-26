import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "@utils/auth";
import { BASE_API_URL } from "@utils/const";

export const studyApi = createApi({
  reducerPath: "studyApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),

  endpoints: (builder) => ({
    createStudy: builder.query({
      query: (data) => ({
        url: `/api/groups`,
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
        body: data,
      }),
    }),
  }),
});

export const { useLazyCreateStudyQuery } = studyApi;
