import "./App.css";

import MainPage from "./page/MainPage";
import NavbarPage from "./page/NavbarPage";
import FooterPage from "./page/FooterPage";
import { Route, Routes } from "react-router-dom";
import Community from "./components/CommunityPage/Community";
<<<<<<< HEAD
import MapPage from './page/MapPage';
import CampingNav from './components/MainPage/CampingNav';
=======
import MapPage from "./page/MapPage";
import SearchResultList from "./components/SearchResultList";
>>>>>>> 0a681677817601eba177b43116623a1b8e3fbf9a

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/map" element={<MapPage />}>
          <Route index element={<SearchResultList />}></Route>
        </Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/youtube" element={<CampingNav />}></Route>
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
