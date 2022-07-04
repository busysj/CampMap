// 리덕스 툴킷 사용
// 공용으로 모아두는 store
import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import locationDataSlice from "./store/locationDataSlice";
import basedDataSlice from "./store/basedDataSlice";

export default configureStore({
    reducer: {
        user: user.reducer, // 작명 : user.reducer
        //지역 기반 데이터 불러오기 및 받아서 흩뿌리기
        locationDataSlice : locationDataSlice.reducer,
        basedDataSlice : basedDataSlice.reducer,
    },
});
