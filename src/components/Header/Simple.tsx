import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Icon from "@components/Icon";

import { Button } from "@elements";
import { palette, typography } from "@utils/const";

interface ISimpleHeader {
  onClick?: React.MouseEventHandler;
}

const SimpleHeader = ({
  children,
  onClick,
}: React.PropsWithChildren<ISimpleHeader>) => {
  const navigate = useNavigate();

  const onBackBtnClick = useCallback(() => navigate(-1), []);

  return (
    <Container>
      <Button onClick={onClick ?? onBackBtnClick}>
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
  background-color: ${palette.white};
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
  z-index: -1;
  ${typography.st18sb}
`;

export default SimpleHeader;
