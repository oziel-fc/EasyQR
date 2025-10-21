import { create } from "zustand";

type scrollStored = {
    refValue: HTMLDivElement | null;
    setRef: (element: HTMLDivElement | null) => void;
    scrollToRef: () => void;
};

const useScrollStore = create<scrollStored>((set, get) => ({
    refValue: null,

    setRef: (element) => set({ refValue: element }),

    scrollToRef: () => {
        const el = get().refValue;
        if (el) el.scrollIntoView({ behavior: "smooth" });
    },
}));

// Creating a function to About from Header
export default useScrollStore;