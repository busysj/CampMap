import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Camping01 from "../../assets/Camping01.jpg";
import Camping02 from "../../assets/Camping02.jpg";
import Camping03 from "../../assets/Camping03.jpg";
import Camping04 from "../../assets/Camping04.jpg";
import Camping05 from "../../assets/Camping05.jpg";
import Camping06 from "../../assets/Camping06.jpg";
import button from "../../assets/button.png";

const Container = styled.div`
<<<<<<< HEAD
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    .swiper-button-next {
        width: 50px;
        height: 50px;
        background: url(${button});
        background-position: -3px -4px;
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
        z-index: 10;

        &:after {
            display: none;
        }
    }
    .swiper-button-prev {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: url(${button});
        background-position: -3px -4px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        opacity: 0.8;
        z-index: 10;
        &:after {
            display: none;
        }
    }
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${(props) => props.theme.carouselColor};
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        img {
            border-radius: 24px 24px 0 0;
            display: block;
            width: 100%;
            height: 40vh;
            object-fit: cover;
        }
    }
`;
const Title = styled.h1``;
const CampingBack = styled.div`
    background: black;
    width: 100%;
    border-radius: 0 0 24px 24px;
`;
const CampingName = styled.h2`
    color: rgb(255, 198, 64);
    text-align: center;
`;

const RecommendPage = () => {
    return (
        <Container>
            <Title>캠핑장추천</Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
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
                    </CampingBack>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={Camping02} alt="CapmingName" />
                    <CampingBack>
                        <CampingName> 달콤한캠핑장</CampingName>
                    </CampingBack>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={Camping03} alt="CapmingName" />
                    <CampingBack>
                        <CampingName> 담양대나무골야영장</CampingName>
                    </CampingBack>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={Camping04} alt="CapmingName" />
                    <CampingBack>
                        <CampingName> 당진해양캠핑공원</CampingName>
                    </CampingBack>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={Camping05} alt="CapmingName" />
                    <CampingBack>
                        <CampingName> 마음이머무는곳</CampingName>
                    </CampingBack>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <img src={Camping06} alt="CapmingName" />
                    <CampingBack>
                        <CampingName> 마이산풍혈냉천캠핑장</CampingName>
                    </CampingBack>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default RecommendPage;
