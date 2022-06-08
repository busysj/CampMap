import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Community.css";

const Community = () => {
    const [user, setUser] = useState(null);

    return (
        <div>
            <h1>커뮤니티 페이지</h1>
            <div className="wirte_section_header">
                <button>글작성버튼</button>
            </div>
            <div className="best_section">
                <div>이미지1</div>
                <div>이미지2</div>
                <div>이미지3</div>
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
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="category_section_body">글리스트들</div>
                    <div className="category_section_footer">
                        글리스트 밑에 글작성 버튼
                        <div className="wirte_section_end">글작성버튼</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
