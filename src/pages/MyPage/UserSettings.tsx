import React from "react";

import styled from "styled-components";

import TitleWithBackButton from "@components/TitleWithBackButton";

import gamst from "../../assets/images/gamst.jpeg";
import { ICommonProps } from "./types";

import { Image } from "@elements";
import useFileLoad from "@hooks/useFileLoad";
import { typography, palette } from "@utils/const";

const ChoosePhotoGuide = styled.p`
  margin-top: 13px;
  margin-bottom: 12px;
  ${typography.st18sb};
`;

const TypeInputGuide = styled(ChoosePhotoGuide)`
  margin-top: 40px;
  margin-bottom: 12px;
`;

const NewPhotoGuide = styled.div`
  display: flex;
  gap: 0 12px;
  align-items: center;

  & > button {
    width: 56px;
    height: 56px;
    position: relative;
    border: none;
    border-radius: 9999px;
    background: ${palette.orange050};
  }
  & > span {
    ${typography.b15r};
    color: ${palette.grey900};
  }
`;

const UserNicknameInput = styled.input`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: ${palette.grey050};
  ${typography.b15r};
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 14px;
`;

const UserNameGuide = styled.ul`
  list-style: disc;
  margin-top: 8px;

  & > li {
    margin-left: 20px;
    ${typography.b12m};
    color: ${palette.grey500};
  }
`;

const Savebutton = styled.button`
  width: calc(100% - 40px);
  height: 48px;
  position: fixed;
  bottom: 43px;
  left: 20px;
  border: none;
  border-radius: 6px;
  background: ${palette.orange600};
  color: #fff;
  ${typography.b16sb};
`;

const Section = styled.section`
  padding: 0 20px;
`;

const UserSettings = ({ goBack }: ICommonProps) => {
  const { FileLoader, isLoading } = useFileLoad();
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <TitleWithBackButton
        title=""
        showTitle={false}
        showButton
        onBackButtonClick={goBack}
      />
      <Section>
        <ChoosePhotoGuide>프로필 사진을 등록해주세요</ChoosePhotoGuide>
        <Image
          src={gamst}
          size="56px"
          shape="circle"
          inlineStyles="margin: 12px 0 16px 0"
        />
        <FileLoader>
          <NewPhotoGuide>
            <button>+</button>
            <span>새로운 사진 등록</span>
          </NewPhotoGuide>
        </FileLoader>
        <TypeInputGuide>닉네임을 입력해주세요.</TypeInputGuide>
        <UserNicknameInput type="text" ref={inputRef} />
        <UserNameGuide>
          <li>CA PIN에서는 닉네임으로 소통해요</li>
        </UserNameGuide>
      </Section>
      <Savebutton>저장하기</Savebutton>
    </>
  );
};

export default UserSettings;
