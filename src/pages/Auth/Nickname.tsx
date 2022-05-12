import React, { useState } from "react";

import { useAppDispatch } from "@redux/hooks";
import { setUser } from "@redux/modules/userSlice";

export const NicknamePage = () => {
  const [nickname, setNickname] = useState<string>("");

  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setNickname(event.target.value);
  };
  const onClick = () => {
    console.log("서버에 닉네임보내기");
    console.log(nickname);
    dispatch(setUser(nickname));
  };
  return (
    <React.Fragment>
      <h1>테스트페이지</h1>

      <input
        placeholder="닉네임"
        type="text"
        value={nickname}
        onChange={onChange}
      />
      <label>닉네임을 입력해주세요: {nickname}</label>
      <button onClick={onClick}>가입완료</button>
    </React.Fragment>
  );
};
