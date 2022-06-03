import React, { useState } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ZoomControl } from "react-kakao-maps-sdk";
import { Input, Select } from "antd";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const FindMap = styled.div`
  display: flex;
  margin: 25px 50px;
`;

const Search = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 30px 0;
  font-weight: bold;
  font-size: 21px;
  line-height: 20px;
`;

const ResetButton = styled.button`
  border: 1px solid black;
  background: white;
  color: black;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin: 0 50px;
`;

const Form = styled.form``;

const FormBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const InputTitle = styled.div`
  font-size: 15px;
  line-height: 25px;
`;

const InputCampName = styled(Input)``;

const SelectAddress = styled(Select)`
  width: 100px;
  height: 30px;
  margin-left: 10px;
`;

const SearchButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  background: var(--main-color-orange);
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const MapPage = () => {
  const [level, setLevel] = useState();
  return (
    <FindMap>
      <Search>
        <Header>
          캠핑장 위치 찾아보기
          <ResetButton>
            {" "}
            <RotateLeftIcon fontSize="small" />
            전체 초기화
          </ResetButton>
        </Header>
        <Form>
          <FormBox>
            <InputTitle>캠핑장 이름</InputTitle>
            <InputCampName placeholder="캠핑장 이름을 검색하세요" />
          </FormBox>
          <FormBox>
            <InputTitle>지역</InputTitle>
            <SelectAddress>지역별</SelectAddress>
          </FormBox>
        </Form>
        <SearchButton>검색</SearchButton>
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
