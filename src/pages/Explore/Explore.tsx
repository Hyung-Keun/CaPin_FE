import React, { useState } from "react";

import { Search } from "./components";
import { TabType, STUDY_GROUP } from "./constants";

import useDebounce from "@hooks/useDebounce";

/**
 *
 * 상단에 검색하고 탭이 있음
 * 검색을 하면 검색한 결과 스트링을 기반으로 리퀘스트를 보내는 것 같다.
 * 탭을 누르면 검색 결과를 초기화 시키고("") 밑의 결과 내용을 ""을 기반으로 한 것을 보내야 한다.
 * 스터디 그룹과 스터디 카페의 검색 결과는 로직이 들어가 있으므로 이걸 나눈다.
 */

const Explore = () => {
  const [activeTab, setActiveTab] = useState<TabType>(STUDY_GROUP);
  const [searchResult, setSearchResult] = useState("");
  const onSearchChange = (nextSearch: string) => setSearchResult(nextSearch);
  const debouncedOnSearchCahnge = useDebounce<string, typeof onSearchChange>(
    onSearchChange,
  );
  const onTabChange = (nextTab: TabType) => {
    setActiveTab(nextTab);
    setSearchResult("");
  };

  return (
    <main>
      <Search
        activeTab={activeTab}
        onTabChange={onTabChange}
        onSearchChange={debouncedOnSearchCahnge}
      />
    </main>
  );
};

export default Explore;
