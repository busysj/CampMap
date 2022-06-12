import styled from "styled-components";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import LanguageIcon from '@material-ui/icons/Language'
import DirectionIcon from '@material-ui/icons/Directions'
import ShareIcon from '@material-ui/icons/Share'

const CampBody = styled.div`
  display: flex;
  margin: 50px;
`
const CampContext = styled.div`
  width: 60%; height: 500px;
  text-align: center;
  box-shadow: 3px 3px 10px black;
  .camp-title {
    font-weight: bold; font-size: 2em; text-align: center;
  }
  .horizon{
    width: 100%; height: 2px;
    background-color: var(--main-color-orange);
    margin: 0;
  }
  .camp-icon-container{
    justify-content: center;
    display: flex;
    div{
      width: 120px; height: 120px;
      padding: 30px; margin: 60px;
      background: var(--main-color-orange);
      border-radius: 120px;
      &:hover{
        background-color: var(--main-color-orange-light);
      }
    }
  }
  h3 {
    margin-top: 30px; margin-bottom: 30px;
  }
`;
const MapContainer = styled(Map)`
  width: 40%; height: 470px;
  margin-left: 30px;
  box-shadow: 3px 3px 10px black;
  display: block;
`;
const AbleContainer = styled.div`
  width: 100%; height: 400px;
  background-color: var(--main-color-orange);
`


const CampPage = () => {

  return(
  <div>
    <CampBody>
      <CampContext>
        <h2 className="camp-title">캠핑장 이름</h2>
        <div className="camp-title-icon">

        </div>
        <div className="horizon"/>
        <h3>주소 : </h3>
        <h3>전번 : </h3>
        <div className="horizon"/>
        <div className="camp-icon-container">
          <div>
            <LanguageIcon fontSize="large"/>
            <p>웹사이트</p>
          </div>
          <div>
            <DirectionIcon fontSize="large"/>
            <p>길찾기</p>
          </div>
          <div>
            <ShareIcon fontSize="large"/>
            <p>공유</p>
          </div>
        </div>
      </CampContext>
      <MapContainer center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "60%", height: "500px" }}>
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
          <div style={{ color: "#000" }}> Hello World</div>
        </MapMarker>
      </MapContainer>
    </CampBody>
    <AbleContainer>
      <h2>제공가능한 시설(아이콘)</h2>
    </AbleContainer>
  </div>

  );
};

export default CampPage;