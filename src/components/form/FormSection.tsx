import { useEffect, useState } from 'react';

import { axiosInstance } from '../../utils/axios';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import FormItem from './FormItem';
import { FormResponseData } from '../../types/formType';
import FormButtonItem from './FormButtonItem';

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormResponseData>();
  const [isDeveloper, setIsDeveloper] = useState<boolean | null>(null);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);

  useEffect(() => {
    const params = {
      pageNo: nextPageNumber,
      isDeveloper: isDeveloper,
    };

    axiosInstance.get(`/dev-form`, { params }).then((response) => {
      setFormData(response.data);
    });
  }, [isDeveloper, nextPageNumber]);

  // handleYesButtonClick
  const handleClickYes = () => {
    setIsDeveloper(true);
    onClickNextButton();
  };

  const handleClickNo = () => {
    setIsDeveloper(false);
    onClickNextButton();
  };

  const onClickNextButton = () => {
    setNextPageNumber((prevNumber) => prevNumber + 1);
    window.scrollTo({ top: 0 });
  };

  return (
    <Container>
      <Wrapper>
        <MainImage
          src={formData?.pageData.pageImageUrl}
          alt={formData?.pageData.pageDescription}
        />
        <MainQuestion>
          💖🧡💛 {formData?.pageData.pageDescription} 💚💙💜
        </MainQuestion>
        {nextPageNumber === 1 ? (
          <FormButtonItem
            surveyList={formData?.pageData.survey}
            handleClickYes={handleClickYes}
            handleClickNo={handleClickNo}
          />
        ) : (
          <>
            <FormItem surveyList={formData?.pageData.survey} />
            <ButtonSection>
              <NextButton onClick={onClickNextButton}>다음</NextButton>
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

export default FormSection;
