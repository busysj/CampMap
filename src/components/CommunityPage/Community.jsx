import React from "react";
import { Nav } from "react-bootstrap";
import "./Community.css";
import { useNavigate } from "react-router-dom";
import BoardList from "./BoardList";
import { useEffect } from "react"; // db나 api에서 가져올때 항상 useEffect 사용
import { useState } from "react"; // db나 api에서 값을 가져와서 state에 저장
import { db } from "../../firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import Spinner from "../tools/Spinner";

const Community = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  // const [user, setUser] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    //두개의 인자를 가지고 (첫번째는 사용할 컬렉션 이름, 두번째는 어느db에서 가져올건지 컬렉션이름,콜백함수)
    const unsub = onSnapshot(
      collection(db, "blog"),
      (snapshot) => {
        let list = [];
        //console.log(snapshot.docs.map((doc) => doc.data()));
        //useEffect를 종료하기 위해서 호출하는 함수를 반환할것임
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []); // 구성요소가 마운트 될때, 한번만 실행하기 위함 => [ ] 사용

  console.log("blogs", blogs);

  if (loading) {
    return <Spinner />;
  }

  // firebase 문서삭제
  const handleDelete = async (id) => {
    // 삭제 기능을 핸들링 할 수 있는 함수
    if (window.confirm("해당 블로그를 삭제하시겠습니까?")) {
      // 전역띄움
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blog", id));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="total">
      {/* <h1>커뮤니티 페이지</h1> */}
      <div className="wirte_section_header">
        <button
          className="write_btn"
          onClick={() => {
            navigator("/create");
          }}
        >
          글쓰기
        </button>
      </div>
      {/* <div className="best_section">
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
            </div> */}

      {user == null ? (
        <div className="logout_section">
          <p>
            로그아웃 상태입니다 <br />
            로그인하여 글을 작성 해보세요
          </p>
        </div>
      ) : (
        <div className="wirte_section_middle">
          <button
            className="write_btn"
            onClick={() => {
              navigator("/create");
            }}
          >
            글쓰기
          </button>
          / 로그인 안했으면 로그인하라고 띄워주기
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
          </Nav>
        </div>
        <div className="category_tags_sum">
          <div className="category_section_body">
            <BoardList blogs={blogs} user={user} handleDelete={handleDelete} />
          </div>
          {/* <div className="tags_section_body">Tags Most Popular</div> */}
        </div>
        {/* <div className="category_section_footer">
          글리스트 밑에 글작성 버튼
          <div className="write_section_end">
            <button
              className="write_btn"
              onClick={() => {
                navigator("/create");
              }}
            >
              글쓰기
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Community;
