import axios from "axios";
import { FINNHUB_API_BASE_URL } from "../constants/configs";
import { Stock } from "../types/Common";

export const getSupportedStocks = async (): Promise<Array<Stock>> => {
  const response = await axios.get(
    `${FINNHUB_API_BASE_URL}/stock/symbol?exchange=US&token=${
      import.meta.env.VITE_FINNHUB_API_KEY
    }`
  );
  return response.data;
};
