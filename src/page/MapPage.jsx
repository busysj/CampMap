import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomOverlayMap, Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { ZoomControl, MapTypeControl } from "react-kakao-maps-sdk";
import { Input, Select, Tag } from "antd";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import "antd/dist/antd.min.css";
import UseCurrentLocation from "../hooks/UseCurrentLocation";
import axios from "axios";
import SearchResultList from "../components/SearchResultList";
import defaultImage from "../assets/default-Image.png";

const { Option } = Select;

const cityData = [
  "전체",
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "세종",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주",
];
const districtData = {
  전체: [""],
  서울: [
    "전체",
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
  부산: [
    "전체",
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
  대구: [
    "전체",
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
  인천: [
    "전체",
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
  광주: ["전체", "광산구", "남구", "동구", "북구", "서구"],
  대전: ["전체", "대덕구", "동구", "서구", "유성구", "중구"],
  울산: ["전체", "남구", "동구", "북구", "울주군", "중구"],
  세종: ["전체", "금남면", "세종시", "소정면", "연서면", "전동면"],
  경기도: [
    "전체",
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
    "전체",
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
    "전체",
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
  충청남도: [
    "전체",
    "계룡시",
    "공주시",
    "금산군",
    "논산시",
    "당진시",
    "보령시",
    "부여군",
    "서산시",
    "서천군",
    "아산시",
    "예산군",
    "천안시",
    "청양군",
    "태안군",
    "홍성군",
  ],
  전라북도: [
    "전체",
    "고창군",
    "군산시",
    "김제시",
    "남원시",
    "무주군",
    "부안군",
    "순창군",
    "완주군",
    "익산시",
    "임실군",
    "장수군",
    "전주시",
    "정읍시",
    "진안군",
  ],
  전라남도: [
    "전체",
    "강진군",
    "고흥군",
    "곡성군",
    "광양시",
    "구례군",
    "나주시",
    "담양군",
    "목포시",
    "무안군",
    "보성군",
    "순천시",
    "신안군",
    "여수시",
    "영광군",
    "영암군",
    "완도군",
    "장성군",
    "장흥군",
    "진도군",
    "함평군",
    "해남군",
    "화순군",
  ],
  경상북도: [
    "전체",
    "경산시",
    "경주시",
    "고령군",
    "구미시",
    "군위군",
    "김천시",
    "문경시",
    "봉화군",
    "상주시",
    "성주군",
    "안동시",
    "영덕군",
    "영양군",
    "영주시",
    "영천시",
    "예천군",
    "울릉군",
    "울진군",
    "의성군",
    "청도군",
    "청송군",
    "칠곡군",
    "포항시",
  ],
  경상남도: [
    "전체",
    "거제시",
    "거창군",
    "고성군",
    "김해시",
    "남해군",
    "밀양시",
    "사천시",
    "산청군",
    "양산시",
    "의령군",
    "진주시",
    "창녕군",
    "창원시",
    "통영시",
    "하동군",
    "함안군",
    "함양군",
    "합천군",
  ],
  제주: ["전체", "서귀포시", "제주시"],
};
const facility = [
  "전기",
  "무선인터넷",
  "장작판매",
  "온수",
  "트렘폴린",
  "물놀이장",
  "놀이터",
  "산책로",
  "운동장",
  "운동시설",
  "마트.편의점",
  "애견동반",
];

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const MapPage = () => {
  const [cities, setCities] = useState(districtData[cityData[0]]);
  const [district, setDistrict] = useState(districtData[cityData[0]][0]);
  const [selected, setSelected] = useState(cityData[0]);
  const [level, setLevel] = useState();
  const [search, setSearch] = useState(false);

  const { location, error } = UseCurrentLocation(geolocationOptions);

  useEffect(() => {
    console.log("렌더링");
  }, []);

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    axios(
      "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=DBx1v7ble2j4MNFWznYeeM5wQYthH5QTVeMOTXn5H%2FxvLP7Bbaa8IZvKxHq8r0425fyEMXvrs32EFDRIALvz5A%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
    )
      .then((response) => {
        console.log(response.data.response.body.items.item);
        setAllData(response.data.response.body.items.item);
        setFilteredData(response.data.response.body.items.item);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const [keywordResult, setKeywordResult] = useState();
  const [selectedResult, setSelectedResult] = useState();
  const [districtResult, setDistrictResult] = useState();
  const [tagValueResult, setTagValueResult] = useState();

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return (
        data.addr1.search(value) !== -1 || data.facltNm.search(value) !== -1
      );
    });

    setKeywordResult(result);
    setSearchResult(value);
  };

  const handleCityChange = (value) => {
    setCities(districtData[value]);
    setDistrict(districtData[value][0]);
    setSelected(value);
    let result = [];
    result = allData.filter((data) => {
      return data.addr1.search(value) !== -1;
    });
    setSelectedResult(result);
  };

  const onDistrictChange = (value) => {
    setDistrict(value);
    let result = [];
    result = allData.filter((data) => {
      return data.addr1.search(value) !== -1;
    });
    setDistrictResult(result);
  };

  const onClickSearch = () => {
    let value = document.querySelectorAll(".active");
    let valueArray = [];
    for (let i = 0; i < value.length; i++) {
      valueArray[i] = value[i].id;
    }

    let tagResult = allData.filter(
      (data) => data.sbrsCl && data.sbrsCl.includes(valueArray)
    );

    value[0] && setTagValueResult(tagResult);

    if (keywordResult) {
      setFilteredData(keywordResult);
      if (selectedResult) {
        let result = keywordResult.filter((data) =>
          selectedResult.includes(data)
        );

        setFilteredData(result);
        if (districtResult) {
          let result2 = keywordResult.filter((data) =>
            selectedResult.includes(data)
          );
          let result3 = result2.filter((data) => districtResult.includes(data));

          setFilteredData(result3);
          if (value[0]) {
            let tagResult2 = result3.filter((data) => tagResult.includes(data));
            setFilteredData(tagResult2);
          }
        } else if (!districtResult && value[0]) {
          let tagResult2 = result.filter((data) => tagResult.includes(data));
          setFilteredData(tagResult2);
        }
      } else if (!selectedResult && value[0]) {
        let tagResult2 = keywordResult.filter((data) =>
          tagResult.includes(data)
        );
        setFilteredData(tagResult2);
      }
    } else if (!keywordResult && selectedResult) {
      setFilteredData(selectedResult);
      if (districtResult) {
        let result = filteredData.filter((data) =>
          districtResult.includes(data)
        );

        setFilteredData(result);
        if (value[0]) {
          let tagResult2 = selectedResult.filter((data) =>
            districtResult.includes(data)
          );
          let tagResult3 = tagResult2.filter((data) =>
            tagResult.includes(data)
          );
          setFilteredData(tagResult3);
        }
      } else if (!districtResult && value[0]) {
        let tagResult2 = selectedResult.filter((data) =>
          tagResult.includes(data)
        );
        setFilteredData(tagResult2);
      }
    } else if (!keywordResult && !selectedResult && value[0]) {
      setFilteredData(tagResult);
    } else {
      setFilteredData(allData);
    }
    setSearch(true);
  };

  const onClickReset = () => {
    search && setSearch(false);
    setSearchResult("");
    setKeywordResult(null);
    setSelectedResult(null);
    setDistrictResult(null);
    setTagValueResult(null);
    setFilteredData(allData);
    setSelected(cityData[0]);
    setDistrict(districtData[cityData[0]]);
    setCities(districtData[cityData[0]]);
  };

  const Tags = ({ data }) => {
    const [isTagClick, setIsTagClick] = useState(false);

    return (
      <>
        <SearchTag
          onClick={() => {
            if (!isTagClick) {
              setIsTagClick(true);
              // setTagValue([...tagValue, data]);
            } else {
              setIsTagClick(false);
              // setTagValue(tagValue.filter((value) => value.id !== data));
            }
          }}
          id={data}
          className={isTagClick && "active"}
        >
          {data}
        </SearchTag>
      </>
    );
  };

  const EventMarkerContainer = ({
    position,
    content,
    campName,
    firstImg,
    description,
    homepage,
    callNumber,
  }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <MapMarker
          position={position}
          onClick={(marker) => {
            map.panTo(marker.getPosition());
            setIsOpen(true);
          }}
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
        >
          {isVisible && content}
        </MapMarker>
        {isOpen && (
          <CustomOverlayMap position={position}>
            <Wrap>
              <Info>
                <div className="title">
                  {campName}
                  <div
                    className="close"
                    onClick={() => setIsOpen(false)}
                    title="닫기"
                  ></div>
                </div>
                <div className="body">
                  <div className="img">
                    <img
                      src={firstImg ? firstImg : defaultImage}
                      width="73"
                      height="70"
                      alt={campName}
                    />
                  </div>
                  <Description>
                    <div className="ellipsis">{description}</div>
                    <div className="jibun ellipsis">{callNumber}</div>
                    <div>
                      <a
                        href={homepage}
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                      >
                        홈페이지
                      </a>
                    </div>
                  </Description>
                </div>
              </Info>
            </Wrap>
            ;
          </CustomOverlayMap>
        )}
      </>
    );
  };

  return (
    <>
      {!search ? (
        <FindMap>
          <Search>
            <Header>
              캠핑장 조회
              <ResetButton onClick={onClickReset}>
                {" "}
                <RotateLeftIcon fontSize="small" />
                전체 초기화
              </ResetButton>
            </Header>
            <Form>
              <FormBox>
                <InputTitle>캠핑장 검색</InputTitle>
                <InputCampName
                  placeholder="캠핑장 또는 지역을 검색하세요"
                  onChange={(e) => handleSearch(e)}
                  value={searchResult}
                />
              </FormBox>
              <FormBox>
                <InputTitle>지역</InputTitle>
                <SelectBox>
                  <SelectAddress value={selected} onChange={handleCityChange}>
                    {cityData.map((city) => (
                      <Option key={city} value={city}>
                        {city}
                      </Option>
                    ))}
                  </SelectAddress>
                  <SelectAddress value={district} onChange={onDistrictChange}>
                    {cities.map((district) => (
                      <Option key={district} value={district}>
                        {district}
                      </Option>
                    ))}
                  </SelectAddress>
                </SelectBox>
              </FormBox>

              <InputTitle>상세 검색</InputTitle>
              <SearchTagList>
                {facility.map((data) => (
                  <Tags key={data} value={data} data={data} />
                ))}
              </SearchTagList>
            </Form>

            {/* <SearchButton onClick={onClickTagSearch}>상세 검색</SearchButton> */}
            <SearchButton onClick={onClickSearch}>검색</SearchButton>
          </Search>
          {location ? (
            <Map
              center={{ lat: location.latitude, lng: location.longitude }}
              style={{ width: "63%", height: "800px" }}
              level={4}
              onZoomChanged={(map) => setLevel(map.getLevel())}
            >
              <ZoomControl />
              <MapMarker
                position={{
                  lat: location.latitude,
                  lng: location.longitude,
                }}
              >
                <div style={{ color: "#000" }}> 현재 위치</div>
              </MapMarker>
            </Map>
          ) : (
            <Map
              center={{ lat: 33.450701, lng: 126.570667 }}
              style={{ width: "63%", height: "800px" }}
              level={4}
              onZoomChanged={(map) => setLevel(map.getLevel())}
            >
              <ZoomControl />
              <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
                <div style={{ color: "#000" }}> 카카오</div>
              </MapMarker>
            </Map>
          )}
        </FindMap>
      ) : (
        <FindMap>
          <Search>
            <Header>
              캠핑장 조회
              {searchResult ? (
                <InputTitle>
                  "{searchResult}" 검색 결과 ({filteredData.length})
                </InputTitle>
              ) : (
                <InputTitle>전체 결과 ({filteredData.length})</InputTitle>
              )}
              <ResetButton onClick={onClickReset}>뒤로 가기</ResetButton>
            </Header>
            <SearchResultList filteredData={filteredData} />
          </Search>
          {filteredData[0] ? (
            <Map
              center={{
                lat: filteredData[0].mapY,
                lng: filteredData[0].mapX,
              }}
              style={{ width: "63%", height: "800px" }}
              level={10}
              onZoomChanged={(map) => setLevel(map.getLevel())}
            >
              <ZoomControl />
              <MapTypeControl />
              {filteredData.map((item, index) => (
                <EventMarkerContainer
                  key={index}
                  position={{ lat: item.mapY, lng: item.mapX }}
                  content={<MarkerPoint> {item.facltNm}</MarkerPoint>}
                  campName={item.facltNm}
                  firstImg={item.firstImageUrl}
                  description={item.addr1}
                  homepage={item.homepage}
                  callNumber={item.tel}
                />
              ))}
            </Map>
          ) : (
            (alert("검색 결과가 없습니다"), setSearch(false))
          )}
        </FindMap>
      )}
    </>
  );
};

export default MapPage;

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
  margin-bottom: 25px;
`;

const InputTitle = styled.div`
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
`;

const InputCampName = styled(Input)`
  width: 350px;

  &:hover {
    border-color: var(--main-color-orange);
  }

  &:focus {
    border-color: var(--main-color-orange);
    box-shadow: 0 0 0 0.5px var(--main-color-orange);
  }
`;

const SelectAddress = styled(Select)`
  width: 100px;
  margin-left: 15px;
`;

const SelectBox = styled.div`
  display: flex;
`;

const SearchTagList = styled.div`
  margin: 15px;

  .active {
    color: var(--main-color-orange);
    font-weight: bold;
    border-color: var(--main-color-orange);
  }
`;
const SearchTag = styled(Tag)`
  border-radius: 20px;
  padding: 3px 18px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    color: var(--main-color-orange);
    font-weight: bold;
    border-color: var(--main-color-orange);
  }
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

const Wrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -141px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  line-height: 1.5;

  * {
    padding: 0;
    margin: 0;
  }
`;

const Info = styled.div`
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;

  .title {
    padding: 5px 0 0 10px;
    height: 35px;
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-weight: bold;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888;
    width: 17px;
    height: 17px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
  }

  .close:hover {
    cursor: pointer;
  }

  .body {
    position: relative;
    overflow: hidden;
  }

  .img {
    position: absolute;
    top: 6px;
    left: 5px;
    width: 73px;
    height: 71px;
    border: 1px solid #ddd;
    color: #888;
    overflow: hidden;
  }

  .link {
    color: #5085bb;
  }

  &:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }

  &::after {
    content: "";
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: 0;
    width: 22px;
    height: 12px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
  }
`;

const Description = styled.div`
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .jibun {
    font-size: 11px;
    color: #888;
    margin-top: -2px;
  }
`;

// 마커 css
const MarkerPoint = styled.div`
  padding: 3px;
  color: black;
`;