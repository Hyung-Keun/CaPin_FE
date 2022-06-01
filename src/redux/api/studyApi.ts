import {
  GroupInfo,
  GroupListResponse,
  GroupsQueryOption,
  MemberInfo,
  SpecificGroupResponse,
} from "@type/group";
import { ResponseData } from "@type/init";

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
    getMyStudyGroup: builder.query<GroupListResponse, null>({
      query: () => ({
        url: `/api/groups/my`,
        method: "GET",
      }),
    }),
    getSpecificStudy: builder.query<SpecificGroupResponse, string>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}`,
        method: "GET",
      }),
    }),
    applyStudy: builder.mutation<ResponseData, string>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}/apply`,
        method: "POST",
      }),
    }),
    exitStudy: builder.mutation<ResponseData, GroupInfo["groupId"]>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}/exit`,
        method: "POST",
      }),
    }),
    approveMember: builder.mutation<
      ResponseData,
      { groupId: GroupInfo["groupId"]; memberId: MemberInfo["memberId"] }
    >({
      query: ({ groupId, memberId }) => ({
        url: `/api/groups/${groupId}/approval/${memberId}`,
        method: "POST",
      }),
    }),
    denyMember: builder.mutation<
      ResponseData,
      { groupId: number; memberId: number }
    >({
      query: ({ groupId, memberId }) => ({
        url: `/api/groups/${groupId}/denial/${memberId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLazyCreateStudyQuery,
  useGetStudiesByOptionsQuery,
  useGetMyStudyGroupQuery,
  useLazyGetSpecificStudyQuery,
  useApplyStudyMutation,
  useExitStudyMutation,
  useApproveMemberMutation,
  useDenyMemberMutation,
} = studyApi;
