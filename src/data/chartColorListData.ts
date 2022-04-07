export interface ChartColor {
  colorList: string[];
  borderColor: string;
}

export const CHART_COLOR: ChartColor = {
  colorList: ['#F5BF97', '#97CDF5', '#97CDF5'],
  borderColor: '#C6D1D8',
};

export interface ChartDefaultStyle {
  cardColor: string;
  font: {
    color: string;
    family: string;
    size: number;
  };
  border: {
    color: string;
    width: number;
    doughnutHoverWidth: number;
    barHoverWidth: number;
  };
  tooltip: {
    paddingSize: number;
    fontSize: number;
  };
}

export const CHART_DEFAULT_STYLE: ChartDefaultStyle = {
  cardColor: '#FFFFFF',
  font: {
    color: '#000000',
    family: 'Spoqa Han Sans Neo',
    size: 8,
  },
  border: {
    color: '#FFFFFF',
    width: 0,
    doughnutHoverWidth: 4,
    barHoverWidth: 0,
  },
  tooltip: {
    paddingSize: 8,
    fontSize: 12,
  },
};
