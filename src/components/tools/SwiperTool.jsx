import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { useState } from 'react';

const StyleSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
`;
const BestReviewContainer = styled.div`
  width : 48%; height : 100%;
  margin-left : 10px; margin-right : 10px;
`;
const BestReviewImg = styled.img`
  width: 100%; height: 100%;
  margin: 0;
  filter: brightness(30%);
`;
const SwiperTool = () => {
  const [swiper, setswiper] = useState(null);

  const swiperParams = {
    navigation : true,
    spaceBetween : 100,
    slidesPerView : 1,
    pagination : {clickable : true, styled : {color : 'var(--main-color-orange)'}},
    autoplay : {delay : 7000, disableOnInteraction : false},
    loop : true
  };
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return{
    swiper, setswiper, swiperParams
  };
};

export {StyleSwiper, BestReviewImg, SwiperSlide, BestReviewContainer}
export default SwiperTool;