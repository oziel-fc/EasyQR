import ButtonLanguage from './ButtonLanguage';
import ButtonTheme from './ButtonTheme';
import styles from './Header.module.css';
import logo from "@assets/header/easyqr_logo.png";

const Header = () => {
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
          <span className={styles.about}>About</span>
          <ButtonLanguage/>
          <ButtonTheme/>
        </div>
      </div>
    </header>
  )
}

export default Header
