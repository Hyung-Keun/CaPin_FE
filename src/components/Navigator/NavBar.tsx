import styled from "styled-components";

import NavItem from "./NavItem";

import { useAppSelector } from "@hooks/redux";
import { MOBILE_WIDTH, palette } from "@utils/const";

const NavBar = () => {
  const { navList } = useAppSelector(({ init }) => init);

  return (
    <Container>
      <NavListWrap>
        {navList.map((navItem) => {
          const { name, path, iconType } = navItem;
          return (
            <NavItemWrap key={name}>
              <NavItem name={name} path={path} iconType={iconType} />
            </NavItemWrap>
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
  padding: 0.625em 2.25em 2.375em;
  background-color: ${palette.grey050};
  border-radius: 2em 2em 0 0;
  box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.08);
`;

const NavListWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItemWrap = styled.li``;

export default NavBar;
