export interface IStudyCard {
  id: number;
  name: string;
  meetArea: string;
  members: string[];
  midPoint: string;
}

export interface ICafeData {
  id: string;
  imgSrc: string;
  name: string;
  addr: string;
  hours: string;
  rate: number;
  reviewCnt: number;
  position: IPosition;
}

export interface IPosition {
  lat: number;
  lng: number;
}
