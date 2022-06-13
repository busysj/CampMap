import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import LogReg from "./../components/LogReg";
import OutsideClick from "./../components/OutsideClick";
import SearchIcon from "@mui/icons-material/Search";

const Nav = styled.div`
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 72px;
    top: 0;
    font-size: 1.2rem;
    position: sticky;
    box-shadow: 0 1px 8px gray;
    z-index: 10;
`;

const NavLogo = styled(Link)`
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
    height: 72px;
    font-weight: 500;
    text-decoration: none;
    color: black;

    &:hover {
        color: var(--main-color-orange);
        border-bottom: 2px solid var(--main-color-orange);
    }
`;

/* 재라 : 네브바 검색창 코드 CSS start - 0610 */
const SearchInput1 = styled.div`
    min-width: 180px;
    span {
        width: 190px;
        height: 30px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
        border-radius: 15px;
        &:hover {
            box-shadow: #ffdba5 0px 0px 30px;
            border-radius: 20px;
        }
    }
    input {
        width: 140px;
        height: 34px;
        border: none;
        line-height: 34px;
        padding: 0px 0 0 10px;
        border-radius: 20px 0 0 20px;
        font-size: 12px;
        color: black;
        outline: none;
    }
    button {
        border: none;
        background-color: var(--main-color-orange);
        color: white;
        padding: 5px;
        width: 40px;
        border-radius: 0 10px 10px 0;
    }
    button:hover {
        color: var(--main-color-black);
    }
`;
const BtnIcon = styled.div`
    font-size: small;
`;
/* 재라 : 네브바 검색창 코드 CSS start - 0610 */

const NavbarPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const location = useLocation();

    const [typeIndex, setTypeIndex] = useState(0)

    const handleClose = () => {
        setOpenModal(false);
        console.log(location.pathname); // 네브바 주소접근 확인 콘솔 -by.재라
    };

    // useEffect(() => (

    // ),[window.location.href])

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
                    <NavLink to="/community">커뮤니티</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/recommend">캠핑장추천</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/review">리뷰</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/youtube">유튜브</NavLink>
                </NavItem>
                {/* 재라 : 네브바 검색창 코드start - 0610 */}
                {location.pathname !== "/" ? (
                    <form>
                        <SearchInput1>
                            <span>
                                <input
                                    type="text"
                                    placeholder="검색어를 입력 해 주세요"
                                />
                                <button>
                                    <BtnIcon>
                                        <SearchIcon viewBox="0 0 25 25" />
                                    </BtnIcon>
                                    {/* className="btn_icon" */}
                                </button>
                            </span>
                        </SearchInput1>
                    </form>
                ) : null}
                {/* 재라 : 네브바 검색창 코드end - 0610 */}

                <NavButton to="/" onClick={() => {setTypeIndex(0); setOpenModal(true)}}>
                    로그인
                </NavButton>
                {/* <NavButton to="/">로그아웃</NavButton> */}
                <NavButton to="/" onClick={() => {setTypeIndex(1); setOpenModal(true)}}>회원가입</NavButton>
                {/* <NavButton to="/">마이페이지</NavButton> */}
            </NavMenu>

            <OutsideClick onClickOutside={handleClose}>
                <LogReg openModal={openModal} setOpenModal={setOpenModal} index={typeIndex} setIndex={setTypeIndex}/>
            </OutsideClick>
        </Nav>
    );
};

export default NavbarPage;
