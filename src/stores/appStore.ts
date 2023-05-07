import { create } from "zustand";
import { Stock } from "../types/Common";

type AppState = {
  symbol: string | null;
  setSymbol: (symbol: string) => void;

  stocks: Array<Stock> | null;
  setStocks: (stocks: Array<Stock>) => void; 
};

const useAppStore = create<AppState>()((set) => ({
  symbol: null,
  setSymbol: (symbol) => set({ symbol }),

  stocks: null,
  setStocks: (stocks) => set({ stocks }),
}));

export default useAppStore;
