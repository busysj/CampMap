import styled from "styled-components";

const CampPageContext = ({props}) => {
  return(
      <CampContext>
        <CampTitle>
            <span className="camp-title">{props.facltNm}</span>
            <span className="camp-status">{props.manageSttus}</span>
        </CampTitle>
        <div className="horizon" />
        <div className="camp-maininfo">
            <p>기본정보</p>
            <h3>주소 : {props.addr1}{props.addr2}</h3>
            <h3>전번 : {props.tel}</h3>
        </div>
        <div className="horizon" />
        <div className="camp-info">
            <p>캠핑장 환경 : {props.induty}</p>
            <p>운영일 : {props.operDeCl}</p>
            <p>운영계절 : {props.operPdCl}</p>
            <p>반려동물 동반 {props.animalCmgCl}</p>
            <p>개인트레일러 동반 : {props.trlerAcmpnyAt}</p>
            <p>카라반 동반 : {props.caravAcmpnyAt}</p>
            <p>화장실 갯수 : {props.toiletCo}</p>
            <p>샤워실 갯수 : {props.swrmCo}</p>
            <p>화로대 : {props.brazierCl}</p>
            <p>소화기 갯수 : {props.extshrCo}</p>
        </div>
      </CampContext>
  );
};
const CampTitle = styled.div`
    .camp-title {
        font-weight: bold;
        font-size: 2em;
        margin: 10px 10px;
    }
    .camp-status{
        float: right;
        margin-right: 50px;
        padding: 5px;
        border-radius: 20px;
        background-color: var(--main-color-green);
        color: white;
    }
`;

const CampContext = styled.div`
    margin: 5px;
    max-width: 600px;
    height: 600px;
    background-color: white;
    .horizon {
        width: 100%;
        height: 2px;
        background-color: var(--main-color-orange);
        margin: 0;
    }
    .camp-info{
        text-align: center;
    }

    h2 {
        margin: 30px;
    }
    h3 {
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export default CampPageContext;