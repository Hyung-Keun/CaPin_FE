import React from "react";
import DaumPostcode from "react-daum-postcode";

import axios from "axios";

import { useGetAddressQuery } from "@redux/api/placeApi";

const PostCode = () => {
  const { data, isError, isSuccess } = useGetAddressQuery("documents");
  interface Idata {
    address: any;
    addressType: string;
    bname: string;
    buildingName: string;
  }
  let handleComplete = (data: Idata) => {
    let fullAddress = data.address;
    let extraAddress = "";
    var config = {
      headers: { Authorization: "KakaoAK 24e90403fc1550929e4a3e67f0a86a14" },
    };
    var url = `https://dapi.kakao.com/v2/local/search/address.json?query=${fullAddress}`;
    axios.get(url, config).then(function (response: any) {
      console.log(JSON.stringify(response.data));
    });

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  if (isSuccess) {
    console.log("success");
    console.log(data);
  } else if (isError) {
    console.log("error");
    console.log(data);
  }
  return (
    <React.Fragment>
      <DaumPostcode onComplete={handleComplete} />
    </React.Fragment>
  );
};

export default PostCode;
