export interface BranchData {
  branchCode: string;
  branchName: string;
  branchManager: string;
  managerAvatar?: string; // For manager avatars matching your layout picture
  city: string;
  state: string;
  phoneNumber: string;    // ADDED
  totalCustomers: number; // ADDED
  totalAccounts: number;  // ADDED
  status: string;
  createdDate: string;    // ADDED
}

export interface BranchRecordSchema {
  branchCode: string;
  branchName: string;
  branchManager: string;
  city: string;
  state: string;
  phoneNumber: string;
  totalCustomers: number;
  totalAccounts: number;
  status: string;
  createdDate: string;
}

export interface BranchRecord {
  code: string;
  name: string;
  managerName: string;
  managerAvatar: string;
  city: string;
  state: string;
  phone: string;
  totalCustomers: string;
  totalAccounts: string;
  status: 'Active' | 'Inactive';
  createdDate: string;
}


export interface KpiCardItem {
  icon: string;
  iconClass: string;
  title: string;
  count: string;
  trendText: string;
  trendDirection: 'up' | 'down';
  trendClass: string;
}
