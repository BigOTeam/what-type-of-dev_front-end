import { AxiosResponse, AxiosError } from 'axios';

import { useQuery } from 'react-query';

// import { ChartFilterType } from '../types/chartTypes';
import { ErrorResponse } from '../types/commonTypes';

import ChartService from '../services/ChartService';

const useChartSearchList = (params: object) => {
  const queryFn = () => ChartService.getChartSearchList(params);
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<any>,
    AxiosError<ErrorResponse>
  >(['chartSearchList', { params }], queryFn);

  console.log(
    'chartSearchList',
    data?.data?.chartJobRankListData[0]?.chartJobRankList,
  );

  return {
    isLoading,
    data: data?.data?.chartJobRankListData[0]?.chartJobRankList,
    isError,
    errorMessage: error?.response?.data.message,
  };
};

export default useChartSearchList;
