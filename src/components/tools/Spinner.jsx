import React from "react";
import styled from "styled-components";

const Spinner = () => {
    return (
        <SpinnerBoarder className="spinner-border text-primary mt-5 ">
            <span className="visually-hidden">Loading...</span>
        </SpinnerBoarder>
    );
};

export default Spinner;

const SpinnerBoarder = styled.div`
    position: absolute; top: 50%; left: 50%;
    width: 3rem;
    height: 3rem;
    margin-right: auto;
    margin-left: auto;
`;
