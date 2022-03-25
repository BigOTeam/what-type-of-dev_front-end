import { Context } from 'chartjs-plugin-datalabels';
import { Padding } from 'chartjs-plugin-datalabels/types/options';

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
  responseCareerCount: number;
  responseNewCount: number;
  statisticSummary: string;
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

export interface DoughnutChartOption {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    datalabels: {
      formatter: (value: number, context: Context) => string;
      labels: {
        value: {
          font: {
            weight: 'bold' | 'normal' | 'bolder' | 'lighter';
          };
        };
      };
    };
    tooltip: {
      backgroundColor: string;
      bodyColor: string;
      bodyFont: {
        size: number;
        weight: 'bold' | 'normal' | 'bolder' | 'lighter';
      };
      padding: Padding;
    };
  };
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
  plugins: {
    datalabels: {
      display: boolean;
    };
    legend: {
      display: boolean;
    };
    tooltip: {
      backgroundColor: string;
      bodyColor: string;
      bodyFont: {
        size: number;
        weight: 'bold' | 'normal' | 'bolder' | 'lighter';
      };
      padding: Padding;
    };
  };
  scales: {
    y: {
      ticks: {
        autoSkip: boolean;
      };
    };
  };
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
