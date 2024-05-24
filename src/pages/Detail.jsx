import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Comment from "./Comment";
import axios from "axios";
import styled from "styled-components";
// import { Outlet } from "react-router-dom";

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

const Container = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  border: 0.5px solid #dcdcdc;
  border-radius: 10px;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const AddComment = styled.input`
  display: flex;
  width: 400px;
  height: 40px;
  border: none;
  margin: 5px;
  padding: 1px;
  outline: none;
`;
const NewCommentBtn = styled.button`
  display: flex;
  width: 60px;
  height: 40px;
  border: none;
  margin: 5px;
  padding: 1px;
  font-size: small;
  font-weight: 600;
  text-align: center;
  background: none;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #0064ff;
  }
`;

const Detail = () => {
  const { imgId } = useParams();
  const location = useLocation();
  const { img, name, text } = location.state || {};
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  //comment가져오는 부분 API GET
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

  // Comment Delete하는 부분 API DELETE
  const deleteCommentHandler = (id) => {
    axios
      .delete(`http://3.36.127.43:8080/${imgId}/comments/${id}`)
      .then((res) => {
        console.log("Delete API rendering", res);
        setComments((prev) => prev.filter((comment) => comment.id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //Comment 새로 Posting 하는 부분
  const addCommentHandler = () => {
    if (!newComment.trim()) return;

    axios
      .post(`http://3.36.127.43:8080/${imgId}/comments`, {
        commentBody: newComment,
      })
      .then((res) => {
        setComments((prev) => [...prev, res.data]);
        setNewComment("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (!name || !text || !img) {
    return <div>Loading...</div>;
  }
  return (
    <BackGround>
      <Wrapper>
        <ImageName>{name}</ImageName>
        <ImageText>{text}</ImageText>
        <Image src={img}></Image>
        <Container>
          <AddComment
            type="text"
            placeholder="댓글 작성.."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></AddComment>
          <NewCommentBtn onClick={addCommentHandler}>게시</NewCommentBtn>
        </Container>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            text={comment.commentBody}
            onDelete={deleteCommentHandler}
          ></Comment>
        ))}
      </Wrapper>
    </BackGround>
  );
};

export default Detail;
