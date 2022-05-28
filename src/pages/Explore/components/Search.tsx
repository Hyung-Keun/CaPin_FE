import React, { useState } from "react";

import styled from "styled-components";

import { STUDY_CAFE, STUDY_GROUP, TabType } from "../constants";

import { typography, palette } from "@utils/const";

const SearchSection = styled.section`
  padding: 0 20px;
  margin-top: 9px;
  border-bottom: 1px solid ${palette.grey200};
`;

const InputWithCancelButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 8px;

  & > input {
    flex: 1 0 auto;
    height: 100%;
    border: none;
    border-radius: 10px;
    background: ${palette.grey050};
    ${typography.b15r};
    color: ${palette.grey900};

    &:focus {
      outline: none;
      border: none;
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
  onTabChange,
  activeTab,
}: {
  activeTab: TabType;
  onSearchChange: (nextSarch: string) => void;
  onTabChange: (nextTab: TabType) => void;
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

  const handleTabClick = (nextTab: TabType) => () => {
    setInputValue("");
    onTabChange(nextTab);
  };

  return (
    <SearchSection>
      <InputWithCancelButton>
        <input
          placeholder="스터디그룹, 스터디카페"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        {!!inputValue && <button onClick={handleInputReset}>취소</button>}
      </InputWithCancelButton>

      <Tabs>
        <Tab
          onClick={handleTabClick(STUDY_GROUP)}
          active={activeTab === STUDY_GROUP}
        >
          스터디 그룹
        </Tab>
        <Tab
          onClick={handleTabClick(STUDY_CAFE)}
          active={activeTab === STUDY_CAFE}
        >
          스터디 카페
        </Tab>
      </Tabs>
    </SearchSection>
  );
};

export default Search;
