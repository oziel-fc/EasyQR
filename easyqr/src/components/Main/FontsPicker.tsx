import { useState } from "react";
import styles from "./FontsPicker.module.css";

const FontSelector = () => {
  const [selectedFont, setSelectedFont] = useState("");
  const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];

  return (
    <div className={styles.font_picker}>
      <span>Font</span>
      <select className={styles.picker}
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
        style={{ fontFamily: selectedFont }}
      >
        <option value="" >Selecione uma fonte</option>
        {fonts.map((font, index) => (
          <option
            key={index}
            value={font}
            style={{ fontFamily: font }} 
          >
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
