import { useState, useEffect } from "react";

import styled from "styled-components";

import TitleWithBackButton from "@components/TitleWithBackButton";

import { ICommonProps } from "../types";

const AlarmSection = styled.section`
  padding: 0 20px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ON_EVENT = new CustomEvent("capinNoticeOn");
const OFF_EVENT = new CustomEvent("capinNoticeOff");

const AlarmSettings = ({ goBack }: ICommonProps) => {
  const [on, setOn] = useState(() => {
    const storageValue = window.localStorage.getItem("capinNotice");
    if (storageValue === null) {
      return false;
    }

    const value = JSON.parse(storageValue);

    if (value === "true") {
      return true;
    }

    return false;
  });

  useEffect(() => {
    const nextEvent = on ? OFF_EVENT : ON_EVENT;
    window.dispatchEvent(nextEvent);
  }, [on]);

  const handleClick = () => setOn((prev) => !prev);

  return (
    <>
      <TitleWithBackButton onBackButtonClick={goBack} title="알림 설정" />
      <AlarmSection>
        <p>알림</p>
        {/* 구현 하여야 합니다.. */}
        <button onClick={handleClick}>{on ? "OFF" : "ON"}</button>
      </AlarmSection>
    </>
  );
};

export default AlarmSettings;
