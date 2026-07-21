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
