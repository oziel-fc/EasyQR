import styles from './Main.module.css'
import ColorPicker from './ColorPicker'
import FontsPicker from './FontsPicker'
import InputText from './InputText'
import QRCode from './QRCode'
import GeneratorButton from './GeneratorButton'
import DownloadButton from './DownloadButton'
import { useState } from 'react'

const Main = () => {
  const [primaryColor, setPrimaryColor] = useState('#ffffff')
  const [secondaryColor, setSecondaryColor] = useState('#000000')

  return (
    <div className={styles.container}>
        <div className={styles.col_generator}>
          <div className={styles.center_col}>
            <div className={styles.settings_qr}>
              <div className={styles.top_row}>
                <FontsPicker/>
                <ColorPicker color={primaryColor} onChange={setPrimaryColor} titleItem='Background'/>
                <ColorPicker color={secondaryColor} onChange={setSecondaryColor} titleItem='Shape Color'/>
              </div>
                
              <InputText inputTitle='Enter your URL here' elementName='input url'/>
              <InputText inputTitle='Enter a description (optional)' elementName='input optional title'/>
            </div>
            <div className={styles.qr_code}>
              <QRCode/>
            </div>
            <div className={styles.generator_qr}>
              <GeneratorButton textButton='Generate QRCode'/>
              <DownloadButton textButton='Download QR'/>
            </div>
          </div>        
        </div>
    </div>
  )
}

export default Main
