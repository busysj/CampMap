import React from "react";
import Logo from "../assets/Logo.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";

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
            <a href="/CampMap">개인정보 취급방침</a>
            <span>|</span>
            <a href="/CampMap">홈페이지 이용약관</a>
            <span>|</span>
            <a href="/CampMap">광고 및 제휴문의</a>
            <span>|</span>
            <a href="/CampMap">고객센터</a>
          </Footerbottommenu>
          <FooterCopyright>
            <span>Copyright © 2022 </span>
            <span style={{ fontWeight: "bold" }}>
              https://busysj.github.io/CampMap/
            </span>
            <span>. All rights reserved.</span>
            <br />
            <People>
              {people.map((person, index) => (
                <div key={index} className="personal">
                  <span>
                    <PhoneIphoneIcon />
                    <b>전화 </b>
                    {person.name} {person.phone}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <br />
                  <span>
                    <EmailIcon />
                    <b>이메일 </b>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </span>
                </div>
              ))}
            </People>
          </FooterCopyright>
        </FooterCenter>
      </FooterBox>
    </FooterSection>
  );
};

export default FooterPage;

const FooterSection = styled.div`
  max-width: 1920px;
  min-width: 800px;
  clear: both;
  height: 190px;
  padding: 30px;
  margin-top: 45px;
  background-color: #ffb937;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: var(--main-color-green);
  }
`;
const FooterBox = styled.div`
  display: flex;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  justify-content: center;
`;

const FooterImg = styled.div`
  img {
    width: 150px;
    height: 110px;
  }
  margin: 0 30px;
  margin-top: 10px;
  float: left;
`;

const FooterCenter = styled.div`
  padding: 10px;
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
  font-size: 12px;
  display: block;
  line-height: 1.9;
  padding: 3px;
`;

const People = styled.div`
  display: flex;
  margin-top: 10px;

  .personal {
    margin: 0 20px;
  }
`;
