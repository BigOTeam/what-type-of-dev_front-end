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
  groupImg: string;
  summaryInfos: string[];
  results: ChartAnalyzeType[];
}

export interface ChartAnalyzeType extends QuestionInfoType {
  chartType: string;
  chartInfoData: ChartInfoType;
}

export interface QuestionInfoType {
  id: number;
  question: string;
}

export interface ChartInfoType {
  contents: string[];
  count: number[];
  countPercent: number[];
}

export interface ChartFilterType {
  gender: string;
  age: string;
  chartInfoData: ChartInfoType;
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
    tooltip: DoughnutTooltipType;
  };
}

interface DoughnutTooltipType extends TooltipType {
  callbacks: {
    label: (data: any) => string;
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

export type IndexAxisType = 'y' | 'x';

export interface BarChartOption {
  // maintainAspectRatio: boolean;
  // aspectRatio:number;
  responsive: boolean;
  indexAxis: IndexAxisType;
  plugins: {
    datalabels: {
      display: boolean;
      labels: {
        value: {
          font: {
            family: string;
            weight: FontWeightType;
            size: number;
          };
        };
      };
    };
    legend: {
      display: boolean;
      position: 'bottom';
    };
    tooltip: BarTooltipType;
  };
  scales: {
    y: {
      ticks: {
        padding: number;
        autoSkip: boolean;
        font: {
          size: number;
          family: string;
        };
      };
    };
    x: {
      ticks: {
        font: {
          size: number;
          family: string;
        };
      };
    };
  };
}

interface BarTooltipType extends TooltipType {
  titleColor: string;
  titleFont: {
    size: number;
    weight: FontWeightType;
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
