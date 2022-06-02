import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

import styled from "styled-components";

import { CafeInfo } from "@type/cafe";
import { IPosition } from "@type/init";

import Icon from "./Icon";

import { palette, typography } from "@utils/const";
import { convertPixelToRem } from "@utils/func";

interface ICafeMap {
  center: {
    locationX: string | number;
    locationY: string | number;
  };
  cafeList: CafeInfo[];
  width: string;
  height: string;
}

interface IMarker {
  position: IPosition;
  content: string;
}

const convertPositionStrToNum = (position: IPosition) => {
  return { lat: Number(position.lat), lng: Number(position.lng) };
};

const CafeMap = ({ center, cafeList, width, height }: ICafeMap) => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [info, setInfo] = useState<IMarker>();

  useEffect(() => {
    if (!map || !cafeList) return;

    const bounds = new kakao.maps.LatLngBounds();
    const markers: IMarker[] = [];

    cafeList.map((item) => {
      const lat = Number(item.y);
      const lng = Number(item.x);

      markers.push({
        position: {
          lat,
          lng,
        },
        content: item.place_name,
      });

      bounds.extend(new kakao.maps.LatLng(lat, lng));
    });

    setMarkers(markers);
    map.setBounds(bounds);
  }, [map, cafeList]);

  return (
    <React.Fragment>
      <StyleMap
        center={{ x: Number(center.locationX), y: Number(center.locationY) }}
        style={{
          width,
          height,
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker: IMarker) => {
          const pos = convertPositionStrToNum(marker.position);
          return (
            <>
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={pos}
                onClick={() => setInfo(marker)}
              ></MapMarker>
              {info?.content === marker.content && (
                <CustomOverlayMap position={pos}>
                  <CafeNameBubble>
                    {marker.content}
                    <button onClick={() => setInfo(undefined)}>
                      <Icon type="CircleX" />
                    </button>
                  </CafeNameBubble>
                </CustomOverlayMap>
              )}
            </>
          );
        })}
      </StyleMap>
    </React.Fragment>
  );
};

const StyleMap = styled(Map)`
  & > div:nth-child(2) {
    display: none;
  }
`;

const CafeNameBubble = styled.div`
  ${typography.b14r}
  padding: ${convertPixelToRem(8)} ${convertPixelToRem(10)};
  background-color: ${palette.white};
  border-radius: ${convertPixelToRem(10)};
  transform: translateY(-180%);
  position: relative;
  & > button {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(45%, -25%);
  }
`;

export default CafeMap;
