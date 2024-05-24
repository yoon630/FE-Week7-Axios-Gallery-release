import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 5px 0 5px 0;
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
  font-weight: 400;
  font-size: small;
  border: none;
  text-align: center;
  background: none;
  margin-left: 5px;
  color: gray;

  &:hover {
    cursor: pointer;
    color: #0064ff;
  }
`;

export default function Comment({ id, text, onDelete }) {
  return (
    <Wrapper>
      {/* <AddComment type="text" placeholder="댓글 작성.."></AddComment> */}
      <Container>
        <CommentId>{id}</CommentId>
        <CommentText>{text}</CommentText>
        <DeleteBtn onClick={() => onDelete(id)}>삭제</DeleteBtn>
      </Container>
    </Wrapper>
  );
}
