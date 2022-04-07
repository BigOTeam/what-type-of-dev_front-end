import { useDispatch } from 'react-redux';
import { surveyUpdate } from '../../redux/modules/survey';

import { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

const CustomFormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  const dispatch = useDispatch();
  const radioGroup = useRadioGroup();

  const handleRadioGroupChange = () => {
    if (radioGroup !== undefined) {
      const param = {
        questionInitial: props.id as string,
        answerSeq: props.value as number,
      };

      dispatch(surveyUpdate(param));
    }
  };

  return (
    <FormControlLabel
      {...props}
      onChange={handleRadioGroupChange}
      componentsProps={{ typography: { fontFamily: 'Spoqa Han Sans Neo' } }}
    />
  );
};

export default CustomFormControlLabel;
