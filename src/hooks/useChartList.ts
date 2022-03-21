import { AxiosResponse, AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { ChartDataType } from '../types/chartTypes';
import { ErrorResponse } from '../types/commonTypes';

import ChartService from '../services/ChartService';

const useChartList = () => {
  const queryFn = () => ChartService.getChartList();
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<ChartDataType>,
    AxiosError<ErrorResponse>
  >('chartResultList', queryFn);

  console.log(data?.data.chartData);

  return {
    isLoading,
    data: data?.data,
    isError,
    errorMessage: error?.response?.data.message,
  };
};

export default useChartList;
