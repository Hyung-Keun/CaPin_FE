import React, { useState } from "react";

import styled from "styled-components";

import Icon from "@components/Icon";

import { typography, palette } from "@utils/const";

const SearchSection = styled.section`
  position: sticky;
  top: 0;
  padding-top: 9px;
  background: #fff;
  z-index: 2;
`;

const InputWithCancelButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  margin-bottom: 8px;

  & > div {
    flex: 1 0 auto;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding-left: 14px;

    background: ${palette.grey050};
    color: ${palette.grey900};
    border-radius: 10px;

    & > input {
      width: 100%;
      margin-left: 7.68px;
      border: none;
      background: inherit;
      ${typography.b15r};
      &:focus {
        outline: none;
        border: none;
      }
    }
  }

  & > button {
    margin-left: 14px;
    background: none;
    border: none;
    ${typography.b14r};
    color: ${palette.grey600};
  }
`;

const Tabs = styled.article`
  width: 100%;
  height: 40px;
  display: flex;
  gap: 0 16px;
  padding: 0 20px;
  border-bottom: 1px solid ${palette.grey200};
`;

const Tab = styled.button<{ active: boolean }>`
  height: 100%;
  background: none;
  border: none;
  ${typography.b16sb};
  color: ${({ active }) => palette[active ? "grey900" : "grey400"]};
`;

const Search = ({
  onSearchChange,
  searchFilter,
}: {
  onSearchChange: (nextSarch: string) => void;
  searchFilter: React.ReactNode;
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.currentTarget.value;
    setInputValue(next);
    onSearchChange(next);
  };

  const handleInputReset = () => {
    setInputValue("");
    onSearchChange("");
  };

  // const handleTabClick = (nextTab: TabType) => () => {
  //   setInputValue("");
  //   onTabChange(nextTab);
  // };

  return (
    <SearchSection>
      <InputWithCancelButton>
        <div>
          <Icon type="Search" />
          <input
            placeholder="스터디그룹, 스터디카페"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        {!!inputValue && <button onClick={handleInputReset}>취소</button>}
      </InputWithCancelButton>

      <Tabs>
        <Tab active>스터디 그룹</Tab>
        {/* <Tab
          onClick={handleTabClick(STUDY_CAFE)}
          active={activeTab === STUDY_CAFE}
        >
          스터디 카페
        </Tab> */}
      </Tabs>
      {searchFilter}
    </SearchSection>
  );
};

export default Search;
