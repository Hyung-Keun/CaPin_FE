import React from "react";

import defaultImg from "../assets/defaultImg.svg";

import { Grid, Text, Input, Button, BlankBox, Image } from "@elements";

const StudyOpen = () => {
  const [people, setPeople] = React.useState(0);
  const onPlus = () => {
    setPeople(people + 1);
  };
  const onMinus = () => {
    if (people === 0) {
      return setPeople(0);
    }
    setPeople(people - 1);
  };
  return (
    <React.Fragment>
      <Grid>
        <Text
          inlineStyles="
          width: 100%;
          Height: 27px;
          Top: 53px;
          position: absolute;
          font-size: 25px;
          font-weight: 500;
          text-align: center;
          line-height: 26px;
        "
        >
          스터디 그룹 개설
        </Text>
        <Text
          inlineStyles="
        position: absolute;
        height: 22px;
        left: 20px;
        top: 100px;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.05em;
        color: #4A4A4A;
        "
        >
          스터디 이름<span style={{ color: "#ff0000" }}>*</span>
        </Text>
        <Input
          inlineStyles="
          position: absolute;
          width: 90%;
          height: 38px;
          top: 130px;
          background: #F8F8F8;
          border-radius: 8px;
          border: 1px solid #212121;
          padding: 12px 4px;
          box-sizing: border-box;
          left: 20px;
        "
        />
        <Text
          inlineStyles="position: absolute;
width: 36px;
height: 22px;
left: 20px;
top: 200px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;

letter-spacing: -0.05em;

color: #4A4A4A;"
        >
          지역<span style={{ color: "#ff0000" }}>*</span>
        </Text>
        <Button
          inlineStyles="box-sizing: border-box;
          position: absolute;
          width: 75px;
          height: 38px;
          right: 20px;
          top: 192px;
          border: 1px solid;
          border-radius: 8px;
          background: #F8F8F8;"
        >
          <Text>선택</Text>
        </Button>
        <Text
          inlineStyles="position: absolute;
width: 30px;
height: 22px;
left: 20px;
top: 260px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
letter-spacing: -0.05em;
color: #4A4A4A;"
        >
          기간
        </Text>
        <Input
          inlineStyles="
position: absolute;
width: 104px;
height: 38px;
right: 150px;
top: 254px;
background: #F8F8F8;
border-radius: 8px;"
        />
        <Text
          inlineStyles="position: absolute;
width: 9px;
height: 22px;
right: 131px;
top: 260px;
font-family: Noto Sans KR;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
letter-spacing: -0.05em;
color: #000000;"
        >
          ~
        </Text>
        <Input
          inlineStyles="
position: absolute;
width: 104px;
height: 38px;
right: 20px;
top: 254px;
background: #F8F8F8;
border-radius: 8px;"
        />
        <Text
          inlineStyles="position: absolute;
width: 3px;
height: 3px;
left: 21px;
top: 308px;
color: #256FFF;"
        >
          ◦
        </Text>
        <Text
          inlineStyles="position: absolute;
width: 154px;
height: 18px;
left: 30px;
top: 308px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
letter-spacing: -0.02em;
color: #256FFF;
"
        >
          예시: 2022.03.15 ~ 2022.09.23
        </Text>
        <Text
          inlineStyles="position: absolute;
width: 30px;
height: 22px;
left: 20px;
top: 349px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
letter-spacing: -0.05em;
color: #4A4A4A;
"
        >
          인원
        </Text>
        <Button
          onClick={onMinus}
          inlineStyles="width: 30px;
          height: 30px;
          background-color: #F2F2F2;
          color: #212121;
          box-sizing: border-box;
          position: absolute;
          top: 343px;
          right: 148px;
          text-align: inherit;
          vertical-align: middle;
          border: 1px solid #DEDEDE;
          border-radius: 28px;"
        >
          ➖
        </Button>
        <BlankBox
          value={people}
          inlineStyles="position: absolute;
width: 80px;
height: 38px;
right: 60px;
top: 341px;
background: #F8F8F8;
border-radius: 8px;
display: flex;
align-items: center;
text-align: center;
display: inline-grid"
        >
          {people}
        </BlankBox>
        <Button
          onClick={onPlus}
          inlineStyles="width: 30px;
          height: 30px;
          background-color: #F2F2F2;
          color: #212121;
          box-sizing: border-box;
          position: absolute;
          top: 343px;
          right: 20px;
          text-align: inherit;
          vertical-align: middle;
          border: 1px solid #DEDEDE;
          border-radius: 28px;"
        >
          ➕
        </Button>
        <Text
          inlineStyles="position: absolute;
width: auto;
height: 22px;
left: 20px;
top: 403px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
letter-spacing: -0.05em;
color: #4A4A4A;"
        >
          이미지
        </Text>
        <BlankBox
          inlineStyles="
          position: absolute;
width: 90%;
height: 64px;
left: 20px;
top: 440px;
border: 1px dashed #DEDEDE;
border-radius: 8px;"
        >
          <Image size="100%" src={defaultImg} />
        </BlankBox>
        <Text
          inlineStyles="position: absolute;
width: auto;
height: 22px;
left: 21px;
top: 528px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
letter-spacing: -0.05em;
color: #4A4A4A;"
        >
          설명
        </Text>
        <Input
          multiLine
          inlineStyles="position: absolute;
width: 90%;
height: 140px;
left: 21px;
top: 558px;
background: #F8F8F8;
border-radius: 8px;
resize: none;"
        />
        <Button
          inlineStyles="position: absolute;
width: 90%;
height: 48px;
left: 20px;
bottom: 60px;
background: #4E4E4E;
border-radius: 10px;"
        >
          <Text
            inlineStyles="
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #FFFFFF;"
          >
            스터디만들기
          </Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
};
export default StudyOpen;
