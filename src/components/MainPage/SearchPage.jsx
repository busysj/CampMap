import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import backgroundImg from "../../assets/MainBackgroundImg.jpg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addHomeSearchData,
  addHomeSearchValue,
} from "../../store/basedDataSlice";

const tag = ["부산", "기장", "바다", "글램핑", "공원"];

const SeachPage = () => {
  const [homeSearch, setHomeSearch] = useState("");
  const dispatch = useDispatch();
  const campData = useSelector((state) => state.basedDataSlice.basedData);

  const onSearchValue = (e) => {
    let value = e.target.value;
    setHomeSearch(value);
  };

  const onSearch = () => {
    let result = campData.filter((data) => {
      return (
        data.addr1.search(homeSearch) !== -1 ||
        data.facltNm.search(homeSearch) !== -1
      );
    });

    if (result.length !== 0) {
      dispatch(addHomeSearchValue(homeSearch));
      dispatch(addHomeSearchData(result));
      console.log(result);
    } else {
      alert("검색 결과가 없습니다");
      dispatch(addHomeSearchData([]));
      dispatch(addHomeSearchValue(""));
    }
  };
  return (
    <SearchBackgroundimg>
      <div className="search__backgroundimg">
        <div style={{ padding: "1px" }}></div>
        <form>
          <SearchInput>
            <span>
              <input
                type="text"
                placeholder="캠핑장 또는 지역을 검색하세요"
                onChange={(e) => onSearchValue(e)}
                value={homeSearch}
              />
              <button>
                <NavLink className="button" to={`/map`} onClick={onSearch}>
                  <BtnIcon>
                    <SearchIcon viewBox="3 3 25 25" />
                  </BtnIcon>
                  {/* className="btn_icon" */}
                </NavLink>
              </button>
            </span>
          </SearchInput>
        </form>
        <SearchFilter>
          {tag.map((item, index) => (
            <li key={index} value={item} onClick={() => setHomeSearch(item)}>
              #{item}
            </li>
          ))}
        </SearchFilter>
      </div>
    </SearchBackgroundimg>
  );
};

export default SeachPage;

const SearchBackgroundimg = styled.div`
  max-width: 1920px;
  min-width: 1000px;
  height: 500px;
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;

  &::after {
    width: 100%;
    height: 500px;
    content: "";
    background-image: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.8) 0%,
        rgba(20, 20, 20, 0.3) 25%,
        rgba(20, 20, 20, 0.1) 50%,
        rgba(20, 20, 20, 0.3) 75%,
        rgba(20, 20, 20, 0.8) 100%
      ),
      url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
  }
`;

const SearchInput = styled.div`
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  min-width: 480px;
  span {
    width: 470px;
    height: 45px;
    box-shadow: rgba(0, 0, 0, 1) 0px 0px 30px;
    border-radius: 15px;
  }
  span:hover {
    width: 470px;
    height: 45px;
    box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
    border-radius: 15px;
  }
  input {
    width: 450px;
    height: 44px;
    border: none;
    line-height: 44px;
    padding: 2px 0 0 10px;
    border-radius: 20px 0 0 20px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    z-index: -5;
    outline: none;
    color: black;
  }
  button {
    border: none;
    background-color: var(--main-color-orange);
    color: white;
    font-size: larger;
    padding: 5px;
    width: 60px;
    border-radius: 0 20px 20px 0;
  }
  button:hover {
    color: var(--main-color-black);
  }
`;
const BtnIcon = styled.div`
  color: white;
  margin-top: 5px;
  font-size: large;
`;

const SearchFilter = styled.ul`
  list-style-type: none;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;

  li {
    padding: 7px 10px;
    border-radius: 20px;
    margin-top: 10px;
    /* background-color: rgba(127, 156, 159, 0.3); */
    font-size: 15px;
    color: #e9e9e9;
    font-weight: bold;
  }
  li:hover {
    /* background-color: var(--main-color-orange-light); */
    cursor: pointer;
    color: var(--main-color-orange);
    font-weight: 900;
    /* box-shadow: rgb(61, 61, 61) 0px 0px 8px; */
  }
`;
