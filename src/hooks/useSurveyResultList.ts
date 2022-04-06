import { useQuery } from 'react-query';

import { AxiosResponse } from 'axios';

import SurveyService from '../services/SurveyService';
import {
  SurveyResultRequestType,
  SurveyResultResponseType,
} from '../types/SurveyType';

const useSurveyResultList = (params: SurveyResultRequestType) => {
  const queryFn = () => SurveyService.sendSurvey(params);

  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<SurveyResultResponseType>
  >('surveyResult', queryFn, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return {
    isLoading,
    surveyResultData: data,
    isError,
    error,
  };
};

export default useSurveyResultList;
