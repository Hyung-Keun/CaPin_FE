import { getAccessTokenLS, getTokenPayload } from "@utils/auth";
import { TOKEN_SUBJECT } from "@utils/const";

const Auth = (children: JSX.Element) => {
  const tokenPayload = getTokenPayload(getAccessTokenLS());
  if (tokenPayload) {
    const { sub } = JSON.parse(tokenPayload);

    return <>{sub === TOKEN_SUBJECT && children}</>;
  }
};

export default Auth;
