export interface FormResponseData {
  pageNumber: Number;
  results: Question[];
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  optionId: number;
  optionDescription: string;
}
