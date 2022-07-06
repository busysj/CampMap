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
            <h3>기본정보</h3>
            <p>주소 : {props.addr1} {props.addr2}</p>
            <p>전화번호 : {props.tel}</p>
            <a href={`${props.homepage}`} target='blank'>홈페이지</a>
        </div>
        <div className="horizon" />
        <div className="camp-info">
            <h2>"{props.lineIntro}"</h2>
            <p>{props.intro}</p>
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
    max-width: 800px; min-width: 600px;
    max-height: auto;
    background-color: white;
    .horizon {
        width: 100%;
        height: 2px;
        background-color: var(--main-color-orange);
        margin-top: 30px; margin-bottom: 30px;
    }
    .camp-info{
        text-align: center;
        h2 {
            font-size: 25px;
            font-weight: bold;
            margin-top: 50px; margin-bottom: 50px;
        }
        p {
            margin: 30px;
            word-spacing: 3px;
            line-height: 25px;
        }
    }
    .camp-maininfo{
        h3 {
        font-size: 20px;
        }
        a{
            font-style: none;
            margin-top: 10px; margin-bottom: 10px;
            padding: 10px;
            background-color: var(--main-color-orange);
        }
    }
`;

export default CampPageContext;