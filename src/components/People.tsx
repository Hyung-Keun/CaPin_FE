import React from "react";

import gamst from "../assets/images/gamst.jpeg";

import { Text, Image, BlankBox } from "@elements";

const People = () => {
  return (
    <React.Fragment>
      <Text inlineStyles="margin:0px 0px 28px 20px">스터디원목록</Text>
      <BlankBox inlineStyles="display: flex; flex-direction: column">
        <BlankBox inlineStyles="display:flex">
          <Image
            inlineStyles="margin: 0px 10px 8px 20px"
            shape="circle"
            size="30px"
            src={gamst}
          />
          <Text inlineStyles="margin: 5px 254px 27px 0px">회원</Text>
        </BlankBox>
        <Text
          inlineStyles="text-decoration-line: underline;
        margin: 65px 0px 0px 20px;
        "
        >
          스터디 나가기
        </Text>
      </BlankBox>
    </React.Fragment>
  );
};
export default People;
