import Car from '../car/car';

export type WinnerType = Pick<WinnersInfo, 'id' | 'wins' | 'time'>;

export type PageInfo = {
  page: number;
  limit: number;
  sort: 'id' | 'wins' | 'time';
  order: 'ASC' | 'DESC';
};

export type WinnersInfo = {
  number: number;
  car: Car | undefined;
  name: string;
  wins: number;
  time: number;
  color: string;
  id: number;
};

export type TableInfo = Pick<WinnersInfo, 'number' | 'car' | 'name' | 'wins' | 'time'>;
