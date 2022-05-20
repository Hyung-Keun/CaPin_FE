import { IIconType } from "./asset";

export interface INavItem {
  name: string;
  path: string;
  iconType: IIconType;
}

export interface IInitState {
  navList: INavItem[];
}
