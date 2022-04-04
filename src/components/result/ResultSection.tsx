/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ResultSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MainTitle>당신이 개발자라면?</MainTitle>
        <MainImage src="/images/Infra.png" />
        <RankTitle>1위</RankTitle>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section``;

const Wrapper = styled.div`
  max-width: 600px;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const MainTitle = styled.h1`
  text-align: center;

  width: 100%;
  margin-top: 16px;
  padding: 20px 0px;

  font-size: 32px;
  font-weight: bold;
  box-sizing: border-box;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const RankTitle = styled.h2`
  text-align: center;

  width: 100%;
  padding: 8px 0px;

  font-size: 24px;
  font-weight: bold;

  box-sizing: border-box;
`;

export default ResultSection;
