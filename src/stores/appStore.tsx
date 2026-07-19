import { PageName } from "@/types/app.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AppState = {
  currentPage: PageName;
};

export type AppActions = {
  updateCurrentPage: (newPage: PageName) => void;
};

export type AppStore = AppState & AppActions;

const initialState: AppState = {
  currentPage: "home",
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      ...initialState,
      updateCurrentPage: (newPage: PageName) => set({ currentPage: newPage }),
    }),
    {
      name: "app-store",
    },
  ),
);
