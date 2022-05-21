import styled from "styled-components";

import Header from "@components/Header";
import CafeItem from "@components/Item/CafeItem";
import StudyCard from "@components/Item/StudyCard";
import List from "@components/List";
import NavBar from "@components/Navigator/NavBar";

import defaultImg from "@assets//images/default.png";
import { palette } from "@utils/const";

const tempStudyData = [
  {
    id: 1,
    name: "영어 스피킹 스터디",
    meetArea: "더메드힐루룽 3호점",
    members: ["강형근", "이현웅", "강성종", "권민주", "송승훈", "신민선"],
    midPoint: "충무로역",
  },
  {
    id: 2,
    name: "스터디 서비스 스터디",
    meetArea: "스타벅스 항해점",
    members: ["강형근", "이현웅", "강성종", "권민주", "송승훈", "신민선"],
    midPoint: "미역",
  },
  {
    id: 3,
    name: "영어 스피킹 스터디",
    meetArea: "더메드힐루룽 3호점",
    members: ["강형근", "이현웅", "강성종", "권민주", "송승훈", "신민선"],
    midPoint: "충무로역",
  },
  {
    id: 4,
    name: "스터디 서비스 스터디",
    meetArea: "스타벅스 항해점",
    members: ["강형근", "이현웅", "강성종", "권민주", "송승훈", "신민선"],
    midPoint: "미역",
  },
  {
    id: 5,
    name: "영어 스피킹 스터디",
    meetArea: "더메드힐루룽 3호점",
    members: ["강형근", "이현웅", "강성종", "권민주", "송승훈", "신민선"],
    midPoint: "충무로역",
  },
  {
    id: 6,
    name: "스터디 서비스 스터디",
    meetArea: "스타벅스 항해점",
    members: ["강형근", "이현웅", "강성종", "권민주", "송승훈", "신민선"],
    midPoint: "미역",
  },
];

const tempCafeData = [
  {
    id: "1",
    imgSrc: defaultImg,
    name: "노량진 카페맛집",
    addr: "서울특별시 서초구 서초동",
    hours: "10:00 ~ 20: 00",
    rate: 4.8,
    reviewCnt: 13,
    position: { lat: 123.1234, lng: 123.1234 },
  },
  {
    id: "2",
    imgSrc: defaultImg,
    name: "노량진 카페맛집",
    addr: "서울특별시 서초구 서초동",
    hours: "10:00 ~ 20: 00",
    rate: 4.8,
    reviewCnt: 13,
    position: { lat: 123.1234, lng: 123.1234 },
  },
  {
    id: "3",
    imgSrc: defaultImg,
    name: "노량진 카페맛집",
    addr: "서울특별시 서초구 서초동",
    hours: "10:00 ~ 20: 00",
    rate: 4.8,
    reviewCnt: 13,
    position: { lat: 123.1234, lng: 123.1234 },
  },
  {
    id: "4",
    imgSrc: defaultImg,
    name: "노량진 카페맛집",
    addr: "서울특별시 서초구 서초동",
    hours: "11:00 ~ 21:00",
    rate: 4.8,
    reviewCnt: 13,
    position: { lat: 123.1234, lng: 123.1234 },
  },
];

const GroupList = () => {
  const studyData = tempStudyData.map((data) => {
    const memberNameList = data.members.map((member) => member.slice(1));
    return <StudyCard key={data.name} {...data} members={memberNameList} />;
  });
  const cafeData = tempCafeData.map((data) => (
    <CafeItem key={data.name} {...data} />
  ));

  return (
    <Container>
      <Header type="Basic">hello world</Header>
      <ContentArea>
        <List title="내 스터디 그룹" items={studyData} gap="1em" />
        <Notification>스터디원이 추가로 위치가 변경되었어요!</Notification>
        <List
          title="Best place"
          items={cafeData}
          gap="1.5em"
          direction="column"
        />
      </ContentArea>
      <NavBar />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentArea = styled.section`
  padding-top: 1em;
  padding-bottom: 4.875em;
`;

const Notification = styled.div`
  font-size: 0.8em;
  color: ${palette.blue};
  text-align: center;
  margin-bottom: 1.5em;
`;

export default GroupList;
