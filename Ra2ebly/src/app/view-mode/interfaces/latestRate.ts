export interface LatestRate {

  base: string;
  date: string;
  rates: {
    [currency: string]: number;
  };
  success: boolean;
  timestamp: number;

}
