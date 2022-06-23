import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const Title = styled.h1`
    color: white;
    display: inline-block;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    font-size: 25px;
    margin: 30px 0 20px 30px;
`;

const Container = styled.div`
    max-width: 90%;
    height: 60vh;
    margin: 0 auto;

    .swiper-container {
        width: 90%;
        padding-left: 50px;
        padding-right: 50px;
    }
    

    .swiper-button-next {
       right: 19px;
       color: var(--main-color-orange);
    }
    .swiper-button-prev {
        left: 17px;
        color: var(--main-color-orange);
    }

    .swiper-button-prev.swiper-button-disabled, 
    .swiper-button-next.swiper-button-disabled{
        opacity: 1;
    }

    .swiper-slide {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        span{
            margin: 0; padding: 0;
            opacity: 0;
        }
        img {
            border-radius: 24px 24px 0 0;
            display: block;
            width: 100%;
            height: 30vh;
            object-fit: cover;
        }
        &:hover{
            img{
                filter: brightness(50%);
            }
            span {
                display: inline;
                opacity: 1;
                position: absolute; top: 50%;
                text-align: center;
                background-color: transparent;
                color: white;
                font-size: 20px;
                z-index: 1000;
            }
        }
    }
`;

const CampingBack = styled.div`
    background-color: black;
    width: 100%;
    height: 5vh;
    border-radius: 0 0 24px 24px;
    align-items: center;
`;
const CampingName = styled.h2`
    color: rgb(255, 198, 64);
    text-align: center;
    margin-top: 10px;
    justify-content: center;
    font-size: 20px;
`;

const RecommendPage = ({campData}) => {
    const camp = campData;
    console.log(campData);

    return (
        <Container>
            <Title>주변 캠핑장 추천</Title>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    autoplay={{
                        delay : 100,
                        disableOnInteraction: false,
                    }}
                    speed={6000}
                    navigation={true}
                    scrollbar={{
                        draggable: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    loop={true}
                >
                    {
                       camp.map((camp, index) => (
                        <SwiperSlide key={index}>
                            <span>더 보기</span>
                            <img src={camp.firstImageUrl} alt='Camping'/>
                            <CampingBack>
                                <CampingName>{camp.facltNm}</CampingName>
                            </CampingBack>
                        </SwiperSlide>
                       )) 
                    }
                </Swiper>
        </Container>
    );
};
export default RecommendPage;
