import { create } from "zustand";

type downloadStored = {
    refValue: HTMLCanvasElement | null; 
    setRef: (element: HTMLCanvasElement | null) => void;
    downloadFormatImg: (selectedFormat: string) => void;
};

const useDownloadImage = create<downloadStored>((set, get) => ({
    refValue: null,

    setRef: (element) => set({ refValue: element }),

    downloadFormatImg: (selectedFormat) => {
        const canvas = get().refValue;
        if (!canvas) return console.warn("Don't exists Canvas Element to download.");

        try {
            let dataUrl = "";

            switch (selectedFormat) {
                case ".jpeg":
                    dataUrl = canvas.toDataURL("image/jpeg", 0.95);
                    break;
                case ".webp":
                    dataUrl = canvas.toDataURL("image/webp", 0.95); 
                    break;
                case ".png":
                default:
                    dataUrl = canvas.toDataURL("image/png");
                    break;
            }

            const link = document.createElement("a");
            link.download = `easyqr${selectedFormat}`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
        console.error("Error to generate canvas image", err);
        }
    },
})
);

export default useDownloadImage;
