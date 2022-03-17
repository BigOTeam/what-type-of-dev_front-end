export interface ChartResultType {
  id: number;
  question: string;
  chartType: string;
  chartAnswerInfo: ChartAnswerType[];
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
