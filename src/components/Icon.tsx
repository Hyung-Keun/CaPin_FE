import { IIconType } from "@type/asset";

import icons from "@assets/icons";

interface IIcon {
  type: IIconType;
}

const Icon = ({ type }: IIcon) => {
  const SVGIcon = icons[type];
  return <SVGIcon />;
};

export default Icon;
