import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { IIconType } from "@type/asset";

import Icon from "@components/Icon";

import { setActiveBtnName } from "@redux/modules/initSlice";

import { useAppSelector } from "@hooks/redux";
import { palette } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

const NavBar = () => {
  const navigate = useNavigate();
  const { activePageName, navList } = useAppSelector(({ init }) => init);
  const onNavItemClick = (name: string, path: string) => () => {
    setActiveBtnName(name);
    navigate(`/${path}`);
  };

  return (
    <Container>
      <NavListWrap>
        {navList.map((navItem) => {
          const { name, path, iconType } = navItem;
          const type =
            activePageName === name ? iconType.active : iconType.inactive;

          return (
            <li key={name}>
              <button onClick={onNavItemClick(name, path)}>
                <Icon type={type as IIconType} />
              </button>
            </li>
          );
        })}
      </NavListWrap>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: ${convertPixelToRem(20)} ${convertPixelToRem(50)}
    ${convertPixelToRem(50)};
  background-color: ${palette.white};
  border-top: ${convertPixelToRem(0.5)} solid ${palette.grey200};
`;

const NavListWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default NavBar;
