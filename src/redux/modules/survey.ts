import { SurveyResultRequestType, SurveyResult } from '../../types/SurveyType';

const initialState: SurveyResultRequestType = {
  surveyResult: [],
};

const SURVEY_INIT = 'survey/INIT';
const SURVEY_INSERT = 'survey/INSERT';
const SURVEY_UPDATE = 'survey/UPDATE';

export const surveyInit = () => {
  return {
    type: SURVEY_INIT,
  };
};

export const surveyInsert = (param: SurveyResult) => {
  return {
    type: SURVEY_INSERT,
    payload: {
      questionInitial: param.questionInitial,
      answerSeq: param.answerSeq,
    },
  };
};

export const surveyUpdate = (param: SurveyResult) => {
  return {
    type: SURVEY_UPDATE,
    payload: {
      questionInitial: param.questionInitial,
      answerSeq: param.answerSeq,
    },
  };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SURVEY_INIT:
      return {
        ...state,
        surveyResult: [],
      };

    case SURVEY_INSERT:
      return {
        ...state,
        surveyResult: state.surveyResult !== null && [
          ...state.surveyResult,
          action.payload,
        ],
      };

    case SURVEY_UPDATE:
      return {
        ...state,
        surveyResult: state.surveyResult !== null && [
          ...state.surveyResult.filter(
            (survey) =>
              survey.questionInitial !== action.payload.questionInitial,
          ),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

export default reducer;
