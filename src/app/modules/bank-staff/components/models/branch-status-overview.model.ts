export interface CashPositionItem {
  label: string;
  amount: string;
  icon: string;
}

export interface PendingTask {
  title: string;
  count: number;
  icon: string;
  priority: 'high' | 'medium' | 'low';
  route: string;
}

export interface PerformanceFactor {
  label: string;
  percentage: number;
}