export const formData1 = {
  code: '',
  message: '',
  data: {
    pageNo: 1,
    pageName: '자기소개',
    pageDescription: '당신에 대해서 알려주세요!',
    pageImageUrl: '/images/1_자기소개.png',
    survey: [
      {
        questionId: 1,
        question: '당신은 개발자인가요?',
        answers: [
          {
            answerSeq: 1,
            answer: '네',
          },
          {
            answerSeq: 2,
            answer: '아니요',
          },
        ],
      },
      {
        questionId: 2,
        question: '어느 분야의 개발자인가요?',
        answers: [
          {
            answerSeq: 1,
            answer: '웹',
          },
          {
            answerSeq: 2,
            answer: '금융',
          },
          {
            answerSeq: 3,
            answer: '응용소프트웨어',
          },
          {
            answerSeq: 4,
            answer: '시스템소프트웨어',
          },
          {
            answerSeq: 5,
            answer: '게임',
          },
          {
            answerSeq: 6,
            answer: '엔터테인먼트',
          },
          {
            answerSeq: 7,
            answer: '인프라',
          },
          {
            answerSeq: 8,
            answer: '빅데이터/머신러닝',
          },
          {
            answerSeq: 9,
            answer: 'DB',
          },
          {
            answerSeq: 10,
            answer: '프로그래밍툴',
          },
          {
            answerSeq: 11,
            answer: '기타',
          },
        ],
      },
      {
        questionId: 3,
        question: '연령대를 선택해주세요.',
        answers: [
          {
            answerSeq: 1,
            answer: '20세 미만',
          },
          {
            answerSeq: 2,
            answer: '20-24세',
          },
          {
            answerSeq: 3,
            answer: '25-29세',
          },
          {
            answerSeq: 4,
            answer: '30-34세',
          },
          {
            answerSeq: 5,
            answer: '35-39세',
          },
          {
            answerSeq: 6,
            answer: '40-44세',
          },
          {
            answerSeq: 7,
            answer: '45-49세',
          },
          {
            answerSeq: 8,
            answer: '50세 이상',
          },
        ],
      },
      {
        questionId: 4,
        question: '성별을 선택해주세요.',
        answers: [
          {
            answerSeq: 1,
            answer: '남성',
          },
          {
            answerSeq: 2,
            answer: '여성',
          },
        ],
      },
      {
        questionId: 5,
        question: '희망 연봉은 얼마인가요?(단위 만원)',
        answers: [
          {
            answerSeq: 1,
            answer: '2000-3000 미만',
          },
          {
            answerSeq: 2,
            answer: '3000-4000 미만',
          },
          {
            answerSeq: 3,
            answer: '4000-5000 미만',
          },
          {
            answerSeq: 4,
            answer: '5000-6000 미만',
          },
          {
            answerSeq: 5,
            answer: '6000-7000 미만',
          },
          {
            answerSeq: 6,
            answer: '7000-8000 미만',
          },
          {
            answerSeq: 7,
            answer: '8000-9000 미만',
          },
          {
            answerSeq: 8,
            answer: '9000-1억 미만',
          },
          {
            answerSeq: 9,
            answer: '1억 이상',
          },
        ],
      },
      {
        questionId: 6,
        question: '선호하는 근무 형태는 무엇인가요?',
        answers: [
          {
            answerSeq: 1,
            answer: '회사 출근',
          },
          {
            answerSeq: 2,
            answer: '재택근무',
          },
          {
            answerSeq: 3,
            answer: '난 천재라서 어디든 됨',
          },
          {
            answerSeq: 4,
            answer: '상관 없음',
          },
        ],
      },
      {
        questionId: 7,
        question: '사용하는 모바일 운영체제는 무엇인가요?',
        answers: [
          {
            answerSeq: 1,
            answer: 'Android',
          },
          {
            answerSeq: 2,
            answer: 'iOS',
          },
          {
            answerSeq: 3,
            answer: '기타',
          },
        ],
      },
    ],
  },
};

export const formData2 = {
  code: '',
  message: '',
  data: {
    pageNo: 2,
    pageName: '개발관련',
    pageDescription: '당신이 개발자라면?',
    pageImageUrl: '/images/2_개발관련.png',
    survey: [
      {
        questionId: 8,
        question: '어떤 타입의 헤드셋을 사용하시나요?',
        answers: [
          {
            answerSeq: 1,
            answer: '유선',
          },
          {
            answerSeq: 2,
            answer: '무선',
          },
          {
            answerSeq: 3,
            answer: '유/무선 둘 다',
          },
          {
            answerSeq: 4,
            answer: '사용하지 않음',
          },
        ],
      },
      {
        questionId: 9,
        question: '점심은 주로 어떻게 드세요?',
        answers: [
          {
            answerSeq: 1,
            answer: '스스로 해먹는다',
          },
          {
            answerSeq: 2,
            answer: '냉장/냉동식품',
          },
          {
            answerSeq: 3,
            answer: '사내식당',
          },
          {
            answerSeq: 4,
            answer: '외식',
          },
          {
            answerSeq: 5,
            answer: '배달',
          },
          {
            answerSeq: 6,
            answer: '먹지 않음',
          },
        ],
      },
      {
        questionId: 10,
        question: '일 할 때 어떤 음료를 마시나요?',
        answers: [
          {
            answerSeq: 1,
            answer: '커피',
          },
          {
            answerSeq: 2,
            answer: '차',
          },
          {
            answerSeq: 3,
            answer: '물',
          },
          {
            answerSeq: 4,
            answer: '맥주',
          },
          {
            answerSeq: 5,
            answer: '에너지음료',
          },
          {
            answerSeq: 6,
            answer: '청량음료',
          },
        ],
      },
      {
        questionId: 11,
        question: '팀 규모가 몇 명인 곳에서 일하고 싶나요?',
        answers: [
          {
            answerSeq: 1,
            answer: '혼자',
          },
          {
            answerSeq: 2,
            answer: '2-7인',
          },
          {
            answerSeq: 3,
            answer: '8-12인',
          },
          {
            answerSeq: 4,
            answer: '13-20인',
          },
          {
            answerSeq: 5,
            answer: '21-40인',
          },
          {
            answerSeq: 6,
            answer: '40인 이상',
          },
        ],
      },
      {
        questionId: 12,
        question: '주로 몇 시부터 일하나요? 또는 몇 시부터 일하고 싶나요?',
        answers: [
          {
            answerSeq: 1,
            answer: '6시 이전',
          },
          {
            answerSeq: 2,
            answer: '6-7시',
          },
          {
            answerSeq: 3,
            answer: '7-8시',
          },
          {
            answerSeq: 4,
            answer: '8-9시',
          },
          {
            answerSeq: 5,
            answer: '9-10시',
          },
          {
            answerSeq: 6,
            answer: '10-11시',
          },
          {
            answerSeq: 7,
            answer: '11-12시',
          },
          {
            answerSeq: 8,
            answer: '12-13시',
          },
          {
            answerSeq: 9,
            answer: '13-14시',
          },
          {
            answerSeq: 10,
            answer: '13-14시',
          },
          {
            answerSeq: 11,
            answer: '14-15시',
          },
          {
            answerSeq: 12,
            answer: '15-16시',
          },
          {
            answerSeq: 13,
            answer: '16-17시',
          },
          {
            answerSeq: 13,
            answer: '16-17시',
          },
          {
            answerSeq: 13,
            answer: '16-17시',
          },
          {
            answerSeq: 13,
            answer: '16-17시',
          },
          {
            answerSeq: 14,
            answer: '17-18시',
          },
          {
            answerSeq: 15,
            answer: '18-19시',
          },
          {
            answerSeq: 16,
            answer: '19-20시',
          },
          {
            answerSeq: 17,
            answer: '20-21시',
          },
        ],
      },
    ],
  },
};
