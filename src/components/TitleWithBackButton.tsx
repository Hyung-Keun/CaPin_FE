import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Icon from "./Icon";

import { typography } from "@utils/const";

const Wrapper = styled.header<{ isSticky: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({ isSticky }) => (isSticky ? "sticky" : "static")};
  top: 0;
  width: 100%;
  height: 43px;
  background: #ffffff;
  z-index: 2;

  & > h1 {
    ${typography.st17b};
  }

  & > button {
    position: absolute;
    top: 12px;
    left: 20px;
    background: #fff;
    border: none;
  }
`;

type Props = {
  title: string;
  isSticky?: boolean;
  showTitle?: boolean;
  showButton?: boolean;
  /**
   * 뒤로가기 말고 다른 것을 하고싶으시면 해당 함수를 이 prop으로 전달해주세요.
   */
  onBackButtonClick?: () => void;
};

/**
 *
 * @description
 * 상단 타이틀과 뒤로가기 버튼을 묶은 컴포넌트입니다.
 * 콜백 함수를 전달하지 않으면 goBack합니다.
 *
 */

const TitleWithBackButton = ({
  showButton = true,
  showTitle = true,
  isSticky = false,
  title,
  onBackButtonClick,
}: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onBackButtonClick) {
      onBackButtonClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <Wrapper isSticky={isSticky}>
      {showButton && (
        <button onClick={handleClick}>
          <Icon type="ArrowLeft" />
        </button>
      )}
      {showTitle && <h1>{title}</h1>}
    </Wrapper>
  );
};

export default TitleWithBackButton;
