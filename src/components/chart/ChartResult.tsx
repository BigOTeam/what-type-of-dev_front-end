import styled from '@emotion/styled';

import { ChartAnalyzeType, ChartContentsType } from '../../types/chartTypes';

import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import ContentItem from './ContentItem';

interface ChartResultProps {
  chartData: ChartContentsType[];
  userCount: number;
}

const FONT_COLOR = '#45494b';

const ChartResult: React.FC<ChartResultProps> = ({ chartData, userCount }) => {
  const renderChart = (data: ChartAnalyzeType, userCount: number) => {
    switch (data.chartType) {
      case 'doughnut':
        return (
          <DoughnutChart
            id={data.id}
            chartLabelDataInfo={data.chartInfoData}
            userCount={userCount}
          />
        );
      case 'verticalBar':
        return (
          <BarChart
            id={data.id}
            indexAxis="x"
            chartLabelDataInfo={data.chartInfoData}
            labelName="모든 응답자"
          />
        );
      case 'horizontalBar':
        return (
          <BarChart
            id={data.id}
            indexAxis="y"
            chartLabelDataInfo={data.chartInfoData}
            labelName="모든 응답자"
          />
        );
      default:
        return <></>;
    }
  };

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
                    questionInfo={contentData.questionInfo}
                  />
                ))}
              </ContentList>
            </ContentWrapper>
            {/* 차트 결과 */}
            <ChartResultWrapper>
              {chartData.map((data) => {
                return (
                  <ChartPartWrapper key={data.groupId}>
                    <ChartHead>
                      Part {data.groupId}. {data.groupName}
                    </ChartHead>
                    {/* 차트 카드 리스트 시작 */}
                    <ChartItemList>
                      {/* 제목, 요약 2개의 카드 */}
                      <TitleSummaryWrapper>
                        {/* 제목 */}
                        <TitleSummaryCard>
                          <TitleItemImg
                            src={data.imgUrl}
                            alt={data.imgUrl}
                          ></TitleItemImg>
                          <TitleHead>{data.groupName}</TitleHead>
                          <Description>{data.description}</Description>
                        </TitleSummaryCard>
                        {/* 요약 */}
                        <TitleSummaryCard>
                          <SummaryHead>요약</SummaryHead>
                          <SummaryList>
                            {data.summaryInfo.map((summary, index) => (
                              <SummaryItem key={index}>{summary}</SummaryItem>
                            ))}
                          </SummaryList>
                        </TitleSummaryCard>
                      </TitleSummaryWrapper>
                      {/* 차트 결과 모음 */}
                      <ChartCardList>
                        {data.result.map((chartLabelData) => (
                          // 차트 카드 하나
                          <ChartCard
                            key={chartLabelData.id}
                            id={
                              String(data.groupId) +
                              '-' +
                              String(chartLabelData.id)
                            }
                          >
                            <StatisticHead>
                              {chartLabelData.question}
                            </StatisticHead>
                            <StatisticChart>
                              {renderChart(chartLabelData, userCount)}
                            </StatisticChart>
                          </ChartCard>
                        ))}
                      </ChartCardList>
                    </ChartItemList>
                  </ChartPartWrapper>
                );
              })}
            </ChartResultWrapper>
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
  /* justify-content: center; */
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

// 목차 전체
const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0px 0px;
  color: ${FONT_COLOR};
  // color: #263747;

  @media (max-width: 767px) {
    padding: 72px 16px;
  }
  @media (max-width: 575px) {
    padding: 62px 16px 0px;
  }
`;

// 목차
const ContentHead = styled.h1`
  margin-bottom: 20px;
  font-size: 44px;
  font-weight: bold;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 36px;
  }
  @media (max-width: 575px) {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;

// 세부 목차 리스트 감싸기
const ContentList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    // padding: 0px 24px 48px 24px;
    flex-direction: column;
    align-items: center;
  }
`;

// 차트 목록 전체 감싸기
const ChartResultWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0px 0px;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    padding: 72px 16px;
  }
  @media (max-width: 575px) {
    padding: 62px 16px;
  }
`;

// 차트 목록 하나
const ChartPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0px 0px;

  @media (max-width: 767px) {
    // width: 100%;
    padding: 64px 0px 0px;
  }
`;

// 차트 소제목
const ChartHead = styled.h1`
  margin-bottom: 24px;
  color: ${FONT_COLOR};
  font-size: 56px;
  font-weight: 800;

  @media (max-width: 767px) {
    font-size: 50px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
    // font-size: 7vw;
  }
`;

// 차트 카드 목록 전체
const ChartItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
  }
`;

// 차트 제목, 요약 카드 감싸기
const TitleSummaryWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleSummaryCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(50% - 8px);
  margin-bottom: 12px;
  padding: 64px;
  box-sizing: border-box;
  border-radius: 25px;
  border: 1px solid #d7e2eb;
  background-color: #ffffff;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    padding: 24px;
  }
`;

// 차트 소제목 관련 이미지
const TitleItemImg = styled.img`
  width: fit-content;
  height: 72px;
  margin-bottom: 16px;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
    width: 72px;
    height: auto;
  }
`;

// 차트 소제목
const TitleHead = styled.h2`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 28px;
  }
  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

// 차트 소제목과 관련된 내용
const Description = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 575px) {
  }
`;

// 요약
const SummaryHead = styled.div`
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

// 차트 요약 리스트
const SummaryList = styled.ul`
  font-size: 20px;
  letter-spacing: -0.009em;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

// 차트 요약 하나
const SummaryItem = styled.li`
  margin-bottom: 16px;

  &::marker {
    content: '\\2022';
    display: inline-block;
    padding-right: 3px;
    font-size: 20px;
    text-align: left;
  }
`;

// 통계 차트 카드 리스트
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

// 차트 카드 하나
const ChartCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(50% - 8px);
  margin-bottom: 12px;
  padding: 24px 40px;
  box-sizing: border-box;
  border-radius: 25px;
  border: 1px solid #d7e2eb;
  // color: #593137;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px 40px;
    font-size: 18px;
  }
  @media (max-width: 575px) {
    padding: 16px 24px;
  }
`;

// 통계 차트 질문
const StatisticHead = styled.h2`
  margin: 24px 0px 16px;
  /* padding-right: 40px; */
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  // text-align: center;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 575px) {
    margin: 8px 0px;
    /* padding-right: 24px; */
  }
`;

const StatisticChart = styled.div`
  // min-width: 200px;

  @media (max-width: 767px) {
    // padding: 4px 0px;
  }
  @media (max-width: 575px) {
    // margin: 4px 0px;
  }
`;

export default ChartResult;
