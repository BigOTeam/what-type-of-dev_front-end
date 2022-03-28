import { axiosInstance } from '../utils/axios';

class ChartService {
  public static async getChartList() {
    const response = await axiosInstance.get('/statistics');
    return response;
  }

  public static async getChartSearchList(params: object) {
    const response = await axiosInstance.get('/statistics/filter', { params });
    return response;
  }
}

export default ChartService;
