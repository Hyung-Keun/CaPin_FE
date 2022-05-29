import { GroupListResponse, GroupsQueryOption } from "@type/group";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getValidQueryParameter } from "@utils/api";
import { prepareHeaders } from "@utils/auth";
import { BASE_API_URL } from "@utils/const";

export const studyApi = createApi({
  reducerPath: "studyApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),

  endpoints: (builder) => ({
    getStudiesByOptions: builder.query<GroupListResponse, GroupsQueryOption>({
      query: (option) => {
        const queryParameter = getValidQueryParameter(option);

        return {
          url: `/api/groups/list${queryParameter}`,
          method: "GET",
        };
      },
    }),
    createStudy: builder.query({
      query: (data) => ({
        url: `/api/groups`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLazyCreateStudyQuery, useGetStudiesByOptionsQuery } =
  studyApi;
