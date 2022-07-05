import styled from "styled-components";
import CampMapPage from "./CampMapPage";
import CampPageContext from "./CampPageContext";
import { useState } from "react";
import { useSelector } from "react-redux";


const CampPage = () => {
    const campData = useSelector((state) => state.locationDataSlice.locationPickData);
    
    const tabList = {
        0 : <CampPageContext props={campData}/>,
        1 : <CampMapPage
        mapX={campData.mapX} mapY={campData.mapY} name={campData.facltNm}/>,
    };
    const [tab, setTab] = useState(0);
    const changeTab = (tabIndex) => {
        setTab(tabIndex);
    };

    return (
        <div>
        <CampBackImg style={{background:`url(${campData.firstImageUrl})`,
        backgroundRepeat:'no-repeat', backgroundSize:'cover'}}/>
            <CampBody>
                <CampImg src={campData.firstImageUrl} alt='camping' />
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
        </CampBody>
    </div>
    );
};

export default CampPage;

const CampBody = styled.div`
    background-color: white;
    max-width: 600px;
    margin: auto;
    box-shadow: 3px 3px 10px black;
`;
const CampBackImg = styled.div`
    width: 1920px; height: 1080px;
    position: fixed;
    z-index: -1;
    filter: blur(5px);
`;
const CampImg = styled.img`
    width: 100%; height: 300px;
`;
const TabBar = styled.div`
    margin: 0;
    text-align: center;
    font-weight: bold;
    ul{
        padding: 0;
        display: flex;
        list-style: none;
    }
    li{
        width: 100%; height: 100%;
        display: block;
        padding: 20px;
    }
    li.active{
        color: white;
        font-weight: bold;
        background-color: var(--main-color-orange);
    }
`;
const TabContentArea = styled.div`
    width: 100%;
`;
