import { useDispatch } from 'react-redux';
import { surveyUpdate } from '../../redux/modules/form';

import { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

const CustomFormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  const dispatch = useDispatch();
  const radioGroup = useRadioGroup();

  const handleRadioGroup = () => {
    if (radioGroup !== undefined) {
      const param = {
        questionInitial: props.id as string,
        answerSeq: props.value as number,
      };

      dispatch(surveyUpdate(param));
    }
  };

  return <FormControlLabel {...props} onChange={handleRadioGroup} />;
};

export default CustomFormControlLabel;
