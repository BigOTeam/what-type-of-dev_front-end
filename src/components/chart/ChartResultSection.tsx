import styled from '@emotion/styled';

import { ChartContentsType } from '../../types/chartTypes';

import ContentItem from './ContentItem';
import TitleSummaryCard from './TitleSummaryCard';
import ChartCard from './ChartCard';

interface ChartResultProps {
  chartData: ChartContentsType[];
  userCount: number;
}

const FONT_COLOR = '#45494b';

const ChartResultSection: React.FC<ChartResultProps> = ({
  chartData,
  userCount,
}) => {
  return (
    <Container>
      <Wrapper>
        {chartData !== [] && userCount >= 0 && (
          <>
            <ContentWrapper>
              <ContentHead>목차</ContentHead>
              <ContentList>
                {chartData.map((contentData) => (
                  <ContentItem
                    key={contentData.groupId}
                    groupId={contentData.groupId}
                    groupName={contentData.groupName}
                    questionInfo={contentData.results}
                  />
                ))}
              </ContentList>
            </ContentWrapper>
            <ChartWrapper>
              {chartData.map((data) => (
                <ChartGroupWrapper key={data.groupId}>
                  <GroupHead>
                    Part {data.groupId}. {data.groupName}
                  </GroupHead>
                  <ChartItemList>
                    <TitleSummaryCard data={data} />
                    <ChartCardList>
                      {data.results.map((chartLabelData) => (
                        <ChartCard
                          data={chartLabelData}
                          userCount={userCount}
                          groupId={data.groupId}
                        />
                      ))}
                    </ChartCardList>
                  </ChartItemList>
                </ChartGroupWrapper>
              ))}
            </ChartWrapper>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 12px;
  box-sizing: border-box;
  word-break: keep-all;

  @media (max-width: 767px) {
    margin-top: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0 0;

  @media (max-width: 767px) {
    padding: 72px 16px 0;
  }
  @media (max-width: 575px) {
    padding: 62px 16px 0;
  }
`;

const ContentHead = styled.h1`
  margin-bottom: 32px;
  font-size: 44px;
  font-weight: 600;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 36px;
  }
  @media (max-width: 575px) {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;

const ContentList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ChartWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0 20px;

  @media (max-width: 767px) {
    padding: 0 16px 72px;
  }
  @media (max-width: 575px) {
    padding-bottom: 62px;
  }
`;

const ChartGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 80px;

  @media (max-width: 767px) {
    padding-top: 64px;
  }
`;

const GroupHead = styled.h1`
  margin-bottom: 32px;
  font-size: 44px;
  font-weight: 600;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 36px;
  }
  @media (max-width: 575px) {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;

const ChartItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ChartCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: block;
    flex-direction: column;
    width: 100%;
  }
`;

export default ChartResultSection;
