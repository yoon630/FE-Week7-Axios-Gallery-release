import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import img from "../assets/likelion.png";

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
const NotFound = () => {
  // const navigate = useNavigate();
  return (
    <BackGround>
      <Wrapper>
        <h1>멋쟁이 사자가 당신을 기다리고 있습니다.</h1>
        <img src={img}></img>
        <Link to="/"> 홈으로 돌아가기</Link>
      </Wrapper>
    </BackGround>
  );
};

export default NotFound;
