export interface UserDirectoryEntryModel {
  employeeId: string;
  profileUrl: string;
  fullName: string;
  email: string;
  mobile: string;
  role: string;
  branch: string;
  status: 'Active' | 'Inactive' | 'Locked';
  lastLogin: string;
  createdDate: string;
}