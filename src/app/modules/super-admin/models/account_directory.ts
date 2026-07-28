export interface MetricCard {
  title: string;
  count: string;
  percentage: string;
  isPositive: boolean;
  color: string; // Used for icon background and chart line
  chartData: number[];
}

export interface FilterCriteria {
  accountNumber: string;
  customerName: string;
  customerId: string;
  branch: string;
  accountType: string;
  status: string;
  currency: string;
}

export interface AccountRecord {
  accountNumber: string;
  customerName: string;
  customerId: string;
  branch: string;
  accountType: string;
  availableBalance: number;
  currency: string;
  status: 'Active' | 'Frozen' | 'Dormant' | 'Closed';
  openedDate: string;
  lastTransaction: string;
}