import styled from '@emotion/styled';

import { ChartAnalyzeType } from '../../types/chartTypes';

import useChartList from '../../hooks/useChartList';

import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import { css } from '@emotion/react';

// interface ChartDesignType {
//   chartAnalyze: ChartAnalyzeType;
//   userCount: number;
// }

const ChartResult: React.FC = () => {
  const { isLoading, data, isError, errorMessage } = useChartList();

  const chartByType = (data: ChartAnalyzeType) => {
    switch (data.chartType) {
      case 'doughnut':
        return (
          <DoughnutChart
            id={data.statisticId}
            chartAnswerInfo={data.chartInfo}
            // userCount={data.userCount}
          />
        );
      case 'verticalBar':
        return (
          <BarChart
            id={data.statisticId}
            indexAxis="x"
            chartAnswerInfo={data.chartInfo}
          />
        );
      case 'horizontalBar':
        return (
          <BarChart
            id={data.statisticId}
            indexAxis="y"
            chartAnswerInfo={data.chartInfo}
          />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <Container>
      <Wrapper>
        {data && (
          <>
            <HeadContainer>
              {/* 제목 */}
              <TitleBox
                css={css`
                  width: 100%;
                  height: 50%;
                  background: ${data.chartData.statisticTitle.imgUrl};
                `}
              >
                <TitleTextWrapper>
                  <TitleHead>당신이 개발자라면 설문 통계</TitleHead>
                  <TitlePeriod>
                    설문 조사 기간 :{' '}
                    {data.chartData.statisticTitle.surveyPeriod}
                  </TitlePeriod>
                  <TitleInfo>
                    {data.chartData.statisticTitle.responseUserCount}
                    {data.chartData.statisticTitle.statisticSummary}
                  </TitleInfo>
                </TitleTextWrapper>
              </TitleBox>
            </HeadContainer>
            <BodyContainer>
              <Contents>
                {/* 목차 */}
                <Section>
                  <SubHead>목차</SubHead>
                  <ContentsWrapper>
                    {data.chartData.statisticContents.map(
                      (contentData, index) => {
                        return (
                          <ContentInfo key={index}>
                            <ContentSubTitle>
                              {contentData.title}
                            </ContentSubTitle>
                            <ContentInfoList>
                              {contentData.contentsInfo.map(
                                (contentInfo, index) => (
                                  <ContentInfoItem key={index}>
                                    {contentInfo.question}
                                  </ContentInfoItem>
                                ),
                              )}
                            </ContentInfoList>
                          </ContentInfo>
                        );
                      },
                    )}
                  </ContentsWrapper>
                </Section>
                {/* 차트 목록 */}
                <ChartWrapper>
                  {data.chartData.statisticAnalyze.map((chartData, index) => {
                    return (
                      <ChartListWrapper>
                        {/* 차트 목차 제목 */}
                        <ChartHeadWrapper key={index}>
                          <ChartHead>
                            Part {chartData.partId}.{chartData.title}
                          </ChartHead>
                        </ChartHeadWrapper>
                        {/* 차트 카드 리스트 시작 */}
                        <ChartItemList>
                          {/* 차트 제목, 요약 2개의 카드 */}
                          <ChartTitleItemWrapper>
                            {/* 차트 카드 : 제목, 이미지, 요약 */}
                            <ChartItem>
                              <ChartTitleItemImg
                                src={chartData.imgUrl}
                                alt={chartData.imgUrl}
                              ></ChartTitleItemImg>
                              <ChartTitleItemHead>
                                {chartData.title}
                              </ChartTitleItemHead>
                              <ChartTitleItemDescription>
                                {chartData.description}
                              </ChartTitleItemDescription>
                            </ChartItem>
                            {/* 차트 카드 : 주요 정보 3개 요약 */}
                            <ChartItem>
                              <ChartSummaryList>
                                {chartData.statisticsSummary.map(
                                  (summaryData, index) => {
                                    return (
                                      <ChartSummaryItem key={index}>
                                        {summaryData.summary}
                                      </ChartSummaryItem>
                                    );
                                  },
                                )}
                              </ChartSummaryList>
                            </ChartItem>
                          </ChartTitleItemWrapper>
                          {/* 차트 결과 차트 모음 */}
                          <ChartItemWrapper>
                            {chartData.statisticResult.map(
                              (statisticData, index) => (
                                <ChartItem key={index}>
                                  {/* 차트 질문 */}
                                  <ChartStatisticHeadWrapper>
                                    <ChartStatiticHead>
                                      {statisticData.question}
                                    </ChartStatiticHead>
                                  </ChartStatisticHeadWrapper>
                                  <ChartStatisticContentWrapper>
                                    {chartByType(
                                      statisticData,
                                      // data.chartData.statisticTitle
                                      //   .responseUserCount,
                                    )}
                                  </ChartStatisticContentWrapper>
                                </ChartItem>
                              ),
                            )}
                          </ChartItemWrapper>
                        </ChartItemList>
                      </ChartListWrapper>
                    );
                  })}
                </ChartWrapper>
              </Contents>
            </BodyContainer>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 0px 16px;
  background-color: #fff1f7;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

const HeadContainer = styled.div`
  text-align: center;
  color: #ffffff;
`;

const TitleBox = styled.div`
  /* background-image: url(https://image.ibb.co/enR1O5/bg.jpg); */
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
`;

const TitleTextWrapper = styled.div`
  padding: 32px 48px;
`;

const TitleHead = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
`;

const TitlePeriod = styled.h2`
  font-size: 24px;
`;

const TitleInfo = styled.h2`
  margin: 24px 0px 16px;
  font-size: 18px;
`;

const BodyContainer = styled.div`
  margin-top: 24px;
  padding: 0px 16px;

  @media (max-width: 767px) {
    padding: 0px;
  }
  @media (max-width: 575px) {
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 16px 80px 16px;
  justify-content: center;
  align-items: center;
  color: #593137;
`;

const SubHead = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: bold;
`;

const ContentsWrapper = styled.ul`
  /* margin: 24px 0px 0px; */
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0px 24px 48px 24px;
  }
`;

const ContentInfo = styled.li`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 24px 40px 24px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: #ffffff;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ContentSubTitle = styled.h2`
  margin: 40px 0px 24px;
  font-size: 32px;
  font-weight: bold;
`;

const ContentInfoList = styled.div`
  margin: 24px 0px 0px;
`;

const ContentInfoItem = styled.h3`
  margin-top: 10px;
  font-size: 16px;
`;

const ChartWrapper = styled.div``;

const ChartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 20px 16px;
  justify-content: center;
  align-items: center;
`;

const ChartHeadWrapper = styled.div`
  margin-bottom: 24px;
`;

const ChartHead = styled.h1`
  color: #593137;
  font-size: 48px;
  font-weight: bold;
`;

const ChartItemList = styled.div`
  max-width: 900px;
`;

const ChartTitleItemWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-around;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ChartItem = styled.div`
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 38%;
  margin-bottom: 12px;
  padding: 24px 40px 24px 40px;
  border-radius: 25px;
  background-color: #ffffff;
  color: #593137;

  @media (max-width: 767px) {
    width: max-content;
  }
`;

const ChartTitleItemImg = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 16px;
  /* background-color: #fff1f7; */
`;

const ChartTitleItemHead = styled.h2`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
`;

const ChartTitleItemDescription = styled.h3``;

const ChartSummaryList = styled.div``;

const ChartSummaryItem = styled.h3``;

const ChartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ChartStatisticHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartStatiticHead = styled.h2`
  margin-top: 24px;
  margin-bottom: 16px;
  /* padding-right: 40px; */
  font-size: 20px;
  font-weight: 700;
  color: #593137;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
const ChartStatisticContentWrapper = styled.div``;

export default ChartResult;
