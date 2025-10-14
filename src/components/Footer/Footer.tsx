import styles from "./Footer.module.css";
import github_icon from "@assets/footer/github_icon.png"
import linkedin_icon from "@assets/footer/linkedin_icon.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footer_title}>Contact</h1>
      <div className={styles.contacts_icons}>
        <li>
            <a href="https://github.com/oziel-fc/EasyQR" target="_blank" rel="noopener noreferrer">
                <img src={github_icon} alt="github"/>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/oziel-felipe/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_icon} alt="linkedin"/>
            </a>
        </li>
        
      </div>
      <p style={{color:"rgb(173, 173, 173)"}}>© 2025 EasyQR | Developed by Oziel Felipe.</p>
    </footer>
  )
}

export default Footer
