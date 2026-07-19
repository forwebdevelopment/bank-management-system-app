export type BranchStatus = 'Active' | 'Inactive';

export interface BranchPerformanceModel {
  id: number;
  branchCode: string;
  branchName: string;
  location: string;
  managerName: string;
  customers: number;
  accounts: number;
  deposits: number;
  revenue: number;
  growth: number;
  status: BranchStatus;
}