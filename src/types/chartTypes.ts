export interface ChartDataType {
  chartData: ChartResultType;
}

export interface ChartResultType {
  statisticTitle: ChartResultTitleType;
  statisticContents: ChartResultContentsType[];
  statisticAnalyze: ChartResultAnalyzeType[];
}

export interface ChartResultTitleType {
  surveyPeriod: string;
  responseUserCount: number;
  statisticSummary: string;
  imgUrl: string;
}

export interface ChartResultContentsType {
  partId: number;
  title: string;
  contentsInfo: ChartContentInfoType[];
}

export interface ChartContentInfoType {
  questionId: number;
  question: string;
}

export interface ChartResultAnalyzeType {
  partId: number;
  title: string;
  description: string;
  imgUrl: string;
  statisticsSummary: ChartResultAnalyzeSummaryType[];
  statisticResult: ChartAnalyzeType[];
}

export interface ChartResultAnalyzeSummaryType {
  summaryId: number;
  summary: string;
}

export interface ChartAnalyzeType {
  statisticId: number;
  question: string;
  chartType: string;
  chartInfo: ChartAnswerType[];
}

export interface ChartAnswerType {
  answer: string;
  answerCount: number;
  rank: number;
}

export interface DoughnutChartData {
  labels: string[];
  datasets: DoughnutChartDataset[];
}

interface DoughnutChartDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

export interface BarChartOption {
  indexAxis: 'y' | 'x';
  responsive: boolean;
}

export interface BarChartData {
  labels: string[];
  datasets: BarChartDataset[];
}

interface BarChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}
