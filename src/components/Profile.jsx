import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/likelion.png";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  width: 480px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-left: 500px;
`;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const ProfileWrapper = styled.div`
  //여기는 프로필 글씨 전체 감싸는 부분
  display: block;
  text-align: reverse-end;
  margin-left: 0;
`;
const ProfileName = styled.h3`
  // likelion_12th_frontend 들어가는 부분 , 두꺼운 글씨
  display: block;
  width: 100%;
  text-align: reverse-end;
  margin: 10px 5px 3px 0;
`;
const SubText = styled.p`
  // 멋쟁이 사자처럼 12기 여러분 화이팅.. 부분
  display: block;
  width: 100%;
  font-size: small;
  font-weight: 100;
  margin-bottom: 5px;
`;
const CardNumber = styled.p`
  // 게시물 몇개인지 표시하는 부분
  margin-top: 5px;
  font-weight: 600;
  font-size: medium;
`;

const Profile = () => {
  const [cardNum, setCardNum] = useState("");

  useEffect(() => {
    axios
      .get("http://3.36.127.43:8080/imageSize")
      .then((res) => {
        console.log(res);
        setCardNum(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Wrapper>
      <ProfileImage src={img}></ProfileImage>
      <ProfileWrapper>
        <ProfileName>likelion_12th_frontend</ProfileName>
        <SubText>
          멋쟁이사자처럼 12기 여러분 화이팅 어른사자로 폭풍성장 중
        </SubText>
        <CardNumber>게시물 {cardNum}개</CardNumber>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
