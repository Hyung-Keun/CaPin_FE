import React, {
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { debounce } from "lodash";
import styled from "styled-components";

import { MemberAuthority } from "@type/group";

import Icon from "@components/Icon";
import Loading from "@components/Loading";

import { usePostCoordinateMutation } from "@redux/api/coordinateApi";
import { useLazyGetAddressQuery } from "@redux/api/placeApi";
import { useLazyGetSpecificStudyQuery } from "@redux/api/studyApi";
import { useGetUserQuery } from "@redux/api/userApi";

import { BlankBox, Text, Input, Button } from "@elements";
import { palette } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const PlaceSearch = () => {
  const navigate = useNavigate();
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<any>({});
  const [isShowSearchList, setIsShowSearchList] = useState(false);

  const { data: userData } = useGetUserQuery(null);
  const [getSpecificStudy, { data: specificStudyData }] =
    useLazyGetSpecificStudyQuery();
  const [trigger, { data }] = useLazyGetAddressQuery();
  const [postTrigger, { isLoading }] = usePostCoordinateMutation();

  const params = useParams();
  const { id: groupId } = params;

  const debounceOnChange = useCallback(
    debounce((value) => {
      trigger(value);
      setIsShowSearchList(true);
    }, 700),
    [],
  );

  const searchAddress = (event: any) => {
    setSearchTxt(event.target.value);
    debounceOnChange(event.target.value);
  };

  const onClickSaveButton = () => {
    if (groupId) {
      postTrigger({
        groupId: Number(groupId),
        startLocationX: selectedAddress.x,
        startLocationY: selectedAddress.y,
        startAddress: selectedAddress.address_name,
      });
    }
  };

  const onClickRecommendButton = () => {
    const isAvailable =
      !isLoading &&
      specificStudyData &&
      specificStudyData.memberList.findIndex((member) => member.address) !== -1;

    if (isAvailable) navigate(`/recommend/${groupId}`);
    else alert("불가능");
  };

  useEffect(() => {
    if (groupId) getSpecificStudy(groupId);
  }, [groupId]);

  useLayoutEffect(() => {
    if (specificStudyData) {
      specificStudyData.memberList.sort((a, b) =>
        b.authority === MemberAuthority.OWNER ? 1 : 0,
      );
      const selected = specificStudyData.memberList.find(
        (member) => member.memberId === userData?.memberId,
      )?.address;
      setSelectedAddress({ address_name: selected });
    }
  }, [specificStudyData, userData]);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      <BlankBox
        width="100vw"
        height="100vh"
        backgroundColor={palette.orange100}
      >
        <Button
          margin="58px 0px 0px 20px"
          background="transparent"
          border="none"
          onClick={() => navigate(-1)}
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
          {specificStudyData?.memberList.map(
            (item) =>
              item.authority !== MemberAuthority.WAIT && (
                <React.Fragment key={item.memberId}>
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
                    {item.username}
                  </Text>
                  {item.memberId !== userData?.memberId ? (
                    <BlankBox
                      backgroundColor={palette.grey050}
                      width="335px"
                      height="44px"
                      margin="4px 0 24px 20px"
                      borderRadius="6px"
                      display="flex"
                      flexDirection="column"
                    >
                      <Text
                        fontWeight={400}
                        margin="11px 0 0 14px"
                        fontSize="16px"
                      >
                        {item.address || "주소가 등록되어있지 않습니다."}
                      </Text>
                    </BlankBox>
                  ) : Object.keys(selectedAddress).length ? (
                    <BlankBox
                      backgroundColor={palette.grey050}
                      width="335px"
                      height="44px"
                      margin="4px 0 24px 20px"
                      borderRadius="6px"
                      display="flex"
                      flexDirection="column"
                    >
                      <Text
                        fontWeight={400}
                        margin="11px 0 0 14px"
                        fontSize="16px"
                      >
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
                        margin="4px 0 24px 20px"
                        backgroundColor={palette.grey050}
                        border-radius="6px"
                        padding="11px 0px 11px 14px"
                        fontSize="16px"
                        fontWeight={400}
                      />
                    </BlankBox>
                  )}
                  {isShowSearchList && searchTxt && (
                    <>
                      <Divider />
                      <AutoSearchContainer>
                        <AutoSearchWrap>
                          {data?.documents.map((item: any, idx: number) => {
                            const addr = item.address_name.replace(
                              searchTxt,
                              `<em>${searchTxt}</em>`,
                            );
                            return (
                              <AutoSearchData
                                key={idx}
                                onClick={() => {
                                  setSelectedAddress(item);
                                  setIsShowSearchList(false);
                                  setSearchTxt("");
                                }}
                                dangerouslySetInnerHTML={{ __html: addr }}
                              />
                            );
                          })}
                        </AutoSearchWrap>
                      </AutoSearchContainer>
                    </>
                  )}
                </React.Fragment>
              ),
          )}
          <Button
            width="335px"
            height="48px"
            margin="187px 0 0 20px"
            background={palette.grey800}
            borderRadius="6px"
            border="none"
            onClick={onClickSaveButton}
            disabled={!Object.keys(selectedAddress).length}
          >
            <Text color={palette.white}>저장하기</Text>
          </Button>
          <Button
            width="335px"
            height="48px"
            margin="12px 0 0 20px"
            onClick={onClickRecommendButton}
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

const AutoSearchContainer = styled.div``;

const Divider = styled.hr`
  border: none;
  height: ${convertPixelToRem(8)};
  width: 100%;
  background-color: ${palette.grey050};
`;

const AutoSearchWrap = styled.ul``;

const AutoSearchData = styled.li`
  padding: ${convertPixelToRem(13)} ${convertPixelToRem(20)};
  width: 100%;
  font-size: 16px;
  z-index: 4;
  &:hover {
    background-color: ${palette.white};
    cursor: pointer;
  }
  position: relative;
  border-top: hidden;
  & > em {
    color: ${palette.orange600};
  }
`;

export default PlaceSearch;
