import styled from "styled-components";

const CampPageContext = () => {
  return(
    <div>
      <CampContext>
        <h2 className="camp-title">캠핑장 이름</h2>
        <div className="camp-title-icon"></div>
        <div className="horizon" />
        <h3>주소 : </h3>
        <h3>전번 : </h3>
        <div className="horizon" />
      </CampContext>
    </div>
  );
};

const CampContext = styled.div`
    max-width: 600px;
    height: 600px;
    text-align: center;
    .camp-title {
        font-weight: bold;
        font-size: 2em;
        text-align: center;
    }
    .horizon {
        width: 100%;
        height: 2px;
        background-color: var(--main-color-orange);
        margin: 0;
    }
    .camp-icon-container {
        justify-content: center;
        display: flex;
        div {
            width: 100px;
            height: 100px;
            padding: 30px;
            margin: 60px;
            background: var(--main-color-orange);
            border-radius: 120px;
            &:hover {
                background-color: var(--main-color-orange-light);
            }
        }
    }
    h2 {
        margin: 30px;
    }
    h3 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export default CampPageContext;