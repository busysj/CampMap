import React from "react";
import Pagination from "react-bootstrap/Pagination";

const BoardList = () => {
    return (
        <div>
            <h1>게시판 글리스트</h1>
            <p>
                {" "}
                1) sort : 게시물 최신순/오래된순/ 댓글순? / 추천순? 으로
                정렬예정
            </p>
            <p> 2) 검색기능 : 게시물 제목을 기준으로 검색</p>
            <p> 3) 게시물 페이징 기능 (아래하단) </p>

            <Pagination>
                {/* <Pagination.First />
                <Pagination.Prev /> */}
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item disabled>{11}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
};

export default BoardList;
