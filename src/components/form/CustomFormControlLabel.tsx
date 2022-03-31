import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { surveyInsert, surveyUpdate } from '../../redux/modules/form';

import { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

import {
  SurveyResultRequestType,
  SurveyResult,
  RootState,
} from '../../types/formType';

const CustomFormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  const dispatch = useDispatch();
  const radioGroup = useRadioGroup();

  // store 의 state 접근하여 가져오기
  const surveyList = useSelector<RootState, SurveyResult[] | null>(
    (state) => state.form.surveyResult,
  );

  // useEffect(() => {
  //   const param = {
  //     questionInitial: props.id as string,
  //     answerSeq: 0,
  //   };

  //   console.log(typeof surveyList);
  // }, []);

  // store에 있는 state 바꾸는 함수 실행
  const updateAnswer = (param: SurveyResult) => {
    dispatch(surveyUpdate(param));
  };

  const handleRadioGroup = () => {
    if (radioGroup !== undefined) {
      const param = {
        questionInitial: props.id as string,
        answerSeq: props.value as number,
      };

      // 액션으로 스토어를 갱신시키기
      console.log(param);
      updateAnswer(param);
    }
  };

  return <FormControlLabel {...props} onChange={handleRadioGroup} />;
};

// answers: [...prevAnsers.filter((value) => value !== questionInitial), {
//   questionInitial: 1,
//   answerSeq: 2,
// }]

export default CustomFormControlLabel;
