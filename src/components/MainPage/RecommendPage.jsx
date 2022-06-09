import React from "react";
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Camping01 from '../../assets/Camping01.jpg';
import Camping02 from '../../assets/Camping02.jpg';
import Camping03 from '../../assets/Camping03.jpg';
import Camping04 from '../../assets/Camping04.jpg';
import Camping05 from '../../assets/Camping05.jpg';
import Camping06 from '../../assets/Camping06.jpg';
import button from '../../assets/button.png';

const Container = styled.div`

  width: 90%;
  height: 45vh;
  margin: 0 auto;

  .swiper-container{
    width: 80%;
    padding-left: 50px;
    padding-right: 50px;
}
.ddddd {
  position: relative;
}

  .swiper-button-next {
    width: 50px;
    height: 50px;
    background : url(${button});
    transform: scaleX(-1);
    border-radius: 50%;
    position: absolute;
    left: 90%;
    right: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index : 10;
    
    &:after {
        display:none;
      }
    
  }
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background : url(${button});
    position: absolute;
    left: auto;
    right: 90%;
    
    cursor: pointer;
    opacity: 0.8;
    z-index :10;
    &:after {
      display: none;
    }
   
  }

  .swiper-slide {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
    img{
      border-radius:24px 24px 0 0;
      display: block;
      width: 100%;
      height: 20vh;
      object-fit: cover;
    }
  }

`;
const Title = styled.h1`
  color:white;
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 30px;
  margin: 30px 0 20px 30px;
`
const CampingBack = styled.div`
   background-color: black;
   width: 100%; 
   height: 6vh;
   border-radius: 0 0 24px 24px;
   align-items: center;
`
const CampingName = styled.h2`
  color:rgb(255, 198, 64);
  text-align:center;
  margin-top: 20px;
  justify-content: center;
  font-size: 20px;
`


const RecommendPage = () => {
  return (
  
    <Container>
     <Title >캠핑장 추천</Title>
     <div className='ddddd'>
      <Swiper
       slidesPerView={3}
       spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
       
        navigation={true}
        scrollbar={{
          draggable: true,
        }}
       
        
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Camping01} alt="CapmingName" />
          <CampingBack>
            <CampingName> 달천공원오토캠핑장</CampingName>
          </ CampingBack>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Camping02} alt="CapmingName" />
          <CampingBack>
            <CampingName> 달콤한캠핑장</CampingName>
          </ CampingBack>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Camping03} alt="CapmingName" />
          <CampingBack>
            <CampingName> 담양대나무골야영장</CampingName>
          </ CampingBack>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Camping04} alt="CapmingName" />
          <CampingBack>
            <CampingName> 당진해양캠핑공원</CampingName>
          </ CampingBack>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Camping05} alt="CapmingName" />
          <CampingBack>
            <CampingName> 마음이머무는곳</CampingName>
          </ CampingBack>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Camping06} alt="CapmingName" />
          <CampingBack>
            <CampingName> 마이산풍혈냉천캠핑장</CampingName>
          </ CampingBack>
        </SwiperSlide>
      
      </Swiper>
      </div>
    </Container>
  );
};

export default RecommendPage;



