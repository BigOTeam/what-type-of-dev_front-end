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
  { id: 1, name: '20세 미만', value: '0-20' },
  { id: 2, name: '20 - 24세', value: '20-24' },
  { id: 3, name: '25 - 29세', value: '25-29' },
  { id: 4, name: '30 - 34세', value: '30-34' },
  { id: 5, name: '35 - 39세', value: '35-39' },
  { id: 6, name: '40 - 44세', value: '40-44' },
  { id: 7, name: '45 - 49세', value: '45-49' },
  { id: 8, name: '50세 이상', value: '50-100' },
];
