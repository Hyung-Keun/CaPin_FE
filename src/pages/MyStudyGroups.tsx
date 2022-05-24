import React from "react";

import { BlankBox, Text } from "@elements";

const MyStudyGroups = () => {
  return (
    <React.Fragment>
      <Text inlineStyles="margin: 53px 0px 40px 127px; width: 100%;">
        스터디 그룹 페이지
      </Text>
      <BlankBox inlineStyles="width: 375px; height: 717px; background: #F7F7F7; display: flex; flex-direction: column ">
        <BlankBox inlineStyles="width: 310px; height: 181px; background: #FFFFFF; margin: 20px 0px 0px 32px">
          <Text inlineStyles="margin: 16px 0px 0px 16px">영어스피킹스터디</Text>
          <BlankBox inlineStyles="border: 1px solid #E1E1E1; width: 100%; margin: 100px 0px 0px 0px;" />
          <BlankBox inlineStyles="display:flex">
            <Text inlineStyles="margin: 12px 0px 16px 12px">중간지점: </Text>
            <Text inlineStyles="margin: 12px 0px 16px 12px">이촌 스타벅스</Text>
          </BlankBox>
        </BlankBox>
        <BlankBox inlineStyles="width: 310px; height: 181px; background: #FFFFFF; margin: 20px 0px 0px 32px">
          <Text inlineStyles="margin: 16px 0px 0px 16px">
            프론트엔드 스터디
          </Text>
          <BlankBox inlineStyles="border: 1px solid #E1E1E1; width: 100%; margin: 100px 0px 0px 0px;" />
          <BlankBox inlineStyles="display:flex">
            <Text inlineStyles="margin: 12px 0px 16px 12px">중간지점: </Text>
            <Text inlineStyles="margin: 12px 0px 16px 12px">한강대교</Text>
          </BlankBox>
        </BlankBox>
      </BlankBox>
    </React.Fragment>
  );
};
export default MyStudyGroups;
