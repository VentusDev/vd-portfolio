import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDashStore = create(
    persist(
    (set) => ({
	dashState: true,
    setDash: () => set((state) => ({ dashState: !state.dashState })),
    modeState: false,
    setMode: () => set((state) => ({ modeState: !state.modeState })),
}),
{
    name: "vdPanel",
}));
