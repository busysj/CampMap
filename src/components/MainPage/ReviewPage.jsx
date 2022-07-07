import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SwiperTool, {
  StyleSwiper,
  BestReviewContainer,
  BestReviewImg,
  SwiperSlide,
} from "../tools/SwiperTool";


const list = ["리스트1", "리스트2", "리스트3", "리스트4", "리스트5"];

const ReviewPage = () => {
  const campData = useSelector((state) => state.locationDataSlice.locationData);
  const slide = SwiperTool();

  return (
    <Review>
      <BestReviewContainer>
        <StyleSwiper {...slide.swiperParams} ref={slide.setswiper}>
          {campData.map((camp, index) => (
            <SwiperSlide key={index}>
              <Link to={`/camppage/${camp.contentId}`}>
              <BestReviewImg src={camp.firstImageUrl} />
              {/* 삽입 이미지 */}
              <BestReviewTitle>
                {/* 삽입 제목 */}
                "{camp.lineIntro}"
              </BestReviewTitle>
              <BestReviewContext>
                {/* 삽입 내용 */}
                {camp.intro}
              </BestReviewContext>
              </Link>
            </SwiperSlide>
          ))}
        </StyleSwiper>
      </BestReviewContainer>
      {/* 베스트 리뷰 컨테이너 끝 */}

      {/* 리뷰 리스트 시작 */}
      <ReviewListContainer>
        <ReviewList>
          {list.map((title, i) => (
            <ReviewItem key={i}>{title}</ReviewItem>
          ))}
        </ReviewList>
        <More to={"/community"}>더보기</More>
      </ReviewListContainer>
    </Review>
  );
};

export default ReviewPage;

const Review = styled.div`
  display: flex;
  width: 1500px;
  height: 500px;
  margin: 25px auto;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;

const ReviewListContainer = styled.div`
  width: 40%;
  height: 100%;
  margin: auto;
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
  font-size: 25px;
`;
const BestReviewContext = styled.p`
  width: 80%;
  height: 80%;
  position: absolute; 
  top: 25%; left: 10%;
  text-align: center;
  color: white;
`;
const More = styled(Link)`
  text-decoration-line: none;
  float: right;
  margin-top: 15px;
  padding: 15px 25px;
  color: var(--main-color-orange);
  border-radius: 10px;
  font-size: 15px;

  &:hover {
  }
`;
