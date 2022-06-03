import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Nav = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  top: 0;
  font-size: 1.2rem;
  position: sticky;
  box-shadow: 0 1px 8px gray;
`;

const NavLogo = styled.div`
  display: flex;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 600;
  cursor: pointer;

  img {
    width: 80px;
    height: 60px;
    margin-left: 80px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 80px 0 0;
`;

const NavItem = styled.li`
  align-items: center;
`;

const NavButton = styled.button`
  background: var(--main-color-orange);
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 12px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  border: none;
  font-weight: 500;

  &:hover {
    background: var(--main-color-orange-light);
  }
`;

const NavLink = styled(Link)`
  display: flex;
  padding: 0 15px;
  font-size: 15px;
  align-items: center;
  cursor: pointer;
  height: 80px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: var(--main-color-orange);
    border-bottom: 2px solid var(--main-color-orange);
  }
`;

const NavbarPage = () => {
  return (
    <Nav>
      <NavLogo to="/">
        <img src={Logo} alt="logo" />
        Camp
      </NavLogo>

      <NavMenu>
        <NavItem>
          <NavLink to="/map">지도</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">커뮤니티</NavLink>
        </NavItem>
        <NavButton to="/">로그인</NavButton>
        {/* <NavButton to="/">로그아웃</NavButton> */}
        <NavButton to="/">회원가입</NavButton>
        {/* <NavButton to="/">마이페이지</NavButton> */}
      </NavMenu>
    </Nav>
  );
};

export default NavbarPage;
