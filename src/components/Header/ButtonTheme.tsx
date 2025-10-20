import { useState } from "react";
import styles from "./ButtonTheme.module.css";
import useToggleImageTheme from "../Description/toggleImageTheme";

const ButtonTheme = () => {
    const [checked, setChecked] = useState(false);
    const imagesDescriptionTheme = useToggleImageTheme()

    const themes = [
        {
            "--font-color": "white",
            "--primary-dark-color": "#020109",
            "--secondary-dark-color": "#0e0d17",
            "--tertiary-dark-color": "#1d1b2e",
            "--logo-color": "#5e308f",
        },
        {
            "--font-color": "#3a0077",
            "--primary-dark-color": "white",
            "--secondary-dark-color": "rgb(245, 242, 248)",
            "--tertiary-dark-color": "#1d1b2e",
            "--logo-color": "#5e308f",
        }

    ]
    const changeColor = () => {
        const oppositeChecked = !checked;
        const theme = oppositeChecked ? themes[1] : themes[0];

        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(key, value);
        }
        imagesDescriptionTheme.setValue(oppositeChecked ? "light" : "dark");
        setChecked(oppositeChecked)
    };
    console.log(imagesDescriptionTheme.value)

    return (
        <label className={`${styles.theme_toggle} ${checked ? styles.active : ""}`}>
            <input type="checkbox" onChange={() => changeColor()}/>
            <span className={styles.slider}></span>
        </label>
    )
}

export default ButtonTheme;
