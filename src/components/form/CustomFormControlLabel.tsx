import { useState } from 'react';
import { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

import { SurveyResult } from '../../types/formType';

function CustomFormControlLabel(props: FormControlLabelProps) {
  const [survey, setSurvey] = useState<SurveyResult>();
  const radioGroup = useRadioGroup();
  const { id } = { ...props };

  const handleRadioGroup = () => {
    if (radioGroup !== undefined) {
      const param = {
        questionInitial: id as string,
        answerSeq: Number(radioGroup.value),
      };
      setSurvey(param);
      console.log(survey);
    }
  };

  return <FormControlLabel {...props} onChange={handleRadioGroup} />;
}

export default CustomFormControlLabel;
