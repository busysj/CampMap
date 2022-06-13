import React from "react";
import { List } from "antd";
import styled from "styled-components";
import Campsite from "../assets/Camping06.jpg";

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
