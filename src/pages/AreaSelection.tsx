import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

import Header from "@components/Header";
import Icon from "@components/Icon";

import { setArea } from "@redux/modules/areaSlice";

import { Text, BlankBox } from "@elements";
import { useAppDispatch } from "@hooks/redux";

interface IAreaSelection {
  isSingular?: boolean;
  multiSelection?: boolean;
}

const AreaSelection = ({
  isSingular = true,
  multiSelection = true,
}: IAreaSelection) => {
  const regions = [
    { id: 1, region: "서초/신사/방배" },
    { id: 2, region: "강남/역삼/삼성/논현" },
    { id: 3, region: "잠실새내/신천" },
    { id: 4, region: "잠실/방이" },
    { id: 5, region: "구로/금천/오류/신도림" },
    { id: 6, region: "영등포/여의도" },
    { id: 7, region: "천호/길동/둔촌" },
    { id: 8, region: "강서/화곡/까치산/목동" },
    { id: 9, region: "종로/대학로" },
    { id: 10, region: "서울대/신림/사당/동작" },
    { id: 11, region: "성신여대/성북" },
    { id: 12, region: "용산/중구/명동/이태원" },
    { id: 13, region: "강북/수유/미아" },
    { id: 14, region: "노원/도봉/창동" },
    { id: 15, region: "건대/광진/구의" },
    { id: 16, region: "왕십리/성수/금호" },
    { id: 17, region: "중랑/상봉/면목/태릉" },
    { id: 18, region: "동대문/장안/청량리/답십리" },
    { id: 19, region: "은평/연신내/불광" },
    { id: 20, region: "신촌/홍대/서대문/마포" },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const checkHandler = ({ target }: any) => {
    if (isSingular) {
      setSelectedRegion(target.value);
      dispatch(setArea(target.value));
    } else {
      setIsChecked(!isChecked);
      checkedItemHandler(target.parentNode, target.value, target.checked);
    }
  };

  const checkedItemHandler = (box: any, id: any, isChecked: any) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#F9E9E7";
      box.style.color = "#EB5527";
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#fff";
      box.style.color = "#313131";
    }

    return checkedItems;
  };
  // if(!searchParams.get('isSingular'))

  const Singular = Boolean(searchParams.get("isSingular"));
  console.log(!Singular); // false 고대로
  console.log(Singular); //true

  if (!Singular === false) {
    return (
      <React.Fragment>
        <Header type="Simple">지역설정</Header>
        <Text inlineStyles="padding:20px 326px 12px 20px;">서울</Text>
        <BlankBox inlineStyles="padding:20px;display: grid; grid-template-columns: 1fr 1fr;">
          {regions.map((item) => (
            <Label
              key={item.id}
              inlineStyles="
        display: flex;
        justify-content: space-between;
        padding: 12px 14px"
              isChecked={selectedRegion === item.region}
            >
              <input
                type="checkbox"
                value={item.region}
                onChange={checkHandler}
                style={{ display: "none" }}
              />
              <div>{item.region}</div>
              <Icon type="ArrowRightGrey" />
            </Label>
          ))}
        </BlankBox>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header type="Simple">지역설정</Header>
      <Text inlineStyles="padding:20px 326px 12px 20px;">서울</Text>
      <BlankBox inlineStyles="padding:20px;display: grid; grid-template-columns: 1fr 1fr;">
        {regions.map((item) => (
          <Label
            key={item.id}
            inlineStyles="
        display: flex;
        justify-content: space-between;
        padding: 12px 14px"
            isChecked={isSingular && selectedRegion === item.region}
          >
            <input
              type="checkbox"
              value={item.region}
              onChange={checkHandler}
              style={{ display: "none" }}
            />
            <div>{item.region}</div>
            <Icon type="ArrowRightGrey" />
          </Label>
        ))}
      </BlankBox>
    </React.Fragment>
  );
};

const Label = styled.label<{ inlineStyles?: string; isChecked: boolean }>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  background-color: #fafafa;
  color: #313131;
  ${(props) => props.isChecked && "background-color: #f9e9e7; color: #eb5527;"};
`;

export default AreaSelection;
