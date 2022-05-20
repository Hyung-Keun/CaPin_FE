import React, { useState } from "react";

import { setUser } from "@redux/modules/userSlice";

import gamst from "@assets/images/gamst.jpeg";
import { Button, Grid, Text, Image, Input } from "@elements";
import { useAppDispatch, useAppSelector } from "@hooks/redux";

const Profile = () => {
  const [nickname, setNickname] = useState<string>("");
  const name = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    console.log(name);
    setNickname(event.target.value);
  };
  const onClick = () => {
    console.log("서버에 닉네임보내기");
    dispatch(setUser(nickname));
  };

  return (
    <React.Fragment>
      <Grid inlineStyles="background-color: #FFFFFF">
        <Text
          inlineStyles="
          position: absolute;
width: 203px;
height: 26px;
left: 20px;
top: 100px;
font-size: 18px;
line-height: 26px;
font-weight: 500px
        "
        >
          프로필사진을 선택해주세요.
        </Text>
        <Image
          size="56px"
          src={gamst}
          shape="circle"
          inlineStyles="margin: 142px 299px 614px 20px; position:absolute;"
        />

        <Image
          size="56px"
          shape="circle"
          inlineStyles="background-color: #F2F2F2; border: none; margin: 214px 299px 614px 20px; position: absolute "
        />
        <Text inlineStyles="position: absolute font-size: 15px; font-weight: 500px; margin: 230px 188px 560px 88px; width: 150px; height: 22px;">
          새로운 사진 등록
        </Text>
        <Button
          inlineStyles="width: 50px;
  height: 50px;
  background-color: #F2F2F2;
  color: #212121;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: absolute;
  top: 217px;
  left: 23px;
  text-align: center;
  column-align: middle;
  border: none;
  border-radius: 50px;"
        >
          +
        </Button>
        <Text
          inlineStyles="width: 170px;
    height: 26px;
    top: 350px;
    position: absolute;
    left: 20px; 
    fonst-size: 18px;
    font-weight: 500"
        >
          닉네임을 입력해주세요. {nickname}
        </Text>
        <Input
          placeholder="닉네임"
          type="text"
          value={nickname}
          onChange={onChange}
          inlineStyles="position: absolute; width: auto; height: 44px; top 384px; border-radius: 10px; left: 20px; right: 20px"
        />
        <Text
          inlineStyles="top: 444px;
    position: absolute;
    left: 20px;
    font-size: 12px;
    color: #848484;"
        >
          닉네임으로 소통해요.
        </Text>
        <Button
          inlineStyles="bottom: 44px;
    position: absolute;
    width: auto;
    height: 48px;
    left: 20px;
    right: 20px;
    background: #4E4E4E;
    border-radius: 10px;"
          onClick={onClick}
        >
          <Text
            inlineStyles="color: #FFFFFF;
          font-weight: 500; font-size: 16px;"
          >
            가입완료
          </Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
};
export default Profile;
