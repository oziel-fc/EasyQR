import useToggleImageTheme from "./toggleImageTheme";
import styles from "./ToolDescription.module.css";
import { useTranslation } from "react-i18next";


const Description = () => {
  const { t } = useTranslation();
  const imagePath = useToggleImageTheme().getImages();

  return (
    <section className={styles.description}>
      <div className={styles.description_container}>
        <h1 className={styles.description_title}>{t("description_title")}</h1>
        <p className={styles.description_subtext}>{t("description_subtext")}</p>
        <div className={styles.tutorial_cards}>
          {/* Card 1 */}
          <div className={styles.hover_change}>
            <div className={styles.tool_description}>
              <img src={imagePath.iconContent} alt="url icon" />
              <h3 style={{fontSize: "24px"}}>{t("card_title_1")}</h3>
              <p style={{color: "rgb(173, 173, 173)"}}>{t("card_description_1")}</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className={styles.hover_change}>
            <div className={styles.tool_description}>
              <img src={imagePath.iconDesign} alt="customize icon" />
              <h3 style={{fontSize: "24px"}}>{t("card_title_2")}</h3>
              <p style={{color: "rgb(173, 173, 173)"}}>{t("card_description_2")}</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className={styles.hover_change}>
            <div className={styles.tool_description}>
              <img src={imagePath.iconDownload} alt="download icon" />
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
