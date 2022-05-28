import { useState, useEffect, useRef } from "react";

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

const ON_EVENT = new CustomEvent("capinNotice", { detail: true });
const OFF_EVENT = new CustomEvent("capinNotice", { detail: false });

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

  const lastOnRef = useRef(on ? "true" : "false");

  useEffect(() => {
    const nextEvent = on ? OFF_EVENT : ON_EVENT;
    window.dispatchEvent(nextEvent);
  }, [on]);

  useEffect(() => {
    return () => {
      window.localStorage.setItem(
        "capinNotice",
        /**
         * lastOnRef.current은 단지 값을 가리키고 있기 때문에 클린업 함수에 current property를 바인딩하여 사용해도 무방하다고 생각했습니다.
         */
        // eslint-disable-next-line react-hooks/exhaustive-deps
        lastOnRef.current === "true" ? "true" : "false",
      );
    };
  }, []);

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
