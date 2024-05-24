import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  border: 0.5px solid #dcdcdc;
  border-radius: 10px;
  text-align: center;
`;

const CommentId = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  font-weight: 500;
  font-size: small;
  margin-right: 5px;
  margin-left: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
const CommentText = styled.div`
  display: flex;
  width: 450px;
  height: 30px;
  font-weight: 400;
  font-size: small;
  text-align: center;
  align-items: center;
  padding: 5px;
`;

const DeleteBtn = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 60px;
  height: 30px;
  font-weight: 100;
  font-size: small;
  border: none;
  text-align: center;
  background: none;
  margin-left: 5px;
  color: gray;
`;

const AddComment = styled.input`
  display: flex;
  width: 600px;
  height: 40px;
  border: none;
  margin: 5px;
  padding: 1px;
  border: 0.5px solid #dcdcdc;
  border-radius: 10px;
`;

//삭제하는 버튼은 어케만들지,,,

export default function Comment({ id, text }) {
  return (
    <Wrapper>
      <AddComment type="text" placeholder="댓글 작성.."></AddComment>
      <Container>
        <CommentId>{id}</CommentId>
        <CommentText>{text}</CommentText>
        <DeleteBtn>삭제</DeleteBtn>
      </Container>
    </Wrapper>
  );
}

// const Comment= ({ id, text })=> {
//   return (
//     <Container>
//       <></>
//       <CommentId>{id}</CommentId>
//       <CommentText>{text}</CommentText>
//     </Container>
//   );
// }
