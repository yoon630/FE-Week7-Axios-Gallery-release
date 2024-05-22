import styled from "styled-components";

// 여기에 Card 낱개용 style 만들기
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
`;
const ImageBox = styled.div`
  //이건 이미지 감싸는 부분
`;
const Image = styled.img`
  //이게 이미지 자체 스타일
`;
const TitleContainer = styled.div`
  display: flex;
`;
const MainTitle = styled.h1``;
const SubTitle = styled.p`
  // 글씨 색깔 회색
  // 글씨 작게
`;

const Card = () => {
  return (
    <Wrapper>
      <ImageBox>여기에 이미지</ImageBox>
      <TitleContainer>
        <MainTitle>멋쟁이 사자처럼 12기</MainTitle>
        <SubTitle>백엔드 커리큘럼 소개</SubTitle>
      </TitleContainer>
    </Wrapper>
  );
};

export default Card;
