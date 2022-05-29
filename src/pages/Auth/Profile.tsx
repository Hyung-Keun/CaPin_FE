import React, { useCallback, useState } from "react";

import { debounce } from "lodash";

import Icon from "@components/Icon";

import { useGetUserQuery, useLazyEditUserQuery } from "@redux/api/userApi";

import { Button, Text, Image, Input } from "@elements";

const Profile = () => {
  const [nickname, setNickname] = useState<string>("");
  const [postTrigger, { data: postData }] = useLazyEditUserQuery();
  const { data: getData } = useGetUserQuery(true);

  const debounceOnChange = useCallback(
    debounce(() => {
      console.log("Debounce function");
    }, 700),
    [],
  );

  const onChangeNickname: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    console.log(event.target.value);
    setNickname(event.target.value);
    debounceOnChange();
  };

  const postNickImage = () => {
    postTrigger({
      username: nickname ? nickname : getData?.username,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzcGxl-Tfu-MUAjSslSkyzT7ULQQI4EY5QA&usqp=CAU",
    });
  };

  return (
    <React.Fragment>
      <Text
        inlineStyles="
width: 100%;
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
        src={getData?.imageUrl}
        shape="circle"
        inlineStyles="margin: 142px 299px 614px 20px; position:absolute;"
      />

      <Image
        size="56px"
        src={getData?.image_url}
        shape="circle"
        inlineStyles="border: none; margin: 214px 299px 614px 20px;"
      />
      <Text inlineStyles="position: absolute; font-size: 15px; margin: 230px 188px 560px 88px; width: 150px; height: 22px;">
        새로운 사진 등록
      </Text>

      <Button
        onClick={postNickImage}
        inlineStyles="width: 50px;
  height: 50px;
  background-color: #F2F2F2;
  color: #212121;
  position: absolute;
  top: 267px;
  left: 20px;
  border: none;
  border-radius: 50px;"
      >
        <Icon type="CirclePlus"></Icon>
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
        placeholder={getData?.username}
        type="text"
        value={nickname}
        onChange={onChangeNickname}
        inlineStyles="position: absolute; width: auto; height: 44px; top 384px; border-radius: 10px; left: 20px; right: 20px"
      />
      <Text
        inlineStyles="top: 444px;
    position: absolute;
    left: 20px;
    font-size: 12px;
    color: #848484;"
      >
        CAPIN에서는 닉네임으로 소통해요.
      </Text>
      <Button
        onClick={postNickImage}
        inlineStyles="bottom: 44px;
    width: auto;
    height: 48px;
    left: 20px;
    right: 20px;
    background: #4E4E4E;
    border-radius: 10px;"
      >
        <Text
          inlineStyles="color: #FFFFFF;
          font-weight: 500; font-size: 16px;"
        >
          가입완료
        </Text>
      </Button>
    </React.Fragment>
  );
};
export default Profile;
