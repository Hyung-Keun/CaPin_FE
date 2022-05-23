import React, { useState } from "react";

import { Text, Input } from "@elements";

const AreaSelection = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const areas = [
    { title: "서초/신사/방배" },
    { title: "강남/역삼/삼성/논현" },
    { title: "강남/역삼/삼성/논현" },
    { title: "잠실새내/신천" },
    { title: "잠실/방이" },
    { title: "구로/금천/오류/신도림" },
    { title: "영등포/여의도" },
    { title: "천호/길동/둔촌" },
    { title: "강서/화곡/까치산/목동" },
    { title: "종로/대학로" },
    { title: "서울대/신림/사당/동작" },
    { title: "성신여대/성북" },
    { title: "용산/중구/명동/이태원" },
    { title: "강북/수유/미아" },
    { title: "노원/도봉/창동" },
    { title: "건대/광진/구의" },
    { title: "왕십리/성수/금호" },
    { title: "중랑/상봉/면목/태릉" },
    { title: "동대문/장안/청량리/답십리" },
    { title: "은평/연신내/불광" },
    { title: "신촌/홍대/서대문/마포" },
  ];

  return (
    <React.Fragment>
      <Text
        inlineStyles="position: absolute;
width: 67px;
height: 27px;
left: 154px;
top: 53px;"
      >
        지역선택
      </Text>
      <Text
        inlineStyles="
          position: absolute;
          width: 31px;
          height: 25px;
          left: 20px;
          top: 104px;"
      >
        서울
      </Text>
      <label>
        <Input
          inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 141px;"
        >
          서초/신사/방배
        </Input>
      </label>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 141px;"
      >
        강남/역삼/삼성/논현
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 185px;"
      >
        잠실새내/신천
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 185px;"
      >
        잠실/방이
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 229px;"
      >
        구로/금천/오류/신도림
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 229px;
"
      >
        영등포/여의도
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 273px;"
      >
        천호/길동/둔촌
      </Text>
      <Text
        inlineStyles="
      position: absolute;
      width: 168px;
      height: 44px;
      left: 188px;
      top: 273px;
      "
      >
        강서/화곡/까치산/목동
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 317px;"
      >
        종로/대학로
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 317px;"
      >
        서울대/신림/사당/동작
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 361px;"
      >
        성신여대/성북
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 361px;"
      >
        용산/중구/명동/이태원
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 405px;"
      >
        강북/수유/미아
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 405px;"
      >
        노원/도봉/창동
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 449px;
"
      >
        건대/광진/구의
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 449px;"
      >
        왕십리/성수/금호
      </Text>
      <Text
        inlineStyles="position: absolute;
        width: 168px;
        height: 44px;
        left: 20px;
        top: 493px;
        "
      >
        중랑/상봉/면목/태릉
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 493px;"
      >
        동대문/장안/청량리/답십리
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 20px;
top: 537px;"
      >
        은평/연신내/불광
      </Text>
      <Text
        inlineStyles="position: absolute;
width: 168px;
height: 44px;
left: 188px;
top: 537px;"
      >
        신촌/홍대/서대문/마포
      </Text>
    </React.Fragment>
  );
};
export default AreaSelection;
