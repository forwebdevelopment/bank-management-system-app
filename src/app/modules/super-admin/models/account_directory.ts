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
  branchKey: string; // Used for filter mapping matches
  accountType: string;
  accountTypeKey: string;
  availableBalance: string;
  currency: string;
  status: 'active' | 'frozen' | 'dormant' | 'closed';
  openedDate: string;
  lastTransaction: string;
}