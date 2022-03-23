import { useEffect, useState } from 'react';

import { axiosInstance } from '../../utils/axios';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import FormItem from './FormItem';
import { FormResponseData } from '../../data/formType';

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormResponseData>();
  const [isDeveloper, setIsDeveloper] = useState<boolean>(false);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);

  useEffect(() => {
    axiosInstance.get(`/dev-form/${nextPageNumber}`).then((response) => {
      setFormData(response.data);
      console.log(response.data);
    });
  }, [nextPageNumber]);

  const onClickDeveloperQuestion = () => {
    setIsDeveloper(true);
  };

  const onClickNextButton = () => {
    setNextPageNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <Container>
      <MainImage src="/images/1_자기소개.png" alt="자기소개 이미지" />
      <MainQuestion>당신에 대해서 알려주세요😀</MainQuestion>
      <div className="question__btns" css={question__button}>
        <button className="btn btn01" onClick={onClickDeveloperQuestion}>
          네!
        </button>
        <button className="btn btn02">아니오</button>
      </div>
      {isDeveloper === true ? (
        <FormItem questionList={formData?.results} />
      ) : null}
      <ButtonSection>
        <NextButton onClick={onClickNextButton}>다음</NextButton>
      </ButtonSection>
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
  padding: 10px;

  font-size: 24px;

  box-sizing: border-box;
`;

const QuestionWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  padding: 10px;

  box-sizing: border-box;

  & p {
    font-size: 20px;
  }
`;

const question__button = css`
  width: 280px;
  position: relative;
  margin: 0 auto;

  padding: 20px 0px;

  & .btn {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    width: 100%;
    height: 100px;

    background-color: #fff;
    border: 2px solid #593137;
    border-radius: 15px;

    letter-spacing: -0.02em;
    line-height: 1.2em;
    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
  }

  & :first-child {
    margin-bottom: 18px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const NextButton = styled.button`
  background-color: #fff;
  border: 2px solid #593137;
  border-radius: 15px;

  letter-spacing: -0.02em;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;

  cursor: pointer;

  width: 280px;
  height: 100px;
  margin: 20px 0px;
`;

export default FormSection;
