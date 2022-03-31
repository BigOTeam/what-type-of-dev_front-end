import { ChartFilterType, ChartResultType } from '../../types/chartTypes';

export const statisticsData: ChartResultType = {
  statisticTitle: {
    surveyDate: '04/08',
    responseUserCount: 2000,
    responseCareerCount: 1000,
    responseNewCount: 2000,
    statisticSummary:
      '명의 이용자들이 설문에 참여했습니다. 아래 통계는 답변 내용을 비율별로 정리한 결과입니다. 다른 개발자들은 어떤 마음가짐으로 생활을 하는지 엿보며 비교해 보세요.',
  },
  statisticContents: [
    {
      partId: 1,
      title: '프로필',
      contentsInfo: [
        { questionId: 1, question: '현직에서 개발일을 하고 계신가요?' },
        {
          questionId: 2,
          question:
            '현직 개발자인 경우, 현재 일하고 있는 분야를 선택해주세요. 현직 개발자가 아닌 경우, 어느 분야에서 일하고 싶은지 선택해주세요.',
        },
        { questionId: 3, question: '연령대를 선택해주세요.' },
        { questionId: 4, question: '성별을 선택해주세요.' },
        { questionId: 5, question: '희망 연봉은 얼마인가요?' },
        { questionId: 6, question: '당신의 직업에 얼마나 만족하나요?' },
      ],
    },
    {
      partId: 2,
      title: '생활모습',
      contentsInfo: [
        { questionId: 1, question: '사용하는 모바일 운영체제는 무엇인가요?' },
        {
          questionId: 2,
          question: '선호하는 근무 형태는 무엇인가요?',
        },
        { questionId: 3, question: '일할 때 어떤 음료를 마시나요?' },
        {
          questionId: 4,
          question: '다른 사람을 돕는 것을 중요하게 생각하시나요?',
        },
        {
          questionId: 5,
          question: '항상 올바르게 행동하는 것을 중요하게 생각하나요?',
        },
        {
          questionId: 6,
          question:
            '값 비싼 것을 소유하고, 부자가 되는 것을 중요하게 생각하나요?',
        },
        {
          questionId: 7,
          question:
            '모든 것을 고려했을 때, 요즘 당신의 삶은 얼마나 만족스러운가요?',
        },
        {
          questionId: 8,
          question:
            '어떤 위험 요소도 없는 안전한 삶을 사는 것을 중요하게 생각하나요?',
        },
      ],
    },
  ],
  statisticAnalyze: [
    {
      partId: 1,
      title: '프로필',
      description: 'ㅇㅇ명의 개발자와 ㅇㅇ명의 예비 개발자가 참여했습니다.',
      imgUrl: '/images/chart/self.png',
      statisticsSummary: [
        {
          summaryId: 1,
          summary:
            '참여한 현 개발자의 Top 3는 웹, 모바일, 블록체인 순서였습니다.',
        },
        { summaryId: 2, summary: '희망연봉 1순위는 1억 이상이었습니다.' },
        {
          summaryId: 3,
          summary: '현재 직업에 만족하는 비율은 40%였습니다.',
        },
      ],
      statisticResult: [
        {
          statisticId: 1,
          question: '현직에서 개발일을 하고 계신가요?',
          chartType: 'doughnut',
          chartInfo: [
            { answer: '예', answerCount: 60, rank: 1 },
            { answer: '아니요', answerCount: 40, rank: 2 },
          ],
        },
        {
          statisticId: 2,
          question:
            '현직 개발자인 경우, 현재 일하고 있는 분야를 선택해주세요. 현직 개발자가 아닌 경우, 어느 분야에서 일하고 싶은지 선택해주세요.',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '웹', answerCount: 50, rank: 1 },
            { answer: '금융', answerCount: 30, rank: 2 },
            { answer: '응용소프트웨어', answerCount: 20, rank: 3 },
            { answer: '시스템소프트웨어', answerCount: 17, rank: 4 },
            { answer: '게임', answerCount: 15, rank: 1 },
            { answer: '엔터테이먼트', answerCount: 13, rank: 6 },
            { answer: '인프라', answerCount: 11, rank: 7 },
            { answer: '데이터/머신러닝', answerCount: 9, rank: 8 },
            { answer: 'DB', answerCount: 4, rank: 9 },
            { answer: '기타', answerCount: 1, rank: 10 },
          ],
        },
        {
          statisticId: 3,
          question: '연령대를 선택해주세요.',
          chartType: 'verticalBar',
          chartInfo: [
            { answer: '20세 미만', answerCount: 1, rank: 0 },
            { answer: '20-24세', answerCount: 2, rank: 0 },
            { answer: '25-29세', answerCount: 80, rank: 0 },
            { answer: '30-34세', answerCount: 9, rank: 0 },
            { answer: '35-39세', answerCount: 2, rank: 0 },
            { answer: '40-44세', answerCount: 3, rank: 0 },
            { answer: '45-49세', answerCount: 2, rank: 0 },
            { answer: '50세 이상', answerCount: 1, rank: 0 },
          ],
        },
        {
          statisticId: 4,
          question: '성별을 선택해주세요.',
          chartType: 'doughnut',
          chartInfo: [
            { answer: '여성', answerCount: 51, rank: 1 },
            { answer: '남성', answerCount: 49, rank: 2 },
          ],
        },
        {
          statisticId: 5,
          question: '희망 연봉은 얼마인가요?',
          chartType: 'verticalBar',
          chartInfo: [
            { answer: '2000-3000만원', answerCount: 1, rank: 0 },
            { answer: '3000-4000만원', answerCount: 19, rank: 0 },
            { answer: '4000-5000만원', answerCount: 30, rank: 0 },
            { answer: '5000-6000만원', answerCount: 30, rank: 0 },
            { answer: '6000-7000만원', answerCount: 10, rank: 0 },
            { answer: '7000-8000만원', answerCount: 5, rank: 0 },
            { answer: '8000-9000만원', answerCount: 2, rank: 0 },
            { answer: '1억 이상', answerCount: 3, rank: 0 },
          ],
        },
        {
          statisticId: 6,
          question: '당신의 직업에 얼마나 만족하나요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '완전히 만족', answerCount: 10, rank: 0 },
            { answer: '매우 만족', answerCount: 10, rank: 0 },
            { answer: '꽤 만족', answerCount: 20, rank: 0 },
            { answer: '보통', answerCount: 10, rank: 0 },
            { answer: '꽤 불만족', answerCount: 30, rank: 0 },
            { answer: '매우 불만족', answerCount: 5, rank: 0 },
            { answer: '완전히 불만족', answerCount: 5, rank: 0 },
            { answer: '모르겠다', answerCount: 10, rank: 0 },
          ],
        },
      ],
    },
    {
      partId: 2,
      title: '생활 모습',
      description: '선호하는 근무 형태 1순위는 원격 근무였습니다.',
      imgUrl: '/images/chart/satisfaction.png',
      statisticsSummary: [
        {
          summaryId: 1,
          summary:
            '사용하는 모바일 운영체제는 iOS가 51%, Android가 49%였습니다.',
        },
        {
          summaryId: 2,
          summary: 'ㅇㅇ%의 응답자가 현재 삶에 만족스럽다고 답변했습니다.',
        },
        {
          summaryId: 3,
          summary:
            '일할 때 즐겨마시는 음료 1순위는 커피, 2순위는 에너지음료, 3순위는 물이었습니다.',
        },
      ],
      statisticResult: [
        {
          statisticId: 1,
          question: '일 할 때 어떤 음료를 마시나요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '커피', answerCount: 50, rank: 1 },
            { answer: '차', answerCount: 11, rank: 4 },
            { answer: '물', answerCount: 9, rank: 5 },
            { answer: '에너지음료', answerCount: 30, rank: 2 },
            { answer: '맥주', answerCount: 19, rank: 3 },
            { answer: '청량음료', answerCount: 9, rank: 5 },
          ],
        },
        {
          statisticId: 2,
          question: '사용하는 모바일 운영체제는 무엇인가요?',
          chartType: 'doughnut',
          chartInfo: [
            { answer: 'iOS', answerCount: 51, rank: 1 },
            { answer: 'Andriod', answerCount: 49, rank: 2 },
          ],
        },
        {
          statisticId: 3,
          question:
            '모든 것을 고려했을 때, 요즘 당신의 삶은 얼마나 만족스러운가요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '모르겠다', answerCount: 1, rank: 0 },
            { answer: '매우매우 불만족', answerCount: 9, rank: 0 },
            { answer: '매우 불만족', answerCount: 10, rank: 0 },
            { answer: '꽤 불만족', answerCount: 5, rank: 0 },
            { answer: '불만족', answerCount: 25, rank: 0 },
            { answer: '약간 불만족', answerCount: 20, rank: 0 },
            { answer: '약간 만족', answerCount: 10, rank: 0 },
            { answer: '만족', answerCount: 1, rank: 0 },
            { answer: '꽤 만족', answerCount: 8, rank: 0 },
            { answer: '매우 만족', answerCount: 2, rank: 0 },
            { answer: '매우매우 만족', answerCount: 9, rank: 0 },
          ],
        },
        {
          statisticId: 4,
          question: '선호하는 근무 형태는 무엇인가요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '재택근무', answerCount: 70, rank: 1 },
            { answer: '출퇴근', answerCount: 10, rank: 3 },
            {
              answer: '난 짱이라서 어디든 가능',
              answerCount: 19,
              rank: 2,
            },
            { answer: '상관 없음', answerCount: 1, rank: 4 },
          ],
        },
        {
          statisticId: 5,
          question:
            '값 비싼 것을 소유하고, 부자가 되는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '매우 그렇다', answerCount: 20, rank: 0 },
            { answer: '그렇다', answerCount: 25, rank: 0 },
            { answer: '그렇지 않다', answerCount: 15, rank: 0 },
            { answer: '매우 그렇지 않다', answerCount: 20, rank: 0 },
            { answer: '모르겠다', answerCount: 20, rank: 0 },
          ],
        },
        {
          statisticId: 6,
          question:
            '어떤 위험 요소도 없는 안전한 삶을 사는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '매우 그렇다', answerCount: 20, rank: 0 },
            { answer: '그렇다', answerCount: 25, rank: 0 },
            { answer: '그렇지 않다', answerCount: 15, rank: 0 },
            { answer: '매우 그렇지 않다', answerCount: 20, rank: 0 },
            { answer: '모르겠다', answerCount: 20, rank: 0 },
          ],
        },
        {
          statisticId: 7,
          question: '다른 사람을 돕는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '매우 그렇다', answerCount: 20, rank: 0 },
            { answer: '그렇다', answerCount: 25, rank: 0 },
            { answer: '그렇지 않다', answerCount: 15, rank: 0 },
            { answer: '매우 그렇지 않다', answerCount: 20, rank: 0 },
            { answer: '모르겠다', answerCount: 20, rank: 0 },
          ],
        },
        {
          statisticId: 8,
          question: '항상 올바르게 행동하는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: [
            { answer: '매우 그렇다', answerCount: 20, rank: 0 },
            { answer: '그렇다', answerCount: 25, rank: 0 },
            { answer: '그렇지 않다', answerCount: 15, rank: 0 },
            { answer: '매우 그렇지 않다', answerCount: 20, rank: 0 },
            { answer: '모르겠다', answerCount: 20, rank: 0 },
          ],
        },
      ],
    },
  ],
};

export const ChartSearchData: ChartFilterType[] = [
  {
    gender: 'all',
    age: 'all',
    statisticFilterData: {
      JobRankData: [
        {
          rankId: 1,
          jobName: '웹',
          userCount: 210,
        },
        {
          rankId: 2,
          jobName: '인프라',
          userCount: 200,
        },
        {
          rankId: 3,
          jobName: '게임',
          userCount: 150,
        },
        {
          rankId: 4,
          jobName: '금융',
          userCount: 140,
        },
        {
          rankId: 5,
          jobName: '시스템소프트웨어',
          userCount: 130,
        },
        {
          rankId: 6,
          jobName: '엔터테인먼트',
          userCount: 110,
        },
        {
          rankId: 7,
          jobName: '데이터/머신러닝',
          userCount: 20,
        },
        {
          rankId: 8,
          jobName: 'DB',
          userCount: 10,
        },
        {
          rankId: 9,
          jobName: '프로그래밍툴',
          userCount: 8,
        },
        {
          rankId: 10,
          jobName: '응용소프트웨어',
          userCount: 2,
        },
      ],
    },
  },
  {
    gender: 'female',
    age: 'all',
    statisticFilterData: {
      JobRankData: [
        {
          rankId: 1,
          jobName: '인프라',
          userCount: 220,
        },
        {
          rankId: 2,
          jobName: '웹',
          userCount: 190,
        },
        {
          rankId: 3,
          jobName: '게임',
          userCount: 150,
        },
        {
          rankId: 4,
          jobName: '금융',
          userCount: 140,
        },
        {
          rankId: 5,
          jobName: '시스템소프트웨어',
          userCount: 130,
        },
        {
          rankId: 6,
          jobName: '엔터테인먼트',
          userCount: 110,
        },
        {
          rankId: 7,
          jobName: '데이터/머신러닝',
          userCount: 20,
        },
        {
          rankId: 8,
          jobName: 'DB',
          userCount: 10,
        },
        {
          rankId: 9,
          jobName: '프로그래밍툴',
          userCount: 8,
        },
        {
          rankId: 10,
          jobName: '응용소프트웨어',
          userCount: 2,
        },
      ],
    },
  },
  {
    gender: 'male',
    age: 'all',
    statisticFilterData: {
      JobRankData: [
        {
          rankId: 1,
          jobName: '게임',
          userCount: 200,
        },
        {
          rankId: 2,
          jobName: '웹',
          userCount: 198,
        },
        {
          rankId: 3,
          jobName: '인프라',
          userCount: 150,
        },
        {
          rankId: 4,
          jobName: '금융',
          userCount: 140,
        },
        {
          rankId: 5,
          jobName: '시스템소프트웨어',
          userCount: 130,
        },
        {
          rankId: 6,
          jobName: '엔터테인먼트',
          userCount: 110,
        },
        {
          rankId: 7,
          jobName: '데이터/머신러닝',
          userCount: 20,
        },
        {
          rankId: 8,
          jobName: 'DB',
          userCount: 10,
        },
        {
          rankId: 9,
          jobName: '프로그래밍툴',
          userCount: 8,
        },
        {
          rankId: 10,
          jobName: '응용소프트웨어',
          userCount: 2,
        },
      ],
    },
  },
  {
    gender: 'male',
    age: '2529',
    statisticFilterData: {
      JobRankData: [
        {
          rankId: 1,
          jobName: '시스템소프트웨어',
          userCount: 200,
        },
        {
          rankId: 2,
          jobName: '웹',
          userCount: 198,
        },
        {
          rankId: 3,
          jobName: '인프라',
          userCount: 150,
        },
        {
          rankId: 4,
          jobName: '금융',
          userCount: 140,
        },
        {
          rankId: 5,
          jobName: '게임',
          userCount: 130,
        },
        {
          rankId: 6,
          jobName: '엔터테인먼트',
          userCount: 110,
        },
        {
          rankId: 7,
          jobName: '데이터/머신러닝',
          userCount: 20,
        },
        {
          rankId: 8,
          jobName: 'DB',
          userCount: 10,
        },
        {
          rankId: 9,
          jobName: '프로그래밍툴',
          userCount: 8,
        },
        {
          rankId: 10,
          jobName: '응용소프트웨어',
          userCount: 2,
        },
      ],
    },
  },
];
