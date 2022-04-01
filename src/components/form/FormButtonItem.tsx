/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Survey } from '../../types/formType';

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
          <Question>Q.{surveyList[0].question}</Question>
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
  width: 100%;
  margin-bottom: 12px;
  padding: 20px 0px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
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
  border: 2px solid #593137;
  border-radius: 15px;

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

export default FormButtonItem;
