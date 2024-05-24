import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Comment from "./Comment";
import axios from "axios";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const BackGround = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

const ImageName = styled.h1`
  display: block;
  text-align: center;
  align-items: center;
  /* justify-content: center; */
  margin: 5px 0px 5px 0px;
`;
const ImageText = styled.p`
  display: block;
  font-size: medium;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image = styled.img`
  width: 600px;
  height: 450px;
  margin: 10px;
`;

const Detail = () => {
  const { imgId } = useParams();
  const location = useLocation();
  const { img, name, text } = location.state || {};
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!imgId) return;
    console.log("Detail component mounted");
    console.log("imgId", imgId);
    console.log("location state", location.state);

    axios
      .get(`http://3.36.127.43:8080/${imgId}/comments`)
      .then((res) => {
        console.log("Detail API", res);
        setComments(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [imgId]);

  if (!name || !text || !img) {
    return <div>Loading...</div>;
  }
  return (
    <BackGround>
      <Wrapper>
        <ImageName>{name}</ImageName>
        <ImageText>{text}</ImageText>
        <Image src={img}></Image>

        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            text={comment.commentBody}
          ></Comment>
        ))}
      </Wrapper>
    </BackGround>
  );
};

export default Detail;
