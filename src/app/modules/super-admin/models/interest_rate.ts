export interface BankingProductRate {
  id: string;
  productType: string;
  category: string;
  rate: number;
  minBalance: number;
  formattedMinBalance: string;
  maxBalance: number | 'No Limit';
  formattedMaxBalance: string;
  effectiveFrom: string;
  effectiveTo: string;
  status: 'Active' | 'Inactive';
  productClass: string;
  iconCode: string;
  updatedBy: string;
  updatedAt: string;
}