import { useSelector, useDispatch } from "react-redux";
import { addPickData } from "../../store/locationDataSlice";
import { Link } from "react-router-dom";
import defaultImage from '../../assets/default-Image.png';

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const Title = styled.h1`
  color: var(--main-color-orange);
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 25px;
  margin: 30px 0 20px 10px;
`;

const Container = styled.div`
  width: 1500px;
  height: 55vh;
  margin: 0 auto;
  margin-bottom: 30px;
  border-bottom: 1px solid lightgray;

  .swiper-container {
    width: 160vh;
    padding-left: 50px;
    padding-right: 50px;
    margin: 0;
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
  .swiper-button-next.swiper-button-disabled {
    opacity: 1;
  }

  .swiper-slide {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    a {
      margin: auto; padding: 0;
      display: block;
      width: 100%; height: 100%;
      text-align: center;
    }
    span {
      margin: 0;
      padding: 0;
      opacity: 0;

    }
    img {
      margin: 0;
      border-radius: 24px 24px 0 0;
      display: block;
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    &:hover {
      img {
        filter: brightness(50%);
      }
      span {
        opacity: 1;
        position: absolute;
        top: 50%;
        left: 40%;
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
  justify-content: center;
`;
const CampingName = styled.h2`
  color: rgb(255, 198, 64);
  font-size: 20px;
`;

const RecommendPage = () => {
  //?????? ?????? ????????? ?????????????????? ?????????
  const campStoreData = useSelector((state) => state.locationDataSlice.locationData);
  const dispatch = useDispatch();
  const clickPush = (i) => {
    //???????????? ????????? ????????? id??? ?????? ??? ???????????? ???????????? ?????????
    const searchId = campStoreData[i];
    dispatch(addPickData(searchId));
  };

  return (
    <Container>
      <Title>??? ?????? ?????????</Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        autoplay={{
          delay: 100,
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
        {campStoreData.map((camp, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                clickPush(index);
              }}
            >
              <Link to={`/camppage/${camp.contentId}`}>
                <span>??? ??????</span>
                <img id={camp.contentId} src={camp.firstImageUrl ? camp.firstImageUrl : defaultImage} alt="Camping" />
                <CampingBack>
                  <CampingName>{camp.facltNm}</CampingName>
                </CampingBack>
              </Link>
            </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default RecommendPage;
