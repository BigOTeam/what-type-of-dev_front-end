import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { surveyUpdate } from '../../redux/modules/survey';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import SurveyItem from './SurveyItem';
import {
  RootState,
  SurveyResponseType,
  SurveyResult,
} from '../../types/SurveyType';
import SurveyButtonItem from './SurveyButtonItem';
import SurveyService from '../../services/SurveyService';
import ProgressHeader from './ProgressHeader';

const SurveySection: React.FC = () => {
  const surveyResult = useSelector<RootState, SurveyResult[] | null>(
    (state) => state.survey.surveyResult,
  );
  const dispatch = useDispatch();

  const [surveyData, serSurveyData] = useState<SurveyResponseType>();
  const [isDeveloper, setIsDeveloper] = useState<boolean | null>(null);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);
  const [nextButtonText, setNextButtonText] = useState<string>('다음');

  useEffect(() => {
    const params = {
      pageNo: nextPageNumber,
      isDeveloper: isDeveloper,
    };

    SurveyService.getSurvey(params).then((response) => serSurveyData(response));
  }, [isDeveloper, nextPageNumber]);

  useEffect(() => {
    if (nextPageNumber === 8) {
      setNextButtonText('결과보기');
    }
  }, [nextPageNumber]);

  const handleClickYes = () => {
    setIsDeveloper(true);
    dispatch(
      surveyUpdate({
        questionInitial: 'aboutme_dev',
        answerSeq: 1,
      }),
    );
    onClickNextButton();
  };

  const handleClickNo = () => {
    setIsDeveloper(false);
    dispatch(
      surveyUpdate({
        questionInitial: 'aboutme_dev',
        answerSeq: 2,
      }),
    );
    onClickNextButton();
  };

  const onClickNextButton = () => {
    if (nextPageNumber === 8) {
      SurveyService.sendSurvey({ surveyResult: surveyResult });
    } else {
      setNextPageNumber((prevNumber) => prevNumber + 1);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <Container>
      <Wrapper>
        <ProgressHeader pageNo={nextPageNumber} />
        <MainImage
          src={surveyData?.pageImageUrl}
          alt={surveyData?.pageDescription}
        />
        <MainQuestion>💖🧡💛 {surveyData?.pageDescription} 💚💙💜</MainQuestion>
        {nextPageNumber === 1 ? (
          <SurveyButtonItem
            surveyList={surveyData?.survey}
            handleClickYes={handleClickYes}
            handleClickNo={handleClickNo}
          />
        ) : (
          <>
            <SurveyItem surveyList={surveyData?.survey} />
            <ButtonSection>
              <NextButton onClick={onClickNextButton}>
                {nextButtonText}
              </NextButton>
            </ButtonSection>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  transition: all ease 0.3s;
`;

const Wrapper = styled.div`
  max-width: 600px;
  padding: 0 16px;
  margin: 0 auto;
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

  font-size: 24px;
  font-weight: 500;
  box-sizing: border-box;
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
  border: 2px solid #593137;
  border-radius: 15px;

  letter-spacing: -0.02em;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;

  cursor: pointer;
`;

export default SurveySection;
