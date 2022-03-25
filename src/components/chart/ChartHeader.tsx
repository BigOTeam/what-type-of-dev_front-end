import styled from '@emotion/styled';

import { ChartResultTitleType } from '../../types/chartTypes';

interface chartTitleProps {
  chartTitle: ChartResultTitleType;
}

const ChartHeader: React.FC<chartTitleProps> = ({ chartTitle }) => {
  return (
    <Container>
      <Wrapper>
        <TitleHead>당신이 개발자라면 설문 통계</TitleHead>
        <TitlePeriod>설문 조사 기간 : {chartTitle.surveyPeriod}</TitlePeriod>
        <TitleInfo>
          {chartTitle.responseUserCount}
          {chartTitle.statisticSummary}
        </TitleInfo>
      </Wrapper>
    </Container>
  );
};

export default ChartHeader;

const Container = styled.section`
  text-align: center;
  color: #ffffff;
  background: url(/images/chart/title.png);
  opacity: 0.55;
`;

const Wrapper = styled.div`
  padding: 32px 48px;
  opacity: 1;

  @media (max-width: 767px) {
    padding: 32px 48px 28px;
  }
  @media (max-width: 575px) {
    padding: 32px 48px 24px;
  }
`;

const TitleHead = styled.h1`
  margin: 20px 0px 28px;
  font-size: 52px;
  font-weight: bold;

  @media (max-width: 767px) {
    margin: 20px 0px 24px;
    font-size: 44px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

const TitlePeriod = styled.h2`
  padding-top: 8px;
  font-size: 24px;

  @media (max-width: 767px) {
    padding-top: 4px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const TitleInfo = styled.h2`
  margin: 24px 32px 16px;
  font-size: 18px;
  line-height: 150%;

  @media (max-width: 767px) {
    margin: 24px 20px 16px;
  }
  @media (max-width: 575px) {
    margin: 16px 16px 16px;
    font-size: 14px;
  }
`;