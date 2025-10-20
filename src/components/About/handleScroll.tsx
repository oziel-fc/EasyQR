import { create } from "zustand";

type ScrollStore = {
    refValue: HTMLDivElement | null;
    setRef: (element: HTMLDivElement | null) => void;
    scrollToRef: () => void;
};

const useScrollStore = create<ScrollStore>((set, get) => ({
    refValue: null,

    setRef: (element) => set({ refValue: element }),

    scrollToRef: () => {
        const el = get().refValue;
        if (el) el.scrollIntoView({ behavior: "smooth" });
    },
}));

export default useScrollStore;