import styles from "./ToolDescription.module.css";
import icon_url from "@assets/description/icon_url.png";
import icon_customize from "@assets/description/icon_customize.png";
import icon_download from "@assets/description/icon_download.png";
import { useTranslation } from "react-i18next";


const Description = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.description}>
      <div className={styles.description_container}>
        <h1 className={styles.description_title}>{t("description_title")}</h1>
        <p className={styles.description_subtext}>{t("description_subtext")}</p>
        <div className={styles.tutorial_cards}>
          {/* Card 1 */}
          <div className={styles.hover_change}>
            <div className={styles.tool_description}>
              <img src={icon_url} alt="url icon" />
              <h3 style={{fontSize: "24px"}}>{t("card_title_1")}</h3>
              <p style={{color: "rgb(173, 173, 173)"}}>{t("card_description_1")}</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className={styles.hover_change}>
            <div className={styles.tool_description}>
              <img src={icon_customize} alt="customize icon" />
              <h3 style={{fontSize: "24px"}}>{t("card_title_2")}</h3>
              <p style={{color: "rgb(173, 173, 173)"}}>{t("card_description_2")}</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className={styles.hover_change}>
            <div className={styles.tool_description}>
              <img src={icon_download} alt="download icon" />
              <h3 style={{fontSize: "24px"}}>{t("card_title_3")}</h3>
              <p style={{color: "rgb(173, 173, 173)"}}>{t("card_description_3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
