export type ActivityTheme =
  | 'blue'
  | 'purple'
  | 'orange'
  | 'green'
  | 'teal';

export interface RecentActivityModel {
  id: number;
  title: string;
  time: string;
  icon: string;
  theme: ActivityTheme;
}