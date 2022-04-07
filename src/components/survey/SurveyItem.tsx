import { useEffect } from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Survey } from '../../types/SurveyType';
import CustomFormControlLabel from './CustomFormControlLabel';
import { useDispatch } from 'react-redux';
import { radioInit, radioUpdate } from '../../redux/modules/radio';

interface FormItemProps {
  surveyList: Survey[];
}

const SurveyItem: React.FC<FormItemProps> = ({ surveyList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(radioInit());

    surveyList.map((surveyItem) =>
      dispatch(
        radioUpdate({
          questionInitial: surveyItem.questionInitial,
          answerSeq: 0,
        }),
      ),
    );
  }, [surveyList]);

  const handleRadioValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(
      radioUpdate({
        questionInitial: event.target.name,
        answerSeq: Number(event.target.value),
      }),
    );
  };

  return (
    <Container>
      <Wrapper>
        {surveyList !== undefined
          ? surveyList.map((surveyItem) => (
              <FormControl key={surveyItem.questionInitial} css={radioStyle}>
                <FormLabel id={surveyItem.questionInitial} css={questionLabel}>
                  Q. {surveyItem.question}
                </FormLabel>
                <RadioGroup row onChange={handleRadioValueChange}>
                  {surveyItem.answers.map((option) => (
                    <CustomFormControlLabel
                      key={option.answerSeq}
                      value={option.answerSeq}
                      control={<Radio name={surveyItem.questionInitial} />}
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

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 600px;
  box-sizing: border-box;
`;

const radioStyle = css`
  display: flex;
  margin-bottom: 40px;

  &:first-of-type {
    margin-top: 20px;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;

const questionLabel = css`
  width: 100%;
  padding: 10px 0px;

  font-size: 20px;
  font-weight: 800;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  color: #313a59;
  box-sizing: border-box;
`;

export default SurveyItem;
