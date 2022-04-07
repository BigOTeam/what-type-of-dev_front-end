import { RadioResultType, SurveyResult } from '../../types/SurveyType';

const initialState: RadioResultType = {
  radioResult: [],
};

const RADIO_INIT = 'radio/INIT';
const RADIO_UPDATE = 'radio/UPDATE';

export const radioInit = () => {
  return {
    type: RADIO_INIT,
  };
};

export const radioUpdate = (param: SurveyResult) => {
  return {
    type: RADIO_UPDATE,
    payload: {
      questionInitial: param.questionInitial,
      answerSeq: param.answerSeq,
    },
  };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RADIO_INIT:
      return {
        ...state,
        radioResult: [],
      };

    case RADIO_UPDATE:
      return {
        ...state,
        radioResult: state.radioResult !== null && [
          ...state.radioResult.filter(
            (radio) => radio.questionInitial !== action.payload.questionInitial,
          ),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

export default reducer;
