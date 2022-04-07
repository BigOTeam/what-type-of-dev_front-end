interface Gender {
  id: number;
  name: string;
  value: string;
}

export const GENDER_LIST: Gender[] = [
  { id: 1, name: '남성', value: '남성' },
  { id: 2, name: '여성', value: '여성' },
];

interface Age {
  id: number;
  name: string;
  value: string;
}

export const AGE_LIST: Age[] = [
  { id: 1, name: '20세 미만', value: '20세 미만' },
  { id: 2, name: '20 - 24세', value: '20-24세' },
  { id: 3, name: '25 - 29세', value: '25-29세' },
  { id: 4, name: '30 - 34세', value: '30-34세' },
  { id: 5, name: '35 - 39세', value: '35-39세' },
  { id: 6, name: '40 - 44세', value: '40-44세' },
  { id: 7, name: '45 - 49세', value: '45-49세' },
  { id: 8, name: '50세 이상', value: '50세이상' },
];
