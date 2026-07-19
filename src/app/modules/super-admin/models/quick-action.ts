export type QuickActionTheme =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'teal'
  | 'red';

export interface QuickActionModel {
  id: number;
  title: string;
  description: string;
  icon: string;
  route: string;
  theme: QuickActionTheme;
}