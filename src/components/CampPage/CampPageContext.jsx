import styled from "styled-components";

const CampPageContext = ({props}) => {
  return(
      <CampContext>
        <CampTitle>
            <span className="camp-title">{props.facltNm}</span>
            <span className={`${props.manageSttus === '운영' ? 'camp-onduty' : 'camp-disduty'}`}>{props.manageSttus}</span>
        </CampTitle>
        <div className="horizon" />
        <div className="camp-maininfo">
            <p>주소 : {props.addr1} {props.addr2}</p>
            <p>전화번호 : {props.tel ? props.tel : '정보 없음'}</p>
            <a href={`${props.homepage}`} target='blank'>홈페이지</a>
        </div>
        <div className="horizon" />
        <div className="camp-info">
            <h2>{props.lineIntro ? `"${props.lineIntro}"` : '캠핑장 소개글 없음'}</h2>
            <p>{props.intro ? props.intro : ''}</p>
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
    .camp-onduty{
        float: right;
        margin-right: 50px;
        padding: 5px;
        border-radius: 20px;
        background-color: var(--main-color-orange-light);
        color: white;
    }
    .camp-disduty{
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
        margin-top: 20px; margin-bottom: 20px;
    }
    .camp-info{
        text-align: center;
        margin-top: 100px; margin-bottom: 100px;
        h2 {
            font-size: 25px;
            font-weight: bold;
            margin-bottom: 50px;
        }
        p {
            margin: 30px;
            word-spacing: 3px;
            line-height: 25px;
        }
    }
    .camp-maininfo{
        text-align: center;
        a{
            border-radius: 20px;
            display: inline-block;
            color: white;
            padding: 10px;
            background-color: var(--main-color-orange);
            &:hover{
                background-color: var(--main-color-orange-light);
            }
        }
    }
`;

export default CampPageContext;