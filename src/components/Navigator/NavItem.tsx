import { Link } from "react-router-dom";

import styled from "styled-components";

import { INavItem } from "@type/init";

import Icon from "@components/Icon";

const NavItem = ({ name, path, iconType }: INavItem) => {
  return (
    <StyledLink to={path}>
      <Icon type={iconType} />
      {name}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  width: 4.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.625em;
`;

export default NavItem;
