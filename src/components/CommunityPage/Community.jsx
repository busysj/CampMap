import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Community.css";
import { useNavigate } from "react-router-dom";
import WriteModal from "./WriteModal";
import BoardList from "./BoardList";

const Community = () => {
    const [user, setUser] = useState(null);
    const navigator = useNavigate();

    return (
        <div className="total">
            <h1>커뮤니티 페이지</h1>
            <div className="wirte_section_header">
                <WriteModal className="write_btn">글쓰기</WriteModal>
            </div>
            <div className="best_section">
                <div className="description">
                    <h1>flexbox이용 카드컴포넌트</h1>
                    <p>글내용 일부</p>
                    <p>유저이름</p>
                </div>
                <div className="description">
                    <h1>flexbox이용 카드컴포넌트</h1>
                    <p>글내용 일부</p>
                    <p>유저이름</p>
                </div>
                <div className="description">
                    <h1>flexbox이용 카드컴포넌트</h1>
                    <p>글내용 일부</p>
                    <p>유저이름</p>
                </div>
                <div className="description">
                    <h1>flexbox이용 카드컴포넌트</h1>
                    <p>글내용 일부</p>
                    <p>유저이름</p>
                </div>
            </div>

            {user == null ? (
                <div className="logout_section">
                    <p>
                        로그아웃 상태입니다 <br />
                        로그인하여 글을 작성 해보세요
                    </p>
                </div>
            ) : (
                <div className="wirte_section_middle">
                    글작성버튼 ? / 로그인 안했으면 로그인하라고 띄워주기
                </div>
            )}

            <div className="category_home">
                <div className="category_section_header">
                    <Nav variant="tabs" defaultActiveKey="/community">
                        <Nav.Item>
                            <Nav.Link href="/community">전체</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">노지캠</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">캠핑 음식</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">장비</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">노하우&꿀팁</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                추가 구상
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="category_section_body">
                    <BoardList />
                </div>
                <div className="category_section_footer">
                    글리스트 밑에 글작성 버튼
                    <div className="wirte_section_end">
                        <button className="write_btn">글쓰기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
