import { createActions, handleActions } from 'redux-actions';

import { SurveyResultRequestType, SurveyResult } from '../../types/formType';

const prefix: string = 'what-type-of-dev/form';

// const initialState: SurveyResultRequestType = {
//   surveyResult: [{ questionInitial: 'about_me', answerSeq: 1 }],
// };
const initialState: SurveyResultRequestType = {
  surveyResult: [],
};

/*
export const { addSurvey, updateSurvey } = createActions(
  'ADD_SURVEY',
  'UPDATE_SURVEY',
  { prefix },
);

const reducer = handleActions<SurveyResultRequestType, SurveyResult>(
  {
    ADD_SURVEY: (state, action) => ({
      ...state,
      surveyResult: [...state.surveyResult, action.payload],
    }),

    UPDATE_SURVEY: (state, action) => ({
      ...state,
      surveyResult: [
        ...state.surveyResult.filter(
          (survey) => survey.questionInitial !== action.payload.questionInitial,
        ),
        action.payload,
      ],
    }),
  },
  initialState,
  { prefix },
);
*/

const SURVEY_INSERT = 'form/INSERT';
const SURVEY_UPDATE = 'form/UPDATE';

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
    case SURVEY_INSERT:
      return {
        ...state,
        // surveyResult: [...state.surveyResult, action.payload],
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
        // surveyResult: [
        //   ...state.surveyResult.filter(
        //     (survey) =>
        //       survey.questionInitial !== action.payload.questionInitial,
        //   ),
        //   action.payload,
        // ],
      };

    default:
      return state;
  }
};

export default reducer;
