import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

//더미사진
import camp1 from "../dummydata/camp1.jpg";
import camp2 from "../dummydata/camp2.jpg";
import camp3 from "../dummydata/camp3.jpg";

const Review = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
`;
const BestReviewContainer = styled.div`
    background: #ffa07a;
    width: 48%;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
`;
const ReviewListContainer = styled.div`
    background: #ffa07a;
    width: 50%;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
`;

/*const VerticalLine = styled.div` 세로선은 일단 보류
  border-left : 1px solid #ffa07a;
  height : 100%; width: 1px;
  left : 50%;
  margin : 0px; padding : 0px;
  position : absolute;
`;*/
const ReviewList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;
const ReviewItem = styled.li`
    margin: 5px;
    padding: 30px;
    text-align: center;
    background-color: #942a00;
    &:hover {
        background-color: #ffa07a;
    }
`;
const StyleSwiper = styled(Swiper)`
    position: relative;
    width: 100%;
    height: 100%;
    color: #0e5f12;
`;

const ReviewPage = () => {
    const [swiper, setswiper] = useState(null);

    const swiperParams = {
        navigation: true,
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: { clickable: true },
        autoplay: { delay: 3000 },
        loop: true,
    };

    SwiperCore.use([Navigation, Pagination, Autoplay]);

    return (
        <Review>
            <BestReviewContainer>
                <StyleSwiper {...swiperParams} ref={setswiper}>
                    <SwiperSlide>
                        <div>
                            <img src={camp1}></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={camp2}></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={camp3}></img>
                        </div>
                    </SwiperSlide>
                </StyleSwiper>
            </BestReviewContainer>
            <ReviewListContainer>
                <ReviewList>
                    <ReviewItem>응앵애응애</ReviewItem>
                    <ReviewItem>응앵애응애</ReviewItem>
                    <ReviewItem>응앵애응애</ReviewItem>
                    <ReviewItem>응앵애응애</ReviewItem>
                    <ReviewItem>응앵애응애</ReviewItem>
                </ReviewList>
                <p>더보기</p>
            </ReviewListContainer>
        </Review>
    );
};

export default ReviewPage;
