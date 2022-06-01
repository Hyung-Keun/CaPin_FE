import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "@components/Loading";

import { useGetAuthQuery } from "@redux/api/authApi";
import {
  updateAccessToken,
  updateRefreshToken,
} from "@redux/modules/authSlice";

import { useAppDispatch } from "@hooks/redux";
import { setAccessTokenLS, setRefreshTokenLS } from "@utils/auth";

const OAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params: URLSearchParams = new URL(document.location.toString())
    .searchParams;
  const authCode = params.get("code");

  const { data, isSuccess, isError, error, isLoading } =
    useGetAuthQuery(authCode);

  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;

  useEffect(() => {
    if (isSuccess) {
      console.log("success");
      setAccessTokenLS(accessToken);
      setRefreshTokenLS(refreshToken);
      dispatch(updateAccessToken(accessToken));
      dispatch(updateRefreshToken(refreshToken));
      navigate("/profile");
    } else if (isError) {
      console.log(error);
      navigate("/");
    }
  }, [isLoading]);

  return <Loading isSolid />;
};

export default OAuth;
