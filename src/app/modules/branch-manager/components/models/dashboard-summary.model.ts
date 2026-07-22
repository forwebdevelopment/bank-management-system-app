
export type MetricStatusType =
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export interface DashboardMetric {
  title: string;
  value: string;
  icon: string;
  changeText: string;
  description: string;
  status: MetricStatusType;
  route?: string;
  chartPoints: number[];
}