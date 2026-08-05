export interface ActiveSessionItem {
  avatarUrl: string;
  userName: string;
  branch: string;
  loginTime: string;
  deviceIcon: string; // 'computer' or 'smartphone'
  duration: string;
  status: string;
}

export interface DistributionLegendItem {
  role: string;
  percentage: string;
  count: string;
  colorClass: string;
}

export interface SecurityAlertItem {
  icon: string;
  iconClass: string;
  title: string;
  user: string;
  timestamp: string;
  severity: 'High' | 'Medium' | 'Low';
  severityClass: string;
}
