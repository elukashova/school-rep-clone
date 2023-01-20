import { PageInfo } from '../winners/page-winners.types';

export type PageStatus = Pick<PageInfo, 'page' | 'limit'>;
