import React, { useState } from "react";

import PopupPage from "../components/MainPage/PopupPage";
import RecommendPage from "../components/MainPage/RecommendPage";
import ReviewPage from "../components/MainPage/ReviewPage";
import SearchPage from "../components/MainPage/SearchPage";
import YoutubePage from "../components/MainPage/YoutubePage";

import LocationBaseList from "../components/mapApi/LocationBaseList";

const MainPage = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div>
      {popup ? <PopupPage onClose={setPopup} /> : null}
      <SearchPage />
      <RecommendPage />
      <ReviewPage />
      <YoutubePage />

      <LocationBaseList />
      {/* 컴포넌트 실행용도로 선언 */}
    </div>
  );
};

export default MainPage;
