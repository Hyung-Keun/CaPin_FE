import { useNavigate } from "react-router-dom";

import NavBar from "@components/Navigator/NavBar";
import StudyGroupCard from "@components/StudyGroupCard";
import { DefaultStudyGroupListLayout } from "@components/StudyGroupList";
import TitleWithBackButton from "@components/TitleWithBackButton";

import { useGetMyStudyGroupQuery } from "@redux/api/studyApi";

import { ICommonProps } from "../types";

const UserStudyGroups = ({ goBack }: ICommonProps) => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetMyStudyGroupQuery(null);
  return (
    <>
      <TitleWithBackButton
        isSticky
        title="내 스터디 그룹"
        onBackButtonClick={goBack}
      />
      <DefaultStudyGroupListLayout>
        {data?.content.map((study) => (
          <StudyGroupCard
            key={study.groupId}
            group={study}
            onClick={() => navigate(`/specificstudy/${study.groupId}`)}
          />
        ))}
      </DefaultStudyGroupListLayout>
      <NavBar pageName="ME" />
    </>
  );
};

export default UserStudyGroups;
