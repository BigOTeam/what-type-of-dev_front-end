import {
  SurveyRequestType,
  SurveyResultRequestType,
} from '../types/SurveyType';
import { axiosInstance } from '../utils/axios';

class SurveyService {
  public static async getSurvey(params: SurveyRequestType) {
    const response = await axiosInstance.get('/api/v1/surveys', {
      params,
    });

    return response.data;
  }

  public static async sendSurvey(params: SurveyResultRequestType) {
    const response = await axiosInstance.post(
      '/rec-api/v1/surveys/results',
      params,
    );

    return response.data;
  }

  public static async getJobs() {
    const response = await axiosInstance.get('/api/v1/surveys/jobs');

    return response.data;
  }

  public static async getJobDetail(jobId: number) {
    const response = await axiosInstance.get(`/api/v1/surveys/jobs/${jobId}`);

    return response.data;
  }
}

export default SurveyService;
