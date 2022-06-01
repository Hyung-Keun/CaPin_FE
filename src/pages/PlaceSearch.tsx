import React, { useCallback, useState, useEffect } from "react";

import { debounce } from "lodash";
import styled from "styled-components";

import Icon from "@components/Icon";

import { useLazyPostCoordinateQuery } from "@redux/api/coordinateApi";
import { useLazyGetAddressQuery } from "@redux/api/placeApi";

import dummy from "./data.json";

import { BlankBox, Text, Input, Button } from "@elements";
import { palette } from "@utils/const";

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
    const GroupId = ({ match }: any) => {
      const { groupId } = match.params;
    };

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
        width="100vw"
        height="100vh"
        backgroundColor={palette.orange100}
      >
        <Button
          margin="58px 0px 0px 20px"
          background="transparent"
          border="none"
        >
          <Icon type="ArrowLeftWhite" />
        </Button>
        <BlankBox
          width="100vw"
          height="100vh"
          margin="30px 0 0 0"
          backgroundColor={palette.white}
          border="solid 1px transparent"
          borderRadius="10px 10px 0 0"
          borderBottomColor="transparent"
        >
          <Text
            width="232px"
            height="54px"
            margin="56px 0 0 20px"
            fontWeight={600}
            fontSize="18px"
            lineHeight="27px"
            letterSpacing="-0.03em"
            color={palette.grey900}
          >
            출발지를 입력하고,
            <Text
              width="250px"
              height="54px"
              fontWeight={600}
              fontSize="18px"
              lineHeight="27px"
              letterSpacing="-0.03em"
              color={palette.grey900}
            >
              중간장소와 카페를 추천받으세요!
            </Text>
          </Text>
          {dummy.nickname.map((item) => (
            <React.Fragment key={item.id}>
              <Text
                width="46px"
                height="20px"
                margin="24px 0 0 20px"
                fontWeight={700}
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="-0.04em"
                color={palette.grey700}
              >
                {item.name}
              </Text>
              {Object.keys(selectedAddress).length ? (
                <BlankBox
                  backgroundColor={palette.grey050}
                  width="335px"
                  height="44px"
                  margin="4px 0 0 20px"
                  borderRadius="6px"
                  display="flex"
                  flexDirection="column"
                >
                  <Text fontWeight={400} margin="11px 0 0 14px" fontSize="16px">
                    {selectedAddress.address_name}
                  </Text>
                  <Button
                    width="21px"
                    height="21px"
                    border="none"
                    background="transparent"
                    margin="-16px 0 0 295px"
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
                    width="335px"
                    height="44px"
                    margin="4px 0 0 20px"
                    backgroundColor={palette.grey050}
                    border-radius="6px"
                    padding="11px 0px 11px 14px"
                    fontSize="16px"
                    fontWeight={400}
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
            width="335px"
            height="48px"
            margin="187px 0 0 20px"
            background={palette.grey800}
            borderRadius="6px"
            border="none"
          >
            <Text color={palette.white}>저장하기</Text>
          </Button>
          <Button
            width="335px"
            height="48px"
            margin="12px 0 0 20px"
            onClick={postCoordinates}
            background={palette.orange600}
            borderRadius="6px"
            border="none"
          >
            <Text color={palette.white}>중간장소 추천받기</Text>
          </Button>
        </BlankBox>
      </BlankBox>
    </React.Fragment>
  );
};

const AutoSearchContainer = styled.div`
  z-index: 1;
  width: 335px;
  background-color: ${palette.grey050};
  position: relative;
  top: -15px;
  left: 20px;
  padding-left: 10px;
  padding-bottom: 11px;
  border-radius: 0 0 10px 10px;
`;

const AutoSearchWrap = styled.ul``;

const AutoSearchData = styled.ul`
  padding: 5px 0px 0px 3px;
  width: 100%;
  font-size: 16px;
  z-index: 4;
  &:hover {
    background-color: ${palette.white};
    cursor: pointer;
  }
  position: relative;
  border-top: hidden;
`;

export default PlaceSearch;
