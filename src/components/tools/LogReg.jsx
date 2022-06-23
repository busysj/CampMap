import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faComment } from "@fortawesome/free-solid-svg-icons"; // 카카오톡 제거
import { useState } from "react";
import { auth } from "../../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

/*const ModalBackground = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.3);
`; 모달창 오픈시 화면 반투명*/

const Taps = styled.div`
    //모달창
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 40%;
    top: 300%;
    width: 400px;
    height: 600px;
    margin: 0 auto;
    background: white;
    text-align: center;
    min-height: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const XbtnP = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: row;
`;
const Xbtn = styled.button`
    font-size: 25px;
    box-sizing: border-box;
    height: 10px;
    width: 10px;
    border: none;
    background: white;
    z-index: 2;
`;

const TapList = styled.div`
    display: flex;
    justify-content: center;
    .active {
        background: #ff8807;
        color: white;
    }
`;
const BtnTap = styled.button`
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
`;

const ContentTabs = styled.div`
    position: relative;
    padding: 0 15px 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const TapContant = styled.div`
    background-color: white;
    color: black;
    height: 100%;
`;

const Title = styled.h2`
    text-align: center;
    margin-top: 20px;
`;

const InputContainer = styled.div`
    margin: 0 auto;
    position: relative;
    padding: 0 20px 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const LoginForm = styled.form``;
const SignUpForm = styled.form``;
const Input = styled.input`
    margin-top: 30px;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    border: 1px solid #e5e5e5;
    padding: 9px 12px;
    outline: none;
    box-sizing: border-box;
    background-color: #f8f8f8;
    ::placeholder {
        color: #999999;
    }
`;
const LogniBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 14px;
    padding: 13px 30px;
    cursor: pointer;
    background-color: #ff8807;
    color: white;
    line-height: 1px;
    margin-top: 40px;
    margin-bottom: 12px;
    border-radius: 3px;
    border-style: none;
    font-weight: bold;
`;
const GoogleBtn = styled.button`
    margin-bottom: 30px;
    background-color: #548bf5;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-weight: bold;
    border: none;
    text-align: center;
    cursor: pointer;
`;
const GoogleText = styled.div`
    width: 300px;
    font-size: 15px;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
`;

// const KakaoiBtn = styled.button`
//     background-color: #feec34;
//     color: #4e3821;
//     height: 40px;
//     border-radius: 3px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-sizing: border-box;
//     margin-bottom: 10px;
//     font-weight: bold;
//     border: none;
//     cursor: pointer;
// `;

// const KakaoText = styled.div`
//     width: 300px;
//     font-size: 15px;
//     text-align: center;
//     display: inline-block;
//     box-sizing: border-box;
// `;

const SignupBtn = styled.button`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 30px;
    background-color: #ff8807;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-weight: bold;
    border: none;
    text-align: center;
    cursor: pointer;
`;

// const Google = styled.button`
//     margin-bottom: 30px;
//     background-color: #548bf5;
//     color: white;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 3px;
//     box-sizing: border-box;
//     margin-bottom: 10px;
//     font-weight: bold;
//     border: none;
//     text-align: center;
//     cursor: pointer;
// `;

const LogReg = ({ openModal, setOpenModal, index, setIndex }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    //사용자가 인증되었는지 페이지 로드 시 확인
    // useEffect(() => {
    //     onAuthStateChanged(auth, (userAuth) => {
    //         if (userAuth) {
    //             // 사용자가 로그인되어 있으면 사용자의 세부 정보를 redux에 보내고
    //             // 현재 사용자를 상태에 저장합니다.
    //             dispatch(
    //                 login({
    //                     email: userAuth.email,
    //                     uid: userAuth.uid,
    //                     displayName: userAuth.displayName,
    //                     photoUrl: userAuth.photoURL,
    //                 })
    //             );
    //         } else {
    //             dispatch(logout());
    //         }
    //     });
    // }, []);

    const loginToApp = (e) => {
        e.preventDefault();
        console.log("로그인시도");
        // Firebase로 기존 사용자 로그인
        signInWithEmailAndPassword(auth, email, password)
            // 성공적인 인증 후 auth 객체를 반환합니다.
            // userAuth.user는 모든 사용자 세부 정보를 포함합니다.
            .then((userAuth) => {
                // 사용자 정보를 redux 상태에 저장
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        // photoUrl: userAuth.user.photoURL,
                    })
                );
                alert("로그인 완료");
                console.log(`로그인 완료`);
                setOpenModal(false);
                navigator("/");
            })

            // 오류가 있는 경우 표시
            .catch((err) => {
                alert(err);
            });
    };

    // 필수 항목으로 만들기 위해 이름 필드에 대한 빠른 확인
    const register = (e) => {
        e.preventDefault();
        if (!nickname) {
            return alert("닉네임을 입력하시오~");
        } else if (!email) {
            return alert("이메일을 입력하시오~");
        } else if (!password) {
            return alert("비밀번호를 입력하시오~");
        }
        // Firebase로 새 사용자 생성
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                // 표시 이름과 사진으로 새로 생성된 사용자를 업데이트합니다.
                updateProfile(userAuth.user, {
                    displayName: nickname,
                    // photoURL: profilePic,
                })
                    .then(
                        // redux 상태에서 지속성을 위해 사용자 정보를 전달합니다.

                        alert("회원가입완료"),
                        console.log(`회원가입 완료`),
                        setOpenModal(false)
                    )

                    .catch((error) => {
                        console.log("user not updated");
                    });
            })
            .catch((err) => {
                alert(err);
            });
    };

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(
                    login({
                        email: result.user.email,
                        uid: result.user.uid,
                        displayName: result.user.displayName,
                    })
                );
                console.log("구글, 디스패치완료");
                navigator("/");
                setOpenModal(false);
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error);
            });
    };

    if (!openModal) return null;

    return (
        <Taps>
            <XbtnP>
                <Xbtn>
                    {" "}
                    <FontAwesomeIcon
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        icon={faXmark}
                        style={{
                            color: "black",
                            marginLeft: "-36px",
                            marginTop: "8px",
                            cursor: "pointer",
                            zIndex: "1",
                        }}
                    />{" "}
                </Xbtn>
            </XbtnP>
            <TapList>
                <BtnTap
                    className={`${index === 0 ? "active" : null}`}
                    onClick={() => setIndex(0)}
                >
                    로그인
                </BtnTap>
                <BtnTap
                    className={`${index === 1 ? "active" : null}`}
                    onClick={() => setIndex(1)}
                >
                    회원가입
                </BtnTap>
            </TapList>
            <ContentTabs>
                <TapContant hidden={index !== 0}>
                    <InputContainer>
                        <Title>로그인</Title>
                        <LoginForm onSubmit={loginToApp}>
                            <Input
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="닉네임 (필수)"
                                type="text"
                                required
                            />
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일 주소"
                                type="email"
                                required
                            />
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호"
                                type="password"
                                required
                            />
                            <LogniBtn type="submit">로그인</LogniBtn>
                        </LoginForm>
                        <GoogleBtn>
                            {" "}
                            <FontAwesomeIcon
                                icon={faGoogle}
                                style={{ width: "24px", height: "25px" }}
                            />
                            <GoogleText onClick={googleSignIn}>
                                Google 계정으로 로그인
                            </GoogleText>{" "}
                        </GoogleBtn>
                        {/* <KakaoiBtn>
                            <FontAwesomeIcon
                                icon={faComment}
                                style={{ width: "24px", height: "25px" }}
                            />
                            <KakaoText>카카오 계정으로 로그인</KakaoText>{" "}
                        </KakaoiBtn> */}
                    </InputContainer>
                </TapContant>

                <TapContant hidden={index !== 1}>
                    <InputContainer>
                        <Title>회원가입</Title>
                        <SignUpForm onSubmit={register}>
                            <Input
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="닉네임 (필수)"
                                type="text"
                                required
                            />
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일 주소"
                                type="email"
                            />
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호"
                                type="password"
                                required
                            />
                            <SignupBtn type="submit">회원가입 완료</SignupBtn>
                        </SignUpForm>
                        {/*<Google>
              <FontAwesomeIcon
                icon={faGoogle}
                style={{ width: "24px", height: "25px" }}
              />
              <GoogleText>Google 등록</GoogleText>
          </Google>*/}
                    </InputContainer>
                </TapContant>
            </ContentTabs>
        </Taps>
    );
};

export default LogReg;
