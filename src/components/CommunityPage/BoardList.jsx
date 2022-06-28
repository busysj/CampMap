import React from "react";
import { useEffect } from "react"; // db나 api에서 가져올때 항상 useEffect 사용
import { useState } from "react"; // db나 api에서 값을 가져와서 state에 저장
import { db } from "../../firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import postImg from "../../assets/thumbnail_post_IMG.png";
import { useNavigate } from "react-router-dom";
/*
async function foo() {
    console.log("start");
    try {
        const querySnapshot = await getDocs(collection(db, "board"));
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, "=>", doc.data().name);
            console.log(querySnapshot.doc);
        });
        console.log("end");
    } catch (err) {
        console.log("Error getting documents", err);
    }
}
foo();
*/
/*      🧡 getData() : 데이터를 한 번 가져옵니다.
        ✅ onSnapshot() : 실시간 업데이트 수신 
        ✅ db 변경사항을 감지할때마다 자체적으로 업데이트되는 hook과 비슷함
        ✅ 5초마다 데이터 가져와야하고 그런거 안해도됨 (소켓과같은hook)
        */

const BoardList = () => {
    const navigator = useNavigate();
    const [boards, setBoards] = useState([]);
    const [id, setId] = useState([]);
    const [title, setTitle] = useState([]);
    const [text, setText] = useState([]);
    const [nickname, setNickname] = useState([]);

    console.log(boards);

    useEffect(
        () =>
            //두개의 인자를 가지고 (첫번째는 사용할 컬렉션 이름, 두번째는 어느db에서 가져올건지 컬렉션이름,콜백함수)
            onSnapshot(collection(db, "board"), (snapshot) =>
                //console.log(snapshot.docs.map((doc) => doc.data()));
                //useEffect를 종료하기 위해서 호출하는 함수를 반환할것임
                setBoards(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
            ),
        [],
    ); // 구성요소가 마운트 될때, 한번만 실행하기 위함 => [ ] 사용

    return (
        <div>
            <h1>😊✅💛게시판 글리스트</h1>

            {boards.map((board) => (
                <div className="board_item" key={board.id}>
                    <div className="board_post">
                        <div className="thumbnail_author">
                            <img src="" alt="author_img" className="author_img" />
                        </div>
                        <div className="board_header">
                            <em className="name_author">{board.nickname}user 아이디</em>
                            <p className="time">{new Date().getFullYear()} 몇시에 작성함</p>
                        </div>
                        <div className="board_body">
                            <strong>{board.title}</strong>
                            <p>{board.text}</p>
                        </div>
                        <div className="comments">
                            <span className="like">공감 99</span>
                            <span className="reply">댓글 19</span>
                        </div>
                    </div>
                    <div className="thumbnail_post">
                        <img src={postImg} alt="thumbnail_post" className="thumbnail_post" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BoardList;
