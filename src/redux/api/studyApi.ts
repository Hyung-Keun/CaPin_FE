import { RecommendCafeData } from "@type/cafe";
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
    /** 스터디 검색 */
    getStudiesByOptions: builder.query<GroupListResponse, GroupsQueryOption>({
      query: (option) => {
        const queryParameter = getValidQueryParameter(option);

        return {
          url: `/api/groups/list${queryParameter}`,
          method: "GET",
        };
      },
    }),
    /** 스터디 생성하기 */
    createStudy: builder.query({
      query: (data) => ({
        url: `/api/groups`,
        method: "POST",
        body: data,
      }),
    }),
    /** 가입된 스터디 목록 가져오기 */
    getMyStudyGroup: builder.query<GroupListResponse, null>({
      query: () => ({
        url: `/api/groups/my`,
        method: "GET",
      }),
    }),
    /** 특정 스터디 정보 가져오기 */
    getSpecificStudy: builder.query<SpecificGroupResponse, string>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}`,
        method: "GET",
      }),
    }),
    /** 그룹 중간장소 추천받기 */
    getRecommendationPlace: builder.query<RecommendCafeData, string>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}/cafe-recommendation`,
        method: "GET",
      }),
    }),
    /** 스터디 가입 요청 */
    applyStudy: builder.mutation<ResponseData, string>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}/apply`,
        method: "POST",
      }),
    }),
    /** 스터디 탈퇴 */
    exitStudy: builder.mutation<ResponseData, GroupInfo["groupId"]>({
      query: (groupId) => ({
        url: `/api/groups/${groupId}/exit`,
        method: "POST",
      }),
    }),
    /** 스터디 가입 승인 */
    approveMember: builder.mutation<
      ResponseData,
      { groupId: GroupInfo["groupId"]; memberId: MemberInfo["memberId"] }
    >({
      query: ({ groupId, memberId }) => ({
        url: `/api/groups/${groupId}/approval/${memberId}`,
        method: "POST",
      }),
    }),
    /** 스터디 가입 거절 */
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
  useLazyGetRecommendationPlaceQuery,
} = studyApi;
