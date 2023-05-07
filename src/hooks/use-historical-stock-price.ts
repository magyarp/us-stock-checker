import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getHistoricalStockPrice } from "../api/finnhubAPI";
import { HistoricalStockPrice } from "../types/Common";

export const useHistoricalStockPrice = (
  symbol: string | null, resolution: string, from: number, to: number
): UseQueryResult<HistoricalStockPrice, AxiosError> => {
  return useQuery(["historicalStockPrice", symbol], () => getHistoricalStockPrice(symbol!, resolution, from, to), {
    enabled: symbol !== null,
  });
};
