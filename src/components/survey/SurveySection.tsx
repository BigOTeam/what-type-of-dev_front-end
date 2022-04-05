import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { surveyUpdate } from '../../redux/modules/survey';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import SurveyItem from './SurveyItem';
import { SurveyResponseType } from '../../types/SurveyType';
import SurveyButtonItem from './SurveyButtonItem';
import SurveyService from '../../services/SurveyService';
import ProgressHeader from './ProgressHeader';
import { Link } from 'react-router-dom';

const SurveySection: React.FC = () => {
  const dispatch = useDispatch();

  const [surveyData, serSurveyData] = useState<SurveyResponseType>();
  const [isDeveloper, setIsDeveloper] = useState<boolean | null>(null);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);

  useEffect(() => {
    const params = {
      pageNo: nextPageNumber,
      isDeveloper: isDeveloper,
    };

    SurveyService.getSurvey(params).then((response) => serSurveyData(response));
  }, [isDeveloper, nextPageNumber]);

  const handleYesButtonClick = () => {
    setIsDeveloper(true);
    dispatch(
      surveyUpdate({
        questionInitial: 'aboutme_dev',
        answerSeq: 1,
      }),
    );
    handleNextButtonClick();
  };

  const handleClickNo = () => {
    setIsDeveloper(false);
    dispatch(
      surveyUpdate({
        questionInitial: 'aboutme_dev',
        answerSeq: 2,
      }),
    );
    handleNextButtonClick();
  };

  const handleNextButtonClick = () => {
    setNextPageNumber((prevNumber) => prevNumber + 1);
    window.scrollTo({ top: 0 });
  };

  return (
    <Container>
      <Wrapper>
        <ProgressHeader pageNo={nextPageNumber} />
        <MainImage
          src={surveyData?.pageImg}
          alt={surveyData?.pageDescription}
        />
        <MainQuestion>💖🧡💛 {surveyData?.pageDescription} 💚💙💜</MainQuestion>
        {nextPageNumber === 1 ? (
          <SurveyButtonItem
            surveyList={surveyData?.survey}
            handleClickYes={handleYesButtonClick}
            handleClickNo={handleClickNo}
          />
        ) : (
          <>
            <SurveyItem surveyList={surveyData?.survey} />
            <ButtonSection>
              {nextPageNumber < 8 ? (
                <NextButton onClick={handleNextButtonClick}>다음</NextButton>
              ) : (
                <ResultButton to="/results">결과보기</ResultButton>
              )}
            </ButtonSection>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
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

  cursor: pointer;

  :hover {
    color: #fefefe;
    background-color: #5bb1f8;
    transition: all ease 0.3s;
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

  cursor: pointer;

  :hover {
    color: #fefefe;
    background-color: #5bb1f8;
    transition: all ease 0.3s;
  }
`;

export default SurveySection;
