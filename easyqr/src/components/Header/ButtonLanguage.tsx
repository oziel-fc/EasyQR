import styles from "./ButtonLanguage.module.css";
import arrow_down from "@assets/arrow_down.png";

const ButtonLanguage = () => {
  return (
    <div className={styles.language}>
      <button className={styles.change_language_btn}>
        <div className={styles.language_info}>
          <img className={styles.img_country} src="https://flagcdn.com/us.svg" alt="flag"/>
          <span>English</span>
          <img className={styles.arrow_opt_lang} src={arrow_down} alt="arrow down"/>
        </div>
      </button>
    </div>
  );
};

export default ButtonLanguage;
