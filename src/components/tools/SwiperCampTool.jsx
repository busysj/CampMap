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
  .swiper-pagination-bullet{
    background-color: var(--main-color-orange);
  }
  .swiper-button-next{
    color: var(--main-color-orange);
    opacity: 0.5;
    &:hover{
      opacity: 1;
    }
  }
  .swiper-button-prev{
    color: var(--main-color-orange);
    opacity: 0.5;
    &:hover{
      opacity: 1;
    }
  }
`;
const CampImg = styled.img`
  width: 100%; height: 100%;
  margin: 0;
  border-radius: 20px;
`;
const SwiperTool = () => {
  const [swiper, setswiper] = useState(null);

  const swiperParams = {
    navigation : true,
    spaceBetween : 100,
    slidesPerView : 1,
    pagination : {clickable : true},
    autoplay : {delay : 7000, disableOnInteraction : false},
    loop : true
  };
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return{
    swiper, setswiper, swiperParams
  };
};

export {StyleSwiper, CampImg, SwiperSlide}
export default SwiperTool;