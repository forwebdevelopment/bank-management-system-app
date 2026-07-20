export type GrowthPeriod = 'week' | 'month' | 'year';

export interface GrowthSeries {
  labels: string[];
  newCustomers: number[];
  activeCustomers: number[];
  closedAccounts: number[];
}
