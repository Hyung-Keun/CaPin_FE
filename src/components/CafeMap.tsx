import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import { IPosition } from "@type/init";

import { setCafeData } from "@redux/modules/mapSlice";

import { useAppDispatch } from "@hooks/redux";

interface ICafeMap {
  center: IPosition;
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

const CafeMap = ({ center, width, height }: ICafeMap) => {
  const dispatch = useAppDispatch();
  const [map, setMap] = useState<kakao.maps.Map>();
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [info, setInfo] = useState<IMarker>();

  useEffect(() => {
    if (!map) return;

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(center.lng, center.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const addrKeywords = result[0].address_name.split(" ");

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(
          `${addrKeywords[addrKeywords.length - 1]} 카페`,
          (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
              const bounds = new kakao.maps.LatLngBounds();
              const markers: IMarker[] = [];
              const cafeList = data.map((d) => {
                /**
                 * address_name: "부산 영도구 봉래동2가 145-6"
                 * category_group_code: "CE7"
                 * category_group_name: "카페"
                 * category_name: "음식점 > 카페"
                 * distance: ""
                 * id: "1341629236"
                 * phone: "070-7347-8069"
                 * place_name: "무명일기"
                 * place_url: "http://place.map.kakao.com/1341629236"
                 * road_address_name: "부산 영도구 봉래나루로 178"
                 * x: "129.0435385821103"
                 * y: "35.096465155803486"
                 */
                const lat = Number(d.y);
                const lng = Number(d.x);

                markers.push({
                  position: {
                    lat,
                    lng,
                  },
                  content: d.place_name,
                });

                bounds.extend(new kakao.maps.LatLng(lat, lng));

                return {
                  ...d,
                  mainphotourl: "",
                  comntcnt: "??",
                  scoresum: "?",
                  scorecnt: "?",
                };
              });

              setMarkers(markers);
              map.setBounds(bounds);

              dispatch(setCafeData(cafeList));
            }
          },
        );
      }
    });
  }, [map]);

  return (
    <React.Fragment>
      <Map
        center={center}
        style={{
          width,
          height,
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker: IMarker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={convertPositionStrToNum(marker.position)}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    </React.Fragment>
  );
};
export default CafeMap;
