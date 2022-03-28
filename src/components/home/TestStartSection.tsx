import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const TestStartSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <MainCharacterImg
            src="/images/common/self-introduction_character.png"
            alt="메인 케릭터 이미지"
          />
        </ImgWrapper>
        <Box>
          <Head>당신이 개발자라면?</Head>
          <TestStatus>누적 테스트 응답자 수 50명</TestStatus>
          <LinkWrapper>
            <TestStartLink to="#">테스트 시작</TestStartLink>
          </LinkWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 100px 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 900px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCharacterImg = styled.img`
  overflow: hidden;
  max-width: 500px;
  height: 333px;
  border-radius: 20px;
`;

const Head = styled.h1`
  font-size: 38px;
  font-weight: 600;
  color: #1d87da;
`;

const TestStatus = styled.p`
  margin: 36px 0;
  font-size: 22px;
  font-weight: 500;
  color: #333;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestStartLink = styled(Link)`
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
`;

export default TestStartSection;
