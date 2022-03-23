/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Question } from '../../data/formType';

interface FormItemProps {
  questionList: Question[] | undefined;
}

const FormItem: React.FC<FormItemProps> = ({ questionList }) => {
  return (
    <Container>
      {questionList !== undefined
        ? questionList.map((element) => {
            return (
              <FormControl css={radioStyle}>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  css={QuestionWrapper}
                >
                  {element.id}. {element.question}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group -label"
                  name="radio-buttons-group"
                >
                  {element.options.map((option) => {
                    return (
                      <FormControlLabel
                        value={option.optionId}
                        control={<Radio />}
                        label={option.optionDescription}
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
  font-weight: 600;
  box-sizing: border-box;
`;

export default FormItem;
