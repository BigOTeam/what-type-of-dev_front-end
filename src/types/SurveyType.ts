export interface SurveyRequestType {
  pageNo: number;
  isDeveloper: boolean | null;
}
export interface SurveyResponseType {
  pageNo: number;
  pageName: string;
  pageDescription: string;
  pageImg: string;
  survey: Survey[];
}

export interface Survey {
  questionInitial: string;
  question: string;
  answers: Answers[];
}

export interface Answers {
  answerSeq: number;
  answer: string;
}

export interface SurveyResultRequestType {
  surveyResult: SurveyResult[] | null;
}

export interface RadioResultType {
  radioResult: SurveyResult[] | null;
}

export interface SurveyResult {
  questionInitial: string;
  answerSeq: number;
}

export interface Job {
  jobId: number;
  jobName: string;
  jobImg: string;
}

export interface JobRank extends Job {
  jobRank: number;
  jobDescription: string;
}

export interface SurveyResultResponseType {
  rankData: JobRank[];
}

export interface JobListResponseType {
  jobList: Job[];
}

export interface RootState {
  survey: SurveyResultRequestType;
}

export interface RadioState {
  radio: RadioResultType;
}

export interface JobTypeDetail extends Job {
  jobDescription: string;
}
