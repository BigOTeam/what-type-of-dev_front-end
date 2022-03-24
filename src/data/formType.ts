export interface FormResponseData {
  code: '';
  message: '';
  data: SurveyInfo;
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
