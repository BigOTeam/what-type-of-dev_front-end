import { useEffect, useState } from 'react';

import { axiosInstance } from '../../utils/axios';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import FormItem from './FormItem';
import { FormResponseData } from '../../data/formType';

interface VisibleProps {
  isVisible?: boolean;
}

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormResponseData>();
  const [isDeveloper, setIsDeveloper] = useState<boolean>(false);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);
  const [isClickDeveloper, setIsClickDeveloper] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance.get(`/dev-form/${nextPageNumber}`).then((response) => {
      setFormData(response.data);
    });
  }, [nextPageNumber]);

  const onClickYes = () => {
    setIsDeveloper(true);
    setIsClickDeveloper(true);
    setIsButtonVisible(false);
  };

  const onClickNo = () => {
    setIsDeveloper(false);
    setIsClickDeveloper(true);
    setIsButtonVisible(false);
  };

  const onClickNextButton = () => {
    setNextPageNumber((prevNumber) => prevNumber + 1);
    window.scrollTo({ top: 0 });
  };

  return (
    <Container>
      <MainImage
        src={formData?.pageData.pageImageUrl}
        alt={formData?.pageData.pageDescription}
      />
      <MainQuestion>
        💖🧡💛 {formData?.pageData.pageDescription} 💚💙💜
      </MainQuestion>
      {nextPageNumber === 1 ? (
        <>
          <Question isVisible={isButtonVisible}>
            1. 당신은 개발자인가요?
          </Question>
          <ButtonSection>
            <QuestionButton onClick={onClickYes} isVisible={isButtonVisible}>
              네
            </QuestionButton>
            <QuestionButton onClick={onClickNo} isVisible={isButtonVisible}>
              아니오
            </QuestionButton>
          </ButtonSection>
        </>
      ) : null}
      {isClickDeveloper ? (
        <>
          <FormItem
            surveyList={formData?.pageData.survey}
            pageNo={formData?.pageData.pageNo}
            isDeveloper={isDeveloper}
          />
          <ButtonSection>
            <QuestionButton onClick={onClickNextButton} isVisible={true}>
              다음
            </QuestionButton>
          </ButtonSection>
        </>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  transition: all ease 0.3s;
`;

const MainImage = styled.img`
  width: 600px;
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

const Question = styled.p<VisibleProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

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

const QuestionButton = styled.button<VisibleProps>`
  display: ${(props) =>
    !props || props.isVisible === true ? 'block' : 'none'};

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

export default FormSection;
