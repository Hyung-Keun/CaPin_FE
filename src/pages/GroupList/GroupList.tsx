import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { CafeInfo } from "@type/cafe";

import CafeItem from "@components/CafeItem";
import Header from "@components/Header";
import List from "@components/List";
import Loading from "@components/Loading";
import NavBar from "@components/Navigator/NavBar";
import StudyGroupCard from "@components/StudyGroupCard";

import { useGetMyStudyGroupQuery } from "@redux/api/studyApi";

import EmptyCard from "./components/EmptyCard";

import defaultImg from "@assets//images/default.png";
import useGetLocationPosData from "@hooks/useGetLocationPosData";
import useSlide from "@hooks/useSlide";
import { palette } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const GroupList = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMyStudyGroupQuery(null);
  const [cafeListData, setCafeListData] = useState<CafeInfo[]>();
  const {
    data: geoData,
    isLoading: isGeoLoading,
    trigger: geoTrigger,
  } = useGetLocationPosData();
  const [isCoordinateLoading, setIsCoordinateLoading] = useState(false);
  const slideIdxRef = useRef(0);
  const Slider = useSlide(slideIdxRef);
  const studyData = data?.content.map((study) => (
    <StudyGroupCard
      group={study}
      onClick={() => navigate(`/specificstudy/${study.groupId}`)}
    />
  ));

  const cafeData = cafeListData?.map((cd) => <CafeItem key={cd.id} {...cd} />);

  const hasStudy = studyData?.length;

  const onActionBtnClick = () => {
    navigate(
      hasStudy
        ? `/placesearch/${data?.content[slideIdxRef.current!].groupId}`
        : "/studyopen",
    );
  };

  useLayoutEffect(() => {
    const { lat, lng } = geoData;
    if (lat && lng) {
      setIsCoordinateLoading(true);

      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.coord2RegionCode(lng, lat, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const dong = result[0].region_3depth_name;
          const ps = new kakao.maps.services.Places();

          ps.keywordSearch(`${dong} 카페`, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
              const resultData: CafeInfo[] = data.map((d) => ({
                ...d,
                mainphotourl: defaultImg,
                comntcnt: "??",
                scoresum: "?",
                scorecnt: "?",
              }));
              setCafeListData(resultData);
              setIsCoordinateLoading(false);
            }
          });
        }
      });
    }
  }, [geoData, geoData.lat, geoData.lng]);

  useLayoutEffect(() => {
    geoTrigger();
  }, []);

  return (
    <>
      {(isLoading || isGeoLoading || isCoordinateLoading) && <Loading />}
      <Container>
        <Header type="Basic"></Header>
        <h1>
          중간장소 찾고, 🔖
          <br /> 스터디카페 추천받으세요!
        </h1>
        <ContentArea>
          {hasStudy ? (
            <SliderWrap>
              <Slider items={studyData} itemWidth="80%" />
            </SliderWrap>
          ) : (
            <EmptyCard />
          )}
          <ButtonWrap>
            <button onClick={onActionBtnClick}>
              {hasStudy ? "중간장소 추천받기" : "스터디그룹 생성하기"}
            </button>
          </ButtonWrap>
          {cafeData && (
            <List
              title="Best place"
              items={cafeData}
              gap="1.5em"
              direction="column"
            />
          )}
        </ContentArea>
        <NavBar />
      </Container>
    </>
  );
};

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${palette.grey050};
  & > h1 {
    font-size: ${convertPixelToRem(24)};
    line-height: ${convertPixelToRem(36)};
    letter-spacing: -4%;
    margin-left: ${convertPixelToRem(20)};
    margin-bottom: ${convertPixelToRem(32)};
  }
`;

const ContentArea = styled.section`
  padding-top: 1em;
  & > *:last-child {
    background-color: ${palette.white};
    border-radius: ${convertPixelToRem(10)} ${convertPixelToRem(10)} 0 0;
    padding-top: ${convertPixelToRem(25)};
    padding-bottom: ${convertPixelToRem(95)};
  }
`;

const SliderWrap = styled.div`
  padding: 2em;
`;

const ButtonWrap = styled.div`
  width: 100%;
  padding: 0 ${convertPixelToRem(20)};
  margin-bottom: ${convertPixelToRem(32)};
  & > button {
    width: 100%;
    padding: ${convertPixelToRem(12)} 0;
    background-color: ${palette.orange600};
    border-radius: ${convertPixelToRem(4)};
    border: none;
    color: ${palette.white};
    cursor: pointer;
  }
`;

export default GroupList;
