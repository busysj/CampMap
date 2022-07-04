import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import "./DetailPage.css";

const DetailPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        id && getBlogDetail();
    }, [id]);

    // firebase 문서 가져오기
    const getBlogDetail = async () => {
        const docRef = doc(db, "blog", id);
        const blogDetail = await getDoc(docRef);
        setBlog(blogDetail.data());
    };

    return (
        <div className="single">
            <div
                className="blog-title-box"
                style={{ backgroundImage: `url('${blog?.imgUrl}')` }}
            >
                <div className="overlay"></div>
                <div className="blog-title">
                    <span>{blog?.timestamp.toDate().toDateString()}</span>
                    <span style={{ fontWeight: "bold" }}>
                        &nbsp; By &nbsp;{blog?.author}
                    </span>
                    <h2>{blog?.title}</h2>
                </div>
            </div>
            <div className="container-fluid pb-4 pt-4 padding blog-single-content">
                <div className="container padding">
                    <div className="row mx-0">
                        <div className="col-md-8">
                            <p className="text-start">{blog?.description}</p>
                        </div>
                        <div className="col-md-3">
                            <h2>태그</h2>
                            <p>노지캠핑</p>
                            <p>장비</p>
                            <p>음식</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
