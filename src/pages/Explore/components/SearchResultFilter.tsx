import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { palette, typography } from "@utils/const";

type Props = {
  totalSearchResult: number;
};

const FilterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  border-bottom: 1px solid ${palette.grey200};

  & > p {
    ${typography.b13r};
    color: ${palette.grey700};

    & > strong {
      font-weight: 700;
    }
  }

  & > button {
    width: 56px;
    height: 32px;
    text-content: center;
    background: #ffffff;
    border: 1px solid ${palette.grey200};
    border-radius: 6px;
    ${typography.b13sb};
  }
`;

const SearchResultFilter = ({ totalSearchResult }: Props) => {
  const navigate = useNavigate();
  return (
    <FilterWrapper>
      <p>
        <strong>{totalSearchResult}</strong>개의 검색 결과
      </p>
      <button
        onClick={() => {
          navigate("/areaselection");
        }}
      >
        지역
      </button>
    </FilterWrapper>
  );
};

export default SearchResultFilter;
