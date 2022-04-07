import styled from '@emotion/styled';

import { ChartHeaderType } from '../../types/chartTypes';

interface ChartTitleProps {
  titleData: ChartHeaderType;
}

const START_DATE = '2022/04/07';

const ChartTitle: React.FC<ChartTitleProps> = ({ titleData }) => {
  return (
    <Container>
      <Wrapper>
        <Head>당신이 개발자라면 설문 통계</Head>
        <Period>
          설문 조사 기간 : {START_DATE} ~ {titleData.endDate}
        </Period>
        <Info>
          {`${titleData.userCount}명의 응답자(현업 개발자: ${titleData.careerCount}명, 비개발자: ${titleData.newCount}명)가
          답변을 했습니다. `}
          <br />
          다른 사람들의 의견을 구경하고 내 답변과 비교해보세요!
        </Info>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  margin: 20px 0;
  border-radius: 14px;
  background-color: #97cdf5;
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 52px 48px 48px;

  @media (max-width: 767px) {
    padding: 32px 48px 28px;
  }
  @media (max-width: 575px) {
    padding-bottom: 24px;
  }
`;

const Head = styled.h1`
  margin-bottom: 36px;
  font-size: 52px;
  font-weight: 700;

  @media (max-width: 767px) {
    margin-bottom: 28px;
    font-size: 44px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

const Period = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const Info = styled.h2`
  margin: 0 32px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  br {
    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 575px) {
    margin: 0 16px;
    font-size: 14px;
  }
`;

export default ChartTitle;
