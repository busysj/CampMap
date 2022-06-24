import React from "react";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";
import NavbarPage from "./NavbarPage";

const Layout = () => {
    return (
        <div>
            <NavbarPage />
            <Outlet></Outlet>
            <FooterPage />
        </div>
    );
};

export default Layout;
