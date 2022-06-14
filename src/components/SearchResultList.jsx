import React, { useEffect, useState } from "react";
import { List } from "antd";
import styled from "styled-components";
// import Campsite from "../assets/Camping06.jpg";
import defaultImage from "../assets/default-Image.png";
import axios from "axios";

const SearchBox = styled.div`
  height: 700px;
  padding: 15px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--main-color-orange-light);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #faecd3;
  }
`;

const SearchList = styled(List)`
  margin-top: 10px;
  /* text-align: center; */
`;

const Reservation = styled.a`
  float: right;
`;

const SearchResultList = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = allData.filter((data) => {
  //     return data.addr1.search(value) !== -1;
  //   });
  //   setFilteredData(result);
  // };

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

  return (
    <SearchBox>
      <SearchList
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={allData}
        renderItem={(item) => (
          <List.Item
            key={item.index}
            extra={
              <img
                width={200}
                height={137}
                alt="캠핑장 사진"
                src={item.firstImageUrl ? item.firstImageUrl : defaultImage}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.homepage}>{item.facltNm}</a>}
              description={item.addr1}
            />
            {item.tel} <br />
            <Reservation href={item.resveUrl}>예약하러 가기</Reservation>
          </List.Item>
        )}
      />
    </SearchBox>
  );
};

export default SearchResultList;
