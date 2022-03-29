import styled from '@emotion/styled';

import Skeleton from '@mui/material/Skeleton';

const SkeletonChartSection: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <TitleWrapper>
          <TitleHead>당신이 개발자라면 설문 통계</TitleHead>
        </TitleWrapper>
      </TitleContainer>
      <BodyContainer>
        <BodyWrapper>
          <Section>
            <ContentInfo>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
            </ContentInfo>
            <ContentInfo>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
            </ContentInfo>
            <ContentInfo>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
            </ContentInfo>
            <ContentInfo>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
              <ContentInfoItem>
                <ContentTitle />
                <ContentItem />
              </ContentInfoItem>
            </ContentInfo>
          </Section>
        </BodyWrapper>
      </BodyContainer>
    </>
  );
};

const TitleContainer = styled.section`
  text-align: center;
  color: #ffffff;
  background: url(/images/chart/title.png);
  opacity: 0.55;
`;

const TitleWrapper = styled.div`
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
  margin: 20px 0px 44px;
  font-size: 52px;
  font-weight: bold;

  @media (max-width: 767px) {
    margin: 20px 0px 28px;
    font-size: 44px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

const BodyContainer = styled.div`
  margin-top: 28px;
  padding: 0px 16px;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  @media (max-width: 767px) {
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0px 16px;
  color: #263747;

  @media (max-width: 767px) {
    align-items: center;
  }
  @media (max-width: 575px) {
  }
`;

const ContentInfo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    margin-top: 0px;
  }
  @media (max-width: 575px) {
  }
`;

const ContentInfoItem = styled.li`
  width: calc(50% - 72px);
  margin-top: 10px;
  padding: 16px 32px 0px;
  border-radius: 25px;
  border: solid #d7e2eb;
  border-width: 1px;
  background-color: #ffffff;

  @media (max-width: 767px) {
    width: initial;
  }
  @media (max-width: 575px) {
  }
`;

const ContentTitle = styled(Skeleton)`
  variant="rectangular";
  width: 200px;
  height: 100px;

  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 575px) {
  }
`;

const ContentItem = styled(Skeleton)`
  variant="rectangular";
  width: 100%;
  height: 200px;

  @media (max-width: 767px) {
  }
`;

export default SkeletonChartSection;
