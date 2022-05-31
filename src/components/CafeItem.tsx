import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { CafeInfo } from "@type/cafe";

import Icon from "@components/Icon";

import { Image } from "@elements";
import { palette } from "@utils/const";

const CafeItem = ({
  id,
  category_group_code,
  category_group_name,
  category_name,
  distance,
  phone,
  place_name,
  place_url,
  road_address_name,
  x,
  y,
  mainphotourl,
  comntcnt,
  scoresum,
  scorecnt,
}: CafeInfo) => {
  return (
    <Container to={`/cafe/detail/${id}`}>
      <Image src={mainphotourl} inlineStyles="width: 8.75em; height: 6.5em;" />
      <InfoArea>
        <Title>{place_name}</Title>
        <Address>{road_address_name}</Address>
        <OpeningHours>확인 필요</OpeningHours>
        <AttractionInfo>
          <Icon type="Star" />
          {scorecnt} / {scoresum} <Review>리뷰 {comntcnt}</Review>
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
