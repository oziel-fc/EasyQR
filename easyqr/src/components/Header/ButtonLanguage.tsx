import { useState } from "react";
import styles from "./ButtonLanguage.module.css";
import arrow_down from "@assets/arrow_down.png";
import arrow_up from "@assets/arrow_up.png";

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

  const handleSelect = (lang: { flag: string; name: string }) => {
    setSelectedLang(lang);
    showMenu(false);    // close menu
  };

  return (
    <div className={styles.language}>
      <button className={styles.change_language_btn} onClick={() => showMenu(!menu)}>
        <div className={styles.language_info}>
          {/* Set a language */}
          <img className={styles.img_country} src={selectedLang.flag} alt="flag"/>
          <span>{selectedLang.name}</span>
          <img className={styles.arrow_btn_menu} src={`${menu ? arrow_up : arrow_down}`} alt="arrow down"/>
        </div>
      </button>
      
      {menu && 
      <div className={styles.menu_languages}>
        <div className={styles.position_menu}>
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
