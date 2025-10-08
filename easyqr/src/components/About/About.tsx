import styles from "./About.module.css";
import image_qr from "@assets/about/image_qr.png"
import image_design from "@assets/about/image_design.png"
import image_download from "@assets/about/image_download.png"

const About = () => {
  return (
    <section className={styles.about}>
        <div className={styles.about_container}>
            <div className={styles.container_left}></div>
            <div className={styles.container_right}></div>
            {/* <div style={{width: "300px", height: "300px"}}>
                <img src={image_qr} alt="" />
            </div>
            <div style={{width: "300px", height: "300px"}}>
                <img src={image_design} alt="" />
            </div>
            <div style={{width: "300px", height: "300px"}}>
                <img src={image_download} alt="" />
            </div> */}
        </div>
    </section>
  )
}

export default About
