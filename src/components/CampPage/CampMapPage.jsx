import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const CampMapPage = ({mapX, mapY, name}) => {
  return(
    <div>
      <MapContainer
        center={{ lat: mapY, lng: mapX }}
        style={{ width: "100%", height: "600px" }}
      >
        <MapMarker position={{ lat: mapY, lng: mapX }}>
          <div className="marker-info">{name}</div>
        </MapMarker>
      </MapContainer>
    </div>
  )
};

const MapContainer = styled(Map)`
    width: 600px;
    height: 600px;
    .marker-info{
      display: block;
      background-color: var(--main-color-orange);
      width: 165px; height: 45px;
      position: absolute; left: -10px; top: -20px;
      text-align: center;
      border-radius: 10px;
      color: white;
    }
`;
export default CampMapPage;