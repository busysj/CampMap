import React, { useState } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ZoomControl } from "react-kakao-maps-sdk";

const FindMap = styled.div`
  display: flex;
  margin: 25px 50px;
`;

const Search = styled.div`
  width: 40%;
`;

const MapPage = () => {
  const [level, setLevel] = useState();
  return (
    <FindMap>
      <Search>
        <h2>캠핑장 찾기</h2>
        <label>캠핑장 이름</label>
        <input type="text"></input>
        <label>지역</label>
        <select>지역별</select>
      </Search>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "60%", height: "500px" }}
        onZoomChanged={(map) => setLevel(map.getLevel())}
      >
        <ZoomControl />
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
          <div style={{ color: "#000" }}> Hello World</div>
        </MapMarker>
      </Map>
    </FindMap>
  );
};

export default MapPage;
