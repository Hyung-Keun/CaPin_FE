import React from "react";

import gamst from "../assets/images/gamst.jpeg";

import { Text, Image, BlankBox } from "@elements";

const MyPage = () => {
  return (
    <React.Fragment>
      <Text inlineStyles="margin: 53px 148px 40px 147px">마이 페이지</Text>
      <BlankBox inlineStyles="display: flex">
        <Image
          size="50px"
          shape="circle"
          src={gamst}
          inlineStyles="margin: 0px 0px 0px 20px"
        />
        <Text inlineStyles="margin: 16px 201px 17px 12px">닉네임닉네임</Text>
      </BlankBox>
      <BlankBox
        inlineStyles="margin: 24px;
width: 335px;
height: 0px;
left: 20px;
top: 199px;
border: 1px solid #E1E1E1;"
      />
      <Text inlineStyles="margin: 23px 0px 0px 20px">내 스터디 그룹</Text>
      <Text inlineStyles="margin: 23px 0px 0px 20px">알림 설정</Text>
      <BlankBox
        inlineStyles="box-sizing: border-box;
width: 378px;
height: 8px;
margin: 26px 0px 0px 0px;
background: #F6F6F6;
border: 1px solid #EDEDED;"
      />
      <Text inlineStyles="margin: 23px 0px 0px 20px">로그아웃</Text>
      <BlankBox
        inlineStyles="margin: 24px;
width: 335px;
height: 0px;
left: 20px;
top: 199px;
border: 1px solid #E1E1E1;"
      />
      <Text
        inlineStyles="margin: 23px 0px 0px 20px; 
      
      
      
      
      
      or: #626262"
      >
        회원탈퇴
      </Text>
    </React.Fragment>
  );
};
export default MyPage;
