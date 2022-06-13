import React from "react";
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import  {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

const Title = styled.h1`
  color:white;
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 25px;
  margin: 30px 0 30px 30px;
`

const Container = styled.div`
  width: 90%;
  height: 55vh;
  margin: 0 auto;
  
   .swiper-container {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
   }

    .swiper-slide {
      
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-button-next {
     right: 19px;
     color: var(--main-color-orange);
    }

    .swiper-button-prev {
     left: 18px;
     color: var(--main-color-orange);
    }

    .swiper-button-prev.swiper-button-disabled, 
    .swiper-button-next.swiper-button-disabled{
        opacity: 1;
    }
`;


const Youtube = styled.iframe`
        width: 100%;
        height: 30vh;
`

const YoutubePage = () => {

  return <Container>
   <Title>캠핑안내채널</Title>
      <Swiper
       slidesPerView={3}
       spaceBetween={35}
       navigation={true}
       scrollbar={{
          draggable: true,
        }}
        modules={[ Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Youtube  src="https://www.youtube.com/embed/vofsvw-pYno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>            
        </SwiperSlide>
        <SwiperSlide>
          
          <Youtube  src="https://www.youtube.com/embed/vofsvw-pYno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>            
        </SwiperSlide>
        <SwiperSlide>
    
          <Youtube  src="https://www.youtube.com/embed/vofsvw-pYno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>            
        </SwiperSlide>
        <SwiperSlide>
       
          <Youtube  src="https://www.youtube.com/embed/vofsvw-pYno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>            
        </SwiperSlide>
        <SwiperSlide>
        
          <Youtube  src="https://www.youtube.com/embed/vofsvw-pYno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>            
        </SwiperSlide>
        <SwiperSlide>
       
          <Youtube  src="https://www.youtube.com/embed/vofsvw-pYno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>            
        </SwiperSlide>
      </Swiper>
    </Container>     
};

export default YoutubePage;
