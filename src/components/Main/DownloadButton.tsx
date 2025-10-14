import { useState } from "react";
import styles from "./DownloadButton.module.css"
import arrow_down from "@assets/header/arrow_down.png";
import arrow_up from "@assets/header/arrow_up.png";
import download_icon from "@assets/main/download_icon.png";

type ButtonTextProps = {
  textButton: string;
  addClass?: string;
}

const DownloadButton = ({textButton, addClass}: ButtonTextProps) => {
  const [menu, showMenu] = useState(false)
  const [imgSelected, setImgFormat] = useState("");
  const imgFormats = [
    '.png', '.svg', '.jpeg'
  ]

  return (
    <div className={styles.download}>
    <button className={`${styles.download_button} ${addClass ?? ""}`} onClick={() => showMenu(!menu)}>
      <span>{textButton}</span>
      <img src={menu ? arrow_up : arrow_down} alt="arrow symbol"/>
    </button>

    {menu && 
      <div className={styles.menu_formats}>
        <div className={styles.padding_menu}>
          {imgFormats.map((format) => (
              <div
                key={format}
                className={styles.option_format}
              >
                <span>{format}</span>
                <img className={styles.img_download} src={download_icon} alt="download icon" />
              </div>
            ))}
        </div>
      </div>
      }
    </div>
  )
}

export default DownloadButton
