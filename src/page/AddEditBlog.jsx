import React, { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { storage, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import styled from "styled-components";

import { collection, serverTimestamp, addDoc } from "firebase/firestore";

const initialState = {
    title: "",
    tags: [],
    trending: "no",
    category: "",
    description: "",
};

const categoryOption = ["전체", "노지캠", "캠핑 음식", "장비", "노하우&꿀팁"];

const AddEditBlog = ({ user }) => {
    const navigate = useNavigate();

    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);

    const { title, tags, trending, category, description } = form;

    // Storage 사용,  이미지 파일 업로드
    // firebase #업로드 관리 (🚨storage, firestore Database - 규칙 write : if true 변경하기!💛)
    // firebase #업로드 진행률 모니터링
    useEffect(() => {
        const uploadFile = () => {
            // 파일 업로드 함수 만들고
            const storageRef = ref(storage, file.name); //storage 저장 참조를 정의해야함(firebase 에서 가져온 storage, file.name전달)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed", //업로드 상태변경, 스냅샷으로 전달
                (snapshot) => {
                    // 진행 상황을 퍼센트로 체크
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("업로드... " + progress + "% 진행중..");
                    setProgress(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("업로드 중단");
                            break;
                        case "running":
                            console.log("업로드 중....");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setForm((prev) => ({ ...prev, imgUrl: downloadURL }));
                        // const { title, tags, trending, category, description } = form;
                        // 여기에 downloadURL을 넣어줌
                    });
                },
            );
        };
        file && uploadFile(); // 앞값이 trun여야함, flase이면 가차없이 false반환
        // 앞값이 true이면, 뒷값이 true이면 true반환, 뒷값이 flase이면 flase 반환
    }, [file]); // 파일 실행

    console.log("form", form);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleTags = (tags) => {
        setForm({ ...form, tags });
    };
    const handleTrending = (e) => {
        setForm({ ...form, trending: e.target.value });
    };
    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const handleSubmit = async (e) => {
        //form 전체값 submit 비동기로 보냄
        e.preventDefault();
        if (title && tags && trending && category && description) {
            //전부값이 들어가있어야 실행
            try {
                await addDoc(collection(db, "blog"), {
                    //
                    ...form,
                    timestamp: serverTimestamp(),
                    author: user.displayName,
                    userId: user.uid,
                });
            } catch (error) {
                console.log(error);
            }
        }
        navigate("/community");
    };
    console.log(user);
    console.log(user.displayName);

    return (
        <div className="container-fluid mb-4">
            <div className="container">
                <div className="col-12">
                    <div className="text-center heading py-2">Create Blog</div>
                </div>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <BlogForm onSubmit={handleSubmit}>
                            <div className="col-12 py-3">
                                <input
                                    type="text"
                                    className="form-control input-text-box"
                                    placeholder="Title"
                                    name="title"
                                    value={title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 py-3">
                                <ReactTagInput
                                    tags={tags}
                                    placeholder="Tags"
                                    onChange={handleTags}
                                />
                            </div>
                            <div className="col-12 py-3">
                                <Trending>Is it trending blog ?</Trending>
                                <div className="form-check-inline mx-2">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="radioOption"
                                        value="yes"
                                        checked={trending === "yes"}
                                        onChange={handleTrending}
                                    />
                                    <label htmlFor="radioOption" className="form-check-label">
                                        &nbsp;Yes&nbsp;
                                    </label>
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="radioOption"
                                        value="no"
                                        checked={trending === "no"}
                                        onChange={handleTrending}
                                    />
                                    <label htmlFor="radioOption" className="form-check-label">
                                        &nbsp;No&nbsp;
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 py-3">
                                <CatgDropdown value={category} onChange={onCategoryChange}>
                                    <option>Please select category</option>
                                    {categoryOption.map((option, index) => (
                                        <option value={option || ""} key={index}>
                                            {option}
                                        </option>
                                    ))}
                                </CatgDropdown>
                            </div>
                            <div className="col-12 py-3">
                                <DescriptionBox
                                    className="form-control"
                                    placeholder="Description"
                                    value={description}
                                    name="description"
                                    onChange={handleChange}
                                ></DescriptionBox>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    // 0번째 index 이미지 파일 업로드시 이 파일 얻을 수 있어서
                                />
                            </div>
                            <div className="col-12 py-3 text-center">
                                <SubmitBtn
                                    type="submit"
                                    disabled={progress !== null && progress < 100}
                                    // progress null이 아니고, 100보다 작을때 비활성화 된다
                                >
                                    Submit
                                </SubmitBtn>
                            </div>
                        </BlogForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEditBlog;

const BlogForm = styled.form`
    input:focus {
        border-color: var(--main-color-orange) !important;
    }
`;

const Trending = styled.p`
    float: left;
    color: #806a78 !important;
    font-size: px;
    margin: auto;
`;

const CatgDropdown = styled.select`
    width: 100%;
    border-radius: 4px;
    height: 45px;
    color: #806a78 !important;

    &:focus {
        outline: none !important; // 안먹힘 ㅠ
        border-color: var(--main-color-orange) !important;
    }
`;

const DescriptionBox = styled.textarea`
    @include border-radius(0!important); // 안먹힘 ㅠ
    height: 300px;
    resize: none;
    padding-top: 20px !important;
    letter-spacing: 1px !important;
    &:focus {
        border-color: var(--main-color-orange) !important;
    }
`;

const SubmitBtn = styled.button`
    background-color: var(--main-color-orange) !important;
    @include border-radius(0!important);
    color: #fff !important;
    padding: 10px 50px !important;
    font-size: 18px;
    font-weight: bold;
`;
