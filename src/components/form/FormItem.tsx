/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Survey } from '../../data/formType';

interface FormItemProps {
  surveyList: Survey[] | undefined;
}

const FormItem: React.FC<FormItemProps> = ({ surveyList }) => {
  return (
    <Container>
      {surveyList !== undefined
        ? surveyList.map((element) => {
            return (
              <FormControl css={radioStyle}>
                <FormLabel
                  id={String(element.questionId)}
                  css={QuestionWrapper}
                >
                  {element.questionId}. {element.question}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group -label"
                  // name="radio-buttons-group"
                >
                  {element.answers.map((option) => {
                    return (
                      <FormControlLabel
                        value={option.answerSeq}
                        control={<Radio />}
                        label={option.answer}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            );
          })
        : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: all ease 0.3s;
`;

const radioStyle = css`
  display: flex;

  width: 600px;
  padding: 20px 0px;

  box-sizing: border-box;
`;

const QuestionWrapper = css`
  width: 100%;
  padding: 10px 0px;

  font-size: 20px;
  font-weight: 800;
  color: #2e2e2e;
  box-sizing: border-box;
`;

export default FormItem;
