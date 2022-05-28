import { useNavigate } from "react-router-dom";

import StudyGroupCard from "@components/StudyGroupCard";
import { DefaultStudyGroupListLayout } from "@components/StudyGroupList";
import TitleWithBackButton from "@components/TitleWithBackButton";

import getMockupCurrentGroups from "./mock";
import { ICommonProps } from "./types";

const UserStudyGroups = ({ goBack }: ICommonProps) => {
  const navigate = useNavigate();
  const navigateToDetailPage = () => {
    // navigate()
  };

  const mockups = getMockupCurrentGroups(20);

  return (
    <>
      <TitleWithBackButton
        isSticky
        title="내 스터디 그룹"
        onBackButtonClick={goBack}
      />
      <DefaultStudyGroupListLayout>
        {mockups.map((mockup) => (
          <StudyGroupCard
            key={mockup.groupId}
            group={mockup}
            onClick={navigateToDetailPage}
          />
        ))}
      </DefaultStudyGroupListLayout>
    </>
  );
};

export default UserStudyGroups;
