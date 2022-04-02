import styled from '@emotion/styled';

const FONT_COLOR = '#45494b';

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
  background-color: #e8f4fd;
  color: ${FONT_COLOR};
  text-align: center;
  // background: url(/images/chart/title.png);
  // opacity: 0.55;
`;

const TitleWrapper = styled.div`
  opacity: 1;
  padding: 32px 48px 150px;

  @media (max-width: 767px) {
    padding-bottom: 196px;
  }
  @media (max-width: 575px) {
    padding-bottom: 140px;
  }
`;

const TitleHead = styled.h1`
  margin: 20px 0px 28px;
  font-size: 52px;
  font-weight: 500;

  @media (max-width: 767px) {
    margin-bottom: 24px;
    font-size: 44px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

export default SkeletonHeader;
