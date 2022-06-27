import "./App.css";

import MainPage from "./page/MainPage";
import { Route, Routes } from "react-router-dom";
import MapPage from "./page/MapPage";
import CampPage from "./page/CampPage";
import Community from "./components/CommunityPage/Community";
import CampingNav from "./components/MainPage/CampingNav";
import SearchResultList from "./components/SearchResultList";
import WriteModal from "./components/CommunityPage/WriteModal";
import Layout from "./page/Layout";
// 로그인

import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";

import LogReg from "./components/tools/LogReg";

function App() {
    const user = useSelector(selectUser);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path='/camppage' element={<CampPage/>}></Route>
                    <Route path="/map" element={<MapPage />}>
                        <Route index element={<SearchResultList />}></Route>
                    </Route>
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
