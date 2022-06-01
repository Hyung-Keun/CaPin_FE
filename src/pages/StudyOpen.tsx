import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";

import Header from "@components/Header";
import Icon from "@components/Icon";
import Loading from "@components/Loading";

import { useLazyCreateStudyQuery } from "@redux/api/studyApi";
import { setArea } from "@redux/modules/areaSlice";
import { setStudyOpenData } from "@redux/modules/studySlice";

import { Text, Input } from "@elements";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import useFileLoad from "@hooks/useFileLoad";
import { palette, typography } from "@utils/const";
import { base64ToBlob, checkValidDate, convertPixelToRem } from "@utils/func";

const StudyOpen = () => {
  const [inputState, setInputState] = useState({
    ...useAppSelector(({ study }) => study.data),
    roughAddress: useAppSelector(({ area }) => area.value),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [trigger, { data, isSuccess, isLoading }] = useLazyCreateStudyQuery();
  const {
    FileLoader,
    fileData,
    clearFileData,
    isLoading: isFileLoading,
  } = useFileLoad();

  const onPlus = () => {
    setInputState((state) => ({
      ...state,
      maxMemberCount: inputState.maxMemberCount + 1,
    }));
  };

  const onMinus = () => {
    if (inputState.maxMemberCount > 2) {
      setInputState((state) => ({
        ...inputState,
        maxMemberCount: inputState.maxMemberCount - 1,
      }));
    }
  };

  useEffect(() => {
    if (fileData) setInputState((state) => ({ ...state, image: fileData }));
  }, [fileData]);

  const clearImageData = () => {
    clearFileData();
    setInputState({ ...inputState, image: "" });
  };

  const onInputChange = useCallback(
    (key: keyof typeof inputState) => (e: ChangeEvent<HTMLInputElement>) =>
      setInputState((state) => ({ ...state, [key]: e.target.value })),
    [],
  );

  const setInputData = () => {
    const {
      groupTitle,
      description,
      maxMemberCount,
      image,
      roughAddress,
      firstDay,
      lastDay,
    } = inputState;

    const data = {
      groupTitle,
      description,
      maxMemberCount,
      image,
      roughAddress,
      firstDay,
      lastDay,
    };

    dispatch(setStudyOpenData({ data }));
  };

  const isBtnDisabled =
    Object.values(inputState).findIndex((state) => !state) !== -1;

  const onCreateStudyBtnClick = async () => {
    const {
      groupTitle,
      description,
      maxMemberCount,
      image,
      roughAddress,
      firstDay,
      lastDay,
    } = inputState;

    const isValidFirstDayForm = checkValidDate(firstDay);
    const isValidLastDayForm = checkValidDate(lastDay);
    if (!isValidFirstDayForm || !isValidLastDayForm) {
      alert(
        `${
          !isValidFirstDayForm ? "시작" : "종료"
        } 날짜의 형식이 잘못되었습니다.`,
      );
      return;
    }

    // "시작일 > 종료일" === true 면, return;
    if (new Date(firstDay).getTime() > new Date(lastDay).getTime()) {
      alert("기간이 올바르지 않습니다. 다시 입력해주세요.");
      return;
    }

    const imgUrl = image ?? fileData;
    const imgBlob = await base64ToBlob(imgUrl);

    if (imgBlob) {
      const formData = new FormData();
      formData.append("groupTitle", groupTitle);
      formData.append("description", description);
      formData.append("maxMemberCount", String(maxMemberCount));
      formData.append("image", imgBlob!);
      formData.append("roughAddress", roughAddress);
      formData.append("firstDay", firstDay.replaceAll(".", "-"));
      formData.append("lastDay", lastDay.replaceAll(".", "-"));

      trigger(formData);
    }
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      navigate(`/specificstudy/${data.groupId}`);
    }
  }, [isSuccess, isLoading, data, navigate]);

  return (
    <>
      {(isLoading || isFileLoading) && <Loading />}
      <Header type="Simple">스터디 그룹 개설</Header>
      <Container>
        <InputWrap column>
          <h2>
            스터디 이름 <span>*</span>
          </h2>
          <Input
            placeholder="스터디 그룹 이름"
            value={inputState.groupTitle}
            onChange={onInputChange("groupTitle")}
          />
        </InputWrap>
        <InputWrap>
          <h2>
            지역 <span>*</span>
          </h2>
          {inputState.roughAddress ? (
            <AddressBtn
              onClick={() => {
                setArea("");
                setInputState((state) => ({ ...state, roughAddress: "" }));
              }}
            >
              {inputState.roughAddress} <Icon type="XOrange" />
            </AddressBtn>
          ) : (
            <StyleLink to="/areaselection" onClick={setInputData}>
              선택
            </StyleLink>
          )}
        </InputWrap>
        <InputWrap column>
          <InputWrap>
            <h2>기간</h2>
            <div>
              <Input
                inlineStyles={`width: ${convertPixelToRem(134)};`}
                value={inputState.firstDay}
                onChange={onInputChange("firstDay")}
              />
              <span>~</span>
              <Input
                inlineStyles={`width: ${convertPixelToRem(134)};`}
                value={inputState.lastDay}
                onChange={onInputChange("lastDay")}
              />
            </div>
          </InputWrap>
          <Text
            inlineStyles={`position: relative; top: -${convertPixelToRem(
              20,
            )}; font-size: ${convertPixelToRem(12)}; color: ${
              palette.orange600
            }`}
          >
            ◦ 예시: 2022.03.15 ~ 2022.09.23
          </Text>
        </InputWrap>
        <InputWrap>
          <h2>인원</h2>
          <div>
            <TransparentBtn onClick={onMinus}>
              <Icon type="CircleMinusGrey" />
            </TransparentBtn>
            <Input
              inlineStyles={`width: ${convertPixelToRem(80)};`}
              value={String(inputState.maxMemberCount)}
              readOnly
            />
            <TransparentBtn onClick={onPlus}>
              <Icon type="CirclePlusGrey" />
            </TransparentBtn>
          </div>
        </InputWrap>
        <InputWrap column>
          <h2>이미지</h2>
          <ImageWrap
            image={
              inputState.image ? String(inputState.image) : String(fileData)
            }
          >
            {!fileData ? (
              <FileLoader style={FileLoaderStyle} accept="image/*">
                <Icon type="CameraGrey" />
              </FileLoader>
            ) : (
              <>
                <button onClick={clearImageData}>
                  <Icon type="CircleXDark" />
                </button>
              </>
            )}
          </ImageWrap>
        </InputWrap>
        <InputWrap column>
          <h2>설명</h2>
          <Input
            placeholder="스터디 설명 작성해주세요"
            multiLine
            value={inputState.description}
            onChange={onInputChange("description")}
          />
        </InputWrap>
        <CreateButton onClick={onCreateStudyBtnClick} disabled={isBtnDisabled}>
          저장하기
        </CreateButton>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 1.25em;
  h2 {
    ${typography.b15r};
    color: ${palette.grey700};
    span {
      display: inline-block;
      margin-left: 0.1em;
      color: ${palette.orange500};
    }
  }
`;

const InputWrap = styled.div<{ column?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: space-between;
  align-items: ${({ column }) => (column ? "flex-start" : "center")};
  & > div {
    display: flex;
    align-items: center;
    & > *:not(:first-child) {
      margin-left: ${convertPixelToRem(8)};
    }
    & > input {
      text-align: center;
    }
  }
  & > h2 {
    margin-bottom: ${({ column }) =>
      column ? convertPixelToRem(8) : "initial"};
  }
  margin-bottom: ${convertPixelToRem(24)};
`;

const ImageWrap = styled.div<{ image: string }>`
  border: ${convertPixelToRem(1)} dashed ${palette.grey200};
  border-radius: ${convertPixelToRem(4)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${convertPixelToRem(128)};
  height: ${convertPixelToRem(72)};
  background: ${({ image }) => (image ? `url(${image})` : "none")} no-repeat;
  background-position: center center;
  background-size: auto 100%;
  position: relative;

  & button {
    border: none;
    background: none;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    padding: 0;
    transform: translate(50%, -50%);
    cursor: pointer;
  }
`;

const StyleLink = styled(Link)`
  ${typography.b15r}
  border: ${palette.orange200} ${convertPixelToRem(1)} solid;
  color: ${palette.orange600};
  border-radius: ${convertPixelToRem(4)};
  padding: ${convertPixelToRem(8)} ${convertPixelToRem(24)};
`;

const FileLoaderStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CreateButton = styled.button`
  ${typography.b16sb}
  width: 100%;
  background-color: ${palette.orange600};
  color: ${palette.grey050};
  border: none;
  border-radius: ${convertPixelToRem(4)};
  padding: ${convertPixelToRem(12)};
  &:disabled {
    background-color: ${palette.grey200};
    color: ${palette.grey400};
  }
`;

const AddressBtn = styled.button`
  ${typography.b15r}
  background: none;
  border: ${palette.orange200} ${convertPixelToRem(1)} solid;
  border-radius: ${convertPixelToRem(4)};
  padding: ${convertPixelToRem(8)} ${convertPixelToRem(24)};
  display: flex;
  align-items: center;

  cursor: pointer;

  & > svg {
    margin-left: ${convertPixelToRem(8)};
  }
`;

const TransparentBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default StudyOpen;
