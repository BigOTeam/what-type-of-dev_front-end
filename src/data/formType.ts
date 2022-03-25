export interface FormResponseData {
  pageData: SurveyInfo;
}

export interface SurveyInfo {
  pageNo: number;
  pageName: string;
  pageDescription: string;
  pageImageUrl: string;
  survey: Survey[];
}

export interface Survey {
  questionId: number;
  question: string;
  answers: Answers[];
}

export interface Answers {
  answerSeq: number;
  answer: string;
}

export interface SurveyResultResponseType {
  surveyResult: SurveyResultType[];
}

export interface SurveyResultType {
  question_initial: number;
  answerSeq: number;
}
