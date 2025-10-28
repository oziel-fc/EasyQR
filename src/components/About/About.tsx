import { useRef, useEffect, useState } from "react";
import styles from "./About.module.css";
import image_qr from "@assets/about/image_qr.png"
import image_design from "@assets/about/image_design.png"
import image_download from "@assets/about/image_download.png"
import { useTranslation } from "react-i18next";
import useScrollStore from "../utils/handleScroll";

const About = () => {
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement | null>(null);
    const { setRef } = useScrollStore();

    useEffect(() => {
        setRef(ref.current);
    }, [setRef]);

    // If the width page is minor than 600 return true for the isMobile
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)       // Boolean
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={styles.about}>
            <div className={styles.about_container} ref={ref}>
                <div className={styles.about_title}><h1>{t("about_title")}</h1></div>
                <div className={styles.about_content}>
                    {isMobile ? 
                        (<>
                            <div className={styles.about_image}>
                                <img src={image_design} alt="image about"/>
                            </div>
                            <div className={styles.about_text}>
                                <p>{t("about_text_1")}</p>
                            </div>
                            <div className={styles.about_image}>
                                <img src={image_qr} alt="" />
                            </div>
                            <div className={styles.about_text}>
                                <p>{t("about_text_2")} <br/>{t("about_text_2_2")}</p>
                            </div>
                            <div className={styles.about_image}>
                                <img src={image_download} alt="" />
                            </div>
                            <div className={styles.about_text}>
                                <p>{t("about_text_3")}</p>
                            </div>
                        </>) 
                        : 
                        (<>
                            {/* left side */}
                            <div className={styles.side_left}>
                                <div className={styles.about_text}>
                                    <p>{t("about_text_1")}</p>
                                </div>
                                <div className={styles.about_image}>
                                    <img src={image_qr} alt="" />
                                </div>
                                <div className={styles.about_text}>
                                    <p>{t("about_text_3")}</p>
                                </div>
                            </div>
                            {/* right side */}
                            <div className={styles.side_right}>
                                <div className={styles.about_image}>
                                    <img src={image_design} alt="image about"/>
                                </div> 
                                <div className={styles.about_text}>
                                    <p>{t("about_text_2")} <br/>{t("about_text_2_2")}</p>
                                </div>
                                <div className={styles.about_image}>
                                    <img src={image_download} alt="" />
                                </div>  
                            </div>
                        </>
                    )}
                </div>
            </div>
            
        </section>
  )
}

export default About;
