import React from "react";
//import postImg from "../../assets/thumbnail_post_IMG.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

/*      🧡 getData() : 데이터를 한 번 가져옵니다.
        ✅ onSnapshot() : 실시간 업데이트 수신 
        ✅ db 변경사항을 감지할때마다 자체적으로 업데이트되는 hook과 비슷함
        ✅ 5초마다 데이터 가져와야하고 그런거 안해도됨 (소켓과같은hook)
        */

const BoardList = ({ blogs, user, handleDelete, handleUpdate }) => {
  /*const navigator = useNavigate();
  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const [nickname, setNickname] = useState([]);

  const userId = user?.uid;*/
  //console.log(`user`, user);

  // 🤣id 있을 경우 해당 blog 삭제할수 있도록 해야함
  // 💦그리고 useId와 만든사용자의 id도 일치해야함
  // 😥id가 같은사람만 delete, edit 버튼 생성되도록함
  return (
    <div>
      {blogs.map((item) => (
        <div className="board_item" key={item.id}>
          <div className="board_post">
            {/* <div className="thumbnail_author">
                            <img src="" alt="author_img" className="author_img" />
                        </div> */}
            <div className="board_header">
              <em className="name_author">{item.author}</em>
              <span className="time">
                {item.timestamp.toDate().toDateString()} 작성
              </span>
            </div>
            <div className="board_body">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <div className="comments">
              <span className="like">공감 99</span>
              <span className="reply">댓글 19</span>
              <Link to={`/detail/${item.id}`}>
                <button className="write_btn" style={{ marginLeft: "15px" }}>
                  더보기
                </button>
              </Link>
              {/*
                            user가 로그인함 -> 이 id를 포함하는 사용자 있는지 확인 후 보여줌
                            item.userId -> firebase 쪽 id
                            user.uid -> 현재 로그인 한 id
                            */}
              {user?.uid && item.userId === user.uid && (
                <span>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                    size="2x"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                    size="2x"
                  />
                </span>
              )}
            </div>
          </div>
          <div className="thumbnail_post">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="thumbnail_post"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardList;
