import "./App.css";

import MainPage from "./page/MainPage";
import NavbarPage from "./page/NavbarPage";
import FooterPage from "./page/FooterPage";
import { Route, Routes } from "react-router-dom";
import MapPage from "./page/MapPage";
import CampPage from "./page/CampPage";
import Community from "./components/CommunityPage/Community";
import CampingNav from "./components/MainPage/CampingNav";
import SearchResultList from "./components/SearchResultList";
import WriteModal from "./components/CommunityPage/WriteModal";
import Layout from "./page/Layout";
// 로그인
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LogReg from "./components/LogReg";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    //사용자가 인증되었는지 페이지 로드 시 확인
    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                // 사용자가 로그인되어 있으면 사용자의 세부 정보를 redux에 보내고
                // 현재 사용자를 상태에 저장합니다.
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/camppage" element={<CampPage />}></Route>
                    <Route path="/map" element={<MapPage />}>
                        <Route index element={<SearchResultList />}></Route>
                    </Route>
                    <Route path="/camppage" element={<CampPage />}></Route>
                    <Route path="/community" element={<Community />}></Route>

                    {!user ? ( // user
                        <Route path="/" element={<LogReg />}></Route>
                    ) : (
                        <Route path="/write" element={<WriteModal />}></Route>
                    )}

                    <Route path="/youtube" element={<CampingNav />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
