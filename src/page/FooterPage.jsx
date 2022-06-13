import React from "react";
import Logo from "../assets/Logo.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";

const FooterSection = styled.div`
    width: 100%;
    clear: both;
    height: 230px;
    padding: 30px 0px;
    background-color: var(--main-color-yellow-light);
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        color: var(--main-color-green);
        font-weight: bold;
    }
`;
const FooterBox = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const FooterImg = styled.div`
    img {
        width: 100px;
    }
    margin: 0 20px;
    float: left;
`;

const FooterCenter = styled.div`
    float: left;
    letter-spacing: -0.01rem;
`;
const Footerbottommenu = styled.div`
    margin: 6px 0 0px 0;
    a {
        font-weight: bold;
    }
    span {
        margin: 0 16px;
    }
`;
const FooterCopyright = styled.div`
    display: block;
    line-height: 1.9;
`;

const FooterPage = () => {
    const people = [
        {
            name: "김재라",
            phone: "010-9990-7471",
            email: "seren0120@naver.com",
        },
        {
            name: "유상재",
            phone: "010-2086-9759",
            email: "tkdwox31__@naver.com",
        },
        {
            name: "유채언",
            phone: "010-9990-7471",
            email: "seren0120@naver.com",
        },
        {
            name: "유영준",
            phone: "010-7937-7735",
            email: "princewns@gmail.com",
        },
    ];

    return (
        <FooterSection>
            <FooterBox>
                <FooterImg>
                    <a href="/">
                        <img src={Logo} alt="camping 로고" />
                    </a>
                </FooterImg>
                <FooterCenter>
                    <Footerbottommenu>
                        <a href="/">개인정보 취급방침</a>
                        <span>|</span>
                        <a href="/">홈페이지 이용약관</a>
                        <span>|</span>
                        <a href="/">광고 및 제휴문의</a>
                        <span>|</span>
                        <a href="/">고객센터</a>
                        <span>|</span>
                        <a href="/">회원가입</a>
                        <span>|</span>
                        <a href="/">로그인</a>
                    </Footerbottommenu>
                    <FooterCopyright>
                        <span>Copyright © 2022 </span>
                        <span style={{ fontWeight: "bold" }}>
                            www.camping.com
                        </span>
                        <span>. All rights reserved.</span>
                        <br />
                        <div>
                            {people.map((person, index) => (
                                <div key={index}>
                                    <span>
                                        <PhoneIphoneIcon />
                                        <b>전화 </b>
                                        {person.name} {person.phone}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <span>
                                        <EmailIcon />
                                        <b>이메일 </b>
                                        <a href="mailto:seren0120@naver.com">
                                            {person.email}
                                        </a>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FooterCopyright>
                </FooterCenter>
            </FooterBox>
        </FooterSection>
    );
};

export default FooterPage;
