import React from "react";

import People from "@components/People";

import defaultImg from "../assets/defaultImg.svg";

import { BlankBox, Text, Button } from "@elements";

const SpecificStudy = () => {
  return (
    <React.Fragment>
      <img alt="test" width={375} height={210} src={defaultImg} />
      <BlankBox
        inlineStyles="position: relative;
width: 375px;
height: auto;
background: #FFFFFF;
box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.1);
border-radius: 14px 14px 0px 0px;"
      >
        <Text
          inlineStyles="margin: 40px 171px 10px 20px;font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 32px;
letter-spacing: -0.04em;
color: #111111; "
        >
          브랜드 마케팅 스터디
        </Text>
        <Text inlineStyles="margin: 0px 20px 30px 20px">
          안녕하세요. 브랜드 마케팅 스터디 모임장 모임장입니다.안녕하세요.
          브랜드 마케팅 스터디 모임장 모임장입니다. 안녕하세요. 브랜드 마케팅
          브랜드 마케팅 스터디 모임장 모임장입니다. 안녕하세요. 브랜드 마케팅
          브랜드 마케팅 스터디 모임장 모임장입니다. 안녕하세요. 브랜드 마케팅{" "}
        </Text>
        <BlankBox inlineStyles="display: flex">
          <Text inlineStyles="margin: 0px 20px 10px 20px">지역</Text>
          <Text inlineStyles="margin: 0px 20px 10px 20px">
            잠실, 석촌, 장지
          </Text>
        </BlankBox>
        <BlankBox inlineStyles="display: flex">
          <Text inlineStyles="margin: 0px 20px 10px 20px">기간</Text>
          <Text inlineStyles="margin: 0px 20px 10px 20px">
            2022.04.02~2022.09.23
          </Text>
        </BlankBox>
        <BlankBox inlineStyles="display: flex">
          <Text inlineStyles="margin: 0px 20px 10px 20px">인원</Text>
          <Text inlineStyles="margin: 0px 20px 10px 20px">5/10명</Text>
        </BlankBox>
        <Button
          inlineStyles="    margin: 238px 20px 41px 20px;
    width: 334px;
    height: 48px;
    border-radius: 10px;
    background: #4F4F4F
    "
        >
          <Text inlineStyles="color: white">참여하기</Text>
        </Button>
        <People />
      </BlankBox>
    </React.Fragment>
  );
};
export default SpecificStudy;
