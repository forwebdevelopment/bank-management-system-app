export interface ReportRecordModel {
 id: number;
  name: string;
  type: string;
  generatedBy: string;
  date: string;
  format: 'PDF' | 'Excel';
  status: 'Completed' | 'Pending' | 'Failed';
}