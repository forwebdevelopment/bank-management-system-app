
interface ReportSummaryModel {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  route: string;
}
