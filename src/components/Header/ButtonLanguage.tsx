import { useState, useEffect, useRef } from "react";
import styles from "./ButtonLanguage.module.css";
import arrow_down from "@assets/header/arrow_down.png";
import arrow_up from "@assets/header/arrow_up.png";
import i18n from '../../i18n';


const ButtonLanguage = () => {
  const [menu, showMenu] = useState(false)
  // Standard Language
  const [selectedLang, setSelectedLang] = useState({
    flag: "https://flagcdn.com/us.svg",
    name: "English",
    value: "en"
  });

  useEffect(() => {
    // Makes sure the choose value remains active
    switch (i18n.language) {
      case "pt":
        setSelectedLang(languages[1])
        break;
      case "es":
        setSelectedLang(languages[2])
        break;
      case "pl":
        setSelectedLang(languages[3])
        break;
      default:
        setSelectedLang(languages[0])
        break;
    }
  }, [i18n.language]);

  
  // List of languages
  const languages = [
    { flag: "https://flagcdn.com/us.svg", name: "English", value: "en" },
    { flag: "https://flagcdn.com/br.svg", name: "Português", value: "pt" },
    { flag: "https://flagcdn.com/es.svg", name: "Español", value: "es" },
    { flag: "https://flagcdn.com/pl.svg", name: "Polski", value: "pl" },
  ];

  // Change the flag and name
  const handleSelect = (lang: { flag: string; name: string; value: string }) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.value) // changing the language of page
    showMenu(false);    // close menu
  };

  // Reference the button element
  const ref = useRef<HTMLDivElement>(null);
  const [widthButton, setWidthButton] = useState('')

  // Update the width value of child element
  useEffect(() => {
    if (ref.current) {
      const Observer = new ResizeObserver(() => {
        const newWidth: string = `${ref.current?.offsetWidth}`
        setWidthButton(`${newWidth}px`)
      })

      Observer.observe(ref.current)
      return () => Observer.disconnect();
    }
  }, []);


  return (
    <div className={styles.language} ref={ref}> {/* Element referenced */}
      <button className={styles.change_language_btn} onClick={() => showMenu(!menu)}>
        <div className={styles.language_info}>
          {/* Initial language */}
          <img className={styles.img_country} src={selectedLang.flag} alt="flag"/>
          <span>{selectedLang.name}</span>
          <img className={styles.arrow_btn_menu} src={`${menu ? arrow_up : arrow_down}`} alt="arrow symbol"/>
        </div>
      </button>
      
      {/* Created element */}
      {menu && 
      <div className={styles.menu_languages} style={{width: `${widthButton}`}}> {/* Setting the width value*/}
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
