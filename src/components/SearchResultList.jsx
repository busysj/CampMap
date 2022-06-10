import React, { useEffect, useState } from "react";
import { List } from "antd";
import styled from "styled-components";
import Campsite from "../assets/Camping06.jpg";
import axios from "axios";

const SearchBox = styled.div`
  height: 700px;
  padding: 15px;
  overflow-y: scroll;
`;

const SearchList = styled(List)`
  margin-top: 10px;
  /* text-align: center; */
`;

const data = Array.from({
  length: 50,
}).map((_, i) => ({
  href: "",
  title: `캠핑장 ${i + 1}`,
  address: `주소 ${i + 1} > 주소 > 주소`,
  callnumber: "000-0000-0000",
}));

const SearchResultList = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.addr1.search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    axios(
      "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=DBx1v7ble2j4MNFWznYeeM5wQYthH5QTVeMOTXn5H%2FxvLP7Bbaa8IZvKxHq8r0425fyEMXvrs32EFDRIALvz5A%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={<img width={200} alt="캠핑장 사진" src={Campsite} />}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.address}
            />
            {item.callnumber} <br />
            <button>예약</button>
          </List.Item>
        )}
      />
    </SearchBox>
  );
};

export default SearchResultList;
