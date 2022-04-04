interface Gender {
  id: number;
  name: string;
  value: string;
}

export const GENDER_LIST: Gender[] = [
  { id: 1, name: '남성', value: 'male' },
  { id: 2, name: '여성', value: 'female' },
];

interface Age {
  id: number;
  name: string;
  value: string;
}

export const AGE_LIST: Age[] = [
  { id: 1, name: '20세 미만', value: '20' },
  { id: 2, name: '20 - 24세', value: '2024' },
  { id: 3, name: '25 - 29세', value: '2529' },
  { id: 4, name: '30 - 34세', value: '3034' },
  { id: 5, name: '35 - 39세', value: '3539' },
  { id: 6, name: '40 - 44세', value: '4044' },
  { id: 7, name: '45 - 49세', value: '4549' },
  { id: 8, name: '50세 이상', value: '50' },
];
