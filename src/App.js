import "./App.css";

import MainPage from "./page/MainPage";
import NavbarPage from "./page/NavbarPage";
import FooterPage from "./page/FooterPage";
import { Route, Routes } from "react-router-dom";
import Community from "./components/CommunityPage/Community";
import MapPage from './page/MapPage';

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
