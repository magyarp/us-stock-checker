import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getStockData } from "../api/finnhubAPI";
import { AxiosError } from "axios";

export const useStockData = (
  symbol: string | null
): UseQueryResult<Array<string>, AxiosError> => {
  return useQuery(["stockData", symbol], () => getStockData(symbol!), {
    enabled: symbol !== null,
  });
};
