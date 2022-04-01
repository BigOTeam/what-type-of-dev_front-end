import { rest } from 'msw';

import { ChartLabelDataType } from '../../types/chartTypes';

import { ChartSearchData } from '../database/chart';

export const chartSearchHandlers = [
  rest.get('api/v1/statistics/filter', async (request, response, context) => {
    const gender = request.url.searchParams.get('gender');
    const age = request.url.searchParams.get('age');

    const JobRankData: ChartLabelDataType = ChartSearchData.filter(
      (chart) => chart.gender === gender,
    ).filter((chart) => chart.age === age)[0]?.statisticFilterData.JobRankData;

    return response(
      context.status(200),
      context.json({
        JobRankData,
      }),
    );
  }),
];
