import { useGetTokensQuery } from "@redux/api/apiSlice";

const OAuth = () => {
  const params: URLSearchParams = new URL(document.location.toString())
    .searchParams;
  const authCode = params.get("code"); //인가코드 받는부분
  console.log(authCode);

  const { data, isSuccess, isError, error } = useGetTokensQuery(authCode);

  let content;
  if (isSuccess) {
    content = console.log("success");
    console.log(data);
  } else if (isError) {
    content = console.log(error.toString());
  }
  return (
    <>
      <h1>소셜로그인 테스트페이지.</h1>
      <h1>프론트-백엔드 만남의장소.</h1>
      <h1>This page has no meaning...</h1>
      {content}
    </>
  );
};

export default OAuth;
