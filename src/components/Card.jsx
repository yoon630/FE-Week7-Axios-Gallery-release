import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 여기에 Card 낱개용 style 만들기
const Wrapper = styled.div`
  justify-content: center;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 230px;
  width: 230px;
`;
const ImageBox = styled.div`
  //이건 이미지 감싸는 부분
  width: 220px;
  height: 170px;
`;

const Image = styled.img`
  //이게 이미지 자체 스타일
  width: 100%;
  height: 100%;
`;
const TitleContainer = styled.div`
  display: block;
  height: 30px;
`;
const MainTitle = styled.p`
  display: block;
  width: 100%;
  font-weight: 600;
  font-size: 11px;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: reverse-end;
`;
const SubTitle = styled.p`
  // 글씨 색깔 회색
  // 글씨 작게
  display: block;
  width: 100%;
  font-size: x-small;
  font-weight: 100;
  margin-top: 5px;
  margin-bottom: 5px;
  color: gray;
`;

export default function Card({ img, name, id, text }) {
  const navigate = useNavigate();

  return (
    <Wrapper id={id} onClick={() => navigate(`/detail/${id}`)}>
      <ImageBox>
        <Image src={img}></Image>
      </ImageBox>
      <TitleContainer>
        <MainTitle>{name}</MainTitle>
        <SubTitle>{text}</SubTitle>
      </TitleContainer>
    </Wrapper>
  );
}
