import { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import styles from './Main.module.css'
import ColorPicker from './main_header/ColorPicker'
import SizeSelector from './main_header/SizePicker'
import InputText from './qrcode/InputText'
import QRCode from './qrcode/QRCode'
import DownloadButton from './download/DownloadButton'
import setSize from './main_header/setSize'
import useRgbaToHex from './main_header/rgbaToHex'


const Main = () => {
  const [primaryColor, setPrimaryColor] = useState("#020109")
  const [secondaryColor, setSecondaryColor] = useState("#1d1b2e")
  const [URLValue, setURLValue] = useState('')
  const [linkLogo, setLogo] = useState('')
  const { t } = useTranslation();
  const [selectedSize, setSelectedFont] = useState("")
  const getSize = (size: string) => {
    setSelectedFont(size)
  }

  // If the width page is minor than 600 return true for the isMobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)       // Boolean
  useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 600);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile version for Color Picker
  // Creating bgColor for mobile version
  const [bgColorMobile, setBgColorMobile] = useState("#020109");
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColorMobile(useRgbaToHex(primaryColor));
      console.log(bgColorMobile)
    }, 1000);

    return () => clearInterval(interval); 
  }, [primaryColor]);

  // fgColor for mobile version
  const [fgColorMobile, setFgColorMobile] = useState("#1d1b2e");
  useEffect(() => {
    const interval = setInterval(() => {
      setFgColorMobile(useRgbaToHex(secondaryColor));
      
    }, 1000);

    return () => clearInterval(interval); 
  }, [secondaryColor]);

  return (
    <section className={styles.qr_container}>
        <div className={styles.col_generator}>
          <div className={styles.center_col}>
            <div className={styles.settings_qr}>
              <div className={styles.top_row}>
                <ColorPicker color={primaryColor} onChange={setPrimaryColor} titleItem={t("background")}/>
                <ColorPicker color={secondaryColor} onChange={setSecondaryColor} titleItem={t("shape")}/>
                <SizeSelector titleSize={t("size")} onChange={getSize}/>
              </div>
              
              <InputText inputTitle={t("input_content")} elementName='input url' value={URLValue} onChange={setURLValue}/>
              <InputText inputTitle={t("input_logo")} elementName='input optional logo' value={linkLogo} onChange={setLogo}/>
            </div>
            <div className={styles.qr_code}>
              <QRCode backColor={!isMobile ? primaryColor : bgColorMobile} shapeColor={!isMobile ? secondaryColor : fgColorMobile} QRCodeValue={URLValue.trim()} externLogo={linkLogo} sizeLogo={setSize(selectedSize)}/>
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
