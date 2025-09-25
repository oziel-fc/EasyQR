import { useState } from "react";

const FontSelector = () => {
  const [selectedFont, setSelectedFont] = useState("");
  const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];

  return (
    <div>
      <select
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
      >
        <option value="">Selecione uma fonte</option>
        {fonts.map((font, index) => (
          <option
            key={index}
            value={font}
            style={{ fontFamily: font }} // cada item com a própria fonte
          >
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
