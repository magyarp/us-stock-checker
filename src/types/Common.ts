export type Stock = {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  isin: string;
  mic: string;
  shareClassFIGI: string;
  symbol: string;
  symbol2: string;
  type: string;
};

export type StockData = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
};

export type HistoricalStockPrice = {
  c: Array<number>;
  h: Array<number>;
  l: Array<number>;
  o: Array<number>;
  s: string;
  t: Array<number>;
  v: Array<number>;
};
