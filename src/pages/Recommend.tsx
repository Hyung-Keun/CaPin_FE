import styled from "styled-components";

import CafeListToast from "@components/CafeListToast";
import CafeMap from "@components/CafeMap";

import { useAppSelector } from "@hooks/redux";

const Recommend = () => {
  const midPoint = useAppSelector(({ map }) => map.center);

  return (
    <Container>
      <CafeMap center={midPoint} width="100%" height="calc(100vh - 11em)" />
      <CafeListToast />
    </Container>
  );
};

const Container = styled.section``;

export default Recommend;
