import { Link } from "react-router-dom";

import styled from "styled-components";

import { CafeInfo } from "@type/cafe";

import Icon from "@components/Icon";

import defaultImg from "@assets/images/cafe_default.jpg";
import { Image } from "@elements";
import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

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
    <Container href={place_url} target="_blank" rel="noreferrer">
      <Image
        src={mainphotourl || defaultImg}
        inlineStyles="width: 8.75em; height: 6.5em;"
      />
      <InfoArea>
        <Title>{place_name}</Title>
        <Address>{road_address_name}</Address>
        <OpeningHours>확인 필요</OpeningHours>
        <AttractionInfo>
          <Icon type="Star" />
          {scorecnt ? (Number(scoresum) / Number(scorecnt)).toFixed(1) : 0} / 5{" "}
          <Review>리뷰 {comntcnt || 0}</Review>
        </AttractionInfo>
      </InfoArea>
    </Container>
  );
};

const Container = styled.a`
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
  ${typography.b14r}
  margin-bottom: ${convertPixelToRem(5)};
  color: ${palette.grey800};
`;

const OpeningHours = styled.div`
  ${typography.b14m}
  margin-bottom: 0.4em;
  color: ${palette.grey900};
`;

const AttractionInfo = styled.div`
  font-size: 0.875em;
  font-weight: 500;
  display: flex;
  align-items: center;

  & svg {
    margin-right: ${convertPixelToRem(2)};
  }
`;

const Review = styled.span`
  color: ${palette.grey500};
  font-weight: 400;
  margin-left: ${convertPixelToRem(8)};
`;

export default CafeItem;
