/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Survey } from '../../types/formType';
import CustomFormControlLabel from './CustomFormControlLabel';

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
                <FormLabel id={element.questionInitial} css={QuestionWrapper}>
                  Q.{element.question}
                </FormLabel>
                <RadioGroup row>
                  {element.answers.map((option) => {
                    return (
                      <CustomFormControlLabel
                        value={option.answerSeq}
                        control={<Radio />}
                        label={option.answer}
                        id={element.questionInitial}
                      />
                      // <FormControlLabel
                      //   value={option.answerSeq}
                      //   control={<Radio />}
                      //   label={option.answer}
                      // />
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
