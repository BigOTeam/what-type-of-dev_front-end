import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const TestStartSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <CharacterImg
            src="/images/common/self-introduction_character.png"
            alt="메인 케릭터 이미지"
          />
        </ImgWrapper>
        <Box>
          <Head>당신이 개발자라면?</Head>
          <Description>누적 테스트 응답자 수 50명</Description>
          <LinkWrapper>
            <LinkButton to="#">테스트 시작</LinkButton>
          </LinkWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 120px 16px;
  background-color: #e8f4fd;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const CharacterImg = styled.img`
  overflow: hidden;
  width: 460px;
  height: 333px;
  border-radius: 20px;

  @media (max-width: 991px) {
    width: 460px;
    height: 280px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Head = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #1d87da;

  @media (max-width: 991px) {
    font-size: 38px;
  }
  @media (max-width: 575px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  margin: 40px 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;

  @media (max-width: 991px) {
    margin: 32px 0;
    font-size: 22px;
  }
  @media (max-width: 575px) {
    margin: 28px 0;
    font-size: 18px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: 2px solid #2196f3;
  border-radius: 25px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 600;
  color: #2196f3;
  cursor: pointer;
  transition: 0.08s all ease-in-out;

  &:hover {
    background-color: #2196f3;
    color: #fff;
  }

  @media (max-width: 991px) {
    width: 180px;
    height: 48px;
    font-size: 18px;
  }
`;

export default TestStartSection;
