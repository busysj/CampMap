import React from "react";
import styled from "styled-components";
import SwiperTool, {
    StyleSwiper,
    BestReviewContainer,
    BestReviewImg,
    SwiperSlide,
} from "../tools/SwiperTool";

const camp = [
    //이미지 api로 받아올것
    require("../dummydata/camp1.jpg"),
    require("../dummydata/camp2.jpg"),
    require("../dummydata/camp3.jpg"),
];

const list = ["리스트1", "리스트2", "리스트3", "리스트4", "리스트5"];

const Review = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
`;

const ReviewListContainer = styled.div`
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
    position: relative;
`;
const ReviewItem = styled.li`
    padding: 30px;
    text-align: center;
    border-bottom: var(--main-color-orange) solid 2px;
    &:hover {
        background-color: #ffa07a;
    }
`;
const BestReviewTitle = styled.h2`
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    top: 10%;
    text-align: center;
`;
const BestReviewContext = styled.p`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 25%;
    text-align: center;
    color: white;
`;
const More = styled.a`
    text-decoration-line: none;
    float: right;
    margin-top: 50px;
    &:hover {
        color: var(--main-color-green);
    }
`;

const ReviewPage = () => {
    const slide = SwiperTool();

    function slideArray() {
        let array = [];
        for (let i = 1; i <= camp.length; i++) {
            array.push(
                <SwiperSlide>
                    <BestReviewImg src={camp[0]} />
                    {/* 삽입 이미지 */}
                    <BestReviewTitle>
                        {/* 삽입 제목 */}
                        제목 {i}
                    </BestReviewTitle>
                    <BestReviewContext>
                        {/* 삽입 내용 */}
                        {i}번째 게시물
                    </BestReviewContext>
                </SwiperSlide>
            );
        }
        return array;
    }
    function listArray() {
        let array = [];
        for (let i = 0; i < list.length; i++) {
            array.push(<ReviewItem>{list[i]}</ReviewItem>);
        }
        return array;
    }

    return (
        <Review>
            <BestReviewContainer>
                <StyleSwiper {...slide.swiperParams} ref={slide.setswiper}>
                    {slideArray()}
                </StyleSwiper>
            </BestReviewContainer>
            {/* 베스트 리뷰 컨테이너 끝 */}

            {/* 리뷰 리스트 시작 */}
            <ReviewListContainer>
                <ReviewList>{listArray()}</ReviewList>
                <More>더보기</More>
            </ReviewListContainer>
        </Review>
    );
};

export default ReviewPage;
