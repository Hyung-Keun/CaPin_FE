import React, { useState } from "react";

import { GroupsQueryOption } from "@type/group";

import { useGetStudiesByOptionsQuery } from "@redux/api/studyApi";

import { Search } from "./components";
import { PAGE_SIZE } from "./constants";

import useDebounce from "@hooks/useDebounce";

/**
 * 무한스크롤 기능을 위한 currentPage를 추가적으로 state를 만들어 관리해주셔야 할 것 같습니다 (매우 중요)
 * PAGE_SIZE는 6으로 상수화 시켜놓겠습니다
 */

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
    roughAddress: [],
  };

  const result = useGetStudiesByOptionsQuery(queryOption);

  return (
    <main>
      <Search
        // activeTab={activeTab}
        // onTabChange={onTabChange}
        onSearchChange={debouncedOnSearchCahnge}
      />
    </main>
  );
};

export default Explore;
