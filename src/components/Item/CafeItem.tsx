import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Icon from "@components/Icon";

import { Image } from "@elements";
import { palette } from "@utils/const";

interface ICafeItem {
  id: number;
  imgSrc: string;
  name: string;
  addr: string;
  hours: string;
  rate: number;
  reviewCnt: number;
}

const CafeItem = ({
  id,
  imgSrc,
  name,
  addr,
  hours,
  rate,
  reviewCnt,
}: ICafeItem) => {
  return (
    <Container to={`/${id}`}>
      <Image src={imgSrc} inlineStyles="width: 8.75em; height: 6.5em;" />
      <InfoArea>
        <Title>{name}</Title>
        <Address>{addr}</Address>
        <OpeningHours>{hours}</OpeningHours>
        <AttractionInfo>
          <Icon type="Star" />
          {rate} <Review>리뷰 {reviewCnt}</Review>
        </AttractionInfo>
      </InfoArea>
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
`;

const InfoArea = styled.section`
  margin-left: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 0.8em;
`;

const Address = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.4em;
`;

const OpeningHours = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.4em;
`;

const AttractionInfo = styled.div`
  font-size: 0.875em;
  font-weight: 500;
`;

const Review = styled.span`
  color: ${palette.grey500};
  font-weight: 400;
`;

export default CafeItem;
