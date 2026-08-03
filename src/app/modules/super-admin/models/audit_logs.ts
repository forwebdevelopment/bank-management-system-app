export interface AuditFilterState {
  userName: string;
  employeeId: string;
  userRole: string;
  branch: string;
  module: string;
  actionType: string;
  severity: string;
  dateRange: string;
  timeRange: string;
  ipAddress: string;
  status: string;
}


export interface AuditLogRecord {
  id: string;
  time: string;
  date: string;
  userName: string;
  userInitials: string;
  employeeId: string;
  userRole: string;
  branch: string;
  module: string;
  actionType: string;
  ipAddress: string;
  status: 'Success' | 'Warning' | 'Failed';
}


export interface FullAuditLog {
  id: string; logId: string; date: string; time: string; userName: string; avatarUrl: string;
  employeeId: string; userRole: string; branch: string; module: string; actionType: string;
  status: 'Success' | 'Warning' | 'Failed'; severity: 'Low' | 'Medium' | 'High';
}

export interface LeaderboardUser {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  actionCount: number;
}
