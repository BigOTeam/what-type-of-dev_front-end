import { AxiosResponse, AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { StatisticFilterDataType } from '../types/chartTypes';
import { ErrorResponse } from '../types/commonTypes';

import ChartService from '../services/ChartService';

const ONE_DAY = 1000 * 60 * 60 * 24;

const useChartSearchList = (params: object) => {
  const queryFn = () => ChartService.getChartSearchList(params);
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<StatisticFilterDataType>,
    AxiosError<ErrorResponse>
  >(['chartSearchList', { params }], queryFn, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: ONE_DAY,
  });

  return {
    isLoading,
    data: data?.data?.chartInfoData,
    isError,
    errorMessage: error?.response?.data.message,
  };
};

export default useChartSearchList;
