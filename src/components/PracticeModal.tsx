import React, { useCallback, useState } from "react";

import styled from "styled-components";

import CommonModal from "./CommonModal";

import { Text } from "@elements";

const PracticeModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  //True: open False: close
  const onClickToggleModal = useCallback(
    (event: { preventDefault: () => void }) => {
      event?.preventDefault();
      setShowModal(!showModal);
    },
    [showModal],
  );
  console.log(showModal);
  return (
    <React.Fragment>
      <Main>
        <Title>배경화면입니다.</Title>
        {showModal && (
          <CommonModal rooms="two" onClick={onClickToggleModal}>
            <Text>뭐지</Text>
          </CommonModal>
        )}
        <DialogButton onClick={onClickToggleModal}>
          그냥 모달창열기
        </DialogButton>
        <p>테스트하는것입니다</p>
      </Main>
    </React.Fragment>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px);
  }
`;

export default PracticeModal;
