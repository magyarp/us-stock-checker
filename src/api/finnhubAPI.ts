import axios from "axios";
import { FINNHUB_API_BASE_URL } from "../constants/configs";
import { HistoricalStockPrice, Stock, StockData } from "../types/Common";

export const getSupportedStocks = async (): Promise<Array<Stock>> => {
  const response = await axios.get(
    `${FINNHUB_API_BASE_URL}/stock/symbol?exchange=US&token=${
      import.meta.env.VITE_FINNHUB_API_KEY
    }`
  );
  return response.data;
};

export const getCompanyPeers = async (
  symbol: string
): Promise<Array<string>> => {
  const response = await axios.get(
    `${FINNHUB_API_BASE_URL}/stock/peers?symbol=${symbol}&token=${
      import.meta.env.VITE_FINNHUB_API_KEY
    }`
  );
  return response.data;
};

export const getStockData = async (symbol: string): Promise<StockData> => {
  const response = await axios.get(
    `${FINNHUB_API_BASE_URL}/quote?symbol=${symbol}&token=${
      import.meta.env.VITE_FINNHUB_API_KEY
    }`
  );
  return response.data;
};

export const getHistoricalStockPrice = async (
  symbol: string,
  resolution: string,
  from: number,
  to: number
): Promise<HistoricalStockPrice> => {
  const response = await axios.get(
    `${FINNHUB_API_BASE_URL}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${
      import.meta.env.VITE_FINNHUB_API_KEY
    }`
  );
  return response.data;
};
