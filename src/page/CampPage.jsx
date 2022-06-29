import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

//아이콘 import
import LanguageIcon from "@mui/icons-material/Language";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShareIcon from "@mui/icons-material/Share";
import Car from "@mui/icons-material/DirectionsCarFilledOutlined";
import Sink from "@mui/icons-material/CountertopsOutlined";
import Shower from "@mui/icons-material/ShowerOutlined";
import LocalFire from "@mui/icons-material/LocalFireDepartmentOutlined";
import Extinguisher from "@mui/icons-material/FireExtinguisherOutlined";
import Pet from "@mui/icons-material/PetsOutlined";

const CampPage = () => {
    return (
        <div>
            <CampBody>
                <CampContext>
                    <h2 className="camp-title">캠핑장 이름</h2>
                    <div className="camp-title-icon"></div>
                    <div className="horizon" />
                    <h3>주소 : </h3>
                    <h3>전번 : </h3>
                    <div className="horizon" />
                    <div className="camp-icon-container">
                        <div>
                            <LanguageIcon fontSize="large" />
                            <p>웹사이트</p>
                        </div>
                        <div>
                            <DirectionsIcon fontSize="large" />
                            <p>길찾기</p>
                        </div>
                        <div>
                            <ShareIcon fontSize="large" />
                            <p>공유</p>
                        </div>
                    </div>
                </CampContext>
                <MapContainer
                    center={{ lat: 33.450701, lng: 126.570667 }}
                    style={{ width: "60%", height: "500px" }}
                >
                    <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
                        <div style={{ color: "#000" }}> Hello World</div>
                    </MapMarker>
                </MapContainer>
            </CampBody>
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
        </div>
    );
};

export default CampPage;

const CampBody = styled.div`
    display: flex;
    margin: 50px;
`;
const CampContext = styled.div`
    width: 60%;
    height: 500px;
    text-align: center;
    box-shadow: 3px 3px 10px black;
    .camp-title {
        font-weight: bold;
        font-size: 2em;
        text-align: center;
    }
    .horizon {
        width: 100%;
        height: 2px;
        background-color: var(--main-color-orange);
        margin: 0;
    }
    .camp-icon-container {
        justify-content: center;
        display: flex;
        div {
            width: 120px;
            height: 120px;
            padding: 30px;
            margin: 60px;
            background: var(--main-color-orange);
            border-radius: 120px;
            &:hover {
                background-color: var(--main-color-orange-light);
            }
        }
    }
    h3 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;
const MapContainer = styled(Map)`
    width: 40%;
    height: 470px;
    margin-left: 30px;
    box-shadow: 3px 3px 10px black;
    display: block;
`;
const AbleContainer = styled.div`
    height: 300px;
    margin: 50px;
    background-color: var(--main-color-orange);
    text-align: center;
    box-shadow: 3px 3px 10px black;
    display: flex;
    justify-content: space-around;
    h2 {
        color: white;
    }
    p {
        color: white;
        font-size: 20px;
    }
    .icon-able {
        color: white;
        font-size: 10em;
    }
`;
