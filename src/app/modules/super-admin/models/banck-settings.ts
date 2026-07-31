export interface DropdownOption {
  value: string;
  label: string;
}

export interface UploadItem {
  id: string;
  title: string;
  hint: string;
  iconPath: string; // Used for standard SVG paths
  previewUrl: string | null;
}


export interface StatusService {
  name: string;
  status: 'Healthy' | 'Warning' | 'Down';
}


export interface ProfileStat {
  label: string;
  value: string;
  iconPath: string;
}
export interface SummaryMetric {
  label: string;
  percentage: number;
  count: number;
  color: string;
}

export interface AuditLogItem {
  id: number;
  activity: string;
  timestamp: string;
  adminUser: string;
}


