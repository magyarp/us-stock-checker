import { create } from "zustand";

type AppState = {
  symbol: string | null;
  setSymbol: (symbol: string) => void;
};

const useAppStore = create<AppState>()((set) => ({
  symbol: null,
  setSymbol: (symbol) => set({ symbol }),
}));

export default useAppStore;
