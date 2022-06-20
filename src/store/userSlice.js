import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";

const user = createSlice({
    name: "user",
    initialState: {
        //user: "",
        user: false || JSON.parse(localStorage.getItem("user")),
        // false || true -> (오른쪽 true가 반환) : user값이 있으면 user값 반환
        // false || false -> (오른쪽 false가 반환) : 둘다 없으면 false 반환
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },

        logout: (state) => {
            auth.signOut();
            alert("로그아웃 완료");
            //localStorage.setItem("user", false);
            console.log(
                `state.user1: ${JSON.parse(localStorage.getItem("user"))}`
            );
            state.user = null; // state.user값도 null로 만들어주고
            console.log(
                // localStorage user값도 null로 만들어줌!
                `state.user2: ${JSON.parse(localStorage.getItem("user"))}`
            );
        },
    },
});

export const { login, logout } = user.actions;
export const selectUser = (state) => state.user.user;
export default user;
