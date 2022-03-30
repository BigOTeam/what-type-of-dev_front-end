import styled from '@emotion/styled';

const SkeletonChartTitle: React.FC = () => {
  return (
    <TitleContainer>
      <TitleWrapper>
        <TitleHead>당신이 개발자라면 설문 통계</TitleHead>
      </TitleWrapper>
    </TitleContainer>
  );
};

const TitleContainer = styled.section`
  text-align: center;
  color: #ffffff;
  background: url(/images/chart/title.png);
  opacity: 0.55;
`;

const TitleWrapper = styled.div`
  padding: 32px 48px 158px;
  opacity: 1;

  @media (max-width: 767px) {
    padding: 32px 48px 196px;
  }
  @media (max-width: 575px) {
    padding: 32px 48px 140px;
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

export default SkeletonChartTitle;
