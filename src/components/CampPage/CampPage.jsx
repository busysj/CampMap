import styled from "styled-components";
import CampMapPage from "./CampMapPage";
import CampPageContext from "./CampPageContext";
import { useState } from "react";
import { useSelector } from "react-redux";
import defaultImage from '../../assets/default-Image.png';

import Toilet from '@mui/icons-material/WcOutlined';
import Pet from '@mui/icons-material/PetsOutlined';
import Bathroom from '@mui/icons-material/BathroomOutlined';
import FireExtinguisher from '@mui/icons-material/FireExtinguisherOutlined';
import LocalFire from '@mui/icons-material/LocalFireDepartmentOutlined';
import Sink from '@mui/icons-material/CountertopsOutlined';
import Trailer from '@mui/icons-material/RvHookupOutlined';
import Caravan from '@mui/icons-material/AirportShuttleOutlined';

const CampPage = () => {
    //locationDataSlice에서 선택한 Redux 데이터 가져옴
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
        <CampBackImg style={ campData.firstImageUrl ? { background:`url(${campData.firstImageUrl})`,
        backgroundRepeat:'no-repeat', backgroundSize:'cover'} : { backgroundColor : 'white'}}/>
        <CampBody>
            {campData.firstImageUrl ? <CampImg src={campData.firstImageUrl} alt='camping' />
            : <CampImg src={defaultImage} alt='camping' />}
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
            {/* 탭 눌렀을때 컴포넌트 보여주는 부분 */}
            <TabContentArea>
                {tabList[tab]}
            </TabContentArea>
            {/* 아이콘 컨테이너 */}
            <AbleContainer>
                <div className="individual">
                    <div className={`${campData.toiletCo > 0 ? 'icon-active' : 'icon-deactive'}`}>
                        <Toilet className="icon-size"/>
                    </div>
                    <p>{campData.toiletCo > 0 ? '화장실 있음' : '화장실 없음'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.animalCmgCl === '가능' ? 'icon-active' : 'icon-deactive'}`}>
                        <Pet className="icon-size"/>
                    </div>
                    <p>{campData.animalCmgCl === '가능' ? '반려동물 동반 가능' : '반려동물 동반 불가능'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.swrmCo > 0 ? 'icon-active' : 'icon-deactive'}`}>
                        <Bathroom className="icon-size"/>
                    </div>
                    <p>{campData.swrmCo > 0 ? '샤워실 있음' : '샤워실 없음'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.wtrplCo > 0 ? 'icon-active' : 'icon-deactive'}`}>
                        <Sink className="icon-size"/>
                    </div>
                    <p>{campData.wtrplCo > 0 ? '개수대 있음' : '개수대 없음'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.extshrCo > 0 ? 'icon-active' : 'icon-deactive'}`}>
                        <FireExtinguisher className="icon-size"/>
                    </div>
                    <p>{campData.extshrCo > 0 ? '소화기 있음' : '소화기 없음'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.brazierCl ? 'icon-active' : 'icon-deactive'}`}>
                        <LocalFire className="icon-size"/>
                    </div>
                    <p>{campData.brazierCl ? '화로대 개별 구비' : '화로대 정보없음'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.caravAcmpnyAt === 'Y' ? 'icon-active' : 'icon-deactive'}`}>
                        <Caravan className="icon-size"/>
                    </div>
                    <p>{campData.caravAcmpnyAt === 'Y' ? '카라반 출입 가능' : '카라반 출입 불가능'}</p>
                </div>
                <div className="individual">
                    <div className={`${campData.trlerAcmpnyAt === 'Y' ? 'icon-active' : 'icon-deactive'}`}>
                        <Trailer className="icon-size"/>
                    </div>
                    <p>{campData.trlerAcmpnyAt === 'Y' ? '트레일러 출입 가능' : '트레일러 출입 불가능'}</p>
                </div>
            </AbleContainer>
        </CampBody>
    </div>
    );
};

export default CampPage;

const CampBody = styled.div`
    background-color: white;
    max-width: 800px; min-width: 800px;
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
const AbleContainer = styled.div`
    max-width: 800px; max-height: auto; min-width: 800px;
    background-color: var(--main-color-orange);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .individual{
        width: 20%; height: 33%;
        text-align: center;
        margin: 10px;
    }
    p{
        color: white;
        font-size: 10px;
        margin: 10px;
    }
    .icon-size{
        font-size: 2.5em;
    }
    .icon-active{
        width: 60px; height: 60px;
        border: 2px white solid;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        color: white;
    }
    .icon-deactive{
        width: 60px; height: 60px;
        border: 2px gray solid;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        color: gray;
    }
`;
