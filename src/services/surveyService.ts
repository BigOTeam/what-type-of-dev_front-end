import { axiosInstance } from '../utils/axios';

class surveyService {
  public static async getNumberOfParticipants() {
    const response = await axiosInstance.get('/api/v1/surveys/count');

    return response.data.responseUserCount;
  }
}

export default surveyService;
