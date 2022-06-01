import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Icon from "@components/Icon";

import { palette } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

interface IBasicHeader {}

const BasicHeader = ({ children }: React.PropsWithChildren<IBasicHeader>) => {
  return (
    <Container>
      <Link to="/explore">
        <Icon type="Search" />
      </Link>
      <Link to="/">
        <Icon type="Ring" />
      </Link>
      <Header>{children}</Header>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 1.5em;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  background-color: ${palette.grey050};
  & > a:first-child {
    margin-right: ${convertPixelToRem(16)};
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

const IconWrap = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 1em;
  }
`;

export default BasicHeader;
