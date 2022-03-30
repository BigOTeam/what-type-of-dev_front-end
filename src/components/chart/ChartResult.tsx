import styled from '@emotion/styled';

import {
  ChartAnalyzeType,
  ChartResultAnalyzeType,
  ChartResultContentsType,
} from '../../types/chartTypes';

import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

interface ChartResultProps {
  chartContents: ChartResultContentsType[];
  chartAnalyze: ChartResultAnalyzeType[];
  userCount: number;
}

const ChartResult: React.FC<ChartResultProps> = ({
  chartContents,
  chartAnalyze,
  userCount,
}) => {
  const chartByType = (data: ChartAnalyzeType, userCount: number) => {
    switch (data.chartType) {
      case 'doughnut':
        return (
          <DoughnutChart
            id={data.statisticId}
            chartAnswerInfo={data.chartInfo}
            userCount={userCount}
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
        {chartContents && chartAnalyze && userCount && (
          <>
            <Section>
              <SubHead>목차</SubHead>
              <ContentsWrapper>
                {chartContents.map((contentData) => {
                  return (
                    <ContentInfo key={contentData.partId}>
                      <ContentSubTitle>{contentData.title}</ContentSubTitle>
                      <ContentInfoList>
                        {contentData.contentsInfo.map((contentInfo) => (
                          <ContentInfoItem key={contentInfo.questionId}>
                            <ContentItem>
                              <a
                                // eslint-disable-next-line no-useless-concat
                                href={
                                  '#' +
                                  String(contentData.partId) +
                                  '-' +
                                  String(contentInfo.questionId)
                                }
                              >
                                {contentInfo.question}
                              </a>
                            </ContentItem>
                          </ContentInfoItem>
                        ))}
                      </ContentInfoList>
                    </ContentInfo>
                  );
                })}
              </ContentsWrapper>
            </Section>
            {/* 차트 목록 */}
            <ChartWrapper>
              {chartAnalyze.map((chartData) => {
                return (
                  <ChartListWrapper key={chartData.partId}>
                    {/* 차트 목차 제목 */}
                    <ChartHeadWrapper>
                      <ChartHead>
                        Part {chartData.partId}. {chartData.title}
                      </ChartHead>
                    </ChartHeadWrapper>
                    {/* 차트 카드 리스트 시작 */}
                    <ChartItemList>
                      {/* 차트 제목, 요약 2개의 카드 */}
                      <ChartTitleItemWrapper>
                        {/* 차트 카드 : 제목, 이미지, 요약 */}
                        <ChartItem>
                          <ChartItemBox>
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
                          </ChartItemBox>
                        </ChartItem>
                        {/* 차트 카드 : 주요 정보 3개 요약 */}
                        <ChartItem>
                          <ChartSummaryText>요약</ChartSummaryText>
                          <ChartSummaryList>
                            {chartData.statisticsSummary.map((summaryData) => {
                              return (
                                <ChartSummaryItem key={summaryData.summaryId}>
                                  {summaryData.summary}
                                </ChartSummaryItem>
                              );
                            })}
                          </ChartSummaryList>
                        </ChartItem>
                      </ChartTitleItemWrapper>
                      {/* 차트 결과 차트 모음 */}
                      <ChartItemWrapper>
                        {chartData.statisticResult.map((statisticData) => (
                          <ChartItem
                            key={statisticData.statisticId}
                            id={
                              String(chartData.partId) +
                              '-' +
                              String(statisticData.statisticId)
                            }
                          >
                            <ChartItemBox>
                              {/* 차트 질문 */}
                              <ChartStatisticHeadWrapper>
                                <ChartStatiticHead>
                                  {statisticData.question}
                                </ChartStatiticHead>
                              </ChartStatisticHeadWrapper>
                              <ChartStatisticContentWrapper>
                                {chartByType(statisticData, userCount)}
                              </ChartStatisticContentWrapper>
                            </ChartItemBox>
                          </ChartItem>
                        ))}
                      </ChartItemWrapper>
                    </ChartItemList>
                  </ChartListWrapper>
                );
              })}
            </ChartWrapper>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 12px;
  padding: 0px 16px;

  @media (max-width: 767px) {
    margin-top: 8px;
    width: calc(100%-32px);
    padding: 16px;
  }
  @media (max-width: 575px) {
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
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0px;
  color: #263747;

  @media (max-width: 767px) {
    padding: 72px 16px;
  }
  @media (max-width: 575px) {
    padding: 62px 16px;
  }
`;

// 목차
const SubHead = styled.h1`
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
const ContentsWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 767px) {
    // padding: 0px 24px 48px 24px;
    flex-direction: column;
    align-items: center;
  }
`;

// 세부 목차 하나
const ContentInfo = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  // width: 37%;
  width: calc(50% - 16px);
  // padding: 24px 40px;
  border-radius: 25px;
  border: solid #d7e2eb;
  border-width: 1px;
  background-color: #ffffff;
  line-height: 130%;

  @media (max-width: 767px) {
    width: 100%;
    margin: 8px 0px;
    padding: 0px;
  }
`;

// 세부 목차의 소제목
const ContentSubTitle = styled.h2`
  margin: 40px 0px 24px;
  padding: 24px 0px 0px 40px;
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 767px) {
    margin: 40px 0px 16px;
    padding: 12px 0px 0px 40px;
    font-size: 28px;
  }
  @media (max-width: 575px) {
    margin: 32px 0px 16px;
    font-size: 24px;
  }
`;

// 세부 목차 내용 리스트
const ContentInfoList = styled.ul`
  // margin-top: 24px;
  padding: 16px 32px 28px;
  list-style-position: inside;

  @media (max-width: 767px) {
    margin-top: 0px;
    padding: 12px 40px 32px;
  }
  @media (max-width: 575px) {
    padding: 0px 40px 32px;
  }
`;

const ContentItem = styled.span``;

// 세부 목차 내용 하나
const ContentInfoItem = styled.li`
  margin-top: 10px;
  font-size: 16px;
  // vertical-align: middle;

  &::before {
    content: '\\2022';
    font-size: 20px;
    text-align: left;

    display: inline-block;
    padding-right: 2px;
    // margin: 0 0 0 -2em;
    // width: 2em;
  }
`;

// 차트 목록 전체 감싸기
const ChartWrapper = styled.section`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

// 차트 목록 하나
const ChartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 20px 16px 20px 16px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

// 차트 소제목 감싸기
const ChartHeadWrapper = styled.div`
  margin-bottom: 24px;
`;

// 차트 소제목
const ChartHead = styled.h1`
  color: #263747;
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 36px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

// 차트 카드 목록 전체
const ChartItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    margin-bottom: 72px;
  }
  @media (max-width: 575px) {
    margin-bottom: 62px;
  }
`;

// 차트 제목, 요약 카드 감싸기
const ChartTitleItemWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

// 차트, 제목, 요약 등 카드 하나
const ChartItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(50% - 16px);
  margin-bottom: 12px;
  // padding: 24px 40px 24px 40px;
  border-radius: 25px;
  border: solid #d7e2eb;
  border-width: 1px;
  background-color: #ffffff;
  // color: #593137;
  color: #263747;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0px;
  }
`;

// 통계 카드 내부
const ChartItemBox = styled.div`
  padding: 24px 32px 20px;

  @media (max-width: 767px) {
    padding: 28px 56px;
  }
  @media (max-width: 575px) {
    padding: 20px 48px 24px;
  }
`;

// 차트 소제목 관련 이미지
const ChartTitleItemImg = styled.img`
  width: 100px;
  height: auto;
  margin: 12px 0px 20px;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
    width: 80px;
    height: auto;
    margin: 12px 0px 16px;
  }
`;

// 차트 소제목
const ChartTitleItemHead = styled.h2`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
    margin-bottom: 8px;
  }
`;

// 차트 소제목과 관련된 내용
const ChartTitleItemDescription = styled.h3`
  padding: 4px 0px 8px;
  line-height: 130%;

  @media (max-width: 767px) {
    padding: 4px 0px 4px;
  }
`;

// 요약
const ChartSummaryText = styled.div`
  padding: 32px 32px 0px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 767px) {
    padding: 28px 48px 0px;
  }
`;

// 차트 요약 리스트
const ChartSummaryList = styled.ul`
  padding: 12px 32px 28px;

  @media (max-width: 767px) {
    padding: 12px 48px 24px;
  }
  @media (max-width: 575px) {
    padding: 12px 48px 20px;
  }
`;

// 차트 요약 하나
const ChartSummaryItem = styled.li`
  margin: 8px 0px;
  line-height: 130%;

  &::before {
    content: '\\2022';
    display: inline-block;
    padding-right: 3px;
    font-size: 20px;
    text-align: left;
    // margin: 0 0 0 -2em;
    // width: 2em;
  }
`;

// 통계 차트 카드 리스트
const ChartItemWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 767px) {
    display: block;
    flex-direction: column;
    width: 100%;
  }
`;

// 통계 차트 질문 감싸기
const ChartStatisticHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 통계 차트 질문
const ChartStatiticHead = styled.h2`
  margin-top: 24px;
  margin-bottom: 16px;
  /* padding-right: 40px; */
  font-size: 20px;
  font-weight: 700;
  color: #263747;
  line-height: 120%;

  @media (max-width: 767px) {
    margin-top: 24px;
    font-size: 18px;
  }
`;

// 통계 차트 감싸기
const ChartStatisticContentWrapper = styled.div`
  //  min-height: 215px;
`;

export default ChartResult;
