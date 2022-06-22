// 리덕스 툴킷 사용
// 공용으로 모아두는 store
import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";

export default configureStore({
    reducer: {
        user: user.reducer, // 작명 : user.reducer
    },
});
