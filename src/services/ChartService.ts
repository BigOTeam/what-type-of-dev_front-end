import { axiosInstance } from '../utils/axios';

class ChartService {
  public static async getChartList() {
    const response = await axiosInstance.get(`/api/v1/statistics`);
    return response;
  }

  public static async getChartSearchList(params: object) {
    const response = await axiosInstance.get(`/api/v1/statistics/filter`, {
      params,
    });
    return response;
  }

  public static async getNumberOfParticipants() {
    const response = await axiosInstance.get('/api/v1/statistics/count');

    return response.data.responseUserCount;
  }
}

export default ChartService;
