import React from "react";
import { addPickData } from "../../store/locationDataSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { db } from '../../firebase'
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import SwiperTool, {
  StyleSwiper,
  BestReviewContainer,
  BestReviewImg,
  SwiperSlide,
} from "../tools/SwiperTool";

const ReviewPage = () => {
  // 지역기반 데이터 슬라이스로 받아옴
  const campData = useSelector((state) => state.locationDataSlice.locationData);
  const dispatch = useDispatch();
  // 지역기반 데이터 중 캠프 상세내용 없는 캠핑장은 제외시킴
  const campFilter = campData.filter((item) => { return item.intro && item.lineIntro && item.firstImageUrl});
  const [title, setTitle] = useState([]);
  
  const clickPush = (i) => {
    //해당하는 캠핑장 클릭시 id값 추출 및 해당하는 인덱스값 가져옴
    const searchId = campFilter[i];
    dispatch(addPickData(searchId));
  };
  const slide = SwiperTool(); // 스와이퍼 툴 활성화
  const dateFiltered = (item) => (
    //받은 게시글 리스트를 날짜 내림차순으로 정렬함
    item.sort((a,b) => b.timestamp.toDate() - a.timestamp.toDate())
    );

  useEffect(() => {
    const titleList = onSnapshot(
      collection(db, 'blog'),(snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id : doc.id, ...doc.data() });
        });
        console.log(list);
        setTitle(dateFiltered(list));
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      titleList();
    };
  },[]);//파이어 스토어의 블로그 리스트를 비동기로 받아옴

  return (
    <Review>
      <BestReviewContainer>
        <StyleSwiper {...slide.swiperParams} ref={slide.setswiper}>
          {campFilter.map((camp, index) => (
            <SwiperSlide key={index} onClick={() => {clickPush(index)}}>
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
          {title.map((item, i) => {
            if(i<5){
              return (
              <Link to={`/detail/${item.id}`} key={i}>
                <ReviewItem>{item.title}</ReviewItem>
              </Link>
              )
            }
            return null;
          }
          )}
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
  a{
    color: black;
  }
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
  padding: 10px 20px;
  background-color: var(--main-color-orange);
  color: white;
  border-radius: 10px;
  font-size: 15px;
  &:hover {
    background-color: var(--main-color-orange-light);
    color: white;
  }
`;
