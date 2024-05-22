import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>멋쟁이 사자가 당신을 기다리고 있습니다.</h1>

      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </>
  );
};

export default NotFound;
