import { useState, useEffect, useRef } from "react";
import styles from "./ButtonLanguage.module.css";
import arrow_down from "@assets/header/arrow_down.png";
import arrow_up from "@assets/header/arrow_up.png";

const ButtonLanguage = () => {
  const [menu, showMenu] = useState(false)
  const [selectedLang, setSelectedLang] = useState({
    flag: "https://flagcdn.com/us.svg",
    name: "English"
  });

  const languages = [
    { flag: "https://flagcdn.com/us.svg", name: "English" },
    { flag: "https://flagcdn.com/br.svg", name: "Português" },
    { flag: "https://flagcdn.com/es.svg", name: "Español" },
  ];

  // Change the flag and name
  const handleSelect = (lang: { flag: string; name: string }) => {
    setSelectedLang(lang);
    showMenu(false);    // close menu
  };

  // Reference the button element
  const ref = useRef<HTMLDivElement>(null);
  const [widthButton, setWidthButton] = useState('')

  // Update the width value
  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        const newWidth: string = `${ref.current?.offsetWidth}`
        setWidthButton(`${newWidth}px`)
      })

      observer.observe(ref.current)
      return () => observer.disconnect();
    }
  }, []);
  console.log(widthButton)


  return (
    <div className={styles.language} ref={ref}> {/* Element referenced */}
      <button className={styles.change_language_btn} onClick={() => showMenu(!menu)}>
        <div className={styles.language_info}>
          {/* Set a language */}
          <img className={styles.img_country} src={selectedLang.flag} alt="flag"/>
          <span>{selectedLang.name}</span>
          <img className={styles.arrow_btn_menu} src={`${menu ? arrow_up : arrow_down}`} alt="arrow symbol"/>
        </div>
      </button>
      
      {menu && 
      <div className={styles.menu_languages} style={{width: `${widthButton}`}}>
        <div className={styles.padding_menu}>
          {languages.map((lang) => (
              <div
                key={lang.name}
                className={styles.option_language}
                onClick={() => handleSelect(lang)}
              >
                <img className={styles.img_country} src={lang.flag} alt="flag" />
                <span>{lang.name}</span>
              </div>
            ))}
        </div>
      </div>
      }
    </div>
  );
};

export default ButtonLanguage;
