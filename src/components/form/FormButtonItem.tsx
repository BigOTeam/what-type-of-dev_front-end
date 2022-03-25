/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Survey } from '../../data/formType';

interface FormItemProps {
  surveyList: Survey[] | undefined;
  handleClickYes: React.MouseEventHandler<HTMLButtonElement>;
  handleClickNo: React.MouseEventHandler<HTMLButtonElement>;
}

const FormButtonItem: React.FC<FormItemProps> = ({
  surveyList,
  handleClickYes,
  handleClickNo,
}) => {
  return (
    <>
      {surveyList !== undefined ? (
        <>
          <Question>
            {surveyList[0].questionId}. {surveyList[0].question}
          </Question>
          <ButtonSection>
            <QuestionButton onClick={handleClickYes}>네</QuestionButton>
            <QuestionButton onClick={handleClickNo}>아니오</QuestionButton>
          </ButtonSection>
        </>
      ) : null}
    </>
  );
};

const Question = styled.p`
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

const QuestionButton = styled.button`
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

export default FormButtonItem;
