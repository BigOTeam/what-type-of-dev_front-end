import styled from '@emotion/styled';

import Skeleton from '@mui/material/Skeleton';

const SkeletonChartSection: React.FC = () => {
  return (
    <BodyContainer>
      <BodyWrapper>
        <Section>
          <Title variant="rectangular" />
          <ContentBox />
          <ContentBox />
          <ContentBox />
          <ContentBox />
        </Section>
      </BodyWrapper>
    </BodyContainer>
  );
};

const ContentBox: React.FC = () => (
  <ContentInfo>
    <ContentInfoItem>
      <ContentTitle variant="rectangular" animation="wave" />
      <ContentItem variant="rectangular" animation="wave" />
    </ContentInfoItem>
    <ContentInfoItem>
      <ContentTitle variant="rectangular" animation="wave" />
      <ContentItem variant="rectangular" animation="wave" />
    </ContentInfoItem>
  </ContentInfo>
);

const BodyContainer = styled.div`
  margin-top: 28px;
  padding: 0 16px;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 16px;

  @media (max-width: 767px) {
    align-items: center;
  }
`;

const ContentInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    margin-top: 0;
  }
`;

const Title = styled(Skeleton)`
  width: 150px;
  height: 100px;

  @media (max-width: 767px) {
    width: 50%;
  }
`;

const ContentInfoItem = styled.li`
  width: calc(50% - 72px);
  margin-top: 10px;
  padding: 16px 32px 0;
  border-radius: 14px;
  border: 1px solid #d7e2eb;
  background-color: #ffffff;

  @media (max-width: 767px) {
    width: initial;
  }
`;

const ContentTitle = styled(Skeleton)`
  width: 200px;
  height: 100px;

  @media (max-width: 767px) {
    width: 50%;
  }
`;

const ContentItem = styled(Skeleton)`
  width: 100%;
  height: 200px;
`;

export default SkeletonChartSection;
