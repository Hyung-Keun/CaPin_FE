import React from "react";

import styled from "styled-components";

import CafeItem from "@components/CafeItem";

import List from "./List";

import { useAppSelector } from "@hooks/redux";

const ToastList = () => {
  const cafeData = useAppSelector(({ map }) => map.cafeList);
  const cafeItemList = cafeData.map((data) => (
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
      />
    </Container>
  );
};

const Container = styled.section``;
export default ToastList;
