import styles from "./About.module.css";
import icon_url from "@assets/about/icon_url.png";
import icon_customize from "@assets/about/icon_customize.png";
import icon_download from "@assets/about/icon_download.png";


const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_section}>
        <h1 style={{fontSize: "30px"}}>EasyQR: Create your Free QR Code</h1>
        <p style={{color: "#adadad"}}>Customize with your style in just 3 steps</p>
        <div className={styles.tutorial_card}>
            <div className={styles.tool_description}>
                <img src={icon_url} alt="url icon" />
            </div>
            <div className={styles.tool_description}>
                <img src={icon_customize} alt="customize icon" />
            </div>
            <div className={styles.tool_description}>
                <img src={icon_download} alt="download icon" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
