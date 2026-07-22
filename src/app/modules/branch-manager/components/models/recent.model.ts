
export type TransactionStatus = 'Success' | 'Pending' | 'Failed';
export type TransactionType = 'Deposit' | 'Withdrawal' | 'Fund Transfer';

export  interface RecentTransaction {
  transactionId: string;
  customerName: string;
  accountNumber: string;
  type: TransactionType;
  amount: number;
  dateTime: Date;
  status: TransactionStatus;
}
