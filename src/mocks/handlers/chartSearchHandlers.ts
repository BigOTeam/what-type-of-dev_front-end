import { rest } from 'msw';

// import { ChartFilterType } from '../../types/chartTypes';

import { ChartSearchData } from '../database/chart';

export const chartSearchHandlers = [
  rest.get('/statistics/filter', async (request, response, context) => {
    const career = request.url.searchParams.get('career');
    const gender = request.url.searchParams.get('gender');
    const age = request.url.searchParams.get('age');

    const chartJobRankListData = ChartSearchData.filter(
      (chart) => chart.career === career,
    )
      .filter((chart) => chart.gender === gender)
      .filter((chart) => chart.age === age);

    return response(
      context.status(200),
      context.json({
        chartJobRankListData,
      }),
    );
  }),
];
