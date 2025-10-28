import { useState, useEffect } from "react";
import styles from "./ButtonTheme.module.css";
import useToggleImageTheme from "../utils/toggleImageTheme";

const ButtonTheme = () => {
    const [checked, setChecked] = useState(() => {
        const saveState = localStorage.getItem("checked");          // rescue the value on localStorage
        return saveState ? JSON.parse(saveState) : false;
    });

    const imagesDescriptionTheme = useToggleImageTheme()

    useEffect(() => {
        localStorage.setItem("checked", JSON.stringify(checked));
        // executes only one time when enter the page and every time when checked been activated
        const theme = checked ? themes[1] : themes[0];
        
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(key, value);
        }
        imagesDescriptionTheme.setValue(checked ? "light" : "dark");

    }, [checked]);
    
    const themes = [
        {
            "--font-color": "white",
            "--primary-dark-color": "#020109",
            "--secondary-dark-color": "#0e0d17"
        },
        {
            "--font-color": "#3a0077",
            "--primary-dark-color": "white",
            "--secondary-dark-color": "rgb(245, 242, 248)"
        }
    ]
    
    // invert the value
    const changeColor = () => {
        setChecked(!checked)
    };

    return (
        <label className={styles.theme_toggle}>
            <input type="checkbox" checked={checked} onChange={() => changeColor()}/>
            <span className={styles.slider}></span>
        </label>
    )
}

export default ButtonTheme;
