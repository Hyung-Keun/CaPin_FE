type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

type GroupInfo = {
  groupId: number;
  imageUrl: Maybe<string>;
  groupTitle: string;
  roughAddress: string;
  memberCount: number;
  maxMemberCount: number;
  firstDay: string;
  lastDay: string;
  description: string;
};

enum MemberAuthority {
  JOIN = "JOIN",
  WAIT = "WAIT",
  OWNER = "OWNER",
}

type MemberInfo = {
  userId: string;
  userName: string;
  imageUrl: Maybe<string>;
  authority: MemberAuthority;
};

type SortingInformation = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

type PageMeta = Exact<{
  pageable: {
    sort: SortingInformation;
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
  };
  size: number;
  number: number;
  sort: SortingInformation;
  numberOfElements: number;

  /**
   * This information is useful to detect whether the page is last or not
   */
  first: boolean;
  last: boolean;
  empty: boolean;
}>;

export type GroupListResponse = { content: Array<GroupInfo> } & PageMeta;
export type SpecificGroupResponse = GroupInfo & {
  memberList: Array<MemberInfo>;
};
