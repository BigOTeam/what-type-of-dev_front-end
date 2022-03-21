import { axiosInstance } from '../utils/axios';

class ChartService {
  public static async getChartList() {
    const response = await axiosInstance.get('/statistics');

    return response;
  }
}

export default ChartService;
