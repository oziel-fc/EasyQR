import { useState, useEffect, useRef } from "react";
import styles from "./DownloadButton.module.css"
import arrow_down from "@assets/header/arrow_down.png";
import arrow_up from "@assets/header/arrow_up.png";
import download_icon from "@assets/main/download_icon.png";
import useDownloadImage from "./DownloadImage";

type ButtonTextProps = {
  textButton: string;
  addClass?: string;
}

const DownloadButton = ({textButton, addClass}: ButtonTextProps) => {
  const [menu, showMenu] = useState(false)
  const imgFormats = [
    '.png', '.jpeg', '.webp'
  ]
  const { downloadFormatImg } = useDownloadImage();

  // Reference the button element
  const refWidthParent = useRef<HTMLDivElement>(null);
  const [widthButton, setWidthButton] = useState('')

  // Update the width value
  useEffect(() => {
    if (refWidthParent.current) {
      const Observer = new ResizeObserver(() => {
        const newWidth: string = `${refWidthParent.current?.offsetWidth}`
        setWidthButton(`${newWidth}px`)
      })
      Observer.observe(refWidthParent.current)
      return () => Observer.disconnect();
    }
  }, []);


  return (
    <div className={styles.download} ref={refWidthParent}> {/* Element referenced */}
    <button className={`${styles.download_button} ${addClass ?? ""}`} onClick={() => showMenu(!menu)}>
      <span>{textButton}</span>
      <img src={menu ? arrow_up : arrow_down} alt="arrow symbol"/>
    </button>

    {menu && 
      <div className={styles.size_menu} style={{width: `${widthButton}`}} > {/* Setting the width value */}
        <div className={styles.menu_formats}>
          <div className={styles.padding_menu}>
            {imgFormats.map((format) => (
                <div
                  key={format}
                  className={styles.option_format}
                  onClick={() => downloadFormatImg(format)}
                >
                  <span>{format}</span>
                  <img className={styles.img_download} src={download_icon} alt="download icon" />
                </div>
              ))}
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default DownloadButton
