import React from "react";
import { List } from "antd";
import styled from "styled-components";
// import Campsite from "../assets/Camping06.jpg";
import defaultImage from "../assets/default-Image.png";

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

  &:hover {
    color: var(--main-color-orange);
    font-size: 0.88rem;
    font-weight: 900;
  }
`;

const SearchResultList = (props) => {
  return (
    <SearchBox>
      <SearchList
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={props.filteredData}
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
            {item.sbrsCl} <br />
            <Reservation href={item.resveUrl}>예약하러 가기</Reservation>
          </List.Item>
        )}
      />
    </SearchBox>
  );
};

export default SearchResultList;
