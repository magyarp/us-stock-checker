import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getStockData } from "../api/finnhubAPI";
import { AxiosError } from "axios";
import { StockData } from "../types/Common";

export const useStockData = (
  symbol: string | null
): UseQueryResult<StockData, AxiosError> => {
  return useQuery(["stockData", symbol], () => getStockData(symbol!), {
    enabled: symbol !== null,
  });
};
