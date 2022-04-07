import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import { RadioState, SurveyResult } from '../../types/SurveyType';
import useSurveyList from '../../hooks/useSurveyList';
import { surveyInit, surveyUpdate } from '../../redux/modules/survey';

import SurveyButtonItem from './SurveyButtonItem';
import ProgressHeader from './ProgressHeader';
import SurveyItem from './SurveyItem';

const SurveySection: React.FC = () => {
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);
  const [isDeveloper, setIsDeveloper] = useState<boolean>(false);

  const dispatch = useDispatch();
  const radioResult = useSelector<RadioState, SurveyResult[] | null>(
    (state) => state.radio.radioResult,
  );

  const { isLoading, surveyData } = useSurveyList({
    pageNo: nextPageNumber,
    isDeveloper: isDeveloper,
  });

  useEffect(() => {
    dispatch(surveyInit());
  }, []);

  const handleYesButtonClick = () => {
    setIsDeveloper(true);
    dispatch(
      surveyUpdate({
        questionInitial: 'aboutme_dev',
        answerSeq: 1,
      }),
    );
    setNextPageNumber((prevNumber) => prevNumber + 1);
  };

  const handleNoButtonClick = () => {
    setIsDeveloper(false);
    dispatch(
      surveyUpdate({
        questionInitial: 'aboutme_dev',
        answerSeq: 2,
      }),
    );
    setNextPageNumber((prevNumber) => prevNumber + 1);
  };

  const handleNextButtonClick = () => {
    if (radioResult === null) {
      return;
    }

    const flag =
      radioResult.filter((result) => result.answerSeq === 0).length > 0
        ? false
        : true;

    if (flag) {
      setNextPageNumber((prevNumber) => prevNumber + 1);
      window.scrollTo({ top: 0 });
    } else {
      alert('모든 문항을 선택해주세요');
    }
  };

  return (
    <Container>
      <Wrapper>
        <ProgressHeader pageNo={nextPageNumber} />
        {!isLoading && surveyData !== undefined ? (
          <>
            <MainImage
              src={surveyData.pageImg}
              alt={surveyData.pageDescription}
            />
            <MainQuestion>💖🧡 {surveyData.pageDescription} 💙💜</MainQuestion>
            {nextPageNumber === 1 ? (
              <SurveyButtonItem
                surveyList={surveyData.surveys}
                handleYesButtonClick={handleYesButtonClick}
                handleNoButtonClick={handleNoButtonClick}
              />
            ) : (
              <>
                <SurveyItem surveyList={surveyData.surveys} />
                <ButtonSection>
                  {nextPageNumber < 8 ? (
                    <NextButton onClick={handleNextButtonClick}>
                      다음
                    </NextButton>
                  ) : (
                    <ResultButton to="/results">결과보기</ResultButton>
                  )}
                </ButtonSection>
              </>
            )}
          </>
        ) : null}
      </Wrapper>
    </Container>
  );
};

const Container = styled.main``;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const MainQuestion = styled.p`
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  padding: 20px 0px;

  color: #27282e;
  font-size: 24px;
  font-weight: 500;
  box-sizing: border-box;

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const NextButton = styled.button`
  width: 280px;
  height: 100px;

  margin: 20px 20px;

  background-color: #fff;
  border: 2px solid #313a59;
  border-radius: 14px;

  letter-spacing: -0.02em;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #5bb1f8;
    color: #fefefe;
  }
`;

const ResultButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 280px;
  height: 100px;

  margin: 20px 20px;

  background-color: #fff;
  border: 2px solid #313a59;
  border-radius: 14px;

  letter-spacing: -0.02em;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #5bb1f8;
    color: #fefefe;
  }
`;

export default SurveySection;
