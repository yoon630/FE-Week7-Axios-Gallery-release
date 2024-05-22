import React from "react";
import styled from "styled-components";
import img from "../assets/likelion.png";

const Wrapper = styled.div`
  display: flex;
  width: 420px;
  height: 100px;
`;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const ProfileWrapper = styled.div`
  //여기는 프로필 글씨 전체 감싸는 부분
  display: flex;
  text-align: center;
`;
const ProfileName = styled.h1`
  // likelion_12th_frontend 들어가는 부분 , 두꺼운 글씨
`;
const SubText = styled.p`
  // 멋쟁이 사자처럼 12기 여러분 화이팅.. 부분
`;
const CardNumber = styled.div`
  // 게시물 몇개인지 표시하는 부분
`;

const Profile = () => {
  return (
    <Wrapper>
      <ProfileImage src={img}></ProfileImage>
      <ProfileWrapper>
        <ProfileName>likelion_12th_frontend</ProfileName>
        <SubText>
          멋쟁이사자처럼 12기 여러분 화이팅 어른사자로 폭풍성장 중...
        </SubText>
        <CardNumber>게시물 몇개</CardNumber>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
