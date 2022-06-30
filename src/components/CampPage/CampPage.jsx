import styled from "styled-components";
import CampMapPage from "./CampMapPage";
import CampPageContext from "./CampPageContext";
import { useState } from "react";
//아이콘 import

import Car from "@mui/icons-material/DirectionsCarFilledOutlined";
import Sink from "@mui/icons-material/CountertopsOutlined";
import Shower from "@mui/icons-material/ShowerOutlined";
import LocalFire from "@mui/icons-material/LocalFireDepartmentOutlined";
import Extinguisher from "@mui/icons-material/FireExtinguisherOutlined";
import Pet from "@mui/icons-material/PetsOutlined";

const tabList = {
    0 : <CampPageContext/>,
    1 : <CampMapPage/>
};

const CampPage = () => {
    const [tab, setTab] = useState(0);
    const changeTab = (tabIndex) => {
        setTab(tabIndex);
    };

    return (
            <CampBody>
                <TabBar>
                    <ul>
                        <li className={`${tab === 0 ? 'active' : ''}`} onClick={() => changeTab(0)}>
                            상세정보
                        </li>
                        <li className={`${tab === 1 ? 'active' : ''}`} onClick={() => changeTab(1)}>
                            길찾기
                        </li>
                    </ul>
                </TabBar>
                <TabContentArea>
                    {tabList[tab]}
                </TabContentArea>
                <AbleContainer>
                <div>
                    <Car className="icon-able" />
                    <p>차량입장가능</p>
                </div>
                <div>
                    <Sink className="icon-able" />
                    <p>개수대 이용 가능</p>
                </div>
                <div>
                    <Shower className="icon-able" />
                    <p>샤워실 이용 가능</p>
                </div>
                <div>
                    <LocalFire className="icon-able" />
                    <p>화구 사용 가능</p>
                </div>
                <div>
                    <Extinguisher className="icon-able" />
                    <p>소화기 설치</p>
                </div>
                <div>
                    <Pet className="icon-able" />
                    <p>반려동물 입장 가능</p>
                </div>
            </AbleContainer>
        </CampBody>
    );
};

export default CampPage;

const CampBody = styled.div`
    max-width: 600px;
    text-align: center;
    margin: auto;
    box-shadow: 3px 3px 10px black;
`;
const TabBar = styled.div`
    ul{
        padding: 20px;
        display: flex;
        list-style: none;
    }
    li{
        margin: auto;
    }
    li.active{
        font-weight: bold;
        color: var(--main-color-orange);
    }
`;
const TabContentArea = styled.div`
    width: 100%;
`
const AbleContainer = styled.div`
    max-width: 600px;
    height: 300px;
    background-color: var(--main-color-orange);
    text-align: center;
    display: flex;
    justify-content: space-around;
    h2 {
        color: white;
    }
    p {
        color: white;
        font-size: 10px;
    }
    .icon-able {
        color: white;
        font-size: 5em;
    }
`;
