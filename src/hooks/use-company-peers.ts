import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCompanyPeers } from "../api/finnhubAPI";
import { AxiosError } from "axios";

export const useCompanyPeers = (
  symbol: string | null
): UseQueryResult<Array<string>, AxiosError> => {
  return useQuery(["companyPeers", symbol], () => getCompanyPeers(symbol!), {
    enabled: symbol !== null,
  });
};
