import { rest } from 'msw';

import { JobTypeDetailData } from '../database/jobTypeDetail';

export const jobTypeDetailHandlers = [
  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/api/v1/surveys/jobs/:jobId`,
    async (request, response, context) => {
      const { jobId } = request.params;

      const jobIndex = JobTypeDetailData.findIndex(
        (job) => job.jobId === Number(jobId),
      );
      const status: number = 200;

      if (status === 500) {
        return response(
          context.status(500),
          context.json({
            message: '서버에 오류가 생겼습니다.',
          }),
        );
      }

      return response(
        context.json({
          jobId: JobTypeDetailData[jobIndex].jobId,
          jobName: JobTypeDetailData[jobIndex].jobName,
          jobImg: JobTypeDetailData[jobIndex].jobImg,
          jobDescription: JobTypeDetailData[jobIndex].jobDescription,
        }),
      );
    },
  ),
];
