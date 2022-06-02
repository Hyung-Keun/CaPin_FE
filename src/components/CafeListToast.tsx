import React from "react";

import styled from "styled-components";

import { CafeInfo } from "@type/cafe";

import CafeItem from "@components/CafeItem";

import List from "./List";

import { palette } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const ToastList = ({ cafeList }: { cafeList: CafeInfo[] }) => {
  const cafeItemList = cafeList.map((data) => (
    <React.Fragment key={data.id}>
      <CafeItem {...data} />
    </React.Fragment>
  ));

  return (
    <Container>
      <List
        title="Best Place"
        items={cafeItemList}
        gap="1.5em"
        direction="column"
        allItemsLink=""
      />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  top: -${convertPixelToRem(30)};
  background-color: ${palette.white};
  padding-top: ${convertPixelToRem(24)};
  border-top-left-radius: ${convertPixelToRem(10)};
  border-top-right-radius: ${convertPixelToRem(10)};
`;
export default ToastList;
