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
          // Mark all files inactive first
          const normalized = state.openFiles.map((f) => ({
            ...f,
            isActive: false,
          }));

          // If file already open, activate in-place (keep order)
          const existingIndex = normalized.findIndex(
            (f) =>
              f.fileName === newActiveFile.fileName &&
              f.belongsTo === newActiveFile.belongsTo,
          );

          if (existingIndex !== -1) {
            const updated = normalized.map((f, i) =>
              i === existingIndex ? { ...f, isActive: true } : f,
            );
            return {
              openFiles: updated,
              currentFile: { ...updated[existingIndex] },
            };
          }

          // Not open yet — append to end and activate
          const newFile: FakeFile = { ...newActiveFile, isActive: true };
          return {
            currentFile: newFile,
            openFiles: [...normalized, newFile],
          };
        }),
      removeActiveFile: (
        fileNameToRemove: string,
        fileToRemoveBelongsTo: FakeFileBelongsTo,
      ) =>
        set((state) => {
          const remaining = state.openFiles.filter(
            (f) =>
              !(
                f.fileName === fileNameToRemove &&
                f.belongsTo === fileToRemoveBelongsTo
              ),
          );

          const removedWasCurrent =
            !!state.currentFile &&
            state.currentFile.fileName === fileNameToRemove &&
            state.currentFile.belongsTo === fileToRemoveBelongsTo;

          if (remaining.length === 0) {
            return {
              openFiles: [],
              currentFile: null,
            };
          }

          if (removedWasCurrent) {
            // Activate the last remaining file
            const last = remaining[remaining.length - 1];
            const normalized = remaining.map((f, i) => ({
              ...f,
              isActive: i === remaining.length - 1,
            }));
            return {
              openFiles: normalized,
              currentFile: { ...last, isActive: true },
            };
          }

          // Removed file was not current then keep currentFile as-is but ensure its isActive flag is true in the list
          const normalized = remaining.map((f) => ({
            ...f,
            isActive:
              !!state.currentFile &&
              f.fileName === state.currentFile.fileName &&
              f.belongsTo === state.currentFile.belongsTo,
          }));
          return {
            openFiles: normalized,
            currentFile: state.currentFile,
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
