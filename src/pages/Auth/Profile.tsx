import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { debounce } from "lodash";

import Icon from "@components/Icon";

import { useGetUserQuery, useLazyEditUserQuery } from "@redux/api/userApi";

import { Button, Text, Image, Input } from "@elements";
import useFileLoad from "@hooks/useFileLoad";
import { base64ToBlob } from "@utils/func";

const Profile = () => {
  const [nickname, setNickname] = useState<string>("");
  const [postTrigger, { data: postData }] = useLazyEditUserQuery();
  const [profileImage, setProfileImage] = useState<string>("");
  const { data: getData } = useGetUserQuery(true);
  const { FileLoader, fileData } = useFileLoad();
  const navigate = useNavigate();

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

  const postImage = () => {
    console.log(getData.imageUrl);
    setProfileImage(String(fileData));
  };

  const postNickImage = async () => {
    const imgUrl = fileData ?? profileImage;
    const imgBlob = await base64ToBlob(imgUrl);

    if (imgBlob) {
      const formData = new FormData();
      formData.append("username", nickname ? nickname : getData?.username);
      formData.append("image", imgBlob);
      postTrigger(formData);
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <Text
        fontFamily="Noto Sans KR"
        margin="100px 0px 0px 20px"
        height="56px"
        fontWeight={600}
        fontStyle="normal"
        fontSize="18px"
        lineHeight="27px"
        letterSpacing="-0.03em"
      >
        프로필사진을 선택해주세요.
      </Text>

      <Image
        size="56px"
        src={fileData || getData?.imageUrl}
        shape="circle"
        margin="0px 0px 0px 20px"
      />
      <Text>새로운 사진 등록</Text>
      <Button
        onClick={postImage}
        background="transparent"
        border="transparent"
        margin="16px 0px 0px 13px"
      >
        <FileLoader accept="image/*">
          <Icon type="CirclePlusOrange" />
        </FileLoader>
      </Button>

      <Text
        margin="40px 0px 0px 20px"
        fontFamily="Noto Sans KR"
        fontWeight={600}
        fontSize="18px"
        lineHeight="27px"
      >
        닉네임을 입력해주세요.
      </Text>

      <Input
        placeholder={getData?.username}
        type="text"
        value={nickname}
        onChange={onChangeNickname}
        minWidth="335px"
        margin="12px 0px 0px 20px"
      />
      <Text
        margin="8px 0px 0px 20px"
        color="#898989"
        fontSize="12px"
        lineHeight="18px"
      >
        *CAPIN에서는 닉네임으로 소통해요.
      </Text>

      <Button
        onClick={postNickImage}
        background="#EB5527"
        borderRadius="6px"
        height="48px"
        margin="305px 20px 43px 20px"
        border="1px solid #EB5527"
        minWidth="335px"
      >
        <Text color="#FFFFFF" font-weight={500} fontSize="16px">
          가입완료
        </Text>
      </Button>
    </React.Fragment>
  );
};
export default Profile;
