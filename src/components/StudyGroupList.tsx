import styled from "styled-components";

import { palette } from "@utils/const";

const DefaultStudyGroupListLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 16px;
  width: 100%;
  min-height: 100vh;
  padding-left: 32px;
  padding-right: 33px;
  padding-top: 20px;
  background: ${palette.grey050};
`;

export { DefaultStudyGroupListLayout };
