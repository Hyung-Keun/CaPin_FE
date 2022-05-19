import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Icon from "@components/Icon";

import { Button } from "@elements";
import { palette } from "@utils/const";

interface ISimpleHeader {}

const SimpleHeader = ({ children }: React.PropsWithChildren<ISimpleHeader>) => {
  const navigate = useNavigate();

  const onBackBtnClick = useCallback(() => navigate(-1), []);

  return (
    <Container>
      <Button onClick={onBackBtnClick}>
        <Icon type="ArrowLeft" />
      </Button>
      <Header>{children}</Header>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 1.5em;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${palette.grey050};

  & > button {
    background-color: inherit;
    border: none;
  }
`;

const Header = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-weight: 700;
  z-index: -1;
`;

export default SimpleHeader;
