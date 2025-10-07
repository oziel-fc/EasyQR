import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_section}>
        <h1 style={{fontSize: "30px"}}>EasyQR: Create your Free QR Code</h1>
        <p style={{color: "#adadad"}}>Customize with your style in just 3 steps</p>
        <div className={styles.tutorial_card}>
            <div className={styles.tool_description}>
                
            </div>
            <div className={styles.tool_description}></div>
            <div className={styles.tool_description}></div>
        </div>
      </div>
    </div>
  )
}

export default About
