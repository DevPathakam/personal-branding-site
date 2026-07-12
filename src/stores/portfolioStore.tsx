import { FakeFile, FakeFileBelongsTo } from "@/types/portfolio";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PortfolioState = {
  openFiles: FakeFile[];
  currentFile: FakeFile | null;
  showLeftSidebar: boolean;
  jsonFileLineCounts: number | null;
};

export type PortfolioActions = {
  addActiveFile: (newActiveFile: FakeFile) => void;
  removeActiveFile: (
    fileNameToRemove: string,
    fileToRemoveBelongsTo: FakeFileBelongsTo,
  ) => void;
  toggleLeftSidebar: () => void;
  setJsonFileLineCounts: (count: number | null) => void;

  resetState: () => void;
};

export type PortfolioStore = PortfolioState & PortfolioActions;

const initialState: PortfolioState = {
  openFiles: [],
  currentFile: null,
  showLeftSidebar: true,
  jsonFileLineCounts: null,
};

export const usePortfolioStore = create<PortfolioStore>()(
  persist(
    (set) => ({
      ...initialState,
      addActiveFile: (newActiveFile: FakeFile) =>
        set((state) => {
          const newFile: FakeFile = { ...newActiveFile, isActive: true };
          return {
            currentFile: newFile,
            openFiles: [...state.openFiles, newFile],
          };
        }),
      removeActiveFile: (
        fileNameToRemove: string,
        fileToRemoveBelongsTo: FakeFileBelongsTo,
      ) =>
        set((state) => {
          return {
            openFiles: state.openFiles.filter(
              (f) =>
                !(
                  f.fileName === fileNameToRemove &&
                  f.belongsTo === fileToRemoveBelongsTo
                ),
            ),
            currentFile: state.openFiles[state.openFiles.length - 1],
          };
        }),
      toggleLeftSidebar: () =>
        set((state) => ({ showLeftSidebar: !state.showLeftSidebar })),
      setJsonFileLineCounts: (count: number | null) =>
        set({ jsonFileLineCounts: count }),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      resetState: () => set((_state) => initialState),
    }),
    {
      name: "portfolio-store",
    },
  ),
);
