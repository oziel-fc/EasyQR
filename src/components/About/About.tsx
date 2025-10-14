import styles from "./About.module.css";
import image_qr from "@assets/about/image_qr.png"
import image_design from "@assets/about/image_design.png"
import image_download from "@assets/about/image_download.png"

const About = () => {
  return (
    <section className={styles.about}>
        <div className={styles.about_container}>
            <div className={styles.about_title}><h1 style={{fontSize: "20px"}}>About EasyQR</h1></div>
            <div className={styles.about_content}>
                {/* left side */}
                <div className={styles.side_left}>
                    <div className={styles.about_text}>
                        <p>EasyQR is a free and intuitive tool that lets you generate QR Codes in seconds. With it, 
                        you can easily create customized codes for links, texts, numbers, contacts, Wi-Fi, and much more, all with just a few clicks.</p>
                    </div>
                    <div className={styles.about_image}>
                        <img src={image_design} alt="" />
                    </div>
                    <div className={styles.about_text}>
                        <p>Finally, you can download and share the generated QR code in different formats. This project is part of 
                        my personal portfolio, you can find more information in the footer.</p>
                    </div>
                </div>
                {/* right side */}
                <div className={styles.side_right}>
                    <div className={styles.about_image}>
                        <img src={image_qr} alt="image about"/>
                    </div> 
                    <div className={styles.about_text}>
                        <p>Quickly create fully customizable QR Codes.
                        Choose a background color, main color, maybe a custom logo. <br/>Customize the code to your style.</p>
                    </div>
                    <div className={styles.about_image}>
                        <img src={image_download} alt="" />
                    </div>  
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About
