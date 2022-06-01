import React from "react";

import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const useSlide = (indexRef: React.MutableRefObject<number>) => {
  const Slider = ({ items, itemWidth }: any) => (
    <StyleSwiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      modules={[Pagination]}
      onSlideChange={(swiper) => {
        indexRef.current = swiper.activeIndex;
      }}
      itemWidth={itemWidth}
    >
      {items.map((item: any, i: number) => (
        <SwiperSlide key={i}>{item}</SwiperSlide>
      ))}
    </StyleSwiper>
  );

  return Slider;
};

const StyleSwiper = styled(Swiper)<{ itemWidth: string }>`
  .swiper-slide {
    width: ${({ itemWidth }) => itemWidth};
  }
`;

export default useSlide;
