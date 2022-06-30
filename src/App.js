import "./App.css";

import MainPage from "./page/MainPage";
import { Route, Routes, Navigate } from "react-router-dom";
import MapPage from "./page/MapPage";
import CampPage from "./page/CampPage";
import Community from "./components/CommunityPage/Community";
import CampingNav from "./components/MainPage/CampingNav";
import SearchResultList from "./components/SearchResultList";

import Layout from "./page/Layout";
import DetailPage from "./page/DetailPage";
import AddEditBlog from "./page/AddEditBlog";
import NotFound from "./page/NotFound";
import { ToastContainer } from "react-toastify";

// 로그인

import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log(`gggg userㄱㅏ ㅇㅓㅂㅅㅇㅏ?`, user);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />}>
            <Route index element={<SearchResultList />} />
          </Route>
          <Route path="/camppage/:id" element={<CampPage />} />
          <Route path="/community" element={<Community user={user} />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          /
          <Route
            path="/create"
            element={
              user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />
            }
          />
          {/* 😥user?.uid => user && user.uid */}
          <Route
            path="/update/:id"
            element={
              user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />
            }
          />
          {/* 로그인창 팝업이라 그런지 실행이 안됨..
                    {!user ? (
                        <Route path="/" element={<LogReg />}></Route>
                    ) : (
                        <Route path="/create" element={<AddEditBlog user={user} />}></Route>
                    )}*/}
          <Route path="/youtube" element={<CampingNav />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
