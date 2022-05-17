import { ReactElement } from "react";

import icons from "@assets/icons";

type IIconKey = keyof typeof icons;

interface IIcon {
  name: IIconKey;
}

const Icon = ({ name }: IIcon): ReactElement => {
  const SVGIcon = icons[name];
  return <SVGIcon />;
};

export default Icon;
