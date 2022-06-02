import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "@components/Loading";

import { useGetAuthQuery } from "@redux/api/authApi";
import {
  updateAccessToken,
  updateRefreshToken,
} from "@redux/modules/authSlice";

import { useAppDispatch } from "@hooks/redux";
import useCommonModal from "@hooks/useCommonModal";
import { IButtonData } from "@hooks/useUpDownModal";
import { setAccessTokenLS, setRefreshTokenLS } from "@utils/auth";

const OAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params: URLSearchParams = new URL(document.location.toString())
    .searchParams;
  const authCode = params.get("code");
  const { CommonModal, open } = useCommonModal();

  const { data, isSuccess, isError, error, isLoading } =
    useGetAuthQuery(authCode);

  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;

  const buttons: [IButtonData] = [
    {
      text: "확인",
      onClick: () => navigate("/login"),
    },
  ];

  useEffect(() => {
    if (isSuccess) {
      setAccessTokenLS(accessToken);
      setRefreshTokenLS(refreshToken);
      dispatch(updateAccessToken(accessToken));
      dispatch(updateRefreshToken(refreshToken));
      navigate(data?.isFirst ? "/profile" : "/groupList");
    } else if (isError) {
      console.log(error);
      open();
    }
  }, [isLoading]);

  return (
    <>
      <Loading isSolid />
      <CommonModal
        text="로그인에 실패했습니다.\n잠시후 다시 시도해주세요."
        buttons={buttons}
      />
    </>
  );
};

export default OAuth;
