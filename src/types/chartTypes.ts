import { Context } from 'chartjs-plugin-datalabels';
import { Padding } from 'chartjs-plugin-datalabels/types/options';

export interface ChartDataType {
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
  description: string;
  imgUrl: string;
  summaryInfos: string[];
  results: ChartAnalyzeType[];
}

export interface QuestionInfoType {
  id: number;
  question: string;
}

export interface ChartAnalyzeType extends QuestionInfoType {
  chartType: string;
  chartInfoData: ChartInfoType;
}

export interface ChartInfoType {
  contentList: string[];
  countList: number[];
  countPercentList: number[];
}

type FontWeightType = 'bold' | 'normal' | 'bolder' | 'lighter';

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
            weight: FontWeightType;
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
    weight: FontWeightType;
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

export type IndexAxisType = 'y' | 'x';

export interface BarChartOption {
  responsive: boolean;
  indexAxis: IndexAxisType;
  plugins: {
    datalabels: {
      display: boolean;
    };
    legend: {
      display: boolean;
      position: 'bottom';
    };
    tooltip: TooltipType;
  };
  scales: {
    y: {
      ticks: {
        autoSkip: boolean;
        font: {
          family: string;
        };
      };
    };
    x: {
      ticks: {
        font: {
          family: string;
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
