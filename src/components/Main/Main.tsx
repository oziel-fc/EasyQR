import styles from './Main.module.css'
import ColorPicker from './ColorPicker'
import InputText from './InputText'
import QRCode from './QRCode'
// import GeneratorButton from './GeneratorButton'
import DownloadButton from './download/DownloadButton'
import { useState } from 'react'
import { useTranslation } from "react-i18next";

const Main = () => {
  const [primaryColor, setPrimaryColor] = useState("#020109")
  const [secondaryColor, setSecondaryColor] = useState("#1d1b2e")
  const [URLValue, setURLValue] = useState('')
  const [linkLogo, setLogo] = useState('')
  const { t } = useTranslation();

  return (
    <section className={styles.qr_container}>
        <div className={styles.col_generator}>
          <div className={styles.center_col}>
            <div className={styles.settings_qr}>
              <div className={styles.top_row}>
                <ColorPicker color={primaryColor} onChange={setPrimaryColor} titleItem={t("background")}/>
                <ColorPicker color={secondaryColor} onChange={setSecondaryColor} titleItem={t("shape")}/>
              </div>
                
              <InputText inputTitle={t("input_content")} elementName='input url' value={URLValue} onChange={setURLValue}/>
              <InputText inputTitle={t("input_logo")} elementName='input optional logo' value={linkLogo} onChange={setLogo}/>
            </div>
            <div className={styles.qr_code}>
              <QRCode backColor={primaryColor} shapeColor={secondaryColor} QRCodeValue={URLValue.trim()} externLogo={linkLogo}/>
            </div>
            <div className={styles.generator_qr}>
              {/* <GeneratorButton textButton='Generate QRCode' addClass={styles.lower_button}/> */}
              <DownloadButton textButton='Download QR' addClass={styles.lower_button}/>
            </div>
          </div>        
        </div>
    </section>
  )
}

export default Main
