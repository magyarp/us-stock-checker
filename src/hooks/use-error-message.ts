import { useMemo } from "react";
import {
  MISSING_OR_INVALID_API_KEY,
  NETWORK_ERROR_TRY_LATER,
  UNKNOWN_ERROR_TRY_AGAIN,
} from "../constants/texts";
import { AxiosError, HttpStatusCode } from "axios";

export const useErrorMessage = (error: AxiosError | null) => {
  return useMemo(() => {
    if (error && !error.response) {
      return NETWORK_ERROR_TRY_LATER;
    }
    if (error && error.response?.status === HttpStatusCode.Unauthorized) {
      return MISSING_OR_INVALID_API_KEY;
    }
    return UNKNOWN_ERROR_TRY_AGAIN;
  }, [error]);
};
