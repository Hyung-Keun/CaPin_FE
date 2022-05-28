export interface ICommonProps {
  onBackButtonClick: () => void;
}

type CurrentGroup = {
  groupId: string;
  groupTitle: string;
  memberCount: number;
  maxMemberCount: number;
  roughAddress: string;
  description: string;
  firstDay: string;
  lastDay: string;
};

export type ICurrentGroups = Array<CurrentGroup>;
