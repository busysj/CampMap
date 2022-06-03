import React, { useState } from "react";
import PopupPage from "../components/MainPage/PopupPage";
import RecommendPage from "../components/MainPage/RecommendPage";
import ReviewPage from "../components/MainPage/ReviewPage";
import SearchPage from "../components/MainPage/SearchPage";
import YoutubePage from "../components/MainPage/YoutubePage";

const MainPage = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div>
      <h1>Main Page</h1>
      {popup ? <PopupPage onClose={setPopup} /> : null}
      <SearchPage />
      <RecommendPage />
      <ReviewPage />
      <YoutubePage />
    </div>
  );
};

export default MainPage;
