import { useQuery } from 'react-query';

import SurveyService from '../services/SurveyService';
import { SurveyRequestType } from '../types/SurveyType';

const useSurveyList = (params: SurveyRequestType) => {
  const queryFn = () => SurveyService.getSurvey(params);
  const { isLoading, data, isError, error } = useQuery(
    ['surveyList', params],
    queryFn,
    { refetchOnWindowFocus: false },
  );

  return {
    isLoading,
    surveyData: data,
    isError,
    error,
  };
};

export default useSurveyList;
