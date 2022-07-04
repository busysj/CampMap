import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const YoutubePage = () => {
  return (
    <Container>
      <Title>캠핑 관련 유튜브</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={35}
        navigation={true}
        scrollbar={{
          draggable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Youtube
            src="https://www.youtube.com/embed/Jj58m_yEySw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <Youtube
            src="https://www.youtube.com/embed/FIreJ82UKHM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <Youtube
            src="https://www.youtube.com/embed/ThybOea6rZ0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <Youtube
            src="https://www.youtube.com/embed/KDggryzMYqA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <Youtube
            src="https://www.youtube.com/embed/WQnPlNeKlHw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <Youtube
            src="https://www.youtube.com/embed/LF86dkqjM44"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default YoutubePage;

const Title = styled.h1`
  color: var(--main-color-orange);
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 25px;
  margin: 30px 0 30px 60px;
`;

const Container = styled.div`
  width: 1600px;
  height: 55vh;
  margin: 0 auto;

  .swiper-container {
    width: 95%;
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
  .swiper-button-next.swiper-button-disabled {
    opacity: 1;
  }
`;

const Youtube = styled.iframe`
  width: 93%;
  height: 30vh;
`;
