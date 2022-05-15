import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetAuthQuery } from "@redux/api/authApi";
import {
  updateAccessToken,
  updateRefreshToken,
} from "@redux/modules/authSlice";

import { useAppDispatch } from "@hooks/auth";
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
      setAccessTokenLS(accessToken);
      setRefreshTokenLS(refreshToken);
      dispatch(updateAccessToken(accessToken));
      dispatch(updateRefreshToken(refreshToken));
      navigate("/");
    } else if (isError) {
      console.log(error);
      navigate("/");
    }
  }, [isLoading]);

  return <div>Loading</div>;
};

export default OAuth;
