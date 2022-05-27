import React from "react";

import styled from "styled-components";

import gamst from "../../assets/images/gamst.jpeg";

import { Text, Image, BlankBox } from "@elements";
import { typography } from "@utils/const";

const Header = styled.header`
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    ${typography.st17b};
  }
`;

const Overview = () => {
  return (
    <>
      <Header>
        <h1>마이 페이지</h1>
      </Header>
      <BlankBox
        inlineStyles="
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  "
      >
        <BlankBox
          inlineStyles="
        display: flex;
        align-items: center;
        gap: 0 12px;
      "
        >
          <Image
            size="56px"
            shape="circle"
            src={gamst}
            inlineStyles="
          margin: 0;
        "
          />
          <Text
            inlineStyles="
          font-size: 16px;
          line-height: 23px;
          letter-spacing: -0.03em;"
          >
            닉네임닉네임
          </Text>
        </BlankBox>
      </BlankBox>
      <BlankBox
        inlineStyles="
      width: calc(100% - 40px);
      height: 1px;
      margin: 24px auto 12px;
      background: #e1e1e1;
    "
      />
      <BlankBox
        inlineStyles="
      width: calc(100% - 40px);
      margin: 0 auto;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  "
      >
        <Text>내 스터디 그룹</Text>
      </BlankBox>
      <BlankBox
        inlineStyles="
      width: calc(100% - 40px);
      margin: 0 auto;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  "
      >
        <Text>알림 설정</Text>
      </BlankBox>
      <BlankBox
        inlineStyles="
      width: 100%;
      height: 8px;
      margin: 12px 0px;
      background: #F6F6F6;
      border-top: 1px solid #EDEDED;
      border-bottom: 1px solid #EDEDED;
    "
      />
      <BlankBox
        inlineStyles="
      width: calc(100% - 40px);
      margin: 0 auto;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  "
      >
        <Text>로그아웃</Text>
      </BlankBox>
      <BlankBox
        inlineStyles="
      margin: 24.5px 20px 23.5px 20px;
      width: 100%;
      height: 1px;
      background: #e1e1e1;
  "
      />
      <Text
        inlineStyles="
      margin-left: 20px;
      font-size: 14px;
      letter-spacing: -0.03em;
      color: #898989;
  "
      >
        회원탈퇴
      </Text>
    </>
  );
};

export default Overview;
