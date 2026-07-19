export interface DashboardStatistic {
  title: string;
  value: string;
  icon: string;
  growth: number;
  comparisonText: string;
  theme: StatisticCardTheme;
  trendValues: number[];
}

export type StatisticCardTheme =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'teal'
  | 'pink';