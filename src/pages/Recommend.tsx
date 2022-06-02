import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import CafeListToast from "@components/CafeListToast";
import CafeMap from "@components/CafeMap";
import Icon from "@components/Icon";
import Loading from "@components/Loading";

import { useLazyGetRecommendationPlaceQuery } from "@redux/api/studyApi";

import { convertPixelToRem } from "@utils/func";

const Recommend = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id: groupId } = params;
  const [getRecommendationPlace, { data }] =
    useLazyGetRecommendationPlaceQuery();

  useEffect(() => {
    if (groupId) getRecommendationPlace(groupId);
  }, [groupId]);

  return (
    <>
      {!data && <Loading isSolid />}
      <Container>
        <button onClick={() => navigate(-1)}>
          <Icon type="CircleArrowLeft" />
        </button>
        {data && (
          <>
            <CafeMap
              center={data?.midLocation}
              cafeList={data?.cafes}
              width="100%"
              height="calc(100vh - 11em)"
            />
            <CafeListToast cafeList={data?.cafes} />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.section`
  position: relative;
  & > button {
    position: absolute;
    top: ${convertPixelToRem(12)};
    left: ${convertPixelToRem(20)};
    z-index: 5;
  }
`;

export default Recommend;
