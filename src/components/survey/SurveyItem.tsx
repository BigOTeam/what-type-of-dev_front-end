/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Survey } from '../../types/SurveyType';
import CustomFormControlLabel from './CustomFormControlLabel';

interface FormItemProps {
  surveyList: Survey[] | undefined;
}

const SurveyItem: React.FC<FormItemProps> = ({ surveyList }) => {
  return (
    <Container>
      <Wrapper>
        {surveyList !== undefined
          ? surveyList.map((surveyItem) => (
              <FormControl key={surveyItem.questionInitial} css={radioStyle}>
                <FormLabel id={surveyItem.questionInitial} css={questionLabel}>
                  Q.{surveyItem.question}
                </FormLabel>
                <RadioGroup row>
                  {surveyItem.answers.map((option) => (
                    <CustomFormControlLabel
                      key={option.answerSeq}
                      value={option.answerSeq}
                      control={<Radio />}
                      label={option.answer}
                      id={surveyItem.questionInitial}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))
          : null}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  transition: all ease 0.3s;
`;

const Wrapper = styled.div`
  max-width: 600px;
  box-sizing: border-box;
`;

const radioStyle = css`
  display: flex;

  width: 600px;
  padding: 20px 0px;

  box-sizing: border-box;
`;

const questionLabel = css`
  width: 100%;
  padding: 10px 0px;

  font-size: 20px;
  font-weight: 800;
  color: #27282e;
  box-sizing: border-box;
`;

export default SurveyItem;
