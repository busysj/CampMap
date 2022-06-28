import React, { useState } from "react";
import { List } from "antd";
import styled from "styled-components";
import defaultImage from "../assets/default-Image.png";

const SearchResultList = (props) => {
  // const [classAdd, setClassAdd] = useState(false);

  const ListItemClick = (id) => {
    // const [clickClassAdd, setClickClassAdd] = useState(false);
    // alert(props.filteredData[i].contentId + " " + i);
    props.setItemContentId(id);
    console.log(id);
  };
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
        renderItem={(item, index) => (
          <div
            // className={classAdd ? "active items" : "items"}
            className="items"
            id={item.contentId}
            onClick={() => {
              ListItemClick(item.contentId);
            }}
          >
            <List.Item
              className="item"
              key={index}
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
                title={
                  <a style={{ fontWeight: "bold" }} href={item.homepage}>
                    {item.facltNm}
                  </a>
                }
                description={item.addr1}
              />
              {item.tel} <br />
              {item.sbrsCl} <br />
              <Reservation href="/camppage">상세 정보 보기</Reservation>
            </List.Item>
          </div>
        )}
      />
    </SearchBox>
  );
};

export default SearchResultList;

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

  .item {
    font-size: 13px;
  }

  .items {
    border-top: 0.1px solid lightgray;
  }

  .items:hover {
    background-color: #eeeeee;
  }
  .active {
    background-color: #eeeeee;
  }
`;

const Reservation = styled.a`
  float: right;

  &:hover {
    color: var(--main-color-orange);
    font-weight: 900;
  }
`;
