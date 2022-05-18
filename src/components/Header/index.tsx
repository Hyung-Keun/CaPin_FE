import React from "react";

import Basic from "./Basic";
import Simple from "./Simple";

const headerMap = { Basic, Simple };

interface IHeader {
  type: keyof typeof headerMap;
}

const Header = ({ type, children }: React.PropsWithChildren<IHeader>) => {
  const HeaderComponent = headerMap[type];
  return <HeaderComponent>{children}</HeaderComponent>;
};

export default Header;
