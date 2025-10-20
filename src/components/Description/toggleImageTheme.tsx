import { create } from "zustand";
import icon_content_dark from "@assets/description/icon_content_light.png";
import icon_design_dark from "@assets/description/icon_design_light.png";
import icon_download_dark from "@assets/description/icon_download_light.png";
import icon_content_light from "@assets/description/icon_content_dark.png";
import icon_design_light from "@assets/description/icon_design_dark.png";
import icon_download_light from "@assets/description/icon_download_dark.png";

const imagesAboutCardsDark = {
    iconContent: icon_content_dark,
    iconDesign: icon_design_dark,
    iconDownload: icon_download_dark,
};

const imagesAboutCardsLight = {
    iconContent: icon_content_light,
    iconDesign: icon_design_light,
    iconDownload: icon_download_light,
};

type themeStoredProps = {
    value: string;
    setValue: (v: string) => void;
    getImages: () => typeof imagesAboutCardsDark;
};

const useToggleImageTheme = create<themeStoredProps>((set, get) => ({
    value: "dark",
    setValue: (newValue) => set({ value: newValue }),
    getImages: () => {
        const newTheme = get().value
        return newTheme === "dark" ? imagesAboutCardsDark : imagesAboutCardsLight;
    }
}));

// creating a function with global state to share with 2 others components
export default useToggleImageTheme;