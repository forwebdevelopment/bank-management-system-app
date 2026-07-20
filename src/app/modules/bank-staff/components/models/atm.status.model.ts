
export type AtmStatusType = 'Operational' | 'Low Cash' | 'Offline';

export interface AtmMachine {
  atmId: string;
  location: string;
  cashAvailable: string;
  lastTransaction: string;
  status: AtmStatusType;
}
