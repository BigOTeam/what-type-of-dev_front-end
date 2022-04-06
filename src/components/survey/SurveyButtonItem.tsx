/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Survey } from '../../types/SurveyType';

interface SurveyItemProps {
  surveyList: Survey[] | undefined;
  handleYesButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  handleNoButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SurveyButtonItem: React.FC<SurveyItemProps> = ({
  surveyList,
  handleYesButtonClick,
  handleNoButtonClick,
}) => {
  return (
    <>
      {surveyList !== undefined ? (
        <>
          <Question>Q.{surveyList[0].question}</Question>
          <ButtonSection>
            <QuestionButton onClick={handleYesButtonClick}>네</QuestionButton>
            <QuestionButton onClick={handleNoButtonClick}>
              아니오
            </QuestionButton>
          </ButtonSection>
        </>
      ) : null}
    </>
  );
};

const Question = styled.p`
  text-align: center;

  width: 100%;

  margin-bottom: 12px;
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
  justify-content: space-around;
  text-align: center;
  align-items: center;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

const QuestionButton = styled.button`
  width: 260px;
  height: 100px;

  background-color: #fff;
  border: 2px solid #313a59;
  border-radius: 14px;

  letter-spacing: -0.02em;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;

  cursor: pointer;

  @media (max-width: 767px) {
    width: calc(260px * 0.9);
    height: calc(100px * 0.9);
  }

  @media (max-width: 575px) {
    width: 100%;
    height: 80px;
    margin-bottom: 16px;
  }
`;

export default SurveyButtonItem;
