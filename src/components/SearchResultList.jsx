import React from "react";
import { List } from "antd";
import styled from "styled-components";
import Campsite from "../assets/Camping06.jpg";

const SearchList = styled(List)`
  margin-top: 10px;
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
    <SearchList
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
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
          {item.callnumber}
        </List.Item>
      )}
    />
  );
};

export default SearchResultList;
