import { useSelector } from 'react-redux';

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import { RootState, SurveyResult } from '../../types/SurveyType';

import ResultItem from './ResultItem';
import ShareSection from './ShareSection';
import ResultButtonSection from './ResultButtonSection';
import useSurveyResultList from '../../hooks/useSurveyResultList';

const ResultSection: React.FC = () => {
  const surveyResult = useSelector<RootState, SurveyResult[] | null>(
    (state) => state.survey.surveyResult,
  );

  const { isLoading, surveyResultData } = useSurveyResultList({
    surveyResult: surveyResult,
  });

  return (
    <Container>
      <Wrapper>
        <MainTitle>당신이 개발자라면?</MainTitle>
        {!isLoading && surveyResultData !== undefined ? (
          <ResultItemSection>
            <FirstRankSection>
              <ResultItem
                width={600}
                rank={surveyResultData.data.rankData[0].jobRank}
                name={surveyResultData.data.rankData[0].jobName}
                description={surveyResultData.data.rankData[0].jobDescription}
                imgUrl={surveyResultData.data.rankData[0].jobImg}
              />
            </FirstRankSection>
            <SecondThirdRankSection>
              <ResultItem
                width={400}
                rank={surveyResultData.data.rankData[1].jobRank}
                name={surveyResultData.data.rankData[1].jobName}
                imgUrl={surveyResultData.data.rankData[1].jobImg}
              />
              <ResultItem
                width={400}
                rank={surveyResultData.data.rankData[2].jobRank}
                name={surveyResultData.data.rankData[2].jobName}
                imgUrl={surveyResultData.data.rankData[2].jobImg}
              />
            </SecondThirdRankSection>
          </ResultItemSection>
        ) : null}
        <ResultButtonSection isStatistics={false} />
        {/* <ShareSection /> */}
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  background-color: #e7f4fd;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  max-width: 900px;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const MainTitle = styled.h1`
  text-align: center;

  padding: 60px 0px;

  font-size: 54px;
  font-weight: bold;

  box-sizing: border-box;
`;

const ResultItemSection = styled.section``;

const FirstRankSection = styled.section``;

const SecondThirdRankSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default ResultSection;
