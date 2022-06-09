import React from "react";
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import  {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import button from '../../assets/button.png';

const Container = styled.div`

  width: 90%;
  height: 45vh;
  margin: 0 auto;
  
    .swiper {
    padding: 0;
    
    width: 525px;
    }
    .swiper-slide {
      background-color: ${(props) => props.theme.carouselColor};
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: 0;
      
      
      img{
        display: block;
        width: 70%;
        height: 20vh;
        object-fit: cover;
      }
    }
    .swiper-button-next {
      width: 50px;
      height: 50px;
      background : url(${button});
      background-position:-3px -4px;
      transform: scaleX(-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      opacity: 0.8;
      z-index :10;

        &:after {
          display:none;
        }
    
    }
    .swiper-button-prev {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background : url(${button});
      background-position:-3px -4px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      opacity: 0.8;
      z-index :10;
      &:after {
        display: none;
      }
    }
`;

const Youtube = styled.iframe`
        width: 70%;
        height: 23vh;
`
const Title = styled.h1`
  color:white;
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 30px;
  margin: 30px 0 30px 30px;


`
const YoutubePage = () => {

  return <Container>
   <Title>캠핑안내채널</Title>
      <Swiper
       slidesPerView={4}
       spaceBetween={0}
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
