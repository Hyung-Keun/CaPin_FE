import { useEffect, useState } from "react";

const useCafeList = (lat: number, lng: number) => {
  const [cafeList, setCafeList] = useState<any[]>();

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const addrKeywords = result[0].address_name.split(" ");

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(
          `${addrKeywords[addrKeywords.length - 1]} 카페`,
          (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
              const cafeList: any[] = [];

              data.map((d) => {
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
                const { id, place_name, place_url, road_address_name, x, y } =
                  d;
                const lat = Number(y);
                const lng = Number(x);

                const newCafeData = {
                  id,
                  place_name,
                  road_address_name,
                  // mainphotourl,
                  // comntcnt,
                  // scoresum,
                  // scorecnt,
                };
                cafeList.push(newCafeData);
              });

              setCafeList(cafeList);
            }
          },
        );
      }
    });
  }, []);

  return { cafeList, setCafeList };
};

export default useCafeList;
