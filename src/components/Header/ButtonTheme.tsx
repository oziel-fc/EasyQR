import { useState } from "react";
import styles from "./ButtonTheme.module.css";

const ButtonTheme = () => {
    const [checked, setChecked] = useState(false);
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
        if (checked) {
            const darkTheme = themes[0]
            for (const [atr, value] of Object.entries(darkTheme)) {
                document.documentElement.style.setProperty(`${atr}`, `${value}`);
            }
        }
        else {
            const lightTheme = themes[1]
            for (const [atr, value] of Object.entries(lightTheme)) {
                document.documentElement.style.setProperty(`${atr}`, `${value}`);
            }
        }
        setChecked(!checked)
    };

    return (
        <label className={`${styles.theme_toggle} ${checked ? styles.active : ""}`}>
            <input type="checkbox" onChange={() => changeColor()}/>
            <span className={styles.slider}></span>
        </label>
    )
}

export default ButtonTheme;
