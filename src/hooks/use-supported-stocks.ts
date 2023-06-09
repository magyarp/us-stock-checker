import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getSupportedStocks } from "../api/finnhubAPI";
import { AxiosError } from "axios";
import { Stock } from "../types/Common";

export const useSupportedStocks = (enabled: boolean): UseQueryResult<
  Array<Stock>,
  AxiosError
> => {
  return useQuery(["supportedStocks"], getSupportedStocks, { enabled: enabled });
};
