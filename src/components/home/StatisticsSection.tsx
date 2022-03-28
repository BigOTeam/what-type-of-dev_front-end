import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const StatisticsSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Head>테스트 종합 통계</Head>
          <Description>흥미로운 통계 결과들을 확인해보세요.</Description>
          <LinkWrapper>
            <LinkButton to="#">통계 보러가기</LinkButton>
          </LinkWrapper>
        </Box>
        <ImgWrapper>
          <CharacterImg
            src="/images/common/web_character.png"
            alt="메인 케릭터 이미지"
          />
        </ImgWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 120px 0;
  background-color: #bcdffb;
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
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

const CharacterImg = styled.img`
  overflow: hidden;
  width: 460px;
  height: 333px;
  border-radius: 20px;
`;

const Head = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #1d87da;
`;

const Description = styled.p`
  margin: 40px 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;
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
`;

export default StatisticsSection;
