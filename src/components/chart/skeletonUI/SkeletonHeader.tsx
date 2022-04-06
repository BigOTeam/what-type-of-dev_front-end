import styled from '@emotion/styled';

const SkeletonHeader: React.FC = () => {
  return (
    <TitleContainer>
      <TitleWrapper>
        <TitleHead>당신이 개발자라면 설문 통계</TitleHead>
      </TitleWrapper>
    </TitleContainer>
  );
};

const TitleContainer = styled.section`
  margin: 20px 0;
  border-radius: 14px;
  background-color: #97cdf5;
  text-align: center;
  color: #fff;
`;

const TitleWrapper = styled.div`
  padding: 32px 48px 150px;

  @media (max-width: 767px) {
    padding-bottom: 130px;
  }
  @media (max-width: 575px) {
    padding-bottom: 100px;
  }
`;

const TitleHead = styled.h1`
  margin: 20px 0 28px;
  font-size: 52px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 44px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

export default SkeletonHeader;
