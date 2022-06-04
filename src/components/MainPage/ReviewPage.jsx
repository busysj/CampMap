import React from "react";
import styled from 'styled-components';
import SwiperTool, {
  StyleSwiper, 
  BestReviewContainer,
  BestReviewImg, 
  SwiperSlide
} from "../tools/SwiperTool";


//더미사진
import camp1 from '../dummydata/camp1.jpg';
import camp2 from '../dummydata/camp2.jpg';
import camp3 from '../dummydata/camp3.jpg';

const Review = styled.div`
  display : flex;
  width : 100%; height : 500px;
`;
const ReviewListContainer = styled.div`
  width : 50%; height : 100%;
  margin-left : 10px; margin-right : 10px;
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
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
`;
const ReviewItem = styled.li`
  margin : 5px; padding: 20px;
  text-align: center;
  border: var(--main-color-orange) solid 2px;
  border-radius: 20px;
  &:hover {
    background-color: #ffa07a;
  }
`;
const BestReviewTitle = styled.h2`
  width: 100%; height: 100%;
  color: white;
  position: absolute; top: 10%;
  text-align: center;
`;
const BestReviewContext = styled.p`
  width: 100%; height: 100%;
  position: absolute; top: 25%;
  text-align: center;
  color: white;
`


const ReviewPage = () => {
  const slide = SwiperTool();
  return (
    <Review>
      <BestReviewContainer>
        <StyleSwiper {...slide.swiperParams} ref={slide.setswiper}>
          <SwiperSlide>
            <BestReviewImg src={camp1} />{/* 삽입 이미지 */}
            <BestReviewTitle>{/* 삽입 제목 */}
              응애
            </BestReviewTitle>
            <BestReviewContext>{/* 삽입 내용 */}
              삽사르기
            </BestReviewContext>
          </SwiperSlide>
          <SwiperSlide>
            <BestReviewImg src={camp2} />
          </SwiperSlide>
          <SwiperSlide>
            <BestReviewImg src={camp3} />
          </SwiperSlide>
        </StyleSwiper>
      </BestReviewContainer>
      {/* 베스트 리뷰 컨테이너 끝 */}
      {/* 리뷰 리스트 시작 */}
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
