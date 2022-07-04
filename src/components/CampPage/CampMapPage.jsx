import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const CampMapPage = ({mapX, mapY, name}) => {
  return(
    <div>
      <MapContainer
        center={{ lat: mapY, lng: mapX }}
        style={{ width: "100%", height: "500px" }}
      >
        <MapMarker position={{ lat: mapY, lng: mapX }}>
          <div style={{ color: "#000" }}>{name}</div>
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