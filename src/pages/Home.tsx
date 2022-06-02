import styled from "styled-components";

import frameImg from "@assets/images/frame.png";
import backgroundImg from "@assets/images/main-background.jpg";
import { palette } from "@utils/const";

const Home = () => {
  return (
    <Container>
      <div>
        <iframe title="capin" src="./intro" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  padding: calc((100vh - 811px) / 2) 20%;
  text-align: right;

  & > div {
    width: 420px;
    height: 850px;
    background: url(${frameImg});
    background-size: cover;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 19px;
    overflow: hidden;

    & > iframe {
      width: 100%;
      height: 100%;
      border-radius: 46px;
      background-color: ${palette.white};
    }
  }
`;

export default Home;
