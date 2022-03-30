import { useState } from 'react';
import { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

import { SurveyResult } from '../../types/formType';

const CustomFormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  const [survey, setSurvey] = useState<SurveyResult>();
  const radioGroup = useRadioGroup();

  const handleRadioGroup = () => {
    if (radioGroup !== undefined) {
      const param = {
        questionInitial: props.id as string,
        answerSeq: Number(radioGroup.value),
      };
      // 액션으로 스토어를 갱신시키기
      setSurvey(param);
      console.log(survey);
    }
  };

  return <FormControlLabel {...props} onChange={handleRadioGroup} />;
};

// answers: [...prevAnsers.filter((value) => value !== questionInitial), {
//   questionInitial: 1,
//   answerSeq: 2,
// }]

export default CustomFormControlLabel;
