import React, { useState } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ZoomControl } from "react-kakao-maps-sdk";
import { Input, Select } from "antd";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import "antd/dist/antd.css";
const { Option } = Select;

const FindMap = styled.div`
  display: flex;
  margin: 25px 50px;
`;

const Search = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  margin: 0 50px 25px 0;
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
`;

const Form = styled.form``;

const FormBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const InputTitle = styled.div`
  font-size: 15px;
  line-height: 25px;
`;

const InputCampName = styled(Input)`
  width: 350px;
`;

const SelectAddress = styled(Select)`
  width: 100px;
`;

const SearchButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  background: var(--main-color-orange);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  float: right;
`;

const cityData = [
  "서울시",
  "부산시",
  "대구시",
  "인천시",
  "광주시",
  "대전시",
  "울산시",
  "세종시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주도",
];
const districtData = {
  서울시: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  부산시: [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ],
  대구시: [
    "남구",
    "달서구",
    "달성군",
    "동구",
    "북구",
    "상주",
    "서구",
    "수성구",
    "중구",
  ],
  인천시: [
    "강화군",
    "계양구",
    "남구",
    "남동구",
    "동구",
    "부평구",
    "서구",
    "연수구",
    "옹진군",
    "중구",
  ],
  광주시: ["광산구", "남구", "동구", "북구", "서구"],
  대전시: ["대덕구", "동구", "서구", "유성구", "중구"],
  울산시: ["남구", "동구", "북구", "울주군", "중구"],
  세종시: ["금남면", "세종시", "소정면", "연서면", "전동면"],
  경기도: [
    "가평군",
    "고양시",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시",
    "수원시",
    "시흥시",
    "안산시",
    "안성시",
    "안양시",
    "양주시",
    "양평군",
    "여주시",
    "연천군",
    "오산시",
    "용인시",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시",
  ],
  강원도: [
    "강릉시",
    "고성군",
    "동해시",
    "삼척시",
    "속초시",
    "양구군",
    "양양군",
    "영월군",
    "원주시",
    "인제군",
    "정선군",
    "철원군",
    "춘천시",
    "태백시",
    "평창군",
    "홍천군",
    "화천군",
    "횡성군",
  ],
  충청북도: [
    "괴산군",
    "단양군",
    "보은군",
    "영동군",
    "옥천군",
    "음성군",
    "제천시",
    "증평군",
    "진천군",
    "청원군",
    "청주시",
    "충주시",
  ],
};

const MapPage = () => {
  const [cities, setCities] = useState(districtData[cityData[0]]);
  const [district, setDistrict] = useState(districtData[cityData[0]]);
  const [level, setLevel] = useState();

  const handleCityChange = (value) => {
    setCities(districtData[value]);
    setDistrict(districtData[value][0]);
  };

  const onDistrictChange = (value) => {
    setDistrict(value);
  };
  return (
    <FindMap>
      <Search>
        <Header>
          캠핑장 조회
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
            <SelectAddress defaultValue="전체" onChange={handleCityChange}>
              {cityData.map((city) => (
                <Option key={city}>{city}</Option>
              ))}
            </SelectAddress>
            <SelectAddress defaultValue="전체" onChange={onDistrictChange}>
              {cities.map((district) => (
                <Option key={district}>{district}</Option>
              ))}
            </SelectAddress>
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
