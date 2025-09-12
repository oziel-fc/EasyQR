import { useState } from "react";
import styles from "./ButtonTheme.module.css";

const ButtonTheme = () => {
    const [checked, setChecked] = useState(false);

    return (
        <label className={`${styles.theme_toggle} ${checked ? styles.active : ""}`}>
            <input type="checkbox" onChange={() => setChecked(!checked)}/>
            <span className={styles.slider}></span>
        </label>
    )
}

export default ButtonTheme
