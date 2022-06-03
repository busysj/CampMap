import "./App.css";

import MainPage from "./components/MainPage";
import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";
import { Route, Routes } from "react-router-dom";
import MapPage from "./components/MapPage";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
