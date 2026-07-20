export type TransactionPeriod = 'today' | 'week' | 'month' | 'year';

export interface TransactionSeries {
  labels: string[];
  deposits: number[];
  withdrawals: number[];
  fundTransfers: number[];
}
