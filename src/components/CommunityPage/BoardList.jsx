import React from "react";
//import postImg from "../../assets/thumbnail_post_IMG.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

/*      ๐งก getData() : ๋ฐ์ดํฐ๋ฅผ ํ ๋ฒ ๊ฐ์ ธ์ต๋๋ค.
        โ onSnapshot() : ์ค์๊ฐ ์๋ฐ์ดํธ ์์  
        โ db ๋ณ๊ฒฝ์ฌํญ์ ๊ฐ์งํ ๋๋ง๋ค ์์ฒด์ ์ผ๋ก ์๋ฐ์ดํธ๋๋ hook๊ณผ ๋น์ทํจ
        โ 5์ด๋ง๋ค ๋ฐ์ดํฐ ๊ฐ์ ธ์์ผํ๊ณ  ๊ทธ๋ฐ๊ฑฐ ์ํด๋๋จ (์์ผ๊ณผ๊ฐ์hook)
        */

const BoardList = ({ blogs, user, handleDelete, handleUpdate }) => {
  /*const navigator = useNavigate();
  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const [nickname, setNickname] = useState([]);

  const userId = user?.uid;*/
  //console.log(`user`, user);

  // ๐คฃid ์์ ๊ฒฝ์ฐ ํด๋น blog ์ญ์ ํ ์ ์๋๋ก ํด์ผํจ
  // ๐ฆ๊ทธ๋ฆฌ๊ณ  useId์ ๋ง๋ ์ฌ์ฉ์์ id๋ ์ผ์นํด์ผํจ
  // ๐ฅid๊ฐ ๊ฐ์์ฌ๋๋ง delete, edit ๋ฒํผ ์์ฑ๋๋๋กํจ
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
                {item.timestamp.toDate().toDateString()} ์์ฑ
              </span>
            </div>
            <div className="board_body">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <div className="comments">
              <span className="like">๊ณต๊ฐ 99</span>
              <span className="reply">๋๊ธ 19</span>
              <Link to={`/detail/${item.id}`}>
                <button className="write_btn" style={{ marginLeft: "15px" }}>
                  ๋๋ณด๊ธฐ
                </button>
              </Link>
              {/*
                            user๊ฐ ๋ก๊ทธ์ธํจ -> ์ด id๋ฅผ ํฌํจํ๋ ์ฌ์ฉ์ ์๋์ง ํ์ธ ํ ๋ณด์ฌ์ค
                            item.userId -> firebase ์ชฝ id
                            user.uid -> ํ์ฌ ๋ก๊ทธ์ธ ํ id
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
