import { useState } from "react";
import styles from "./SizePicker.module.css";

type SizeSelectorProps = {
  titleSize: string;
  onChange?: (size: string) => void;
};

const SizeSelector = ({ titleSize, onChange }: SizeSelectorProps) => {
  const [selectedFont, setSelectedFont] = useState("");
  const sizes = ["small", "mid", "big"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedFont(value);
    if (onChange) onChange(value);
  };

  return (
    <div className={styles.size_picker}>
      <span>{titleSize}</span>
      <select
        className={styles.picker}
        value={selectedFont}
        onChange={handleChange}
        style={{ fontFamily: selectedFont }}
      >
        <option value="" style={{ textAlign: "center" }}>
          Select Size
        </option>
        {sizes.map((size, index) => (
          <option
            key={index}
            value={size}
            style={{ textAlign: "center" }}
          >
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
