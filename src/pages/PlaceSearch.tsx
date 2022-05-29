import React, { useCallback, useState, useEffect } from "react";

import { debounce } from "lodash";
import styled from "styled-components";

import Icon from "@components/Icon";

import { useLazyPostCoordinateQuery } from "@redux/api/coordinateApi";
import { useLazyGetAddressQuery } from "@redux/api/placeApi";

import dummy from "./data.json";

import { BlankBox, Text, Input, Button } from "@elements";

const PlaceSearch = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [isShowSearchList, setIsShowSearchList] = useState(false);

  const [trigger, { data, isSuccess }] = useLazyGetAddressQuery();
  const [selectedAddress, setSelectedAddress] = useState<any>({});
  const [postTrigger, { error, isError, isSuccess: Success }] =
    useLazyPostCoordinateQuery();

  const debounceOnChange = useCallback(
    debounce((value) => {
      console.log("Debounce function");
      trigger(value);
      setIsShowSearchList(true);
    }, 700),
    [],
  );

  const searchAddress = (event: any) => {
    console.log(searchTxt);
    setSearchTxt(event.target.value);
    debounceOnChange(event.target.value);
  };

  console.log(selectedAddress);

  const postCoordinates = () => {
    postTrigger({
      groupId: 9,
      startLocationX: selectedAddress.x,
      startLocationY: selectedAddress.y,
      startAddress: selectedAddress.address_name,
    });
  };

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
        {dummy.nickname.map((item) => (
          <React.Fragment key={item.id}>
            <Text
              inlineStyles="position: relative;
width: 46px;
height: 20px;
left: 20px;
top: 238px;
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
            {Object.keys(selectedAddress).length ? (
              <BlankBox inlineStyles="width: 335px; height: 44px; top: 242px; left: 20px; position: relative;background-color:#F5F5F5; border-radius: 6px;">
                <Text inlineStyles="top:11px; left: 2px; position: relative; font-size: 16px">
                  {selectedAddress.address_name}
                </Text>
                <Button
                  background="none"
                  border="none"
                  inlineStyles="position: relative; left: 301px; bottom: 5px;"
                  onClick={() => {
                    setSelectedAddress({});
                    setSearchTxt("");
                  }}
                >
                  <Icon type="CircleX" />
                </Button>
              </BlankBox>
            ) : (
              <BlankBox>
                <Input
                  value={searchTxt}
                  onChange={searchAddress}
                  placeholder="출발지를 입력해주세요!"
                  inlineStyles="position: relative;
width: 335px;
height: 44px;
left: 20px;
top: 242px;
background: #F5F5F5;
border-radius: 6px;
padding: 11px 0px 0px 14px;
font-size: 16px;
"
                />
              </BlankBox>
            )}

            {isShowSearchList && searchTxt ? (
              <AutoSearchContainer>
                <AutoSearchWrap>
                  {data?.documents.map((item: any, idx: number) => (
                    <AutoSearchData
                      key={idx}
                      onClick={() => {
                        setSelectedAddress(item);
                        setIsShowSearchList(false);
                      }}
                    >
                      {item.address_name}
                    </AutoSearchData>
                  ))}
                </AutoSearchWrap>
              </AutoSearchContainer>
            ) : (
              <AutoSearchData></AutoSearchData>
            )}
          </React.Fragment>
        ))}
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
          onClick={postCoordinates}
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

const AutoSearchContainer = styled.div`
  z-index: 1;
  width: 335px;
  background-color: #f5f5f5;
  position: relative;
  top: 226px;
  left: 20px;
`;

const AutoSearchWrap = styled.ul``;

const AutoSearchData = styled.ul`
  padding: 5px 0px 0px 3px;
  width: 100%;
  font-size: 16px;
  z-index: 4;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  position: relative;
  border-top: hidden;
`;

export default PlaceSearch;
