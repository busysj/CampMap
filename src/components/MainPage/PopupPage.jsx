import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import Safety from "../../assets/Safety.png";

// import { Modal } from "antd";

const Popup = styled.div`
  position: absolute;
  width: 350px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px gray;
  left: 20%;
  top: 20%;
  transform: translate(-20%, -20%);
`;
const PopupImage = styled.img`
  border-radius: 5px;
  width: 350px;
  height: 500px;
`;

const PopupHeader = styled.div`
  position: absolute;
  width: 350px;
  height: 40px;
  background: black;
  opacity: 0.4;
  border-radius: 5px 5px 0 0;
  &:hover {
    opacity: 0.7;
  }
`;

const PopupButton = styled.button`
  /* position: absolute; */
  /* width: 40px;
  height: 40px;
  border-radius: 50%; */
  background: black;
  border: none;
  opacity: 0.65;
  color: #fff;
  font-size: 1.5rem;
  margin: 6px 12px 0 0;
  cursor: pointer;
  float: right;

  &:hover {
    opacity: 1;
  }
`;

const PopupPage = (props) => {
  const { onClose } = props;
  return (
    <Draggable>
      <Popup>
        <PopupHeader>
          <PopupButton
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </PopupButton>
        </PopupHeader>
        <PopupImage src={Safety} to="/"></PopupImage>
      </Popup>
    </Draggable>
  );
};

export default PopupPage;
