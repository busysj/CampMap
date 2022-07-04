import React from "react";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";
import NavbarPage from "./NavbarPage";
import BasedList from "../components/mapApi/BasedList";

const Layout = () => {
    return (
        <div>
            <NavbarPage />
            <BasedList/>
            <Outlet></Outlet>
            <FooterPage />
        </div>
    );
};

export default Layout;
