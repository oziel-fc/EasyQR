import styles from "./About.module.css";
import image_qr from "@assets/about/image_qr.png"
import image_design from "@assets/about/image_design.png"
import image_download from "@assets/about/image_download.png"
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.about}>
            <div className={styles.about_container}>
                <div className={styles.about_title}><h1 style={{fontSize: "20px"}}>{t("about_title")}</h1></div>
                <div className={styles.about_content}>
                    {/* left side */}
                    <div className={styles.side_left}>
                        <div className={styles.about_text}>
                            <p>{t("about_text_1")}</p>
                        </div>
                        <div className={styles.about_image}>
                            <img src={image_design} alt="" />
                        </div>
                        <div className={styles.about_text}>
                            <p>{t("about_text_3")}</p>
                        </div>
                    </div>
                    {/* right side */}
                    <div className={styles.side_right}>
                        <div className={styles.about_image}>
                            <img src={image_qr} alt="image about"/>
                        </div> 
                        <div className={styles.about_text}>
                            <p>{t("about_text_2")} <br/>{t("about_text_2_2")}</p>
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

export default About;
