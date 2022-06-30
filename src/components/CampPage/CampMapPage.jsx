import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const CampMapPage = (mapX, mapY) => {
  return(
    <div>
      <MapContainer
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: "500px" }}
      >
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
          <div style={{ color: "#000" }}> Hello World</div>
        </MapMarker>
      </MapContainer>
    </div>
  )
};

const MapContainer = styled(Map)`
    width: 600px;
    height: 470px;
`;
export default CampMapPage;