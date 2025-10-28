import ButtonLanguage from './ButtonLanguage';
import ButtonTheme from './ButtonTheme';
import styles from './Header.module.css';
import logo from "@assets/header/easyqr_logo.png";
import { useTranslation } from "react-i18next";
import useScrollStore from '../utils/handleScroll';


const Header = () => {
  const { t } = useTranslation();
  const scroll = useScrollStore().scrollToRef;
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left_header}>
          <a className={styles.link_logo} href="/">
            <img className={styles.easyqr_logo} src={logo} alt="logo" />
            <span className={styles.logo_name}>EasyQR</span>
          </a>  
        </div>
        
        <div className={styles.right_header}>
          <div onClick={scroll} className={styles.div_about}>
            <span className={styles.about}>{t("about")}</span>
          </div>
          <ButtonLanguage/>
          <ButtonTheme/>
        </div>
      </div>
    </header>
  )
}

export default Header
