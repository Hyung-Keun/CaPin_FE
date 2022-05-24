import React, { useState } from "react";

import { debounce } from "lodash";

import { useGetAddressQuery } from "@redux/api/placeApi";
import { placeApi } from "@redux/api/placeApi";

import dummy from "./data.json";

import { BlankBox, Text, Input, Button, Image } from "@elements";

const PlaceSearch = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const { data } = useGetAddressQuery(searchTxt);

  const searchAddress = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTxt(event.target.value);
    console.log(event.target.value);
  };

  const searchResult: any[] = [];
  const addressData = data?.documents;
  if (addressData !== undefined && addressData != null) {
    for (let idx = 0; idx < addressData.length; idx++) {
      const result = data?.documents[idx].address.address_name;
      console.log(`${result} : ${idx}`);
      searchResult.push(result);
    }
  }
  console.log(searchResult);
  return (
    <React.Fragment>
      <BlankBox
        inlineStyles="flex-direction: column;
      display: flex;"
      >
        <Text
          inlineStyles="
          position: absolute;
          width: 232px;
          height: 54px;
          left: 20px;
          top: 160px;
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.04em;
          color: #111111;
          "
        >
          출발지를 입력하고 중간장소와 카페를 추천받으세요!
        </Text>
        <Text
          inlineStyles="
          position: absolute;
          width: auto;
          height: 20px;
          left: 20px;
          top: 240px;
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.03em;
          color: #4F4F4F;
          "
        >
          방장닉네임1
        </Text>
        <Input
          placeholder="출발지를 입력해주세요!"
          inlineStyles="position: absolute;
width: 335px;
height: 46px;
left: 20px;
top: 265px;
background: #F7F7F7;
border-radius: 10px;"
        />
        {dummy.nickname.map((item) => (
          <React.Fragment key={item.id}>
            <Text
              inlineStyles="position: relative;
width: 46px;
height: 20px;
left: 20px;
top: 327px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.04em;
color: #787878;
margin-top: 5px"
            >
              {item.name}
            </Text>
            <Input
              onChange={debounce(searchAddress, 700)}
              placeholder="출발지를 입력해주세요!"
              inlineStyles="position: relative;
width: 335px;
height: 46px;
left: 20px;
top: 330px;
background: #F7F7F7;
border-radius: 10px;"
            />
          </React.Fragment>
        ))}
        <Text>{searchResult}</Text>
        <Button
          inlineStyles="position: relative;
width: 335px;
height: 48px;
left: 20px;
top: 370px;
background: #4F4F4F;
border-radius: 10px;
color: #FFFFFF"
        >
          저장하기
        </Button>
        <Button
          inlineStyles="position: relative;
          width: 335px;
          height: 48px;
          left: 20px;
          top: 382px;
          background: #EEEEEE;
          border-radius: 10px;"
        >
          중간장소 추천받기
        </Button>
      </BlankBox>
    </React.Fragment>
  );
};
export default PlaceSearch;
