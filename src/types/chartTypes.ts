import { Context } from 'chartjs-plugin-datalabels';
import { Padding } from 'chartjs-plugin-datalabels/types/options';

export interface ChartDataType {
  statisticsData: ChartResultType;
}

export interface ChartResultType {
  header: ChartHeaderType;
  contents: ChartContentsType[];
}

export interface ChartHeaderType {
  endDate: string;
  userCount: number;
  careerCount: number;
  newCount: number;
}

export interface ChartContentsType {
  groupId: number;
  groupName: string;
  questionInfo: QuestionInfoType[];
  description: string;
  imgUrl: string;
  summaryInfo: string[];
  result: ChartAnalyzeType[];
}

export interface QuestionInfoType {
  id: number;
  question: string;
}

export interface ChartAnalyzeType {
  id: number;
  question: string;
  chartType: string;
  chartInfoData: ChartInfoType;
}

export interface ChartInfoType {
  content: string[];
  count: number[];
  countPercent: number[];
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
            family: string;
            weight: 'bold' | 'normal' | 'bolder' | 'lighter';
          };
        };
      };
    };
    tooltip: TooltipType;
  };
}

interface TooltipType {
  backgroundColor: string;
  bodyColor: string;
  bodyFont: {
    size: number;
    weight: 'bold' | 'normal' | 'bolder' | 'lighter';
  };
  padding: Padding;
}

export interface DoughnutChartData {
  labels: string[];
  datasets: DoughnutChartDataset[];
}

interface DoughnutChartDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
  hoverBorderWidth: number;
}

export interface BarChartOption {
  responsive: boolean;
  indexAxis: 'y' | 'x';
  plugins: {
    datalabels: {
      display: boolean;
    };
    legend: {
      display: boolean;
    };
    tooltip: TooltipType;
  };
  scales: {
    y: {
      ticks: {
        autoSkip: boolean;
        font: {
          family: string;
          // weight: 'bold' | 'normal' | 'bolder' | 'lighter';
        };
      };
    };
    x: {
      ticks: {
        font: {
          family: string;
          // weight: 'bold' | 'normal' | 'bolder' | 'lighter';
        };
      };
    };
  };
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
  hoverBorderWidth: number;
}

export interface ChartFilterType {
  gender: string;
  age: string;
  chartInfoData: ChartInfoType;
}

export interface StatisticFilterDataType {
  chartInfoData: ChartInfoType;
}

