import React, { useEffect, useMemo, useState } from "react";
import {
  Map,
  MapMarker,
  useMap,
  ZoomControl,
  MapTypeControl,
} from "react-kakao-maps-sdk";

import { Grid } from "@elements";

interface IKakaoMapState {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: string;
  isLoading: boolean;
}

interface IMarker {
  position: IPosition;
  content: string;
}

interface IPosition {
  lat: string;
  lng: string;
}

const convertPositionStrToNum = (position: IPosition) => {
  return { lat: Number(position.lat), lng: Number(position.lng) };
};

const KakaoMap = () => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const [info, setInfo] = useState<IMarker>();
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [activeMapType, setActiveMapType] = useState("roadmap");
  const [state, setState] = useState<IKakaoMapState>({
    center: {
      lat: 37.5559,
      lng: 126.9723,
    },
    errMsg: "",
    isLoading: true,
  });

  const setMapType = (maptype: "roadmap" | "skyview") => {
    if (!map) return;
    if (maptype === "roadmap") {
      map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
      setActiveMapType("roadmap");
    } else {
      map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      setActiveMapType("skyview");
    }
  };
  const zoomIn = () => {
    if (!map) return;
    map.setLevel(map.getLevel() - 1);
  };
  const zoomOut = () => {
    if (!map) return;
    map.setLevel(map.getLevel() + 1);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("카페", (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        const markers: IMarker[] = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setState((prev: IKakaoMapState) => ({
  //           ...prev,
  //           center: {
  //             lat: position.coords.latitude, // 위도
  //             lng: position.coords.longitude, // 경도
  //           },
  //           isLoading: false,
  //         }));
  //       },
  //       (err) => {
  //         setState((prev: IKakaoMapState) => ({
  //           ...prev,
  //           errMsg: err.message,
  //           isLoading: false,
  //         }));
  //       },
  //     );
  //   } else {
  //     // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  //     setState((prev: IKakaoMapState) => ({
  //       ...prev,
  //       errMsg: "geolocation을 사용할수 없어요..",
  //       isLoading: false,
  //     }));
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Grid>
        <Map // 지도를 표시할 Container
          center={state.center}
          style={{
            // 지도의 크기
            width: "100%",
            height: "812px",
          }}
          level={3} // 지도의 확대 레벨
          onCreate={setMap}
        >
          {!state.isLoading && (
            <MapMarker position={state.center}>
              <div style={{ padding: "5px", color: "#000" }}>
                {state.errMsg ? state.errMsg : "My current location"}
              </div>
            </MapMarker>
          )}
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

          <label>
            지도
            <input
              type="checkbox"
              value="roadmap"
              checked={activeMapType === "roadmap"}
              onChange={() => setMapType("roadmap")}
            />
          </label>
          <label>
            스카이뷰
            <input
              type="checkbox"
              value="skyview"
              checked={activeMapType === "skyview"}
              onChange={() => setMapType("skyview")}
            />
          </label>
          <button onClick={zoomIn}>확대</button>
          <button onClick={zoomOut}>축소</button>
        </Map>
      </Grid>
    </React.Fragment>
  );
};
export default KakaoMap;
