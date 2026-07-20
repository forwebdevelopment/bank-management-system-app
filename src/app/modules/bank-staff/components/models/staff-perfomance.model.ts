export interface StaffPerformanceModel {
  id: number;
  name: string;
  designation: string;
  initials: string;
  rating: number;
  customersHandled: number;
  transactionsCompleted: number;
  performance: number;
  status: 'Excellent' | 'Good' | 'Average';
}