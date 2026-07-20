export type ApprovalPriority = 'High' | 'Medium' | 'Low';
export type ApprovalType =
  | 'Loan Approval'
  | 'ATM Card Request'
  | 'Cheque Book Request'
  | 'Account Opening'
  | 'Account Closure';

  export interface PendingApproval {
  id: number;
  title: ApprovalType;
  customerName: string;
  category: string;
  requestDate: Date;
  priority: ApprovalPriority;
  icon: string;
}
