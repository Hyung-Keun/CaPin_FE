import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { GroupsQueryOption } from "@type/group";

import Icon from "@components/Icon";
import NavBar from "@components/Navigator/NavBar";
import StudyGroupCard from "@components/StudyGroupCard";
import { DefaultStudyGroupListLayout } from "@components/StudyGroupList";

import { useGetStudiesByOptionsQuery } from "@redux/api/studyApi";

import { Search, SearchResultFilter } from "./components";
import { PAGE_SIZE } from "./constants";

import useDebounce from "@hooks/useDebounce";
import { palette, typography } from "@utils/const";

/**
 * 무한스크롤 기능을 위한 page를 추가적으로 state를 만들어 관리해주셔야 할 것 같습니다 (매우 중요)
 * 각 page는 결과에 해당되는 컴포넌트 내부에 배치하였습니다.
 * PAGE_SIZE는 6으로 상수화 시켜놓겠습니다
 */

const CardSection = styled.section`
  background: ${palette.grey050};

  & > p {
    padding: 20px 0 0 20px;
    ${typography.st17b};
    color: ${palette.grey900};
  }
`;

const CurrentStudyGroups = styled(DefaultStudyGroupListLayout)`
  padding-top: 12px;
`;

const CreateStudyButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 106px;
  cursor: pointer;
`;

const Explore = () => {
  /**
   * TAB 유무 생기면 아래와 Search 컴포넌트 prop, Search 컴포넌트 내부 핸들러에 대해서 Uncomment 해주시면 되겠습니다.
   * Tab이라는 컴포넌트를 만드셔도 무방합니다.
   * const [activeTab, setActiveTab] = useState<TabType>(STUDY_GROUP);
   * const onTabChange = (nextTab: TabType) => {
   *  setActiveTab(nextTab);
      setSearchResult("");
   *};
   */
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState("");
  const onSearchChange = (nextSearch: string) => setSearchResult(nextSearch);
  const debouncedOnSearchCahnge = useDebounce<string, typeof onSearchChange>(
    onSearchChange,
  );

  const queryOption: GroupsQueryOption = {
    // 페이지를 상태로 관리하여야 합니다.
    page: 0,
    // 페이지를 상태로 관리하여야 합니다.
    size: PAGE_SIZE,
    title: searchResult,
    // IMPORTANT!!!!!!!!!!!!!!!!!!!!!
    // useSelector으로 구독해주세요!
    // region[]
    roughAddress: [],
  };

  const queryResult = useGetStudiesByOptionsQuery(queryOption);

  // infiniteQuery 구성하려면 isFetching flag를 지워야 합니다.
  const isQueryResolved = !queryResult.isFetching && queryResult.isSuccess;

  const openSearchFilter =
    searchResult.length > 0 &&
    isQueryResolved &&
    queryResult.data.content.length > 0;

  return (
    <main>
      <Search
        // activeTab={activeTab}
        // onTabChange={onTabChange}
        onSearchChange={debouncedOnSearchCahnge}
        searchFilter={
          openSearchFilter ? (
            <SearchResultFilter
              totalSearchResult={queryResult.data.content.length}
            />
          ) : null
        }
      />
      {isQueryResolved ? (
        <CardSection>
          {searchResult.length === 0 ? <p>새로 올라온 스터디 그룹</p> : null}
          <CurrentStudyGroups>
            {queryResult.data.content.map((group) => (
              <StudyGroupCard
                onClick={() => {
                  navigate(`/specificstudy/${group.groupId}`);
                }}
                key={group.groupId}
                group={group}
              />
            ))}
          </CurrentStudyGroups>
          <div style={{ height: "133px " }} />
        </CardSection>
      ) : null}
      <CreateStudyButton
        role="button"
        onClick={() => {
          navigate("/studyopen");
        }}
      >
        <Icon type="FabButton" />
      </CreateStudyButton>
      <NavBar />
    </main>
  );
};

export default Explore;
