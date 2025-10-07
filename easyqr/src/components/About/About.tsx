import styles from "./About.module.css";
import icon_url from "@assets/about/icon_url.png";
import icon_customize from "@assets/about/icon_customize.png";
import icon_download from "@assets/about/icon_download.png";


const About = () => {
  return (
    <section className={styles.about_container}>
      <div className={styles.about_section}>
        <h1 style={{fontSize: "30px"}}>EasyQR: Create your Free QR Code</h1>
        <p style={{color: "#adadad"}}>Customize with your style in just 3 steps</p>
        <div className={styles.tutorial_card}>
            <div className={styles.tool_description}>
                <img src={icon_url} alt="url icon" />
                <h3 style={{fontSize: "24px"}}>Choose Your Content</h3>
                <p style={{color: "rgb(173, 173, 173)"}}>Enter any text in the input box to create the QR Code.</p>
            </div>
            <div className={styles.tool_description}>
                <img src={icon_customize} alt="customize icon" />
                <h3 style={{fontSize: "24px"}}>Customize And Design</h3>
                <p style={{color: "rgb(173, 173, 173)"}}>Customize your QR Code in the best way, change colors and choose different logos.</p>
            </div>
            <div className={styles.tool_description}>
                <img src={icon_download} alt="download icon" />
                <h3 style={{fontSize: "24px"}}>Download Your QRCode</h3>
                <p style={{color: "rgb(173, 173, 173)"}}>Get your QR code in different formats (png, svg, jpeg), make download and done.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
